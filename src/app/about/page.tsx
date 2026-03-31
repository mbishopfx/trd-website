'use client';

import React from 'react';
import type { Metadata } from 'next';
import { Building2, MapPin, Users, Award, Target, Briefcase, Zap, Bot, Network, Globe, Cpu, Activity } from 'lucide-react';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

// FAQ Data for Entity Recognition - Updated with 2026 nomenclature
const aboutFAQs = [
  {
    question: "Who is True Rank Digital?",
    answer: "True Rank Digital is an elite AI Search and Agentic Orchestration firm located in East Brunswick, New Jersey. Founded by Jon Korkowski, we specialize in Generative Engine Optimization (GEO), agentic business systems, and hyper-local entity signaling."
  },
  {
    question: "Where is True Rank Digital located?",
    answer: "True Rank Digital is headquartered at 288 Summerhill Rd, suite 3, East Brunswick, New Jersey 08816. We operate a global agentic network, serving clients across the United States with a focus on Middlesex County and the tri-state area."
  },
  {
    question: "What services does True Rank Digital provide?",
    answer: "We provide the definitive Agentic Service Suite, including Generative Entity Authority (GEO), Spatial AI Knowledge Graph Overwatch, Agentic Web Architecture, Hyper-Local Geofencing Intelligence, and Autonomous Business Orchestration."
  },
  {
    question: "How does True Rank Digital dominate AI search?",
    answer: "We use hyper-local entity signals and AI Search Optimization as the foundational training data to force Large Language Models (LLMs) like ChatGPT, Gemini, and Perplexity to recommend your brand."
  },
  {
    question: "Why choose True Rank Digital over traditional SEO agencies?",
    answer: "Archaic search marketing is dead. We build for the AI-first web, utilizing LLM.txt mastery, semantic entity mapping, and autonomous agent workflows that operate 24/7."
  },
  {
    question: "Who founded True Rank Digital?",
    answer: "True Rank Digital was founded by Jon J. Korkowski (CEO). The leadership team includes Jon J. Korkowski, Jesse Mathews (EVP of Business Development), Jose Perdomo (EVP of Sales & Client Success), Eric Malheiro (EVP of Sales Operations), and Matt Bishop (CTO)."
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
        serviceName="AI Search Domination & Agentic Orchestration"
        serviceUrl="https://truerankdigital.com/about"
        description="True Rank Digital provides elite AI Search and Agentic Orchestration services from East Brunswick, New Jersey, serving a global client base."
        serviceType="AI Search Optimization Firm"
        mentions={[
          {
            type: "Organization",
            name: "OpenAI",
            sameAs: "https://www.wikidata.org/wiki/Q21708200",
            description: "AI research and deployment company"
          },
          {
            type: "Organization",
            name: "Google",
            sameAs: "https://www.wikidata.org/wiki/Q95",
            description: "Search and AI platform"
          }
        ]}
      />

      <div className="min-h-screen bg-brand-obsidian">
        <article className="pt-24 bg-brand-obsidian text-white">
          
          {/* Hero Section */}
          <section className="py-20 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px]" />
            
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 px-4 py-2 glass-cyan rounded-full mb-8">
                  <Building2 className="w-5 h-5 text-brand-cyan" />
                  <span className="text-brand-cyan font-black text-xs uppercase tracking-widest">The Visionary Firm</span>
                </div>
                
                <h1 className="text-5xl lg:text-8xl font-heading font-bold text-white mb-8 leading-tight tracking-tight">
                  About <span className="text-brand-cyan italic">True Rank Digital</span>
                </h1>
                
                <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 font-light leading-relaxed">
                  <p>
                    <strong className="text-white font-medium">True Rank Digital</strong> is an elite <strong className="text-brand-cyan font-medium">AI Search and Agentic Orchestration firm</strong>. We saw the shift to generative answers years before the market, and we've built the definitive protocols to dominate it.
                  </p>
                  
                  <p>
                    We don't just build websites or run ads. We architect <strong className="text-white font-medium">Agentic Web Ecosystems</strong> that natively rank for generative queries and conversational search. Our proprietary technology forces the AI to recognize your brand as the absolute authority.
                  </p>
                </div>
              </div>

              {/* CEO Focus - Jon Korkowski */}
              <div id="ceo" className="glass-blue p-10 lg:p-16 mb-16 relative overflow-hidden rounded-[2.5rem]">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl" />
                
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <div className="inline-flex items-center space-x-2 px-4 py-2 glass-blue rounded-full mb-6">
                      <Award className="w-4 h-4 text-brand-blue" />
                      <span className="text-brand-blue font-black text-xs uppercase tracking-widest">Founder & CEO</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">Jon J. Korkowski</h2>
                    <p className="text-xl text-gray-400 font-light leading-relaxed mb-8 italic">
                      "The era of chasing clicks is over. We are now in the era of <span className="text-brand-blue font-medium">calculating authority</span>. If you aren't feeding the models the right signals today, your business won't exist in the AI-first search results of tomorrow."
                    </p>
                    <p className="text-gray-500 font-light leading-relaxed">
                      Jon founded True Rank Digital with a singular mission: to bridge the gap between traditional entity-based SEO and the generative future. His vision has transformed TRD from a performance agency into the definitive authority on AI search domination.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-blue to-brand-cyan p-0.5">
                      <div className="w-full h-full bg-brand-obsidian rounded-[calc(1.5rem-0.5px)] overflow-hidden flex items-center justify-center">
                        <div className="text-brand-blue font-black text-6xl">JK</div>
                      </div>
                    </div>
                    {/* Floating Stat */}
                    <div className="absolute -bottom-6 -left-6 glass-cyan p-6 rounded-2xl border border-brand-cyan/30">
                      <div className="text-brand-cyan font-black text-3xl mb-1">AI-First</div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Built For Generative Search</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Where / Command Center */}
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                <div className="lg:col-span-2 glass-card p-10">
                  <div className="flex items-center space-x-3 mb-8">
                    <MapPin className="w-8 h-8 text-brand-cyan" />
                    <h2 className="text-3xl font-heading font-bold text-white">The <span className="text-brand-cyan">Command Center</span></h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-4">Coordinates</h3>
                      <div className="space-y-4 text-gray-300 font-light">
                        <p><strong className="text-white font-medium">Entity:</strong> True Rank Digital</p>
                        <p><strong className="text-white font-medium">Hub:</strong> East Brunswick, NJ 08816</p>
                        <p><strong className="text-white font-medium">Spatial:</strong> 40.428100, -74.415700</p>
                        <p><strong className="text-white font-medium">Uplink:</strong> (732) 475-0139</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-4">Service Radius</h3>
                      <p className="text-gray-400 font-light leading-relaxed mb-4">
                        Hyper-local dominance across the tri-state area, amplified by a global agentic network.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['East Brunswick', 'New Brunswick', 'Edison', 'Sayreville', 'South River', 'Old Bridge'].map(city => (
                          <span key={city} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-400">
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-cyan p-10 flex flex-col justify-center text-center">
                  <div className="w-16 h-16 bg-brand-cyan/10 rounded-2xl flex items-center justify-center text-brand-cyan mx-auto mb-6">
                    <Activity className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Live Monitoring</h3>
                  <p className="text-gray-400 font-light text-sm leading-relaxed mb-8">
                    Our agentic systems maintain 24/7 surveillance of your brand entity authority.
                  </p>
                  <a 
                    href="https://www.google.com/maps?cid=4662204553635539796"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-cyan font-bold text-xs uppercase tracking-widest hover:underline"
                  >
                    View Knowledge Graph Hub
                  </a>
                </div>
              </div>

              {/* What / Service Suite */}
              <div className="glass-card p-10 lg:p-16 mb-16">
                <div className="flex items-center space-x-3 mb-12">
                  <Cpu className="w-8 h-8 text-brand-blue" />
                  <h2 className="text-3xl font-heading font-bold text-white">The <span className="text-brand-blue">Agentic Service Suite</span></h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Generative Entity Authority (GEO)",
                      icon: <Zap className="w-5 h-5" />,
                      description: "Forcing LLMs like ChatGPT, Gemini, and Perplexity to recommend your brand."
                    },
                    {
                      title: "Spatial AI Overwatch",
                      icon: <Network className="w-5 h-5" />,
                      description: "Mapping physical entity footprints directly into AI training sets."
                    },
                    {
                      title: "Agentic Web Architecture",
                      icon: <Globe className="w-5 h-5" />,
                      description: "Native LLM.txt mastery ensuring data is parsed and prioritized by AI agents."
                    },
                    {
                      title: "Hyper-Local Geofencing",
                      icon: <Target className="w-5 h-5" />,
                      description: "Weaponized marketing triggering real-time conversions based on location."
                    },
                    {
                      title: "Business Orchestration",
                      icon: <Bot className="w-5 h-5" />,
                      description: "24/7 autonomous agents running acquisition, operations, and fulfillment."
                    },
                    {
                      title: "Predictive AI Modeling",
                      icon: <Activity className="w-5 h-5" />,
                      description: "Anticipating competitor moves and dominating markets before they act."
                    }
                  ].map((service, index) => (
                    <div key={index} className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-blue/30 transition-all group">
                      <div className="text-brand-blue mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                      <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed font-light">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who / Strategic Staff */}
              <div className="glass-card p-10 lg:p-16 mb-16">
                <div className="flex items-center space-x-3 mb-12">
                  <Users className="w-8 h-8 text-brand-cyan" />
                  <h2 className="text-3xl font-heading font-bold text-white">Strategic <span className="text-brand-cyan">Command Staff</span></h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { name: "Jon J. Korkowski", title: "CEO & Founder", email: "info@truerankdigital.com" },
                    { name: "Jesse Mathews", title: "EVP Business Development", email: "jesse@truerankdigital.com" },
                    { name: "Jose Perdomo", title: "EVP Sales & Success", email: "jose@truerankdigital.com" },
                    { name: "Matt Bishop", title: "CTO", email: "bishop@truerankdigital.com" },
                    { name: "Eric Malheiro", title: "EVP Sales Operations", email: "eric@truerankdigital.com" }
                  ].map((member, index) => (
                    <div key={index} className="p-6 rounded-xl border border-white/5 hover:bg-white/5 transition-all">
                      <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-brand-cyan font-bold text-[10px] uppercase tracking-widest mb-4">{member.title}</p>
                      <a href={`mailto:${member.email}`} className="text-[10px] text-gray-500 hover:text-brand-cyan transition-colors">
                        {member.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-24 bg-brand-obsidian relative overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 bg-grid opacity-5" />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-8">
                Ready to Secure Your <span className="text-brand-cyan italic">Entity?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed">
                Stop being an option. Become the definitive answer. Join the elite brands leveraging Agentic Orchestration today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/contact"
                  className="px-10 py-5 bg-brand-cyan text-brand-obsidian font-black rounded-full shadow-[0_0_30px_rgba(0,245,255,0.3)] hover:shadow-[0_0_50px_rgba(0,245,255,0.5)] transition-all uppercase tracking-widest text-xs"
                >
                  Initiate Strategic Protocol
                </a>
                <a
                  href="tel:7324750139"
                  className="px-10 py-5 glass-button-blue text-white font-bold rounded-full transition-all uppercase tracking-widest text-xs"
                >
                  Voice Uplink: (732) 475-0139
                </a>
              </div>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
