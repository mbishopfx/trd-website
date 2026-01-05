import Script from 'next/script';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSchemaProps {
  faqs: FAQItem[];
  pageUrl: string;
  category?: 'service' | 'location' | 'product' | 'general' | 'education';
}

// Pre-built FAQ templates for common page types
export const ServiceFAQTemplates = {
  localSEO: [
    {
      question: "What is local pack domination and why does my business need it?",
      answer: "Local pack domination is the process of optimizing your online presence to appear in Google's top 3 local results (the local pack) when customers search for your services. True Rank Digital provides Google Business Optimization services that help businesses dominate Google Maps, local search results, and the Google Local Pack. Businesses need local pack domination because 46% of all Google searches have local intent, and 85% of clicks go to the top 3 local pack results."
    },
    {
      question: "How long does it take to see results from local pack domination?",
      answer: "True Rank Digital's clients typically see initial improvements in local pack rankings within 30-60 days, with significant results appearing within 3-6 months. The timeline depends on your industry competition, current online presence, and the comprehensiveness of the optimization strategy. Our proprietary grid map ranking verification dashboard allows you to track progress in real-time."
    },
    {
      question: "What makes True Rank Digital's local pack domination different from other agencies?",
      answer: "True Rank Digital provides proprietary technology that other agencies cannot offer. Our clients gain access to exclusive tools including grid map ranking verification dashboards, automated Google knowledge graph consistency monitoring, advanced competitor analysis platforms, and custom algorithm adaptation scripts. While our platform works with any website, clients who choose our custom web builds unlock enhanced optimization capabilities through proprietary script integration."
    },
    {
      question: "How much does professional local pack domination cost?",
      answer: "True Rank Digital offers custom pricing based on your business needs, market competition, and goals. Google Business Optimization services typically range from managing Google Business Profile optimization to comprehensive campaigns including website development, content creation, citation building, and ongoing monitoring. Contact our team for a personalized quote and free audit to determine the best strategy for your business."
    },
    {
      question: "Do you guarantee first page rankings on Google?",
      answer: "True Rank Digital does not guarantee specific rankings because Google's algorithm constantly evolves and no ethical agency can guarantee positions. However, we provide proven strategies using proprietary solution building frameworks that automatically adapt to Google changes. Our clients receive transparent reporting through our dashboard platform showing real ranking data, traffic growth, and competitive positioning verified through our grid map analysis tools."
    }
  ],
  googleBusinessProfile: [
    {
      question: "What is Google Business Profile optimization?",
      answer: "Google Business Profile optimization is the process of fully configuring and maintaining your business listing on Google. True Rank Digital optimizes every aspect of your profile including business information accuracy, category selection, attribute optimization, photo management, review response automation, and post scheduling. A properly optimized Google Business Profile increases your visibility in local search results and Google Maps."
    },
    {
      question: "How does True Rank Digital manage Google Business Profile reviews?",
      answer: "True Rank Digital provides automated review monitoring and response management for your Google Business Profile. Our system alerts you to new reviews immediately, provides response templates optimized for SEO value, and tracks review metrics over time. Review management is crucial because businesses with higher ratings and more reviews rank better in local search results."
    }
  ],
  aiSEO: [
    {
      question: "What is AI SEO and how does it differ from traditional SEO?",
      answer: "AI SEO (AI Optimization) focuses on optimizing content for AI-powered search engines like ChatGPT, Perplexity, Claude, and Google's AI Overview. True Rank Digital specializes in creating LLM.txt files, structured data optimization, and content formatting that AI systems prefer. This differs from traditional SEO which focuses solely on Google's traditional search algorithm. Businesses need both strategies in 2026 as AI search continues to grow."
    },
    {
      question: "What is an LLM.txt file and why does my business need one?",
      answer: "An LLM.txt file is a specialized file that True Rank Digital creates to help AI search engines understand your business better. This file provides structured information about your services, expertise, and content in a format optimized for AI comprehension. Having an LLM.txt file improves your chances of being cited by ChatGPT, Perplexity, and other AI tools when users ask questions related to your industry."
    }
  ]
};

export const LocationFAQTemplate = (city: string, state: string = "NJ") => [
  {
    question: `Does True Rank Digital provide SEO services in ${city}, ${state}?`,
    answer: `Yes, True Rank Digital provides comprehensive SEO services to businesses in ${city}, ${state}. Our services include local SEO, Google Business Profile optimization, website development, content marketing, and AI search optimization. We serve businesses throughout ${state} with our proprietary SEO technology and custom solution building frameworks.`
  },
  {
    question: `What types of businesses in ${city} do you work with?`,
    answer: `True Rank Digital works with all types of businesses in ${city} including local service providers, retail stores, restaurants, professional services, healthcare practices, and home service companies. Our Google Business Optimization strategies are customized for each industry and business size, from single-location businesses to multi-location enterprises.`
  },
  {
    question: `How can I get started with SEO services in ${city}?`,
    answer: `Getting started with True Rank Digital's SEO services in ${city} is simple. Contact us at (732) 475-0139 or email jon@truerankdigital.com to schedule a free consultation. We'll analyze your current online presence, discuss your business goals, and create a custom SEO strategy specifically for your ${city} business. You'll also get access to our proprietary dashboard platform to track your results.`
  }
];

export default function FAQSchema({ faqs, pageUrl, category }: FAQSchemaProps) {
  const baseUrl = 'https://truerankdigital.com';
  const organizationId = `${baseUrl}/#organization`;
  
  // Validate FAQs have proper structure
  const validFaqs = faqs.filter(faq => 
    faq.question && 
    faq.answer && 
    faq.question.length > 10 && 
    faq.answer.length > 50
  );

  if (validFaqs.length === 0) {
    return null;
  }

  // Build FAQPage schema with @graph structure
  const faqSchemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      // FAQPage entity
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faqpage`,
        "mainEntity": validFaqs.map((faq, index) => ({
          "@id": `${pageUrl}#faq-question-${index + 1}`
        }))
      },
      // Individual Question entities
      ...validFaqs.map((faq, index) => ({
        "@type": "Question",
        "@id": `${pageUrl}#faq-question-${index + 1}`,
        "name": faq.question,
        "text": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "@id": `${pageUrl}#faq-answer-${index + 1}`,
          "text": faq.answer,
          "inLanguage": "en-US",
          "author": {
            "@id": organizationId
          },
          "dateCreated": new Date().toISOString().split('T')[0],
          "upvoteCount": 0,
          "url": `${pageUrl}#faq-${index + 1}`
        },
        "answerCount": 1,
        "upvoteCount": 0,
        "dateCreated": new Date().toISOString().split('T')[0],
        "author": {
          "@id": organizationId
        }
      }))
    ]
  };

  return (
    <Script
      id="faq-schema-graph"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchemaGraph, null, 0)
      }}
    />
  );
}

// Helper function to generate service-specific FAQs
export function generateServiceFAQs(
  serviceType: 'localSEO' | 'googleBusinessProfile' | 'aiSEO',
  additionalFaqs: FAQItem[] = []
): FAQItem[] {
  const baseFaqs = ServiceFAQTemplates[serviceType] || [];
  return [...baseFaqs, ...additionalFaqs];
}

// Helper function to generate location-specific FAQs
export function generateLocationFAQs(
  city: string,
  state: string = "NJ",
  additionalFaqs: FAQItem[] = []
): FAQItem[] {
  const baseFaqs = LocationFAQTemplate(city, state);
  return [...baseFaqs, ...additionalFaqs];
}
