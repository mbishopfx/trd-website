/**
 * Admin Setup API
 * Ensures Supabase storage bucket exists
 */

import { NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { ensureBucketExists } from '@/lib/supabase-storage';

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

    console.log('🔧 Running storage setup...');

    // Ensure bucket exists
    const bucketCreated = await ensureBucketExists();

    if (bucketCreated) {
      return NextResponse.json({
        success: true,
        message: 'Storage bucket configured successfully',
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to configure storage bucket',
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Setup error:', error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Setup failed',
      },
      { status: 500 }
    );
  }
}

