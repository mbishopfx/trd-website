/**
 * Single Form Management API
 * Get, update, and delete individual forms
 */

import { NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(request: Request, context: RouteContext) {
  try {
    const isAuth = await isAdminAuthenticated();
    if (!isAuth) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = await context.params;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data: form, error } = await supabase
      .from('forms')
      .select(`
        *,
        submissions:form_submissions(count)
      `)
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching form:', error);
      return NextResponse.json(
        { success: false, message: 'Form not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      form: {
        ...form,
        submission_count: form.submissions?.[0]?.count || 0,
        submissions: undefined,
      },
    });
  } catch (error) {
    console.error('Form fetch error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch form' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request, context: RouteContext) {
  try {
    const isAuth = await isAdminAuthenticated();
    if (!isAuth) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = await context.params;
    const body = await request.json();
    const { title, description, fields, settings, is_active } = body;

    if (!title || !fields || !Array.isArray(fields)) {
      return NextResponse.json(
        { success: false, message: 'Title and fields are required' },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Update form
    const { data: form, error } = await supabase
      .from('forms')
      .update({
        title,
        description: description || null,
        fields,
        settings: settings || {},
        is_active: is_active !== undefined ? is_active : true,
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Form update error:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to update form' },
        { status: 500 }
      );
    }

    console.log('✅ Form updated:', form.slug);

    return NextResponse.json({
      success: true,
      message: 'Form updated successfully',
      form,
    });
  } catch (error) {
    console.error('Form update error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update form' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, context: RouteContext) {
  try {
    const isAuth = await isAdminAuthenticated();
    if (!isAuth) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = await context.params;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Delete form (will cascade delete submissions)
    const { error } = await supabase
      .from('forms')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Form delete error:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to delete form' },
        { status: 500 }
      );
    }

    console.log('🗑️ Form deleted:', id);

    return NextResponse.json({
      success: true,
      message: 'Form deleted successfully',
    });
  } catch (error) {
    console.error('Form delete error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to delete form' },
      { status: 500 }
    );
  }
}

