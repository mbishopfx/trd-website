/**
 * Public Form Page
 * Displays custom lead capture forms
 */

import { notFound } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import DynamicForm from '@/components/DynamicForm';
import Link from 'next/link';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  const { data: form } = await supabase
    .from('forms')
    .select('title, description')
    .eq('slug', slug)
    .eq('is_active', true)
    .single();

  if (!form) {
    return {
      title: 'Form Not Found',
    };
  }

  return {
    title: `${form.title} | True Rank Digital`,
    description: form.description || 'Fill out this form to get in touch with us',
  };
}

export default async function FormPage({ params }: PageProps) {
  const { slug } = await params;
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  // Fetch form data
  const { data: form, error } = await supabase
    .from('forms')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single();

  if (error || !form) {
    notFound();
  }

  // Schema.org structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: form.title,
    description: form.description,
    url: `https://truerankdigital.com/forms/${slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'True Rank Digital',
      url: 'https://truerankdigital.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-black pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <Link
              href="/"
              className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-6 transition-colors"
            >
              <span className="mr-2">←</span>
              Back to Home
            </Link>
            <h1 className="text-5xl font-bold mb-4">{form.title}</h1>
            {form.description && (
              <p className="text-xl text-gray-200">{form.description}</p>
            )}
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-3xl mx-auto px-4 py-16">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <DynamicForm form={form} />
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 text-center text-gray-400 text-sm">
            <p className="flex items-center justify-center gap-2 mb-2">
              <span className="text-green-400">🔒</span>
              Your information is secure and will never be shared
            </p>
            <p>
              Powered by{' '}
              <Link href="/" className="text-blue-400 hover:text-blue-300">
                True Rank Digital
              </Link>
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 mt-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Help Growing Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              We specialize in AI-powered search visibility and modern SEO strategies
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

