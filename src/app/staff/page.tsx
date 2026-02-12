import type { Metadata } from 'next';
import Script from 'next/script';
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
  alternates: {
    canonical: 'https://truerankdigital.com/staff'
  },
};

export default function StaffPage() {
  // Team members schema from SchemaMarkup component
  const teamSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://truerankdigital.com/staff/jon-korkowski",
        "name": "Jon J Korkowski",
        "jobTitle": "CEO - Founder",
        "worksFor": {
          "@type": "Organization",
          "@id": "https://truerankdigital.com/#organization",
          "name": "True Rank Digital"
        },
        "description": "Founder and CEO leading True Rank Digital's vision and strategy for digital marketing excellence and proprietary SEO technology development.",
        "email": "jon@truerankdigital.com",
        "url": "https://truerankdigital.com/staff",
        "knowsAbout": ["Business Strategy", "Client Relations", "SEO Leadership", "Digital Marketing Strategy"]
      },
      {
        "@type": "Person",
        "@id": "https://truerankdigital.com/staff/jesse-mathews",
        "name": "Jesse Mathews",
        "jobTitle": "EVP of Business Development & Sale",
        "worksFor": {
          "@type": "Organization",
          "@id": "https://truerankdigital.com/#organization",
          "name": "True Rank Digital"
        },
        "description": "Executive Vice President of Business Development & Sale overseeing operations and growth initiatives for True Rank Digital clients.",
        "email": "jesse@truerankdigital.com",
        "url": "https://truerankdigital.com/staff",
        "knowsAbout": ["Business Development", "Sales Strategy", "Operations Leadership", "Growth Planning"]
      },
      {
        "@type": "Person",
        "@id": "https://truerankdigital.com/staff/jose-perdomo",
        "name": "Jose Perdomo",
        "jobTitle": "EVP of Sales & Client Success",
        "worksFor": {
          "@type": "Organization",
          "@id": "https://truerankdigital.com/#organization",
          "name": "True Rank Digital"
        },
        "description": "Executive Vice President of Sales & Client Success focused on client outcomes, retention, and scalable revenue growth.",
        "email": "jose@truerankdigital.com",
        "url": "https://truerankdigital.com/staff",
        "knowsAbout": ["Sales Leadership", "Client Success", "Revenue Growth", "Account Management"]
      },
      {
        "@type": "Person",
        "@id": "https://truerankdigital.com/staff/matt-bishop",
        "name": "Matt Bishop",
        "jobTitle": "CTO (Chief Technology Officer)",
        "worksFor": {
          "@type": "Organization",
          "@id": "https://truerankdigital.com/#organization",
          "name": "True Rank Digital"
        },
        "description": "Chief Technology Officer responsible for technical architecture, software development, and platform innovation across True Rank Digital.",
        "email": "bishop@truerankdigital.com",
        "url": "https://truerankdigital.com/staff",
        "knowsAbout": ["Technology Strategy", "Software Architecture", "Web Development", "Custom Software Development"]
      },
      {
        "@type": "Person",
        "@id": "https://truerankdigital.com/staff/sean-oniel",
        "name": "Sean O'Niel",
        "jobTitle": "SEO Specialist",
        "worksFor": {
          "@type": "Organization",
          "@id": "https://truerankdigital.com/#organization",
          "name": "True Rank Digital"
        },
        "description": "SEO specialist focused on optimization strategies and search engine performance for True Rank Digital's client campaigns.",
        "email": "sean@truerankdigital.com",
        "url": "https://truerankdigital.com/staff",
        "knowsAbout": ["SEO Optimization", "Search Strategy", "Performance Analysis", "Local SEO"]
      },
      {
        "@type": "Person",
        "@id": "https://truerankdigital.com/staff/eric-malheiro",
        "name": "Eric Malheiro",
        "jobTitle": "EVP of Sales Operations & Performance",
        "worksFor": {
          "@type": "Organization",
          "@id": "https://truerankdigital.com/#organization",
          "name": "True Rank Digital"
        },
        "description": "Executive Vice President of Sales Operations & Performance driving sales process efficiency, forecasting accuracy, and performance optimization.",
        "email": "eric@truerankdigital.com",
        "url": "https://truerankdigital.com/staff",
        "knowsAbout": ["Sales Operations", "Performance Management", "Revenue Operations", "Strategic Partnerships"]
      }
    ]
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://truerankdigital.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Our Team",
        "item": "https://truerankdigital.com/staff"
      }
    ]
  };

  return (
    <>
      {/* Team Schema */}
      <Script
        id="team-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(teamSchema)
        }}
      />
      
      {/* Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />

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
    </>
  );
}
