export type CaseStudyRecord = {
  slug: string;
  title: string;
  shortTitle: string;
  industry: string;
  specialty?: string;
  icp: string;
  description: string;
  challenge: string;
  strategySummary: string;
  solutionBullets: string[];
  outcomes: string[];
  momentum: string[];
  footerDescription: string;
  accent: string;
  publishedDate: string;
  metrics: Array<{
    label: string;
    value: string;
    context: string;
  }>;
};

export const caseStudies: CaseStudyRecord[] = [
  {
    slug: 'physical-therapy-patient-lead-growth',
    title: 'How True Rank Digital Scaled Patient Lead Volume by 350% for a Local Physical Therapist',
    shortTitle: 'Physical Therapy Lead Growth',
    industry: 'Physical Therapy',
    specialty: 'MedicalSpecialty',
    icp: 'Local physical therapy practice competing in a crowded medical market where map visibility, “near me” discovery, and clinical authority signals directly influenced patient acquisition.',
    description:
      'A local physical therapy practice started the quarter with a weak digital footprint and only 6 inbound calls per month from Google Business Profile. The brand was barely surfacing for high-intent local searches, which meant patients who were actively looking for care never saw the practice at the moment they were ready to book.',
    challenge:
      'The practice had low map-pack visibility, limited search appearances, and weak entity signals. Search engines had little confidence in the clinic’s geographic or clinical authority, which suppressed exposure for “physical therapy near me” and other high-intent local terms.',
    strategySummary:
      'True Rank Digital executed a local growth framework built around entity recognition, clinical relevance, and local-intent capture. The objective was not just more impressions. It was to make the practice the obvious nearby answer for patients in pain who were ready to act.',
    solutionBullets: [
      'Aligned website technical data and schema markup so the practice was recognized as the definitive clinical authority in its target zip code',
      'Overhauled Google Business Profile categories, service-level signals, and local-intent targeting to capture more “near me” demand',
      'Built review and reputation momentum workflows that increased trust signals for both patients and ranking systems',
      'Structured content and entity signals for AI-driven answer engines so the clinic could appear as a recommended provider beyond standard search results',
    ],
    outcomes: [
      'Google Search appearances increased from 275 to 547 in a single quarter, a 98.9% growth in total visibility',
      'Inbound patient calls jumped from 6 per month to 27 per month, producing a 350% increase in call-driven lead volume',
      'Direction requests increased by 300%, signaling a major lift in physical visit intent and local market presence',
    ],
    momentum: [
      'Significantly stronger local-pack competitiveness for core physical therapy keywords',
      'Sustained patient lead flow without increasing ad spend',
      'Clearer authority signals across both traditional search and AI-assisted discovery surfaces',
    ],
    footerDescription:
      'Entity Signal Mapping, GBP optimization, and local-intent execution that lifted patient calls by 350% in one quarter.',
    accent: 'from-cyan-500/20 to-blue-500/20',
    publishedDate: '2024-10-25',
    metrics: [
      {
        label: 'Search appearances',
        value: '275 to 547',
        context: '+98.9% total search visibility',
      },
      {
        label: 'Inbound patient calls',
        value: '6 to 27',
        context: '+350% monthly call volume',
      },
      {
        label: 'Direction requests',
        value: '+300%',
        context: 'Major increase in visit intent',
      },
    ],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
