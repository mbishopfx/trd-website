'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain,
  Cpu,
  Zap,
  TrendingUp,
  Bot,
  Phone,
  Mail,
  Building,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Target,
  Lightbulb,
  Rocket,
  Network
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
  ScatterChart,
  Scatter,
  Cell
} from 'recharts';
import ComprehensiveSchema from '@/components/seo/ComprehensiveSchema';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  currentTech: string;
  aiInterest: string;
  goals: string;
}

export default function AISeOTechnologyPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    currentTech: '',
    aiInterest: '',
    goals: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [animatedEfficiency, setAnimatedEfficiency] = useState(0);

  // Animated counter for efficiency
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedEfficiency(prev => {
        if (prev < 847) return prev + 11;
        return prev;
      });
    }, 15);

    return () => clearInterval(timer);
  }, []);

  // AI SEO performance data
  const aiPerformanceData = [
    { month: 'Month 1', traditional: 2400, ai: 3800, efficiency: 158 },
    { month: 'Month 2', traditional: 2800, ai: 5200, efficiency: 186 },
    { month: 'Month 3', traditional: 3100, ai: 7400, efficiency: 239 },
    { month: 'Month 4', traditional: 3400, ai: 9800, efficiency: 288 },
    { month: 'Month 5', traditional: 3600, ai: 12500, efficiency: 347 },
    { month: 'Month 6', traditional: 3800, ai: 15800, efficiency: 416 }
  ];

  const aiCapabilities = [
    { name: 'Content Generation', value: 95, fill: '#3b82f6' },
    { name: 'Keyword Research', value: 92, fill: '#10b981' },
    { name: 'Technical Analysis', value: 98, fill: '#8b5cf6' },
    { name: 'Competitor Intelligence', value: 89, fill: '#f59e0b' },
    { name: 'Performance Prediction', value: 94, fill: '#ef4444' }
  ];

  const automationSavings = [
    { task: 'Keyword Research', hoursTraditional: 8, hoursAI: 0.5, savings: 94 },
    { task: 'Content Creation', hoursTraditional: 12, hoursAI: 2, savings: 83 },
    { task: 'Technical Audit', hoursTraditional: 16, hoursAI: 1, savings: 94 },
    { task: 'Competitor Analysis', hoursTraditional: 6, hoursAI: 0.3, savings: 95 },
    { task: 'Performance Reporting', hoursTraditional: 4, hoursAI: 0.2, savings: 95 }
  ];

  const techInterests = [
    'AI Content Generation',
    'Automated Technical SEO',
    'Predictive Analytics',
    'Voice Search Optimization',
    'Machine Learning Models',
    'Natural Language Processing',
    'Computer Vision for SEO'
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
          subject: 'AI SEO Technology - Landing Page Inquiry'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your AI SEO technology consultation request has been submitted. Our AI specialists will contact you within 24 hours to discuss cutting-edge solutions.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          currentTech: '',
          aiInterest: '',
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
          title: "AI SEO Technology - Next-Generation Search Optimization",
          description: "Revolutionary AI-powered SEO technology that automates optimization, predicts performance, and delivers unprecedented results through machine learning.",
          url: "https://truerankdigital.com/ai-seo-technology",
          keywords: ["AI SEO", "machine learning SEO", "automated SEO", "AI marketing technology"],
          category: "AI SEO Technology Services",
          serviceType: "AI-Powered SEO Technology"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "AI SEO Technology", url: "https://truerankdigital.com/ai-seo-technology" }
        ]}
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-400 rounded-full blur-2xl"></div>
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
                    <Brain className="w-4 h-4" />
                    <span>AI SEO Technology</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                    The Future of
                    <span className="block text-cyan-300">SEO is AI</span>
                  </h1>
                  
                  <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
                    Harness the power of artificial intelligence to automate, optimize, and dominate search results. 
                    Our AI-powered SEO delivers <strong className="text-cyan-300">{animatedEfficiency}%</strong> better 
                    efficiency than traditional methods.
                  </p>

                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-cyan-300">10x</div>
                      <div className="text-sm text-white/80">Faster Results</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-cyan-300">95%</div>
                      <div className="text-sm text-white/80">Automation Rate</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-cyan-300">24/7</div>
                      <div className="text-sm text-white/80">AI Monitoring</div>
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="#consultation"
                      className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-indigo-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
                    >
                      <span>Experience AI SEO</span>
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </motion.div>
                </motion.div>
              </div>

              {/* AI Performance Chart */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">AI vs Traditional SEO Performance</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={aiPerformanceData}>
                    <defs>
                      <linearGradient id="aiGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="traditionalGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.1}/>
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
                      dataKey="traditional"
                      stroke="#94a3b8"
                      strokeWidth={2}
                      fill="url(#traditionalGradient)"
                      animationDuration={2000}
                      name="Traditional SEO"
                    />
                    <Area
                      type="monotone"
                      dataKey="ai"
                      stroke="#06b6d4"
                      strokeWidth={3}
                      fill="url(#aiGradient)"
                      animationDuration={2000}
                      animationDelay={500}
                      name="AI-Powered SEO"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
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
                Revolutionary AI Capabilities
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Our AI-powered SEO technology leverages machine learning, natural language processing, and predictive analytics to deliver unprecedented results.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* AI Capability Scores */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-semibold text-brand-dark mb-4 flex items-center">
                  <Brain className="w-6 h-6 text-purple-600 mr-2" />
                  AI Performance Metrics
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RadialBarChart cx="50%" cy="50%" innerRadius="30%" outerRadius="90%" data={aiCapabilities}>
                    <RadialBar
                      dataKey="value"
                      cornerRadius={10}
                      fill={(entry, index) => aiCapabilities[index]?.fill || '#3b82f6'}
                      animationDuration={2000}
                    />
                    <Tooltip formatter={(value) => [`${value}%`, 'Performance']} />
                  </RadialBarChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-1 gap-2 mt-4">
                  {aiCapabilities.map((capability, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: capability.fill }}
                        ></div>
                        <span className="text-brand-dark/70">{capability.name}</span>
                      </div>
                      <span className="font-semibold">{capability.value}%</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Time Savings Chart */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-semibold text-brand-dark mb-4 flex items-center">
                  <Zap className="w-6 h-6 text-yellow-600 mr-2" />
                  Automation Time Savings
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <ScatterChart data={automationSavings}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hoursTraditional" name="Traditional Hours" />
                    <YAxis dataKey="hoursAI" name="AI Hours" />
                    <Tooltip 
                      formatter={(value, name) => [
                        `${value} hours`,
                        name === 'hoursTraditional' ? 'Traditional Method' : 'AI-Powered'
                      ]}
                      labelFormatter={(label, payload) => 
                        payload?.[0]?.payload?.task || 'Task'
                      }
                    />
                    <Scatter 
                      dataKey="hoursAI" 
                      fill="#10b981" 
                      animationDuration={2000}
                    />
                  </ScatterChart>
                </ResponsiveContainer>
                <div className="mt-4 text-center">
                  <div className="text-2xl font-bold text-green-600">94% Average</div>
                  <div className="text-sm text-brand-dark/60">Time Reduction</div>
                </div>
              </motion.div>
            </div>

            {/* AI Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Bot className="w-8 h-8" />,
                  metric: "24/7",
                  label: "AI Monitoring",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Cpu className="w-8 h-8" />,
                  metric: "10,000+",
                  label: "Data Points Analyzed",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Network className="w-8 h-8" />,
                  metric: "95%",
                  label: "Prediction Accuracy",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Rocket className="w-8 h-8" />,
                  metric: "3.2s",
                  label: "Response Time",
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

        {/* AI Technologies Section */}
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
                Cutting-Edge AI Technologies
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Machine Learning Models",
                  description: "Advanced algorithms that learn and adapt to search engine changes automatically",
                  color: "from-purple-500 to-indigo-500"
                },
                {
                  icon: <Lightbulb className="w-8 h-8" />,
                  title: "Natural Language Processing",  
                  description: "AI that understands content context and user intent for perfect optimization",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Predictive Analytics",
                  description: "Forecast SEO performance and identify opportunities before competitors",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Network className="w-8 h-8" />,
                  title: "Neural Network Analysis",
                  description: "Deep learning systems that analyze complex SEO patterns and relationships",
                  color: "from-yellow-500 to-orange-500"  
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Real-Time Optimization",
                  description: "Instant adjustments based on algorithm changes and performance data",
                  color: "from-red-500 to-pink-500"
                },
                {
                  icon: <Rocket className="w-8 h-8" />,
                  title: "Automated Content Generation",
                  description: "AI-powered content creation that matches search intent perfectly",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {tech.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                    {tech.title}
                  </h3>
                  <p className="text-brand-dark/70 leading-relaxed">
                    {tech.description}
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
                Experience the Future of SEO
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
                Discover how our AI-powered SEO technology can revolutionize your digital marketing and deliver unprecedented results.
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
                    AI Consultation Request Submitted!
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
                    <label htmlFor="aiInterest" className="block text-sm font-semibold text-brand-dark mb-2">
                      AI Technology Interest
                    </label>
                    <select
                      id="aiInterest"
                      name="aiInterest"
                      value={formData.aiInterest}
                      onChange={handleInputChange}
                      className="form-input text-brand-dark font-medium"
                    >
                      <option value="">Select AI technology of interest</option>
                      {techInterests.map((tech) => (
                        <option key={tech} value={tech}>
                          {tech}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="currentTech" className="block text-sm font-semibold text-brand-dark mb-2">
                      Current Technology Stack
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-brand-dark/40" />
                      <textarea
                        id="currentTech"
                        name="currentTech"
                        value={formData.currentTech}
                        onChange={handleInputChange}
                        rows={3}
                        className="form-input pl-11 resize-none"
                        placeholder="What SEO tools and technologies are you currently using?"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="goals" className="block text-sm font-semibold text-brand-dark mb-2">
                      AI SEO Goals
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
                        placeholder="What do you hope to achieve with AI-powered SEO? (automation, efficiency, better results, etc.)"
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
                        bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold
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
                          <Brain className="w-5 h-5" />
                          <span>Experience AI SEO</span>
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
        <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
                Ready to Embrace AI-Powered SEO?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join forward-thinking companies who are already leveraging AI to achieve 10x better SEO results and dominate their competition.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.a
                  href="#consultation"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-white px-8 py-4 text-lg font-semibold"
                >
                  <div className="flex items-center space-x-2">
                    <Brain className="w-5 h-5" />
                    <span>Start AI Journey</span>
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
