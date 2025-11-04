/**
 * Form Submissions Management API
 * View and manage form submissions
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

    // Get all submissions for this form
    const { data: submissions, error } = await supabase
      .from('form_submissions')
      .select('*')
      .eq('form_id', id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching submissions:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to fetch submissions' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      submissions: submissions || [],
    });
  } catch (error) {
    console.error('Submissions fetch error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch submissions' },
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

    const { searchParams } = new URL(request.url);
    const submissionId = searchParams.get('submissionId');

    if (!submissionId) {
      return NextResponse.json(
        { success: false, message: 'Submission ID required' },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Delete submission
    const { error } = await supabase
      .from('form_submissions')
      .delete()
      .eq('id', submissionId);

    if (error) {
      console.error('Submission delete error:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to delete submission' },
        { status: 500 }
      );
    }

    console.log('🗑️ Submission deleted:', submissionId);

    return NextResponse.json({
      success: true,
      message: 'Submission deleted successfully',
    });
  } catch (error) {
    console.error('Submission delete error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to delete submission' },
      { status: 500 }
    );
  }
}

