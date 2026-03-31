import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Users,
  Share2,
  MessageCircle,
  Star,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  FileText,
  Bot,
} from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'Social Media Management Services | True Rank Digital',
  description:
    'Social media management services from True Rank Digital: strategy, content, community, and reputation workflows that support AI-ready brand authority.',
  keywords:
    'social media management, social content strategy, community management, reputation management, brand authority, social media marketing',
  openGraph: {
    title: 'Social Media Management Services | True Rank Digital',
    description:
      'Build consistent brand authority across social channels with content strategy, community engagement, and conversion-focused execution.',
    url: 'https://truerankdigital.com/services/social-media',
    type: 'website',
  },
  alternates: {
    canonical: 'https://truerankdigital.com/services/social-media',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const deliveryAreas = [
  {
    icon: <Share2 className="w-6 h-6" />,
    title: 'Channel Strategy & Positioning',
    description:
      'We define the platform mix, messaging priorities, and posting framework based on your audience and growth goals.',
    bullets: [
      'Platform-by-platform strategy',
      'Audience and message alignment',
      'Offer and CTA sequencing',
    ],
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Content Operations',
    description:
      'We plan, create, and publish content with consistent brand language that supports trust and conversion behavior.',
    bullets: [
      'Editorial calendar and production cadence',
      'Content repurposing across channels',
      'Brand-consistent creative direction',
    ],
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'Community & Response Workflows',
    description:
      'We manage inbound interactions and review-adjacent conversations to keep engagement quality high.',
    bullets: [
      'Comment and message response standards',
      'Escalation pathways for sensitive responses',
      'Trust-preserving communication patterns',
    ],
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: 'AI-Ready Authority Signals',
    description:
      'We align social content with your site and entity signals so discovery systems can connect your brand footprint more clearly.',
    bullets: [
      'Cross-platform profile consistency',
      'Content themes mapped to service authority',
      'Signal alignment with website and GBP assets',
    ],
  },
];

const process = [
  {
    step: '01',
    title: 'Audit & Benchmarking',
    text: 'We evaluate your current social presence, engagement quality, and competitor content patterns.',
  },
  {
    step: '02',
    title: 'Strategy Build',
    text: 'We define channel priorities, messaging pillars, and an execution plan mapped to business goals.',
  },
  {
    step: '03',
    title: 'Publishing & Management',
    text: 'We run content delivery and community workflows with a consistent cadence and quality controls.',
  },
  {
    step: '04',
    title: 'Performance Optimization',
    text: 'We optimize based on engagement, lead quality, and content-level performance signals.',
  },
];

export default function SocialMediaPage() {
  const faqs = [
    {
      question: 'Which social platforms do you manage?',
      answer:
        'We manage strategy and execution across major platforms including Facebook, Instagram, LinkedIn, YouTube, TikTok, and X. Channel mix depends on your audience and growth goals.',
    },
    {
      question: 'How does social media help with search and AI visibility?',
      answer:
        'Consistent social signals reinforce brand authority and context. When social profiles, messaging, and service themes align with your website structure, discovery systems can interpret your brand more reliably.',
    },
    {
      question: 'Do you handle reviews and responses too?',
      answer:
        'Yes. We support response workflows for social interactions and review-adjacent channels so communication stays timely, professional, and conversion-aware.',
    },
    {
      question: 'How often will you post?',
      answer:
        'Posting cadence is customized by platform and business model. We prioritize consistency, quality, and performance insights over random volume.',
    },
    {
      question: 'How do you measure success?',
      answer:
        'We track engagement quality, reach, click behavior, lead actions, and assisted conversion indicators, then adjust content strategy based on what drives outcomes.',
    },
  ];

  return (
    <>
      <GEOSchema
        pageType="service"
        pageData={{
          title: 'Social Media Management by True Rank Digital',
          description:
            'Social media management services focused on strategic content, community engagement, and AI-ready brand authority signals.',
          url: 'https://truerankdigital.com/services/social-media',
          keywords: ['Social Media Management', 'Content Strategy', 'Community Management', 'Brand Authority'],
          category: 'Social Media Marketing Services',
          serviceType: 'Social Media Management',
          areaServed: ['United States'],
        }}
        breadcrumbs={[
          { name: 'Home', url: 'https://truerankdigital.com' },
          { name: 'Services', url: 'https://truerankdigital.com/services' },
          { name: 'Social Media Management', url: 'https://truerankdigital.com/services/social-media' },
        ]}
        entities={{
          primary: ['True Rank Digital', 'Social Media Management', 'Content Strategy'],
          secondary: ['Community Management', 'Brand Authority', 'Audience Engagement'],
        }}
      />

      <ServiceSchema
        serviceName="Social Media Management"
        serviceUrl="https://truerankdigital.com/services/social-media"
        description="Social media management service by True Rank Digital with channel strategy, content operations, community workflows, and AI-ready authority alignment."
        serviceType="Social Media Marketing"
      />

      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/services/social-media" category="service" />

      <article className="pt-16 min-h-screen bg-brand-obsidian text-white">
        <section className="py-16 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 rounded-full mb-6 border border-cyan-400/30">
                  <Users className="w-5 h-5 text-cyan-300" />
                  <span className="text-cyan-300 font-semibold text-sm">Social Media Management</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                  Build a Social Presence That <span className="text-brand-primary">Supports Real Growth</span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                  We manage your social channels with clear strategy, consistent execution, and conversion-aware messaging
                  so your brand stays visible, trusted, and aligned with your wider search footprint.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-cyan-500 text-black font-semibold text-lg rounded-full hover:bg-cyan-400 transition-colors duration-300"
                  >
                    <TrendingUp className="w-5 h-5" />
                    <span>Get Your Platform Audit</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 border border-white/20 text-white font-semibold text-lg rounded-full hover:bg-white/5 transition-colors duration-300"
                  >
                    <span>Talk to the Team</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-6">What This Solves</h2>
                <ul className="space-y-4">
                  {[
                    'Inconsistent social posting and messaging quality',
                    'Low engagement from the audiences that matter',
                    'Weak connection between social activity and lead generation',
                    'Disconnected brand signals across website, social, and local assets',
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-10 text-center">
              Core Delivery Areas
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {deliveryAreas.map((area) => (
                <div key={area.title} className="glass-card p-8">
                  <div className="text-cyan-300 mb-4">{area.icon}</div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-3">{area.title}</h3>
                  <p className="text-gray-400 mb-5">{area.description}</p>
                  <ul className="space-y-2">
                    {area.bullets.map((bullet) => (
                      <li key={bullet} className="text-gray-300 text-sm flex items-start space-x-2">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 border-y border-white/5 bg-white/2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-10 text-center">
              Implementation Model
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {process.map((item) => (
                <div key={item.step} className="glass-card p-6">
                  <div className="text-cyan-300 font-bold text-sm mb-2">STEP {item.step}</div>
                  <h3 className="text-xl font-heading font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Ready for Social Channels That Actually Support Pipeline?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              We will show you how to align your content, engagement, and authority signals for measurable growth.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-10 py-4 bg-cyan-500 text-black font-semibold text-lg rounded-full hover:bg-cyan-400 transition-colors duration-300"
            >
              <span>Get Your Platform Audit</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
