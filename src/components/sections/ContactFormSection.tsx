'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Building, MessageSquare, Rocket, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const serviceOptions = [
    'Local SEO & Google Maps',
    'Google Business Profile Management', 
    'AI-Enhanced SEO',
    'Website Development',
    'Ecommerce Optimization',
    'Free Custom Playbook',
    'General Inquiry'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
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
          subject: `Contact Form - ${formData.service || 'General Inquiry'}`
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
            setSubmitMessage('Thank you! Your message has been sent successfully. We&apos;ll get back to you within 24 hours.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
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
    <section className="py-20 bg-gradient-to-b from-brand-light/20 via-white to-brand-light/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-primary/10 rounded-full mb-6">
            <Send className="w-5 h-5 text-brand-primary" />
            <span className="text-brand-primary font-semibold text-sm">Send Us a Message</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
            Ready to Get Started?
          </h2>
          
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours with a customized strategy for your business.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card p-8 lg:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="flex items-center space-x-2 text-brand-dark font-semibold mb-2">
                  <User className="w-4 h-4 text-brand-primary" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-brand-dark/20 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-500"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="flex items-center space-x-2 text-brand-dark font-semibold mb-2">
                  <Mail className="w-4 h-4 text-brand-primary" />
                  <span>Email Address *</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-brand-dark/20 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-500"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Company and Phone Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="flex items-center space-x-2 text-brand-dark font-semibold mb-2">
                  <Building className="w-4 h-4 text-brand-primary" />
                  <span>Company Name</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-brand-dark/20 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-500"
                  placeholder="Your business name"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="flex items-center space-x-2 text-brand-dark font-semibold mb-2">
                  <svg className="w-4 h-4 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Phone Number</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-brand-dark/20 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-500"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            {/* Service Interest */}
            <div>
              <label htmlFor="service" className="flex items-center space-x-2 text-brand-dark font-semibold mb-2">
                <Rocket className="w-4 h-4 text-brand-primary" />
                <span>Service Interest</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-brand-dark/20 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-500"
              >
                <option value="">Select a service</option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="flex items-center space-x-2 text-brand-dark font-semibold mb-2">
                <MessageSquare className="w-4 h-4 text-brand-primary" />
                <span>Message *</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-brand-dark/20 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-500 resize-none"
                placeholder="Tell us about your business goals and how we can help you achieve them..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center space-x-3 px-8 py-4 font-semibold text-lg rounded-full transition-all duration-300 group ${
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
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
              
              {submitStatus === 'idle' && (
                <p className="text-brand-dark/60 text-sm mt-4">
                      We&apos;ll respond within 24 hours with a customized strategy for your business.
                </p>
              )}
            </div>

            {/* Status Messages */}
            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 p-4 rounded-xl flex items-center space-x-3 ${
                  submitStatus === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-800' 
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}
              >
                {submitStatus === 'success' ? (
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
                <p className="text-sm">{submitMessage}</p>
              </motion.div>
            )}

          </form>
        </motion.div>

        {/* Alternative Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-brand-dark/70 mb-6">
                    Prefer to talk directly? We&apos;re here to help!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a
              href="tel:+17324750139"
              className="inline-flex items-center space-x-2 px-6 py-3 glass-button bg-brand-primary/10 hover:bg-brand-primary hover:text-white text-brand-primary font-semibold rounded-full transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Now: (732) 475-0139</span>
            </motion.a>
            
            <motion.a
              href="mailto:jon@truerankdigital.com"
              className="inline-flex items-center space-x-2 px-6 py-3 glass-button bg-brand-secondary/10 hover:bg-brand-secondary hover:text-white text-brand-secondary font-semibold rounded-full transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span>Email Us Directly</span>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
