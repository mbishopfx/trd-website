import type { Metadata } from 'next';
import { MapPin, TrendingUp, Phone, Clock, Users, Star, Award, Target, Zap, Shield, BarChart3, Building, Home } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'East Brunswick NJ SEO Services | Headquarters Location | True Rank Digital',
  description: 'True Rank Digital headquarters in East Brunswick, NJ. Professional local SEO services for East Brunswick businesses along Route 18, Middlesex County businesses. Expert Google Business Profile optimization and digital marketing from our hometown.',
  keywords: 'East Brunswick NJ SEO, East Brunswick SEO company, Route 18 SEO, East Brunswick digital marketing, Middlesex County SEO, local SEO East Brunswick',
  alternates: { canonical: 'https://truerankdigital.com/locations/east-brunswick' },
  openGraph: {
    title: 'East Brunswick NJ SEO Services | Headquarters | True Rank Digital',
    description: 'Professional SEO services from our East Brunswick headquarters. We know the local market - dominate East Brunswick search results with our proven strategies.',
    url: 'https://truerankdigital.com/locations/east-brunswick',
    siteName: 'True Rank Digital',
    type: 'website',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function EastBrunswickPage() {
  const faqs = [
    {
      question: "Why should East Brunswick businesses choose True Rank Digital for SEO?",
      answer: "True Rank Digital is headquartered right here in East Brunswick, NJ at zip code 08816. We're not just another agency claiming to serve your area - we live and work in East Brunswick. We know Route 18, understand the Middlesex County market, shop at local businesses, and have intimate knowledge of East Brunswick's competitive landscape. Our local presence means same-day in-person consultations, immediate understanding of your business environment, and SEO strategies developed by people who truly know East Brunswick."
    },
    {
      question: "What makes being headquartered in East Brunswick an advantage?",
      answer: "Being based in East Brunswick means we understand local search patterns, know which shopping centers and landmarks matter (Route 18 corridor, Costco, Home Depot plaza), understand commuter traffic from Garden State Parkway and New Jersey Turnpike exits, and have tested our SEO strategies on local East Brunswick searches. We're not guessing about your market - we're part of it. This local expertise translates to faster results, better keyword targeting, and strategies that actually work for East Brunswick businesses."
    },
    {
      question: "How do you optimize for Route 18 corridor businesses?",
      answer: "Route 18 is East Brunswick's major commercial artery with intense competition from national retailers, restaurants, automotive dealerships, and professional services. We optimize for 'Route 18' keyword variations, capture commuter searches from GSP and Turnpike traffic, target specific plaza and shopping center searches, differentiate your business from chain competitors, and leverage proximity marketing to nearby residential areas. Our strategies help local businesses compete with big-box retailers along this busy corridor."
    },
    {
      question: "Can you help businesses near Garden State Parkway exits?",
      answer: "Absolutely! East Brunswick's strategic location with Garden State Parkway (Exit 127, 127A) and New Jersey Turnpike (Exit 9) access brings significant traffic. We optimize for Parkway exit searches, target travelers and commuters, capture 'near Garden State Parkway' keywords, and help businesses along Route 18 and surrounding areas benefit from high-traffic highway access. Essential for hotels, restaurants, gas stations, and retail near major exits."
    },
    {
      question: "Do you work with businesses in residential East Brunswick neighborhoods?",
      answer: "Yes! Beyond the Route 18 commercial corridor, East Brunswick has extensive residential areas requiring hyperlocal SEO. We optimize for neighborhood-specific searches, target East Brunswick homeowners looking for local services, emphasize convenient local service vs. driving to neighboring towns, and help contractors, home services, and local businesses dominate 'near me' searches from East Brunswick's 48,000 residents."
    },
    {
      question: "How long does it take to see SEO results in East Brunswick?",
      answer: "Most East Brunswick businesses see initial ranking improvements within 30-60 days, with significant page 1 results in 3-6 months. Timeline depends on Route 18 corridor competition (higher) vs. residential area searches (lower), your industry, and current online presence. Being local, we can meet in person to review progress, adjust strategies quickly, and provide monthly reports tracking your rankings across different East Brunswick areas and zip codes."
    },
    {
      question: "What East Brunswick neighborhoods do you optimize for?",
      answer: "We optimize for all East Brunswick areas including the Route 18 commercial corridor, residential neighborhoods north and south of Route 18, areas near Tamarack Golf Course, neighborhoods around Crystal Springs, Old Bridge border areas, areas near Brunswick Square Mall region, and communities near major shopping centers. Each area has different demographics and search patterns requiring customized local approaches."
    },
    {
      question: "What's included in your East Brunswick SEO package?",
      answer: "Our packages include: Google Business Profile optimization with East Brunswick landmarks and Route 18 references, local citation building in Middlesex County directories, Route 18 corridor and residential keyword targeting, content featuring East Brunswick locations and neighborhoods, review generation and management emphasizing local service, local link building from East Brunswick organizations, monthly ranking reports across different East Brunswick areas, in-person consultations at our East Brunswick office, and access to our proprietary SEO dashboard showing real-time rankings."
    }
  ];

  return (
    <>
      <GEOSchema 
        pageType="location" 
        pageData={{ 
          title: "Professional SEO Services in East Brunswick, NJ - Our Headquarters", 
          description: "True Rank Digital is headquartered in East Brunswick, New Jersey. We provide comprehensive local SEO services for East Brunswick businesses along Route 18, residential neighborhoods, and throughout Middlesex County. Expert local knowledge meets professional SEO strategies.", 
          url: "https://truerankdigital.com/locations/east-brunswick", 
          keywords: ["East Brunswick NJ SEO", "Route 18 SEO", "East Brunswick digital marketing", "Middlesex County SEO", "local SEO East Brunswick"], 
          category: "Local Business", 
          address: { 
            streetAddress: "288 Summerhill Rd, suite 3", 
            addressLocality: "East Brunswick", 
            addressRegion: "NJ", 
            postalCode: "08816", 
            addressCountry: "US" 
          }, 
          geo: { 
            latitude: "40.428100", 
            longitude: "-74.415700" 
          },
          locatedIn: {
            "@type": "Place",
            "@id": "https://truerankdigital.com/#organization",
            "name": "True Rank Digital",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "East Brunswick",
              "addressRegion": "NJ",
              "postalCode": "08816",
              "addressCountry": "US"
            }
          }
        }} 
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" }, 
          { name: "Locations", url: "https://truerankdigital.com/locations" }, 
          { name: "East Brunswick", url: "https://truerankdigital.com/locations/east-brunswick" }
        ]} 
        entities={{ 
          primary: ["True Rank Digital", "East Brunswick NJ", "Local SEO", "Route 18", "East Brunswick SEO Services", "Headquarters"] 
        }} 
      />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/locations/east-brunswick" category="location" />
      
      <article className="pt-16 min-h-screen bg-gradient-to-b from-brand-light via-white to-brand-light">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-primary/10 rounded-full mb-6">
                <Home className="w-4 h-4 text-brand-primary" />
                <span className="text-sm font-semibold text-brand-primary">Our Headquarters - East Brunswick, NJ 08816</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6 leading-tight">
                Professional <strong className="text-brand-primary">SEO Services</strong> in <br />
                <strong className="text-brand-primary">East Brunswick, New Jersey</strong>
              </h1>
              
              <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-8 leading-relaxed">
                <strong>True Rank Digital</strong> is headquartered right here in <strong>East Brunswick, NJ</strong>. We help local businesses dominate search results along the <strong>Route 18 corridor</strong> and throughout East Brunswick's residential neighborhoods with proven <strong>local SEO strategies</strong>. Expert Google Business Profile optimization from your hometown SEO specialists.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <a href="/free-audit" className="inline-flex items-center space-x-2 px-8 py-4 bg-brand-primary text-white font-semibold text-lg rounded-full hover:bg-brand-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <TrendingUp className="w-5 h-5" />
                  <span>Get Free East Brunswick SEO Audit</span>
                </a>
                <a href="tel:+17324750139" className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-brand-primary text-brand-primary font-semibold text-lg rounded-full hover:bg-brand-primary/5 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                  <span>(732) 475-0139</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">48K</div>
                  <div className="text-sm text-brand-dark/60">East Brunswick Population</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">HQ</div>
                  <div className="text-sm text-brand-dark/60">Based in East Brunswick</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">4.9★</div>
                  <div className="text-sm text-brand-dark/60">Google Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">Local</div>
                  <div className="text-sm text-brand-dark/60">Your Hometown Agency</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why East Brunswick Businesses Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-brand-dark mb-12 text-center">
              Why <strong className="text-brand-primary">East Brunswick Businesses</strong> Choose True Rank Digital
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="glass-card p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                  <strong className="text-brand-primary">Headquartered</strong> in East Brunswick
                </h3>
                <p className="text-brand-dark/70 leading-relaxed">
                  We're not just another agency claiming to serve East Brunswick - we're based here at 08816. We shop local, know every shopping center along Route 18, understand Garden State Parkway traffic patterns, and have intimate knowledge of what works for East Brunswick businesses. Local presence means same-day consultations and strategies built by people who live here.
                </p>
              </div>

              <div className="glass-card p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                  <strong className="text-brand-primary">Route 18 Corridor</strong> Expertise
                </h3>
                <p className="text-brand-dark/70 leading-relaxed">
                  Route 18 is one of Central Jersey's most competitive business corridors. We understand the challenges of competing with big-box retailers and national chains. Our strategies help local East Brunswick businesses stand out with hyperlocal optimization, community connections, and targeted campaigns that big chains can't match.
                </p>
              </div>

              <div className="glass-card p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                  <strong className="text-brand-primary">Proven Local</strong> Results
                </h3>
                <p className="text-brand-dark/70 leading-relaxed">
                  Our own business ranks #1 for competitive East Brunswick searches. We practice what we preach. Our grid ranking system tracks visibility across all East Brunswick neighborhoods, Route 18 searches, and residential areas. We know what works because we've tested it right here in our hometown market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services for East Brunswick */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-brand-dark mb-6 text-center">
              Complete <strong className="text-brand-primary">SEO Services</strong> for East Brunswick Businesses
            </h2>
            <p className="text-xl text-brand-dark/60 text-center mb-12 max-w-3xl mx-auto">
              Specialized local search optimization for East Brunswick's Route 18 corridor and residential communities
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Route 18 Optimization */}
              <div className="glass-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      Route 18 Corridor Optimization
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed mb-4">
                      Dominate searches along East Brunswick's main commercial artery. We optimize for Route 18-specific keywords, capture commuter traffic from GSP and Turnpike, target major shopping centers and plazas, and help local businesses compete with national chains. Essential for retail, restaurants, automotive, and professional services along this competitive corridor.
                    </p>
                    <ul className="space-y-2 text-sm text-brand-dark/70">
                      <li className="flex items-start">
                        <span className="text-brand-primary mr-2">✓</span>
                        <span>"Route 18 East Brunswick" optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-primary mr-2">✓</span>
                        <span>Garden State Parkway Exit 127 targeting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-primary mr-2">✓</span>
                        <span>Shopping center proximity marketing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-primary mr-2">✓</span>
                        <span>Commuter traffic capture strategies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Residential Area SEO */}
              <div className="glass-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <Home className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      Residential Neighborhood Targeting
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed mb-4">
                      Capture searches from East Brunswick's 48,000 residents across residential neighborhoods. We optimize for hyperlocal 'near me' searches, target specific neighborhood keywords, emphasize convenient local service, and help home service contractors, medical practices, and local businesses dominate residential area searches.
                    </p>
                    <ul className="space-y-2 text-sm text-brand-dark/70">
                      <li className="flex items-start">
                        <span className="text-brand-primary mr-2">✓</span>
                        <span>Neighborhood-specific keyword targeting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-primary mr-2">✓</span>
                        <span>"Near me" search optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-primary mr-2">✓</span>
                        <span>Local homeowner demographics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-primary mr-2">✓</span>
                        <span>Service area radius optimization</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Google Business Profile */}
              <div className="glass-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      East Brunswick GBP Optimization
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed mb-4">
                      Complete Google Business Profile management with East Brunswick-specific optimization. We add photos featuring local landmarks, optimize for Route 18 and neighborhood searches, manage reviews emphasizing local service, and ensure your business appears in Google Maps searches from East Brunswick customers.
                    </p>
                    <ul className="space-y-2 text-sm text-brand-dark/70">
                      <li className="flex items-start">
                        <span className="text-brand-primary mr-2">✓</span>
                        <span>Local photo optimization (Route 18, landmarks)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-primary mr-2">✓</span>
                        <span>East Brunswick category optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-primary mr-2">✓</span>
                        <span>Review generation & management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-primary mr-2">✓</span>
                        <span>Google Maps ranking improvement</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Local Citations & Content */}
              <div className="glass-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      East Brunswick Citations & Content
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed mb-4">
                      Build authority in East Brunswick and Middlesex County directories with consistent NAP information. Content featuring East Brunswick landmarks (Tamarack Golf Course, Crystal Springs, Route 18 plazas) establishes your business as part of the local community while capturing valuable local search terms.
                    </p>
                    <ul className="space-y-2 text-sm text-brand-dark/70">
                      <li className="flex items-start">
                        <span className="text-brand-primary mr-2">✓</span>
                        <span>East Brunswick Township directories</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-primary mr-2">✓</span>
                        <span>Middlesex County business listings</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-primary mr-2">✓</span>
                        <span>Local Chamber of Commerce</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-primary mr-2">✓</span>
                        <span>Content with East Brunswick landmarks</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About East Brunswick Market */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                  Understanding <strong className="text-brand-primary">East Brunswick's</strong> Competitive Business Environment
                </h2>
                <p className="text-brand-dark/70 leading-relaxed mb-6">
                  East Brunswick (48,000+ residents) is <strong>Middlesex County's</strong> retail and commercial hub with the <strong>Route 18 corridor</strong> featuring major shopping centers, national retailers, restaurants, automotive dealerships, and professional services. The <strong>Garden State Parkway</strong> (Exit 127, 127A) and <strong>New Jersey Turnpike</strong> (Exit 9) access brings significant commuter and traveler traffic.
                </p>
                <p className="text-brand-dark/70 leading-relaxed mb-6">
                  Beyond the commercial corridor, East Brunswick's residential neighborhoods create strong local customer bases seeking convenient hometown service. The combination of highway access, regional shopping destination status, and established residential communities presents both opportunities and intense competition.
                </p>
                <p className="text-brand-dark/70 leading-relaxed mb-6">
                  Whether you're competing on the <strong>Route 18 corridor</strong>, serving residential neighborhoods, or targeting commuter traffic near highway exits, we understand East Brunswick's market dynamics better than anyone because we're based here. Let us help you dominate local searches in your hometown.
                </p>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6">
                  East Brunswick Areas We Serve
                </h3>
                <div className="grid grid-cols-2 gap-4 text-brand-dark/70">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                    <span>Route 18 Corridor</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                    <span>GSP Exit 127 Area</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                    <span>Turnpike Exit 9 Area</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                    <span>North of Route 18</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                    <span>South of Route 18</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                    <span>Tamarack Area</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                    <span>Crystal Springs</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                    <span>Old Bridge Border</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                    <span>Shopping Centers</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                    <span>Residential Communities</span>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-brand-dark mb-4">Serving All East Brunswick Zip Codes:</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium">08816</span>
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
              Our <strong className="text-brand-primary">East Brunswick SEO</strong> Process
            </h2>
            <p className="text-xl text-brand-dark/60 text-center mb-12 max-w-3xl mx-auto">
              Proven 5-step methodology that gets East Brunswick businesses ranking on page 1 of Google
            </p>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "1", title: "Local Market Analysis", desc: "Analyze Route 18 corridor competition, residential search patterns, and identify ranking opportunities specific to your East Brunswick location." },
                { step: "2", title: "Google Business Setup", desc: "Complete GBP optimization with East Brunswick photos, Route 18 landmarks, service area targeting, and category selection optimized for local searches." },
                { step: "3", title: "On-Page Optimization", desc: "Website optimization with East Brunswick keywords, Route 18 terms, local schema markup, and content that resonates with local customers." },
                { step: "4", title: "Citation Building", desc: "Strategic placement in East Brunswick directories, Middlesex County listings, local Chamber, and industry platforms with consistent NAP." },
                { step: "5", title: "Ongoing Optimization", desc: "Monthly in-person meetings at our East Brunswick office, ranking tracking across all areas, competitor analysis, and strategy adjustments." },
              ].map((item) => (
                <div key={item.step} className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
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
              Frequently Asked Questions About <strong className="text-brand-primary">East Brunswick SEO</strong>
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
        <section className="py-20 bg-gradient-to-br from-brand-primary via-brand-primary/90 to-brand-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6">
              Ready to Dominate East Brunswick Local Search?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Get your free custom SEO strategy from your hometown agency. Visit our East Brunswick office for an in-person consultation - we'll show you exactly how to outrank competitors on Route 18 and throughout East Brunswick.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/free-audit" className="inline-flex items-center space-x-2 px-10 py-5 bg-white text-brand-primary font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl">
                <TrendingUp className="w-6 h-6" />
                <span>Get Your Free East Brunswick SEO Audit</span>
              </a>
              <a href="tel:+17324750139" className="inline-flex items-center space-x-2 px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all duration-300">
                <Phone className="w-6 h-6" />
                <span>(732) 475-0139</span>
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-center gap-8 text-white/80">
              <div className="flex items-center space-x-2">
                <Home className="w-5 h-5" />
                <span>Based in East Brunswick</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Same-day consultations</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Your hometown SEO experts</span>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
