import type { Metadata } from "next";
import { notFound } from "next/navigation";

import pages from "@/data/flywheel/trd-website/pages.json";

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
};

const flywheelPages = pages as FlywheelPage[];

function findPage(locationIndustry: string, serviceSegment: string): FlywheelPage | undefined {
  const path = `/${locationIndustry}/${serviceSegment}`;
  return flywheelPages.find((page) => page.path === path);
}

function getContactTarget(page: FlywheelPage): string | undefined {
  const schema = page.schema as { potentialAction?: { target?: string } };
  return schema?.potentialAction?.target;
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
    <main className="mx-auto max-w-4xl px-6 py-16">
      <p className="mb-4 text-sm uppercase tracking-wide text-gray-500">
        {page.citySlug.replace(/-/g, " ")} • {page.serviceSlug.replace(/-/g, " ")}
      </p>
      <h1 className="mb-6 text-4xl font-bold text-gray-900">{page.h1}</h1>
      <p className="mb-8 text-lg leading-8 text-gray-700">{page.intro}</p>

      <section className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-2xl font-semibold text-gray-900">{page.segmentName}</h2>
        <p className="mb-6 text-gray-700">{page.metaDescription}</p>
        {contactTarget ? (
          <a
            href={contactTarget}
            className="inline-flex items-center rounded-md bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
          >
            {page.cta}
          </a>
        ) : null}
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(page.schema) }}
      />
    </main>
  );
}
