import type { Metadata } from 'next';
import { Building2, MapPin, Users, Award, Target, Briefcase } from 'lucide-react';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

// Entity-Dense Metadata
export const metadata: Metadata = {
  title: 'About True Rank Digital LLC | Professional SEO Company in East Brunswick, NJ',
  description: 'True Rank Digital LLC is a professional SEO and digital marketing company located in East Brunswick, New Jersey. Founded in 2020 by Jon Korkowski, we serve businesses throughout New Jersey, New York, Pennsylvania, and nationwide with proprietary SEO technology and custom optimization solutions.',
  keywords: 'True Rank Digital LLC, East Brunswick SEO company, New Jersey digital marketing, Jon Korkowski, professional SEO services, East Brunswick NJ 08816',
  openGraph: {
    title: 'About True Rank Digital LLC - Professional SEO Company in East Brunswick, NJ',
    description: 'Learn about True Rank Digital LLC, a professional SEO company serving East Brunswick and surrounding areas since 2020.',
    url: 'https://truerankdigital.com/about',
    type: 'website',
  },
};

// FAQ Data for Entity Recognition
const aboutFAQs = [
  {
    question: "Who is True Rank Digital?",
    answer: "True Rank Digital LLC is a professional SEO and digital marketing company located in East Brunswick, New Jersey. Founded in 2020 by Jon Korkowski, True Rank Digital specializes in custom SEO technology, Google Business Profile optimization, and proprietary dashboard platforms. The company serves businesses throughout New Jersey, New York, Pennsylvania, and nationwide."
  },
  {
    question: "Where is True Rank Digital located?",
    answer: "True Rank Digital LLC is located in East Brunswick, New Jersey 08816. We serve clients within a 50-mile radius of East Brunswick, including Edison, New Brunswick, North Brunswick, Sayreville, South River, and throughout New Jersey, New York, and Pennsylvania. Our services are available nationwide for businesses seeking professional SEO solutions."
  },
  {
    question: "What services does True Rank Digital provide?",
    answer: "True Rank Digital provides professional Google Business Optimization services including local pack domination and Google Maps optimization, Google Business Profile management, AI Search Optimization with LLM.txt optimization, custom web development, comprehensive digital marketing, review management, and organic search optimization. We specialize in proprietary technology solutions including grid map ranking analysis, competitor intelligence monitoring, and custom schema markup engineering."
  },
  {
    question: "How much do True Rank Digital's services cost?",
    answer: "True Rank Digital's professional SEO services are priced in the mid to upper-mid range ($$-$$$), reflecting our custom technology solutions and proprietary dashboard platform. Pricing varies based on business needs, market competition, and service scope. Contact us at (732) 475-0139 or jon@truerankdigital.com for a custom quote and free consultation."
  },
  {
    question: "Why choose True Rank Digital over other SEO companies?",
    answer: "True Rank Digital stands out by building custom software solutions in-house, including proprietary schema markup engineering, LLM.txt optimization files, and problem detection systems that other SEO agencies don't offer. Founded in 2020 in East Brunswick, NJ, we provide clients with exclusive dashboard platform access featuring grid map ranking verification, competitor analysis tools, and automated Google knowledge graph consistency monitoring that competitors simply cannot provide."
  },
  {
    question: "Who founded True Rank Digital?",
    answer: "True Rank Digital LLC was founded in 2020 by Jon Korkowski (CEO & Founder). The leadership team includes Jon Korkowski (CEO & Founder), Jesse Mathews (Business Developer Director), and Jose Perdomo (Executive Vice President). The technical team includes Matt Bishop (Tech Developer) and Sean O'Niel (SEO Specialist). The sales team includes Eric Malheiro (Business Acquisition Director)."
  }
];

export default function AboutPage() {
  return (
    <>
      {/* FAQ Schema for Entity Recognition */}
      <FAQSchema 
        faqs={aboutFAQs}
        pageUrl="https://truerankdigital.com/about"
        category="general"
      />

      {/* Service Schema with Entity Mentions */}
      <ServiceSchema
        serviceName="Professional SEO & Digital Marketing Services"
        serviceUrl="https://truerankdigital.com/about"
        description="True Rank Digital LLC provides professional SEO and digital marketing services from East Brunswick, New Jersey, serving businesses throughout New Jersey, New York, Pennsylvania, and nationwide."
        serviceType="Professional SEO Services"
        mentions={[
          {
            type: "Organization",
            name: "Google",
            sameAs: "https://www.wikidata.org/wiki/Q95",
            description: "Search engine platform"
          },
          {
            type: "Organization",
            name: "Schema.org",
            sameAs: "https://www.wikidata.org/wiki/Q845256",
            description: "Structured data vocabulary"
          }
        ]}
      />

      <article className="pt-20 bg-gradient-to-b from-white to-brand-light/30">
        {/* Entity-Dense Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-light via-white to-brand-light/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-primary/10 rounded-full mb-6">
                <Building2 className="w-5 h-5 text-brand-primary" />
                <span className="text-brand-primary font-semibold text-sm">About Our Company</span>
              </div>
              
              {/* WHO - The Entity */}
              <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
                About <strong className="text-brand-primary">True Rank Digital LLC</strong>
              </h1>
              
              <div className="max-w-4xl mx-auto space-y-4 text-lg text-brand-dark/80 leading-relaxed">
                <p>
                  <strong>True Rank Digital LLC</strong> is a professional <strong>SEO and digital marketing company</strong> founded in <strong>2020</strong> by <strong>Jon Korkowski</strong>. We specialize in custom SEO technology, proprietary dashboard platforms, and advanced optimization solutions that other agencies cannot provide.
                </p>
                
                <p>
                  <strong>True Rank Digital</strong> builds in-house software solutions including <strong>schema markup engineering</strong>, <strong>LLM.txt optimization</strong>, grid map ranking verification, and automated <strong>Google knowledge graph</strong> consistency monitoring. Our proprietary technology gives clients a competitive advantage in search rankings.
                </p>
              </div>
            </div>

            {/* WHERE - Service Area with Precise Location */}
            <div className="glass-card p-8 mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="w-8 h-8 text-brand-primary" />
                <h2 className="text-3xl font-heading font-bold text-brand-dark">
                  Where <strong className="text-brand-primary">True Rank Digital</strong> Is Located
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-4">Primary Location</h3>
                  <div className="space-y-3 text-brand-dark/80">
                    <p><strong>Business Name:</strong> True Rank Digital LLC</p>
                    <p><strong>City:</strong> East Brunswick</p>
                    <p><strong>State:</strong> New Jersey (NJ)</p>
                    <p><strong>ZIP Code:</strong> 08816</p>
                    <p><strong>Country:</strong> United States</p>
                    <p><strong>Coordinates:</strong> 40.428100, -74.415700</p>
                    <p><strong>Phone:</strong> (732) 475-0139</p>
                    <p><strong>Email:</strong> jon@truerankdigital.com</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-4">Service Areas</h3>
                  <div className="space-y-3 text-brand-dark/80">
                    <p><strong>Primary Service Radius:</strong> 50 miles from East Brunswick, NJ</p>
                    
                    <div>
                      <p className="font-semibold mb-2">Nearby Cities We Serve:</p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Edison, New Jersey</li>
                        <li>New Brunswick, New Jersey</li>
                        <li>North Brunswick, New Jersey</li>
                        <li>Sayreville, New Jersey</li>
                        <li>South River, New Jersey</li>
                        <li>Old Bridge, New Jersey</li>
                        <li>Monroe Township, New Jersey</li>
                        <li>Highland Park, New Jersey</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">State Coverage:</p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>New Jersey (Primary)</li>
                        <li>New York</li>
                        <li>Pennsylvania</li>
                      </ul>
                    </div>

                    <p><strong>National Services:</strong> Available throughout the United States</p>
                  </div>
                </div>
              </div>

              {/* Google Maps CID Link */}
              <div className="mt-8 pt-8 border-t border-brand-primary/20">
                <p className="text-center text-brand-dark/70">
                  <strong>Find Us on Google Maps:</strong>{' '}
                  <a 
                    href="https://www.google.com/maps?cid=4662204553635539796"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary hover:underline font-semibold"
                  >
                    View True Rank Digital on Google Maps
                  </a>
                </p>
              </div>
            </div>

            {/* WHAT - Topical Authority & Services */}
            <div className="glass-card p-8 mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-brand-primary" />
                <h2 className="text-3xl font-heading font-bold text-brand-dark">
                  What <strong className="text-brand-primary">True Rank Digital</strong> Does
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-brand-dark/80 leading-relaxed">
                  <strong>True Rank Digital LLC</strong> provides professional <strong>SEO services</strong> and <strong>digital marketing solutions</strong> with proprietary technology that other agencies cannot offer. Our core competencies include:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Local SEO & Google Maps Optimization",
                      description: "Grid map ranking verification, Google Business Profile optimization, local pack positioning, and geographic targeting for businesses in East Brunswick, NJ and surrounding areas."
                    },
                    {
                      title: "Google Business Profile Management",
                      description: "Complete GBP optimization, review management, listing consistency, photo optimization, and automated monitoring for businesses throughout New Jersey."
                    },
                    {
                      title: "AI-Enhanced SEO & LLM.txt Optimization",
                      description: "Custom algorithm adaptation scripts, LLM.txt file creation for ChatGPT and Perplexity, AI search engine optimization, and proprietary solution building frameworks."
                    },
                    {
                      title: "Custom Web Development",
                      description: "SEO-optimized websites with proprietary script integration, enhanced algorithm manipulation capabilities, Core Web Vitals optimization, and conversion-focused design."
                    },
                    {
                      title: "Schema Markup Engineering",
                      description: "Hand-crafted structured data schemas, LocalBusiness markup, Service schemas, FAQ schemas, breadcrumb navigation, and custom entity relationship mapping."
                    },
                    {
                      title: "Proprietary SEO Dashboard Platform",
                      description: "Exclusive client dashboard featuring grid map ranking analysis, competitor intelligence monitoring, keyword search volume research, and automated Google knowledge graph consistency tracking."
                    },
                    {
                      title: "Comprehensive Digital Marketing",
                      description: "Strategic campaign management, Google Analytics integration, Google Ads management, social media marketing, content strategy, and performance tracking."
                    }
                  ].map((service, index) => (
                    <div key={index} className="bg-white/50 p-6 rounded-lg border border-brand-primary/10">
                      <h3 className="text-lg font-bold text-brand-dark mb-3">{service.title}</h3>
                      <p className="text-brand-dark/70 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* WHO - Leadership Team */}
            <div className="glass-card p-8 mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="w-8 h-8 text-brand-primary" />
                <h2 className="text-3xl font-heading font-bold text-brand-dark">
                  Who Leads <strong className="text-brand-primary">True Rank Digital</strong>
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-brand-dark/80 leading-relaxed mb-8">
                  <strong>True Rank Digital LLC</strong> was founded in <strong>2020</strong> by <strong>Jon Korkowski</strong>. Our leadership team brings decades of combined experience in <strong>SEO</strong>, <strong>digital marketing</strong>, <strong>web development</strong>, and <strong>business development</strong>.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Jon Korkowski",
                      title: "CEO & Founder",
                      role: "Business Strategy, Client Relations, SEO Leadership",
                      description: "Founded True Rank Digital in 2020 with a vision to build custom SEO technology that gives clients a competitive advantage.",
                      email: "jon@truerankdigital.com"
                    },
                    {
                      name: "Jesse Mathews",
                      title: "Business Developer Director",
                      role: "Operations, Team Leadership, Quality Management",
                      description: "Oversees operations and ensures quality service delivery for all True Rank Digital clients.",
                      email: "jesse@truerankdigital.com"
                    },
                    {
                      name: "Jose Perdomo",
                      title: "Executive Vice President",
                      role: "Strategic Planning, Business Development, Market Expansion",
                      description: "Focused on strategic growth and business development for True Rank Digital's expansion.",
                      email: "jose@truerankdigital.com"
                    },
                    {
                      name: "Matt Bishop",
                      title: "Tech Developer",
                      role: "Web Development, Technical Implementation, Custom Software",
                      description: "Handles website development and technical implementation using True Rank Digital's proprietary technology stack.",
                      email: "bishop@truerankdigital.com"
                    },
                    {
                      name: "Sean O'Niel",
                      title: "SEO Specialist",
                      role: "SEO Optimization, Search Strategy, Performance Analysis",
                      description: "Focused on optimization strategies and search engine performance for True Rank Digital's client campaigns.",
                      email: "sean@truerankdigital.com"
                    },
                    {
                      name: "Eric Malheiro",
                      title: "Business Acquisition Director",
                      role: "Strategic Partnerships, Client Acquisition",
                      description: "Focused on strategic client acquisition and business development for True Rank Digital.",
                      email: "eric@truerankdigital.com"
                    }
                  ].map((member, index) => (
                    <div key={index} className="bg-white/50 p-6 rounded-lg border border-brand-primary/10">
                      <h3 className="text-xl font-bold text-brand-dark mb-1">{member.name}</h3>
                      <p className="text-brand-primary font-semibold mb-2">{member.title}</p>
                      <p className="text-sm text-brand-dark/60 mb-3">{member.role}</p>
                      <p className="text-sm text-brand-dark/70 leading-relaxed mb-3">{member.description}</p>
                      <a href={`mailto:${member.email}`} className="text-xs text-brand-primary hover:underline">
                        {member.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Company Credentials & Authority Signals */}
            <div className="glass-card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="w-8 h-8 text-brand-primary" />
                <h2 className="text-3xl font-heading font-bold text-brand-dark">
                  Why <strong className="text-brand-primary">True Rank Digital</strong> Is Trusted
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-4">Company Information</h3>
                  <div className="space-y-3 text-brand-dark/80">
                    <p><strong>Legal Name:</strong> True Rank Digital LLC</p>
                    <p><strong>Founded:</strong> 2020</p>
                    <p><strong>Founder:</strong> Jon Korkowski</p>
                    <p><strong>Headquarters:</strong> East Brunswick, New Jersey 08816</p>
                    <p><strong>Industry:</strong> Professional SEO Services & Digital Marketing</p>
                    <p><strong>NAICS Code:</strong> 541613 (Marketing Consulting Services)</p>
                    <p><strong>Price Range:</strong> $$-$$$ (Mid to upper-mid professional services)</p>
                    <p><strong>Service Availability:</strong> 24/7 Digital Services Available</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-4">Technology & Platforms</h3>
                  <div className="space-y-3 text-brand-dark/80">
                    <p><strong>Proprietary Technology:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Custom SEO Dashboard Platform</li>
                      <li>Grid Map Ranking Verification System</li>
                      <li>Competitor Intelligence Monitoring Tools</li>
                      <li>Schema Markup Engineering Software</li>
                      <li>LLM.txt Optimization Tools</li>
                      <li>Problem Detection Systems</li>
                    </ul>

                    <p className="mt-4"><strong>Platform Expertise:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Google (Search, Maps, Business Profile, Analytics, Search Console)</li>
                      <li>AI Platforms (ChatGPT, Perplexity AI, Claude)</li>
                      <li>Development (Next.js, Vercel)</li>
                      <li>Marketing (HubSpot, Meta)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-brand-primary/20">
                <h3 className="text-xl font-bold text-brand-dark mb-4">Verified Business Profiles</h3>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://www.google.com/maps?cid=4662204553635539796"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-brand-primary/20 rounded-full hover:border-brand-primary hover:shadow-md transition-all"
                  >
                    <MapPin className="w-4 h-4 text-brand-primary" />
                    <span className="text-sm font-semibold">Google Business Profile</span>
                  </a>
                  <a 
                    href="https://www.wikidata.org/wiki/Q130284854"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-brand-primary/20 rounded-full hover:border-brand-primary hover:shadow-md transition-all"
                  >
                    <Briefcase className="w-4 h-4 text-brand-primary" />
                    <span className="text-sm font-semibold">Wikidata Entity</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/true-rank-digital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-brand-primary/20 rounded-full hover:border-brand-primary hover:shadow-md transition-all"
                  >
                    <Users className="w-4 h-4 text-brand-primary" />
                    <span className="text-sm font-semibold">LinkedIn Company</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-brand-primary to-brand-dark text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
              Ready to Work with True Rank Digital?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contact True Rank Digital LLC today for a free consultation. Located in East Brunswick, NJ, serving businesses throughout New Jersey, New York, Pennsylvania, and nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-brand-primary font-semibold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <span>Contact Us Today</span>
              </a>
              <a
                href="tel:7324750139"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-full hover:bg-white hover:text-brand-primary transition-all duration-300"
              >
                <span>Call (732) 475-0139</span>
              </a>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
