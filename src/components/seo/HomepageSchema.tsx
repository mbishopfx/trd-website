interface HomepageSchemaProps {
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

export default function HomepageSchema({ faqs = [] }: HomepageSchemaProps) {
  if (faqs.length === 0) return null;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <script
      id="homepage-faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
