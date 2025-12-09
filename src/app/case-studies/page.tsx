import type { Metadata } from 'next';
import { Award, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'SEO Case Studies & Success Stories | True Rank Digital',
  description: 'Explore True Rank Digital\'s SEO case studies and success stories showcasing real results for businesses across industries.',
  keywords: 'SEO case studies, success stories, True Rank Digital, SEO results, client testimonials',
  alternates: { canonical: 'https://truerankdigital.com/case-studies' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function CaseStudiesPage() {
  const faqs = [{ question: "What results does True Rank Digital achieve?", answer: "True Rank Digital has helped businesses achieve significant results including 200%+ increases in organic traffic, first-page Google rankings for competitive keywords, improved Google Maps visibility, and substantial growth in leads and revenue. Our case studies showcase real results across diverse industries." }];

  return (
    <>
      <GEOSchema pageType="webpage" pageData={{ title: "True Rank Digital SEO Case Studies and Success Stories", description: "Explore case studies showing real SEO results for businesses.", url: "https://truerankdigital.com/case-studies", keywords: ["SEO case studies", "success stories"], category: "Case Studies" }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Case Studies", url: "https://truerankdigital.com/case-studies" }]} entities={{ primary: ["True Rank Digital", "Case Studies", "SEO Results"] }} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/case-studies" category="general" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-yellow-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6"><strong className="text-brand-primary">True Rank Digital</strong> SEO Case Studies and Success Stories</h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12">Explore <strong>True Rank Digital's</strong> proven track record with <strong>SEO case studies</strong> and success stories showcasing real results for businesses.</p><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><Award className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">See Our <strong className="text-brand-primary">Success</strong> Stories</h2><a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-yellow-600 text-white font-semibold text-lg rounded-full hover:bg-yellow-700 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Get Similar Results</span></a></div></div></section></article>
    </>
  );
}
