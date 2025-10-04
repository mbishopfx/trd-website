'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users,
  Phone,
  Mail,
  Building,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Target,
  Zap,
  TrendingUp,
  PhoneCall,
  Calendar,
  Award
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import ComprehensiveSchema from '@/components/seo/ComprehensiveSchema';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  currentLeadGen: string;
  goals: string;
}

export default function LeadGenerationPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    currentLeadGen: '',
    goals: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [animatedLeads, setAnimatedLeads] = useState(0);

  // Animated counter for leads
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedLeads(prev => {
        if (prev < 847) return prev + 12;
        return prev;
      });
    }, 15);

    return () => clearInterval(timer);
  }, []);

  // Lead generation data
  const leadGrowthData = [
    { month: 'Jan', leads: 45, qualified: 18, converted: 7 },
    { month: 'Feb', leads: 89, qualified: 42, converted: 15 },
    { month: 'Mar', leads: 156, qualified: 78, converted: 28 },
    { month: 'Apr', leads: 234, qualified: 125, converted: 45 },
    { month: 'May', leads: 378, qualified: 198, converted: 72 },
    { month: 'Jun', leads: 512, qualified: 267, converted: 98 }
  ];

  const leadQualityData = [
    { name: 'Hot Leads', value: 35, fill: '#ef4444' },
    { name: 'Warm Leads', value: 45, fill: '#f59e0b' },
    { name: 'Cold Leads', value: 20, fill: '#6b7280' }
  ];

  const conversionMetrics = [
    { metric: 'Lead Quality', score: 92, color: '#10b981' },
    { metric: 'Response Rate', score: 87, color: '#3b82f6' },
    { metric: 'Conversion Rate', score: 78, color: '#8b5cf6' },
    { metric: 'Cost Per Lead', score: 94, color: '#f59e0b' }
  ];

  const industries = [
    'Professional Services',
    'Healthcare',
    'Real Estate',
    'Legal Services',
    'Home Services',
    'Financial Services',
    'Technology',
    'Manufacturing',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: 'Lead Generation - Landing Page Inquiry'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your lead generation consultation request has been submitted. We&apos;ll contact you within 24 hours with a custom lead generation strategy.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          industry: '',
          currentLeadGen: '',
          goals: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.error || 'Something went wrong. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Failed to send message. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ComprehensiveSchema
        type="service"
        pageData={{
          title: "Lead Generation - Generate More Qualified Leads",
          description: "Increase qualified leads, improve conversion rates, and grow your business with our proven lead generation strategies and optimization techniques.",
          url: "https://truerankdigital.com/lead-generation",
          keywords: ["lead generation", "qualified leads", "conversion optimization", "lead nurturing"],
          category: "Lead Generation Services",
          serviceType: "Lead Generation & Conversion"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Lead Generation", url: "https://truerankdigital.com/lead-generation" }
        ]}
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 relative overflow-hidden">
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
                    <Target className="w-4 h-4" />
                    <span>Lead Generation Experts</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                    Generate More
                    <span className="block text-yellow-300">Qualified Leads</span>
                  </h1>
                  
                  <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
                    Stop chasing unqualified prospects. Our team of lead generation specialists creates 
                    custom strategies to help your business generate more qualified leads consistently.
                  </p>

                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-yellow-300">Expert</div>
                      <div className="text-sm text-white/80">Specialists</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-yellow-300">Custom</div>
                      <div className="text-sm text-white/80">Approach</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-yellow-300">Proven</div>
                      <div className="text-sm text-white/80">Methods</div>
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="#consultation"
                      className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-violet-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
                    >
                      <span>Get Free Lead Analysis</span>
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </motion.div>
                </motion.div>
              </div>

              {/* Lead Growth Chart */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Lead Generation Growth</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={leadGrowthData}>
                    <defs>
                      <linearGradient id="leadGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#fbbf24" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                    <XAxis dataKey="month" stroke="rgba(255,255,255,0.8)" />
                    <YAxis stroke="rgba(255,255,255,0.8)" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0,0,0,0.8)', 
                        border: 'none', 
                        borderRadius: '8px',
                        color: 'white'
                      }} 
                    />
                    <Area
                      type="monotone"
                      dataKey="leads"
                      stroke="#fbbf24"
                      strokeWidth={3}
                      fill="url(#leadGradient)"
                      animationDuration={2000}
                    />
                    <Line
                      type="monotone"
                      dataKey="qualified"
                      stroke="#10b981"
                      strokeWidth={2}
                      animationDuration={2000}
                      animationDelay={500}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results Section */}
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
                Real Lead Generation Results
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                See how our lead generation strategies transformed these businesses and delivered consistent, high-quality leads.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Lead Quality Distribution */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-semibold text-brand-dark mb-4 flex items-center">
                  <Target className="w-6 h-6 text-purple-600 mr-2" />
                  Lead Quality Distribution
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={leadQualityData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                      animationDuration={2000}
                    >
                      {leadQualityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {leadQualityData.map((item, index) => (
                    <div key={index} className="text-center">
                      <div 
                        className="w-4 h-4 rounded-full mx-auto mb-1"
                        style={{ backgroundColor: item.fill }}
                      ></div>
                      <div className="text-xs text-brand-dark/70">{item.name}</div>
                      <div className="text-sm font-semibold">{item.value}%</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Conversion Metrics */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-semibold text-brand-dark mb-4 flex items-center">
                  <TrendingUp className="w-6 h-6 text-green-600 mr-2" />
                  Performance Metrics
                </h3>
                <div className="space-y-6">
                  {conversionMetrics.map((metric, index) => (
                    <motion.div
                      key={metric.metric}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between"
                    >
                      <span className="text-brand-dark font-medium">{metric.metric}</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${metric.score}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: metric.color }}
                          />
                        </div>
                        <span className="text-brand-dark font-bold text-lg">{metric.score}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Lead Growth Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-semibold text-brand-dark mb-6 text-center">
                6-Month Lead Generation Progress
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={leadGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="leads" 
                    stroke="#8b5cf6" 
                    strokeWidth={3}
                    name="Total Leads"
                    animationDuration={2000}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="qualified" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    name="Qualified Leads"
                    animationDuration={2000}
                    animationDelay={500}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="converted" 
                    stroke="#f59e0b" 
                    strokeWidth={3}
                    name="Converted"
                    animationDuration={2000}
                    animationDelay={1000}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-b from-brand-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                Complete Lead Generation Solutions
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Lead Qualification System",
                  description: "Automated systems to score and qualify leads based on your ideal customer profile",
                  color: "from-purple-500 to-indigo-500"
                },
                {
                  icon: <PhoneCall className="w-8 h-8" />,
                  title: "Call Tracking & Analytics",  
                  description: "Track phone leads with detailed analytics and conversation intelligence",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Calendar className="w-8 h-8" />,
                  title: "Appointment Setting",
                  description: "Automated appointment booking systems that convert leads into meetings",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Mail className="w-8 h-8" />,
                  title: "Email Nurture Campaigns",
                  description: "Automated email sequences that nurture leads through your sales funnel",
                  color: "from-yellow-500 to-orange-500"  
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "CRM Integration",
                  description: "Seamless integration with your existing CRM and sales processes",
                  color: "from-red-500 to-pink-500"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Lead Quality Optimization",
                  description: "Continuous optimization to improve lead quality and conversion rates",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-brand-dark/70 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white" id="consultation">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                Get Your Free Lead Generation Analysis
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
                Discover exactly how we can help your business generate more qualified leads and increase your conversion rates.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                    Analysis Request Submitted!
                  </h3>
                  <p className="text-brand-dark/70 mb-6">
                    {submitMessage}
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="btn btn-primary"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
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
                          className="form-input pl-11"
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
                          className="form-input pl-11"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
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
                          className="form-input pl-11"
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
                          className="form-input pl-11"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-semibold text-brand-dark mb-2">
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="form-input text-brand-dark font-medium"
                    >
                      <option value="">Select your industry</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="currentLeadGen" className="block text-sm font-semibold text-brand-dark mb-2">
                      Current Lead Generation Methods
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-brand-dark/40" />
                      <textarea
                        id="currentLeadGen"
                        name="currentLeadGen"
                        value={formData.currentLeadGen}
                        onChange={handleInputChange}
                        rows={3}
                        className="form-input pl-11 resize-none"
                        placeholder="What lead generation methods are you currently using? (referrals, ads, SEO, etc.)"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="goals" className="block text-sm font-semibold text-brand-dark mb-2">
                      Lead Generation Goals
                    </label>
                    <div className="relative">
                      <Target className="absolute left-3 top-3 w-5 h-5 text-brand-dark/40" />
                      <textarea
                        id="goals"
                        name="goals"
                        value={formData.goals}
                        onChange={handleInputChange}
                        rows={3}
                        className="form-input pl-11 resize-none"
                        placeholder="What are your lead generation goals? (number of leads, quality improvements, etc.)"
                      />
                    </div>
                  </div>

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        <p className="text-red-800">{submitMessage}</p>
                      </div>
                    </div>
                  )}

                  <div className="text-center pt-4">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`
                        bg-violet-600 hover:bg-violet-700 text-white font-semibold
                        px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl
                        transition-all duration-300 transform hover:scale-105
                        ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
                      `}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Submitting Request...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Target className="w-5 h-5" />
                          <span>Get My Free Analysis</span>
                        </div>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-violet-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
                Ready to Generate More Qualified Leads?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join hundreds of successful businesses who are already seeing 6x more qualified leads with our proven generation strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.a
                  href="#consultation"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-white px-8 py-4 text-lg font-semibold"
                >
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>Start Generating Leads</span>
                  </div>
                </motion.a>
                
                <motion.a
                  href="tel:+17324750139"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-outline btn-white px-8 py-4 text-lg font-semibold"
                >
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Call (732) 475-0139</span>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
