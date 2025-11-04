/**
 * Form Builder Page
 * Create and edit custom forms
 */

import { redirect } from 'next/navigation';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import FormBuilder from '@/components/FormBuilder';

export default async function FormBuilderPage() {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) {
    redirect('/admin');
  }

  return <FormBuilder />;
}

