import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Platform Audit | True Rank Digital',
  description:
    'Get your platform audit from True Rank Digital to identify entity gaps, schema gaps, and technical blockers across search and AI discovery.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function PlatformAuditLegacyPage() {
  redirect('/contact');
}
