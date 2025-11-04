/**
 * Public Form API
 * Get form by slug and submit form data
 */

import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { headers } from 'next/headers';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(request: Request, context: RouteContext) {
  try {
    const { slug } = await context.params;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get active form by slug
    const { data: form, error } = await supabase
      .from('forms')
      .select('id, title, description, fields, settings, slug')
      .eq('slug', slug)
      .eq('is_active', true)
      .single();

    if (error || !form) {
      return NextResponse.json(
        { success: false, message: 'Form not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      form,
    });
  } catch (error) {
    console.error('Form fetch error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch form' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request, context: RouteContext) {
  try {
    const { slug } = await context.params;
    const body = await request.json();
    const { data } = body;

    if (!data || typeof data !== 'object') {
      return NextResponse.json(
        { success: false, message: 'Form data is required' },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get form by slug to verify it exists and is active
    const { data: form, error: formError } = await supabase
      .from('forms')
      .select('id, fields, is_active')
      .eq('slug', slug)
      .eq('is_active', true)
      .single();

    if (formError || !form) {
      return NextResponse.json(
        { success: false, message: 'Form not found or inactive' },
        { status: 404 }
      );
    }

    // Validate required fields
    const requiredFields = form.fields.filter((f: any) => f.required);
    for (const field of requiredFields) {
      if (!data[field.id] || data[field.id] === '') {
        return NextResponse.json(
          { success: false, message: `Field "${field.label}" is required` },
          { status: 400 }
        );
      }
    }

    // Get client info
    const headersList = await headers();
    const ip = headersList.get('x-forwarded-for') || 
               headersList.get('x-real-ip') || 
               'unknown';
    const userAgent = headersList.get('user-agent') || 'unknown';

    // Create submission
    const { data: submission, error: submitError } = await supabase
      .from('form_submissions')
      .insert({
        form_id: form.id,
        data,
        ip_address: ip,
        user_agent: userAgent,
      })
      .select()
      .single();

    if (submitError) {
      console.error('Submission error:', submitError);
      return NextResponse.json(
        { success: false, message: 'Failed to submit form' },
        { status: 500 }
      );
    }

    console.log('✅ Form submitted:', form.id);

    // TODO: Trigger email notification here
    // Send notification email to admin about new submission

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      submissionId: submission.id,
    });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit form' },
      { status: 500 }
    );
  }
}

