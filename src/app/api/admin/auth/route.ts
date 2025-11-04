/**
 * Admin Authentication API
 * Handles login and password verification
 */

import { NextResponse } from 'next/server';
import { verifyAdminPassword, setAdminAuth } from '@/lib/admin-auth';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json(
        { success: false, message: 'Password required' },
        { status: 400 }
      );
    }

    const isValid = verifyAdminPassword(password);

    if (isValid) {
      await setAdminAuth();
      return NextResponse.json({
        success: true,
        message: 'Authentication successful',
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid password' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { success: false, message: 'Authentication failed' },
      { status: 500 }
    );
  }
}

