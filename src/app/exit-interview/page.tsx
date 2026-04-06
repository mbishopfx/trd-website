'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight, 
  Star,
  Users,
  TrendingDown,
  MessageSquare,
  ClipboardList
} from 'lucide-react';

// Form questions and options based on the template
const REASONS = [
  'Lack of ROI / Poor campaign performance',
  'Budget constraints / Cost of services',
  'Taking marketing in-house',
  'Moving to a competitor/another agency',
  'Poor communication or account management',
  'Change in business direction/strategy',
  'Other'
];

const SATISFACTION_LEVELS = [
  'Very Satisfied',
  'Satisfied',
  'Neutral',
  'Dissatisfied',
  'Very Dissatisfied'
];

const SEASONALITY_OPTIONS = [
  'Yes, completely',
  'Somewhat',
  'No, it felt out of touch with our seasonality'
];

export default function ExitInterviewPage() {
  const [formData, setFormData] = useState({
    clientName: '',
    completedBy: '',
    accountManager: '',
    reasons: [] as string[],
    otherReason: '',
    eventTurningPoint: '',
    volumeSatisfaction: '',
    qualitySatisfaction: '',
    seasonalityAlignment: '',
    seasonalityComments: '',
    ratings: {
      responsiveness: 0,
      reporting: 0,
      proactiveness: 0,
      transparency: 0
    },
    clearUnderstanding: '',
    hopesForFuture: '',
    differentActions: '',
    recommendationLikelihood: 5,
    additionalFeedback: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleReasonToggle = (reason: string) => {
    setFormData(prev => ({
      ...prev,
      reasons: prev.reasons.includes(reason)
        ? prev.reasons.filter(r => r !== reason)
        : [...prev.reasons, reason]
    }));
  };

  const handleRatingChange = (key: keyof typeof formData.ratings, value: number) => {
    setFormData(prev => ({
      ...prev,
      ratings: {
        ...prev.ratings,
        [key]: value
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Process "Other" reason
    const finalReasons = [...formData.reasons];
    if (formData.otherReason) {
      finalReasons.push(`Other: ${formData.otherReason}`);
    }

    try {
      const response = await fetch('/api/exit-interview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, reasons: finalReasons })
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setStatus('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage('There was an error submitting your feedback. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-obsidian text-foreground flex items-center justify-center p-6 bg-grid">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-blue max-w-2xl w-full p-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neon-cyan/10 border-2 border-neon-cyan mb-8">
            <CheckCircle2 className="w-10 h-10 text-neon-cyan" />
          </div>
          <h1 className="text-4xl font-bold text-glow-cyan mb-4">Feedback Received</h1>
          <p className="text-brand-dark/70 text-lg mb-8">
            Thank you for your time and for trusting True Rank Digital with your marketing. 
            We wish you continued success and growth in the future.
          </p>
          <button 
            onClick={() => window.location.href = 'https://truerankdigital.com'}
            className="glass-button-cyan"
          >
            Return to Homepage
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-obsidian text-foreground bg-grid py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold text-glow-cyan mb-4 tracking-tight"
          >
            Client Exit Interview
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-brand-dark/60 text-lg"
          >
            To help us improve, we'd appreciate your honest feedback on our partnership.
          </motion.p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Metadata Section */}
          <section className="glass p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-neon-cyan uppercase tracking-wider">Client Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:border-neon-cyan outline-none transition-colors"
                  placeholder="Company Name"
                  value={formData.clientName}
                  onChange={e => setFormData({...formData, clientName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-neon-cyan uppercase tracking-wider">Completed By</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:border-neon-cyan outline-none transition-colors"
                  placeholder="Your Name"
                  value={formData.completedBy}
                  onChange={e => setFormData({...formData, completedBy: e.target.value})}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-neon-cyan uppercase tracking-wider">TRD Account Manager</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:border-neon-cyan outline-none transition-colors"
                  placeholder="Account Manager Name"
                  value={formData.accountManager}
                  onChange={e => setFormData({...formData, accountManager: e.target.value})}
                />
              </div>
            </div>
          </section>

          {/* Section 1: Reasons */}
          <section className="glass p-8">
            <h2 className="text-2xl font-bold text-glow-blue flex items-center gap-3 mb-8">
              <TrendingDown className="text-royal-blue" />
              1. Primary Reason for Departure
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-brand-dark/70">What are the main factors behind your decision? (Check all that apply)</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {REASONS.map(reason => (
                  <label key={reason} className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors group">
                    <input 
                      type="checkbox" 
                      className="w-5 h-5 accent-neon-cyan"
                      checked={formData.reasons.includes(reason)}
                      onChange={() => handleReasonToggle(reason)}
                    />
                    <span className="text-brand-dark/80 group-hover:text-white transition-colors">{reason}</span>
                  </label>
                ))}
              </div>
              <AnimatePresence>
                {formData.reasons.includes('Other') && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4"
                  >
                    <input 
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:border-neon-cyan outline-none transition-colors"
                      placeholder="Please specify other reason..."
                      value={formData.otherReason}
                      onChange={e => setFormData({...formData, otherReason: e.target.value})}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="space-y-4">
              <label className="text-brand-dark/70 block">Was there a specific event, campaign, or turning point that influenced this?</label>
              <textarea 
                className="w-full h-32 bg-white/5 border border-white/10 rounded-lg p-4 focus:border-neon-cyan outline-none transition-colors resize-none"
                placeholder="Share your thoughts here..."
                value={formData.eventTurningPoint}
                onChange={e => setFormData({...formData, eventTurningPoint: e.target.value})}
              />
            </div>
          </section>

          {/* Section 2: Performance */}
          <section className="glass p-8">
            <h2 className="text-2xl font-bold text-glow-cyan flex items-center gap-3 mb-8">
              <ClipboardList className="text-neon-cyan" />
              2. Performance & Strategy Evaluation
            </h2>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <label className="text-brand-dark/70 block">How satisfied were you with the volume of leads generated?</label>
                <div className="flex flex-wrap gap-3">
                  {SATISFACTION_LEVELS.map(level => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setFormData({...formData, volumeSatisfaction: level})}
                      className={`px-4 py-2 rounded-full border text-sm transition-all ${
                        formData.volumeSatisfaction === level 
                        ? 'bg-neon-cyan/20 border-neon-cyan text-neon-cyan shadow-[0_0_15px_rgba(0,245,255,0.3)]' 
                        : 'bg-white/5 border-white/10 text-brand-dark/60 hover:border-white/30'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-brand-dark/70 block">How satisfied were you with the quality of leads generated?</label>
                <div className="flex flex-wrap gap-3">
                  {SATISFACTION_LEVELS.map(level => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setFormData({...formData, qualitySatisfaction: level})}
                      className={`px-4 py-2 rounded-full border text-sm transition-all ${
                        formData.qualitySatisfaction === level 
                        ? 'bg-royal-blue/20 border-royal-blue text-royal-blue shadow-[0_0_15px_rgba(79,127,255,0.3)]' 
                        : 'bg-white/5 border-white/10 text-brand-dark/60 hover:border-white/30'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-brand-dark/70 block">Did our marketing strategy align with your business's seasonal demands?</label>
                <div className="flex flex-wrap gap-3">
                  {SEASONALITY_OPTIONS.map(opt => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setFormData({...formData, seasonalityAlignment: opt})}
                      className={`px-4 py-2 rounded-full border text-sm transition-all ${
                        formData.seasonalityAlignment === opt 
                        ? 'bg-neon-cyan/20 border-neon-cyan text-neon-cyan shadow-[0_0_15px_rgba(0,245,255,0.3)]' 
                        : 'bg-white/5 border-white/10 text-brand-dark/60 hover:border-white/30'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-brand-dark/70 block">Comments on seasonality:</label>
                <textarea 
                  className="w-full h-24 bg-white/5 border border-white/10 rounded-lg p-4 focus:border-neon-cyan outline-none transition-colors resize-none"
                  value={formData.seasonalityComments}
                  onChange={e => setFormData({...formData, seasonalityComments: e.target.value})}
                />
              </div>
            </div>
          </section>

          {/* Section 3: Communication */}
          <section className="glass p-8">
            <h2 className="text-2xl font-bold text-glow-blue flex items-center gap-3 mb-8">
              <Users className="text-royal-blue" />
              3. Communication & Account Management
            </h2>
            
            <div className="space-y-8">
              <p className="text-brand-dark/70">Please rate the following (1 being poor, 5 being excellent):</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {[
                  { label: 'Responsiveness of Account Manager', key: 'responsiveness' },
                  { label: 'Clarity of Monthly Reporting', key: 'reporting' },
                  { label: 'Proactiveness in Strategy', key: 'proactiveness' },
                  { label: 'Transparency on Challenges', key: 'transparency' }
                ].map(item => (
                  <div key={item.key} className="space-y-3">
                    <label className="text-sm font-semibold text-brand-dark/80">{item.label}</label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map(star => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingChange(item.key as any, star)}
                          className="transition-transform hover:scale-110 active:scale-95"
                        >
                          <Star 
                            className={`w-8 h-8 ${
                              (formData.ratings as any)[item.key] >= star 
                                ? 'fill-neon-cyan text-neon-cyan filter drop-shadow-[0_0_5px_rgba(0,245,255,0.5)]' 
                                : 'text-white/10 fill-none'
                            }`} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <label className="text-brand-dark/70 block">Did you have a clear understanding of what TRD was working on month-to-month?</label>
                <textarea 
                  className="w-full h-24 bg-white/5 border border-white/10 rounded-lg p-4 focus:border-neon-cyan outline-none transition-colors resize-none"
                  value={formData.clearUnderstanding}
                  onChange={e => setFormData({...formData, clearUnderstanding: e.target.value})}
                />
              </div>
            </div>
          </section>

          {/* Section 4: Looking Forward */}
          <section className="glass p-8">
            <h2 className="text-2xl font-bold text-glow-cyan flex items-center gap-3 mb-8">
              <MessageSquare className="text-neon-cyan" />
              4. Looking Forward & Final Thoughts
            </h2>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <label className="text-brand-dark/70 block">What are you hoping for from your new provider (or in-house) that we didn't provide?</label>
                <textarea 
                  className="w-full h-24 bg-white/5 border border-white/10 rounded-lg p-4 focus:border-neon-cyan outline-none transition-colors resize-none"
                  value={formData.hopesForFuture}
                  onChange={e => setFormData({...formData, hopesForFuture: e.target.value})}
                />
              </div>

              <div className="space-y-4">
                <label className="text-brand-dark/70 block">What is one thing we could have done differently to keep you as a client?</label>
                <textarea 
                  className="w-full h-24 bg-white/5 border border-white/10 rounded-lg p-4 focus:border-neon-cyan outline-none transition-colors resize-none"
                  value={formData.differentActions}
                  onChange={e => setFormData({...formData, differentActions: e.target.value})}
                />
              </div>

              <div className="space-y-4">
                <label className="text-brand-dark/70 block">How likely are you to recommend TRD to a colleague? (1-10)</label>
                <div className="flex flex-col gap-4">
                  <input 
                    type="range" 
                    min="1" 
                    max="10" 
                    step="1"
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-neon-cyan"
                    value={formData.recommendationLikelihood}
                    onChange={e => setFormData({...formData, recommendationLikelihood: parseInt(e.target.value)})}
                  />
                  <div className="flex justify-between text-xs text-brand-dark/40 font-mono">
                    <span>1 (Unlikely)</span>
                    <span className="text-lg font-bold text-neon-cyan">{formData.recommendationLikelihood}</span>
                    <span>10 (Very Likely)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-brand-dark/70 block">Additional feedback for our leadership team?</label>
                <textarea 
                  className="w-full h-32 bg-white/5 border border-white/10 rounded-lg p-4 focus:border-neon-cyan outline-none transition-colors resize-none"
                  value={formData.additionalFeedback}
                  onChange={e => setFormData({...formData, additionalFeedback: e.target.value})}
                />
              </div>
            </div>
          </section>

          {errorMessage && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-center gap-3 text-red-400"
            >
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p>{errorMessage}</p>
            </motion.div>
          )}

          <div className="flex justify-center pt-8">
            <button 
              type="submit"
              disabled={status === 'submitting'}
              className="glass-button-cyan text-xl group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="flex items-center gap-3 relative z-10">
                {status === 'submitting' ? 'Transmitting...' : 'Submit Final Feedback'}
                <Send className={`w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${status === 'submitting' ? 'animate-pulse' : ''}`} />
              </span>
            </button>
          </div>
        </form>

        <footer className="mt-20 text-center pb-20">
          <p className="text-brand-dark/40 text-sm italic">
            Thank you for your partnership and for helping us grow.
          </p>
        </footer>
      </div>
    </div>
  );
}
