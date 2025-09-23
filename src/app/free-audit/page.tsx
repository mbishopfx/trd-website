'use client';

import React, { useState } from 'react';
import { Search, CheckCircle, Zap, User, Mail, Building, Globe, MessageSquare, DollarSign, Send, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FreeAuditPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    currentMarketing: '',
    goals: '',
    budget: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const budgetOptions = [
    'Under $1,000/month',
    '$1,000 - $2,500/month', 
    '$2,500 - $5,000/month',
    '$5,000 - $10,000/month',
    'Over $10,000/month',
    'Need consultation to determine'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.website) {
      setSubmitStatus('error');
      setSubmitMessage('Please fill in all required fields: Name, Email, and Website.');
      return;
    }

    // Basic website URL validation
    let websiteUrl = formData.website.trim();
    if (!websiteUrl.startsWith('http://') && !websiteUrl.startsWith('https://')) {
      websiteUrl = 'https://' + websiteUrl;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          website: websiteUrl
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your free SEO audit request has been submitted. We\'ll analyze your website and send you a comprehensive report within 24-48 hours.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          website: '',
          currentMarketing: '',
          goals: '',
          budget: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.error || 'Something went wrong. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Audit request error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Failed to submit audit request. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-brand-primary/10 to-white">
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-primary/10 rounded-full mb-6"
            >
              <Search className="w-5 h-5 text-brand-primary" />
              <span className="text-brand-primary font-semibold text-sm">Free SEO Audit</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6"
            >
              Get Your Free SEO Audit
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-brand-dark/70 max-w-3xl mx-auto mb-12"
            >
              Discover exactly what's holding your website back with our comprehensive SEO audit. Get actionable insights and recommendations at no cost.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-8">
                What You'll Get:
              </h2>
              
              <div className="space-y-4">
                {[
                  'Complete Technical Analysis',
                  'Content Optimization Review', 
                  'Competitor Comparison',
                  'Local SEO Assessment',
                  'Mobile Performance Check',
                  'Actionable Recommendations'
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-3 glass-card p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-brand-dark font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Audit Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-6">
                Request Your Free Audit
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="flex items-center space-x-2 text-brand-dark font-semibold mb-2">
                      <User className="w-4 h-4 text-brand-primary" />
                      <span>Name *</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-brand-dark/20 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 bg-white/80"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="flex items-center space-x-2 text-brand-dark font-semibold mb-2">
                      <Mail className="w-4 h-4 text-brand-primary" />
                      <span>Email *</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-brand-dark/20 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 bg-white/80"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone and Company Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="flex items-center space-x-2 text-brand-dark font-semibold mb-2">
                      <svg className="w-4 h-4 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Phone</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-brand-dark/20 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 bg-white/80"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="flex items-center space-x-2 text-brand-dark font-semibold mb-2">
                      <Building className="w-4 h-4 text-brand-primary" />
                      <span>Company</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-brand-dark/20 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 bg-white/80"
                      placeholder="Your business name"
                    />
                  </div>
                </div>

                {/* Website URL */}
                <div>
                  <label htmlFor="website" className="flex items-center space-x-2 text-brand-dark font-semibold mb-2">
                    <Globe className="w-4 h-4 text-brand-primary" />
                    <span>Website URL *</span>
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    required
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-brand-dark/20 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 bg-white/80"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="flex items-center space-x-2 text-brand-dark font-semibold mb-2">
                    <DollarSign className="w-4 h-4 text-brand-primary" />
                    <span>Monthly Marketing Budget</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-brand-dark/20 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 bg-white/80"
                  >
                    <option value="">Select budget range</option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                {/* Current Marketing */}
                <div>
                  <label htmlFor="currentMarketing" className="flex items-center space-x-2 text-brand-dark font-semibold mb-2">
                    <MessageSquare className="w-4 h-4 text-brand-primary" />
                    <span>Current Marketing Efforts</span>
                  </label>
                  <textarea
                    id="currentMarketing"
                    name="currentMarketing"
                    rows={3}
                    value={formData.currentMarketing}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-brand-dark/20 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 bg-white/80 resize-none"
                    placeholder="Tell us about any SEO or marketing you're currently doing..."
                  />
                </div>

                {/* Goals */}
                <div>
                  <label htmlFor="goals" className="flex items-center space-x-2 text-brand-dark font-semibold mb-2">
                    <Zap className="w-4 h-4 text-brand-primary" />
                    <span>Business Goals</span>
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    rows={3}
                    value={formData.goals}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-brand-dark/20 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 bg-white/80 resize-none"
                    placeholder="What are your main business goals and how can SEO help achieve them?"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full inline-flex items-center justify-center space-x-3 px-8 py-4 font-semibold text-lg rounded-full transition-all duration-300 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-brand-primary hover:bg-brand-primary/90 shadow-glow hover:shadow-glow-lg'
                    } text-white`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Get My Free Audit</span>
                      </>
                    )}
                  </motion.button>
                  
                  {submitStatus === 'idle' && (
                    <p className="text-brand-dark/60 text-sm text-center mt-4">
                      We'll analyze your website and send you a detailed report within 24-48 hours.
                    </p>
                  )}
                </div>

                {/* Status Messages */}
                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl flex items-start space-x-3 ${
                      submitStatus === 'success' 
                        ? 'bg-green-50 border border-green-200 text-green-800' 
                        : 'bg-red-50 border border-red-200 text-red-800'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    )}
                    <p className="text-sm">{submitMessage}</p>
                  </motion.div>
                )}

              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
