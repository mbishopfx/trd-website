import type { Metadata } from 'next';
import { MapPin, TrendingUp, Phone, Mail, Clock, Users, Star, Award, Target, Zap, Shield, BarChart3, Building, GraduationCap } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'New Brunswick NJ SEO Services | Rutgers Area Local SEO | True Rank Digital',
  description: 'Premier New Brunswick NJ SEO company specializing in local search optimization for businesses near Rutgers University, Robert Wood Johnson area, and downtown New Brunswick. Expert Google Business Profile management and digital marketing for New Brunswick\'s diverse business community.',
  keywords: 'New Brunswick NJ SEO, New Brunswick SEO company, Rutgers area SEO, downtown New Brunswick marketing, Robert Wood Johnson SEO, New Brunswick digital marketing, Middlesex County SEO, George Street SEO',
  alternates: { canonical: 'https://truerankdigital.com/locations/new-brunswick' },
  openGraph: {
    title: 'New Brunswick NJ SEO Services | Local SEO Expert | True Rank Digital',
    description: 'Professional SEO services for New Brunswick, NJ businesses. Dominate local search near Rutgers University and downtown New Brunswick with our proven strategies.',
    url: 'https://truerankdigital.com/locations/new-brunswick',
    siteName: 'True Rank Digital',
    type: 'website',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function NewBrunswickPage() {
  const faqs = [
    {
      question: "Why should New Brunswick businesses choose True Rank Digital for SEO?",
      answer: "True Rank Digital is based just minutes from New Brunswick in East Brunswick, giving us deep understanding of the Middlesex County market. We understand New Brunswick's unique business environment - from the Rutgers University student demographic to the medical district around Robert Wood Johnson Hospital, and the diverse downtown George Street corridor. Our proximity means in-person meetings, faster response times, and SEO strategies specifically designed for New Brunswick's competitive landscape."
    },
    {
      question: "How do you handle SEO for businesses near Rutgers University?",
      answer: "Rutgers University creates unique SEO opportunities and challenges with 50,000+ students, faculty, and staff. We optimize for student-focused searches, academic calendar seasonality, campus area targeting, and competition from both local businesses and online alternatives. Our strategies include targeting Rutgers-specific keywords, College Avenue optimization, student housing area marketing, and capturing the significant parent/visitor traffic throughout the academic year."
    },
    {
      question: "What makes New Brunswick SEO different from other cities?",
      answer: "New Brunswick is Middlesex County's seat with a unique blend of university community, major medical center (Robert Wood Johnson), diverse downtown business district, and significant commuter traffic from NJ Transit and Route 18. This creates intense competition across multiple sectors. We account for the transient student population, medical tourism, cultural diversity along George Street, and proximity competition from surrounding municipalities when developing your SEO strategy."
    },
    {
      question: "Do you work with medical practices near Robert Wood Johnson Hospital?",
      answer: "Absolutely! The Robert Wood Johnson University Hospital area is a major medical hub. We specialize in healthcare SEO including medical practice optimization, physician profile management, healthcare directory listings, patient review strategies, and HIPAA-compliant content marketing. We understand the competitive medical market in New Brunswick and help practices stand out in local health searches."
    },
    {
      question: "Can you help restaurants and businesses on George Street?",
      answer: "Yes! George Street and the downtown New Brunswick corridor present unique opportunities. We optimize for foot traffic searches, 'near me' queries from students and visitors, event-based marketing (Rutgers games, State Theatre events), cultural festival targeting, and competition from the dense restaurant row. Our strategies include Google Business Profile optimization for walk-in traffic, menu optimization for food searches, and targeting both students and professionals."
    },
    {
      question: "How long does SEO take for New Brunswick businesses?",
      answer: "Most New Brunswick businesses see initial improvements in 30-60 days, with significant results in 3-6 months. Timeline depends on your industry's competition level - downtown restaurants face different competition than service businesses in residential areas. We provide monthly progress reports tracking your rankings across New Brunswick neighborhoods, student area searches, and comparison to local competitors."
    },
    {
      question: "Do you optimize for specific New Brunswick neighborhoods?",
      answer: "Yes! We optimize for all New Brunswick areas including downtown/George Street district, the Rutgers campus areas (College Avenue, Cook/Douglass, Busch, Livingston), residential neighborhoods like Lincoln Park and Feaster Park, the Route 18 commercial corridor, and the medical district. Each area has different search patterns and demographics requiring customized local SEO approaches."
    },
    {
      question: "What's included in your New Brunswick SEO package?",
      answer: "Our New Brunswick packages include: Google Business Profile optimization with New Brunswick landmarks and neighborhoods, local citation building in Middlesex County directories, Rutgers-area specific keyword targeting, content featuring New Brunswick locations, review generation and management, local link building from New Brunswick organizations, monthly ranking reports showing your position across different New Brunswick areas, and access to our proprietary grid ranking dashboard."
    }
  ];

  return (
    <>
      <GEOSchema 
        pageType="location" 
        pageData={{ 
          title: "Professional SEO Services in New Brunswick, NJ - Rutgers Area Experts", 
          description: "True Rank Digital provides comprehensive local SEO services for New Brunswick, New Jersey businesses. Specializing in Rutgers University area, Robert Wood Johnson medical district, and downtown George Street corridor optimization.", 
          url: "https://truerankdigital.com/locations/new-brunswick", 
          keywords: ["New Brunswick NJ SEO", "Rutgers area SEO", "George Street marketing", "New Brunswick digital marketing", "Robert Wood Johnson SEO"], 
          category: "Local Business", 
          address: { 
            streetAddress: "Serving New Brunswick", 
            addressLocality: "New Brunswick", 
            addressRegion: "NJ", 
            postalCode: "08901", 
            addressCountry: "US" 
          }, 
          geo: { 
            latitude: "40.486200", 
            longitude: "-74.451800" 
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
          { name: "New Brunswick", url: "https://truerankdigital.com/locations/new-brunswick" }
        ]} 
        entities={{ 
          primary: ["True Rank Digital", "New Brunswick NJ", "Local SEO", "Rutgers University", "New Brunswick SEO Services"] 
        }} 
      />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/locations/new-brunswick" category="location" />
      
      <article className="pt-16 min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-600">Serving New Brunswick, NJ - County Seat & Rutgers University</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6 leading-tight">
                Professional <strong className="text-brand-primary">SEO Services</strong> in <br />
                <strong className="text-brand-primary">New Brunswick, New Jersey</strong>
              </h1>
              
              <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-8 leading-relaxed">
                <strong>True Rank Digital</strong> helps New Brunswick businesses dominate local search results with specialized <strong>SEO strategies</strong> for the Rutgers University area, Robert Wood Johnson medical district, and downtown <strong>George Street corridor</strong>. Expert local SEO for New Brunswick's unique business environment.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <a href="/free-audit" className="inline-flex items-center space-x-2 px-8 py-4 bg-green-600 text-white font-semibold text-lg rounded-full hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <TrendingUp className="w-5 h-5" />
                  <span>Get Free New Brunswick SEO Audit</span>
                </a>
                <a href="tel:+17324750139" className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-green-600 text-green-600 font-semibold text-lg rounded-full hover:bg-green-50 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                  <span>(732) 475-0139</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">55K</div>
                  <div className="text-sm text-brand-dark/60">New Brunswick Population</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">50K+</div>
                  <div className="text-sm text-brand-dark/60">Rutgers Students/Staff</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">4.9★</div>
                  <div className="text-sm text-brand-dark/60">Google Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">10 Min</div>
                  <div className="text-sm text-brand-dark/60">From New Brunswick</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why New Brunswick Businesses Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-brand-dark mb-12 text-center">
              Why <strong className="text-brand-primary">New Brunswick Businesses</strong> Choose True Rank Digital
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="glass-card p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                  <strong className="text-brand-primary">Rutgers University</strong> Expertise
                </h3>
                <p className="text-brand-dark/70 leading-relaxed">
                  We understand the Rutgers ecosystem with 50,000+ students, faculty, and staff. Our SEO strategies target student demographics, academic calendar patterns, campus area foot traffic, and parent/visitor searches throughout the year for maximum local visibility.
                </p>
              </div>

              <div className="glass-card p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                  <strong className="text-brand-primary">Downtown & Medical</strong> District Knowledge
                </h3>
                <p className="text-brand-dark/70 leading-relaxed">
                  From George Street's restaurant row to the Robert Wood Johnson medical campus, we know New Brunswick's key business districts. Our local expertise helps you capture searches from the diverse downtown corridor and medical tourism market.
                </p>
              </div>

              <div className="glass-card p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                  <strong className="text-brand-primary">Multi-Neighborhood</strong> Targeting
                </h3>
                <p className="text-brand-dark/70 leading-relaxed">
                  Track rankings across all New Brunswick areas - College Avenue, George Street, Route 18 corridor, residential neighborhoods. Our grid ranking system shows exactly where you appear in local searches across different New Brunswick zip codes and districts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services for New Brunswick */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-brand-dark mb-6 text-center">
              Complete <strong className="text-brand-primary">SEO Services</strong> for New Brunswick Businesses
            </h2>
            <p className="text-xl text-brand-dark/60 text-center mb-12 max-w-3xl mx-auto">
              Specialized local search optimization for New Brunswick's university town, medical hub, and county seat environment
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Rutgers-Area Optimization */}
              <div className="glass-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      Rutgers University Area Optimization
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed mb-4">
                      Capture the massive Rutgers market with strategies targeting student searches, campus area foot traffic, parent/visitor queries, and academic calendar patterns. We optimize for College Avenue, George Street, Cook/Douglass, Busch, and Livingston campus areas with student-focused content and seasonal campaigns.
                    </p>
                    <ul className="space-y-2 text-sm text-brand-dark/70">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Student demographic targeting (ages 18-24)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Campus event & game day optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Parent/visitor search capture</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Student housing area marketing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Medical District SEO */}
              <div className="glass-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      Medical District & Healthcare SEO
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed mb-4">
                      Stand out in New Brunswick's competitive medical market around Robert Wood Johnson University Hospital. Healthcare-specific SEO including physician profiles, medical practice optimization, patient review management, and HIPAA-compliant content strategies that drive qualified patient searches.
                    </p>
                    <ul className="space-y-2 text-sm text-brand-dark/70">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Medical practice Google Business Profile</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Healthcare directory optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Patient review generation & management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Medical tourism targeting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Downtown/George Street */}
              <div className="glass-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      Downtown & George Street Corridor SEO
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed mb-4">
                      Maximize visibility for downtown New Brunswick businesses on George Street, Albany Street, and the cultural district. We optimize for foot traffic searches, 'near me' queries, event-based traffic (State Theatre, Stress Factory, Rutgers events), and the diverse dining scene.
                    </p>
                    <ul className="space-y-2 text-sm text-brand-dark/70">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Restaurant & retail foot traffic optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Event-based marketing strategies</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Cultural festival targeting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>NJ Transit commuter capture</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Local Citation & Content */}
              <div className="glass-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      New Brunswick Citation & Content Marketing
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed mb-4">
                      Build authority across New Brunswick and Middlesex County directories with consistent NAP data. Content featuring New Brunswick landmarks, Rutgers connections, and local events establishes your business as part of the New Brunswick community while capturing valuable local search terms.
                    </p>
                    <ul className="space-y-2 text-sm text-brand-dark/70">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Middlesex County directories</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Rutgers community platforms</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>New Brunswick Chamber of Commerce</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Local content with George Street references</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About New Brunswick Market */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                  Understanding <strong className="text-brand-primary">New Brunswick's</strong> Dynamic Business Environment
                </h2>
                <p className="text-brand-dark/70 leading-relaxed mb-6">
                  New Brunswick is <strong>Middlesex County's seat</strong> and home to <strong>Rutgers University</strong> (50,000+ students, faculty, staff), creating a unique business environment. The combination of university community, <strong>Robert Wood Johnson University Hospital</strong> medical district, diverse downtown cultural corridor, and major transit hub presents both opportunities and intense competition.
                </p>
                <p className="text-brand-dark/70 leading-relaxed mb-6">
                  The <strong>George Street corridor</strong> features dozens of restaurants, bars, and retailers competing for student spending. The <strong>Route 18 commercial area</strong> serves commuters and residents. The medical district attracts patients from throughout Central Jersey. Each area requires different SEO strategies to capture the right local audience.
                </p>
                <p className="text-brand-dark/70 leading-relaxed mb-6">
                  Whether you're a restaurant on George Street, a medical practice near RWJUH, a service business in residential neighborhoods like Lincoln Park, or a retail shop downtown, we understand New Brunswick's market dynamics and competitive landscape to position your business for maximum local search visibility.
                </p>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6">
                  New Brunswick Areas We Serve
                </h3>
                <div className="grid grid-cols-2 gap-4 text-brand-dark/70">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>George Street Downtown</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Rutgers College Avenue</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Cook/Douglass Campus</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Busch Campus Area</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Medical District (RWJUH)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Route 18 Corridor</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Lincoln Park</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Feaster Park</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Albany Street</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>NJ Transit Station Area</span>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-brand-dark mb-4">Serving All New Brunswick Zip Codes:</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-medium">08901</span>
                    <span className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-medium">08903</span>
                    <span className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-medium">08906</span>
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
              Our <strong className="text-brand-primary">New Brunswick SEO</strong> Process
            </h2>
            <p className="text-xl text-brand-dark/60 text-center mb-12 max-w-3xl mx-auto">
              Proven methodology that gets New Brunswick businesses ranking on page 1 across university, medical, and downtown searches
            </p>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "1", title: "Market Analysis", desc: "Analyze competition in your New Brunswick niche - Rutgers area, medical district, or downtown. Identify ranking opportunities specific to your neighborhood and target demographic." },
                { step: "2", title: "Google Business Optimization", desc: "Complete GBP setup with New Brunswick-specific content, photos featuring local landmarks (Rutgers, George Street, etc.), and service area targeting across all neighborhoods." },
                { step: "3", title: "On-Page SEO", desc: "Website optimization with New Brunswick keywords, Rutgers-area terms, local schema markup, and content that resonates with students, medical patients, or downtown visitors." },
                { step: "4", title: "Citation Building", desc: "Strategic placement in Rutgers community platforms, Middlesex County directories, medical networks (if applicable), and downtown business associations with consistent NAP." },
                { step: "5", title: "Ongoing Optimization", desc: "Monthly tracking across New Brunswick neighborhoods, Rutgers campus areas, and competitor analysis. Adjust strategies based on performance data and seasonal patterns." },
              ].map((item) => (
                <div key={item.step} className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
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
              Frequently Asked Questions About <strong className="text-brand-primary">New Brunswick SEO</strong>
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
        <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6">
              Ready to Dominate New Brunswick Local Search?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Get your free custom SEO strategy designed specifically for your New Brunswick business. Whether you're targeting Rutgers students, medical patients, or downtown visitors - we'll show you how to outrank competitors.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/free-audit" className="inline-flex items-center space-x-2 px-10 py-5 bg-white text-green-600 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl">
                <TrendingUp className="w-6 h-6" />
                <span>Get Your Free New Brunswick SEO Audit</span>
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
                <GraduationCap className="w-5 h-5" />
                <span>Rutgers area specialists</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>10 minutes from New Brunswick</span>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
