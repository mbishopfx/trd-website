'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  PenTool,
  FileText,
  Users,
  TrendingUp,
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
  Lightbulb,
  BookOpen
} from 'lucide-react';
import { 
  BarChart,
  Bar,
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
  industry: string;
  contentNeeds: string;
  goals: string;
}

export default function ContentMarketingPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    contentNeeds: '',
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
  const sampleContentData = [
    { type: 'Blog Posts', engagement: 85 },
    { type: 'Case Studies', engagement: 92 },
    { type: 'Infographics', engagement: 78 },
    { type: 'Videos', engagement: 96 },
    { type: 'Whitepapers', engagement: 88 }
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
          service: 'Content Marketing Strategy',
          source: 'Content Marketing Landing Page'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! We\'ll be in touch within 24 hours to discuss your content marketing strategy.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          industry: '',
          contentNeeds: '',
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
          title: "Content Marketing Strategy Services | True Rank Digital",
          description: "Expert content marketing services to engage your audience and drive results. Our content specialists create compelling content that converts visitors into customers.",
          url: "https://truerankdigital.com/content-marketing",
          keywords: ["content marketing", "content strategy", "blog writing", "content creation"],
          category: "Content Marketing Services",
          serviceType: "Content Marketing & Strategy"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Content Marketing", url: "https://truerankdigital.com/content-marketing" }
        ]}
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
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
                    <PenTool className="w-4 h-4" />
                    <span>Content Marketing Experts</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                    Create Content That
                    <span className="block text-yellow-300">Converts</span>
                  </h1>
                  
                  <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
                    Stop creating content that gets ignored. Our team of content marketing specialists creates 
                    strategic content that engages your audience and drives measurable business results.
                  </p>

                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-yellow-300">Expert</div>
                      <div className="text-sm text-white/80">Writers</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-yellow-300">Strategic</div>
                      <div className="text-sm text-white/80">Planning</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-yellow-300">Proven</div>
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
                      Get Content Strategy
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </motion.div>
                </motion.div>
              </div>

              {/* Sample Content Engagement Visualization */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-2">Content Engagement by Type</h3>
                <p className="text-sm text-white/70 mb-4">*Visualization for demonstration purposes</p>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={sampleContentData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                    <XAxis type="number" domain={[0, 100]} stroke="rgba(255,255,255,0.8)" tickFormatter={(value) => `${value}%`} />
                    <YAxis dataKey="type" type="category" stroke="rgba(255,255,255,0.8)" width={80} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0,0,0,0.8)', 
                        border: 'none', 
                        borderRadius: '8px',
                        color: 'white'
                      }} 
                      formatter={(value) => [`${value}% engagement`, 'Engagement Rate']}
                    />
                    <Bar
                      dataKey="engagement"
                      fill="#fbbf24"
                      animationDuration={2000}
                      radius={[0, 4, 4, 0]}
                    />
                  </BarChart>
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
                Content Marketing Specialists Ready to Create
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Our team of experienced content creators and strategists develops compelling content that resonates with your audience and drives business growth.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Content Marketing Services */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <h3 className="text-2xl font-semibold text-brand-dark mb-6 flex items-center">
                  <FileText className="w-6 h-6 text-emerald-600 mr-3" />
                  Content Creation Expertise
                </h3>
                <div className="space-y-4">
                  {[
                    'Strategic blog content and thought leadership articles',
                    'Engaging social media content and campaigns',
                    'Compelling case studies and success stories',
                    'Educational whitepapers and industry guides',
                    'Video scripts and multimedia content planning',
                    'Email marketing content and automation sequences'
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span className="text-brand-dark/80">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Content Strategy Process */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <h3 className="text-2xl font-semibold text-brand-dark mb-6 flex items-center">
                  <Lightbulb className="w-6 h-6 text-blue-600 mr-3" />
                  Strategic Content Process
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      phase: 'Audience Research & Analysis',
                      description: 'Deep understanding of your target audience, their pain points, and content preferences'
                    },
                    {
                      phase: 'Content Strategy Development',
                      description: 'Create a comprehensive content plan aligned with your business goals and audience needs'
                    },
                    {
                      phase: 'Content Creation & Optimization',
                      description: 'Produce high-quality, SEO-optimized content that engages and converts your audience'
                    },
                    {
                      phase: 'Performance Tracking & Refinement',
                      description: 'Monitor content performance and continuously optimize strategy based on data insights'
                    }
                  ].map((phase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border-l-4 border-blue-500 pl-4"
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
                Why Choose Our Content Marketing Team?
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Experienced Content Creators',
                    description: 'Professional writers and content strategists with expertise across multiple industries and formats.',
                    icon: <PenTool className="w-8 h-8" />
                  },
                  {
                    title: 'Data-Driven Approach',
                    description: 'Every piece of content is created with clear objectives and measurable success metrics.',
                    icon: <TrendingUp className="w-8 h-8" />
                  },
                  {
                    title: 'Audience-Focused Strategy',
                    description: 'Deep research into your target audience ensures content resonates and drives action.',
                    icon: <Users className="w-8 h-8" />
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
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
                Get Your Content Marketing Strategy
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
                Let our content specialists create a custom strategy that engages your audience and drives results.
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
                  <label htmlFor="industry" className="block text-sm font-semibold text-brand-dark mb-2">
                    Industry
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-3 w-5 h-5 text-brand-dark/40" />
                    <input
                      type="text"
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="form-input pl-11 text-gray-900 placeholder-gray-500"
                      placeholder="What industry is your business in?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contentNeeds" className="block text-sm font-semibold text-brand-dark mb-2">
                    Content Needs
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 w-5 h-5 text-brand-dark/40" />
                    <textarea
                      id="contentNeeds"
                      name="contentNeeds"
                      value={formData.contentNeeds}
                      onChange={handleInputChange}
                      rows={3}
                      className="form-input pl-11 text-gray-900 placeholder-gray-500 resize-none"
                      placeholder="What type of content do you need help with?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm font-semibold text-brand-dark mb-2">
                    Content Goals
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
                      placeholder="What do you want to achieve with your content marketing?"
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
                  {isSubmitting ? 'Submitting...' : 'Get Content Strategy'}
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
        <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
                Ready to Create Content That Converts?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Work with content marketing specialists who understand how to create compelling content that drives business results.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.a
                  href="#consultation"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-xl hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Content Strategy
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
