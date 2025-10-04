'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Users, 
  Share2, 
  QrCode, 
  Mail,
  Phone,
  Building,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Gift,
  Target,
  TrendingUp,
  Clock,
  Shield,
  Zap
} from 'lucide-react';
import ComprehensiveSchema from '@/components/seo/ComprehensiveSchema';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  currentClient: boolean;
  referralType: string;
  message: string;
}

export default function ReferralPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    currentClient: false,
    referralType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [referralData, setReferralData] = useState<{code: string; qrUrl: string} | null>(null);

  const referralTypes = [
    'Individual Referral Partner',
    'Business Referral Partner', 
    'Agency Partnership',
    'Existing Client Referral',
    'Professional Network Referral'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.referralType) {
      setSubmitStatus('error');
      setSubmitMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const response = await fetch('/api/referral', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: `Referral Program Application - ${formData.referralType}`
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your referral application has been submitted successfully. Check your email for confirmation and next steps.');
        setReferralData({
          code: data.referralCode,
          qrUrl: data.qrCodeUrl
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          currentClient: false,
          referralType: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.error || 'Something went wrong. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Failed to send application. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: '$500 Per Referral',
      description: 'Earn $500 for each successful referral that becomes an active client for 30+ days',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <QrCode className="w-8 h-8" />,
      title: 'Easy Sharing Tools',
      description: 'Get custom QR codes and referral links for effortless sharing across all platforms',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'High Success Rate',
      description: 'Our proven SEO results make referrals easy to convert with 95% client satisfaction',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'No Limits',
      description: 'Unlimited earning potential - refer as many clients as you want with no caps',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Apply Today',
      description: 'Fill out our simple application form to join the referral program',
      icon: <User className="w-6 h-6" />
    },
    {
      step: '2', 
      title: 'Get Approved',
      description: 'Our team reviews your application within 1-2 business days',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      step: '3',
      title: 'Receive Tools',
      description: 'Get your custom referral code, QR codes, and marketing materials',
      icon: <Share2 className="w-6 h-6" />
    },
    {
      step: '4',
      title: 'Start Earning',
      description: 'Refer clients and earn $500 for each successful 30-day client',
      icon: <Gift className="w-6 h-6" />
    }
  ];

  return (
    <>
      <ComprehensiveSchema
        type="referral-program"
        pageData={{
          title: "True Rank Digital Referral Program - Earn $500 Per Referral",
          description: "Join our referral program and earn $500 for each successful client referral. Get custom QR codes, tracking tools, and marketing materials. Apply today!",
          url: "https://truerankdigital.com/referral",
          keywords: ["referral program", "affiliate marketing", "partner program", "earn money", "SEO referrals"],
          category: "Referral Program",
          offers: [{
            name: "Referral Bonus",
            price: "500",
            currency: "USD",
            description: "Earn $500 for each successful client referral that remains active for 30+ days"
          }]
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Referral Program", url: "https://truerankdigital.com/referral" }
        ]}
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-light via-white to-brand-primary/10 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-64 h-64 bg-brand-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                  <Gift className="w-4 h-4" />
                  <span>Earn $500 Per Referral</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
                  Join Our
                  <span className="block text-brand-primary">Referral Program</span>
                </h1>
                <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto leading-relaxed">
                  Partner with True Rank Digital and earn <strong className="text-green-600">$500 for every successful client referral</strong>. 
                  Get custom tracking tools, QR codes, and unlimited earning potential.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <div className="glass-card px-6 py-3 flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-brand-dark">$500 Bonus</span>
                </div>
                <div className="glass-card px-6 py-3 flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-brand-dark">No Limits</span>
                </div>
                <div className="glass-card px-6 py-3 flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-brand-dark">Quick Approval</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
                Why Join Our Referral Program?
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Partner with industry leaders and earn substantial rewards for sharing our proven SEO solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 text-center hover:shadow-glass-lg transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
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

        {/* Process Section */}
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
                How It Works
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Getting started is simple. Follow these four easy steps to begin earning referral rewards.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 relative z-10">
                    {step.step}
                  </div>
                  
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-brand-primary/20 -z-10"></div>
                  )}

                  {/* Icon */}
                  <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-brand-secondary">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-brand-dark/70">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-20 bg-white" id="apply">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                Apply for Referral Partnership
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
                Fill out the form below to join our referral program. You'll hear back from us within 1-2 business days with your referral materials.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              {submitStatus === 'success' && referralData ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                    Application Submitted Successfully!
                  </h3>
                  <p className="text-brand-dark/70 mb-6">
                    {submitMessage}
                  </p>
                  
                  <div className="bg-brand-light/50 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-brand-dark mb-4">Your Temporary Referral Code:</h4>
                    <div className="bg-white p-4 rounded-lg border-2 border-dashed border-brand-primary/30 mb-4">
                      <code className="text-lg font-mono text-brand-primary font-bold">
                        {referralData.code}
                      </code>
                    </div>
                    <p className="text-sm text-brand-dark/60">
                      This code will be activated once your application is approved. Check your email for complete details.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitStatus('idle');
                      setReferralData(null);
                    }}
                    className="btn btn-primary"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
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
                        Company/Organization
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 w-5 h-5 text-brand-dark/40" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="form-input pl-11"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Referral Type */}
                  <div>
                    <label htmlFor="referralType" className="block text-sm font-semibold text-brand-dark mb-2">
                      Referral Partnership Type *
                    </label>
                    <select
                      id="referralType"
                      name="referralType"
                      value={formData.referralType}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    >
                      <option value="">Select partnership type</option>
                      {referralTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Current Client Checkbox */}
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="currentClient"
                      name="currentClient"
                      checked={formData.currentClient}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
                    />
                    <label htmlFor="currentClient" className="text-brand-dark">
                      I am currently a True Rank Digital client
                    </label>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-brand-dark mb-2">
                      Additional Information
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-brand-dark/40" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="form-input pl-11 resize-none"
                        placeholder="Tell us about your referral network, target audience, or any questions you have..."
                      />
                    </div>
                  </div>

                  {/* Terms & Conditions */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-yellow-800">
                        <h4 className="font-semibold mb-2">Terms & Conditions:</h4>
                        <ul className="space-y-1 list-disc list-inside">
                          <li>Referral bonuses are paid after the referred client has been active for a minimum of 30 days</li>
                          <li>Client must complete their first invoice payment to qualify for bonus</li>
                          <li>All referrals must be tracked through your unique referral code</li>
                          <li>Bonuses are typically processed within 7-14 days after qualification period</li>
                          <li>Self-referrals and duplicate referrals are not eligible for bonuses</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        <p className="text-red-800">{submitMessage}</p>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="text-center pt-4">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`
                        btn btn-primary text-lg px-12 py-4
                        ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
                      `}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Submitting Application...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Share2 className="w-5 h-5" />
                          <span>Apply for Referral Program</span>
                        </div>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-brand-light/20 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: "How much can I earn with the referral program?",
                  answer: "You earn $500 for each successful referral that becomes a client and remains active for at least 30 days. There are no limits on how many referrals you can make, so your earning potential is unlimited."
                },
                {
                  question: "When do I get paid?",
                  answer: "Referral bonuses are paid after the referred client has been active for a minimum of 30 days and has paid their first invoice. Payments are typically processed within 7-14 days after the qualification period."
                },
                {
                  question: "What materials will I receive?",
                  answer: "Once approved, you'll receive a complete referral kit including your unique referral code, custom QR codes for easy sharing, marketing materials, email templates, and access to a tracking dashboard."
                },
                {
                  question: "Do I need to be a current client to join?",
                  answer: "No, you don't need to be a current client to join our referral program. We welcome referral partners from all backgrounds including business professionals, agency partners, and industry contacts."
                },
                {
                  question: "How are referrals tracked?",
                  answer: "All referrals are tracked through your unique referral code. When someone contacts us using your code or through your referral link, they're automatically attributed to your account for commission tracking."
                },
                {
                  question: "What if my referral doesn't mention my code?",
                  answer: "It's important that referrals use your unique code when contacting us. We recommend sharing your referral link or QR code to ensure proper tracking. Referrals without proper attribution cannot be credited."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6"
                >
                  <h3 className="text-lg font-heading font-bold text-brand-dark mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-brand-dark/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
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
                Ready to Start Earning $500 Per Referral?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join hundreds of successful referral partners who are earning substantial rewards by sharing our proven SEO solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.a
                  href="#apply"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-white px-8 py-4 text-lg font-semibold"
                >
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>Apply Now</span>
                  </div>
                </motion.a>
                
                <motion.a
                  href="mailto:jon@truerankdigital.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-outline btn-white px-8 py-4 text-lg font-semibold"
                >
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>Ask Questions</span>
                  </div>
                </motion.a>
              </div>

              <div className="mt-8 flex items-center justify-center space-x-8 text-white/80">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">Secure & Trusted</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span className="text-sm">Quick Approval</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm">High Success Rate</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
