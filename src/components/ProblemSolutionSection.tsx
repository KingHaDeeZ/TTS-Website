import React, { useState } from 'react';
import { ArrowRight, Check, Minus, X } from 'lucide-react';

interface ProblemSolutionSectionProps {
  onBookConsult: () => void;
}

type ComparisonFilter = 'all' | 'cost-speed' | 'quality-support';

interface ComparisonPoint {
  id: string;
  group: 'cost-speed' | 'quality-support';
  dimension: string;
  agencyTitle: string;
  agencyDetail: string;
  diyTitle: string;
  diyDetail: string;
  studioTitle: string;
  studioDetail: string;
}

const COMPARISON_POINTS: ComparisonPoint[] = [
  {
    id: 'pricing',
    group: 'cost-speed',
    dimension: 'Pricing',
    agencyTitle: 'Bloated retainers & add-ons',
    agencyDetail:
      'High upfront quotes that fund account managers and overheads instead of actual build hours.',
    diyTitle: 'Hidden time & plugin fees',
    diyDetail:
      'Low monthly tiers quickly add up once you pay for templates, forms, SEO tools, and booking plugins.',
    studioTitle: 'Clear, fixed-price quotes',
    studioDetail:
      'One transparent project scope agreed upfront with zero hourly billing surprises or surprise retainers.',
  },
  {
    id: 'timeline',
    group: 'cost-speed',
    dimension: 'Timeline',
    agencyTitle: 'Months of meetings first',
    agencyDetail:
      'Multi-week discovery workshops and sign-off chains before a single live page exists.',
    diyTitle: 'Endless weekend rework',
    diyDetail:
      'Weeks spent wrestling grid spacing, cropping photos, and fixing broken mobile layouts yourself.',
    studioTitle: 'Launch in 2–3 weeks',
    studioDetail:
      'Working clickable preview within 7 days and a polished, conversion-ready launch in weeks.',
  },
  {
    id: 'performance',
    group: 'quality-support',
    dimension: 'Design & Speed',
    agencyTitle: 'Outsourced theme templates',
    agencyDetail:
      'Often handed off to junior contractors using heavy pre-built themes once the contract closes.',
    diyTitle: 'Generic, slow pages',
    diyDetail:
      'Looks identical to competitors and loads bloated drag-and-drop scripts that hurt mobile conversions.',
    studioTitle: 'Custom-built for conversions',
    studioDetail:
      'Hand-crafted layout, fast loading times, and clear calls-to-action built around your customers.',
  },
  {
    id: 'support',
    group: 'quality-support',
    dimension: 'Support',
    agencyTitle: 'Ticket queues & hourly fees',
    agencyDetail:
      'Even minor copy updates or service changes wait in a queue and trigger minimum billing blocks.',
    diyTitle: 'You troubleshoot alone',
    diyDetail:
      'When an update breaks a contact form or mobile header, you are stuck reading help forums.',
    studioTitle: 'Direct local engineering',
    studioDetail:
      'Talk straight to the builders in Australian business hours for quick edits, patches, and updates.',
  },
  {
    id: 'ownership',
    group: 'quality-support',
    dimension: 'Ownership',
    agencyTitle: 'Proprietary lock-in',
    agencyDetail:
      'Restrictive hosting contracts and bundled licenses that make moving providers painful.',
    diyTitle: 'Platform-bound site',
    diyDetail:
      'Your design is trapped inside one builder — if pricing doubles, you rebuild from scratch.',
    studioTitle: '100% yours from day one',
    studioDetail:
      'Full ownership of your domain, code, and content with portable modern hosting and zero lock-in.',
  },
];

const GUARANTEES = [
  { label: 'No lock-in', detail: 'Full code & domain ownership' },
  { label: 'Upfront preview', detail: 'Review live before final sign-off' },
  { label: 'Local support', detail: 'Direct AEST communication' },
  { label: 'Built to convert', detail: 'Mobile-first speed & clear CTAs' },
];

export function ProblemSolutionSection({ onBookConsult }: ProblemSolutionSectionProps) {
  const [filter, setFilter] = useState<ComparisonFilter>('all');
  const [focusedRowId, setFocusedRowId] = useState<string | null>(null);

  const visiblePoints =
    filter === 'all'
      ? COMPARISON_POINTS
      : COMPARISON_POINTS.filter((point) => point.group === filter);

  return (
    <section
      id="why-choose-us"
      aria-label="Problem versus solution comparison"
      className="w-full bg-[#F8FAFC] py-24 sm:py-32 px-6 sm:px-10 lg:px-12 border-t border-slate-200/80"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header + Segmented Focus Control */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.06em] text-violet-700">
              A Better Way to Launch
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-[-0.03em] leading-[1.08] text-[#0F172A] [text-wrap:balance]">
              Agency craft without the $20k retainer or DIY weekends
            </h2>
            <p className="mt-4 text-base sm:text-[17px] leading-[1.6] text-slate-600">
              Small businesses shouldn&apos;t have to choose between overpriced agencies and
              frustrating drag-and-drop templates. Compare how a lean, custom studio stacks up.
            </p>
          </div>

          <div
            className="inline-flex items-center gap-1 self-start rounded-lg bg-slate-200/70 p-1 shrink-0"
            role="tablist"
            aria-label="Filter comparison criteria"
          >
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'all'}
              onClick={() => setFilter('all')}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All factors
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'cost-speed'}
              onClick={() => setFilter('cost-speed')}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                filter === 'cost-speed'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cost &amp; speed
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'quality-support'}
              onClick={() => setFilter('quality-support')}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                filter === 'quality-support'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Quality &amp; care
            </button>
          </div>
        </div>

        {/* 3-Column Problem vs. Solution Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Column 1: Problem — Traditional Agencies */}
          <article className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="pb-5 border-b border-slate-100">
                <div className="text-xs font-medium text-slate-500">
                  Traditional Agencies <span aria-hidden="true">·</span> High overhead
                </div>
                <h3 className="mt-1.5 text-lg font-bold tracking-tight text-slate-900">
                  Expensive &amp; Slow
                </h3>
                <div className="mt-3 flex items-baseline gap-2 font-mono tabular-nums">
                  <span className="text-xl font-bold text-slate-800">$15k–$40k+</span>
                  <span className="text-xs text-slate-500">/ 12–16 weeks</span>
                </div>
              </div>

              <ul className="mt-4 divide-y divide-slate-100">
                {visiblePoints.map((point) => {
                  const isFocused = focusedRowId === point.id;
                  return (
                    <li key={point.id} className="py-3 first:pt-1 last:pb-1">
                      <button
                        type="button"
                        onClick={() =>
                          setFocusedRowId((prev) => (prev === point.id ? null : point.id))
                        }
                        className={`w-full text-left rounded-lg px-2 py-1.5 -mx-2 transition-colors cursor-pointer flex items-start gap-3 ${
                          isFocused ? 'bg-slate-100/90' : 'hover:bg-slate-50'
                        }`}
                      >
                        <span className="mt-0.5 h-5 w-5 rounded-md bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                          <X className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <div className="text-[13.5px] font-semibold text-slate-900 leading-snug">
                            {point.agencyTitle}
                          </div>
                          <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                            {point.agencyDetail}
                          </p>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
              Best for enterprise teams with large annual budgets — overkill for lean small businesses.
            </div>
          </article>

          {/* Column 2: Problem — DIY Builders */}
          <article className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="pb-5 border-b border-slate-100">
                <div className="text-xs font-medium text-slate-500">
                  DIY Website Builders <span aria-hidden="true">·</span> Hidden time cost
                </div>
                <h3 className="mt-1.5 text-lg font-bold tracking-tight text-slate-900">
                  Frustrating &amp; Generic
                </h3>
                <div className="mt-3 flex items-baseline gap-2 font-mono tabular-nums">
                  <span className="text-xl font-bold text-slate-800">40+ hrs</span>
                  <span className="text-xs text-slate-500">of your evenings &amp; weekends</span>
                </div>
              </div>

              <ul className="mt-4 divide-y divide-slate-100">
                {visiblePoints.map((point) => {
                  const isFocused = focusedRowId === point.id;
                  return (
                    <li key={point.id} className="py-3 first:pt-1 last:pb-1">
                      <button
                        type="button"
                        onClick={() =>
                          setFocusedRowId((prev) => (prev === point.id ? null : point.id))
                        }
                        className={`w-full text-left rounded-lg px-2 py-1.5 -mx-2 transition-colors cursor-pointer flex items-start gap-3 ${
                          isFocused ? 'bg-slate-100/90' : 'hover:bg-slate-50'
                        }`}
                      >
                        <span className="mt-0.5 h-5 w-5 rounded-md bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                          <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <div className="text-[13.5px] font-semibold text-slate-900 leading-snug">
                            {point.diyTitle}
                          </div>
                          <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                            {point.diyDetail}
                          </p>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
              Looks cheap on the invoice, until broken layouts and slow pages quietly cost you leads.
            </div>
          </article>

          {/* Column 3: Solution — Our Service (Focal Anchor) */}
          <article className="relative rounded-2xl bg-white border border-violet-300/90 shadow-[0_24px_54px_-18px_rgba(79,70,229,0.16)] p-6 sm:p-7 flex flex-col justify-between overflow-hidden">
            {/* Subtle multi-colour studio hairline bar at top edge */}
            <div className="absolute inset-x-0 top-0 flex h-[3px]" aria-hidden="true">
              <span className="flex-1 bg-[#E14D79]" />
              <span className="flex-1 bg-[#F59E0B]" />
              <span className="flex-1 bg-[#22C55E]" />
              <span className="flex-1 bg-[#38BDF8]" />
              <span className="flex-1 bg-[#3B82F6]" />
            </div>

            <div>
              <div className="pb-5 border-b border-slate-100">
                <div className="text-xs font-semibold text-violet-700">
                  Our Studio Service <span aria-hidden="true">·</span> Done for you
                </div>
                <h3 className="mt-1.5 text-lg font-bold tracking-tight text-[#0F172A]">
                  Fast, Fixed-Price &amp; Custom
                </h3>
                <div className="mt-3 flex items-baseline gap-2 font-mono tabular-nums">
                  <span className="text-xl font-bold text-[#0F172A]">Fixed-price</span>
                  <span className="text-xs text-slate-600">/ live in 2–3 weeks</span>
                </div>
              </div>

              <ul className="mt-4 divide-y divide-slate-100">
                {visiblePoints.map((point) => {
                  const isFocused = focusedRowId === point.id;
                  return (
                    <li key={point.id} className="py-3 first:pt-1 last:pb-1">
                      <button
                        type="button"
                        onClick={() =>
                          setFocusedRowId((prev) => (prev === point.id ? null : point.id))
                        }
                        className={`w-full text-left rounded-lg px-2 py-1.5 -mx-2 transition-colors cursor-pointer flex items-start gap-3 ${
                          isFocused ? 'bg-violet-50/70' : 'hover:bg-slate-50/90'
                        }`}
                      >
                        <span className="mt-0.5 h-5 w-5 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <div className="text-[13.5px] font-semibold text-[#0F172A] leading-snug">
                            {point.studioTitle}
                          </div>
                          <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
                            {point.studioDetail}
                          </p>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100">
              <button
                type="button"
                onClick={onBookConsult}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 active:scale-[0.99] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 whitespace-nowrap cursor-pointer"
              >
                <span>Get a fixed-price quote</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <p className="mt-2.5 text-center text-[11.5px] text-slate-500">
                Free 30-min call <span aria-hidden="true">·</span> Upfront preview before you commit
              </p>
            </div>
          </article>
        </div>

        {/* Risk-Reversal Commitment Strip (Proof without relying on third-party reviews) */}
        <div className="mt-6 rounded-2xl bg-white border border-slate-200/90 px-6 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GUARANTEES.map((item) => (
            <div key={item.label} className="min-w-0">
              <div className="text-xs font-semibold text-[#0F172A]">{item.label}</div>
              <div className="mt-0.5 text-xs text-slate-600">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
