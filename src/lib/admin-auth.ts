/**
 * Admin Authentication Utility
 * Simple password-based authentication for admin panel
 */

import { cookies } from 'next/headers';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'TRD2025!!!';
const ADMIN_COOKIE_NAME = 'trd_admin_auth';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

/**
 * Verify admin password
 */
export function verifyAdminPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

/**
 * Set admin authentication cookie
 */
export async function setAdminAuth() {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE_NAME, 'authenticated', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: COOKIE_MAX_AGE,
    path: '/',
  });
}

/**
 * Check if user is authenticated as admin
 */
export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get(ADMIN_COOKIE_NAME);
  return authCookie?.value === 'authenticated';
}

/**
 * Clear admin authentication
 */
export async function clearAdminAuth() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE_NAME);
}

/**
 * Middleware helper to require admin authentication
 * Returns true if authenticated, false otherwise
 */
export async function requireAdminAuth(): Promise<boolean> {
  return await isAdminAuthenticated();
}

