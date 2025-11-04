/**
 * QR Codes List API
 * Get all generated QR codes
 */

import { NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export async function GET() {
  try {
    // Check admin authentication
    const isAuth = await isAdminAuthenticated();
    if (!isAuth) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data, error } = await supabase
      .from('qr_codes')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching QR codes:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to fetch QR codes' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      qrCodes: data || [],
    });
  } catch (error) {
    console.error('QR codes fetch error:', error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Fetch failed',
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    // Check admin authentication
    const isAuth = await isAdminAuthenticated();
    if (!isAuth) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, message: 'QR code ID required' },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error } = await supabase
      .from('qr_codes')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting QR code:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to delete QR code' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'QR code deleted successfully',
    });
  } catch (error) {
    console.error('QR code delete error:', error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Delete failed',
      },
      { status: 500 }
    );
  }
}

