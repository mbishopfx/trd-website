import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Coffee,
  Gift,
  MapPin,
  Mic2,
  Phone,
  Sparkles,
  Target,
} from 'lucide-react';
import { events, getEventBySlug } from '@/data/events';
import { siteIdentity } from '@/lib/seo/siteIdentity';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return {
      title: 'Event Not Found | True Rank Digital',
    };
  }

  const canonical = `${siteIdentity.url}/events/${event.slug}`;
  const imageUrl = `${siteIdentity.url}${event.heroImage}`;

  return {
    title: `${event.title} | True Rank Digital`,
    description: event.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: event.title,
      description: event.description,
      url: canonical,
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1195,
          height: 896,
          alt: event.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: event.title,
      description: event.description,
      images: [imageUrl],
    },
  };
}

export function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const canonical = `${siteIdentity.url}/events/${event.slug}`;
  const imageUrl = `${siteIdentity.url}${event.heroImage}`;

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.description,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    startDate: event.startDateIso,
    endDate: event.endDateIso,
    image: [imageUrl],
    url: canonical,
    organizer: {
      '@type': 'Organization',
      name: siteIdentity.brandName,
      url: siteIdentity.url,
      telephone: siteIdentity.telephone,
      email: siteIdentity.email,
    },
    location: {
      '@type': 'Place',
      name: event.venue,
      address: {
        '@type': 'PostalAddress',
        addressLocality: event.city,
        addressRegion: event.state,
        addressCountry: 'US',
      },
    },
    performer: event.speakers.map((speaker) => ({
      '@type': 'Person',
      name: speaker.name,
      jobTitle: speaker.role,
    })),
    offers: {
      '@type': 'Offer',
      url: canonical,
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'USD',
      validFrom: '2026-04-02T00:00:00-04:00',
    },
  };

  return (
    <>
      <Script
        id={`event-schema-${event.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />

      <article className="min-h-screen pt-28 text-white">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,157,61,0.22),transparent_34%),radial-gradient(circle_at_top_right,rgba(0,245,255,0.18),transparent_34%),linear-gradient(180deg,#050505_0%,#08121b_52%,#050505_100%)]" />
          <div className="absolute inset-0 bg-grid opacity-[0.18]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
            <div className="flex flex-col justify-center">
              <Link
                href="/events"
                className="inline-flex w-fit items-center gap-2 text-xs font-black uppercase tracking-[0.28em] text-white/56 transition hover:text-brand-cyan"
              >
                Events <ArrowRight className="h-3.5 w-3.5" />
              </Link>

              <p className="mt-8 text-xs font-black uppercase tracking-[0.34em] text-[#ffb76b]">
                {event.eyebrow}
              </p>
              <h1 className="mt-4 max-w-4xl font-heading text-4xl font-bold leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-7xl">
                {event.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/74 sm:text-xl">
                {event.teaser}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.6rem] border border-white/10 bg-black/20 p-5 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white/82">
                    <CalendarDays className="h-4 w-4 text-[#ffb76b]" />
                    Date
                  </div>
                  <p className="mt-2 text-base font-bold text-white">{event.displayDate}</p>
                </div>
                <div className="rounded-[1.6rem] border border-white/10 bg-black/20 p-5 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white/82">
                    <Clock3 className="h-4 w-4 text-brand-cyan" />
                    Time
                  </div>
                  <p className="mt-2 text-base font-bold text-white">{event.displayTime}</p>
                </div>
                <div className="rounded-[1.6rem] border border-white/10 bg-black/20 p-5 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white/82">
                    <MapPin className="h-4 w-4 text-brand-cyan" />
                    Venue
                  </div>
                  <p className="mt-2 text-base font-bold text-white">
                    {event.venue}, {event.city}
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+17324750139"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-cyan px-8 py-4 text-sm font-black uppercase tracking-[0.22em] text-brand-obsidian shadow-[0_0_28px_rgba(0,245,255,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_0_38px_rgba(0,245,255,0.42)]"
                >
                  <Phone className="h-4 w-4" />
                  Call to Reserve Your Seat
                </a>
                <a
                  href={event.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/5 px-8 py-4 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:border-[#ffb76b]/60 hover:text-[#ffcf99]"
                >
                  <MapPin className="h-4 w-4" />
                  Get Directions
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {event.perks.map((perk) => (
                  <span
                    key={perk}
                    className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-white/86"
                  >
                    {perk}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-[#ff9d3d]/25 blur-3xl" />
              <div className="absolute -bottom-8 -right-6 h-32 w-32 rounded-full bg-brand-cyan/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 shadow-[0_35px_90px_rgba(0,0,0,0.4)]">
                <Image
                  src={event.heroImage}
                  alt={event.title}
                  width={1195}
                  height={896}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-cyan">
                Why this room matters
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                The local brands that adapt early will own more attention later.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/72">{event.description}</p>
              <p className="mt-5 text-base leading-8 text-white/72">
                Expect direct guidance, sharp conversation, and a room full of business owners
                who know the market is shifting in real time. Free coffee is part of the deal.
                So are the giveaways.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,153,51,0.11),rgba(255,255,255,0.03))] p-8">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ffb76b]">
                Built for
              </p>
              <div className="mt-6 space-y-4">
                {event.audience.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-sm leading-7 text-white/74"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-cyan">
                What you will walk away with
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Insight you can use while everyone else is still guessing.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {event.takeaways.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-brand-cyan/30"
                >
                  <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.24em] text-white/48">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/25 text-brand-cyan">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    Strategic takeaway
                  </div>
                  <h3 className="mt-5 font-heading text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-white/68">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ffb76b]">
                On the menu
              </p>
              <div className="mt-6 space-y-5">
                {event.agenda.map((item) => (
                  <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                    <h3 className="font-heading text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/68">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-cyan">
                Speakers
              </p>
              <div className="mt-6 grid gap-5">
                {event.speakers.map((speaker) => (
                  <div
                    key={speaker.name}
                    className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(0,245,255,0.06),rgba(255,255,255,0.02))] p-6"
                  >
                    <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.24em] text-white/48">
                      <Mic2 className="h-4 w-4 text-brand-cyan" />
                      Featured speaker
                    </div>
                    <h3 className="mt-4 font-heading text-2xl font-bold text-white">
                      {speaker.name}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-white/68">{speaker.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,157,61,0.13),rgba(0,245,255,0.12),rgba(255,255,255,0.04))] p-8 shadow-[0_28px_90px_rgba(0,0,0,0.34)] lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-white/56">
                  Final call
                </p>
                <h2 className="mt-4 max-w-3xl font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">
                  Adapt to the machine, or let better-prepared competitors take the ground.
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-white/72">
                  Join us in Woodbridge on April 28, 2026 for a high-value conversation on
                  AI-powered local visibility, then leave with free coffee, live giveaways, and
                  a sharper plan than the businesses still treating this shift like a rumor.
                </p>
              </div>

              <div className="grid gap-3 sm:min-w-[18rem]">
                <a
                  href="tel:+17324750139"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.22em] text-brand-obsidian transition hover:-translate-y-0.5"
                >
                  <Target className="h-4 w-4" />
                  Reserve by Phone
                </a>
                <a
                  href={event.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/20 px-8 py-4 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:border-white/40"
                >
                  <MapPin className="h-4 w-4" />
                  Open Venue Map
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-4 text-sm font-black uppercase tracking-[0.22em] text-white/82 transition hover:border-brand-cyan/45 hover:text-brand-cyan"
                >
                  <Sparkles className="h-4 w-4" />
                  Contact True Rank Digital
                </Link>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 border-t border-white/10 pt-6 text-sm text-white/64">
              <span className="flex items-center gap-2">
                <Coffee className="h-4 w-4 text-[#ffb76b]" />
                Free coffee
              </span>
              <span className="flex items-center gap-2">
                <Gift className="h-4 w-4 text-brand-cyan" />
                Massive giveaways
              </span>
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-brand-cyan" />
                {event.displayDate}
              </span>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
