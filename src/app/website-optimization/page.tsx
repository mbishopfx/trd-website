'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor,
  Zap,
  Smartphone,
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
  Globe
} from 'lucide-react';
import { 
  RadialBarChart,
  RadialBar,
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
  currentIssues: string;
  goals: string;
}

export default function WebsiteOptimizationPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    websiteUrl: '',
    currentIssues: '',
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
  const sampleOptimizationData = [
    { name: 'Performance', score: 85, fill: '#3b82f6' },
    { name: 'Accessibility', score: 92, fill: '#10b981' },
    { name: 'Best Practices', score: 88, fill: '#f59e0b' },
    { name: 'SEO', score: 94, fill: '#8b5cf6' }
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
          service: 'Website Optimization',
          source: 'Website Optimization Landing Page'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! We\'ll be in touch within 24 hours to discuss your website optimization needs.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          websiteUrl: '',
          currentIssues: '',
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
          title: "Website Optimization Services | True Rank Digital",
          description: "Expert website optimization services to improve speed, user experience, and conversions. Our specialists optimize your site for better performance and higher rankings.",
          url: "https://truerankdigital.com/website-optimization",
          keywords: ["website optimization", "site speed optimization", "user experience", "conversion optimization"],
          category: "Website Optimization Services",
          serviceType: "Website Performance & UX Optimization"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Website Optimization", url: "https://truerankdigital.com/website-optimization" }
        ]}
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 relative overflow-hidden">
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
                    <Monitor className="w-4 h-4" />
                    <span>Website Optimization Experts</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                    Optimize Your
                    <span className="block text-yellow-300">Website Performance</span>
                  </h1>
                  
                  <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
                    Stop losing visitors to slow loading times. Our team of optimization specialists 
                    improves your website's speed, user experience, and conversion rates.
                  </p>

                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-yellow-300">Expert</div>
                      <div className="text-sm text-white/80">Developers</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-yellow-300">Fast</div>
                      <div className="text-sm text-white/80">Results</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-yellow-300">Better</div>
                      <div className="text-sm text-white/80">UX</div>
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
                      Get Website Analysis
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </motion.div>
                </motion.div>
              </div>

              {/* Sample Performance Scores Visualization */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-2">Website Performance Metrics</h3>
                <p className="text-sm text-white/70 mb-4">*Visualization for demonstration purposes</p>
                <ResponsiveContainer width="100%" height={300}>
                  <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" data={sampleOptimizationData}>
                    <RadialBar
                      dataKey="score"
                      cornerRadius={10}
                      fill={(entry) => entry.fill}
                      animationDuration={2000}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0,0,0,0.8)', 
                        border: 'none', 
                        borderRadius: '8px',
                        color: 'white'
                      }} 
                      formatter={(value) => [`${value}/100`, 'Score']}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {sampleOptimizationData.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.fill }}
                      ></div>
                      <span className="text-sm text-white/70">{item.name}</span>
                    </div>
                  ))}
                </div>
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
                Website Optimization Specialists Ready to Improve
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Our team of experienced developers and UX specialists optimizes every aspect of your website for better performance, user experience, and conversions.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Website Optimization Services */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <h3 className="text-2xl font-semibold text-brand-dark mb-6 flex items-center">
                  <Zap className="w-6 h-6 text-orange-600 mr-3" />
                  Performance Optimization
                </h3>
                <div className="space-y-4">
                  {[
                    'Site speed optimization and Core Web Vitals improvement',
                    'Image compression and lazy loading implementation',
                    'Code minification and resource optimization',
                    'Mobile responsiveness and cross-device compatibility',
                    'Conversion rate optimization and A/B testing',
                    'User experience analysis and interface improvements'
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <span className="text-brand-dark/80">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Optimization Process */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <h3 className="text-2xl font-semibold text-brand-dark mb-6 flex items-center">
                  <Target className="w-6 h-6 text-blue-600 mr-3" />
                  Optimization Process
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      phase: 'Performance Audit & Analysis',
                      description: 'Comprehensive evaluation of site speed, user experience, and conversion bottlenecks'
                    },
                    {
                      phase: 'Optimization Strategy Planning',
                      description: 'Prioritized action plan focusing on highest-impact improvements first'
                    },
                    {
                      phase: 'Implementation & Testing',
                      description: 'Execute optimizations with thorough testing across devices and browsers'
                    },
                    {
                      phase: 'Monitoring & Maintenance',
                      description: 'Ongoing performance monitoring with regular updates and improvements'
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
                Why Choose Our Website Optimization Team?
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Technical Excellence',
                    description: 'Expert developers with deep knowledge of modern web technologies and optimization techniques.',
                    icon: <Monitor className="w-8 h-8" />
                  },
                  {
                    title: 'User-Centered Approach',
                    description: 'Every optimization decision is made with your users\' experience and journey in mind.',
                    icon: <Smartphone className="w-8 h-8" />
                  },
                  {
                    title: 'Measurable Results',
                    description: 'All improvements are tracked with clear metrics showing the impact on your business goals.',
                    icon: <TrendingUp className="w-8 h-8" />
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
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
                Get Your Website Performance Analysis
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
                Let our optimization specialists identify what's slowing down your website and how to fix it.
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
                    <Globe className="absolute left-3 top-3 w-5 h-5 text-brand-dark/40" />
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
                  <label htmlFor="currentIssues" className="block text-sm font-semibold text-brand-dark mb-2">
                    Current Website Issues
                  </label>
                  <div className="relative">
                    <AlertCircle className="absolute left-3 top-3 w-5 h-5 text-brand-dark/40" />
                    <textarea
                      id="currentIssues"
                      name="currentIssues"
                      value={formData.currentIssues}
                      onChange={handleInputChange}
                      rows={3}
                      className="form-input pl-11 text-gray-900 placeholder-gray-500 resize-none"
                      placeholder="What issues have you noticed with your website's performance?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm font-semibold text-brand-dark mb-2">
                    Optimization Goals
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
                      placeholder="What improvements are you hoping to achieve with your website?"
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
                  {isSubmitting ? 'Submitting...' : 'Get Website Analysis'}
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
        <section className="py-20 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
                Ready to Optimize Your Website Performance?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Work with optimization specialists who understand how to improve every aspect of your website's performance and user experience.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.a
                  href="#consultation"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-xl hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Website Analysis
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



