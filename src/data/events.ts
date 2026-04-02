export type EventSpeaker = {
  name: string;
  role: string;
};

export type EventRecord = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  teaser: string;
  description: string;
  venue: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  startDateIso: string;
  endDateIso: string;
  displayDate: string;
  displayTime: string;
  heroImage: string;
  perks: string[];
  audience: string[];
  takeaways: Array<{
    title: string;
    description: string;
  }>;
  agenda: Array<{
    title: string;
    description: string;
  }>;
  speakers: EventSpeaker[];
  mapUrl: string;
  urgencyLine: string;
  giveaway: {
    title: string;
    description: string;
    legalLine: string;
  };
};

export const brewingWithSuccessEvent: EventRecord = {
  slug: 'brewing-with-success-ai-local-search',
  title: 'Brewing With Success: How AI Is Changing Local Search',
  shortTitle: 'Brewing With Success',
  eyebrow: 'A powerhouse collaboration between True Rank Digital and LeGrand Coffee House',
  teaser:
    'A high-signal live session for local business owners who want the blueprint for winning visibility as AI reshapes local discovery.',
  description:
    'On Tuesday, April 28, 2026, Jon J Korkowski and Eric LeGrand are bringing local business owners together in Woodbridge for a direct session on how AI is changing local search, customer discovery, and competitive visibility. This is not a theory-heavy talk. It is a practical breakdown of the strategies businesses need right now to protect market share, earn more local attention, and stay ahead of slower competitors.',
  venue: 'LeGrand Coffee House',
  streetAddress: '10 Green Street',
  city: 'Woodbridge',
  state: 'NJ',
  postalCode: '07095',
  startDateIso: '2026-04-28T14:00:00-04:00',
  endDateIso: '2026-04-28T15:00:00-04:00',
  displayDate: 'Tuesday, April 28, 2026',
  displayTime: '2:00 PM to 3:00 PM ET',
  heroImage: '/events/brewing-with-success-woodbridge.jpg',
  perks: ['Free coffee', 'Massive giveaways', 'Actionable local AI search blueprint'],
  audience: [
    'Local business owners who depend on search, maps, and word-of-mouth discovery',
    'Operators who want to understand how AI overviews and answer engines affect lead flow',
    'Brands that know competitors are already adapting and do not want to fall behind',
  ],
  takeaways: [
    {
      title: 'How AI is rewiring local discovery',
      description:
        'Understand what is changing in search behavior, map visibility, and AI-assisted recommendations so you can react before rankings and calls slip.',
    },
    {
      title: 'The visibility blueprint that matters now',
      description:
        'See the exact strategic pillars True Rank Digital uses to help local businesses strengthen relevance, authority, and conversion across modern search surfaces.',
    },
    {
      title: 'What to fix first for fastest momentum',
      description:
        'Identify the highest-leverage moves for local businesses that need stronger visibility without wasting months on low-impact busywork.',
    },
    {
      title: 'Where local brands lose ground',
      description:
        'Learn the common mistakes businesses make when AI starts influencing search results and how to avoid being outranked by better-prepared competitors.',
    },
  ],
  agenda: [
    {
      title: 'Local search is entering a new era',
      description:
        'A direct look at how AI is shifting the way customers discover and evaluate businesses near them.',
    },
    {
      title: 'What digital dominance actually requires',
      description:
        'A breakdown of the systems, visibility signals, and execution standards that separate leaders from businesses that get filtered out.',
    },
    {
      title: 'Q&A, giveaways, and real conversation',
      description:
        'Stay for the giveaways, grab coffee, and ask pointed questions about your own market and growth pressure.',
    },
  ],
  speakers: [
    {
      name: 'Jon J Korkowski',
      role: 'CEO and Founder, True Rank Digital',
    },
    {
      name: 'Eric LeGrand',
      role: 'Woodbridge legend and LeGrand Coffee House collaborator',
    },
  ],
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=10+Green+Street+Woodbridge+NJ+07095',
  urgencyLine:
    'The businesses that understand AI-assisted local search first will collect more attention, more trust, and more market share while everyone else is still reacting.',
  giveaway: {
    title: 'Free Mac Mini raffle entry with RSVP',
    description:
      'RSVP for the event and you are entered for a free Mac Mini raffle while spots last. Show up, learn something sharp, and leave with a legitimate shot at a serious giveaway.',
    legalLine: 'No cost to attend. No purchase required to RSVP or enter the raffle.',
  },
};

export const events = [brewingWithSuccessEvent];

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}
