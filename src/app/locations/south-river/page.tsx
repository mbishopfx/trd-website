import type { Metadata } from 'next';
import { MapPin, TrendingUp, Phone, Clock, Users, Star, Award, Target, Zap, Shield, BarChart3, Heart, Home } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import GoogleMapComponent from '@/components/sections/GoogleMap';

export const metadata: Metadata = {
  title: 'South River NJ SEO Services | Main Street Local SEO | True Rank Digital',
  description: 'Premier South River NJ SEO company specializing in local search optimization for small businesses, Main Street shops, and service providers in South River Borough. Expert Google Business Profile management and community-focused digital marketing.',
  keywords: 'South River NJ SEO, South River SEO company, Main Street South River, South River digital marketing, small business SEO South River, Middlesex County SEO',
  alternates: { canonical: 'https://truerankdigital.com/locations/south-river' },
  openGraph: {
    title: 'South River NJ SEO Services | Local SEO Expert | True Rank Digital',
    description: 'Professional SEO services for South River, NJ businesses. Dominate local search in South River\'s close-knit community with our proven small-business SEO strategies.',
    url: 'https://truerankdigital.com/locations/south-river',
    siteName: 'True Rank Digital',
    type: 'website',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function SouthRiverPage() {
  const faqs = [
    {
      question: "Why should South River businesses choose True Rank Digital for SEO?",
      answer: "True Rank Digital is based in East Brunswick, just 10 minutes from South River, giving us intimate knowledge of Middlesex County's small-town business environment. We understand South River's close-knit community, Main Street business dynamics, residential customer base, and how to compete against larger neighboring towns. Our local presence means personalized service, in-person consultations, and SEO strategies specifically tailored to South River's unique small-town market."
    },
    {
      question: "How do you help Main Street South River businesses get found online?",
      answer: "Main Street South River faces competition from larger commercial corridors in surrounding towns. We optimize for 'Main Street South River' searches, target local resident queries, emphasize community connections, leverage South River pride and loyalty, and help you stand out with authentic local content. Our strategies focus on building strong local presence that resonates with South River residents who prefer supporting hometown businesses."
    },
    {
      question: "What makes South River SEO different from larger towns?",
      answer: "South River (16,000 residents) is a tight-knit borough where word-of-mouth and community reputation matter tremendously. Unlike larger towns, South River SEO requires emphasizing local connections, community involvement, personal service, and hometown loyalty. We help you leverage these strengths online while capturing searches from residents who want to support local South River businesses rather than driving to bigger commercial areas."
    },
    {
      question: "Can small businesses in South River compete with larger neighboring towns?",
      answer: "Absolutely! South River's strength is its community-focused customer base. We help you win by targeting hyperlocal searches ('South River' + your service), emphasizing convenient local service, building strong review presence showing community support, creating content about serving South River residents, and capturing customers who prioritize hometown businesses over big-box alternatives in neighboring towns."
    },
    {
      question: "Do you help South River home service contractors?",
      answer: "Yes! South River has many residents needing home services, contractors, and local professionals. We optimize for home service searches in South River, target surrounding neighborhoods (Sayreville, Old Bridge borders), emphasize quick local response times, showcase South River projects and testimonials, and help contractors dominate 'near me' searches from South River homeowners."
    },
    {
      question: "How long does it take to see SEO results in South River?",
      answer: "South River businesses often see faster initial results (within 30-45 days) due to lower search volume competition compared to larger towns. Significant page 1 rankings typically occur within 2-4 months. The smaller market means quicker traction, but consistency is key to maintaining dominance. We provide monthly reports tracking your South River rankings and local visibility improvements."
    },
    {
      question: "Do you optimize for searches from neighboring towns like Sayreville and Old Bridge?",
      answer: "Yes! While focusing on South River, we also capture searches from bordering areas where South River businesses can serve. We target Sayreville border areas, Old Bridge neighborhoods near South River, East Brunswick southern areas, and commuters passing through South River. This expands your reach beyond South River's 16,000 residents to surrounding communities."
    },
    {
      question: "What's included in your South River SEO package?",
      answer: "Our packages include: Google Business Profile optimization emphasizing South River community, local citation building in Middlesex County and South River directories, hyperlocal keyword targeting, content featuring Main Street and local landmarks, review generation showcasing community support, local link building from South River organizations, monthly ranking reports for South River searches, and our proprietary SEO dashboard."
    }
  ];

  return (
    <>
      <GEOSchema 
        pageType="location" 
        pageData={{ 
          title: "Professional SEO Services in South River, NJ - Small Business Experts", 
          description: "True Rank Digital provides comprehensive local SEO services for South River, New Jersey businesses. Specializing in Main Street shops, home services, and small businesses in South River Borough's close-knit community.", 
          url: "https://truerankdigital.com/locations/south-river", 
          keywords: ["South River NJ SEO", "Main Street South River", "South River small business SEO", "South River digital marketing"], 
          category: "Local Business", 
          address: { 
            streetAddress: "Serving South River", 
            addressLocality: "South River", 
            addressRegion: "NJ", 
            postalCode: "08882", 
            addressCountry: "US" 
          }, 
          geo: { 
            latitude: "40.446200", 
            longitude: "-74.386000" 
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
          { name: "South River", url: "https://truerankdigital.com/locations/south-river" }
        ]} 
        entities={{ 
          primary: ["True Rank Digital", "South River NJ", "Local SEO", "Main Street", "South River SEO Services"] 
        }} 
      />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/locations/south-river" category="location" />
      
      <article className="pt-16 min-h-screen bg-gradient-to-b from-teal-50 via-white to-teal-50">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-teal-100 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-teal-600" />
                <span className="text-sm font-semibold text-teal-600">Serving South River, NJ - Hometown SEO Specialists</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6 leading-tight">
                Professional <strong className="text-brand-primary">SEO Services</strong> in <br />
                <strong className="text-brand-primary">South River, New Jersey</strong>
              </h1>
              
              <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-8 leading-relaxed">
                <strong>True Rank Digital</strong> helps South River businesses dominate local search results with community-focused <strong>SEO strategies</strong> for <strong>Main Street shops</strong>, home service contractors, and local professionals. Expert Google Business Profile optimization and digital marketing for South River Borough's close-knit business community.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <a href="/free-audit" className="inline-flex items-center space-x-2 px-8 py-4 bg-teal-600 text-white font-semibold text-lg rounded-full hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <TrendingUp className="w-5 h-5" />
                  <span>Get Free South River SEO Audit</span>
                </a>
                <a href="tel:+17324750139" className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-teal-600 text-teal-600 font-semibold text-lg rounded-full hover:bg-teal-50 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                  <span>(732) 475-0139</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">16K</div>
                  <div className="text-sm text-brand-dark/60">South River Population</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">Local</div>
                  <div className="text-sm text-brand-dark/60">Community Focus</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">4.9★</div>
                  <div className="text-sm text-brand-dark/60">Google Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">10 Min</div>
                  <div className="text-sm text-brand-dark/60">From South River</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why South River Businesses Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-brand-dark mb-12 text-center">
              Why <strong className="text-brand-primary">South River Businesses</strong> Choose True Rank Digital
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="glass-card p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                  <strong className="text-brand-primary">Community-Focused</strong> Approach
                </h3>
                <p className="text-brand-dark/70 leading-relaxed">
                  We understand South River's small-town values and tight-knit community. Our SEO strategies emphasize local connections, hometown pride, and community involvement - values that resonate with South River residents who prefer supporting local businesses over big-box alternatives.
                </p>
              </div>

              <div className="glass-card p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                  <strong className="text-brand-primary">Main Street</strong> Expertise
                </h3>
                <p className="text-brand-dark/70 leading-relaxed">
                  From Main Street shops to residential area contractors, we know how to help South River businesses compete against larger neighboring towns. Our hyperlocal strategies capture customers who value convenient, personal service from hometown businesses they can trust.
                </p>
              </div>

              <div className="glass-card p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                  <strong className="text-brand-primary">Small Business</strong> Specialists
                </h3>
                <p className="text-brand-dark/70 leading-relaxed">
                  We specialize in SEO for small businesses like yours. Our strategies work within your budget, focus on high-ROI local keywords, and deliver measurable results. Track your South River rankings in real-time and see exactly how you're performing against local competitors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services for South River */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-brand-dark mb-6 text-center">
              Complete <strong className="text-brand-primary">SEO Services</strong> for South River Businesses
            </h2>
            <p className="text-xl text-brand-dark/60 text-center mb-12 max-w-3xl mx-auto">
              Specialized local search optimization for South River's small business community and Main Street shops
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Main Street Optimization */}
              <div className="glass-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      Main Street & Local Business Optimization
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed mb-4">
                      Help South River residents find your Main Street business. We optimize for 'Main Street South River' searches, target local customer queries, emphasize convenient hometown location, showcase community connections, and position you as the local alternative to larger commercial areas. Perfect for retail shops, restaurants, and professional services.
                    </p>
                    <ul className="space-y-2 text-sm text-brand-dark/70">
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">✓</span>
                        <span>"Main Street South River" keyword optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">✓</span>
                        <span>Local resident targeting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">✓</span>
                        <span>Community connection emphasis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">✓</span>
                        <span>Hometown loyalty messaging</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Home Services SEO */}
              <div className="glass-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Home className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      Home Services & Contractor SEO
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed mb-4">
                      Dominate local searches for home services in South River. We target South River homeowners, emphasize quick local response times, showcase South River project portfolios, optimize for 'near me' emergency searches, and capture surrounding area customers (Sayreville, Old Bridge borders). Ideal for plumbers, electricians, HVAC, landscaping, and contractors.
                    </p>
                    <ul className="space-y-2 text-sm text-brand-dark/70">
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">✓</span>
                        <span>South River homeowner targeting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">✓</span>
                        <span>Emergency service optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">✓</span>
                        <span>Local project showcase</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">✓</span>
                        <span>Surrounding area expansion</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Review & Reputation */}
              <div className="glass-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      Review Generation & Community Reputation
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed mb-4">
                      In South River's close-knit community, reputation is everything. We help you build strong online presence with systematic review generation, showcase community support and local loyalty, respond to reviews professionally, and leverage positive testimonials from South River customers. Strong reviews convince residents to choose local over chain alternatives.
                    </p>
                    <ul className="space-y-2 text-sm text-brand-dark/70">
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">✓</span>
                        <span>Automated review requests</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">✓</span>
                        <span>Community testimonial showcase</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">✓</span>
                        <span>Review response management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">✓</span>
                        <span>Reputation monitoring</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Content Marketing */}
              <div className="glass-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      South River Community Content
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed mb-4">
                      Content that connects with South River residents. We create blogs and service pages featuring South River landmarks, local events, community involvement, and neighborhood stories. Content that establishes your business as part of South River's fabric while targeting valuable local search terms that drive qualified traffic.
                    </p>
                    <ul className="space-y-2 text-sm text-brand-dark/70">
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">✓</span>
                        <span>South River neighborhood content</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">✓</span>
                        <span>Community event coverage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">✓</span>
                        <span>Local business spotlights</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">✓</span>
                        <span>Hometown success stories</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About South River Market */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                  Understanding <strong className="text-brand-primary">South River's</strong> Hometown Community
                </h2>
                <p className="text-brand-dark/70 leading-relaxed mb-6">
                  South River Borough (16,000 residents) is Middlesex County's tight-knit hometown community where <strong>Main Street businesses</strong> thrive on personal relationships and local loyalty. Unlike larger neighboring towns, South River maintains its small-town character where residents know their local business owners and prefer supporting hometown establishments.
                </p>
                <p className="text-brand-dark/70 leading-relaxed mb-6">
                  <strong>Main Street</strong> features local shops, restaurants, and professional services competing with larger commercial corridors in Sayreville, Old Bridge, and East Brunswick. South River's strength is its community-focused customer base - residents who value personal service, convenient location, and supporting neighbors' businesses over anonymous big-box alternatives.
                </p>
                <p className="text-brand-dark/70 leading-relaxed mb-6">
                  Whether you're a Main Street retailer, home service contractor, professional service provider, or local restaurant, we help you leverage South River's hometown advantage online. Our SEO strategies capture local searches, emphasize community connections, and position you as the trusted local choice for South River residents.
                </p>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6">
                  South River Areas We Serve
                </h3>
                <div className="grid grid-cols-2 gap-4 text-brand-dark/70">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span>Main Street</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span>Washington Street</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span>Whitehead Avenue</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span>Hillside Avenue</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span>Prospect Street</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span>Reid Street</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span>Jackson Street</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span>Old Bridge Border</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span>Sayreville Border</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span>Route 18 Access Areas</span>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-brand-dark mb-4">Serving South River Zip Code:</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-teal-50 text-teal-600 rounded-full text-sm font-medium">08882</span>
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
              Our <strong className="text-brand-primary">South River SEO</strong> Process
            </h2>
            <p className="text-xl text-brand-dark/60 text-center mb-12 max-w-3xl mx-auto">
              Proven methodology designed for South River's small business community
            </p>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "1", title: "Local Analysis", desc: "Analyze South River market, Main Street competition, and identify low-competition keywords where you can quickly rank page 1." },
                { step: "2", title: "Google Business Setup", desc: "Complete GBP optimization with South River-specific content, Main Street photos, community connections, and hometown messaging." },
                { step: "3", title: "On-Page SEO", desc: "Website optimization with South River hyperlocal keywords, community-focused content, and messaging that resonates with local residents." },
                { step: "4", title: "Review Building", desc: "Systematic review generation showcasing community support, testimonials from South River customers, and strong local reputation." },
                { step: "5", title: "Ongoing Growth", desc: "Monthly tracking of South River rankings, expand to surrounding areas, adjust strategies based on what's working in your market." },
              ].map((item) => (
                <div key={item.step} className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
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
              Frequently Asked Questions About <strong className="text-brand-primary">South River SEO</strong>
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
        <section className="py-20 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6">
              Ready to Dominate South River Local Search?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Get your free custom SEO strategy designed specifically for South River small businesses. We'll show you how to capture local customers and outrank competitors - both in South River and surrounding areas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/free-audit" className="inline-flex items-center space-x-2 px-10 py-5 bg-white text-teal-600 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl">
                <TrendingUp className="w-6 h-6" />
                <span>Get Your Free South River SEO Audit</span>
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
                <Heart className="w-5 h-5" />
                <span>Community-focused specialists</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>10 minutes from South River</span>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-4">
                Serving <span className="text-brand-primary">South River, NJ</span>
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                We provide SEO services to South River businesses from our East Brunswick headquarters
              </p>
            </div>
            <GoogleMapComponent
              locations={[
                {
                  lat: 40.446200,
                  lng: -74.386000,
                  name: 'South River, NJ',
                  address: 'South River, New Jersey',
                },
              ]}
              singleLocation={true}
              height="500px"
            />
          </div>
        </section>
      </article>
    </>
  );
}
