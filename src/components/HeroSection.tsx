import React from 'react';
import { ArrowRight, GitBranch, Database, Calendar as CalendarIcon } from 'lucide-react';

interface HeroSectionProps {
  onBookConsult: () => void;
}

export function HeroSection({ onBookConsult }: HeroSectionProps) {
  return (
    <section
      aria-label="Hero"
      className="hero-mesh-bg relative min-h-screen w-full overflow-hidden flex items-center justify-center px-6 py-20 sm:py-28 select-none"
    >
      {/* Subtle radial dot matrix behind center focal area */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden" aria-hidden="true">
        <div className="hero-dot-matrix h-[560px] w-[780px] opacity-35" />
      </div>

      {/* Floating UI Card 1: Top-Left Analytics Chart */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden lg:block absolute top-[18%] -left-24 xl:-left-10 2xl:-left-4 w-[240px] xl:w-[265px] rounded-2xl bg-white/88 backdrop-blur-md border border-white/90 shadow-[0_20px_45px_-18px_rgba(15,23,42,0.14)] p-4 transition-transform duration-200"
      >
        <div className="flex items-center justify-between text-[11px] font-medium text-slate-600 mb-3 pl-6">
          <div className="flex items-center gap-3">
            <span className="text-slate-700">Revenue</span>
            <span className="inline-flex items-center gap-1.5 text-slate-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Lead
            </span>
          </div>
        </div>
        <div className="relative h-28 w-full">
          <svg viewBox="0 0 220 96" className="h-full w-full overflow-visible" fill="none">
            <defs>
              <linearGradient id="revenueArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            {/* Horizontal grid lines */}
            <line x1="0" y1="22" x2="220" y2="22" stroke="#E2E8F0" strokeWidth="1" />
            <line x1="0" y1="50" x2="220" y2="50" stroke="#E2E8F0" strokeWidth="1" />
            <line x1="0" y1="78" x2="220" y2="78" stroke="#E2E8F0" strokeWidth="1" />
            {/* Vertical highlight guide */}
            <line x1="128" y1="10" x2="128" y2="82" stroke="#CBD5E1" strokeWidth="1" />
            {/* Area + Line */}
            <path
              d="M0 68 C26 68, 42 46, 68 46 C94 46, 108 58, 128 54 C156 48, 178 24, 212 10 L212 82 L0 82 Z"
              fill="url(#revenueArea)"
            />
            <path
              d="M0 68 C26 68, 42 46, 68 46 C94 46, 108 58, 128 54 C156 48, 178 24, 212 10"
              stroke="#64748B"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
            <circle cx="128" cy="54" r="3.5" fill="#475569" stroke="#FFFFFF" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="mt-1 flex items-center justify-between text-[10px] font-medium text-slate-400 pl-6 pr-2 tabular-nums">
          <span>Jun</span>
          <span>Jul</span>
          <span>Aug</span>
        </div>
      </div>

      {/* Floating UI Card 2: Bottom-Left Automated Workflow Diagram */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden lg:block absolute bottom-[12%] -left-24 xl:-left-12 2xl:-left-6 w-[250px] xl:w-[280px] rounded-2xl bg-white/75 backdrop-blur-md border border-white/85 shadow-[0_20px_45px_-18px_rgba(15,23,42,0.12)] p-4"
      >
        <div className="text-[10px] font-medium text-slate-400 mb-3 pl-10">Workflow triggers</div>
        <div className="relative h-32 w-full">
          {/* Connector lines */}
          <svg viewBox="0 0 240 120" className="absolute inset-0 h-full w-full" fill="none">
            <path d="M12 42 H44 V28 H70" stroke="#CBD5E1" strokeWidth="1.25" />
            <path d="M44 42 V78 H70" stroke="#CBD5E1" strokeWidth="1.25" />
            <path d="M196 28 H222 V52" stroke="#CBD5E1" strokeWidth="1.25" />
          </svg>

          {/* Left mini node */}
          <div className="absolute left-0 top-7 h-7 w-7 rounded-md bg-white border border-slate-200/90 shadow-xs flex items-center justify-center">
            <Database className="h-3.5 w-3.5 text-slate-400" />
          </div>

          {/* Workflow step 1 */}
          <div className="absolute left-[70px] top-3 flex items-center gap-2 rounded-lg bg-white border border-slate-200/90 px-2.5 py-1.5 shadow-xs">
            <span className="flex h-4 w-4 items-center justify-center rounded bg-sky-50 text-sky-600">
              <GitBranch className="h-2.5 w-2.5" />
            </span>
            <span className="text-[11px] font-medium text-slate-700 whitespace-nowrap">Automated workflow</span>
          </div>

          {/* Workflow step 2 */}
          <div className="absolute left-[70px] top-[62px] flex items-center gap-2 rounded-lg bg-white border border-slate-200/90 px-2.5 py-1.5 shadow-xs">
            <span className="flex h-4 w-4 items-center justify-center rounded bg-amber-50 text-amber-600">
              <Database className="h-2.5 w-2.5" />
            </span>
            <span className="text-[11px] font-medium text-slate-700 whitespace-nowrap">Record synced</span>
          </div>

          {/* Subtle mini footer bar */}
          <div className="absolute bottom-0 left-10 right-2 flex items-center justify-between text-[10px] text-slate-400">
            <span>Xero · HubSpot · SMS</span>
          </div>
        </div>
      </div>

      {/* Floating UI Card 3: Top-Right Code Editor Window */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden lg:block absolute top-[15%] -right-24 xl:-right-12 2xl:-right-4 w-[265px] xl:w-[295px] rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 shadow-[0_20px_45px_-18px_rgba(15,23,42,0.14)] p-2.5"
      >
        <div className="rounded-xl bg-[#1D2432] p-3.5 text-[11px] leading-[1.55] font-mono text-slate-300 shadow-inner overflow-hidden">
          <div className="flex items-center gap-1.5 mb-3">
            <span className="h-2 w-2 rounded-full bg-rose-400/90" />
            <span className="h-2 w-2 rounded-full bg-amber-400/90" />
            <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
          </div>
          <div className="space-y-0.5 whitespace-nowrap">
            <div className="flex gap-3">
              <span className="text-slate-500 select-none w-3 text-right">1</span>
              <span>
                <span className="text-sky-400">const</span>{' '}
                <span className="text-amber-300">dispatch</span>{' '}
                <span className="text-slate-400">= () =&gt; {'{'}</span>
              </span>
            </div>
            <div className="flex gap-3">
              <span className="text-slate-500 select-none w-3 text-right">2</span>
              <span className="pl-2">
                <span className="text-sky-400">const</span>{' '}
                <span className="text-slate-200">quote</span>{' '}
                <span className="text-slate-400">=</span>{' '}
                <span className="text-emerald-300">&apos;fixed-price&apos;</span>
              </span>
            </div>
            <div className="flex gap-3">
              <span className="text-slate-500 select-none w-3 text-right">3</span>
              <span className="pl-4 text-slate-400">
                {'<'}<span className="text-rose-300">JobCard</span>{' '}
                <span className="text-amber-200">status</span>=
                <span className="text-emerald-300">&quot;active&quot;</span>{' />'}
              </span>
            </div>
            <div className="flex gap-3">
              <span className="text-slate-500 select-none w-3 text-right">4</span>
              <span className="pl-2 text-slate-400">{'};'}</span>
            </div>
            <div className="flex gap-3">
              <span className="text-slate-500 select-none w-3 text-right">5</span>
              <span>
                <span className="text-sky-400">return</span>{' '}
                <span className="text-slate-400">{'('}</span>
              </span>
            </div>
            <div className="flex gap-3">
              <span className="text-slate-500 select-none w-3 text-right">6</span>
              <span className="pl-2 text-slate-400">
                {'<'}<span className="text-rose-300">Portal</span>{' '}
                <span className="text-amber-200">region</span>=
                <span className="text-emerald-300">&quot;AU&quot;</span>{' />'}
              </span>
            </div>
            <div className="flex gap-3">
              <span className="text-slate-500 select-none w-3 text-right">7</span>
              <span className="text-slate-400">{');'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating UI Card 4: Bottom-Right Weekly Calendar */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden lg:block absolute bottom-[10%] -right-20 xl:-right-10 2xl:-right-2 w-[240px] xl:w-[260px] rounded-2xl bg-white/88 backdrop-blur-md border border-white/90 shadow-[0_20px_45px_-18px_rgba(15,23,42,0.14)] p-4"
      >
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-semibold text-slate-800">Calendar</span>
          <CalendarIcon className="h-3.5 w-3.5 text-slate-400" />
        </div>
        <div className="grid grid-cols-5 gap-1 text-center text-[10px] text-slate-400 pb-2 border-b border-slate-100 tabular-nums">
          <div>
            <div>Sun</div>
            <div className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-sky-500 text-white font-semibold text-[9px]">
              10
            </div>
          </div>
          <div>
            <div>Mon</div>
            <div className="mt-0.5 text-slate-600 font-medium">11</div>
          </div>
          <div>
            <div>Tue</div>
            <div className="mt-0.5 text-slate-600 font-medium">12</div>
          </div>
          <div>
            <div>Wed</div>
            <div className="mt-0.5 text-slate-600 font-medium">13</div>
          </div>
          <div>
            <div>Thu</div>
            <div className="mt-0.5 text-slate-600 font-medium">14</div>
          </div>
        </div>
        <div className="mt-2.5 space-y-2 text-[9px] text-slate-400 tabular-nums">
          <div className="flex items-center gap-2">
            <span className="w-8 shrink-0">10 AM</span>
            <div className="flex-1 rounded bg-sky-50 border border-sky-200/80 px-2 py-1 text-sky-800 font-medium truncate">
              Site dispatch
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-8 shrink-0">12 PM</span>
            <div className="flex-1 grid grid-cols-2 gap-1.5">
              <div className="rounded bg-sky-50 border border-sky-200/80 px-1.5 py-1 text-sky-800 font-medium truncate">
                Client sync
              </div>
              <div className="rounded bg-indigo-50 border border-indigo-200/80 px-1.5 py-1 text-indigo-800 font-medium truncate">
                QA review
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-8 shrink-0">2 PM</span>
            <div className="flex-1 h-px bg-slate-100" />
          </div>
        </div>
      </div>

      {/* Main Centered Hero Composition */}
      <div className="relative z-10 mx-auto max-w-[660px] text-center">
        {/* Kicker */}
        <p className="text-sm sm:text-[15px] font-medium tracking-[-0.01em] text-slate-700">
          Australian web &amp; mobile app studio
        </p>

        {/* Signature 5-segment multi-color hairline bar */}
        <div className="mx-auto mt-3 flex items-center justify-center gap-1" aria-hidden="true">
          <span className="h-[2.5px] w-4 rounded-full bg-[#E14D79]" />
          <span className="h-[2.5px] w-4 rounded-full bg-[#F59E0B]" />
          <span className="h-[2.5px] w-4 rounded-full bg-[#22C55E]" />
          <span className="h-[2.5px] w-4 rounded-full bg-[#38BDF8]" />
          <span className="h-[2.5px] w-4 rounded-full bg-[#3B82F6]" />
        </div>

        {/* Display Headline (Exact preserved text) */}
        <h1 className="mt-6 text-[2.5rem] sm:text-[3.5rem] lg:text-[4.15rem] font-extrabold tracking-[-0.035em] leading-[1.08] text-[#0F172A] [text-wrap:balance] mx-auto max-w-[16ch]">
          <span className="bg-gradient-to-r from-[#9333EA] via-[#7C3AED] to-[#4F46E5] bg-clip-text text-transparent box-decoration-clone">
            Bespoke software
          </span>
          <span aria-hidden="true" className="pointer-events-none relative inline-block w-0 h-0 align-top">
            <svg
              viewBox="0 0 24 24"
              className="absolute top-0 sm:top-0.5 left-0.5 h-4 w-4 sm:h-5 sm:w-5 text-violet-500"
              fill="currentColor"
            >
              <path d="M12 0C12 7.2 16.8 12 24 12C16.8 12 12 16.8 12 24C12 16.8 7.2 12 0 12C7.2 12 12 7.2 12 0Z" />
            </svg>
            <svg
              viewBox="0 0 24 24"
              className="absolute -top-3 sm:-top-3.5 left-4 sm:left-5 h-2.5 w-2.5 sm:h-3 sm:w-3 text-violet-600"
              fill="currentColor"
            >
              <path d="M12 0C12 7.2 16.8 12 24 12C16.8 12 12 16.8 12 24C12 16.8 7.2 12 0 12C7.2 12 12 7.2 12 0Z" />
            </svg>
          </span>{' '}
          that fits the way{' '}
          <span className="bg-gradient-to-r from-[#9333EA] via-[#7C3AED] to-[#4F46E5] bg-clip-text text-transparent box-decoration-clone">
            your business
          </span>{' '}
          works
        </h1>

        {/* Subheadline (Exact preserved text) */}
        <p className="mt-5 mx-auto max-w-[54ch] text-base sm:text-[17px] leading-[1.6] text-slate-700 font-normal">
          We design, build and support custom web and mobile apps for Australian SMEs — replacing spreadsheets and
          clunky off-the-shelf tools with software made for you.
        </p>

        {/* Floating Action Card (Exact preserved text) */}
        <div className="mx-auto mt-9 max-w-[520px] rounded-2xl bg-white/95 backdrop-blur-sm px-5 py-3.5 sm:px-6 sm:py-4 shadow-[0_18px_40px_-14px_rgba(15,23,42,0.16)] border border-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 text-left">
          <div className="pl-0.5">
            <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-slate-400">
              PROJECTS
            </div>
            <div className="mt-0.5 text-[15px] sm:text-base font-medium text-slate-900">
              Fixed-price quotes
            </div>
          </div>

          <button
            type="button"
            onClick={onBookConsult}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 active:scale-[0.99] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Book a free consult</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Micro-caption below CTA card (Exact preserved text) */}
        <p className="mt-3.5 text-xs font-medium text-slate-500">
          Free 30-minute discovery call · No obligation
        </p>
      </div>
    </section>
  );
}
