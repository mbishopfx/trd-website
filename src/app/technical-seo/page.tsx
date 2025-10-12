'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings,
  Code,
  Zap,
  Shield,
  Phone,
  Mail,
  Building,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Target,
  Award,
  TrendingUp,
  Search
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';
import ComprehensiveSchema from '@/components/seo/ComprehensiveSchema';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  websiteUrl: string;
  technicalIssues: string;
  goals: string;
}

export default function TechnicalSEOPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    websiteUrl: '',
    technicalIssues: '',
    goals: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [animatedData, setAnimatedData] = useState(0);

  // Animated counter for hero visual appeal
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedData(prev => {
        if (prev < 100) return prev + 1;
        return prev;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  // Sample data for visual demonstration only
  const samplePerformanceData = [
    { month: 'Month 1', score: 45 },
    { month: 'Month 2', score: 62 },
    { month: 'Month 3', score: 78 },
    { month: 'Month 4', score: 85 },
    { month: 'Month 5', score: 92 },
    { month: 'Month 6', score: 96 }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.company) {
      setSubmitStatus('error');
      setSubmitMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service: 'Technical SEO Optimization',
          source: 'Technical SEO Landing Page'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! We\'ll be in touch within 24 hours to discuss your technical SEO needs.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          websiteUrl: '',
          technicalIssues: '',
          goals: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('There was an error submitting your request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ComprehensiveSchema
        type="service"
        pageData={{
          title: "Technical SEO Optimization Services | True Rank Digital",
          description: "Expert technical SEO services to fix website issues, improve site speed, and enhance search engine crawling. Our certified specialists optimize your site's technical foundation.",
          url: "https://truerankdigital.com/technical-seo",
          keywords: ["technical SEO", "site speed optimization", "crawl optimization", "technical audit"],
          category: "Technical SEO Services",
          serviceType: "Technical SEO & Website Optimization"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Technical SEO", url: "https://truerankdigital.com/technical-seo" }
        ]}
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-700 via-gray-700 to-zinc-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                    <Settings className="w-4 h-4" />
                    <span>Technical SEO Specialists</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                    Fix Your Website's
                    <span className="block text-yellow-300">Technical Issues</span>
                  </h1>
                  
                  <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
                    Stop losing rankings due to technical problems. Our team of technical SEO specialists 
                    identifies and fixes critical issues that prevent search engines from properly crawling your site.
                  </p>

                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-yellow-300">Expert</div>
                      <div className="text-sm text-white/80">Technicians</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-yellow-300">Deep</div>
                      <div className="text-sm text-white/80">Analysis</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-yellow-300">Fast</div>
                      <div className="text-sm text-white/80">Results</div>
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="#consultation"
                      className="inline-flex items-center px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-xl hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Get Technical Analysis
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </motion.div>
                </motion.div>
              </div>

              {/* Sample Performance Visualization */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-2">Technical Performance Improvement</h3>
                <p className="text-sm text-white/70 mb-4">*Visualization for demonstration purposes</p>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={samplePerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                    <XAxis dataKey="month" stroke="rgba(255,255,255,0.8)" />
                    <YAxis stroke="rgba(255,255,255,0.8)" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0,0,0,0.8)', 
                        border: 'none', 
                        borderRadius: '8px',
                        color: 'white'
                      }} 
                      formatter={(value) => [`${value}% score`, 'Performance Score']}
                    />
                    <Line
                      type="monotone"
                      dataKey="score"
                      stroke="#fbbf24"
                      strokeWidth={3}
                      dot={{ fill: '#fbbf24', strokeWidth: 2, r: 6 }}
                      animationDuration={2000}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expert Team & Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                Technical SEO Experts Ready to Optimize
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Our team of certified technical specialists has the expertise to identify and resolve complex technical issues that impact your search rankings.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Technical SEO Services */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <h3 className="text-2xl font-semibold text-brand-dark mb-6 flex items-center">
                  <Code className="w-6 h-6 text-blue-600 mr-3" />
                  Technical SEO Expertise
                </h3>
                <div className="space-y-4">
                  {[
                    'Website crawling and indexing optimization',
                    'Site speed and Core Web Vitals improvement',
                    'Mobile-first indexing compliance',
                    'Schema markup implementation and validation',
                    'URL structure and internal linking optimization',
                    'Server-side rendering and JavaScript SEO'
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-brand-dark/80">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Technical Analysis Process */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <h3 className="text-2xl font-semibold text-brand-dark mb-6 flex items-center">
                  <Search className="w-6 h-6 text-green-600 mr-3" />
                  Technical Analysis Process
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      phase: 'Comprehensive Technical Audit',
                      description: 'Deep analysis of crawling, indexing, site speed, and technical infrastructure issues'
                    },
                    {
                      phase: 'Priority Issue Identification',
                      description: 'Categorize technical problems by impact and create a strategic fix roadmap'
                    },
                    {
                      phase: 'Implementation & Testing',
                      description: 'Execute technical fixes with thorough testing to ensure proper functionality'
                    },
                    {
                      phase: 'Monitoring & Maintenance',
                      description: 'Ongoing technical health monitoring to prevent future issues and maintain performance'
                    }
                  ].map((phase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border-l-4 border-green-500 pl-4"
                    >
                      <h4 className="font-semibold text-brand-dark mb-2">{phase.phase}</h4>
                      <p className="text-brand-dark/70 text-sm">{phase.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Team Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-semibold text-brand-dark mb-6 text-center">
                Why Choose Our Technical SEO Specialists?
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Advanced Technical Knowledge',
                    description: 'Deep expertise in server configuration, JavaScript frameworks, and modern web technologies.',
                    icon: <Settings className="w-8 h-8" />
                  },
                  {
                    title: 'Performance Optimization Focus',
                    description: 'Specialized in Core Web Vitals, site speed, and user experience optimization.',
                    icon: <Zap className="w-8 h-8" />
                  },
                  {
                    title: 'Search Engine Compliance',
                    description: 'Stay current with Google guidelines and algorithm updates for maximum compatibility.',
                    icon: <Shield className="w-8 h-8" />
                  }
                ].map((expertise, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <div className="text-white">
                        {expertise.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-brand-dark mb-3">{expertise.title}</h4>
                    <p className="text-brand-dark/70 text-sm leading-relaxed">{expertise.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="consultation" className="py-20 bg-gradient-to-b from-brand-light/20 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                Get Your Technical SEO Analysis
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
                Let our technical specialists identify what's holding your website back from better search rankings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-brand-dark mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-brand-dark/40" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input pl-11 text-gray-900 placeholder-gray-500"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-brand-dark mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-brand-dark/40" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input pl-11 text-gray-900 placeholder-gray-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-brand-dark mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-brand-dark/40" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input pl-11 text-gray-900 placeholder-gray-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-brand-dark mb-2">
                      Company Name *
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 w-5 h-5 text-brand-dark/40" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="form-input pl-11 text-gray-900 placeholder-gray-500"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="websiteUrl" className="block text-sm font-semibold text-brand-dark mb-2">
                    Website URL
                  </label>
                  <div className="relative">
                    <Code className="absolute left-3 top-3 w-5 h-5 text-brand-dark/40" />
                    <input
                      type="url"
                      id="websiteUrl"
                      name="websiteUrl"
                      value={formData.websiteUrl}
                      onChange={handleInputChange}
                      className="form-input pl-11 text-gray-900 placeholder-gray-500"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="technicalIssues" className="block text-sm font-semibold text-brand-dark mb-2">
                    Current Technical Issues
                  </label>
                  <div className="relative">
                    <AlertCircle className="absolute left-3 top-3 w-5 h-5 text-brand-dark/40" />
                    <textarea
                      id="technicalIssues"
                      name="technicalIssues"
                      value={formData.technicalIssues}
                      onChange={handleInputChange}
                      rows={3}
                      className="form-input pl-11 text-gray-900 placeholder-gray-500 resize-none"
                      placeholder="What technical issues have you noticed with your website?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm font-semibold text-brand-dark mb-2">
                    Technical Goals
                  </label>
                  <div className="relative">
                    <Target className="absolute left-3 top-3 w-5 h-5 text-brand-dark/40" />
                    <textarea
                      id="goals"
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      rows={3}
                      className="form-input pl-11 text-gray-900 placeholder-gray-500 resize-none"
                      placeholder="What technical improvements are you hoping to achieve?"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Technical Analysis'}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <p className="text-green-800">{submitMessage}</p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <div className="flex items-center">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                      <p className="text-red-800">{submitMessage}</p>
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-slate-700 via-gray-700 to-zinc-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
                Ready to Fix Your Technical SEO Issues?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Work with technical SEO specialists who understand complex website issues and can implement lasting solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.a
                  href="#consultation"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-xl hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Technical Analysis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.a>
                
                <motion.a
                  href="tel:+17324750139"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (732) 475-0139
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}


