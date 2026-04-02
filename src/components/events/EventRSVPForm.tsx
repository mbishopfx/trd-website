'use client';

import { useState } from 'react';
import { Gift, LoaderCircle, Sparkles } from 'lucide-react';

type EventRSVPFormProps = {
  eventTitle: string;
  eventSlug: string;
  giveawayTitle: string;
  legalLine: string;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
};

export default function EventRSVPForm({
  eventTitle,
  eventSlug,
  giveawayTitle,
  legalLine,
}: EventRSVPFormProps) {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const updateField = (field: keyof FormState, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<FormState> = {};

    if (!formData.name.trim()) {
      nextErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address';
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s()+-]+$/.test(formData.phone)) {
      nextErrors.phone = 'Enter a valid phone number';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus('submitting');
    setMessage('');

    try {
      const response = await fetch('/api/events/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          eventSlug,
          eventTitle,
          raffleEntry: true,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus('error');
        setMessage(result.error || 'Failed to submit RSVP. Please try again.');
        return;
      }

      setStatus('success');
      setMessage(result.message || 'Your RSVP was received.');
      setFormData(initialState);
    } catch (error) {
      console.error('RSVP submission failed', error);
      setStatus('error');
      setMessage('Failed to submit RSVP. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-[2rem] border border-[#6cf7ca]/30 bg-[linear-gradient(180deg,rgba(18,79,55,0.42),rgba(9,17,24,0.96))] p-7 text-white shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.24em] text-[#9bf8d9]">
          <Sparkles className="h-4 w-4" />
          RSVP locked in
        </div>
        <h3 className="mt-4 font-heading text-3xl font-bold tracking-tight">
          You&apos;re on the list.
        </h3>
        <p className="mt-4 text-base leading-7 text-white/78">
          {message} Your free Mac Mini raffle entry was also recorded. We will follow up with
          event details if needed.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus('idle');
            setMessage('');
          }}
          className="mt-6 inline-flex items-center justify-center rounded-full border border-white/16 px-6 py-3 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:border-brand-cyan/45 hover:text-brand-cyan"
        >
          Submit another RSVP
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(5,10,14,0.92))] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.24em] text-[#ffcf99]">
        <Gift className="h-4 w-4" />
        {giveawayTitle}
      </div>
      <h3 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white">
        RSVP in under 20 seconds.
      </h3>
      <p className="mt-3 text-base leading-7 text-white/72">
        Save your seat, enter the free Mac Mini raffle, and get into the room before the market
        shift gets more expensive.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="mb-2 block text-sm font-semibold text-white">
            Name <span className="text-[#ff9d9d]">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => updateField('name', e.target.value)}
            placeholder="Your full name"
            className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5 text-white placeholder:text-white/28 focus:border-brand-cyan/60 focus:outline-none"
          />
          {errors.name ? <p className="mt-2 text-sm text-[#ff9d9d]">{errors.name}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-white">
            Email <span className="text-[#ff9d9d]">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => updateField('email', e.target.value)}
            placeholder="you@company.com"
            className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5 text-white placeholder:text-white/28 focus:border-brand-cyan/60 focus:outline-none"
          />
          {errors.email ? <p className="mt-2 text-sm text-[#ff9d9d]">{errors.email}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-white">
            Phone <span className="text-[#ff9d9d]">*</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            placeholder="(555) 555-5555"
            className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5 text-white placeholder:text-white/28 focus:border-brand-cyan/60 focus:outline-none"
          />
          {errors.phone ? <p className="mt-2 text-sm text-[#ff9d9d]">{errors.phone}</p> : null}
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-cyan px-6 py-4 text-sm font-black uppercase tracking-[0.22em] text-brand-obsidian shadow-[0_0_30px_rgba(0,245,255,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(0,245,255,0.38)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'submitting' ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              Sending RSVP
            </>
          ) : (
            <>
              <Gift className="h-4 w-4" />
              RSVP + Enter Free Mac Mini Raffle
            </>
          )}
        </button>

        <p className="text-xs uppercase tracking-[0.18em] text-white/48">{legalLine}</p>
        {status === 'error' ? <p className="text-sm text-[#ff9d9d]">{message}</p> : null}
      </form>
    </div>
  );
}
