'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart,
  TrendingUp,
  DollarSign,
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
  Package,
  CreditCard
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
  ComposedChart
} from 'recharts';
import ComprehensiveSchema from '@/components/seo/ComprehensiveSchema';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  currentRevenue: string;
  challenges: string;
}

export default function EcommerceGrowthPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    currentRevenue: '',
    challenges: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [animatedRevenue, setAnimatedRevenue] = useState(0);

  // Animated counter for revenue
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedRevenue(prev => {
        if (prev < 387) return prev + 5;
        return prev;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  // E-commerce growth data
  const revenueGrowthData = [
    { month: 'Jan', revenue: 45000, orders: 180, conversion: 2.1 },
    { month: 'Feb', revenue: 62000, orders: 248, conversion: 2.8 },
    { month: 'Mar', revenue: 89000, orders: 356, conversion: 3.5 },
    { month: 'Apr', revenue: 124000, orders: 496, conversion: 4.2 },
    { month: 'May', revenue: 167000, orders: 668, conversion: 4.9 },
    { month: 'Jun', revenue: 225000, orders: 900, conversion: 5.6 }
  ];

  const channelPerformanceData = [
    { channel: 'Organic Search', before: 15000, after: 85000, growth: 467 },
    { channel: 'Shopping Ads', before: 8000, after: 45000, growth: 462 },
    { channel: 'Product Listings', before: 5000, after: 35000, growth: 600 },
    { channel: 'Social Commerce', before: 3000, after: 22000, growth: 633 }
  ];

  const revenueOptions = [
    'Under $10K/month',
    '$10K - $50K/month',
    '$50K - $100K/month', 
    '$100K - $500K/month',
    'Over $500K/month'
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
          subject: 'E-commerce Growth - Landing Page Inquiry'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your e-commerce growth consultation request has been submitted. We&apos;ll contact you within 24 hours with a custom revenue optimization strategy.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          currentRevenue: '',
          challenges: ''
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
          title: "E-commerce Growth - Scale Your Online Revenue",
          description: "Increase online sales, optimize conversion rates, and scale your e-commerce business with our proven growth strategies and SEO optimization.",
          url: "https://truerankdigital.com/ecommerce-growth",
          keywords: ["ecommerce SEO", "online sales growth", "conversion optimization", "ecommerce marketing"],
          category: "E-commerce Growth Services",
          serviceType: "E-commerce Growth & Optimization"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "E-commerce Growth", url: "https://truerankdigital.com/ecommerce-growth" }
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
                    <ShoppingCart className="w-4 h-4" />
                    <span>E-commerce Growth Experts</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                    Scale Your
                    <span className="block text-yellow-300">Online Revenue</span>
                  </h1>
                  
                  <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
                    Stop losing sales to competitors. Our proven e-commerce optimization strategies help 
                    online stores increase revenue by <strong className="text-yellow-300">{animatedRevenue}%</strong> in 
                    just 120 days.
                  </p>

                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-yellow-300">5.2x</div>
                      <div className="text-sm text-white/80">Revenue Growth</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-yellow-300">89%</div>
                      <div className="text-sm text-white/80">More Conversions</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-yellow-300">90</div>
                      <div className="text-sm text-white/80">Days Average</div>
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="#consultation"
                      className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
                    >
                      <span>Get Free Revenue Analysis</span>
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </motion.div>
                </motion.div>
              </div>

              {/* Revenue Growth Chart */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Monthly Revenue Growth</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={revenueGrowthData}>
                    <defs>
                      <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
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
                      formatter={(value, name) => [
                        name === 'revenue' ? `$${value.toLocaleString()}` : value,
                        name === 'revenue' ? 'Revenue' : name === 'orders' ? 'Orders' : 'Conversion %'
                      ]}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#fbbf24"
                      strokeWidth={3}
                      fill="url(#revenueGradient)"
                      animationDuration={2000}
                    />
                    <Line
                      type="monotone"
                      dataKey="conversion"
                      stroke="#10b981"
                      strokeWidth={2}
                      yAxisId="right"
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
                Real E-commerce Success Stories
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                See how our e-commerce optimization strategies transformed these online stores and drove exponential revenue growth.
              </p>
            </motion.div>

            {/* Channel Performance Chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-8 mb-12"
            >
              <h3 className="text-2xl font-semibold text-brand-dark mb-6 text-center flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-emerald-600 mr-2" />
                Revenue Channel Performance
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={channelPerformanceData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="channel" 
                    angle={-45} 
                    textAnchor="end" 
                    height={100} 
                    interval={0} 
                  />
                  <YAxis tickFormatter={(value) => `$${(value/1000).toFixed(0)}K`} />
                  <Tooltip 
                    formatter={(value, name) => [
                      `$${value.toLocaleString()}`,
                      name === 'before' ? 'Before Optimization' : 'After Optimization'
                    ]}
                  />
                  <Bar dataKey="before" fill="#94a3b8" name="before" animationDuration={1500} />
                  <Bar dataKey="after" fill="#10b981" name="after" animationDuration={1500} animationDelay={500} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Key Metrics Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <DollarSign className="w-8 h-8" />,
                  metric: "$2.3M+",
                  label: "Revenue Generated",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <ShoppingCart className="w-8 h-8" />,
                  metric: "847%",
                  label: "Avg Order Value",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  metric: "5.8x",
                  label: "Conversion Rate",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  metric: "312%",
                  label: "ROAS Improvement",
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
                Complete E-commerce Growth Solutions
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Package className="w-8 h-8" />,
                  title: "Product Page Optimization",
                  description: "Optimize product listings for maximum visibility and conversion rates",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <CreditCard className="w-8 h-8" />,
                  title: "Checkout Flow Optimization",  
                  description: "Reduce cart abandonment with streamlined checkout processes",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Conversion Rate Growth",
                  description: "A/B test and optimize every element for maximum conversions",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Shopping Campaign Setup",
                  description: "Profitable Google Shopping and product listing campaigns",
                  color: "from-yellow-500 to-orange-500"  
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Customer Journey Mapping",
                  description: "Optimize the entire customer experience from discovery to purchase",
                  color: "from-red-500 to-pink-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Performance Analytics",
                  description: "Advanced tracking and reporting for data-driven decisions",
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
                Get Your Free E-commerce Revenue Analysis
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
                Discover exactly how we can optimize your online store to drive more sales, increase conversions, and maximize your revenue potential.
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
                        Store Name *
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
                          placeholder="Your store name"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="currentRevenue" className="block text-sm font-semibold text-brand-dark mb-2">
                      Current Monthly Revenue
                    </label>
                    <select
                      id="currentRevenue"
                      name="currentRevenue"
                      value={formData.currentRevenue}
                      onChange={handleInputChange}
                      className="form-input text-brand-dark font-medium"
                    >
                      <option value="">Select revenue range</option>
                      {revenueOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="challenges" className="block text-sm font-semibold text-brand-dark mb-2">
                      Current E-commerce Challenges
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-brand-dark/40" />
                      <textarea
                        id="challenges"
                        name="challenges"
                        value={formData.challenges}
                        onChange={handleInputChange}
                        rows={4}
                        className="form-input pl-11 resize-none"
                        placeholder="What challenges is your online store facing? (low conversion rates, cart abandonment, traffic issues, etc.)"
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
                        bg-emerald-600 hover:bg-emerald-700 text-white font-semibold
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
                          <ShoppingCart className="w-5 h-5" />
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
        <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
                Ready to Scale Your E-commerce Revenue?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join dozens of successful online stores who are already seeing 5x revenue growth with our proven optimization strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.a
                  href="#consultation"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-white px-8 py-4 text-lg font-semibold"
                >
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5" />
                    <span>Start Growing Revenue</span>
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
