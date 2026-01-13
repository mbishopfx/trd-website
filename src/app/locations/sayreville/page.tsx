import type { Metadata } from 'next';
import { MapPin, TrendingUp, Phone, Clock, Users, Star, Award, Target, Zap, Shield, BarChart3, Building, Anchor } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import GoogleMapComponent from '@/components/sections/GoogleMap';

export const metadata: Metadata = {
  title: 'Sayreville NJ SEO Services | Route 9 Local SEO | True Rank Digital',
  description: 'Premier Sayreville NJ SEO company specializing in local search optimization for businesses along Route 9, Parlin, Morgan, and Sayreville waterfront areas. Expert Google Business Profile management and digital marketing for Sayreville Borough.',
  keywords: 'Sayreville NJ SEO, Sayreville SEO company, Route 9 SEO, Parlin SEO, Morgan NJ marketing, Sayreville digital marketing, Middlesex County SEO, Sayreville waterfront',
  alternates: { canonical: 'https://truerankdigital.com/locations/sayreville' },
  openGraph: {
    title: 'Sayreville NJ SEO Services | Local SEO Expert | True Rank Digital',
    description: 'Professional SEO services for Sayreville, NJ businesses. Dominate local search along Route 9 and throughout Sayreville Borough with our proven strategies.',
    url: 'https://truerankdigital.com/locations/sayreville',
    siteName: 'True Rank Digital',
    type: 'website',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function SayrevillePage() {
  const faqs = [
    {
      question: "Why should Sayreville businesses choose True Rank Digital for SEO?",
      answer: "True Rank Digital is based in East Brunswick, just across the Raritan River from Sayreville, giving us deep knowledge of the Middlesex County market. We understand Sayreville's diverse business environment - from the Route 9 corridor to Parlin's industrial areas, Morgan's waterfront, and the growing residential communities. Our proximity enables in-person meetings, local market insights, and SEO strategies specifically designed for Sayreville's competitive landscape."
    },
    {
      question: "How do you optimize for businesses along Route 9?",
      answer: "Route 9 is Sayreville's primary commercial corridor with retail, restaurants, automotive services, and professional businesses. We optimize for 'Route 9' keyword variations, capture commuter and local traffic searches, target specific areas (Parlin section, South Amboy border), and help you stand out from dense corridor competition. Our strategies include landmark targeting, 'near me' optimization, and differentiation from surrounding municipality businesses."
    },
    {
      question: "What makes Sayreville SEO different from other towns?",
      answer: "Sayreville's unique geography with waterfront areas along the Raritan River, industrial zones, Garden State Parkway access, and distinct communities (Parlin, Morgan, Sayreville proper) creates varied customer demographics and search patterns. We account for industrial business searches, residential area targeting, waterfront development opportunities, and competition from both Middlesex and Monmouth County businesses when developing your local SEO strategy."
    },
    {
      question: "Can you help businesses in Parlin and Morgan areas?",
      answer: "Absolutely! Parlin and Morgan are integral parts of Sayreville with distinct characteristics. Parlin's Route 9 commercial presence and Morgan's waterfront residential area each require different SEO approaches. We optimize for neighborhood-specific searches, target customers in each community, and ensure your business appears in hyperlocal searches from Parlin and Morgan residents."
    },
    {
      question: "Do you work with industrial businesses in Sayreville?",
      answer: "Yes! Sayreville has significant industrial presence requiring specialized B2B SEO strategies. We optimize for industrial search terms, supplier/vendor searches, business directory listings, industry-specific platforms, and capture searches from companies looking for Sayreville-based industrial services. Our strategies target both local and regional B2B searches."
    },
    {
      question: "How long does it take to see SEO results for Sayreville businesses?",
      answer: "Most Sayreville businesses see initial improvements in 30-60 days, with significant ranking growth in 3-6 months. Timeline varies based on Route 9 corridor competition, your industry, and current online presence. We provide monthly progress reports tracking rankings across Sayreville neighborhoods, Parlin area searches, and comparison to Route 9 competitors."
    },
    {
      question: "Do you optimize for Garden State Parkway area searches?",
      answer: "Yes! Sayreville's Garden State Parkway access (Exit 123, 124, 125) brings significant traffic. We optimize for Parkway exit searches, traveler and commuter targeting, 'near Garden State Parkway' keywords, and capture searches from people using the Parkway to access Sayreville businesses. Valuable for restaurants, hotels, gas stations, and retail near Parkway exits."
    },
    {
      question: "What's included in your Sayreville SEO package?",
      answer: "Our packages include: Google Business Profile optimization with Sayreville landmarks (Raritan River, Route 9, Garden State Parkway), local citation building in Middlesex County directories, Parlin and Morgan area-specific keyword targeting, content featuring Sayreville locations, review generation and management, local link building from Sayreville organizations, monthly ranking reports across different Sayreville areas, and access to our proprietary grid ranking dashboard."
    }
  ];

  return (
    <>
      <GEOSchema 
        pageType="location" 
        pageData={{ 
          title: "Professional SEO Services in Sayreville, NJ - Route 9 Corridor Experts", 
          description: "True Rank Digital provides comprehensive local SEO services for Sayreville, New Jersey businesses. Specializing in Route 9 corridor, Parlin area, Morgan waterfront, and Garden State Parkway access optimization.", 
          url: "https://truerankdigital.com/locations/sayreville", 
          keywords: ["Sayreville NJ SEO", "Route 9 SEO", "Parlin SEO", "Sayreville digital marketing", "Morgan NJ SEO"], 
          category: "Local Business", 
          address: { 
            streetAddress: "Serving Sayreville", 
            addressLocality: "Sayreville", 
            addressRegion: "NJ", 
            postalCode: "08872", 
            addressCountry: "US" 
          }, 
          geo: { 
            latitude: "40.459500", 
            longitude: "-74.361000" 
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
          { name: "Sayreville", url: "https://truerankdigital.com/locations/sayreville" }
        ]} 
        entities={{ 
          primary: ["True Rank Digital", "Sayreville NJ", "Local SEO", "Route 9", "Sayreville SEO Services"] 
        }} 
      />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/locations/sayreville" category="location" />
      
      <article className="pt-16 min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-100 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-semibold text-indigo-600">Serving Sayreville, Parlin, Morgan & Route 9 Corridor</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6 leading-tight">
                Professional <strong className="text-brand-primary">SEO Services</strong> in <br />
                <strong className="text-brand-primary">Sayreville, New Jersey</strong>
              </h1>
              
              <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-8 leading-relaxed">
                <strong>True Rank Digital</strong> helps Sayreville businesses dominate local search results with specialized <strong>SEO strategies</strong> for the <strong>Route 9 corridor</strong>, Parlin commercial area, Morgan waterfront, and Garden State Parkway access areas. Expert local SEO for Sayreville Borough's diverse business community.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <a href="/free-audit" className="inline-flex items-center space-x-2 px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <TrendingUp className="w-5 h-5" />
                  <span>Get Free Sayreville SEO Audit</span>
                </a>
                <a href="tel:+17324750139" className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-semibold text-lg rounded-full hover:bg-indigo-50 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                  <span>(732) 475-0139</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">45K</div>
                  <div className="text-sm text-brand-dark/60">Sayreville Population</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">GSP</div>
                  <div className="text-sm text-brand-dark/60">Parkway Access (3 exits)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">4.9★</div>
                  <div className="text-sm text-brand-dark/60">Google Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">15 Min</div>
                  <div className="text-sm text-brand-dark/60">From Sayreville</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Sayreville Businesses Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-brand-dark mb-12 text-center">
              Why <strong className="text-brand-primary">Sayreville Businesses</strong> Choose True Rank Digital
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="glass-card p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                  <strong className="text-brand-primary">Route 9 & Parkway</strong> Expertise
                </h3>
                <p className="text-brand-dark/70 leading-relaxed">
                  We understand Sayreville's strategic location along Route 9 and Garden State Parkway (exits 123, 124, 125). Our SEO strategies capture both local resident searches and commuter/traveler traffic, maximizing visibility for Sayreville businesses serving diverse customer bases.
                </p>
              </div>

              <div className="glass-card p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <Anchor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                  <strong className="text-brand-primary">Waterfront & Industrial</strong> Knowledge
                </h3>
                <p className="text-brand-dark/70 leading-relaxed">
                  From Raritan River waterfront development to industrial zones, we know Sayreville's varied business landscape. Whether you serve residential, commercial, or industrial markets, we optimize for your specific Sayreville customer segment.
                </p>
              </div>

              <div className="glass-card p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                  <strong className="text-brand-primary">Multi-Community</strong> Targeting
                </h3>
                <p className="text-brand-dark/70 leading-relaxed">
                  Track rankings across Sayreville proper, Parlin, Morgan, and Melrose communities. Our grid ranking system shows your visibility across different Sayreville zip codes and neighborhoods, helping you dominate all local search areas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Sayreville */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-brand-dark mb-6 text-center">
              Complete <strong className="text-brand-primary">SEO Services</strong> for Sayreville Businesses
            </h2>
            <p className="text-xl text-brand-dark/60 text-center mb-12 max-w-3xl mx-auto">
              Specialized local search optimization for Sayreville's Route 9 corridor, industrial areas, and waterfront communities
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Route 9 Optimization */}
              <div className="glass-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      Route 9 Corridor Optimization
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed mb-4">
                      Maximize visibility along Sayreville's main commercial highway. We target Route 9-specific searches, optimize for commuter traffic from Old Bridge and South Amboy, capture 'near me' queries from travelers, and position your business against corridor competition. Critical for retail, dining, automotive, and service businesses on Route 9.
                    </p>
                    <ul className="space-y-2 text-sm text-brand-dark/70">
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">✓</span>
                        <span>"Route 9 Sayreville" keyword optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">✓</span>
                        <span>Commuter and traveler targeting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">✓</span>
                        <span>Parlin area proximity marketing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">✓</span>
                        <span>Shopping center visibility</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Parkway Exit Marketing */}
              <div className="glass-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      Garden State Parkway Exit Marketing
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed mb-4">
                      Capture high-traffic searches near Parkway exits 123, 124, and 125. We optimize for exit-specific keywords, traveler and commuter searches, 'near Garden State Parkway' queries, and differentiate your business from surrounding exit competition. Ideal for hospitality, dining, gas stations, and retail serving Parkway traffic.
                    </p>
                    <ul className="space-y-2 text-sm text-brand-dark/70">
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">✓</span>
                        <span>GSP exit-specific targeting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">✓</span>
                        <span>Traveler convenience searches</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">✓</span>
                        <span>Highway access optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">✓</span>
                        <span>Commuter traffic capture</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Local Community SEO */}
              <div className="glass-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      Parlin, Morgan & Community Targeting
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed mb-4">
                      Optimize for Sayreville's distinct communities. We target Parlin's commercial presence, Morgan's waterfront residential area, and Sayreville proper with neighborhood-specific strategies. Content and citations featuring local community names, landmarks, and area-specific search patterns help you dominate hyperlocal searches.
                    </p>
                    <ul className="space-y-2 text-sm text-brand-dark/70">
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">✓</span>
                        <span>Parlin area business targeting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">✓</span>
                        <span>Morgan waterfront marketing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">✓</span>
                        <span>Melrose neighborhood optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">✓</span>
                        <span>Community-specific keywords</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Industrial & B2B */}
              <div className="glass-card p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      Industrial & B2B SEO
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed mb-4">
                      Specialized strategies for Sayreville's industrial businesses. B2B keyword targeting, supplier/vendor search optimization, industry directory listings, and content that captures business-to-business searches. We understand Sayreville's industrial presence and help you reach commercial customers searching for Sayreville-based services.
                    </p>
                    <ul className="space-y-2 text-sm text-brand-dark/70">
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">✓</span>
                        <span>Industrial keyword targeting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">✓</span>
                        <span>B2B directory optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">✓</span>
                        <span>Supplier/vendor search capture</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">✓</span>
                        <span>Regional business targeting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Sayreville Market */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                  Understanding <strong className="text-brand-primary">Sayreville's</strong> Diverse Business Environment
                </h2>
                <p className="text-brand-dark/70 leading-relaxed mb-6">
                  Sayreville Borough (45,000+ residents) offers a unique business environment with <strong>Route 9</strong> as its commercial spine, <strong>Garden State Parkway</strong> access via three exits (123, 124, 125), waterfront development along the <strong>Raritan River</strong>, and distinct communities including Parlin, Morgan, Melrose, and Sayreville proper.
                </p>
                <p className="text-brand-dark/70 leading-relaxed mb-6">
                  The <strong>Route 9 corridor</strong> features retail centers, restaurants, automotive services, and professional businesses competing for both local residents and pass-through traffic. <strong>Parlin</strong> offers additional commercial presence, while <strong>Morgan</strong>'s waterfront creates unique residential and recreational opportunities. Industrial areas provide significant B2B search potential.
                </p>
                <p className="text-brand-dark/70 leading-relaxed mb-6">
                  Whether you're a Route 9 business capturing commuter traffic, a Parlin retailer serving local residents, an industrial company targeting B2B searches, or a service provider for Sayreville's growing residential communities, we understand your market dynamics and help you dominate relevant local searches.
                </p>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6">
                  Sayreville Areas We Serve
                </h3>
                <div className="grid grid-cols-2 gap-4 text-brand-dark/70">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                    <span>Route 9 Corridor</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                    <span>Parlin</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                    <span>Morgan</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                    <span>Melrose</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                    <span>Sayreville Proper</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                    <span>Waterfront District</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                    <span>Industrial Areas</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                    <span>GSP Exit 123 Area</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                    <span>GSP Exit 124 Area</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                    <span>GSP Exit 125 Area</span>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-brand-dark mb-4">Serving All Sayreville Zip Codes:</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium">08872</span>
                    <span className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium">08871</span>
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
              Our <strong className="text-brand-primary">Sayreville SEO</strong> Process
            </h2>
            <p className="text-xl text-brand-dark/60 text-center mb-12 max-w-3xl mx-auto">
              Proven methodology that gets Sayreville businesses ranking on page 1 across Route 9, Parkway exits, and local community searches
            </p>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "1", title: "Market Analysis", desc: "Analyze competition in your Sayreville area - Route 9, Parlin, Morgan, or industrial zones. Identify ranking opportunities specific to your community." },
                { step: "2", title: "Google Business Setup", desc: "Complete GBP optimization with Sayreville-specific content, photos of local landmarks, Route 9 references, and service area targeting." },
                { step: "3", title: "On-Page SEO", desc: "Website optimization with Sayreville keywords, Route 9 corridor terms, Parlin/Morgan references, and content resonating with local customers." },
                { step: "4", title: "Citation Building", desc: "Strategic placement in Sayreville directories, Middlesex County listings, GSP area platforms, and industry directories with consistent NAP." },
                { step: "5", title: "Ongoing Optimization", desc: "Monthly tracking across Sayreville communities, Route 9 rankings, Parkway exit searches, and competitor analysis. Adjust based on data." },
              ].map((item) => (
                <div key={item.step} className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
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
              Frequently Asked Questions About <strong className="text-brand-primary">Sayreville SEO</strong>
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
        <section className="py-20 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6">
              Ready to Dominate Sayreville Local Search?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Get your free custom SEO strategy designed specifically for your Sayreville business. Whether you're on Route 9, near Parkway exits, or serving Parlin/Morgan areas - we'll show you how to outrank competitors.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/free-audit" className="inline-flex items-center space-x-2 px-10 py-5 bg-white text-indigo-600 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl">
                <TrendingUp className="w-6 h-6" />
                <span>Get Your Free Sayreville SEO Audit</span>
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
                <Anchor className="w-5 h-5" />
                <span>Route 9 & GSP specialists</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>15 minutes from Sayreville</span>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-4">
                Serving <span className="text-brand-primary">Sayreville, NJ</span>
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                We provide SEO services to Sayreville businesses from our East Brunswick headquarters
              </p>
            </div>
            <GoogleMapComponent
              locations={[
                {
                  lat: 40.459500,
                  lng: -74.361000,
                  name: 'Sayreville, NJ',
                  address: 'Sayreville, New Jersey',
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
