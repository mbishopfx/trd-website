import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Exit Interview | True Rank Digital',
  description: 'True Rank Digital Client Exit Interview Form',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ExitInterviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
