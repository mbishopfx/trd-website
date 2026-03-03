import type { Metadata } from "next";
import { notFound } from "next/navigation";

import pages from "@/data/flywheel/trd-website/pages.json";

type ContentSubSection = {
  heading: string;
  body: string;
};

type ContentSection = {
  heading: string;
  body: string;
  subsections?: ContentSubSection[];
};

type ContentFaq = {
  question: string;
  answer: string;
};

type ContentAuthor = {
  name: string;
  title: string;
  bio: string;
  reviewedBy?: string;
};

type GeneratedContent = {
  sections: ContentSection[];
  faqs: ContentFaq[];
  author: ContentAuthor;
  wordCount: number;
};

type FlywheelPage = {
  path: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  cta: string;
  schema: Record<string, unknown>;
  segmentName: string;
  citySlug: string;
  serviceSlug: string;
  content: GeneratedContent;
};

const flywheelPages = pages as FlywheelPage[];

function findPage(locationIndustry: string, serviceSegment: string): FlywheelPage | undefined {
  const pagePath = `/${locationIndustry}/${serviceSegment}`;
  return flywheelPages.find((page) => page.path === pagePath);
}

function readString(input: unknown): string | undefined {
  return typeof input === "string" && input.trim().length > 0 ? input : undefined;
}

function getContactTarget(page: FlywheelPage): string | undefined {
  const schema = page.schema as {
    potentialAction?: { target?: unknown };
    "@graph"?: unknown;
  };

  const directTarget = readString(schema?.potentialAction?.target);
  if (directTarget) {
    return directTarget;
  }

  const graph = Array.isArray(schema?.["@graph"]) ? schema["@graph"] : [];
  for (const node of graph) {
    if (!node || typeof node !== "object") {
      continue;
    }

    const record = node as { contactPoint?: unknown };
    const contactPoints = Array.isArray(record.contactPoint) ? record.contactPoint : [];
    for (const contactPoint of contactPoints) {
      if (!contactPoint || typeof contactPoint !== "object") {
        continue;
      }
      const url = readString((contactPoint as { url?: unknown }).url);
      if (url) {
        return url;
      }
    }
  }

  return undefined;
}

function toReadable(value: string): string {
  return value
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export async function generateStaticParams(): Promise<
  Array<{ locationIndustry: string; serviceSegment: string }>
> {
  return flywheelPages
    .map((page) => page.path.split("/").filter(Boolean))
    .filter((parts) => parts.length === 2)
    .map((parts) => ({ locationIndustry: parts[0], serviceSegment: parts[1] }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locationIndustry: string; serviceSegment: string }>;
}): Promise<Metadata> {
  const { locationIndustry, serviceSegment } = await params;
  const page = findPage(locationIndustry, serviceSegment);

  if (!page) {
    return {
      title: "Page not found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: page.title,
    description: page.metaDescription,
  };
}

export default async function FlywheelPage({
  params,
}: {
  params: Promise<{ locationIndustry: string; serviceSegment: string }>;
}) {
  const { locationIndustry, serviceSegment } = await params;
  const page = findPage(locationIndustry, serviceSegment);

  if (!page) {
    notFound();
  }

  const contactTarget = getContactTarget(page);

  return (
    <main className="min-h-screen bg-slate-50 py-14">
      <article className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white px-6 py-10 shadow-sm md:px-10">
        <header className="mb-10 border-b border-slate-200 pb-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
            {toReadable(page.citySlug)} · {toReadable(page.serviceSlug)}
          </p>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {page.h1}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">{page.metaDescription}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span>{page.content.wordCount} words</span>
            <span>•</span>
            <span>Audience: {page.segmentName}</span>
          </div>
        </header>

        <section className="space-y-5" aria-label="Introduction">
          <p className="text-base leading-8 text-slate-700">{page.intro}</p>
        </section>

        <div className="mt-12 space-y-12">
          {page.content.sections.map((section, sectionIndex) => (
            <section key={`section-${sectionIndex}`} className="space-y-4" aria-label={section.heading}>
              <h2 className="text-2xl font-semibold text-slate-900">{section.heading}</h2>
              <p className="text-base leading-8 text-slate-700">{section.body}</p>

              {(section.subsections ?? []).map((subSection, subSectionIndex) => (
                <div key={`section-${sectionIndex}-sub-${subSectionIndex}`} className="rounded-xl bg-slate-100 p-5">
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">{subSection.heading}</h3>
                  <p className="text-base leading-8 text-slate-700">{subSection.body}</p>
                </div>
              ))}
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6" aria-label="FAQs">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <div className="mt-5 space-y-5">
            {page.content.faqs.map((faq, faqIndex) => (
              <div key={`faq-${faqIndex}`}>
                <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-2 text-base leading-7 text-slate-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-8" aria-label="Next Step">
          <h2 className="text-2xl font-semibold text-slate-900">Next Step</h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            {page.cta}
          </p>

          {contactTarget ? (
            <a
              href={contactTarget}
              className="mt-6 inline-flex items-center rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              {page.cta}
            </a>
          ) : null}
        </section>

        <section className="mt-12 rounded-xl border border-sky-100 bg-sky-50 p-6" aria-label="Author">
          <h2 className="text-xl font-semibold text-slate-900">Reviewed By</h2>
          <p className="mt-3 text-base font-medium text-slate-900">{page.content.author.name}</p>
          <p className="text-sm text-slate-600">{page.content.author.title}</p>
          <p className="mt-3 text-sm leading-7 text-slate-700">{page.content.author.bio}</p>
          {page.content.author.reviewedBy ? (
            <p className="mt-2 text-sm leading-7 text-slate-700">Reviewed by {page.content.author.reviewedBy}</p>
          ) : null}
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(page.schema) }}
        />
      </article>
    </main>
  );
}
