import type { Metadata } from 'next';
import StaffHeroSection from '@/components/sections/StaffHeroSection';
import FullTeamSection from '@/components/sections/FullTeamSection';
import TeamCultureSection from '@/components/sections/TeamCultureSection';
import JoinTeamSection from '@/components/sections/JoinTeamSection';

export const metadata: Metadata = {
  title: 'Our Team - Meet True Rank Digital\'s Expert Staff',
  description: 'Meet the talented team behind True Rank Digital\'s success. Our expert staff combines years of experience with cutting-edge AI technology to deliver exceptional results.',
  keywords: 'True Rank Digital team, SEO experts, digital marketing staff, AI specialists, NJ marketing team',
  openGraph: {
    title: 'Our Team - Meet True Rank Digital\'s Expert Staff',
    description: 'Meet the talented team behind True Rank Digital\'s success and cutting-edge AI technology.',
    url: 'https://truerankdigital.com/staff',
    type: 'website',
  },
};

export default function StaffPage() {
  return (
    <div className="pt-16">
      {/* Staff Hero Section */}
      <StaffHeroSection />
      
      {/* Full Team Section */}
      <FullTeamSection />
      
      {/* Team Culture Section */}
      <TeamCultureSection />
      
      {/* Join Team Section */}
      <JoinTeamSection />
    </div>
  );
}
