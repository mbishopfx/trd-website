'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  Building, 
  MessageSquare, 
  CheckCircle, 
  AlertCircle,
  Send
} from 'lucide-react';

interface ConsultationFormProps {
  title?: string;
  description?: string;
  subjectPrefix?: string;
  showTitle?: boolean;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export default function ConsultationForm({ 
  title = "Book Your Free Consultation",
  description = "Schedule a strategy session with Jon Korkowski to map out your 90-day domination plan.",
  subjectPrefix = "Business Starter Pack",
  showTitle = true
}: ConsultationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
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
          subject: `${subjectPrefix} Consultation Request - ${formData.name}`
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! We\'ll contact you within 24 hours to schedule your consultation with Jon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.error || 'Something went wrong. Please try calling us at (732) 475-0139.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Failed to send request. Please call us directly at (732) 475-0139.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-card p-8">
      {showTitle && (
        <div className="text-center mb-8">
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-brand-dark mb-3">
            {title}
          </h3>
          <p className="text-brand-dark/70">
            {description}
          </p>
        </div>
      )}

      {submitStatus === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h4 className="text-xl font-heading font-bold text-brand-dark mb-3">
            Request Submitted Successfully!
          </h4>
          <p className="text-brand-dark/70 mb-6">
            {submitMessage}
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="btn btn-primary"
          >
            Submit Another Request
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email */}
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
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
          </div>

          {/* Phone and Company */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-brand-dark mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-5 h-5 text-brand-dark/40" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="form-input pl-11 text-gray-900 placeholder-gray-500"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-brand-dark mb-2">
                Company/LLC Name
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-3 w-5 h-5 text-brand-dark/40" />
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="form-input pl-11 text-gray-900 placeholder-gray-500"
                  placeholder="Your company name"
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-brand-dark mb-2">
              Tell Us About Your Business Goals
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-brand-dark/40" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="form-input pl-11 text-gray-900 placeholder-gray-500 resize-none"
                placeholder="What are your biggest challenges and goals for your new business?"
              />
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
                bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold
                px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl
                transition-all duration-300 transform hover:scale-105
                ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Sending Request...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Send className="w-5 h-5" />
                  <span>Request Free Consultation</span>
                </div>
              )}
            </motion.button>
            
            <p className="text-sm text-brand-dark/60 mt-4">
              Or call us directly: <a href="tel:7324750139" className="text-brand-primary hover:underline font-semibold">(732) 475-0139</a>
            </p>
          </div>
        </form>
      )}
    </div>
  );
}

