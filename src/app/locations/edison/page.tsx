import type { Metadata } from 'next';
import { MapPin, TrendingUp, Phone, Mail, Clock, Users, Star, Award, Target, Zap, Shield, BarChart3 } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'Edison NJ SEO Services | Local SEO Company Serving Edison Businesses | True Rank Digital',
  description: 'Leading Edison NJ SEO company specializing in local search optimization, Google Business Profile management, and digital marketing for Edison businesses. Serving Menlo Park Mall area, Oak Tree Road corridor, and all Edison neighborhoods since 2020.',
  keywords: 'Edison NJ SEO, Edison SEO company, local SEO Edison, SEO services Edison New Jersey, Edison digital marketing, Edison Google Business Profile, Oak Tree Road SEO, Menlo Park Edison marketing, Middlesex County SEO',
  alternates: { canonical: 'https://truerankdigital.com/locations/edison' },
  openGraph: {
    title: 'Edison NJ SEO Services | Local SEO Expert | True Rank Digital',
    description: 'Professional SEO services for Edison, NJ businesses. Dominate local search results and grow your Edison business with our proven local SEO strategies.',
    url: 'https://truerankdigital.com/locations/edison',
    siteName: 'True Rank Digital',
    type: 'website',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function EdisonPage() {
  const faqs = [
    {
      question: "Why should Edison businesses choose True Rank Digital for SEO?",
      answer: "True Rank Digital is based in East Brunswick, just minutes from Edison, giving us intimate knowledge of the Middlesex County market. We understand Edison's diverse business landscape from the Oak Tree Road commercial corridor to the Menlo Park Mall area. Our local presence means faster response times, in-person consultations when needed, and SEO strategies tailored specifically to Edison's competitive environment and customer demographics."
    },
    {
      question: "How long does it take to see SEO results for my Edison business?",
      answer: "Most Edison businesses start seeing improvements in local search visibility within 30-60 days of implementing our SEO strategies. Significant ranking improvements typically occur within 3-6 months. The timeline depends on your industry competition, current online presence, and how competitive your target keywords are in the Edison market. We provide monthly progress reports tracking your rankings, traffic, and local visibility improvements."
    },
    {
      question: "What makes Edison SEO different from general SEO?",
      answer: "Edison SEO requires understanding the unique local market dynamics, including competition from Route 1 corridor businesses, the diverse demographics along Oak Tree Road, and proximity competition from surrounding cities like Woodbridge, Metuchen, and Highland Park. We optimize for Edison-specific searches, local directories, and ensure your business appears in 'near me' searches for Edison customers. Our strategies account for Edison's position as a major commercial hub in Middlesex County."
    },
    {
      question: "Do you work with businesses in specific Edison neighborhoods?",
      answer: "Yes! We serve all Edison neighborhoods including Clara Barton, Menlo Park, Oak Tree, Nixon, Stelton, New Durham, Lindenau, and South Edison. We understand the unique characteristics of each area - from the Indian business corridor along Oak Tree Road to the residential communities near Plainfield Avenue. Our hyperlocal SEO strategies help you target customers in your specific Edison service area."
    },
    {
      question: "What industries in Edison do you specialize in?",
      answer: "We work with diverse Edison industries including retail stores (especially along Oak Tree Road and Menlo Park area), restaurants and food services, medical and dental practices, automotive services (Route 1 corridor), real estate agencies, home services contractors, professional services, and industrial businesses. Edison's diverse economy allows us to apply industry-specific SEO strategies backed by our experience across multiple sectors."
    },
    {
      question: "How do you handle competition from Edison's major commercial areas?",
      answer: "Edison has intense competition, particularly along Oak Tree Road, the Route 1 corridor, and Menlo Park Mall area. We use advanced competitive analysis to identify ranking opportunities, target long-tail local keywords, optimize for specific neighborhoods, and leverage Google Business Profile features to help your business stand out. Our grid ranking system shows exactly where you rank across different Edison zip codes (08817, 08820, 08837, 08899) so we can target areas for improvement."
    },
    {
      question: "Can you help with Google Business Profile for multiple Edison locations?",
      answer: "Absolutely! Many Edison businesses have multiple locations or serve different parts of the township. We specialize in multi-location Google Business Profile management, ensuring each location has optimized listings, consistent NAP (Name, Address, Phone) information, location-specific content, and proper category selection. This is especially important for businesses with locations near major landmarks like Menlo Park Mall, Edison Station, or along Oak Tree Road."
    },
    {
      question: "What's included in your Edison local SEO package?",
      answer: "Our Edison SEO packages include: Google Business Profile optimization, local citation building in Edison and Middlesex County directories, on-page SEO with Edison-specific keywords, content creation featuring Edison landmarks and neighborhoods, review generation and management, local link building from Edison organizations, monthly ranking reports showing your position in Edison searches, and ongoing optimization based on performance data. We also provide access to our proprietary SEO dashboard showing real-time rankings."
    }
  ];

  return (
    <>
      <GEOSchema 
        pageType="location" 
        pageData={{ 
          title: "Professional SEO Services in Edison, NJ - Local Search Experts", 
          description: "True Rank Digital provides comprehensive local SEO services for Edison, New Jersey businesses. Specializing in Google Business Profile optimization, local search rankings, and digital marketing strategies for Edison's diverse business community.", 
          url: "https://truerankdigital.com/locations/edison", 
          keywords: ["Edison NJ SEO", "Local SEO Edison", "Edison digital marketing", "Oak Tree Road SEO", "Menlo Park Edison marketing"], 
          category: "Local Business", 
          address: { 
            streetAddress: "Serving Edison", 
            addressLocality: "Edison", 
            addressRegion: "NJ", 
            postalCode: "08817", 
            addressCountry: "US" 
          }, 
          geo: { 
            latitude: "40.5187", 
            longitude: "-74.4121" 
          } 
        }} 
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" }, 
          { name: "Locations", url: "https://truerankdigital.com/locations" }, 
          { name: "Edison", url: "https://truerankdigital.com/locations/edison" }
        ]} 
        entities={{ 
          primary: ["True Rank Digital", "Edison NJ", "Local SEO", "Edison SEO Services"] 
        }} 
      />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/locations/edison" category="location" />
      
      <article className="pt-16 min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">Serving Edison, NJ & Middlesex County</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6 leading-tight">
                Professional <strong className="text-brand-primary">SEO Services</strong> in <br />
                <strong className="text-brand-primary">Edison, New Jersey</strong>
              </h1>
              
              <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-8 leading-relaxed">
                <strong>True Rank Digital</strong> helps Edison businesses dominate local search results with proven <strong>local SEO strategies</strong>, <strong>Google Business Profile optimization</strong>, and comprehensive digital marketing solutions. Serving all Edison neighborhoods from Oak Tree Road to Menlo Park Mall area.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <a href="/free-audit" className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <TrendingUp className="w-5 h-5" />
                  <span>Get Free Edison SEO Audit</span>
                </a>
                <a href="tel:+17324750139" className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold text-lg rounded-full hover:bg-blue-50 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                  <span>(732) 475-0139</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">50+</div>
                  <div className="text-sm text-brand-dark/60">Edison Businesses Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">4.9★</div>
                  <div className="text-sm text-brand-dark/60">Google Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">5 Min</div>
                  <div className="text-sm text-brand-dark/60">From Edison</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">2020</div>
                  <div className="text-sm text-brand-dark/60">Serving Middlesex</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Edison Businesses Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-brand-dark mb-12 text-center">
              Why <strong className="text-brand-primary">Edison Businesses</strong> Choose True Rank Digital
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="glass-card p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                  Local <strong className="text-brand-primary">Edison Expertise</strong>
                </h3>
                <p className="text-brand-dark/70 leading-relaxed">
                  Based in neighboring East Brunswick, we understand Edison's unique market - from the diverse Oak Tree Road corridor to Menlo Park Mall competition. Our local knowledge gives your business a competitive edge in Edison's crowded digital landscape.
                </p>
              </div>

              <div className="glass-card p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                  <strong className="text-brand-primary">Neighborhood-Specific</strong> Targeting
                </h3>
                <p className="text-brand-dark/70 leading-relaxed">
                  We optimize for specific Edison neighborhoods including Clara Barton, Oak Tree, Menlo Park, and South Edison areas. Our hyperlocal strategies ensure you appear in searches from customers in your exact service area within Edison Township.
                </p>
              </div>

              <div className="glass-card p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                  <strong className="text-brand-primary">Proprietary</strong> Ranking Dashboard
                </h3>
                <p className="text-brand-dark/70 leading-relaxed">
                  Track your Edison rankings in real-time with our exclusive SEO dashboard. See exactly where you rank across different Edison zip codes (08817, 08820, 08837, 08899) and neighborhoods, with grid map visualization showing your local search footprint.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Edison */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-brand-dark mb-6 text-center">
              Complete <strong className="text-brand-primary">SEO Services</strong> for Edison Businesses
            </h2>
            <p className="text-xl text-brand-dark/60 text-center mb-12 max-w-3xl mx-auto">
              Comprehensive local search optimization strategies designed specifically for Edison's competitive market environment
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Google Business Profile */}
              <div className="glass-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      Google Business Profile Optimization
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed mb-4">
                      Dominate Edison's local pack with fully optimized Google Business Profiles. We handle everything from profile setup and verification to ongoing optimization with Edison-specific keywords, posts, and photos. Essential for appearing in "near me" searches from Edison customers.
                    </p>
                    <ul className="space-y-2 text-sm text-brand-dark/70">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>Edison neighborhood-specific content</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>Review generation & management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>Weekly posts featuring Edison landmarks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>Service area optimization for all Edison zip codes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Local Keyword Research */}
              <div className="glass-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      Edison-Specific Keyword Targeting
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed mb-4">
                      We target high-value Edison search terms that your competitors miss. Our research identifies what Edison customers actually search for, including neighborhood names, landmarks, and Edison-specific phrases that drive qualified local traffic to your business.
                    </p>
                    <ul className="space-y-2 text-sm text-brand-dark/70">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>"Near Edison" and "Edison NJ" modifiers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>Oak Tree Road corridor opportunities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>Menlo Park Mall area targeting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>Competitor keyword gap analysis</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Citation Building */}
              <div className="glass-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      Edison Local Citation Building
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed mb-4">
                      Build authoritative presence across Edison and Middlesex County business directories. We ensure consistent NAP (Name, Address, Phone) across 50+ citations including Edison Chamber of Commerce, local business associations, and industry-specific directories relevant to Edison businesses.
                    </p>
                    <ul className="space-y-2 text-sm text-brand-dark/70">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>Edison Chamber of Commerce listings</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>Middlesex County directories</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>Industry-specific Edison platforms</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>NAP consistency monitoring</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Content Marketing */}
              <div className="glass-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      Edison-Focused Content Creation
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed mb-4">
                      Engaging content that resonates with Edison customers. We create blog posts, service pages, and location pages featuring Edison landmarks, neighborhoods, and local events. Content that establishes your business as an Edison community authority while targeting valuable local search terms.
                    </p>
                    <ul className="space-y-2 text-sm text-brand-dark/70">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>Edison neighborhood guides</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>Local business spotlights</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>Edison market trend analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>Service area-specific landing pages</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Edison Market */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                  Understanding <strong className="text-brand-primary">Edison's</strong> Unique Business Landscape
                </h2>
                <p className="text-brand-dark/70 leading-relaxed mb-6">
                  Edison is one of <strong>New Jersey's largest townships</strong> with over 100,000 residents and a thriving business community. From the internationally recognized <strong>Oak Tree Road corridor</strong> (known as "Little India") to the bustling <strong>Menlo Park Mall</strong> area and the commercial businesses along <strong>Route 1</strong>, Edison presents unique SEO challenges and opportunities.
                </p>
                <p className="text-brand-dark/70 leading-relaxed mb-6">
                  The township's diverse demographics, multiple commercial districts, and proximity to major highways (Route 1, Garden State Parkway, NJ Turnpike) create intense competition for local search visibility. Our Edison-specific SEO strategies account for these factors to help your business stand out.
                </p>
                <p className="text-brand-dark/70 leading-relaxed mb-6">
                  Whether you're a retail shop on Oak Tree Road, a professional service near Edison Station, a restaurant in the Menlo Park area, or a contractor serving Edison neighborhoods, we understand your market dynamics and know how to position your business for maximum local search visibility.
                </p>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6">
                  Edison Areas We Serve
                </h3>
                <div className="grid grid-cols-2 gap-4 text-brand-dark/70">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Oak Tree Road Corridor</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Menlo Park Mall Area</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Clara Barton</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Nixon</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Stelton</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span>New Durham</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span>South Edison</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Route 1 Corridor</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Lindenau</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Edison Station Area</span>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-brand-dark mb-4">Serving All Edison Zip Codes:</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">08817</span>
                    <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">08820</span>
                    <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">08837</span>
                    <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">08899</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-brand-dark mb-6 text-center">
              Our <strong className="text-brand-primary">Edison SEO</strong> Process
            </h2>
            <p className="text-xl text-brand-dark/60 text-center mb-12 max-w-3xl mx-auto">
              Proven 5-step methodology that gets Edison businesses ranking on page 1 of Google
            </p>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "1", title: "Edison Market Analysis", desc: "We analyze your competition in Edison's specific market, identify ranking opportunities, and develop a custom strategy for your neighborhood." },
                { step: "2", title: "Google Business Setup", desc: "Complete optimization of your Google Business Profile with Edison-specific content, photos, and service area targeting across all Edison neighborhoods." },
                { step: "3", title: "On-Page Optimization", desc: "Website optimization with Edison keywords, local schema markup, mobile optimization, and content that resonates with Edison customers." },
                { step: "4", title: "Citation Building", desc: "Strategic placement in Edison and Middlesex County directories, local business associations, and industry platforms with consistent NAP data." },
                { step: "5", title: "Ongoing Optimization", desc: "Monthly tracking, reporting, and optimization based on Edison ranking data. We adjust strategies based on what's working in your specific market." },
              ].map((item) => (
                <div key={item.step} className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-brand-dark mb-3">{item.title}</h3>
                  <p className="text-sm text-brand-dark/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-brand-dark mb-12 text-center">
              Frequently Asked Questions About <strong className="text-brand-primary">Edison SEO</strong>
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="glass-card p-6">
                  <h3 className="text-lg font-heading font-bold text-brand-dark mb-3">{faq.question}</h3>
                  <p className="text-brand-dark/70 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6">
              Ready to Dominate Edison Local Search?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Get your free custom SEO strategy designed specifically for your Edison business. No obligations, just insights on how to outrank your Edison competitors.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/free-audit" className="inline-flex items-center space-x-2 px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl">
                <TrendingUp className="w-6 h-6" />
                <span>Get Your Free Edison SEO Audit</span>
              </a>
              <a href="tel:+17324750139" className="inline-flex items-center space-x-2 px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all duration-300">
                <Phone className="w-6 h-6" />
                <span>(732) 475-0139</span>
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-center gap-8 text-white/80">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>50+ Edison businesses served</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>5-minute drive from Edison</span>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
