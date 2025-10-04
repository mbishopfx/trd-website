'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2,
  TrendingUp,
  Globe,
  Users,
  Zap,
  Phone,
  Mail,
  Building,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Target,
  Shield,
  Award,
  BarChart3
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
  BarChart,
  Bar,
  ComposedChart,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import ComprehensiveSchema from '@/components/seo/ComprehensiveSchema';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  companySize: string;
  currentChallenges: string;
  goals: string;
}

export default function EnterpriseSEOPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    companySize: '',
    currentChallenges: '',
    goals: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [animatedTraffic, setAnimatedTraffic] = useState(0);

  // Animated counter for traffic
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedTraffic(prev => {
        if (prev < 2.4) return prev + 0.03;
        return prev;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  // Enterprise SEO data
  const enterpriseGrowthData = [
    { month: 'Q1', traffic: 850000, leads: 3200, revenue: 4500000 },
    { month: 'Q2', traffic: 1200000, leads: 4800, revenue: 6200000 },
    { month: 'Q3', traffic: 1650000, leads: 6400, revenue: 8800000 },
    { month: 'Q4', traffic: 2100000, leads: 8200, revenue: 11500000 },
    { month: 'Q5', traffic: 2650000, leads: 10100, revenue: 14800000 },
    { month: 'Q6', traffic: 3200000, leads: 12400, revenue: 18200000 }
  ];

  const performanceMetrics = [
    { metric: 'Technical SEO', score: 98 },
    { metric: 'Content Strategy', score: 94 },
    { metric: 'Link Authority', score: 96 },
    { metric: 'Site Speed', score: 92 },
    { metric: 'Mobile Performance', score: 97 },
    { metric: 'Schema Implementation', score: 99 }
  ];

  const competitorAnalysis = [
    { company: 'Competitor A', traffic: 1200000, rankings: 2400, authority: 78 },
    { company: 'Your Company', traffic: 3200000, rankings: 4800, authority: 94 },
    { company: 'Competitor B', traffic: 980000, rankings: 1900, authority: 72 },
    { company: 'Competitor C', traffic: 1450000, rankings: 2800, authority: 81 }
  ];

  const companySizes = [
    '50-100 employees',
    '100-500 employees',
    '500-1,000 employees',
    '1,000-5,000 employees',
    'Over 5,000 employees'
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
          subject: 'Enterprise SEO - Landing Page Inquiry'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your enterprise SEO consultation request has been submitted. Our enterprise team will contact you within 24 hours with a custom strategy proposal.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          companySize: '',
          currentChallenges: '',
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
          title: "Enterprise SEO - Scale Your Organic Presence",
          description: "Enterprise-level SEO solutions for large organizations. Increase organic traffic, improve rankings, and drive revenue with our comprehensive SEO strategies.",
          url: "https://truerankdigital.com/enterprise-seo",
          keywords: ["enterprise SEO", "large scale SEO", "corporate SEO", "enterprise digital marketing"],
          category: "Enterprise SEO Services",
          serviceType: "Enterprise SEO & Digital Strategy"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Enterprise SEO", url: "https://truerankdigital.com/enterprise-seo" }
        ]}
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
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
                    <Building2 className="w-4 h-4" />
                    <span>Enterprise SEO Specialists</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                    Scale Your
                    <span className="block text-blue-300">Enterprise SEO</span>
                  </h1>
                  
                  <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
                    Transform your enterprise's digital presence. Our advanced SEO strategies help 
                    Fortune 500 companies increase organic traffic by <strong className="text-blue-300">{animatedTraffic.toFixed(1)}M+</strong> visitors 
                    within 6 months.
                  </p>

                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-blue-300">287%</div>
                      <div className="text-sm text-white/80">Traffic Growth</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-blue-300">94%</div>
                      <div className="text-sm text-white/80">First Page Rankings</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-blue-300">180</div>
                      <div className="text-sm text-white/80">Days Average</div>
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="#consultation"
                      className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-slate-800 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
                    >
                      <span>Get Enterprise Analysis</span>
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </motion.div>
                </motion.div>
              </div>

              {/* Enterprise Growth Chart */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise Growth Metrics</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={enterpriseGrowthData}>
                    <defs>
                      <linearGradient id="enterpriseGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#93c5fd" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#93c5fd" stopOpacity={0.1}/>
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
                      formatter={(value, name) => [
                        name === 'traffic' ? `${(value/1000000).toFixed(1)}M` : 
                        name === 'revenue' ? `$${(value/1000000).toFixed(1)}M` : 
                        value.toLocaleString(),
                        name === 'traffic' ? 'Traffic' : name === 'revenue' ? 'Revenue' : 'Leads'
                      ]}
                    />
                    <Area
                      type="monotone"
                      dataKey="traffic"
                      stroke="#93c5fd"
                      strokeWidth={3}
                      fill="url(#enterpriseGradient)"
                      animationDuration={2000}
                    />
                    <Line
                      type="monotone"
                      dataKey="leads"
                      stroke="#34d399"
                      strokeWidth={2}
                      animationDuration={2000}
                      animationDelay={500}
                    />
                  </ComposedChart>
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
                Enterprise-Level Results
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                See how our enterprise SEO strategies helped major organizations dominate their markets and achieve unprecedented growth.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Performance Radar Chart */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-semibold text-brand-dark mb-4 flex items-center">
                  <Award className="w-6 h-6 text-blue-600 mr-2" />
                  SEO Performance Metrics
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={performanceMetrics}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="metric" className="text-xs" />
                    <PolarRadiusAxis domain={[0, 100]} tick={false} />
                    <Radar
                      dataKey="score"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.3}
                      strokeWidth={2}
                      animationDuration={2000}
                    />
                    <Tooltip formatter={(value) => [`${value}%`, 'Performance']} />
                  </RadarChart>
                </ResponsiveContainer>
              </motion.div>

              {/* Competitor Analysis */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-semibold text-brand-dark mb-4 flex items-center">
                  <BarChart3 className="w-6 h-6 text-green-600 mr-2" />
                  Competitive Advantage
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={competitorAnalysis} margin={{ bottom: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="company" 
                      angle={-45} 
                      textAnchor="end" 
                      height={100} 
                      interval={0}
                      fontSize={12}
                    />
                    <YAxis tickFormatter={(value) => `${(value/1000000).toFixed(1)}M`} />
                    <Tooltip 
                      formatter={(value, name) => [
                        name === 'traffic' ? `${(value/1000000).toFixed(1)}M` : value,
                        name === 'traffic' ? 'Monthly Traffic' : 
                        name === 'rankings' ? 'Top Rankings' : 'Domain Authority'
                      ]}
                    />
                    <Bar 
                      dataKey="traffic" 
                      fill={(entry) => entry?.company === 'Your Company' ? '#10b981' : '#94a3b8'} 
                      animationDuration={1500} 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Globe className="w-8 h-8" />,
                  metric: "3.2M+",
                  label: "Monthly Organic Traffic",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  metric: "4,800+",
                  label: "First Page Keywords",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  metric: "$18.2M",
                  label: "Revenue Attributed",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  metric: "99.7%",
                  label: "Uptime & Performance",
                  color: "from-orange-500 to-red-500"
                }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-brand-dark mb-2">{stat.metric}</div>
                  <div className="text-brand-dark/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
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
                Enterprise SEO Solutions
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Global SEO Strategy",
                  description: "Multi-market, multi-language SEO strategies for international enterprises",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Enterprise Security",  
                  description: "Advanced technical SEO with enterprise-level security and compliance",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Team Training & Support",
                  description: "Comprehensive training programs for your internal marketing teams",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Advanced Analytics",
                  description: "Custom dashboards and reporting for executive-level insights",
                  color: "from-yellow-500 to-orange-500"  
                },
                {
                  icon: <Building2 className="w-8 h-8" />,
                  title: "Large Scale Implementation",
                  description: "SEO solutions that scale across thousands of pages and products",
                  color: "from-red-500 to-pink-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Performance Optimization",
                  description: "Enterprise-grade site speed and Core Web Vitals optimization",
                  color: "from-cyan-500 to-blue-500"
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
                Get Your Enterprise SEO Analysis
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
                Discover how we can help your enterprise dominate search results and achieve unprecedented organic growth.
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
                    Enterprise Analysis Request Submitted!
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
                          className="form-input pl-11 text-gray-900 placeholder-gray-500"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-brand-dark mb-2">
                        Business Email *
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
                          placeholder="your.email@company.com"
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
                    <label htmlFor="companySize" className="block text-sm font-semibold text-brand-dark mb-2">
                      Company Size
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="form-input text-brand-dark font-medium"
                    >
                      <option value="">Select company size</option>
                      {companySizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="currentChallenges" className="block text-sm font-semibold text-brand-dark mb-2">
                      Current SEO Challenges
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-brand-dark/40" />
                      <textarea
                        id="currentChallenges"
                        name="currentChallenges"
                        value={formData.currentChallenges}
                        onChange={handleInputChange}
                        rows={3}
                        className="form-input pl-11 text-gray-900 placeholder-gray-500 resize-none"
                        placeholder="What SEO challenges is your enterprise facing? (technical issues, competitive pressure, scaling problems, etc.)"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="goals" className="block text-sm font-semibold text-brand-dark mb-2">
                      Enterprise Goals
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
                        placeholder="What are your enterprise SEO goals? (traffic targets, market expansion, competitive dominance, etc.)"
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
                        bg-slate-700 hover:bg-slate-800 text-white font-semibold
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
                          <Building2 className="w-5 h-5" />
                          <span>Get Enterprise Analysis</span>
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
        <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
                Ready to Scale Your Enterprise SEO?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join Fortune 500 companies who trust us to deliver enterprise-level SEO results and dominate their markets.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.a
                  href="#consultation"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-white px-8 py-4 text-lg font-semibold"
                >
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5" />
                    <span>Scale Your SEO</span>
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
