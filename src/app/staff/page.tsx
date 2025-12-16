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
        "jobTitle": "CEO & Founder",
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
        "jobTitle": "Business Developer Director",
        "worksFor": {
          "@type": "Organization",
          "@id": "https://truerankdigital.com/#organization",
          "name": "True Rank Digital"
        },
        "description": "Business Developer Director overseeing operations and ensuring quality service delivery for all True Rank Digital clients.",
        "email": "jesse@truerankdigital.com",
        "url": "https://truerankdigital.com/staff",
        "knowsAbout": ["Operations", "Team Leadership", "Quality Management", "Business Development"]
      },
      {
        "@type": "Person",
        "@id": "https://truerankdigital.com/staff/jose-perdomo",
        "name": "Jose Perdomo",
        "jobTitle": "Executive Vice President",
        "worksFor": {
          "@type": "Organization",
          "@id": "https://truerankdigital.com/#organization",
          "name": "True Rank Digital"
        },
        "description": "Executive Vice President focused on strategic growth and business development for True Rank Digital's expansion.",
        "email": "jose@truerankdigital.com",
        "url": "https://truerankdigital.com/staff",
        "knowsAbout": ["Strategic Planning", "Business Development", "Market Expansion", "Sales Strategy"]
      },
      {
        "@type": "Person",
        "@id": "https://truerankdigital.com/staff/matt-bishop",
        "name": "Matt Bishop",
        "jobTitle": "Tech Developer",
        "worksFor": {
          "@type": "Organization",
          "@id": "https://truerankdigital.com/#organization",
          "name": "True Rank Digital"
        },
        "description": "Technical developer handling website development and technical implementation for client projects using True Rank Digital's proprietary technology stack.",
        "email": "bishop@truerankdigital.com",
        "url": "https://truerankdigital.com/staff",
        "knowsAbout": ["Web Development", "Technical Implementation", "Website Optimization", "Custom Software Development"]
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
        "@id": "https://truerankdigital.com/staff/sebastian-vargas",
        "name": "Sebastian Vargas",
        "jobTitle": "Sales Director",
        "worksFor": {
          "@type": "Organization",
          "@id": "https://truerankdigital.com/#organization",
          "name": "True Rank Digital"
        },
        "description": "Sales Director focused on client development and relationship management.",
        "email": "sebastian@truerankdigital.com",
        "url": "https://truerankdigital.com/staff",
        "knowsAbout": ["Client Relations", "Sales Strategy", "Business Development", "Digital Marketing"]
      },
      {
        "@type": "Person",
        "@id": "https://truerankdigital.com/staff/eric-malheiro",
        "name": "Eric Malheiro",
        "jobTitle": "Business Acquisition Director",
        "worksFor": {
          "@type": "Organization",
          "@id": "https://truerankdigital.com/#organization",
          "name": "True Rank Digital"
        },
        "description": "Business Acquisition Director focused on strategic client acquisition and business development for True Rank Digital.",
        "email": "eric@truerankdigital.com",
        "url": "https://truerankdigital.com/staff",
        "knowsAbout": ["Business Development", "Client Acquisition", "Strategic Partnerships", "Sales Strategy"]
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
