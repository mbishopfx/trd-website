import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Meet Our Team - True Rank Digital Staff',
  description: 'Meet the talented team behind True Rank Digital\'s success. Our expert staff combines years of experience with cutting-edge AI technology to deliver exceptional results.',
  keywords: 'True Rank Digital team, SEO experts, digital marketing staff, AI specialists, NJ marketing team',
  alternates: {
    canonical: 'https://truerankdigital.com/staff',
  },
};

export default function MeetTheStaffPage() {
  // Redirect to the main staff page
  redirect('/staff');
}
