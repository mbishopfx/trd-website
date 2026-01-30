'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  CheckCircle, 
  AlertCircle,
  Send,
  ShieldCheck
} from 'lucide-react';

interface LeadCaptureFormProps {
  title?: string;
  description?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  consentTransactional: boolean;
  consentMarketing: boolean;
}

export default function LeadCaptureForm({ 
  title = "Get Started with True Rank",
  description = "Complete the form below to receive expert guidance on your digital strategy."
}: LeadCaptureFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    consentTransactional: false,
    consentMarketing: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation check
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.consentTransactional) {
      setSubmitStatus('error');
      setSubmitMessage('Please fill in all required fields and accept the transactional message consent.');
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
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: `Lead Capture Form Submission. 
Transactional Consent: ${formData.consentTransactional ? 'YES' : 'NO'}
Marketing Consent: ${formData.consentMarketing ? 'YES' : 'NO'}`,
          subject: `A2P 10DLC Lead Captured - ${formData.firstName} ${formData.lastName}`,
          consentTransactional: formData.consentTransactional,
          consentMarketing: formData.consentMarketing
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your request has been received. A specialist will reach out to you shortly.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          consentTransactional: false,
          consentMarketing: false
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.error || 'Something went wrong. Please try calling us at (732) 475-0139.');
      }
    } catch (error) {
      console.error('Lead form error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Failed to send request. Please call us directly at (732) 475-0139.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const businessName = "True Rank Digital";

  return (
    <div className="glass-card p-8 max-w-2xl mx-auto shadow-2xl border border-white/10 bg-black/40 backdrop-blur-xl rounded-3xl">
      <div className="text-center mb-8">
        <h3 className="text-2xl lg:text-4xl font-heading font-bold text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-300">
          {description}
        </p>
      </div>

      {submitStatus === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          <h4 className="text-2xl font-heading font-bold text-white mb-3">
            Success!
          </h4>
          <p className="text-gray-300 mb-8">
            {submitMessage}
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="px-8 py-3 bg-brand-primary text-white font-bold rounded-full hover:bg-brand-primary/90 transition-all"
          >
            Submit Another Request
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Fields */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-gray-300 mb-2">
                First Name <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
                  placeholder="Jane"
                />
              </div>
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-gray-300 mb-2">
                Last Name <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                Phone Number <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
                  placeholder="(555) 000-0000"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                Email Address <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
                  placeholder="jane@example.com"
                />
              </div>
            </div>
          </div>

          {/* Compliance Checkboxes */}
          <div className="pt-4 space-y-4">
            <label className="flex items-start gap-3 group cursor-pointer">
              <div className="relative flex items-center h-5 mt-1">
                <input
                  type="checkbox"
                  id="consentTransactional"
                  name="consentTransactional"
                  checked={formData.consentTransactional}
                  onChange={handleInputChange}
                  required
                  className="w-5 h-5 bg-white/5 border border-white/20 rounded-md text-brand-primary focus:ring-brand-primary cursor-pointer transition-all"
                />
              </div>
              <span className="text-xs text-gray-400 leading-tight select-none">
                I consent to receive transactional messages from <span className="text-white font-medium">{businessName}</span> at the phone number provided. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out. <span className="text-red-400">*</span>
              </span>
            </label>

            <label className="flex items-start gap-3 group cursor-pointer">
              <div className="relative flex items-center h-5 mt-1">
                <input
                  type="checkbox"
                  id="consentMarketing"
                  name="consentMarketing"
                  checked={formData.consentMarketing}
                  onChange={handleInputChange}
                  className="w-5 h-5 bg-white/5 border border-white/20 rounded-md text-brand-primary focus:ring-brand-primary cursor-pointer transition-all"
                />
              </div>
              <span className="text-xs text-gray-400 leading-tight select-none">
                I consent to receive marketing and promotional messages from <span className="text-white font-medium">{businessName}</span> at the phone number provided. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
              </span>
            </label>
          </div>

          {/* Status Message */}
          {submitStatus === 'error' && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
              <p className="text-red-200 text-sm">{submitMessage}</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-4">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`
                w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-bold
                py-4 text-lg rounded-2xl shadow-xl transition-all duration-300 flex items-center justify-center gap-2
                ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Submit Request</span>
                </>
              )}
            </motion.button>
          </div>

          {/* Footer Info */}
          <div className="text-center pt-2 space-y-2">
            <p className="text-[10px] text-gray-500 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3 text-brand-primary" /> Secure A2P 10DLC Compliant Submission
            </p>
            <div className="flex items-center justify-center gap-4 text-[10px]">
              <a href="/privacy-policy" className="text-gray-400 hover:text-brand-primary transition-colors">Privacy Policy</a>
              <span className="text-gray-600">|</span>
              <a href="/terms-of-service" className="text-gray-400 hover:text-brand-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
