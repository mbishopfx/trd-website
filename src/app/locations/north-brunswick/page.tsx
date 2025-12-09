import type { Metadata } from 'next';
import { MapPin, TrendingUp, Phone, Clock, Users, Star, Award, Target, Zap, Shield, BarChart3, Building, ShoppingBag } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'North Brunswick NJ SEO Services | Route 27 Local SEO | True Rank Digital',
  description: 'Leading North Brunswick NJ SEO company specializing in local search optimization for businesses along Route 27, Renaissance area, and Adams Lane corridor. Expert Google Business Profile management and digital marketing for North Brunswick Township.',
  keywords: 'North Brunswick NJ SEO, North Brunswick SEO company, Route 27 SEO, Renaissance North Brunswick, Adams Lane marketing, North Brunswick digital marketing, Middlesex County SEO',
  alternates: { canonical: 'https://truerankdigital.com/locations/north-brunswick' },
  openGraph: {
    title: 'North Brunswick NJ SEO Services | Local SEO Expert | True Rank Digital',
    description: 'Professional SEO services for North Brunswick, NJ businesses. Dominate local search along Route 27 and throughout North Brunswick Township with our proven strategies.',
    url: 'https://truerankdigital.com/locations/north-brunswick',
    siteName: 'True Rank Digital',
    type: 'website',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function NorthBrunswickPage() {
  const faqs = [
    {
      question: "Why should North Brunswick businesses choose True Rank Digital for SEO?",
      answer: "True Rank Digital is based in neighboring East Brunswick, giving us intimate knowledge of North Brunswick's business landscape. We understand the Route 27 corridor competition, the Renaissance area's mixed-use development, Adams Lane commercial district, and residential neighborhoods. Our local presence means in-person consultations, faster response times, and SEO strategies tailored to North Brunswick's unique market position between New Brunswick and Route 1."
    },
    {
      question: "How do you optimize for businesses along Route 27?",
      answer: "Route 27 is North Brunswick's main commercial artery with intense competition from retail, restaurants, professional services, and automotive businesses. We optimize for 'Route 27' keyword variations, 'near me' searches from commuters, specific landmark targeting (Renaissance, ShopRite plaza, etc.), and differentiation from Route 1 businesses. Our strategies capture both local resident searches and pass-through traffic along this busy corridor."
    },
    {
      question: "What makes North Brunswick SEO different from neighboring towns?",
      answer: "North Brunswick sits between New Brunswick's urban density and East Brunswick's suburban market, creating unique competition dynamics. The Renaissance mixed-use development, proximity to Rutgers, major shopping centers, and Route 27/Route 1 access create diverse customer demographics. We account for commuter traffic patterns, competition from both neighboring towns, and North Brunswick's growing residential communities when developing your local SEO strategy."
    },
    {
      question: "Can you help businesses in the Renaissance area?",
      answer: "Absolutely! The Renaissance development has transformed North Brunswick with residential, retail, and professional spaces. We specialize in mixed-use development marketing, targeting both Renaissance residents and surrounding communities, optimizing for the modern lifestyle center environment, and capturing searches from people looking for convenient Route 27 access. Whether you're a Renaissance tenant or nearby business, we help you capture this growing market."
    },
    {
      question: "Do you work with automotive businesses in North Brunswick?",
      answer: "Yes! North Brunswick has significant automotive presence along Route 27 including dealerships, repair shops, and service centers. We specialize in automotive SEO including dealership inventory optimization, service department marketing, review management for auto businesses, and capturing high-intent searches like 'car service near me' and brand-specific automotive searches in the North Brunswick area."
    },
    {
      question: "How long does it take to see SEO results in North Brunswick?",
      answer: "Most North Brunswick businesses see initial ranking improvements within 30-60 days, with significant results in 3-6 months. Timeline depends on your industry competition along Route 27, your current online presence, and target keywords. We provide monthly reports tracking your rankings across North Brunswick neighborhoods, Route 27 searches, and comparison to local competitors in Adams Lane and Renaissance areas."
    },
    {
      question: "Do you optimize for specific North Brunswick neighborhoods?",
      answer: "Yes! We optimize for all North Brunswick areas including the Route 27 corridor, Renaissance development, Adams Lane district, residential neighborhoods like Linwood, Franklin Park area, Constitution Boulevard area, Cozzens Lane neighborhood, and areas near Community Park. Each area has different demographics and search patterns requiring customized local SEO approaches."
    },
    {
      question: "What's included in your North Brunswick SEO package?",
      answer: "Our packages include: Google Business Profile optimization with North Brunswick landmarks and Route 27 references, local citation building in Middlesex County directories, Route 27 corridor keyword targeting, content featuring North Brunswick locations (Renaissance, Community Park, etc.), review generation and management, local link building from North Brunswick organizations, monthly ranking reports across different North Brunswick areas, and access to our proprietary SEO dashboard."
    }
  ];

  return (
    <>
      <GEOSchema 
        pageType="location" 
        pageData={{ 
          title: "Professional SEO Services in North Brunswick, NJ - Route 27 Experts", 
          description: "True Rank Digital provides comprehensive local SEO services for North Brunswick, New Jersey businesses. Specializing in Route 27 corridor, Renaissance area, and Adams Lane district optimization.", 
          url: "https://truerankdigital.com/locations/north-brunswick", 
          keywords: ["North Brunswick NJ SEO", "Route 27 SEO", "Renaissance North Brunswick", "North Brunswick digital marketing", "Adams Lane SEO"], 
          category: "Local Business", 
          address: { 
            streetAddress: "Serving North Brunswick", 
            addressLocality: "North Brunswick", 
            addressRegion: "NJ", 
            postalCode: "08902", 
            addressCountry: "US" 
          }, 
          geo: { 
            latitude: "40.4517", 
            longitude: "-74.4794" 
          } 
        }} 
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" }, 
          { name: "Locations", url: "https://truerankdigital.com/locations" }, 
          { name: "North Brunswick", url: "https://truerankdigital.com/locations/north-brunswick" }
        ]} 
        entities={{ 
          primary: ["True Rank Digital", "North Brunswick NJ", "Local SEO", "Route 27", "North Brunswick SEO Services"] 
        }} 
      />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/locations/north-brunswick" category="location" />
      
      <article className="pt-16 min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-600">Serving North Brunswick, NJ & Route 27 Corridor</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6 leading-tight">
                Professional <strong className="text-brand-primary">SEO Services</strong> in <br />
                <strong className="text-brand-primary">North Brunswick, New Jersey</strong>
              </h1>
              
              <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-8 leading-relaxed">
                <strong>True Rank Digital</strong> helps North Brunswick businesses dominate local search results with proven <strong>local SEO strategies</strong> for the <strong>Route 27 corridor</strong>, Renaissance area, and Adams Lane district. Expert Google Business Profile optimization and digital marketing for North Brunswick Township.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <a href="/free-audit" className="inline-flex items-center space-x-2 px-8 py-4 bg-purple-600 text-white font-semibold text-lg rounded-full hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <TrendingUp className="w-5 h-5" />
                  <span>Get Free North Brunswick SEO Audit</span>
                </a>
                <a href="tel:+17324750139" className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold text-lg rounded-full hover:bg-purple-50 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                  <span>(732) 475-0139</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">42K</div>
                  <div className="text-sm text-brand-dark/60">North Brunswick Population</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">Route 27</div>
                  <div className="text-sm text-brand-dark/60">Main Business Corridor</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">4.9★</div>
                  <div className="text-sm text-brand-dark/60">Google Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">5 Min</div>
                  <div className="text-sm text-brand-dark/60">From North Brunswick</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why North Brunswick Businesses Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-brand-dark mb-12 text-center">
              Why <strong className="text-brand-primary">North Brunswick Businesses</strong> Choose True Rank Digital
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="glass-card p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                  <strong className="text-brand-primary">Route 27 Corridor</strong> Expertise
                </h3>
                <p className="text-brand-dark/70 leading-relaxed">
                  We understand the competitive Route 27 business environment from the Renaissance development to Adams Lane. Our local knowledge helps you stand out among retail, dining, automotive, and professional services competing for North Brunswick customers and commuter traffic.
                </p>
              </div>

              <div className="glass-card p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                  <strong className="text-brand-primary">Renaissance Area</strong> Specialists
                </h3>
                <p className="text-brand-dark/70 leading-relaxed">
                  The Renaissance mixed-use development has transformed North Brunswick's commercial landscape. We optimize for this modern lifestyle center, targeting both residents and visitors with strategies that capture searches from this growing community and surrounding neighborhoods.
                </p>
              </div>

              <div className="glass-card p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                  <strong className="text-brand-primary">Neighborhood-Specific</strong> Rankings
                </h3>
                <p className="text-brand-dark/70 leading-relaxed">
                  Track your visibility across all North Brunswick areas - Route 27 corridor, Adams Lane, Renaissance, residential neighborhoods. Our grid ranking system shows exactly where you appear in local searches across different North Brunswick zip codes and business districts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services for North Brunswick */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-brand-dark mb-6 text-center">
              Complete <strong className="text-brand-primary">SEO Services</strong> for North Brunswick Businesses
            </h2>
            <p className="text-xl text-brand-dark/60 text-center mb-12 max-w-3xl mx-auto">
              Specialized local search optimization for North Brunswick's Route 27 corridor and growing residential communities
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Route 27 Optimization */}
              <div className="glass-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      Route 27 Corridor Optimization
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed mb-4">
                      Dominate searches along North Brunswick's main commercial artery. We optimize for Route 27-specific keywords, capture commuter traffic searches, target major landmarks (Renaissance, shopping centers), and differentiate your business from dense corridor competition. Essential for retail, restaurants, automotive, and service businesses.
                    </p>
                    <ul className="space-y-2 text-sm text-brand-dark/70">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span>"Route 27" keyword optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span>Commuter traffic targeting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span>Renaissance area proximity marketing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span>Shopping center visibility</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Local Keyword Research */}
              <div className="glass-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      Renaissance & Adams Lane Targeting
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed mb-4">
                      Capture searches from North Brunswick's key commercial districts. We target Renaissance mixed-use development residents and visitors, Adams Lane professional corridor searches, and neighborhood-specific keywords that your competitors miss. Ideal for businesses serving the growing North Brunswick residential market.
                    </p>
                    <ul className="space-y-2 text-sm text-brand-dark/70">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span>Renaissance resident targeting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span>Adams Lane professional searches</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span>Neighborhood-specific keywords</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span>Shopping center proximity optimization</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Citation Building */}
              <div className="glass-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      North Brunswick Citation Building
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed mb-4">
                      Build authority in North Brunswick and Middlesex County directories with consistent NAP information. We ensure your business appears in township directories, shopping center listings, Renaissance area platforms, and industry-specific directories serving North Brunswick businesses and residents.
                    </p>
                    <ul className="space-y-2 text-sm text-brand-dark/70">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span>North Brunswick Township directories</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span>Middlesex County business listings</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span>Renaissance community platforms</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span>Shopping center directories</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Content Marketing */}
              <div className="glass-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      North Brunswick Content Creation
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed mb-4">
                      Content that resonates with North Brunswick customers. We create blogs, service pages, and location content featuring North Brunswick landmarks (Community Park, Renaissance, Route 27), local events, and neighborhood guides. Establishes your business as part of the North Brunswick community while targeting valuable local search terms.
                    </p>
                    <ul className="space-y-2 text-sm text-brand-dark/70">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span>Neighborhood area guides</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span>Renaissance lifestyle content</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span>Route 27 corridor business spotlights</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span>Local market insights</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About North Brunswick Market */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                  Understanding <strong className="text-brand-primary">North Brunswick's</strong> Growing Market
                </h2>
                <p className="text-brand-dark/70 leading-relaxed mb-6">
                  North Brunswick Township (42,000+ residents) sits strategically between New Brunswick and East Brunswick, with <strong>Route 27</strong> as its main commercial corridor. The <strong>Renaissance mixed-use development</strong> has transformed the township, bringing modern residential, retail, and dining options that attract both residents and visitors from surrounding communities.
                </p>
                <p className="text-brand-dark/70 leading-relaxed mb-6">
                  The Route 27 corridor features diverse businesses from national retailers to local restaurants, automotive services, and professional offices. The <strong>Adams Lane</strong> area provides additional commercial space, while residential neighborhoods like Linwood and Franklin Park create strong local customer bases. Proximity to Rutgers University and major highways (Route 1, Route 18) brings additional commuter and student traffic.
                </p>
                <p className="text-brand-dark/70 leading-relaxed mb-6">
                  Whether you're a Renaissance tenant, Route 27 corridor business, Adams Lane professional service, or residential area contractor, we understand North Brunswick's competitive dynamics and help you capture local searches from this growing market.
                </p>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6">
                  North Brunswick Areas We Serve
                </h3>
                <div className="grid grid-cols-2 gap-4 text-brand-dark/70">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span>Route 27 Corridor</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span>Renaissance Development</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span>Adams Lane</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span>Linwood</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span>Franklin Park Area</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span>Constitution Boulevard</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span>Cozzens Lane</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span>Community Park Area</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span>Hermann Road</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span>Shopping Center Areas</span>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-brand-dark mb-4">Serving All North Brunswick Zip Codes:</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-medium">08902</span>
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
              Our <strong className="text-brand-primary">North Brunswick SEO</strong> Process
            </h2>
            <p className="text-xl text-brand-dark/60 text-center mb-12 max-w-3xl mx-auto">
              Proven 5-step methodology that gets North Brunswick businesses ranking on page 1 of Google
            </p>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "1", title: "Market Analysis", desc: "Analyze competition along Route 27, Renaissance area, and your specific North Brunswick niche. Identify ranking opportunities in your neighborhood." },
                { step: "2", title: "Google Business Setup", desc: "Complete GBP optimization with North Brunswick-specific content, photos featuring local landmarks (Renaissance, Community Park), and service area targeting." },
                { step: "3", title: "On-Page Optimization", desc: "Website optimization with North Brunswick keywords, Route 27 terms, local schema markup, and content that resonates with North Brunswick customers." },
                { step: "4", title: "Citation Building", desc: "Strategic placement in North Brunswick Township directories, Middlesex County listings, Renaissance platforms, and shopping center directories." },
                { step: "5", title: "Ongoing Optimization", desc: "Monthly tracking across North Brunswick neighborhoods, Route 27 corridor rankings, and competitor analysis. Adjust strategies based on performance." },
              ].map((item) => (
                <div key={item.step} className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
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
              Frequently Asked Questions About <strong className="text-brand-primary">North Brunswick SEO</strong>
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
        <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6">
              Ready to Dominate North Brunswick Local Search?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Get your free custom SEO strategy designed specifically for your North Brunswick business. Whether you're on Route 27, in Renaissance, or serving residential areas - we'll show you how to outrank local competitors.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/free-audit" className="inline-flex items-center space-x-2 px-10 py-5 bg-white text-purple-600 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl">
                <TrendingUp className="w-6 h-6" />
                <span>Get Your Free North Brunswick SEO Audit</span>
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
                <span>Route 27 specialists</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>5 minutes from North Brunswick</span>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
