'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp,
  MapPin,
  Users,
  Star,
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
  BarChart3,
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
  BarChart,
  Bar,
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
  currentChallenges: string;
  goals: string;
}

export default function LocalSEOGrowthPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    currentChallenges: '',
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
  const sampleGrowthData = [
    { month: 'Month 1', visitors: 1000 },
    { month: 'Month 2', visitors: 1400 },
    { month: 'Month 3', visitors: 2100 },
    { month: 'Month 4', visitors: 2800 },
    { month: 'Month 5', visitors: 3600 },
    { month: 'Month 6', visitors: 4500 }
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
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: 'Local SEO Growth - Landing Page Inquiry'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your local SEO growth consultation request has been submitted. We&apos;ll contact you within 24 hours with a custom growth strategy.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
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
          title: "Local SEO Growth - Dominate Your Local Market",
          description: "Increase local visibility, drive more foot traffic, and grow your business with our proven local SEO strategies. Get more customers from your neighborhood.",
          url: "https://truerankdigital.com/local-seo-growth",
          keywords: ["local SEO", "local business growth", "google my business", "local search ranking"],
          category: "Local SEO Services",
          serviceType: "Local SEO Growth"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Local SEO Growth", url: "https://truerankdigital.com/local-seo-growth" }
        ]}
      />

      <div className="pt-16">
        {/* Hero Section with Animated Metrics */}
        <section className="py-20 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent relative overflow-hidden">
          {/* Background Elements */}
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
                    <MapPin className="w-4 h-4" />
                    <span>Local SEO Specialists</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                    Dominate Your
                    <span className="block text-yellow-300">Local Market</span>
                  </h1>
                  
                  <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
                    Stop losing customers to competitors. Our team of Google-certified professionals creates 
                    custom local SEO strategies to help your business get found by more customers in your area.
                  </p>

                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-yellow-300">Google</div>
                      <div className="text-sm text-white/80">Certified Team</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-yellow-300">Custom</div>
                      <div className="text-sm text-white/80">Strategies</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-yellow-300">Local</div>
                      <div className="text-sm text-white/80">Focus</div>
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="#consultation"
                      className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-brand-primary font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
                    >
                      <span>Get Free Local SEO Analysis</span>
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </motion.div>
                </motion.div>
              </div>

              {/* Sample Growth Visualization */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-2">Local Traffic Growth Potential</h3>
                <p className="text-sm text-white/70 mb-4">*Visualization for demonstration purposes</p>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={sampleGrowthData}>
                    <defs>
                      <linearGradient id="trafficGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#fbbf24" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                    <XAxis dataKey="month" stroke="rgba(255,255,255,0.8)" />
                    <YAxis stroke="rgba(255,255,255,0.8)" tickFormatter={(value) => `${(value/1000).toFixed(1)}K`} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0,0,0,0.8)', 
                        border: 'none', 
                        borderRadius: '8px',
                        color: 'white'
                      }} 
                      formatter={(value) => [`${value.toLocaleString()} visitors`, 'Monthly Visitors']}
                    />
                    <Area
                      type="monotone"
                      dataKey="visitors"
                      stroke="#fbbf24"
                      strokeWidth={3}
                      fill="url(#trafficGradient)"
                      animationDuration={2000}
                    />
                  </AreaChart>
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
                Expert Google Professionals Ready to Strategize
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Our team of certified Google professionals has helped hundreds of local businesses dominate their markets through proven strategies and personalized approach.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Our Local SEO Expertise */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <h3 className="text-2xl font-semibold text-brand-dark mb-6 flex items-center">
                  <MapPin className="w-6 h-6 text-green-600 mr-3" />
                  Local SEO Mastery
                </h3>
                <div className="space-y-4">
                  {[
                    'Google Business Profile optimization and management',
                    'Local citation building and NAP consistency',
                    'Google Maps ranking improvement strategies',
                    'Review generation and reputation management',
                    'Local keyword research and content optimization',
                    'Mobile and voice search optimization'
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-brand-dark/80">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Our Strategic Approach */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <h3 className="text-2xl font-semibold text-brand-dark mb-6 flex items-center">
                  <Target className="w-6 h-6 text-blue-600 mr-3" />
                  Strategic Planning Process
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      phase: 'Discovery & Analysis',
                      description: 'Complete audit of your current local presence and competitor landscape'
                    },
                    {
                      phase: 'Custom Strategy Development',
                      description: 'Tailored action plan based on your business goals and market opportunities'
                    },
                    {
                      phase: 'Implementation & Optimization',
                      description: 'Execute proven tactics while continuously monitoring and adjusting for best results'
                    },
                    {
                      phase: 'Ongoing Growth & Reporting',
                      description: 'Regular performance reviews and strategy refinements to maintain competitive edge'
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
                Why Choose Our Local SEO Experts?
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Google Certified Professionals',
                    description: 'Our team holds current Google certifications and stays updated with the latest algorithm changes.',
                    icon: <Award className="w-8 h-8" />
                  },
                  {
                    title: 'Local Market Knowledge',
                    description: 'Deep understanding of local search behavior and regional business dynamics.',
                    icon: <MapPin className="w-8 h-8" />
                  },
                  {
                    title: 'Proven Track Record',
                    description: 'Years of experience helping local businesses achieve sustainable growth and visibility.',
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
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
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

        {/* Benefits Section */}
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
                Why Local Businesses Choose Us
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <MapPin className="w-8 h-8" />,
                  title: "Local Market Domination",
                  description: "Appear first for 'near me' searches and dominate local map results",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "More Foot Traffic",  
                  description: "Drive qualified customers directly to your physical location",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Phone className="w-8 h-8" />,
                  title: "Increased Phone Calls",
                  description: "Generate more leads and sales calls from local customers",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Star className="w-8 h-8" />,
                  title: "Review Management",
                  description: "Build trust with automated review generation and management",
                  color: "from-yellow-500 to-orange-500"  
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Performance Tracking",
                  description: "Detailed analytics showing ROI and business growth metrics",
                  color: "from-red-500 to-pink-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Fast Results",
                  description: "See improvements in local rankings within 30-60 days",
                  color: "from-cyan-500 to-blue-500"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-brand-dark/70 leading-relaxed">
                    {benefit.description}
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
                Get Your Free Local Growth Consultation
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
                Discover exactly how we can help your business dominate local search results and drive more customers through your doors.
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
                    Consultation Request Submitted!
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
                        Business Name *
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
                          placeholder="Your business name"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="currentChallenges" className="block text-sm font-semibold text-brand-dark mb-2">
                      Current Local SEO Challenges
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-brand-dark/40" />
                      <textarea
                        id="currentChallenges"
                        name="currentChallenges"
                        value={formData.currentChallenges}
                        onChange={handleInputChange}
                        rows={3}
                        className="form-input pl-11 resize-none"
                        placeholder="What local SEO challenges is your business facing?"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="goals" className="block text-sm font-semibold text-brand-dark mb-2">
                      Business Goals
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
                        placeholder="What are your main business goals for the next 6-12 months?"
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
                        bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold
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
                          <TrendingUp className="w-5 h-5" />
                          <span>Get My Free Consultation</span>
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
        <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
                Ready to Dominate Your Local Market?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Work with Google-certified professionals who understand local search and can create a custom strategy for your business goals.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.a
                  href="#consultation"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-white px-8 py-4 text-lg font-semibold"
                >
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>Start Growing Today</span>
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
