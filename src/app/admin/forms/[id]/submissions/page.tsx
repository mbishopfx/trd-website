/**
 * Form Submissions Viewer
 * View and manage submissions for a specific form
 */

import { redirect } from 'next/navigation';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';
import SubmissionsClient from './SubmissionsClient';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function SubmissionsPage({ params }: PageProps) {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) {
    redirect('/admin');
  }

  const { id } = await params;
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  // Get form details
  const { data: form, error: formError } = await supabase
    .from('forms')
    .select('*')
    .eq('id', id)
    .single();

  if (formError || !form) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Form Not Found</h1>
          <Link
            href="/admin/forms"
            className="text-blue-400 hover:text-blue-300"
          >
            ← Back to Forms
          </Link>
        </div>
      </div>
    );
  }

  // Get submissions
  const { data: submissions } = await supabase
    .from('form_submissions')
    .select('*')
    .eq('form_id', id)
    .order('created_at', { ascending: false });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/forms"
            className="text-blue-300 hover:text-blue-200 mb-2 inline-block"
          >
            ← Back to Forms
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">
            📊 Submissions: {form.title}
          </h1>
          <p className="text-gray-300">
            {submissions?.length || 0} total submissions
          </p>
        </div>

        {/* Submissions Table */}
        <SubmissionsClient
          formId={id}
          formFields={form.fields}
          initialSubmissions={submissions || []}
        />
      </main>
    </div>
  );
}

