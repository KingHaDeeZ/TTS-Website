# Hero Outer Cards Specification

Documentation for the four decorative floating UI preview cards positioned along the outer edges of the hero section (`src/components/HeroSection.tsx`).

---

## 1. Shared Container Architecture & Sizing

All four outer cards share the following baseline traits so they frame the centered `max-w-[660px]` hero composition without overlapping the headline or CTA at `1024px+` viewports:

| Property | Value | Notes |
| --- | --- | --- |
| **Visibility** | `hidden lg:block` | Hidden below `1024px` to preserve mobile/tablet layout clarity |
| **Interactivity** | `pointer-events-none select-none` | Decorative backdrop layer; never blocks clicks |
| **Accessibility** | `aria-hidden="true"` | Excluded from screen-reader navigation |
| **Positioning** | `absolute` inside `relative overflow-hidden` hero | Partially cropped at viewport edges on `lg`/`xl` |
| **Border Radius** | `rounded-2xl` (`16px`) | Inner frames use `rounded-xl` (`12px`) or `rounded-lg` (`8px`) |
| **Surface & Blur** | `bg-white/88` (or `/80`, `/75`) + `backdrop-blur-md` | Frosted translucent glass over mesh gradient |
| **Border** | `border border-white/90` (or `border-white/85`) | Crisp 1px light edge |
| **Elevation** | `shadow-[0_20px_45px_-18px_rgba(15,23,42,0.14)]` | Soft ambient slate shadow |

### Responsive Width & Edge Offset Matrix

| Card | Position | `lg` (`1024px+`) | `xl` (`1280px+`) | `2xl` (`1536px+`) | Padding |
| --- | --- | --- | --- | --- | --- |
| **1. Analytics Chart** | `top-[18%]` | `-left-24` (`-96px`), `w-[240px]` | `-left-10` (`-40px`), `w-[265px]` | `-left-4` (`-16px`), `w-[265px]` | `p-4` (`16px`) |
| **2. Workflow Diagram** | `bottom-[12%]` | `-left-24` (`-96px`), `w-[250px]` | `-left-12` (`-48px`), `w-[280px]` | `-left-6` (`-24px`), `w-[280px]` | `p-4` (`16px`) |
| **3. Code Editor** | `top-[15%]` | `-right-24` (`-96px`), `w-[265px]` | `-right-12` (`-48px`), `w-[295px]` | `-right-4` (`-16px`), `w-[295px]` | `p-2.5` (`10px`) |
| **4. Weekly Calendar** | `bottom-[10%]` | `-right-20` (`-80px`), `w-[240px]` | `-right-10` (`-40px`), `w-[260px]` | `-right-2` (`-8px`), `w-[260px]` | `p-4` (`16px`) |

---

## 2. Card 1 — Top-Left Analytics Chart

### Sizing & Tokens
- **Outer card**: `w-[240px] xl:w-[265px]`, `p-4`, `bg-white/88`
- **Legend header**: `text-[11px] font-medium text-slate-600 mb-3 pl-6`, legend dot `h-1.5 w-1.5 rounded-full bg-emerald-500`
- **Chart canvas**: `h-28` (`112px`), `w-full`, SVG `viewBox="0 0 220 96"`
- **Grid & guides**: `1px` horizontal lines (`y=22, 50, 78`, `#E2E8F0`), `1px` vertical guide (`x=128`, `#CBD5E1`)
- **Spline curve**: `stroke="#64748B"`, `strokeWidth="1.75"`, `r="3.5"` data point marker at `(128, 54)`
- **X-axis labels**: `text-[10px] font-medium text-slate-400 tabular-nums` (`Jun`, `Jul`, `Aug`)

### Code Element
```tsx
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
      <line x1="0" y1="22" x2="220" y2="22" stroke="#E2E8F0" strokeWidth="1" />
      <line x1="0" y1="50" x2="220" y2="50" stroke="#E2E8F0" strokeWidth="1" />
      <line x1="0" y1="78" x2="220" y2="78" stroke="#E2E8F0" strokeWidth="1" />
      <line x1="128" y1="10" x2="128" y2="82" stroke="#CBD5E1" strokeWidth="1" />
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
```

---

## 3. Card 2 — Bottom-Left Automated Workflow Diagram

### Sizing & Tokens
- **Outer card**: `w-[250px] xl:w-[280px]`, `p-4`, `bg-white/75`
- **Section label**: `text-[10px] font-medium text-slate-400 mb-3 pl-10`
- **Diagram canvas**: `relative h-32 w-full` (`128px` height), SVG `viewBox="0 0 240 120"`, `strokeWidth="1.25"` (`#CBD5E1`)
- **Trigger mini node**: `h-7 w-7` (`28px × 28px`), `rounded-md`, `Database` icon (`h-3.5 w-3.5`)
- **Step nodes**: `rounded-lg bg-white border border-slate-200/90 px-2.5 py-1.5`, icon badge `h-4 w-4` (`16px × 16px`), icon `h-2.5 w-2.5` (`10px × 10px`), label `text-[11px] font-medium text-slate-700`
- **Icons used**: `Database`, `GitBranch` (`lucide-react`)

### Code Element
```tsx
{/* Floating UI Card 2: Bottom-Left Automated Workflow Diagram */}
<div
  aria-hidden="true"
  className="pointer-events-none hidden lg:block absolute bottom-[12%] -left-24 xl:-left-12 2xl:-left-6 w-[250px] xl:w-[280px] rounded-2xl bg-white/75 backdrop-blur-md border border-white/85 shadow-[0_20px_45px_-18px_rgba(15,23,42,0.12)] p-4"
>
  <div className="text-[10px] font-medium text-slate-400 mb-3 pl-10">Workflow triggers</div>
  <div className="relative h-32 w-full">
    <svg viewBox="0 0 240 120" className="absolute inset-0 h-full w-full" fill="none">
      <path d="M12 42 H44 V28 H70" stroke="#CBD5E1" strokeWidth="1.25" />
      <path d="M44 42 V78 H70" stroke="#CBD5E1" strokeWidth="1.25" />
      <path d="M196 28 H222 V52" stroke="#CBD5E1" strokeWidth="1.25" />
    </svg>

    <div className="absolute left-0 top-7 h-7 w-7 rounded-md bg-white border border-slate-200/90 shadow-xs flex items-center justify-center">
      <Database className="h-3.5 w-3.5 text-slate-400" />
    </div>

    <div className="absolute left-[70px] top-3 flex items-center gap-2 rounded-lg bg-white border border-slate-200/90 px-2.5 py-1.5 shadow-xs">
      <span className="flex h-4 w-4 items-center justify-center rounded bg-sky-50 text-sky-600">
        <GitBranch className="h-2.5 w-2.5" />
      </span>
      <span className="text-[11px] font-medium text-slate-700 whitespace-nowrap">Automated workflow</span>
    </div>

    <div className="absolute left-[70px] top-[62px] flex items-center gap-2 rounded-lg bg-white border border-slate-200/90 px-2.5 py-1.5 shadow-xs">
      <span className="flex h-4 w-4 items-center justify-center rounded bg-amber-50 text-amber-600">
        <Database className="h-2.5 w-2.5" />
      </span>
      <span className="text-[11px] font-medium text-slate-700 whitespace-nowrap">Record synced</span>
    </div>

    <div className="absolute bottom-0 left-10 right-2 flex items-center justify-between text-[10px] text-slate-400">
      <span>Xero · HubSpot · SMS</span>
    </div>
  </div>
</div>
```

---

## 4. Card 3 — Top-Right Code Editor Window

### Sizing & Tokens
- **Outer frame**: `w-[265px] xl:w-[295px]`, `p-2.5` (`10px`), `rounded-2xl` (`16px`), `bg-white/80`
- **Inner code pane**: `rounded-xl` (`12px`), `p-3.5` (`14px`), `bg-[#1D2432]`, `font-mono` (`JetBrains Mono`), `text-[11px] leading-[1.55]`
- **Window dots**: `h-2 w-2` (`8px × 8px`), `gap-1.5` (`6px`), `mb-3` (`12px`), colors `bg-rose-400/90`, `bg-amber-400/90`, `bg-emerald-400/90`
- **Code lines**: `space-y-0.5`, line numbers `w-3 text-right text-slate-500`, `gap-3` (`12px`) gutter
- **Syntax colors**: keywords `text-sky-400`, identifiers `text-amber-300` / `text-slate-200`, JSX tags `text-rose-300`, props `text-amber-200`, strings `text-emerald-300`

### Code Element
```tsx
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
```

---

## 5. Card 4 — Bottom-Right Weekly Calendar

### Sizing & Tokens
- **Outer card**: `w-[240px] xl:w-[260px]`, `p-4`, `bg-white/88`
- **Header**: `text-xs font-semibold text-slate-800` + `CalendarIcon` (`h-3.5 w-3.5 text-slate-400`), `mb-2.5`
- **Day strip**: `grid-cols-5 gap-1 text-[10px] tabular-nums pb-2 border-b border-slate-100`; active day badge `h-4 w-4 rounded-full bg-sky-500 text-white text-[9px]`
- **Time rows**: `space-y-2 text-[9px] tabular-nums`, time label column `w-8 shrink-0` (`32px`)
- **Event blocks**: `rounded px-2 py-1` (single) or `px-1.5 py-1` (split `grid-cols-2 gap-1.5`), sky (`bg-sky-50 border-sky-200/80 text-sky-800`) and indigo (`bg-indigo-50 border-indigo-200/80 text-indigo-800`)

### Code Element
```tsx
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
```
