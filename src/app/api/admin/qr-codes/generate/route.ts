/**
 * QR Code Generation API
 * Generates QR codes and stores them in Supabase
 */

import { NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import QRCode from 'qrcode';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export async function POST(request: Request) {
  try {
    // Check admin authentication
    const isAuth = await isAdminAuthenticated();
    if (!isAuth) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { title, url, pageType } = body;

    if (!title || !url) {
      return NextResponse.json(
        { success: false, message: 'Title and URL are required' },
        { status: 400 }
      );
    }

    console.log('🔲 Generating QR code for:', url);

    // Generate QR code as data URL
    const qrCodeDataUrl = await QRCode.toDataURL(url, {
      width: 1000,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF',
      },
      errorCorrectionLevel: 'H', // High error correction
    });

    // Convert data URL to buffer
    const base64Data = qrCodeDataUrl.replace(/^data:image\/png;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    // Create Supabase client
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Generate unique filename
    const timestamp = Date.now();
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const filename = `qr-codes/${timestamp}-${slug}.png`;

    // Upload to Supabase storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('truerankdigital')
      .upload(filename, buffer, {
        contentType: 'image/png',
        cacheControl: '31536000', // Cache for 1 year
      });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      return NextResponse.json(
        { success: false, message: 'Failed to upload QR code' },
        { status: 500 }
      );
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('truerankdigital')
      .getPublicUrl(filename);

    const qrCodeUrl = urlData.publicUrl;

    console.log('✅ QR code uploaded:', qrCodeUrl);

    // Save to database
    const { data: dbData, error: dbError } = await supabase
      .from('qr_codes')
      .insert({
        title,
        url,
        qr_code_url: qrCodeUrl,
        page_type: pageType || 'manual',
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { success: false, message: 'Failed to save QR code to database' },
        { status: 500 }
      );
    }

    console.log('💾 QR code saved to database');

    return NextResponse.json({
      success: true,
      message: 'QR code generated successfully',
      qrCode: {
        id: dbData.id,
        title: dbData.title,
        url: dbData.url,
        qrCodeUrl: dbData.qr_code_url,
        pageType: dbData.page_type,
        createdAt: dbData.created_at,
      },
    });
  } catch (error) {
    console.error('QR code generation error:', error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Generation failed',
      },
      { status: 500 }
    );
  }
}

