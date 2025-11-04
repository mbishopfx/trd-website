/**
 * Forms Management API
 * Create and list custom forms
 */

import { NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { createClient } from '@supabase/supabase-js';
import QRCode from 'qrcode';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://truerankdigital.com';

export async function GET() {
  try {
    const isAuth = await isAdminAuthenticated();
    if (!isAuth) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get all forms with submission counts
    const { data: forms, error } = await supabase
      .from('forms')
      .select(`
        *,
        submissions:form_submissions(count)
      `)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching forms:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to fetch forms' },
        { status: 500 }
      );
    }

    // Transform submission counts
    const formsWithCounts = forms.map(form => ({
      ...form,
      submission_count: form.submissions?.[0]?.count || 0,
      submissions: undefined,
    }));

    return NextResponse.json({
      success: true,
      forms: formsWithCounts,
    });
  } catch (error) {
    console.error('Forms fetch error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch forms' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const isAuth = await isAdminAuthenticated();
    if (!isAuth) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { title, description, fields, settings } = body;

    if (!title || !fields || !Array.isArray(fields)) {
      return NextResponse.json(
        { success: false, message: 'Title and fields are required' },
        { status: 400 }
      );
    }

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Check if slug already exists
    const { data: existing } = await supabase
      .from('forms')
      .select('id')
      .eq('slug', slug)
      .single();

    if (existing) {
      return NextResponse.json(
        { success: false, message: 'A form with this title already exists' },
        { status: 400 }
      );
    }

    console.log('📝 Creating form:', title);

    // Generate QR code for the form
    const formUrl = `${siteUrl}/forms/${slug}`;
    const qrCodeDataUrl = await QRCode.toDataURL(formUrl, {
      width: 1000,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF',
      },
      errorCorrectionLevel: 'H',
    });

    // Convert data URL to buffer
    const base64Data = qrCodeDataUrl.replace(/^data:image\/png;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    // Upload QR code to Supabase storage
    const timestamp = Date.now();
    const qrFilename = `qr-codes/${timestamp}-form-${slug}.png`;

    const { error: uploadError } = await supabase.storage
      .from('truerankdigital')
      .upload(qrFilename, buffer, {
        contentType: 'image/png',
        cacheControl: '31536000',
      });

    if (uploadError) {
      console.error('QR upload error:', uploadError);
    }

    // Get public URL for QR code
    const { data: urlData } = supabase.storage
      .from('truerankdigital')
      .getPublicUrl(qrFilename);

    const qrCodeUrl = urlData.publicUrl;

    console.log('✅ QR code generated:', qrCodeUrl);

    // Create form in database
    const { data: form, error: createError } = await supabase
      .from('forms')
      .insert({
        title,
        slug,
        description: description || null,
        fields,
        settings: settings || {},
        qr_code_url: qrCodeUrl,
        is_active: true,
      })
      .select()
      .single();

    if (createError) {
      console.error('Form create error:', createError);
      return NextResponse.json(
        { success: false, message: 'Failed to create form' },
        { status: 500 }
      );
    }

    console.log('💾 Form created successfully');

    return NextResponse.json({
      success: true,
      message: 'Form created successfully',
      form: {
        ...form,
        submission_count: 0,
      },
    });
  } catch (error) {
    console.error('Form creation error:', error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Creation failed',
      },
      { status: 500 }
    );
  }
}

