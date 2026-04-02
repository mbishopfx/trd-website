import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarDays, Coffee, Gift, MapPin } from 'lucide-react';
import { events } from '@/data/events';

export const metadata: Metadata = {
  title: 'Events | True Rank Digital',
  description:
    'Explore upcoming True Rank Digital events, workshops, and live sessions on AI, local search, and business visibility.',
  alternates: {
    canonical: 'https://truerankdigital.com/events',
  },
};

export default function EventsPage() {
  return (
    <article className="min-h-screen pt-28 pb-24 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,153,51,0.16),transparent_34%),radial-gradient(circle_at_top_right,rgba(0,245,255,0.16),transparent_34%),linear-gradient(180deg,#040608_0%,#08111a_50%,#050505_100%)]" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.34em] text-[#ffb76b]">
              Live Sessions
            </p>
            <h1 className="max-w-4xl font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Rooms where strategy gets sharper before the market catches up.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72 sm:text-xl">
              True Rank Digital events are built for operators who want signal, not filler.
              Right now, we are featuring one live collaboration built around AI, local search,
              and competitive visibility.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8">
          {events.map((event) => (
            <Link
              key={event.slug}
              href={`/events/${event.slug}`}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_24px_90px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-brand-cyan/40"
            >
              <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="relative min-h-[320px] overflow-hidden">
                  <Image
                    src={event.heroImage}
                    alt={event.title}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />
                  <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
                    {event.perks.map((perk) => (
                      <span
                        key={perk}
                        className="rounded-full border border-white/15 bg-black/45 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/88 backdrop-blur-md"
                      >
                        {perk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between p-6 sm:p-8">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.32em] text-brand-cyan">
                      {event.eyebrow}
                    </p>
                    <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      {event.title}
                    </h2>
                    <p className="mt-4 text-base leading-7 text-white/70">{event.teaser}</p>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#ffcf99]">
                      {event.giveaway.title}. {event.giveaway.legalLine}
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-white/82">
                          <CalendarDays className="h-4 w-4 text-[#ffb76b]" />
                          {event.displayDate}
                        </div>
                        <p className="mt-2 text-sm text-white/60">{event.displayTime}</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-white/82">
                          <MapPin className="h-4 w-4 text-brand-cyan" />
                          {event.venue}
                        </div>
                        <p className="mt-2 text-sm text-white/60">
                          {event.city}, {event.state}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <span className="flex items-center gap-2">
                        <Coffee className="h-4 w-4 text-[#ffb76b]" />
                        Coffee included
                      </span>
                      <span className="flex items-center gap-2">
                        <Gift className="h-4 w-4 text-brand-cyan" />
                        Giveaways live
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-brand-cyan">
                      View event <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          <div className="rounded-[2rem] border border-dashed border-white/12 bg-white/[0.03] px-6 py-8 text-center text-white/60">
            More events will be added here as new collaborations go live.
          </div>
        </div>
      </section>
    </article>
  );
}
