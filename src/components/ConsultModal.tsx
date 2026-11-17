import React, { useEffect, useState } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

interface ConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormState {
  name: string;
  email: string;
  company: string;
  projectNotes: string;
  preferredSlot: string;
}

const TIME_SLOTS = [
  'Tomorrow · 10:00 AM AEST',
  'Tomorrow · 2:00 PM AEST',
  'Thursday · 11:30 AM AEST',
  'Friday · 9:30 AM AEST',
];

export function ConsultModal({ isOpen, onClose }: ConsultModalProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    projectNotes: '',
    preferredSlot: TIME_SLOTS[0],
  });
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();

    if (!trimmedName) {
      setError('Please enter your name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError('Please enter a valid work email address.');
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setError(null);
    setForm({
      name: '',
      email: '',
      company: '',
      projectNotes: '',
      preferredSlot: TIME_SLOTS[0],
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consult-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200/80 text-slate-900">
        <button
          type="button"
          onClick={handleResetAndClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-4 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              <Check className="h-6 w-6" />
            </div>
            <h2 id="consult-modal-title" className="text-2xl font-bold tracking-tight text-slate-900">
              Discovery call requested
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              Thanks, {form.name.trim()}. We have sent a calendar invite for{' '}
              <span className="font-semibold text-slate-900">{form.preferredSlot}</span> to{' '}
              <span className="font-semibold text-slate-900">{form.email.trim()}</span>.
            </p>
            <button
              type="button"
              onClick={handleResetAndClose}
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#0F172A] px-6 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 whitespace-nowrap shrink-0"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <p className="text-xs font-medium tracking-wider uppercase text-slate-500">
              30-minute discovery call · No obligation
            </p>
            <h2 id="consult-modal-title" className="mt-1.5 text-2xl font-bold tracking-tight text-slate-900">
              Book a free consult
            </h2>
            <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
              Tell us what spreadsheets or manual tools you want to replace and we will prepare a fixed-price quote.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="consult-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Full name
                  </label>
                  <input
                    id="consult-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Alex Mercer"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>
                <div>
                  <label htmlFor="consult-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Work email
                  </label>
                  <input
                    id="consult-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="alex@company.com.au"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="consult-company" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Business name
                </label>
                <input
                  id="consult-company"
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
                  placeholder="Harbour Logistics Pty Ltd"
                  className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>

              <div>
                <span className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Preferred time (Sydney / AEST)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = form.preferredSlot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, preferredSlot: slot }))}
                        className={`rounded-lg border px-3 py-2 text-left text-xs font-medium transition-colors whitespace-nowrap truncate ${
                          isSelected
                            ? 'border-slate-900 bg-slate-900 text-white'
                            : 'border-slate-200 bg-slate-50/70 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label htmlFor="consult-notes" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  What are you looking to build?
                </label>
                <textarea
                  id="consult-notes"
                  rows={3}
                  value={form.projectNotes}
                  onChange={(e) => setForm((prev) => ({ ...prev, projectNotes: e.target.value }))}
                  placeholder="Briefly describe your workflow, team size, or current tools..."
                  className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 resize-none"
                />
              </div>

              {error && (
                <p role="alert" className="text-xs font-medium text-rose-600">
                  {error}
                </p>
              )}

              <div className="pt-1 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0F172A] px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 whitespace-nowrap shrink-0"
                >
                  <span>Confirm discovery call</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
