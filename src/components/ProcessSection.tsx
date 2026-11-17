import React, { useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';
import {
  Activity,
  CalendarRange,
  Check,
  ChevronUp,
  Cloud,
  Code2,
  Compass,
  Database,
  FileText,
  GitBranch,
  Layers,
  ListChecks,
  Rocket,
  Server,
  ShieldCheck,
  Users,
} from 'lucide-react';

type StudioColorKey = 'pink' | 'amber' | 'green' | 'sky' | 'blue';

interface StudioAccent {
  barBg: string;
  iconIdle: string;
  iconActive: string;
  rowActive: string;
  cardActive: string;
  text: string;
  check: string;
}

export type PreviewTheme = 'dark' | 'light';

const STUDIO_ACCENTS_BY_THEME: Record<
  PreviewTheme,
  Record<StudioColorKey, StudioAccent>
> = {
  dark: {
    pink: {
      barBg: 'bg-[#E14D79]',
      iconIdle: 'bg-[#E14D79]/15 text-[#F4729B]',
      iconActive: 'bg-[#E14D79] text-white',
      rowActive: 'bg-[#E14D79]/10',
      cardActive:
        'bg-[#1E222E] border-[#E14D79]/65 shadow-[0_8px_24px_-8px_rgba(225,77,121,0.35)]',
      text: 'text-[#F4729B]',
      check: 'text-[#E14D79]',
    },
    amber: {
      barBg: 'bg-[#F59E0B]',
      iconIdle: 'bg-[#F59E0B]/15 text-[#FBBF24]',
      iconActive: 'bg-[#F59E0B] text-[#0F172A]',
      rowActive: 'bg-[#F59E0B]/10',
      cardActive:
        'bg-[#1E222E] border-[#F59E0B]/65 shadow-[0_8px_24px_-8px_rgba(245,158,11,0.32)]',
      text: 'text-[#FBBF24]',
      check: 'text-[#F59E0B]',
    },
    green: {
      barBg: 'bg-[#22C55E]',
      iconIdle: 'bg-[#22C55E]/15 text-[#4ADE80]',
      iconActive: 'bg-[#22C55E] text-[#0F172A]',
      rowActive: 'bg-[#22C55E]/10',
      cardActive:
        'bg-[#1E222E] border-[#22C55E]/65 shadow-[0_8px_24px_-8px_rgba(34,197,94,0.32)]',
      text: 'text-[#4ADE80]',
      check: 'text-[#22C55E]',
    },
    sky: {
      barBg: 'bg-[#38BDF8]',
      iconIdle: 'bg-[#38BDF8]/15 text-[#38BDF8]',
      iconActive: 'bg-[#38BDF8] text-[#0F172A]',
      rowActive: 'bg-[#38BDF8]/10',
      cardActive:
        'bg-[#1E222E] border-[#38BDF8]/65 shadow-[0_8px_24px_-8px_rgba(56,189,248,0.32)]',
      text: 'text-[#38BDF8]',
      check: 'text-[#38BDF8]',
    },
    blue: {
      barBg: 'bg-[#3B82F6]',
      iconIdle: 'bg-[#3B82F6]/15 text-[#60A5FA]',
      iconActive: 'bg-[#3B82F6] text-white',
      rowActive: 'bg-[#3B82F6]/10',
      cardActive:
        'bg-[#1E222E] border-[#3B82F6]/65 shadow-[0_8px_24px_-8px_rgba(59,130,246,0.35)]',
      text: 'text-[#60A5FA]',
      check: 'text-[#3B82F6]',
    },
  },
  light: {
    pink: {
      barBg: 'bg-[#E14D79]',
      iconIdle: 'bg-[#E14D79]/12 text-[#BE185D]',
      iconActive: 'bg-[#E14D79] text-white',
      rowActive: 'bg-[#E14D79]/[0.06]',
      cardActive:
        'bg-white border-[#E14D79]/70 shadow-[0_8px_24px_-8px_rgba(225,77,121,0.22)]',
      text: 'text-[#BE185D]',
      check: 'text-[#E14D79]',
    },
    amber: {
      barBg: 'bg-[#F59E0B]',
      iconIdle: 'bg-[#F59E0B]/15 text-[#B45309]',
      iconActive: 'bg-[#F59E0B] text-white',
      rowActive: 'bg-[#F59E0B]/[0.07]',
      cardActive:
        'bg-white border-[#F59E0B]/75 shadow-[0_8px_24px_-8px_rgba(245,158,11,0.20)]',
      text: 'text-[#B45309]',
      check: 'text-[#D97706]',
    },
    green: {
      barBg: 'bg-[#22C55E]',
      iconIdle: 'bg-[#22C55E]/12 text-[#15803D]',
      iconActive: 'bg-[#22C55E] text-white',
      rowActive: 'bg-[#22C55E]/[0.06]',
      cardActive:
        'bg-white border-[#22C55E]/70 shadow-[0_8px_24px_-8px_rgba(34,197,94,0.20)]',
      text: 'text-[#15803D]',
      check: 'text-[#16A34A]',
    },
    sky: {
      barBg: 'bg-[#38BDF8]',
      iconIdle: 'bg-[#38BDF8]/15 text-[#0369A1]',
      iconActive: 'bg-[#0284C7] text-white',
      rowActive: 'bg-[#38BDF8]/[0.08]',
      cardActive:
        'bg-white border-[#38BDF8]/80 shadow-[0_8px_24px_-8px_rgba(56,189,248,0.22)]',
      text: 'text-[#0369A1]',
      check: 'text-[#0284C7]',
    },
    blue: {
      barBg: 'bg-[#3B82F6]',
      iconIdle: 'bg-[#3B82F6]/12 text-[#1D4ED8]',
      iconActive: 'bg-[#3B82F6] text-white',
      rowActive: 'bg-[#3B82F6]/[0.06]',
      cardActive:
        'bg-white border-[#3B82F6]/70 shadow-[0_8px_24px_-8px_rgba(59,130,246,0.22)]',
      text: 'text-[#1D4ED8]',
      check: 'text-[#2563EB]',
    },
  },
};

interface ProcessStep {
  number: string;
  title: string;
  description?: string;
  summary: string;
  color: StudioColorKey;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'We map your processes, goals and budget, then scope a clear, fixed-price plan.',
    summary: '6 milestones · Fixed price',
    color: 'pink',
  },
  {
    number: '02',
    title: 'Sprint Planning',
    description:
      'Your project is broken into fortnightly sprints with a shared timeline you can follow.',
    summary: '6 sprints · 12 weeks',
    color: 'amber',
  },
  {
    number: '03',
    title: 'Design & Build',
    description:
      'UX/UI design and development of your web or mobile app, with a demo every sprint.',
    summary: 'KPIs · Chart · DevTools',
    color: 'green',
  },
  {
    number: '04',
    title: 'Integrations',
    description:
      'Connect your new software to Xero, MYOB, Shopify, your CRM and other existing tools.',
    summary: 'Xero · MYOB · Shopify · CRM',
    color: 'sky',
  },
  {
    number: '05',
    title: 'Testing & Launch',
    summary: 'QA & go-live',
    color: 'blue',
  },
];

interface BacklogItem {
  id: string;
  label: string;
  area: string;
  priority: string;
  color: StudioColorKey;
}

const DISCOVERY_BACKLOG: BacklogItem[] = [
  { id: 'audit', label: 'Spreadsheet & tool audit', area: 'Ops', priority: 'P1', color: 'pink' },
  { id: 'roles', label: 'Staff & client permissions', area: 'Auth', priority: 'P1', color: 'amber' },
  { id: 'schema', label: 'Core database schema', area: 'Data', priority: 'P1', color: 'green' },
  { id: 'xero', label: 'Xero & CRM sync scope', area: 'API', priority: 'P2', color: 'sky' },
  { id: 'field', label: 'Mobile field checklist', area: 'App', priority: 'P2', color: 'blue' },
  { id: 'quote', label: 'Fixed-price build schedule', area: 'Plan', priority: 'P1', color: 'green' },
];

interface PlanningMilestone {
  step: string;
  title: string;
  detail: string;
  window: string;
  backlogId: string;
  color: StudioColorKey;
  icon: React.ComponentType<{ className?: string }>;
}

const PLANNING_MILESTONES: PlanningMilestone[] = [
  {
    step: '1',
    title: 'Current Workflow Audit',
    detail: 'Map manual spreadsheets, handoffs and bottlenecks',
    window: 'Day 1–2',
    backlogId: 'audit',
    color: 'pink',
    icon: Compass,
  },
  {
    step: '2',
    title: 'Stakeholder Goals & Roles',
    detail: 'Align team permissions, KPIs and approval flows',
    window: 'Day 3',
    backlogId: 'roles',
    color: 'amber',
    icon: ShieldCheck,
  },
  {
    step: '3',
    title: 'System & Data Architecture',
    detail: 'Define entities, records and relational structure',
    window: 'Day 4–5',
    backlogId: 'schema',
    color: 'green',
    icon: Layers,
  },
  {
    step: '4',
    title: 'Integration Feasibility',
    detail: 'Verify Xero, HubSpot and SMS API endpoints',
    window: 'Day 6',
    backlogId: 'xero',
    color: 'sky',
    icon: GitBranch,
  },
  {
    step: '5',
    title: 'Scope & MVP Prioritisation',
    detail: 'Separate launch essentials from Phase 2 backlog',
    window: 'Day 7–8',
    backlogId: 'field',
    color: 'blue',
    icon: ListChecks,
  },
  {
    step: '6',
    title: 'Fixed-Price Plan & Sign-Off',
    detail: 'Lock milestone dates, deliverables and total quote',
    window: 'Day 9–10',
    backlogId: 'quote',
    color: 'green',
    icon: FileText,
  },
];

interface SprintBlock {
  id: string;
  sprint: string;
  weeks: string;
  title: string;
  deliverables: string;
  status: 'Complete' | 'In progress' | 'Scheduled';
  tasksCount: string;
  color: StudioColorKey;
  gridPositionClass: string;
}

const SPRINT_TIMELINE: SprintBlock[] = [
  {
    id: 's1',
    sprint: 'Sprint 01',
    weeks: 'Wk 1–2',
    title: 'Core Setup & Auth',
    deliverables: 'Database schema, user roles, staging environment',
    status: 'Complete',
    tasksCount: '6 tasks',
    color: 'pink',
    gridPositionClass: 'sm:col-start-1 sm:col-span-4 sm:row-start-1',
  },
  {
    id: 's2',
    sprint: 'Sprint 02',
    weeks: 'Wk 3–4',
    title: 'Client & Job Portal',
    deliverables: 'Job records, quote builder, client views',
    status: 'Complete',
    tasksCount: '8 tasks',
    color: 'amber',
    gridPositionClass: 'sm:col-start-2 sm:col-span-4 sm:row-start-3',
  },
  {
    id: 's3',
    sprint: 'Sprint 03',
    weeks: 'Wk 5–6',
    title: 'Dispatch & Scheduling',
    deliverables: 'Live roster board, calendar sync, notifications',
    status: 'In progress',
    tasksCount: '7 tasks',
    color: 'green',
    gridPositionClass: 'sm:col-start-5 sm:col-span-4 sm:row-start-2',
  },
  {
    id: 's4',
    sprint: 'Sprint 04',
    weeks: 'Wk 7–8',
    title: 'Mobile Field App',
    deliverables: 'Offline checklists, photo capture, sign-off',
    status: 'Scheduled',
    tasksCount: '6 tasks',
    color: 'sky',
    gridPositionClass: 'sm:col-start-6 sm:col-span-4 sm:row-start-4',
  },
  {
    id: 's5',
    sprint: 'Sprint 05',
    weeks: 'Wk 9–10',
    title: 'Xero & CRM Sync',
    deliverables: 'Two-way invoice sync, automated webhook logs',
    status: 'Scheduled',
    tasksCount: '5 tasks',
    color: 'blue',
    gridPositionClass: 'sm:col-start-9 sm:col-span-4 sm:row-start-1',
  },
  {
    id: 's6',
    sprint: 'Sprint 06',
    weeks: 'Wk 11–12',
    title: 'QA & Production Go-Live',
    deliverables: 'UAT sign-off, team training, production cutover',
    status: 'Scheduled',
    tasksCount: '4 tasks',
    color: 'pink',
    gridPositionClass: 'sm:col-start-9 sm:col-span-4 sm:row-start-3',
  },
];

interface BuildMetricCard {
  id: 'uptime' | 'users' | 'releases';
  label: string;
  value: string;
  delta: string;
  color: StudioColorKey;
  chartStroke: string;
  chartFillId: string;
  chartPath: string;
  chartAreaPath: string;
  icon: React.ComponentType<{ className?: string }>;
}

const BUILD_METRICS: BuildMetricCard[] = [
  {
    id: 'uptime',
    label: 'Uptime',
    value: '99.98%',
    delta: '+0.04% · 30d',
    color: 'green',
    chartStroke: '#22C55E',
    chartFillId: 'buildChartGreen',
    chartPath: 'M0 58 C36 56, 68 42, 108 40 C148 38, 184 22, 224 18 C252 15, 282 12, 310 10',
    chartAreaPath:
      'M0 58 C36 56, 68 42, 108 40 C148 38, 184 22, 224 18 C252 15, 282 12, 310 10 L310 92 L0 92 Z',
    icon: Activity,
  },
  {
    id: 'users',
    label: 'Active Users',
    value: '1,420',
    delta: '+18% sprint',
    color: 'sky',
    chartStroke: '#38BDF8',
    chartFillId: 'buildChartSky',
    chartPath: 'M0 74 C38 70, 74 60, 112 50 C152 40, 190 28, 228 20 C260 14, 285 11, 310 8',
    chartAreaPath:
      'M0 74 C38 70, 74 60, 112 50 C152 40, 190 28, 228 20 C260 14, 285 11, 310 8 L310 92 L0 92 Z',
    icon: Users,
  },
  {
    id: 'releases',
    label: 'Releases',
    value: '14',
    delta: '2 demos / sprint',
    color: 'pink',
    chartStroke: '#E14D79',
    chartFillId: 'buildChartPink',
    chartPath: 'M0 78 C42 74, 72 54, 110 54 C148 54, 180 34, 220 30 C258 26, 284 16, 310 12',
    chartAreaPath:
      'M0 78 C42 74, 72 54, 110 54 C148 54, 180 34, 220 30 C258 26, 284 16, 310 12 L310 92 L0 92 Z',
    icon: Rocket,
  },
];

interface IntegrationLayer {
  id: 'api' | 'database' | 'hosting';
  title: string;
  subtitle: string;
  items: string[];
  metric: string;
  color: StudioColorKey;
  icon: React.ComponentType<{ className?: string }>;
}

const INTEGRATION_LAYERS: IntegrationLayer[] = [
  {
    id: 'api',
    title: 'API Integrations',
    subtitle: 'Xero · MYOB · Shopify · CRM',
    items: ['Two-way invoice & GST sync', 'Real-time order webhooks'],
    metric: '4 connected',
    color: 'pink',
    icon: GitBranch,
  },
  {
    id: 'database',
    title: 'Database',
    subtitle: 'PostgreSQL · Encrypted',
    items: ['Relational client & job ledger', 'Automated hourly snapshots'],
    metric: 'Row-level auth',
    color: 'sky',
    icon: Database,
  },
  {
    id: 'hosting',
    title: 'Cloud Hosting',
    subtitle: 'AWS Sydney · ap-southeast-2',
    items: ['Australian data residency', 'Zero-downtime CI/CD deploys'],
    metric: '99.98% SLA',
    color: 'green',
    icon: Cloud,
  },
];

interface ProcessSectionProps {
  previewTheme?: PreviewTheme;
}

export function ProcessSection({ previewTheme = 'dark' }: ProcessSectionProps) {
  const isLight = previewTheme === 'light';
  const accents = STUDIO_ACCENTS_BY_THEME[previewTheme];

  const [stackOrder, setStackOrder] = useState<string[]>(['01']);
  const activeStep = stackOrder[stackOrder.length - 1];
  const collapsedSteps = stackOrder.slice(0, -1);

  const handleSelectStep = (stepNumber: string) => {
    if (stepNumber === activeStep) return;
    setStackOrder((prev) => [...prev.filter((id) => id !== stepNumber), stepNumber]);
  };

  const [selectedMilestone, setSelectedMilestone] = useState<string>('audit');
  const [selectedSprint, setSelectedSprint] = useState<string>('s3');
  const [selectedBuildMetric, setSelectedBuildMetric] =
    useState<BuildMetricCard['id']>('users');
  const [devToolTab, setDevToolTab] = useState<'component' | 'metrics'>('component');
  const [selectedIntegrationLayer, setSelectedIntegrationLayer] =
    useState<IntegrationLayer['id']>('api');

  const activeSprintObj =
    SPRINT_TIMELINE.find((s) => s.id === selectedSprint) ?? SPRINT_TIMELINE[2];
  const activeSprintAccent = accents[activeSprintObj.color];

  const activeMetricObj =
    BUILD_METRICS.find((m) => m.id === selectedBuildMetric) ?? BUILD_METRICS[1];
  const activeMetricAccent = accents[activeMetricObj.color];
  const chartGradientId = `${previewTheme}-${activeMetricObj.chartFillId}`;

  const activeLayerObj =
    INTEGRATION_LAYERS.find((l) => l.id === selectedIntegrationLayer) ??
    INTEGRATION_LAYERS[0];
  const activeLayerAccent = accents[activeLayerObj.color];

  return (
    <section
      id={isLight ? 'how-we-build-light' : 'how-we-build'}
      aria-label={isLight ? 'How we build — Light mode preview' : 'How we build'}
      className={`w-full py-24 sm:py-32 px-6 sm:px-10 lg:px-12 border-t ${
        isLight
          ? 'bg-[#F7F8FB] border-slate-200'
          : 'bg-[#F7F8FB] border-slate-200/70'
      }`}
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.06em] text-violet-700">
            How we build
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-[-0.03em] leading-[1.08] text-[#0F172A] [text-wrap:balance]">
            From idea to launch, without the guesswork
          </h2>
          <p className="mt-4 text-base sm:text-[17px] leading-[1.6] text-slate-600">
            A proven, transparent process that keeps your project on time and on budget.
          </p>
        </div>

        {/* Two-Column Process Grid */}
        <div className="mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Steps List */}
          <div className="lg:col-span-5 space-y-1.5">
            {PROCESS_STEPS.map((step) => {
              const isActive = activeStep === step.number;
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => handleSelectStep(step.number)}
                  aria-expanded={isActive}
                  className={`w-full text-left rounded-xl px-5 py-4 transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 ${
                    isActive
                      ? 'bg-[#EEF2F7] border border-slate-300/80 shadow-xs'
                      : 'border border-transparent hover:bg-white/70'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`mt-0.5 font-mono text-xs font-medium tabular-nums shrink-0 ${
                        isActive ? 'text-violet-700' : 'text-slate-400'
                      }`}
                    >
                      {step.number}
                    </span>
                    <div className="min-w-0">
                      <div
                        className={`text-[15px] font-semibold leading-snug ${
                          isActive ? 'text-[#0F172A]' : 'text-slate-800'
                        }`}
                      >
                        {step.title}
                      </div>
                      {isActive && step.description && (
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Stacking Card Reference Deck (Dark or Light Mode) */}
          <div className="lg:col-span-7">
            <MotionConfig reducedMotion="user">
              <div className="relative">
                {/* Collapsed Previous Reference Cards */}
                {collapsedSteps.length > 0 && (
                  <div className="relative z-10 flex flex-col">
                    <AnimatePresence initial={false}>
                      {collapsedSteps.map((stepNum, index) => {
                        const stepInfo = PROCESS_STEPS.find((s) => s.number === stepNum);
                        if (!stepInfo) return null;
                        const depthFromFront = collapsedSteps.length - index;
                        const insetClass =
                          depthFromFront === 1
                            ? 'mx-2'
                            : depthFromFront === 2
                              ? 'mx-4'
                              : depthFromFront === 3
                                ? 'mx-6'
                                : 'mx-8';
                        const stepAccent = accents[stepInfo.color];

                        return (
                          <motion.button
                            key={stepNum}
                            type="button"
                            layout
                            initial={{ opacity: 0, height: 0, y: 10 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                            onClick={() => handleSelectStep(stepNum)}
                            aria-label={`Bring ${stepInfo.number} ${stepInfo.title} to top of stack`}
                            className={`${insetClass} -mb-2.5 pb-4 pt-2.5 px-4 rounded-t-2xl border text-left transition-colors cursor-pointer flex items-center justify-between gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 ${
                              isLight
                                ? 'bg-[#F8FAFC] border-slate-200/95 hover:bg-white hover:border-slate-300 text-slate-800 shadow-[0_-4px_14px_-6px_rgba(15,23,42,0.08)]'
                                : 'bg-[#10131B] border-white/10 hover:bg-[#171B26] hover:border-white/25 text-slate-200 shadow-[0_-6px_20px_-6px_rgba(0,0,0,0.45)]'
                            }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span
                                className={`font-mono text-[11px] font-medium tabular-nums shrink-0 ${stepAccent.text}`}
                              >
                                {stepInfo.number}
                              </span>
                              <span className="text-xs font-semibold truncate">
                                {stepInfo.title}
                              </span>
                            </div>

                            <div className="flex items-center gap-2.5 shrink-0">
                              <span
                                className={`hidden sm:inline font-mono text-[10.5px] tabular-nums ${
                                  isLight ? 'text-slate-500' : 'text-slate-400'
                                }`}
                              >
                                {stepInfo.summary}
                              </span>
                              <ChevronUp
                                className={`h-3.5 w-3.5 ${
                                  isLight ? 'text-slate-400' : 'text-slate-500'
                                }`}
                                aria-hidden="true"
                              />
                            </div>
                          </motion.button>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                )}

                {/* Active Top Reference Card Landing on Stack */}
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: -26, scale: 0.975 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative z-20 rounded-2xl overflow-hidden border ${
                    isLight
                      ? 'bg-white border-slate-200/90 shadow-[0_24px_54px_-18px_rgba(15,23,42,0.14)] text-slate-900'
                      : 'bg-[#141720] border-white/10 shadow-[0_28px_60px_-20px_rgba(15,23,42,0.45)] text-slate-100'
                  }`}
                >
              {/* Preview Window Chrome with Red, Amber, Green Window Buttons */}
              <div
                className={`flex items-center justify-between px-5 py-3.5 border-b ${
                  isLight
                    ? 'border-slate-200/80 bg-[#F8FAFC]'
                    : 'border-white/10 bg-[#10131B]'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                  </div>
                  <span
                    className={`font-mono text-xs truncate ${
                      isLight ? 'text-slate-700' : 'text-slate-300'
                    }`}
                  >
                    Project Preview —{' '}
                    {PROCESS_STEPS.find((s) => s.number === activeStep)?.title}
                  </span>
                </div>

                <div className="hidden sm:flex items-center gap-3 shrink-0">
                  <div className="flex items-center gap-1" aria-hidden="true">
                    <span className="h-[2px] w-2.5 rounded-full bg-[#E14D79]" />
                    <span className="h-[2px] w-2.5 rounded-full bg-[#F59E0B]" />
                    <span className="h-[2px] w-2.5 rounded-full bg-[#22C55E]" />
                    <span className="h-[2px] w-2.5 rounded-full bg-[#38BDF8]" />
                    <span className="h-[2px] w-2.5 rounded-full bg-[#3B82F6]" />
                  </div>
                  <span
                    className={`font-mono text-[11px] tabular-nums ${
                      isLight ? 'text-slate-500' : 'text-slate-400'
                    }`}
                  >
                    Phase {activeStep} of 05
                  </span>
                </div>
              </div>

              {activeStep === '01' && (
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-12">
                    {/* Left Sub-Pane: Scope Backlog */}
                    <div
                      className={`sm:col-span-4 border-b sm:border-b-0 sm:border-r p-4 flex flex-col justify-between ${
                        isLight
                          ? 'bg-[#F8FAFC] border-slate-200/80'
                          : 'bg-[#10131B] border-white/10'
                      }`}
                    >
                      <div>
                        <div
                          className={`flex items-center justify-between text-[11px] font-semibold pb-3 border-b ${
                            isLight
                              ? 'text-slate-700 border-slate-200/80'
                              : 'text-slate-300 border-white/10'
                          }`}
                        >
                          <span>Backlog</span>
                          <span
                            className={`font-mono font-normal tabular-nums ${
                              isLight ? 'text-slate-500' : 'text-slate-400'
                            }`}
                          >
                            6 items
                          </span>
                        </div>

                        <ul className="mt-3 space-y-1.5">
                          {DISCOVERY_BACKLOG.map((item) => {
                            const isLinked = selectedMilestone === item.id;
                            const accent = accents[item.color];
                            return (
                              <li key={item.id}>
                                <button
                                  type="button"
                                  onClick={() => setSelectedMilestone(item.id)}
                                  className={`w-full text-left rounded-lg px-2.5 py-2 transition-colors duration-150 cursor-pointer border ${
                                    isLinked
                                      ? accent.cardActive
                                      : isLight
                                        ? 'border-transparent hover:bg-white'
                                        : 'border-transparent hover:bg-white/[0.04]'
                                  }`}
                                >
                                  <div
                                    className={`text-xs font-medium truncate ${
                                      isLight ? 'text-slate-900' : 'text-slate-100'
                                    }`}
                                  >
                                    {item.label}
                                  </div>
                                  <div
                                    className={`mt-0.5 flex items-center gap-1.5 text-[10px] font-mono tabular-nums ${
                                      isLight ? 'text-slate-500' : 'text-slate-400'
                                    }`}
                                  >
                                    <span className={`${accent.text} font-medium`}>
                                      {item.area}
                                    </span>
                                    <span aria-hidden="true">·</span>
                                    <span
                                      className={
                                        isLinked
                                          ? isLight
                                            ? 'text-slate-800 font-medium'
                                            : 'text-slate-200 font-medium'
                                          : ''
                                      }
                                    >
                                      {item.priority}
                                    </span>
                                  </div>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      <div
                        className={`mt-4 pt-3 border-t flex items-center justify-between text-[11px] ${
                          isLight
                            ? 'border-slate-200/80 text-slate-500'
                            : 'border-white/10 text-slate-400'
                        }`}
                      >
                        <span>Quote basis</span>
                        <span
                          className={`font-medium ${
                            isLight ? 'text-[#15803D]' : 'text-[#4ADE80]'
                          }`}
                        >
                          Fixed price
                        </span>
                      </div>
                    </div>

                    {/* Right Sub-Pane: 6-Stage Planning Roadmap */}
                    <div
                      className={`sm:col-span-8 p-4 sm:p-5 divide-y ${
                        isLight ? 'divide-slate-200/75' : 'divide-white/[0.07]'
                      }`}
                    >
                      {PLANNING_MILESTONES.map((milestone) => {
                        const Icon = milestone.icon;
                        const isSelected = selectedMilestone === milestone.backlogId;
                        const accent = accents[milestone.color];
                        return (
                          <button
                            key={milestone.step}
                            type="button"
                            onClick={() => setSelectedMilestone(milestone.backlogId)}
                            className={`w-full text-left py-3 first:pt-1 last:pb-1 px-2.5 -mx-2.5 rounded-lg flex items-center justify-between gap-4 transition-colors duration-150 cursor-pointer ${
                              isSelected
                                ? accent.rowActive
                                : isLight
                                  ? 'hover:bg-slate-50/90'
                                  : 'hover:bg-white/[0.03]'
                            }`}
                          >
                            <div className="flex items-center gap-3.5 min-w-0">
                              <span
                                className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                                  isSelected ? accent.iconActive : accent.iconIdle
                                }`}
                              >
                                <Icon className="h-3.5 w-3.5" />
                              </span>
                              <div className="min-w-0">
                                <div
                                  className={`text-xs sm:text-[13px] font-semibold truncate ${
                                    isLight ? 'text-slate-900' : 'text-slate-100'
                                  }`}
                                >
                                  {milestone.title}
                                </div>
                                <div
                                  className={`text-[11px] truncate mt-0.5 ${
                                    isLight ? 'text-slate-600' : 'text-slate-400'
                                  }`}
                                >
                                  {milestone.detail}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              <span
                                className={`font-mono text-[11px] tabular-nums whitespace-nowrap ${
                                  isSelected
                                    ? accent.text
                                    : isLight
                                      ? 'text-slate-500'
                                      : 'text-slate-400'
                                }`}
                              >
                                {milestone.window}
                              </span>
                              <Check
                                className={`h-3.5 w-3.5 ${
                                  isSelected
                                    ? accent.check
                                    : isLight
                                      ? 'text-slate-300'
                                      : 'text-slate-600'
                                }`}
                              />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Clean Metadata Summary Bar */}
                  <div
                    className={`px-5 py-3 border-t flex flex-wrap items-center justify-between gap-2 text-[11px] ${
                      isLight
                        ? 'bg-[#F8FAFC] border-slate-200/80 text-slate-600'
                        : 'bg-[#10131B] border-white/10 text-slate-400'
                    }`}
                  >
                    <span>
                      Deliverables: Architecture Spec · Wireframe Flows · Fixed-Price Quote
                    </span>
                    <span
                      className={`font-mono tabular-nums ${
                        isLight ? 'text-[#0369A1]' : 'text-[#38BDF8]'
                      }`}
                    >
                      Est. 10 business days
                    </span>
                  </div>
                </div>
              )}

              {activeStep === '02' && (
                <div>
                  {/* Fortnightly Timeline Header Strip */}
                  <div
                    className={`px-5 py-3 border-b flex items-center justify-between gap-4 ${
                      isLight
                        ? 'border-slate-200/80 bg-[#F8FAFC]'
                        : 'border-white/10 bg-[#11141C]'
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 text-xs font-medium ${
                        isLight ? 'text-slate-800' : 'text-slate-200'
                      }`}
                    >
                      <CalendarRange
                        className={`h-3.5 w-3.5 ${
                          isLight ? 'text-[#0284C7]' : 'text-[#38BDF8]'
                        }`}
                      />
                      <span>Fortnightly Delivery Timeline</span>
                    </div>
                    <div
                      className={`font-mono text-[11px] tabular-nums ${
                        isLight ? 'text-slate-500' : 'text-slate-400'
                      }`}
                    >
                      6 sprints · 12 weeks
                    </div>
                  </div>

                  {/* Staggered Sprint Timeline Matrix */}
                  <div className="relative p-5 sm:p-6">
                    {/* Subtle vertical fortnight guide columns on desktop */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none hidden sm:grid grid-cols-6 gap-3 absolute inset-x-6 top-5 bottom-5"
                    >
                      {SPRINT_TIMELINE.map((col) => (
                        <div
                          key={col.id}
                          className={`border-l border-dashed first:border-l-0 ${
                            isLight ? 'border-slate-200/90' : 'border-white/[0.06]'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Week Axis Row */}
                    <div
                      className={`hidden sm:grid grid-cols-6 gap-3 mb-4 font-mono text-[10px] tabular-nums ${
                        isLight ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {SPRINT_TIMELINE.map((col) => (
                        <div key={col.id} className="pl-1">
                          {col.weeks}
                        </div>
                      ))}
                    </div>

                    {/* Staggered 6-Block Sprint Layout */}
                    <div className="relative grid grid-cols-1 sm:grid-cols-12 sm:grid-rows-4 gap-3 sm:gap-2.5 sm:gap-y-3.5">
                      {SPRINT_TIMELINE.map((block) => {
                        const isSelected = selectedSprint === block.id;
                        const accent = accents[block.color];
                        const statusColor =
                          block.status === 'Complete'
                            ? isLight
                              ? 'text-[#15803D]'
                              : 'text-[#4ADE80]'
                            : block.status === 'In progress'
                              ? accent.text
                              : isLight
                                ? 'text-slate-500'
                                : 'text-slate-400';

                        return (
                          <button
                            key={block.id}
                            type="button"
                            onClick={() => setSelectedSprint(block.id)}
                            className={`${block.gridPositionClass} text-left rounded-xl p-3 border transition-all duration-150 cursor-pointer flex flex-col justify-between min-h-[82px] ${
                              isSelected
                                ? accent.cardActive
                                : isLight
                                  ? 'bg-[#F8FAFC] border-slate-200 hover:border-slate-300 hover:bg-white'
                                  : 'bg-[#1B1F2B] border-white/10 hover:border-white/25 hover:bg-[#202534]'
                            }`}
                          >
                            <div>
                              <span
                                className={`block h-[2.5px] w-7 rounded-full mb-2 ${accent.barBg}`}
                                aria-hidden="true"
                              />
                              <div className="flex items-center justify-between gap-2 font-mono text-[10px] tabular-nums">
                                <span className={accent.text}>{block.sprint}</span>
                                <span
                                  className={
                                    isLight ? 'text-slate-400' : 'text-slate-500'
                                  }
                                >
                                  {block.weeks}
                                </span>
                              </div>
                            </div>

                            <div
                              className={`mt-1.5 text-xs font-semibold leading-snug truncate ${
                                isLight ? 'text-slate-900' : 'text-slate-100'
                              }`}
                            >
                              {block.title}
                            </div>

                            <div
                              className={`mt-1.5 font-mono text-[10px] tabular-nums ${statusColor}`}
                            >
                              {block.status}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Selected Sprint Inspection Footer */}
                  <div
                    className={`px-5 py-3.5 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs ${
                      isLight
                        ? 'bg-[#F8FAFC] border-slate-200/80'
                        : 'bg-[#10131B] border-white/10'
                    }`}
                  >
                    <div className="min-w-0">
                      <span className={`font-mono tabular-nums ${activeSprintAccent.text}`}>
                        {activeSprintObj.sprint} · {activeSprintObj.weeks}
                      </span>
                      <span
                        className={`mx-2 ${
                          isLight ? 'text-slate-300' : 'text-slate-600'
                        }`}
                        aria-hidden="true"
                      >
                        /
                      </span>
                      <span
                        className={`font-medium ${
                          isLight ? 'text-slate-800' : 'text-slate-200'
                        }`}
                      >
                        {activeSprintObj.deliverables}
                      </span>
                    </div>
                    <span
                      className={`font-mono text-[11px] tabular-nums shrink-0 ${
                        isLight ? 'text-slate-500' : 'text-slate-400'
                      }`}
                    >
                      {activeSprintObj.tasksCount} · {activeSprintObj.status}
                    </span>
                  </div>
                </div>
              )}

              {activeStep === '03' && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-12">
                    {/* Main App Preview Canvas: 3 KPIs + Performance Chart */}
                    <div className="md:col-span-7 p-4 sm:p-5 flex flex-col justify-between gap-4">
                      {/* Top Row: Uptime, Active Users, Releases */}
                      <div className="grid grid-cols-3 gap-2.5">
                        {BUILD_METRICS.map((metric) => {
                          const Icon = metric.icon;
                          const isSelected = selectedBuildMetric === metric.id;
                          const accent = accents[metric.color];
                          return (
                            <button
                              key={metric.id}
                              type="button"
                              onClick={() => setSelectedBuildMetric(metric.id)}
                              className={`text-left rounded-xl p-3 border transition-all duration-150 cursor-pointer ${
                                isSelected
                                  ? accent.cardActive
                                  : isLight
                                    ? 'bg-[#F8FAFC] border-slate-200 hover:border-slate-300 hover:bg-white'
                                    : 'bg-[#1B1F2B] border-white/10 hover:border-white/25'
                              }`}
                            >
                              <div className="flex items-center justify-between gap-1">
                                <span
                                  className={`text-[10px] font-medium truncate ${
                                    isLight ? 'text-slate-500' : 'text-slate-400'
                                  }`}
                                >
                                  {metric.label}
                                </span>
                                <Icon className={`h-3 w-3 shrink-0 ${accent.text}`} />
                              </div>
                              <div
                                className={`mt-1.5 text-base sm:text-lg font-bold tracking-tight tabular-nums ${
                                  isLight ? 'text-slate-900' : 'text-slate-100'
                                }`}
                              >
                                {metric.value}
                              </div>
                              <div
                                className={`mt-0.5 font-mono text-[9.5px] truncate tabular-nums ${accent.text}`}
                              >
                                {metric.delta}
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Bottom Block: Performance Chart */}
                      <div
                        className={`rounded-xl border p-4 flex-1 flex flex-col justify-between ${
                          isLight
                            ? 'bg-[#F8FAFC] border-slate-200/90'
                            : 'bg-[#1B1F2B] border-white/10'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <div>
                            <div
                              className={`text-xs font-semibold ${
                                isLight ? 'text-slate-900' : 'text-slate-100'
                              }`}
                            >
                              Performance Chart
                            </div>
                            <div
                              className={`text-[10px] mt-0.5 ${
                                isLight ? 'text-slate-500' : 'text-slate-400'
                              }`}
                            >
                              {activeMetricObj.label} across sprint demos
                            </div>
                          </div>
                          <span
                            className={`font-mono text-[10px] tabular-nums ${activeMetricAccent.text}`}
                          >
                            {activeMetricObj.value}
                          </span>
                        </div>

                        <div className="relative h-28 w-full">
                          <svg
                            viewBox="0 0 310 96"
                            className="h-full w-full overflow-visible"
                            fill="none"
                          >
                            <defs>
                              <linearGradient
                                id={chartGradientId}
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  offset="0%"
                                  stopColor={activeMetricObj.chartStroke}
                                  stopOpacity={isLight ? '0.22' : '0.28'}
                                />
                                <stop
                                  offset="100%"
                                  stopColor={activeMetricObj.chartStroke}
                                  stopOpacity="0.01"
                                />
                              </linearGradient>
                            </defs>
                            <line
                              x1="0"
                              y1="20"
                              x2="310"
                              y2="20"
                              stroke={isLight ? '#E2E8F0' : '#262B38'}
                              strokeWidth="1"
                            />
                            <line
                              x1="0"
                              y1="48"
                              x2="310"
                              y2="48"
                              stroke={isLight ? '#E2E8F0' : '#262B38'}
                              strokeWidth="1"
                            />
                            <line
                              x1="0"
                              y1="76"
                              x2="310"
                              y2="76"
                              stroke={isLight ? '#E2E8F0' : '#262B38'}
                              strokeWidth="1"
                            />
                            <path
                              d={activeMetricObj.chartAreaPath}
                              fill={`url(#${chartGradientId})`}
                            />
                            <path
                              d={activeMetricObj.chartPath}
                              stroke={activeMetricObj.chartStroke}
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <circle
                              cx="224"
                              cy="19"
                              r="3.5"
                              fill={activeMetricObj.chartStroke}
                              stroke={isLight ? '#FFFFFF' : '#1B1F2B'}
                              strokeWidth="1.5"
                            />
                          </svg>
                        </div>

                        <div
                          className={`mt-2 flex items-center justify-between font-mono text-[10px] tabular-nums ${
                            isLight ? 'text-slate-400' : 'text-slate-500'
                          }`}
                        >
                          <span>Sprint 1</span>
                          <span>Sprint 2</span>
                          <span>Sprint 3</span>
                          <span>Sprint 4</span>
                          <span>Sprint 5</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Sidebar: Developer Tools Code Panel */}
                    <div
                      className={`md:col-span-5 border-t md:border-t-0 md:border-l flex flex-col justify-between ${
                        isLight
                          ? 'bg-[#F8FAFC] border-slate-200/80'
                          : 'bg-[#0D1017] border-white/10'
                      }`}
                    >
                      <div>
                        {/* DevTools Header & File Tabs */}
                        <div
                          className={`px-3.5 py-2.5 border-b flex items-center justify-between gap-2 ${
                            isLight ? 'border-slate-200/80' : 'border-white/10'
                          }`}
                        >
                          <div
                            className={`flex items-center gap-1.5 text-[10px] font-mono ${
                              isLight ? 'text-slate-600' : 'text-slate-400'
                            }`}
                          >
                            <Code2
                              className={`h-3.5 w-3.5 ${
                                isLight ? 'text-[#0284C7]' : 'text-[#38BDF8]'
                              }`}
                            />
                            <span>DevTools</span>
                          </div>
                          <div
                            className={`flex items-center gap-1 p-0.5 rounded-md border ${
                              isLight
                                ? 'bg-slate-200/70 border-slate-200'
                                : 'bg-[#161A24] border-white/10'
                            }`}
                          >
                            <button
                              type="button"
                              onClick={() => setDevToolTab('component')}
                              className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer whitespace-nowrap ${
                                devToolTab === 'component'
                                  ? isLight
                                    ? 'bg-white text-slate-900 shadow-xs'
                                    : 'bg-[#23293A] text-slate-100'
                                  : isLight
                                    ? 'text-slate-600 hover:text-slate-900'
                                    : 'text-slate-400 hover:text-slate-200'
                              }`}
                            >
                              AppView.tsx
                            </button>
                            <button
                              type="button"
                              onClick={() => setDevToolTab('metrics')}
                              className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer whitespace-nowrap ${
                                devToolTab === 'metrics'
                                  ? isLight
                                    ? 'bg-white text-slate-900 shadow-xs'
                                    : 'bg-[#23293A] text-slate-100'
                                  : isLight
                                    ? 'text-slate-600 hover:text-slate-900'
                                    : 'text-slate-400 hover:text-slate-200'
                              }`}
                            >
                              metrics.ts
                            </button>
                          </div>
                        </div>

                        {/* Syntax-Highlighted Code Block */}
                        <div
                          className={`p-3.5 font-mono text-[10px] leading-[1.65] overflow-x-auto ${
                            isLight ? 'text-slate-700' : 'text-slate-300'
                          }`}
                        >
                          {devToolTab === 'component' ? (
                            <div className="space-y-0.5 whitespace-nowrap">
                              <div className="flex gap-2.5">
                                <span
                                  className={`select-none w-3 text-right ${
                                    isLight ? 'text-slate-400' : 'text-slate-600'
                                  }`}
                                >
                                  1
                                </span>
                                <span>
                                  <span
                                    className={
                                      isLight ? 'text-[#0284C7]' : 'text-[#38BDF8]'
                                    }
                                  >
                                    export function
                                  </span>{' '}
                                  <span
                                    className={
                                      isLight ? 'text-[#B45309]' : 'text-[#FBBF24]'
                                    }
                                  >
                                    Dashboard
                                  </span>
                                  <span
                                    className={
                                      isLight ? 'text-slate-500' : 'text-slate-400'
                                    }
                                  >
                                    () {'{'}
                                  </span>
                                </span>
                              </div>
                              <div className="flex gap-2.5">
                                <span
                                  className={`select-none w-3 text-right ${
                                    isLight ? 'text-slate-400' : 'text-slate-600'
                                  }`}
                                >
                                  2
                                </span>
                                <span className="pl-2">
                                  <span
                                    className={
                                      isLight ? 'text-[#0284C7]' : 'text-[#38BDF8]'
                                    }
                                  >
                                    const
                                  </span>{' '}
                                  <span
                                    className={
                                      isLight ? 'text-slate-900' : 'text-slate-200'
                                    }
                                  >
                                    stats
                                  </span>{' '}
                                  <span
                                    className={
                                      isLight ? 'text-slate-500' : 'text-slate-400'
                                    }
                                  >
                                    =
                                  </span>{' '}
                                  <span
                                    className={
                                      isLight ? 'text-[#1D4ED8]' : 'text-[#60A5FA]'
                                    }
                                  >
                                    useMetrics
                                  </span>
                                  <span
                                    className={
                                      isLight ? 'text-slate-500' : 'text-slate-400'
                                    }
                                  >
                                    ();
                                  </span>
                                </span>
                              </div>
                              <div className="flex gap-2.5">
                                <span
                                  className={`select-none w-3 text-right ${
                                    isLight ? 'text-slate-400' : 'text-slate-600'
                                  }`}
                                >
                                  3
                                </span>
                                <span className="pl-2">
                                  <span
                                    className={
                                      isLight ? 'text-[#0284C7]' : 'text-[#38BDF8]'
                                    }
                                  >
                                    return
                                  </span>{' '}
                                  <span
                                    className={
                                      isLight ? 'text-slate-500' : 'text-slate-400'
                                    }
                                  >
                                    (
                                  </span>
                                </span>
                              </div>
                              <div className="flex gap-2.5">
                                <span
                                  className={`select-none w-3 text-right ${
                                    isLight ? 'text-slate-400' : 'text-slate-600'
                                  }`}
                                >
                                  4
                                </span>
                                <span
                                  className={`pl-3 ${
                                    isLight ? 'text-slate-500' : 'text-slate-400'
                                  }`}
                                >
                                  {'<'}
                                  <span
                                    className={
                                      isLight ? 'text-[#BE185D]' : 'text-[#F4729B]'
                                    }
                                  >
                                    Workspace
                                  </span>
                                  <span>&gt;</span>
                                </span>
                              </div>
                              <div className="flex gap-2.5">
                                <span
                                  className={`select-none w-3 text-right ${
                                    isLight ? 'text-slate-400' : 'text-slate-600'
                                  }`}
                                >
                                  5
                                </span>
                                <span
                                  className={`pl-5 ${
                                    isLight ? 'text-slate-500' : 'text-slate-400'
                                  }`}
                                >
                                  {'<'}
                                  <span
                                    className={
                                      isLight ? 'text-[#BE185D]' : 'text-[#F4729B]'
                                    }
                                  >
                                    Metric
                                  </span>{' '}
                                  <span
                                    className={
                                      isLight ? 'text-[#B45309]' : 'text-[#FBBF24]'
                                    }
                                  >
                                    id
                                  </span>
                                  =
                                  <span
                                    className={
                                      isLight ? 'text-[#15803D]' : 'text-[#4ADE80]'
                                    }
                                  >
                                    &quot;{activeMetricObj.id}&quot;
                                  </span>
                                  {' />'}
                                </span>
                              </div>
                              <div className="flex gap-2.5">
                                <span
                                  className={`select-none w-3 text-right ${
                                    isLight ? 'text-slate-400' : 'text-slate-600'
                                  }`}
                                >
                                  6
                                </span>
                                <span
                                  className={`pl-5 ${
                                    isLight ? 'text-slate-500' : 'text-slate-400'
                                  }`}
                                >
                                  {'<'}
                                  <span
                                    className={
                                      isLight ? 'text-[#BE185D]' : 'text-[#F4729B]'
                                    }
                                  >
                                    Metric
                                  </span>{' '}
                                  <span
                                    className={
                                      isLight ? 'text-[#B45309]' : 'text-[#FBBF24]'
                                    }
                                  >
                                    val
                                  </span>
                                  =
                                  <span
                                    className={
                                      isLight ? 'text-[#15803D]' : 'text-[#4ADE80]'
                                    }
                                  >
                                    &quot;{activeMetricObj.value}&quot;
                                  </span>
                                  {' />'}
                                </span>
                              </div>
                              <div className="flex gap-2.5">
                                <span
                                  className={`select-none w-3 text-right ${
                                    isLight ? 'text-slate-400' : 'text-slate-600'
                                  }`}
                                >
                                  7
                                </span>
                                <span
                                  className={`pl-5 ${
                                    isLight ? 'text-slate-500' : 'text-slate-400'
                                  }`}
                                >
                                  {'<'}
                                  <span
                                    className={
                                      isLight ? 'text-[#BE185D]' : 'text-[#F4729B]'
                                    }
                                  >
                                    PerfChart
                                  </span>{' '}
                                  <span
                                    className={
                                      isLight ? 'text-[#B45309]' : 'text-[#FBBF24]'
                                    }
                                  >
                                    data
                                  </span>
                                  =
                                  <span
                                    className={
                                      isLight ? 'text-[#0284C7]' : 'text-[#38BDF8]'
                                    }
                                  >
                                    {'{stats}'}
                                  </span>
                                  {' />'}
                                </span>
                              </div>
                              <div className="flex gap-2.5">
                                <span
                                  className={`select-none w-3 text-right ${
                                    isLight ? 'text-slate-400' : 'text-slate-600'
                                  }`}
                                >
                                  8
                                </span>
                                <span
                                  className={`pl-3 ${
                                    isLight ? 'text-slate-500' : 'text-slate-400'
                                  }`}
                                >
                                  {'</'}
                                  <span
                                    className={
                                      isLight ? 'text-[#BE185D]' : 'text-[#F4729B]'
                                    }
                                  >
                                    Workspace
                                  </span>
                                  <span>&gt;</span>
                                </span>
                              </div>
                              <div className="flex gap-2.5">
                                <span
                                  className={`select-none w-3 text-right ${
                                    isLight ? 'text-slate-400' : 'text-slate-600'
                                  }`}
                                >
                                  9
                                </span>
                                <span
                                  className={`pl-2 ${
                                    isLight ? 'text-slate-500' : 'text-slate-400'
                                  }`}
                                >
                                  );
                                </span>
                              </div>
                              <div className="flex gap-2.5">
                                <span
                                  className={`select-none w-3 text-right ${
                                    isLight ? 'text-slate-400' : 'text-slate-600'
                                  }`}
                                >
                                  10
                                </span>
                                <span
                                  className={
                                    isLight ? 'text-slate-500' : 'text-slate-400'
                                  }
                                >
                                  {'}'}
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-0.5 whitespace-nowrap">
                              <div className="flex gap-2.5">
                                <span
                                  className={`select-none w-3 text-right ${
                                    isLight ? 'text-slate-400' : 'text-slate-600'
                                  }`}
                                >
                                  1
                                </span>
                                <span>
                                  <span
                                    className={
                                      isLight ? 'text-[#0284C7]' : 'text-[#38BDF8]'
                                    }
                                  >
                                    export async function
                                  </span>{' '}
                                  <span
                                    className={
                                      isLight ? 'text-[#B45309]' : 'text-[#FBBF24]'
                                    }
                                  >
                                    getStats
                                  </span>
                                  <span
                                    className={
                                      isLight ? 'text-slate-500' : 'text-slate-400'
                                    }
                                  >
                                    () {'{'}
                                  </span>
                                </span>
                              </div>
                              <div className="flex gap-2.5">
                                <span
                                  className={`select-none w-3 text-right ${
                                    isLight ? 'text-slate-400' : 'text-slate-600'
                                  }`}
                                >
                                  2
                                </span>
                                <span className="pl-2">
                                  <span
                                    className={
                                      isLight ? 'text-[#0284C7]' : 'text-[#38BDF8]'
                                    }
                                  >
                                    const
                                  </span>{' '}
                                  <span
                                    className={
                                      isLight ? 'text-slate-900' : 'text-slate-200'
                                    }
                                  >
                                    res
                                  </span>{' '}
                                  <span
                                    className={
                                      isLight ? 'text-slate-500' : 'text-slate-400'
                                    }
                                  >
                                    =
                                  </span>{' '}
                                  <span
                                    className={
                                      isLight ? 'text-[#0284C7]' : 'text-[#38BDF8]'
                                    }
                                  >
                                    await
                                  </span>{' '}
                                  <span
                                    className={
                                      isLight ? 'text-[#1D4ED8]' : 'text-[#60A5FA]'
                                    }
                                  >
                                    db.query
                                  </span>
                                  <span
                                    className={
                                      isLight ? 'text-slate-500' : 'text-slate-400'
                                    }
                                  >
                                    (
                                  </span>
                                </span>
                              </div>
                              <div className="flex gap-2.5">
                                <span
                                  className={`select-none w-3 text-right ${
                                    isLight ? 'text-slate-400' : 'text-slate-600'
                                  }`}
                                >
                                  3
                                </span>
                                <span className="pl-4">
                                  <span
                                    className={
                                      isLight ? 'text-[#15803D]' : 'text-[#4ADE80]'
                                    }
                                  >
                                    &apos;SELECT * FROM sprint_kpi&apos;
                                  </span>
                                </span>
                              </div>
                              <div className="flex gap-2.5">
                                <span
                                  className={`select-none w-3 text-right ${
                                    isLight ? 'text-slate-400' : 'text-slate-600'
                                  }`}
                                >
                                  4
                                </span>
                                <span
                                  className={`pl-2 ${
                                    isLight ? 'text-slate-500' : 'text-slate-400'
                                  }`}
                                >
                                  );
                                </span>
                              </div>
                              <div className="flex gap-2.5">
                                <span
                                  className={`select-none w-3 text-right ${
                                    isLight ? 'text-slate-400' : 'text-slate-600'
                                  }`}
                                >
                                  5
                                </span>
                                <span className="pl-2">
                                  <span
                                    className={
                                      isLight ? 'text-[#0284C7]' : 'text-[#38BDF8]'
                                    }
                                  >
                                    return
                                  </span>{' '}
                                  <span
                                    className={
                                      isLight ? 'text-slate-500' : 'text-slate-400'
                                    }
                                  >
                                    {'{'}
                                  </span>
                                </span>
                              </div>
                              <div className="flex gap-2.5">
                                <span
                                  className={`select-none w-3 text-right ${
                                    isLight ? 'text-slate-400' : 'text-slate-600'
                                  }`}
                                >
                                  6
                                </span>
                                <span className="pl-4">
                                  <span
                                    className={
                                      isLight ? 'text-[#BE185D]' : 'text-[#F4729B]'
                                    }
                                  >
                                    uptime
                                  </span>
                                  <span
                                    className={
                                      isLight ? 'text-slate-500' : 'text-slate-400'
                                    }
                                  >
                                    :
                                  </span>{' '}
                                  <span
                                    className={
                                      isLight ? 'text-[#15803D]' : 'text-[#4ADE80]'
                                    }
                                  >
                                    &apos;99.98%&apos;
                                  </span>
                                  <span
                                    className={
                                      isLight ? 'text-slate-500' : 'text-slate-400'
                                    }
                                  >
                                    ,
                                  </span>
                                </span>
                              </div>
                              <div className="flex gap-2.5">
                                <span
                                  className={`select-none w-3 text-right ${
                                    isLight ? 'text-slate-400' : 'text-slate-600'
                                  }`}
                                >
                                  7
                                </span>
                                <span className="pl-4">
                                  <span
                                    className={
                                      isLight ? 'text-[#BE185D]' : 'text-[#F4729B]'
                                    }
                                  >
                                    users
                                  </span>
                                  <span
                                    className={
                                      isLight ? 'text-slate-500' : 'text-slate-400'
                                    }
                                  >
                                    :
                                  </span>{' '}
                                  <span
                                    className={
                                      isLight ? 'text-[#B45309]' : 'text-[#FBBF24]'
                                    }
                                  >
                                    1420
                                  </span>
                                  <span
                                    className={
                                      isLight ? 'text-slate-500' : 'text-slate-400'
                                    }
                                  >
                                    ,
                                  </span>
                                </span>
                              </div>
                              <div className="flex gap-2.5">
                                <span
                                  className={`select-none w-3 text-right ${
                                    isLight ? 'text-slate-400' : 'text-slate-600'
                                  }`}
                                >
                                  8
                                </span>
                                <span className="pl-4">
                                  <span
                                    className={
                                      isLight ? 'text-[#BE185D]' : 'text-[#F4729B]'
                                    }
                                  >
                                    releases
                                  </span>
                                  <span
                                    className={
                                      isLight ? 'text-slate-500' : 'text-slate-400'
                                    }
                                  >
                                    :
                                  </span>{' '}
                                  <span
                                    className={
                                      isLight ? 'text-[#B45309]' : 'text-[#FBBF24]'
                                    }
                                  >
                                    14
                                  </span>
                                </span>
                              </div>
                              <div className="flex gap-2.5">
                                <span
                                  className={`select-none w-3 text-right ${
                                    isLight ? 'text-slate-400' : 'text-slate-600'
                                  }`}
                                >
                                  9
                                </span>
                                <span
                                  className={`pl-2 ${
                                    isLight ? 'text-slate-500' : 'text-slate-400'
                                  }`}
                                >
                                  {'};'}
                                </span>
                              </div>
                              <div className="flex gap-2.5">
                                <span
                                  className={`select-none w-3 text-right ${
                                    isLight ? 'text-slate-400' : 'text-slate-600'
                                  }`}
                                >
                                  10
                                </span>
                                <span
                                  className={
                                    isLight ? 'text-slate-500' : 'text-slate-400'
                                  }
                                >
                                  {'}'}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* DevTools Footer Bar */}
                      <div
                        className={`px-3.5 py-2.5 border-t flex items-center justify-between font-mono text-[10px] ${
                          isLight
                            ? 'bg-[#F1F5F9] border-slate-200/80 text-slate-500'
                            : 'bg-[#0A0C12] border-white/10 text-slate-500'
                        }`}
                      >
                        <span>
                          {devToolTab === 'component'
                            ? 'src/AppView.tsx'
                            : 'src/api/metrics.ts'}
                        </span>
                        <span className={isLight ? 'text-[#15803D]' : 'text-[#4ADE80]'}>
                          TypeScript · Strict
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === '04' && (
                <div>
                  <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
                    {/* Left Panel: Architecture Diagram */}
                    <div
                      className={`md:col-span-6 rounded-xl border p-4 flex flex-col justify-between min-h-[296px] ${
                        isLight
                          ? 'bg-[#F8FAFC] border-slate-200/90'
                          : 'bg-[#10131B] border-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px]">
                        <span
                          className={`font-semibold ${
                            isLight ? 'text-slate-800' : 'text-slate-200'
                          }`}
                        >
                          Architecture Diagram
                        </span>
                        <span
                          className={`font-mono text-[10px] ${
                            isLight ? 'text-slate-500' : 'text-slate-400'
                          }`}
                        >
                          Live data flow
                        </span>
                      </div>

                      {/* Hub & Spoke Diagram Canvas */}
                      <div className="relative my-3 flex-1 min-h-[205px] flex items-center justify-center">
                        <svg
                          viewBox="0 0 260 190"
                          className="absolute inset-0 h-full w-full"
                          fill="none"
                        >
                          {/* Top branches -> API tools (Xero, MYOB, Shopify, CRM) */}
                          <path
                            d="M130 95 C130 58, 65 58, 52 34"
                            stroke={
                              selectedIntegrationLayer === 'api'
                                ? '#E14D79'
                                : isLight
                                  ? '#CBD5E1'
                                  : '#2A3040'
                            }
                            strokeWidth={selectedIntegrationLayer === 'api' ? '1.75' : '1.2'}
                            strokeDasharray={
                              selectedIntegrationLayer === 'api' ? undefined : '3 4'
                            }
                          />
                          <path
                            d="M130 95 C130 58, 195 58, 208 34"
                            stroke={
                              selectedIntegrationLayer === 'api'
                                ? '#F59E0B'
                                : isLight
                                  ? '#CBD5E1'
                                  : '#2A3040'
                            }
                            strokeWidth={selectedIntegrationLayer === 'api' ? '1.75' : '1.2'}
                            strokeDasharray={
                              selectedIntegrationLayer === 'api' ? undefined : '3 4'
                            }
                          />
                          {/* Bottom-left branch -> Database */}
                          <path
                            d="M130 95 C130 132, 65 132, 52 156"
                            stroke={
                              selectedIntegrationLayer === 'database'
                                ? isLight
                                  ? '#0284C7'
                                  : '#38BDF8'
                                : isLight
                                  ? '#CBD5E1'
                                  : '#2A3040'
                            }
                            strokeWidth={
                              selectedIntegrationLayer === 'database' ? '1.75' : '1.2'
                            }
                            strokeDasharray={
                              selectedIntegrationLayer === 'database' ? undefined : '3 4'
                            }
                          />
                          {/* Bottom-right branch -> Cloud Hosting */}
                          <path
                            d="M130 95 C130 132, 195 132, 208 156"
                            stroke={
                              selectedIntegrationLayer === 'hosting'
                                ? isLight
                                  ? '#16A34A'
                                  : '#22C55E'
                                : isLight
                                  ? '#CBD5E1'
                                  : '#2A3040'
                            }
                            strokeWidth={
                              selectedIntegrationLayer === 'hosting' ? '1.75' : '1.2'
                            }
                            strokeDasharray={
                              selectedIntegrationLayer === 'hosting' ? undefined : '3 4'
                            }
                          />
                        </svg>

                        {/* Top-Left Spoke: Xero & MYOB */}
                        <button
                          type="button"
                          onClick={() => setSelectedIntegrationLayer('api')}
                          className={`absolute top-1 left-1 rounded-lg px-2.5 py-1.5 border text-left transition-all cursor-pointer ${
                            selectedIntegrationLayer === 'api'
                              ? isLight
                                ? 'bg-white border-[#E14D79]/75 shadow-xs'
                                : 'bg-[#1D2230] border-[#E14D79]/65'
                              : isLight
                                ? 'bg-white border-slate-200 hover:border-slate-300'
                                : 'bg-[#171B25] border-white/10 hover:border-white/25'
                          }`}
                        >
                          <div
                            className={`font-mono text-[10px] font-medium ${
                              isLight ? 'text-[#BE185D]' : 'text-[#F4729B]'
                            }`}
                          >
                            Xero · MYOB
                          </div>
                          <div
                            className={`text-[9px] ${
                              isLight ? 'text-slate-500' : 'text-slate-400'
                            }`}
                          >
                            Accounting API
                          </div>
                        </button>

                        {/* Top-Right Spoke: Shopify & CRM */}
                        <button
                          type="button"
                          onClick={() => setSelectedIntegrationLayer('api')}
                          className={`absolute top-1 right-1 rounded-lg px-2.5 py-1.5 border text-left transition-all cursor-pointer ${
                            selectedIntegrationLayer === 'api'
                              ? isLight
                                ? 'bg-white border-[#F59E0B]/80 shadow-xs'
                                : 'bg-[#1D2230] border-[#F59E0B]/65'
                              : isLight
                                ? 'bg-white border-slate-200 hover:border-slate-300'
                                : 'bg-[#171B25] border-white/10 hover:border-white/25'
                          }`}
                        >
                          <div
                            className={`font-mono text-[10px] font-medium ${
                              isLight ? 'text-[#B45309]' : 'text-[#FBBF24]'
                            }`}
                          >
                            Shopify · CRM
                          </div>
                          <div
                            className={`text-[9px] ${
                              isLight ? 'text-slate-500' : 'text-slate-400'
                            }`}
                          >
                            Orders &amp; Leads
                          </div>
                        </button>

                        {/* Center Hub: Your Custom App */}
                        <div
                          className={`relative z-10 rounded-xl px-3.5 py-2.5 text-center border ${
                            isLight
                              ? 'bg-white border-[#3B82F6]/55 shadow-[0_12px_28px_-10px_rgba(59,130,246,0.22)]'
                              : 'bg-[#1D2230] border-[#3B82F6]/60 shadow-[0_12px_28px_-10px_rgba(59,130,246,0.45)]'
                          }`}
                        >
                          <div className="flex items-center justify-center gap-1.5">
                            <Server
                              className={`h-3.5 w-3.5 ${
                                isLight ? 'text-[#2563EB]' : 'text-[#60A5FA]'
                              }`}
                            />
                            <span
                              className={`text-xs font-semibold ${
                                isLight ? 'text-slate-900' : 'text-slate-100'
                              }`}
                            >
                              Custom App Core
                            </span>
                          </div>
                          <div
                            className={`mt-0.5 font-mono text-[9.5px] ${
                              isLight ? 'text-slate-500' : 'text-slate-400'
                            }`}
                          >
                            REST · Webhooks · Auth
                          </div>
                        </div>

                        {/* Bottom-Left Spoke: PostgreSQL */}
                        <button
                          type="button"
                          onClick={() => setSelectedIntegrationLayer('database')}
                          className={`absolute bottom-1 left-1 rounded-lg px-2.5 py-1.5 border text-left transition-all cursor-pointer ${
                            selectedIntegrationLayer === 'database'
                              ? isLight
                                ? 'bg-white border-[#0284C7]/75 shadow-xs'
                                : 'bg-[#1D2230] border-[#38BDF8]/65'
                              : isLight
                                ? 'bg-white border-slate-200 hover:border-slate-300'
                                : 'bg-[#171B25] border-white/10 hover:border-white/25'
                          }`}
                        >
                          <div
                            className={`font-mono text-[10px] font-medium ${
                              isLight ? 'text-[#0369A1]' : 'text-[#38BDF8]'
                            }`}
                          >
                            PostgreSQL
                          </div>
                          <div
                            className={`text-[9px] ${
                              isLight ? 'text-slate-500' : 'text-slate-400'
                            }`}
                          >
                            Primary Data
                          </div>
                        </button>

                        {/* Bottom-Right Spoke: Cloud Hosting */}
                        <button
                          type="button"
                          onClick={() => setSelectedIntegrationLayer('hosting')}
                          className={`absolute bottom-1 right-1 rounded-lg px-2.5 py-1.5 border text-left transition-all cursor-pointer ${
                            selectedIntegrationLayer === 'hosting'
                              ? isLight
                                ? 'bg-white border-[#16A34A]/75 shadow-xs'
                                : 'bg-[#1D2230] border-[#22C55E]/65'
                              : isLight
                                ? 'bg-white border-slate-200 hover:border-slate-300'
                                : 'bg-[#171B25] border-white/10 hover:border-white/25'
                          }`}
                        >
                          <div
                            className={`font-mono text-[10px] font-medium ${
                              isLight ? 'text-[#15803D]' : 'text-[#4ADE80]'
                            }`}
                          >
                            AWS Sydney
                          </div>
                          <div
                            className={`text-[9px] ${
                              isLight ? 'text-slate-500' : 'text-slate-400'
                            }`}
                          >
                            ap-southeast-2
                          </div>
                        </button>
                      </div>

                      <div
                        className={`pt-2.5 border-t flex items-center justify-between text-[10px] font-mono ${
                          isLight
                            ? 'border-slate-200/80 text-slate-500'
                            : 'border-white/10 text-slate-400'
                        }`}
                      >
                        <span>Encrypted TLS 1.3</span>
                        <span className={activeLayerAccent.text}>
                          {activeLayerObj.title} active
                        </span>
                      </div>
                    </div>

                    {/* Right Stack: 3 Panels (API Integrations, Database, Cloud Hosting) */}
                    <div className="md:col-span-6 flex flex-col justify-between gap-3">
                      {INTEGRATION_LAYERS.map((layer) => {
                        const Icon = layer.icon;
                        const isSelected = selectedIntegrationLayer === layer.id;
                        const accent = accents[layer.color];
                        return (
                          <button
                            key={layer.id}
                            type="button"
                            onClick={() => setSelectedIntegrationLayer(layer.id)}
                            className={`w-full text-left rounded-xl p-3.5 border transition-all duration-150 cursor-pointer flex-1 flex flex-col justify-between ${
                              isSelected
                                ? accent.cardActive
                                : isLight
                                  ? 'bg-[#F8FAFC] border-slate-200 hover:border-slate-300 hover:bg-white'
                                  : 'bg-[#1B1F2B] border-white/10 hover:border-white/25'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex items-center gap-2.5 min-w-0">
                                <span
                                  className={`h-7 w-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                    isSelected ? accent.iconActive : accent.iconIdle
                                  }`}
                                >
                                  <Icon className="h-3.5 w-3.5" />
                                </span>
                                <div className="min-w-0">
                                  <div
                                    className={`text-xs font-semibold truncate ${
                                      isLight ? 'text-slate-900' : 'text-slate-100'
                                    }`}
                                  >
                                    {layer.title}
                                  </div>
                                  <div
                                    className={`font-mono text-[10px] truncate ${
                                      isLight ? 'text-slate-500' : 'text-slate-400'
                                    }`}
                                  >
                                    {layer.subtitle}
                                  </div>
                                </div>
                              </div>
                              <span
                                className={`font-mono text-[10px] tabular-nums shrink-0 ${accent.text}`}
                              >
                                {layer.metric}
                              </span>
                            </div>

                            <div
                              className={`mt-2.5 pt-2 border-t flex flex-wrap items-center gap-x-3 gap-y-1 text-[10.5px] ${
                                isLight
                                  ? 'border-slate-200/80 text-slate-600'
                                  : 'border-white/[0.06] text-slate-400'
                              }`}
                            >
                              <span>{layer.items[0]}</span>
                              <span
                                aria-hidden="true"
                                className={isLight ? 'text-slate-300' : 'text-slate-600'}
                              >
                                ·
                              </span>
                              <span>{layer.items[1]}</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Clean Metadata Summary Bar */}
                  <div
                    className={`px-5 py-3 border-t flex flex-wrap items-center justify-between gap-2 text-[11px] ${
                      isLight
                        ? 'bg-[#F8FAFC] border-slate-200/80 text-slate-600'
                        : 'bg-[#10131B] border-white/10 text-slate-400'
                    }`}
                  >
                    <span>
                      Connected stack: Xero · MYOB · Shopify · HubSpot CRM · AWS Sydney
                    </span>
                    <span
                      className={`font-mono tabular-nums ${
                        isLight ? 'text-[#1D4ED8]' : 'text-[#60A5FA]'
                      }`}
                    >
                      AU data residency
                    </span>
                  </div>
                </div>
              )}

              {activeStep !== '01' &&
                activeStep !== '02' &&
                activeStep !== '03' &&
                activeStep !== '04' && (
                  <div className="p-10 sm:p-14 text-center">
                    <p
                      className={`font-mono text-xs tabular-nums ${
                        isLight ? 'text-[#0369A1]' : 'text-[#38BDF8]'
                      }`}
                    >
                      Step {activeStep}
                    </p>
                    <h3
                      className={`mt-2 text-lg font-semibold ${
                        isLight ? 'text-slate-900' : 'text-slate-100'
                      }`}
                    >
                      {PROCESS_STEPS.find((s) => s.number === activeStep)?.title}
                    </h3>
                    <p
                      className={`mt-1.5 text-sm max-w-sm mx-auto ${
                        isLight ? 'text-slate-600' : 'text-slate-400'
                      }`}
                    >
                      Ready for your prompt to populate this step&apos;s preview panel.
                    </p>
                  </div>
                )}
                </motion.div>
              </div>
            </MotionConfig>
          </div>
        </div>
      </div>
    </section>
  );
}
