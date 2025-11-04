/**
 * Forms List Page
 * View and manage all forms
 */

import { redirect } from 'next/navigation';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import FormsListClient from './FormsListClient';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export default async function FormsListPage() {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) {
    redirect('/admin');
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  // Get all forms with submission counts
  const { data: forms } = await supabase
    .from('forms')
    .select(`
      *,
      submissions:form_submissions(count)
    `)
    .order('created_at', { ascending: false });

  const formsWithCounts = forms?.map(form => ({
    ...form,
    submission_count: form.submissions?.[0]?.count || 0,
  })) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link
              href="/admin/dashboard"
              className="text-blue-300 hover:text-blue-200 mb-2 inline-block"
            >
              ← Back to Dashboard
            </Link>
            <h1 className="text-4xl font-bold text-white mb-2">📋 Forms Management</h1>
            <p className="text-gray-300">Create and manage lead capture forms</p>
          </div>
          <Link
            href="/admin/forms/builder"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            + Create New Form
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <div className="text-gray-400 text-sm mb-2">Total Forms</div>
            <div className="text-3xl font-bold text-white">{formsWithCounts.length}</div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <div className="text-gray-400 text-sm mb-2">Active Forms</div>
            <div className="text-3xl font-bold text-green-400">
              {formsWithCounts.filter(f => f.is_active).length}
            </div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <div className="text-gray-400 text-sm mb-2">Total Submissions</div>
            <div className="text-3xl font-bold text-blue-400">
              {formsWithCounts.reduce((sum, f) => sum + (f.submission_count || 0), 0)}
            </div>
          </div>
        </div>

        {/* Forms List */}
        <FormsListClient initialForms={formsWithCounts} />
      </main>
    </div>
  );
}

