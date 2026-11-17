import React, { useId, useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';
import {
  ArrowRight,
  BarChart3,
  BellRing,
  Boxes,
  Briefcase,
  Calculator,
  Check,
  ChevronUp,
  Clock,
  Cloud,
  Cpu,
  Database,
  FileCheck2,
  FileClock,
  FileText,
  GitMerge,
  Globe,
  HardDrive,
  KeyRound,
  Lock,
  Mail,
  MessageSquare,
  Package,
  Plus,
  PlusSquare,
  Receipt,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Truck,
  Warehouse,
  Workflow,
  Zap,
} from 'lucide-react';

type StudioColorKey = 'pink' | 'amber' | 'green' | 'sky' | 'blue';

interface LightAccent {
  barBg: string;
  iconIdle: string;
  iconActive: string;
  rowActive: string;
  cardActive: string;
  text: string;
  check: string;
  stroke: string;
}

const LIGHT_ACCENTS: Record<StudioColorKey, LightAccent> = {
  pink: {
    barBg: 'bg-[#E14D79]',
    iconIdle: 'bg-[#E14D79]/12 text-[#BE185D]',
    iconActive: 'bg-[#E14D79] text-white',
    rowActive: 'bg-[#E14D79]/[0.06]',
    cardActive:
      'bg-white border-[#E14D79]/70 shadow-[0_8px_24px_-8px_rgba(225,77,121,0.22)]',
    text: 'text-[#BE185D]',
    check: 'text-[#E14D79]',
    stroke: '#E14D79',
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
    stroke: '#F59E0B',
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
    stroke: '#16A34A',
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
    stroke: '#0284C7',
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
    stroke: '#2563EB',
  },
};

interface SupportStep {
  number: string;
  title: string;
  description: string;
  summary: string;
  color: StudioColorKey;
}

const SUPPORT_STEPS: SupportStep[] = [
  {
    number: '01',
    title: 'Hosting & Monitoring',
    description: 'Secure, Australian-based hosted infrastructure.',
    summary: 'Cloudflare · Supabase AU',
    color: 'amber',
  },
  {
    number: '02',
    title: 'Support & Maintenance',
    description: 'Local support for all fixes, updates and security patches.',
    summary: 'Sydney AEST · GitHub & GitLab',
    color: 'pink',
  },
  {
    number: '03',
    title: 'Analytics & Insights',
    description:
      'Dashboard that shows how your software is used and where to improve.',
    summary: 'Invoices · Jobs · Pipeline',
    color: 'sky',
  },
  {
    number: '04',
    title: 'New Features',
    description: 'Scale your software alongside your business.',
    summary: 'VS Code · Claude AI · Releases',
    color: 'green',
  },
  {
    number: '05',
    title: 'Automation',
    description:
      'Introduce automation on an ongoing basis with fully managed scopes.',
    summary: 'n8n · Claude AI · Sender',
    color: 'blue',
  },
];

interface HostingCard {
  id: 'au-cloud' | 'backups' | 'monitoring';
  title: string;
  subtitle: string;
  items: [string, string];
  status: string;
  nodeTitle: string;
  nodeDetail: string;
  color: StudioColorKey;
  icon: React.ComponentType<{ className?: string }>;
}

const HOSTING_CARDS: HostingCard[] = [
  {
    id: 'au-cloud',
    title: 'Cloudflare Edge & CDN',
    subtitle: 'Sydney · Melbourne · Zero-Trust WAF',
    items: ['11ms AU edge routing', 'Automated DDoS & SSL shield'],
    status: '99.99% SLA',
    nodeTitle: 'Cloudflare Edge',
    nodeDetail: 'Sydney & Melbourne POPs · WAF active',
    color: 'amber',
    icon: Cloud,
  },
  {
    id: 'backups',
    title: 'Supabase AU Database',
    subtitle: 'Sydney ap-southeast-2 · PostgreSQL',
    items: ['15-minute point-in-time recovery', 'Row-level security & AES-256'],
    status: 'Verified',
    nodeTitle: 'Supabase Sydney',
    nodeDetail: 'Managed Postgres · AU residency',
    color: 'green',
    icon: Database,
  },
  {
    id: 'monitoring',
    title: '24/7 Health Monitoring',
    subtitle: 'Cloudflare Analytics · Uptime probes',
    items: ['Sub-60s anomaly alerts', 'Automated TLS & DNS checks'],
    status: 'Watched',
    nodeTitle: 'Uptime Monitor',
    nodeDetail: 'Continuous synthetic probes',
    color: 'sky',
    icon: ShieldCheck,
  },
];

interface ConversationMessage {
  id: string;
  sender: 'customer' | 'team';
  author: string;
  time: string;
  text: string;
}

interface SupportTicket {
  id: string;
  title: string;
  customer: string;
  category: string;
  responseTime: string;
  status: string;
  issueSummary: string;
  toolchain: string;
  color: StudioColorKey;
  messages: ConversationMessage[];
}

const SUPPORT_TICKETS: SupportTicket[] = [
  {
    id: 'quote-chat',
    title: 'Live chat & quote automations',
    customer: 'Jack M. · Parramatta',
    category: 'Automation',
    responseTime: '2m ago',
    status: 'Active',
    issueSummary: 'Add live chat widget and automated emails for unfinished quote requests.',
    toolchain: 'n8n · Sender · Supabase',
    color: 'pink',
    messages: [
      {
        id: 'm1',
        sender: 'customer',
        author: 'Jack M.',
        time: '10:14 AM',
        text: 'hey mate, can u add live chat and email follow ups for unfinished quote requests?',
      },
      {
        id: 'm2',
        sender: 'team',
        author: 'Liam K. · Sydney',
        time: '10:18 AM',
        text: "No worries Jack. I've added live chat to your site and set up an n8n workflow with Sender to email unfinished quote requests after 48 hours.",
      },
      {
        id: 'm3',
        sender: 'customer',
        author: 'Jack M.',
        time: '10:20 AM',
        text: 'nice, can we test it first before it goes live?',
      },
      {
        id: 'm4',
        sender: 'team',
        author: 'Liam K. · Sydney',
        time: '10:21 AM',
        text: 'Too easy. It is live on your test link in GitLab now. Have a look and let me know when to push it live.',
      },
    ],
  },
  {
    id: 'xero-retry',
    title: 'Xero invoice retry queue',
    customer: 'Sarah T. · Brisbane',
    category: 'Fix',
    responseTime: '14m response',
    status: 'Resolved',
    issueSummary: 'Month-end Xero invoice batch timed out at 9am.',
    toolchain: 'VS Code · GitHub Actions',
    color: 'amber',
    messages: [
      {
        id: 'x1',
        sender: 'customer',
        author: 'Sarah T.',
        time: '09:04 AM',
        text: 'hey r u available to check Xero? our 9am invoices timed out',
      },
      {
        id: 'x2',
        sender: 'team',
        author: 'Priya S. · Sydney',
        time: '09:12 AM',
        text: 'On it Sarah. I updated the retry rule in VS Code and re-ran the queue. All 142 invoices are now in Xero.',
      },
      {
        id: 'x3',
        sender: 'customer',
        author: 'Sarah T.',
        time: '09:15 AM',
        text: 'awesome thanks for sorting that fast',
      },
    ],
  },
  {
    id: 'sec-patch',
    title: 'Security & runtime patch',
    customer: 'Dave R. · Melbourne',
    category: 'Security',
    responseTime: 'Proactive',
    status: 'Patched',
    issueSummary: 'Security update applied across production servers.',
    toolchain: 'GitLab CI · Dependabot',
    color: 'green',
    messages: [
      {
        id: 's1',
        sender: 'team',
        author: 'Priya S. · Sydney',
        time: '08:30 AM',
        text: 'Morning Dave. GitHub flagged a security update earlier today, so we tested it in GitLab and pushed it live with no downtime.',
      },
      {
        id: 's2',
        sender: 'customer',
        author: 'Dave R.',
        time: '08:41 AM',
        text: 'cheers priya, didnt notice any issues here',
      },
    ],
  },
  {
    id: 'role-perm',
    title: 'Manager $15k quote sign-off',
    customer: 'Mitch B. · Newcastle',
    category: 'Update',
    responseTime: '22m response',
    status: 'Resolved',
    issueSummary: 'Raise branch manager quote approval limit from $5k to $15k.',
    toolchain: 'Supabase RLS · GitHub',
    color: 'sky',
    messages: [
      {
        id: 'r1',
        sender: 'customer',
        author: 'Mitch B.',
        time: 'Yesterday',
        text: 'hey can u raise manager quote approvals up to $15k for newcastle?',
      },
      {
        id: 'r2',
        sender: 'team',
        author: 'Liam K. · Sydney',
        time: 'Yesterday',
        text: 'All done Mitch. Updated the Supabase rules and pushed it live via GitHub, so your leads can approve up to $15k now.',
      },
    ],
  },
];

interface CrmCaseRow {
  code: string;
  client: string;
  meta: string;
  amount: string;
  status: string;
  tone: StudioColorKey;
}

interface AnalyticsKpi {
  id: 'invoices' | 'jobs' | 'quotes' | 'pipeline';
  label: string;
  value: string;
  delta: string;
  panelTitle: string;
  panelSubtitle: string;
  color: StudioColorKey;
  chartPath: string;
  chartAreaPath: string;
  icon: React.ComponentType<{ className?: string }>;
  rows: CrmCaseRow[];
}

const ANALYTICS_KPIS: AnalyticsKpi[] = [
  {
    id: 'invoices',
    label: 'Invoices Paid',
    value: '$48,200',
    delta: '$9,450 unpaid',
    panelTitle: 'Invoices Paid vs. Unpaid',
    panelSubtitle: '84% collected · 3 awaiting payment',
    color: 'green',
    chartPath:
      'M0 64 C35 58, 72 48, 110 42 C148 36, 188 26, 226 18 C258 13, 286 11, 310 9',
    chartAreaPath:
      'M0 64 C35 58, 72 48, 110 42 C148 36, 188 26, 226 18 C258 13, 286 11, 310 9 L310 88 L0 88 Z',
    icon: Receipt,
    rows: [
      {
        code: 'INV-1042',
        client: 'Bayside Plumbing',
        meta: 'Paid 14 Nov',
        amount: '$4,200',
        status: 'Paid',
        tone: 'green',
      },
      {
        code: 'INV-1045',
        client: 'Northside Electrical',
        meta: 'Due in 3 days',
        amount: '$3,850',
        status: 'Unpaid',
        tone: 'amber',
      },
      {
        code: 'INV-1039',
        client: 'Coastline HVAC',
        meta: 'Overdue 4 days',
        amount: '$1,400',
        status: 'Overdue',
        tone: 'pink',
      },
    ],
  },
  {
    id: 'jobs',
    label: 'Jobs Completed',
    value: '128',
    delta: '14 active in field',
    panelTitle: 'Jobs Completed & Active',
    panelSubtitle: '90% completed on schedule (AEST)',
    color: 'blue',
    chartPath:
      'M0 70 C36 64, 74 54, 112 46 C150 38, 186 24, 224 18 C258 14, 286 10, 310 8',
    chartAreaPath:
      'M0 70 C36 64, 74 54, 112 46 C150 38, 186 24, 224 18 C258 14, 286 10, 310 8 L310 88 L0 88 Z',
    icon: Briefcase,
    rows: [
      {
        code: 'JOB-884',
        client: 'Parramatta Medical Fitout',
        meta: 'Signed off today',
        amount: '6.5 hrs',
        status: 'Completed',
        tone: 'green',
      },
      {
        code: 'JOB-887',
        client: 'Bondi Strata Maintenance',
        meta: 'Crew on site',
        amount: '3.0 hrs',
        status: 'In field',
        tone: 'blue',
      },
      {
        code: 'JOB-889',
        client: 'Alexandria Coldroom',
        meta: '08:00 AEST slot',
        amount: 'Booked',
        status: 'Queued',
        tone: 'sky',
      },
    ],
  },
  {
    id: 'quotes',
    label: 'Unfinished Quotes',
    value: '9 open',
    delta: '$34,600 pending',
    panelTitle: 'Unfinished & Open Quotes',
    panelSubtitle: 'Follow up via Sender to close',
    color: 'amber',
    chartPath:
      'M0 44 C38 38, 74 50, 112 42 C150 34, 188 28, 226 36 C258 42, 286 30, 310 24',
    chartAreaPath:
      'M0 44 C38 38, 74 50, 112 42 C150 34, 188 28, 226 36 C258 42, 286 30, 310 24 L310 88 L0 88 Z',
    icon: FileClock,
    rows: [
      {
        code: 'QT-318',
        client: 'Westfield Retail Tenancy',
        meta: 'Opened 2x by client',
        amount: '$16,400',
        status: 'Awaiting sign',
        tone: 'amber',
      },
      {
        code: 'QT-321',
        client: 'Harbour Strata Group',
        meta: 'Sent 3 days ago',
        amount: '$9,800',
        status: 'Follow up',
        tone: 'pink',
      },
      {
        code: 'QT-324',
        client: 'Metro Warehouse Upgrade',
        meta: 'Draft · 65% scoped',
        amount: '$8,400',
        status: 'Draft',
        tone: 'sky',
      },
    ],
  },
  {
    id: 'pipeline',
    label: 'Active Pipeline',
    value: '$82,800',
    delta: '36 open deals',
    panelTitle: 'CRM Sales & Job Pipeline',
    panelSubtitle: '34% quote-to-paid conversion',
    color: 'pink',
    chartPath:
      'M0 68 C36 60, 74 52, 112 44 C150 34, 188 26, 226 20 C258 15, 286 12, 310 10',
    chartAreaPath:
      'M0 68 C36 60, 74 52, 112 44 C150 34, 188 26, 226 20 C258 15, 286 12, 310 10 L310 88 L0 88 Z',
    icon: BarChart3,
    rows: [
      {
        code: 'STAGE 1',
        client: 'New Web & Phone Enquiries',
        meta: 'Avg 18m response',
        amount: '18 leads',
        status: 'Enquiry',
        tone: 'sky',
      },
      {
        code: 'STAGE 2',
        client: 'Unfinished Quotes Sent',
        meta: '$34.6k open value',
        amount: '9 quotes',
        status: 'Pending',
        tone: 'amber',
      },
      {
        code: 'STAGE 3',
        client: 'Approved & In Progress',
        meta: 'Avg $4.4k per job',
        amount: '14 jobs',
        status: 'Won',
        tone: 'green',
      },
    ],
  },
];

const PIPELINE_STAGES: {
  stage: string;
  count: string;
  value: string;
  widthClass: string;
  color: StudioColorKey;
}[] = [
  { stage: 'New Enquiries', count: '18', value: '$54.0k', widthClass: 'w-[94%]', color: 'sky' },
  { stage: 'Unfinished Quotes', count: '9', value: '$34.6k', widthClass: 'w-[66%]', color: 'amber' },
  { stage: 'Jobs Completed', count: '128', value: '$62.4k', widthClass: 'w-[88%]', color: 'blue' },
  { stage: 'Invoices Paid', count: '32', value: '$48.2k', widthClass: 'w-[82%]', color: 'green' },
  { stage: 'Unpaid Balance', count: '3', value: '$9.4k', widthClass: 'w-[28%]', color: 'pink' },
];

interface FeatureReleaseItem {
  id: 'portal' | 'inventory' | 'quote-ai' | 'bi';
  title: string;
  stage: 'Shipped' | 'In build' | 'Scoped next';
  quarter: string;
  metric: string;
  color: StudioColorKey;
  icon: React.ComponentType<{ className?: string }>;
}

const FEATURE_RELEASES: FeatureReleaseItem[] = [
  {
    id: 'portal',
    title: 'Client Portal',
    stage: 'Shipped',
    quarter: 'Supabase Auth',
    metric: '38% faster sign-off',
    color: 'green',
    icon: KeyRound,
  },
  {
    id: 'inventory',
    title: 'Multi-Site Stock',
    stage: 'In build',
    quarter: 'GitLab CI',
    metric: '2 depots · live sync',
    color: 'blue',
    icon: Boxes,
  },
  {
    id: 'quote-ai',
    title: 'Smart Quoting',
    stage: 'Scoped next',
    quarter: 'Claude AI',
    metric: '2-week build',
    color: 'amber',
    icon: Calculator,
  },
  {
    id: 'bi',
    title: 'Margin Radar',
    stage: 'Scoped next',
    quarter: 'Live BI',
    metric: 'Branch profitability',
    color: 'pink',
    icon: TrendingUp,
  },
];

interface WorkflowNodeMeta {
  id: 'trigger' | 'sourceA' | 'sourceB' | 'merge' | 'process' | 'deliver';
  label: string;
  tool: string;
  detail: string;
}

interface AutomationWorkflow {
  id: string;
  shortTitle: string;
  title: string;
  stack: string;
  cadence: string;
  saved: string;
  color: StudioColorKey;
  nodes: Record<WorkflowNodeMeta['id'], WorkflowNodeMeta>;
}

const AUTOMATION_WORKFLOWS: AutomationWorkflow[] = [
  {
    id: 'invoice-sync',
    shortTitle: 'Xero & Sender',
    title: 'Job Complete to Xero & Sender',
    stack: 'n8n · Sender · Supabase',
    cadence: 'Real-time webhook',
    saved: '18 hrs / mo saved',
    color: 'pink',
    nodes: {
      trigger: {
        id: 'trigger',
        label: 'Webhook on job sign-off',
        tool: 'Supabase Webhook',
        detail: 'Fires immediately when a field technician records client sign-off.',
      },
      sourceA: {
        id: 'sourceA',
        label: 'Fetch job & parts',
        tool: 'Supabase DB',
        detail: 'Pulls approved labour hours, site notes, and parts consumed.',
      },
      sourceB: {
        id: 'sourceB',
        label: 'Check Xero rates',
        tool: 'Xero API',
        detail: 'Verifies GST codes, customer terms, and contract rate card.',
      },
      merge: {
        id: 'merge',
        label: 'Merge & validate',
        tool: 'n8n Merge',
        detail: 'Reconciles quote line items against actuals inside n8n.',
      },
      process: {
        id: 'process',
        label: 'Draft note w/ Claude AI',
        tool: 'Claude AI',
        detail: 'Formats clear, client-friendly completion notes from tech logs.',
      },
      deliver: {
        id: 'deliver',
        label: 'Email receipt via Sender',
        tool: 'Sender',
        detail: 'Creates draft Xero invoice and emails branded receipt via Sender.',
      },
    },
  },
  {
    id: 'lead-triage',
    shortTitle: 'Enquiry Triage',
    title: 'Enquiry Triage & Quote Prep',
    stack: 'n8n · Claude AI · Sender',
    cadence: 'Instant triage',
    saved: '12 hrs / mo saved',
    color: 'amber',
    nodes: {
      trigger: {
        id: 'trigger',
        label: 'New web or email enquiry',
        tool: 'n8n Trigger',
        detail: 'Captures inbound project requests within seconds of submission.',
      },
      sourceA: {
        id: 'sourceA',
        label: 'Verify ABN & region',
        tool: 'AU Registry',
        detail: 'Checks Australian business registration and service state.',
      },
      sourceB: {
        id: 'sourceB',
        label: 'Pull past quotes',
        tool: 'Supabase DB',
        detail: 'Loads comparable historical scopes and delivery timelines.',
      },
      merge: {
        id: 'merge',
        label: 'Merge sources',
        tool: 'n8n Merge',
        detail: 'Combines client context, ABN check, and historical pricing.',
      },
      process: {
        id: 'process',
        label: 'Scope w/ Claude AI',
        tool: 'Claude AI',
        detail: 'Extracts technical requirements and drafts a structured scope summary.',
      },
      deliver: {
        id: 'deliver',
        label: 'Send reply via Sender',
        tool: 'Sender',
        detail: 'Logs CRM deal and dispatches tailored acknowledgement via Sender.',
      },
    },
  },
  {
    id: 'sla-watch',
    shortTitle: 'SLA Watch',
    title: 'At-Risk SLA Escalation',
    stack: 'n8n · Supabase · Sender',
    cadence: 'Every 15 mins',
    saved: 'Zero missed SLAs',
    color: 'sky',
    nodes: {
      trigger: {
        id: 'trigger',
        label: 'Every 15 mins AEST',
        tool: 'n8n Schedule',
        detail: 'Runs scheduled Australian business-hours compliance sweeps.',
      },
      sourceA: {
        id: 'sourceA',
        label: 'Fetch open SLA jobs',
        tool: 'Supabase DB',
        detail: 'Queries active jobs within 2 hours of their contractual window.',
      },
      sourceB: {
        id: 'sourceB',
        label: 'Fetch crew roster',
        tool: 'Dispatch API',
        detail: 'Checks live technician availability and proximity by postcode.',
      },
      merge: {
        id: 'merge',
        label: 'Merge & score risk',
        tool: 'n8n Merge',
        detail: 'Matches unallocated jobs against nearest available field crew.',
      },
      process: {
        id: 'process',
        label: 'Rank w/ Claude AI',
        tool: 'Claude AI',
        detail: 'Prioritises reassignment options and drafts handover context.',
      },
      deliver: {
        id: 'deliver',
        label: 'Alert ops via Sender',
        tool: 'Sender',
        detail: 'Notifies state operations lead immediately with 1-click reassign.',
      },
    },
  },
  {
    id: 'weekly-digest',
    shortTitle: 'Weekly Briefing',
    title: 'Executive Operations Digest',
    stack: 'n8n · Claude AI · Sender',
    cadence: 'Fridays 16:00 AEST',
    saved: '6 hrs / mo saved',
    color: 'green',
    nodes: {
      trigger: {
        id: 'trigger',
        label: 'Fridays at 16:00 AEST',
        tool: 'n8n Schedule',
        detail: 'Triggers weekly executive rollup before end of business Friday.',
      },
      sourceA: {
        id: 'sourceA',
        label: 'Fetch Supabase KPIs',
        tool: 'Supabase DB',
        detail: 'Aggregates completed jobs, WIP margin, and SLA attainment.',
      },
      sourceB: {
        id: 'sourceB',
        label: 'Fetch deploy notes',
        tool: 'GitHub · GitLab',
        detail: 'Collects merged releases and resolved support tickets for the week.',
      },
      merge: {
        id: 'merge',
        label: 'Merge weekly data',
        tool: 'n8n Merge',
        detail: 'Aligns operational metrics and engineering milestones in one payload.',
      },
      process: {
        id: 'process',
        label: 'Summarise w/ Claude AI',
        tool: 'Claude AI',
        detail: 'Synthesises executive highlights, bottlenecks, and margin trends.',
      },
      deliver: {
        id: 'deliver',
        label: 'Email briefing via Sender',
        tool: 'Sender',
        detail: 'Delivers the formatted Friday briefing to directors via Sender.',
      },
    },
  },
];

export function SupportScaleSection() {
  const gradPrefix = useId();
  const [stackOrder, setStackOrder] = useState<string[]>(['01']);
  const activeStep = stackOrder[stackOrder.length - 1];
  const collapsedSteps = stackOrder.slice(0, -1);

  const handleSelectStep = (stepNumber: string) => {
    if (stepNumber === activeStep) return;
    setStackOrder((prev) => [...prev.filter((id) => id !== stepNumber), stepNumber]);
  };

  const [selectedHostingCard, setSelectedHostingCard] =
    useState<HostingCard['id']>('au-cloud');
  const [selectedTicketId, setSelectedTicketId] = useState<string>('quote-chat');
  const [replyDraft, setReplyDraft] = useState<string>('');
  const [customReplies, setCustomReplies] = useState<
    Record<string, ConversationMessage[]>
  >({});
  const [selectedKpiId, setSelectedKpiId] =
    useState<AnalyticsKpi['id']>('invoices');
  const [selectedFeatureId, setSelectedFeatureId] = useState<string>('portal');
  const [selectedAutomationId, setSelectedAutomationId] =
    useState<string>('invoice-sync');
  const [selectedAutomationNodeId, setSelectedAutomationNodeId] =
    useState<WorkflowNodeMeta['id']>('process');

  const activeHostingObj =
    HOSTING_CARDS.find((c) => c.id === selectedHostingCard) ?? HOSTING_CARDS[0];
  const activeHostingAccent = LIGHT_ACCENTS[activeHostingObj.color];

  const activeTicket =
    SUPPORT_TICKETS.find((t) => t.id === selectedTicketId) ?? SUPPORT_TICKETS[0];
  const activeTicketAccent = LIGHT_ACCENTS[activeTicket.color];
  const activeConversationMessages = [
    ...activeTicket.messages,
    ...(customReplies[activeTicket.id] ?? []),
  ];

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = replyDraft.trim();
    if (!trimmed) return;
    const newMsg: ConversationMessage = {
      id: `reply-${Date.now()}`,
      sender: 'customer',
      author: 'You',
      time: 'Just now',
      text: trimmed,
    };
    setCustomReplies((prev) => ({
      ...prev,
      [activeTicket.id]: [...(prev[activeTicket.id] ?? []), newMsg],
    }));
    setReplyDraft('');
  };

  const activeKpi =
    ANALYTICS_KPIS.find((k) => k.id === selectedKpiId) ?? ANALYTICS_KPIS[0];
  const activeKpiAccent = LIGHT_ACCENTS[activeKpi.color];
  const analyticsGradientId = `${gradPrefix}-${activeKpi.id}`;

  const activeFeature =
    FEATURE_RELEASES.find((f) => f.id === selectedFeatureId) ?? FEATURE_RELEASES[0];
  const activeFeatureAccent = LIGHT_ACCENTS[activeFeature.color];

  const activeAutomation =
    AUTOMATION_WORKFLOWS.find((a) => a.id === selectedAutomationId) ??
    AUTOMATION_WORKFLOWS[0];
  const activeAutomationAccent = LIGHT_ACCENTS[activeAutomation.color];
  const activeWorkflowNode = activeAutomation.nodes[selectedAutomationNodeId];

  const handleCycleAutomation = () => {
    const idx = AUTOMATION_WORKFLOWS.findIndex((a) => a.id === activeAutomation.id);
    const next = AUTOMATION_WORKFLOWS[(idx + 1) % AUTOMATION_WORKFLOWS.length];
    setSelectedAutomationId(next.id);
  };

  return (
    <section
      id="support-and-scale"
      aria-label="Support and Scale"
      className="w-full bg-white py-24 sm:py-32 px-6 sm:px-10 lg:px-12 border-t border-slate-200/80"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.06em] text-violet-700">
            Support &amp; Scale
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-[-0.03em] leading-[1.08] text-[#0F172A] [text-wrap:balance]">
            Software that keeps getting better after launch
          </h2>
          <p className="mt-4 text-base sm:text-[17px] leading-[1.6] text-slate-600">
            Ongoing partnership plans that keep your app fast, secure and growing with you.
          </p>
        </div>

        {/* Flipped Two-Column Layout: Preview Window on Left, 01–05 Steps on Right */}
        <div className="mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Stacking Light-Mode Multi-Colour Platform Preview */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <MotionConfig reducedMotion="user">
              <div className="relative">
                {/* Collapsed Previous Reference Cards */}
                {collapsedSteps.length > 0 && (
                  <div className="relative z-10 flex flex-col">
                    <AnimatePresence initial={false}>
                      {collapsedSteps.map((stepNum, index) => {
                        const stepInfo = SUPPORT_STEPS.find((s) => s.number === stepNum);
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
                        const stepAccent = LIGHT_ACCENTS[stepInfo.color];

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
                            className={`${insetClass} -mb-2.5 pb-4 pt-2.5 px-4 rounded-t-2xl border text-left transition-colors cursor-pointer flex items-center justify-between gap-3 bg-[#F8FAFC] border-slate-200/95 hover:bg-white hover:border-slate-300 text-slate-800 shadow-[0_-4px_14px_-6px_rgba(15,23,42,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600`}
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
                              <span className="hidden sm:inline font-mono text-[10.5px] tabular-nums text-slate-500">
                                {stepInfo.summary}
                              </span>
                              <ChevronUp
                                className="h-3.5 w-3.5 text-slate-400"
                                aria-hidden="true"
                              />
                            </div>
                          </motion.button>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                )}

                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: -26, scale: 0.975 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-20 rounded-2xl bg-white border border-slate-200/90 shadow-[0_24px_54px_-18px_rgba(15,23,42,0.14)] overflow-hidden text-slate-900"
                >
              {/* Preview Window Chrome */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200/80 bg-[#F8FAFC]">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                  </div>
                  <span className="font-mono text-xs text-slate-700 truncate">
                    Platform Preview —{' '}
                    {SUPPORT_STEPS.find((s) => s.number === activeStep)?.title}
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
                  <span className="font-mono text-[11px] text-slate-500 tabular-nums">
                    Stage {activeStep} of 05
                  </span>
                </div>
              </div>

              {/* 01 Hosting & Monitoring */}
              {activeStep === '01' && (
                <div>
                  <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
                    {/* Left Panel: Light Dot-Matrix AU Infrastructure Topology */}
                    <div className="md:col-span-7 rounded-xl infra-dot-light border border-slate-200/90 p-4 flex flex-col justify-between min-h-[320px] text-slate-900">
                      <div className="flex items-center justify-between text-[11px] pb-3 border-b border-slate-200/80">
                        <span className="font-semibold text-slate-900">
                          AU Infrastructure
                        </span>
                        <span className="font-mono text-[10px] text-[#15803D] tabular-nums">
                          ap-southeast-2 · Live
                        </span>
                      </div>

                      {/* 3-Tier Server Rack Topology with Orthogonal Circuit Traces */}
                      <div className="relative my-3 flex-1 flex flex-col justify-center">
                        {/* Orthogonal Circuit Bus Lines (Desktop 2-col x 3-row alignment) */}
                        <svg
                          viewBox="0 0 320 220"
                          preserveAspectRatio="none"
                          aria-hidden="true"
                          className="pointer-events-none hidden sm:block absolute inset-0 h-full w-full"
                          fill="none"
                        >
                          {/* Row 1 -> Row 2 Vertical Drops & Horizontal Cross-Bus */}
                          <path
                            d="M80 48 L80 94"
                            stroke={
                              selectedHostingCard === 'au-cloud' ? '#F59E0B' : '#CBD5E1'
                            }
                            strokeWidth="1.5"
                          />
                          <path
                            d="M240 48 L240 94"
                            stroke={
                              selectedHostingCard === 'au-cloud' ||
                              selectedHostingCard === 'monitoring'
                                ? '#E14D79'
                                : '#CBD5E1'
                            }
                            strokeWidth="1.5"
                          />
                          <path
                            d="M80 71 L240 71"
                            stroke={
                              selectedHostingCard === 'au-cloud' ? '#3B82F6' : '#CBD5E1'
                            }
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                          />
                          <rect
                            x="157"
                            y="68"
                            width="6"
                            height="6"
                            rx="1.5"
                            fill="#F8FAFC"
                            stroke={
                              selectedHostingCard === 'au-cloud' ? '#2563EB' : '#94A3B8'
                            }
                            strokeWidth="1.5"
                          />

                          {/* Row 2 -> Row 3 Vertical Drops & Horizontal Cross-Bus */}
                          <path
                            d="M80 124 L80 170"
                            stroke={
                              selectedHostingCard === 'backups' ||
                              selectedHostingCard === 'au-cloud'
                                ? '#16A34A'
                                : '#CBD5E1'
                            }
                            strokeWidth="1.5"
                          />
                          <path
                            d="M240 124 L240 170"
                            stroke={
                              selectedHostingCard === 'backups' ||
                              selectedHostingCard === 'monitoring'
                                ? '#0284C7'
                                : '#CBD5E1'
                            }
                            strokeWidth="1.5"
                          />
                          <path
                            d="M80 147 L240 147"
                            stroke={
                              selectedHostingCard === 'backups' ? '#16A34A' : '#CBD5E1'
                            }
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                          />
                          <rect
                            x="157"
                            y="144"
                            width="6"
                            height="6"
                            rx="1.5"
                            fill="#F8FAFC"
                            stroke={
                              selectedHostingCard === 'backups' ? '#16A34A' : '#94A3B8'
                            }
                            strokeWidth="1.5"
                          />
                        </svg>

                        {/* 6 Rounded Server-Style Cards */}
                        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-4">
                          {/* Server Card 1: Cloudflare WAF */}
                          <button
                            type="button"
                            onClick={() => setSelectedHostingCard('au-cloud')}
                            className={`rounded-xl px-3 py-2.5 border text-left transition-all duration-150 cursor-pointer ${
                              selectedHostingCard === 'au-cloud'
                                ? 'bg-white border-[#F59E0B]/75 shadow-[0_8px_22px_-10px_rgba(245,158,11,0.28)]'
                                : 'bg-white/95 border-slate-200/90 hover:border-slate-300'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="h-5 w-5 rounded-md bg-[#F59E0B]/15 text-[#B45309] flex items-center justify-center shrink-0">
                                  <Cloud className="h-3 w-3" />
                                </span>
                                <span className="text-[11px] font-semibold text-slate-900 truncate">
                                  Cloudflare WAF
                                </span>
                              </div>
                            </div>
                            <div className="mt-1.5 flex items-center justify-between font-mono text-[9.5px] text-slate-500 tabular-nums">
                              <span>SYD · MEL Edge</span>
                              <span className="text-[#B45309] font-medium">11ms</span>
                            </div>
                          </button>

                          {/* Server Card 2: Anycast Load Balancer */}
                          <button
                            type="button"
                            onClick={() => setSelectedHostingCard('au-cloud')}
                            className={`rounded-xl px-3 py-2.5 border text-left transition-all duration-150 cursor-pointer ${
                              selectedHostingCard === 'au-cloud'
                                ? 'bg-white border-[#E14D79]/75 shadow-[0_8px_22px_-10px_rgba(225,77,121,0.26)]'
                                : 'bg-white/95 border-slate-200/90 hover:border-slate-300'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="h-5 w-5 rounded-md bg-[#E14D79]/12 text-[#BE185D] flex items-center justify-center shrink-0">
                                  <Globe className="h-3 w-3" />
                                </span>
                                <span className="text-[11px] font-semibold text-slate-900 truncate">
                                  AU Failover
                                </span>
                              </div>
                            </div>
                            <div className="mt-1.5 flex items-center justify-between font-mono text-[9.5px] text-slate-500 tabular-nums">
                              <span>Anycast DNS</span>
                              <span className="text-[#BE185D] font-medium">TLS 1.3</span>
                            </div>
                          </button>

                          {/* Server Card 3: App Server Node */}
                          <button
                            type="button"
                            onClick={() => setSelectedHostingCard('au-cloud')}
                            className={`rounded-xl px-3 py-2.5 border text-left transition-all duration-150 cursor-pointer ${
                              selectedHostingCard === 'au-cloud'
                                ? 'bg-white border-[#3B82F6]/75 shadow-[0_8px_22px_-10px_rgba(59,130,246,0.26)]'
                                : 'bg-white/95 border-slate-200/90 hover:border-slate-300'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="h-5 w-5 rounded-md bg-[#3B82F6]/12 text-[#1D4ED8] flex items-center justify-center shrink-0">
                                  <Server className="h-3 w-3" />
                                </span>
                                <span className="text-[11px] font-semibold text-slate-900 truncate">
                                  App Server 01
                                </span>
                              </div>
                            </div>
                            <div className="mt-1.5 flex items-center justify-between font-mono text-[9.5px] text-slate-500 tabular-nums">
                              <span>Sydney VPC</span>
                              <span className="text-[#1D4ED8] font-medium">CPU 18%</span>
                            </div>
                          </button>

                          {/* Server Card 4: Edge Health Monitor */}
                          <button
                            type="button"
                            onClick={() => setSelectedHostingCard('monitoring')}
                            className={`rounded-xl px-3 py-2.5 border text-left transition-all duration-150 cursor-pointer ${
                              selectedHostingCard === 'monitoring'
                                ? 'bg-white border-[#38BDF8]/80 shadow-[0_8px_22px_-10px_rgba(56,189,248,0.28)]'
                                : 'bg-white/95 border-slate-200/90 hover:border-slate-300'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="h-5 w-5 rounded-md bg-[#38BDF8]/15 text-[#0369A1] flex items-center justify-center shrink-0">
                                  <Cpu className="h-3 w-3" />
                                </span>
                                <span className="text-[11px] font-semibold text-slate-900 truncate">
                                  Uptime Monitor
                                </span>
                              </div>
                            </div>
                            <div className="mt-1.5 flex items-center justify-between font-mono text-[9.5px] text-slate-500 tabular-nums">
                              <span>24/7 Probes</span>
                              <span className="text-[#0369A1] font-medium">99.99%</span>
                            </div>
                          </button>

                          {/* Server Card 5: Supabase AU Database */}
                          <button
                            type="button"
                            onClick={() => setSelectedHostingCard('backups')}
                            className={`rounded-xl px-3 py-2.5 border text-left transition-all duration-150 cursor-pointer ${
                              selectedHostingCard === 'backups'
                                ? 'bg-white border-[#22C55E]/75 shadow-[0_8px_22px_-10px_rgba(34,197,94,0.26)]'
                                : 'bg-white/95 border-slate-200/90 hover:border-slate-300'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="h-5 w-5 rounded-md bg-[#22C55E]/12 text-[#15803D] flex items-center justify-center shrink-0">
                                  <Database className="h-3 w-3" />
                                </span>
                                <span className="text-[11px] font-semibold text-slate-900 truncate">
                                  Supabase DB
                                </span>
                              </div>
                            </div>
                            <div className="mt-1.5 flex items-center justify-between font-mono text-[9.5px] text-slate-500 tabular-nums">
                              <span>Postgres 16</span>
                              <span className="text-[#15803D] font-medium">RLS Auth</span>
                            </div>
                          </button>

                          {/* Server Card 6: AU Backup Vault */}
                          <button
                            type="button"
                            onClick={() => setSelectedHostingCard('backups')}
                            className={`rounded-xl px-3 py-2.5 border text-left transition-all duration-150 cursor-pointer ${
                              selectedHostingCard === 'backups'
                                ? 'bg-white border-[#38BDF8]/80 shadow-[0_8px_22px_-10px_rgba(56,189,248,0.26)]'
                                : 'bg-white/95 border-slate-200/90 hover:border-slate-300'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="h-5 w-5 rounded-md bg-[#38BDF8]/15 text-[#0369A1] flex items-center justify-center shrink-0">
                                  <HardDrive className="h-3 w-3" />
                                </span>
                                <span className="text-[11px] font-semibold text-slate-900 truncate">
                                  Backup Vault
                                </span>
                              </div>
                            </div>
                            <div className="mt-1.5 flex items-center justify-between font-mono text-[9.5px] text-slate-500 tabular-nums">
                              <span>15m RPO</span>
                              <span className="text-[#0369A1] font-medium">AES-256</span>
                            </div>
                          </button>
                        </div>
                      </div>

                      <div className="pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                        <span className="inline-flex items-center gap-1">
                          <Lock className="h-3 w-3 text-slate-400" />
                          Onshore AU nodes
                        </span>
                        <span className={`font-medium ${activeHostingAccent.text}`}>
                          {activeHostingObj.nodeTitle}
                        </span>
                      </div>
                    </div>

                    {/* Right Stack: 3 Hosting & Monitoring Cards */}
                    <div className="md:col-span-5 flex flex-col justify-between gap-3">
                      {HOSTING_CARDS.map((card) => {
                        const Icon = card.icon;
                        const isSelected = selectedHostingCard === card.id;
                        const accent = LIGHT_ACCENTS[card.color];
                        return (
                          <button
                            key={card.id}
                            type="button"
                            onClick={() => setSelectedHostingCard(card.id)}
                            className={`w-full text-left rounded-xl p-3.5 border transition-all duration-150 cursor-pointer flex-1 flex flex-col justify-between ${
                              isSelected
                                ? accent.cardActive
                                : 'bg-[#F8FAFC] border-slate-200 hover:border-slate-300 hover:bg-white'
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
                                  <div className="text-xs font-semibold text-slate-900 truncate">
                                    {card.title}
                                  </div>
                                  <div className="font-mono text-[10px] text-slate-500 truncate">
                                    {card.subtitle}
                                  </div>
                                </div>
                              </div>
                              <span
                                className={`font-mono text-[10px] tabular-nums shrink-0 ${accent.text}`}
                              >
                                {card.status}
                              </span>
                            </div>

                            <div className="mt-2.5 pt-2 border-t border-slate-200/80 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10.5px] text-slate-600">
                              <span>{card.items[0]}</span>
                              <span aria-hidden="true" className="text-slate-300">
                                ·
                              </span>
                              <span>{card.items[1]}</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="px-5 py-3 bg-[#F8FAFC] border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-600">
                    <span>
                      Infrastructure: Cloudflare Edge · Supabase (Sydney) · Hosted in Australia
                    </span>
                    <span className="font-mono text-[#1D4ED8] tabular-nums">
                      99.99% target uptime
                    </span>
                  </div>
                </div>
              )}

              {/* 02 Support & Maintenance — 30% Customer Issues / 70% Live Conversations */}
              {activeStep === '02' && (
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-[30%_70%]">
                    {/* Left Panel (30%): Expandable Customer Issues */}
                    <div className="bg-[#F8FAFC] border-b sm:border-b-0 sm:border-r border-slate-200/80 p-3.5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-[11px] font-semibold text-slate-700 pb-2.5 border-b border-slate-200/80">
                          <span className="truncate">Customer Issues</span>
                          <span className="font-mono font-normal text-slate-500 tabular-nums shrink-0">
                            4 threads
                          </span>
                        </div>

                        <ul className="mt-2.5 space-y-1.5">
                          {SUPPORT_TICKETS.map((ticket) => {
                            const isSelected = selectedTicketId === ticket.id;
                            const accent = LIGHT_ACCENTS[ticket.color];
                            return (
                              <li key={ticket.id}>
                                <button
                                  type="button"
                                  onClick={() => setSelectedTicketId(ticket.id)}
                                  aria-expanded={isSelected}
                                  className={`w-full text-left rounded-lg px-2.5 py-2 transition-all duration-150 cursor-pointer border ${
                                    isSelected
                                      ? accent.cardActive
                                      : 'border-transparent hover:bg-white'
                                  }`}
                                >
                                  <div className="flex items-center justify-between gap-1.5">
                                    <span className="text-[11px] font-semibold text-slate-900 truncate">
                                      {ticket.title}
                                    </span>
                                  </div>
                                  <div className="mt-0.5 flex items-center gap-1 text-[9.5px] font-mono text-slate-500 tabular-nums truncate">
                                    <span className={`${accent.text} font-medium`}>
                                      {ticket.status}
                                    </span>
                                    <span aria-hidden="true">·</span>
                                    <span className="truncate">{ticket.responseTime}</span>
                                  </div>
                                  {isSelected && (
                                    <div className="mt-2 pt-2 border-t border-slate-100 text-[10.5px] leading-snug text-slate-600">
                                      <div className="font-medium text-slate-800 mb-0.5">
                                        {ticket.customer}
                                      </div>
                                      {ticket.issueSummary}
                                    </div>
                                  )}
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                        <span>Local desk</span>
                        <span className="font-medium text-slate-800">Sydney · AEST</span>
                      </div>
                    </div>

                    {/* Right Panel (70%): Live Conversation Thread */}
                    <div className="p-4 flex flex-col justify-between gap-3 bg-white">
                      <div>
                        {/* Thread Top Bar */}
                        <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-200/80">
                          <div className="flex items-center gap-2 min-w-0">
                            <MessageSquare
                              className={`h-3.5 w-3.5 shrink-0 ${activeTicketAccent.text}`}
                            />
                            <span className="text-xs font-semibold text-slate-900 truncate">
                              {activeTicket.title}
                            </span>
                          </div>
                          <span className="font-mono text-[10px] text-slate-500 shrink-0 tabular-nums">
                            {activeTicket.toolchain}
                          </span>
                        </div>

                        {/* Live Messages Stream */}
                        <div className="mt-3 space-y-2.5 max-h-[250px] overflow-y-auto pr-1">
                          {activeConversationMessages.map((msg) => {
                            const isCustomer = msg.sender === 'customer';
                            return (
                              <div
                                key={msg.id}
                                className={`flex flex-col ${
                                  isCustomer ? 'items-start' : 'items-end'
                                }`}
                              >
                                <div className="flex items-center gap-1.5 text-[9.5px] font-mono text-slate-500 mb-1 tabular-nums">
                                  <span className="font-medium text-slate-700">
                                    {msg.author}
                                  </span>
                                  <span aria-hidden="true">·</span>
                                  <span>{msg.time}</span>
                                </div>
                                <div
                                  className={`max-w-[88%] rounded-xl px-3 py-2 text-xs leading-relaxed ${
                                    isCustomer
                                      ? 'bg-[#F8FAFC] border border-slate-200/90 text-slate-800'
                                      : 'bg-[#0F172A] text-slate-100'
                                  }`}
                                >
                                  {msg.text}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Interactive Reply Composer */}
                      <form
                        onSubmit={handleSendReply}
                        className="pt-2.5 border-t border-slate-200/80 flex items-center gap-2"
                      >
                        <input
                          type="text"
                          value={replyDraft}
                          onChange={(e) => setReplyDraft(e.target.value)}
                          placeholder="Reply directly to the Sydney dev team..."
                          aria-label="Reply to live support thread"
                          className="flex-1 min-w-0 rounded-lg border border-slate-200 bg-[#F8FAFC] px-3 py-1.5 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-violet-500 focus:outline-none"
                        />
                        <button
                          type="submit"
                          aria-label="Send message"
                          className="inline-flex items-center gap-1 rounded-lg bg-[#0F172A] px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
                        >
                          <span>Send</span>
                          <Send className="h-3 w-3" aria-hidden="true" />
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="px-5 py-3 bg-[#F8FAFC] border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-600">
                    <span>
                      Direct Sydney engineers · Visual Studio Code · GitHub &amp; GitLab
                    </span>
                    <span className="font-mono text-[#15803D] tabular-nums">
                      &lt; 30m local response
                    </span>
                  </div>
                </div>
              )}

              {/* 03 Analytics & Insights */}
              {activeStep === '03' && (
                <div>
                  <div className="p-4 sm:p-5 space-y-3.5">
                    {/* Branded Workspace Header */}
                    <div className="rounded-xl bg-[#F8FAFC] border border-slate-200/90 px-3.5 py-2.5 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="rounded-lg border border-dashed border-slate-300 bg-white px-2.5 py-1 font-mono text-[10px] font-medium text-slate-600 shrink-0">
                          [Your Logo Here]
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-semibold text-slate-900 truncate">
                            Your Business Portal
                          </div>
                          <div className="font-mono text-[9.5px] text-slate-500 truncate">
                            portal.yourbusiness.com.au
                          </div>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-slate-500 tabular-nums shrink-0">
                        Live ops · This month
                      </span>
                    </div>

                    {/* Top 4 Real-World Business KPI Selectors */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {ANALYTICS_KPIS.map((kpi) => {
                        const Icon = kpi.icon;
                        const isSelected = selectedKpiId === kpi.id;
                        const accent = LIGHT_ACCENTS[kpi.color];
                        return (
                          <button
                            key={kpi.id}
                            type="button"
                            onClick={() => setSelectedKpiId(kpi.id)}
                            className={`text-left rounded-xl p-2.5 border transition-all duration-150 cursor-pointer ${
                              isSelected
                                ? accent.cardActive
                                : 'bg-[#F8FAFC] border-slate-200 hover:border-slate-300 hover:bg-white'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-[10px] font-medium text-slate-500 truncate">
                                {kpi.label}
                              </span>
                              <Icon className={`h-3 w-3 shrink-0 ${accent.text}`} />
                            </div>
                            <div className="mt-1 text-sm sm:text-base font-bold tracking-tight text-slate-900 tabular-nums">
                              {kpi.value}
                            </div>
                            <div
                              className={`mt-0.5 font-mono text-[9.5px] truncate tabular-nums ${accent.text}`}
                            >
                              {kpi.delta}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Main Split: Active Metric Trend + Real-World Records | Live CRM Pipeline */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
                      <div className="md:col-span-7 rounded-xl bg-[#F8FAFC] border border-slate-200/90 p-3.5 flex flex-col justify-between gap-3">
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <div className="text-xs font-semibold text-slate-900">
                              {activeKpi.panelTitle}
                            </div>
                            <div className="text-[10px] text-slate-500 mt-0.5">
                              {activeKpi.panelSubtitle}
                            </div>
                          </div>
                          <span
                            className={`font-mono text-[10px] font-semibold tabular-nums ${activeKpiAccent.text}`}
                          >
                            {activeKpi.value}
                          </span>
                        </div>

                        <div className="relative h-20 w-full">
                          <svg
                            viewBox="0 0 310 92"
                            className="h-full w-full overflow-visible"
                            fill="none"
                          >
                            <defs>
                              <linearGradient
                                id={analyticsGradientId}
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  offset="0%"
                                  stopColor={activeKpiAccent.stroke}
                                  stopOpacity="0.22"
                                />
                                <stop
                                  offset="100%"
                                  stopColor={activeKpiAccent.stroke}
                                  stopOpacity="0.01"
                                />
                              </linearGradient>
                            </defs>
                            <line x1="0" y1="24" x2="310" y2="24" stroke="#E2E8F0" strokeWidth="1" />
                            <line x1="0" y1="54" x2="310" y2="54" stroke="#E2E8F0" strokeWidth="1" />
                            <line x1="0" y1="82" x2="310" y2="82" stroke="#E2E8F0" strokeWidth="1" />
                            <path
                              d={activeKpi.chartAreaPath}
                              fill={`url(#${analyticsGradientId})`}
                            />
                            <path
                              d={activeKpi.chartPath}
                              stroke={activeKpiAccent.stroke}
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>

                        {/* Real-World Case Rows */}
                        <ul className="space-y-1.5 pt-2 border-t border-slate-200/80">
                          {activeKpi.rows.map((row) => {
                            const rowAccent = LIGHT_ACCENTS[row.tone];
                            return (
                              <li
                                key={row.code}
                                className="rounded-lg bg-white border border-slate-200/80 px-2.5 py-1.5 flex items-center justify-between gap-2 text-[10.5px]"
                              >
                                <div className="min-w-0">
                                  <div className="font-medium text-slate-900 truncate">
                                    {row.client}
                                  </div>
                                  <div className="font-mono text-[9.5px] text-slate-500 tabular-nums">
                                    {row.code} · {row.meta}
                                  </div>
                                </div>
                                <div className="text-right shrink-0 font-mono tabular-nums">
                                  <div className="font-semibold text-slate-900">
                                    {row.amount}
                                  </div>
                                  <div className={`text-[9.5px] ${rowAccent.text}`}>
                                    {row.status}
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      {/* Right Column: Live Sales & Job Pipeline Stages */}
                      <div className="md:col-span-5 rounded-xl bg-[#F8FAFC] border border-slate-200/90 p-3.5 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-800 pb-2 border-b border-slate-200/80">
                            <span>Sales &amp; Job Pipeline</span>
                            <span className="font-mono text-[10px] font-normal text-slate-500">
                              Live stages
                            </span>
                          </div>

                          <div className="mt-3 space-y-2.5">
                            {PIPELINE_STAGES.map((item) => {
                              const accent = LIGHT_ACCENTS[item.color];
                              return (
                                <div key={item.stage}>
                                  <div className="flex items-center justify-between text-[10.5px]">
                                    <span className="font-medium text-slate-800 truncate">
                                      {item.stage}
                                    </span>
                                    <span
                                      className={`font-mono tabular-nums shrink-0 ${accent.text}`}
                                    >
                                      {item.count} · {item.value}
                                    </span>
                                  </div>
                                  <div className="mt-1 h-1.5 w-full rounded-full bg-slate-200/80 overflow-hidden">
                                    <div
                                      className={`h-full rounded-full ${accent.barBg} ${item.widthClass}`}
                                    />
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <div className="mt-3 pt-2.5 border-t border-slate-200/80 text-[10.5px] text-slate-600">
                          Next action: 9 unfinished quotes ($34.6k) queued for Sender follow-up.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-5 py-3 bg-[#F8FAFC] border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-600">
                    <span>
                      Your branded portal: Invoices · Jobs · Quotes · Live Supabase Sync
                    </span>
                    <span className="font-mono text-[#0369A1] tabular-nums">
                      Real-time operations
                    </span>
                  </div>
                </div>
              )}

              {/* 04 New Features */}
              {activeStep === '04' && (
                <div>
                  <div className="p-4 sm:p-5 space-y-4">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="inline-flex items-center gap-1.5 font-semibold text-slate-800">
                        <PlusSquare className="h-3.5 w-3.5 text-[#1D4ED8]" />
                        Modular Feature Expansion
                      </span>
                      <span className="font-mono text-[11px] text-slate-500 tabular-nums">
                        Fixed-scope add-ons
                      </span>
                    </div>

                    {/* Compact 4-Tile Icon Selector */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {FEATURE_RELEASES.map((item) => {
                        const Icon = item.icon;
                        const isSelected = selectedFeatureId === item.id;
                        const accent = LIGHT_ACCENTS[item.color];
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setSelectedFeatureId(item.id)}
                            className={`text-left rounded-xl p-3 border transition-all duration-150 cursor-pointer flex flex-col justify-between gap-2 ${
                              isSelected
                                ? accent.cardActive
                                : 'bg-[#F8FAFC] border-slate-200 hover:border-slate-300 hover:bg-white'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-1.5">
                              <span
                                className={`h-7 w-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                  isSelected ? accent.iconActive : accent.iconIdle
                                }`}
                              >
                                <Icon className="h-3.5 w-3.5" />
                              </span>
                              <span
                                className={`font-mono text-[9.5px] tabular-nums ${accent.text}`}
                              >
                                {item.stage}
                              </span>
                            </div>
                            <div className="text-xs font-semibold text-slate-900 truncate">
                              {item.title}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Visual Icon Schematic Stage (Zero wall of text, zero stock images) */}
                    <div className="rounded-xl infra-dot-light border border-slate-200/90 p-4 sm:p-5 min-h-[214px] flex flex-col justify-between gap-4">
                      {/* Header Strip inside Schematic */}
                      <div className="flex items-center justify-between gap-2 text-[11px] pb-2.5 border-b border-slate-200/80">
                        <span className={`font-semibold ${activeFeatureAccent.text}`}>
                          {activeFeature.title}
                        </span>
                        <span className="font-mono text-[10px] text-slate-500 tabular-nums">
                          {activeFeature.quarter} · {activeFeature.metric}
                        </span>
                      </div>

                      {/* Module 1: Client Portal Visual Flow */}
                      {activeFeature.id === 'portal' && (
                        <div className="space-y-3">
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 items-center">
                            <div className="rounded-xl bg-white border border-slate-200/90 p-3 flex items-center gap-2.5 shadow-xs">
                              <span className="h-8 w-8 rounded-lg bg-[#22C55E]/12 text-[#15803D] flex items-center justify-center shrink-0">
                                <KeyRound className="h-4 w-4" />
                              </span>
                              <div className="min-w-0">
                                <div className="text-[11px] font-semibold text-slate-900 truncate">
                                  Branded Login
                                </div>
                                <div className="font-mono text-[9.5px] text-slate-500 truncate">
                                  Supabase Auth
                                </div>
                              </div>
                            </div>

                            <div className="rounded-xl bg-white border border-[#22C55E]/60 p-3 flex items-center gap-2.5 shadow-xs">
                              <span className="h-8 w-8 rounded-lg bg-[#22C55E] text-white flex items-center justify-center shrink-0">
                                <FileCheck2 className="h-4 w-4" />
                              </span>
                              <div className="min-w-0">
                                <div className="text-[11px] font-semibold text-slate-900 truncate">
                                  Quote Sign-Off
                                </div>
                                <div className="font-mono text-[9.5px] text-[#15803D] truncate">
                                  1-click approval
                                </div>
                              </div>
                            </div>

                            <div className="rounded-xl bg-white border border-slate-200/90 p-3 flex items-center gap-2.5 shadow-xs">
                              <span className="h-8 w-8 rounded-lg bg-[#38BDF8]/15 text-[#0369A1] flex items-center justify-center shrink-0">
                                <Receipt className="h-4 w-4" />
                              </span>
                              <div className="min-w-0">
                                <div className="text-[11px] font-semibold text-slate-900 truncate">
                                  Live Invoices
                                </div>
                                <div className="font-mono text-[9.5px] text-slate-500 truncate">
                                  Paid &amp; due history
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="rounded-xl bg-white border border-slate-200/90 px-3.5 py-2.5 flex items-center justify-between gap-3 text-[11px]">
                            <div className="inline-flex items-center gap-2 text-slate-700 font-medium">
                              <BellRing className="h-3.5 w-3.5 text-[#15803D]" />
                              <span>Sender alerts active</span>
                            </div>
                            <span className="inline-flex items-center gap-1 font-mono text-[10.5px] font-semibold text-[#15803D] tabular-nums">
                              <Check className="h-3.5 w-3.5" />
                              38% faster approvals
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Module 2: Multi-Site Stock Visual Topology */}
                      {activeFeature.id === 'inventory' && (
                        <div className="space-y-3">
                          <div className="grid grid-cols-3 gap-2.5">
                            <div className="rounded-xl bg-white border border-slate-200/90 p-3 shadow-xs">
                              <div className="flex items-center justify-between gap-1">
                                <Warehouse className="h-4 w-4 text-[#1D4ED8]" />
                                <span className="font-mono text-[10px] text-[#1D4ED8] tabular-nums">
                                  84%
                                </span>
                              </div>
                              <div className="mt-2 text-[11px] font-semibold text-slate-900 truncate">
                                Sydney
                              </div>
                              <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                                <div className="h-full w-[84%] rounded-full bg-[#3B82F6]" />
                              </div>
                            </div>

                            <div className="rounded-xl bg-white border border-slate-200/90 p-3 shadow-xs">
                              <div className="flex items-center justify-between gap-1">
                                <Warehouse className="h-4 w-4 text-[#0369A1]" />
                                <span className="font-mono text-[10px] text-[#0369A1] tabular-nums">
                                  62%
                                </span>
                              </div>
                              <div className="mt-2 text-[11px] font-semibold text-slate-900 truncate">
                                Brisbane
                              </div>
                              <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                                <div className="h-full w-[62%] rounded-full bg-[#38BDF8]" />
                              </div>
                            </div>

                            <div className="rounded-xl bg-white border border-slate-200/90 p-3 shadow-xs">
                              <div className="flex items-center justify-between gap-1">
                                <Truck className="h-4 w-4 text-[#15803D]" />
                                <span className="font-mono text-[10px] text-[#15803D] tabular-nums">
                                  91%
                                </span>
                              </div>
                              <div className="mt-2 text-[11px] font-semibold text-slate-900 truncate">
                                Field Vans
                              </div>
                              <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                                <div className="h-full w-[91%] rounded-full bg-[#22C55E]" />
                              </div>
                            </div>
                          </div>

                          <div className="rounded-xl bg-white border border-[#3B82F6]/50 px-3.5 py-2.5 flex items-center justify-between gap-2 text-[11px]">
                            <div className="inline-flex items-center gap-2 font-medium text-slate-800">
                              <Database className="h-3.5 w-3.5 text-[#1D4ED8]" />
                              <span>Live Supabase Sync</span>
                            </div>
                            <span className="font-mono text-[10px] text-[#1D4ED8]">
                              GitLab CI · Zero spreadsheets
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Module 3: Smart Quoting Visual Pipeline */}
                      {activeFeature.id === 'quote-ai' && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex-1 rounded-xl bg-white border border-slate-200/90 p-2.5 flex flex-col items-center text-center shadow-xs">
                              <span className="h-8 w-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                                <FileText className="h-4 w-4" />
                              </span>
                              <span className="mt-1.5 text-[10.5px] font-semibold text-slate-900">
                                Past Specs
                              </span>
                            </div>

                            <ArrowRight
                              className="h-3.5 w-3.5 text-slate-400 shrink-0"
                              aria-hidden="true"
                            />

                            <div className="flex-1 rounded-xl bg-white border border-[#F59E0B]/70 p-2.5 flex flex-col items-center text-center shadow-xs">
                              <span className="h-8 w-8 rounded-lg bg-[#F59E0B] text-white flex items-center justify-center">
                                <Sparkles className="h-4 w-4" />
                              </span>
                              <span className="mt-1.5 text-[10.5px] font-semibold text-slate-900">
                                Claude AI Draft
                              </span>
                            </div>

                            <ArrowRight
                              className="h-3.5 w-3.5 text-slate-400 shrink-0"
                              aria-hidden="true"
                            />

                            <div className="flex-1 rounded-xl bg-white border border-slate-200/90 p-2.5 flex flex-col items-center text-center shadow-xs">
                              <span className="h-8 w-8 rounded-lg bg-[#22C55E]/15 text-[#15803D] flex items-center justify-center">
                                <Check className="h-4 w-4" />
                              </span>
                              <span className="mt-1.5 text-[10.5px] font-semibold text-slate-900">
                                Human Sign-Off
                              </span>
                            </div>
                          </div>

                          <div className="rounded-xl bg-white border border-slate-200/90 px-3.5 py-2.5 flex items-center justify-between gap-3 font-mono text-[10.5px] tabular-nums">
                            <span className="text-slate-600">Materials $4,200</span>
                            <span className="text-slate-600">Labour $2,850</span>
                            <span className="font-semibold text-[#B45309]">Total $7,050</span>
                          </div>
                        </div>
                      )}

                      {/* Module 4: Margin Radar Visual Chart */}
                      {activeFeature.id === 'bi' && (
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-stretch">
                          <div className="sm:col-span-7 rounded-xl bg-white border border-slate-200/90 p-3 flex flex-col justify-between shadow-xs">
                            <div className="flex items-center justify-between text-[10.5px]">
                              <span className="font-semibold text-slate-800">
                                Branch Margin
                              </span>
                              <span className="font-mono text-[#BE185D] tabular-nums">
                                Target 40%+
                              </span>
                            </div>

                            <div className="mt-3 grid grid-cols-3 gap-3 items-end h-20 pt-2">
                              <div className="flex flex-col items-center gap-1 h-full justify-end">
                                <span className="font-mono text-[9.5px] text-slate-700 tabular-nums">
                                  42%
                                </span>
                                <div className="w-full max-w-[34px] h-[68%] rounded-t-md bg-[#E14D79]" />
                                <span className="font-mono text-[9.5px] text-slate-500">
                                  SYD
                                </span>
                              </div>
                              <div className="flex flex-col items-center gap-1 h-full justify-end">
                                <span className="font-mono text-[9.5px] text-slate-700 tabular-nums">
                                  38%
                                </span>
                                <div className="w-full max-w-[34px] h-[58%] rounded-t-md bg-[#F59E0B]" />
                                <span className="font-mono text-[9.5px] text-slate-500">
                                  BNE
                                </span>
                              </div>
                              <div className="flex flex-col items-center gap-1 h-full justify-end">
                                <span className="font-mono text-[9.5px] text-slate-700 tabular-nums">
                                  45%
                                </span>
                                <div className="w-full max-w-[34px] h-[78%] rounded-t-md bg-[#22C55E]" />
                                <span className="font-mono text-[9.5px] text-slate-500">
                                  MEL
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="sm:col-span-5 flex flex-col justify-between gap-2.5">
                            <div className="rounded-xl bg-white border border-slate-200/90 p-2.5 flex items-center gap-2.5 shadow-xs">
                              <span className="h-7 w-7 rounded-lg bg-[#3B82F6]/12 text-[#1D4ED8] flex items-center justify-center shrink-0">
                                <Clock className="h-3.5 w-3.5" />
                              </span>
                              <div>
                                <div className="text-[11px] font-semibold text-slate-900">
                                  Labour Split
                                </div>
                                <div className="font-mono text-[10px] text-slate-500 tabular-nums">
                                  56% of job cost
                                </div>
                              </div>
                            </div>

                            <div className="rounded-xl bg-white border border-slate-200/90 p-2.5 flex items-center gap-2.5 shadow-xs">
                              <span className="h-7 w-7 rounded-lg bg-[#E14D79]/12 text-[#BE185D] flex items-center justify-center shrink-0">
                                <Package className="h-3.5 w-3.5" />
                              </span>
                              <div>
                                <div className="text-[11px] font-semibold text-slate-900">
                                  Materials
                                </div>
                                <div className="font-mono text-[10px] text-slate-500 tabular-nums">
                                  44% of job cost
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="px-5 py-3 bg-[#F8FAFC] border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-600">
                    <span>
                      Built in Visual Studio Code · Shipped via GitHub &amp; GitLab
                    </span>
                    <span className="font-mono text-[#15803D] tabular-nums">
                      No vendor lock-in
                    </span>
                  </div>
                </div>
              )}

              {/* 05 Automation */}
              {activeStep === '05' && (
                <div>
                  <div className="p-4 sm:p-5 space-y-3.5">
                    {/* Top Flow Switcher Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                        <Workflow className="h-3.5 w-3.5 text-[#1D4ED8]" />
                        <span>{activeAutomation.title}</span>
                      </div>

                      <div
                        className="inline-flex flex-wrap items-center gap-1 rounded-lg bg-[#F8FAFC] border border-slate-200/80 p-1"
                        role="tablist"
                        aria-label="Select managed automation workflow"
                      >
                        {AUTOMATION_WORKFLOWS.map((flow) => {
                          const isSelected = selectedAutomationId === flow.id;
                          const accent = LIGHT_ACCENTS[flow.color];
                          return (
                            <button
                              key={flow.id}
                              type="button"
                              role="tab"
                              aria-selected={isSelected}
                              onClick={() => setSelectedAutomationId(flow.id)}
                              className={`rounded-md px-2.5 py-1 text-[10.5px] font-medium transition-all cursor-pointer ${
                                isSelected
                                  ? `bg-white shadow-xs border border-slate-200/80 ${accent.text}`
                                  : 'text-slate-600 hover:text-slate-900 border border-transparent'
                              }`}
                            >
                              {flow.shortTitle}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Light Dot-Grid Horizontal Branching Workflow Canvas (sm+) */}
                    <div className="rounded-xl infra-dot-light border border-slate-200/90 p-3 sm:p-4">
                      <div className="hidden sm:block relative h-[244px] w-full select-none">
                        {/* SVG Bezier Curves Matching Node Centers */}
                        <svg
                          viewBox="0 0 600 244"
                          preserveAspectRatio="none"
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 h-full w-full"
                          fill="none"
                        >
                          {/* Trigger (54,116) -> Source Top (168,48) */}
                          <path
                            d="M 54 116 C 108 116, 114 48, 168 48"
                            stroke={activeAutomationAccent.stroke}
                            strokeWidth="1.6"
                          />
                          {/* Trigger (54,116) -> Source Bottom (168,178) */}
                          <path
                            d="M 54 116 C 108 116, 114 178, 168 178"
                            stroke={activeAutomationAccent.stroke}
                            strokeWidth="1.6"
                          />
                          {/* Source Top (168,48) -> Merge (282,116) */}
                          <path
                            d="M 168 48 C 222 48, 228 116, 282 116"
                            stroke="#CBD5E1"
                            strokeWidth="1.5"
                          />
                          {/* Source Bottom (168,178) -> Merge (282,116) */}
                          <path
                            d="M 168 178 C 222 178, 228 116, 282 116"
                            stroke="#CBD5E1"
                            strokeWidth="1.5"
                          />
                          {/* Merge (282,116) -> Claude AI Process (390,116) */}
                          <path
                            d="M 282 116 L 390 116"
                            stroke="#CBD5E1"
                            strokeWidth="1.5"
                          />
                          {/* Claude AI Process (390,116) -> Sender Deliver (492,48) */}
                          <path
                            d="M 390 116 C 440 116, 444 48, 492 48"
                            stroke="#CBD5E1"
                            strokeWidth="1.5"
                          />
                          {/* Sender Deliver (492,48) -> Next Step + Button (564,116) */}
                          <path
                            d="M 492 48 C 534 48, 530 116, 564 116"
                            stroke="#CBD5E1"
                            strokeWidth="1.5"
                          />
                        </svg>

                        {/* 1. Trigger Node (D-shaped rounded-left) */}
                        <div className="absolute left-[9%] top-[47.5%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                          <button
                            type="button"
                            onClick={() => setSelectedAutomationNodeId('trigger')}
                            className={`relative h-11 w-12 rounded-l-full rounded-r-xl bg-white border-[1.5px] flex items-center justify-center transition-all cursor-pointer ${
                              selectedAutomationNodeId === 'trigger'
                                ? `${activeAutomationAccent.cardActive}`
                                : 'border-slate-300 shadow-xs hover:border-slate-400'
                            }`}
                            aria-label={activeAutomation.nodes.trigger.label}
                          >
                            <Clock className={`h-4 w-4 ${activeAutomationAccent.text}`} />
                            <span
                              className="absolute -right-1 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-slate-500 ring-2 ring-white"
                              aria-hidden="true"
                            />
                          </button>
                          <span className="mt-1.5 w-24 text-center text-[10px] font-medium leading-tight text-slate-700">
                            {activeAutomation.nodes.trigger.label}
                          </span>
                        </div>

                        {/* 2a. Source Top Node */}
                        <div className="absolute left-[28%] top-[19.7%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                          <button
                            type="button"
                            onClick={() => setSelectedAutomationNodeId('sourceA')}
                            className={`relative h-11 w-11 rounded-xl bg-white border flex items-center justify-center transition-all cursor-pointer ${
                              selectedAutomationNodeId === 'sourceA'
                                ? activeAutomationAccent.cardActive
                                : 'border-slate-200/90 shadow-xs hover:border-slate-300'
                            }`}
                            aria-label={activeAutomation.nodes.sourceA.label}
                          >
                            <span
                              className="absolute -left-1 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-slate-500 ring-2 ring-white"
                              aria-hidden="true"
                            />
                            <Database className="h-4 w-4 text-[#15803D]" />
                            <span
                              className="absolute -right-1 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-slate-500 ring-2 ring-white"
                              aria-hidden="true"
                            />
                          </button>
                          <span className="mt-1.5 w-24 text-center text-[10px] font-medium leading-tight text-slate-700">
                            {activeAutomation.nodes.sourceA.label}
                          </span>
                        </div>

                        {/* 2b. Source Bottom Node */}
                        <div className="absolute left-[28%] top-[73%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                          <button
                            type="button"
                            onClick={() => setSelectedAutomationNodeId('sourceB')}
                            className={`relative h-11 w-11 rounded-xl bg-white border flex items-center justify-center transition-all cursor-pointer ${
                              selectedAutomationNodeId === 'sourceB'
                                ? activeAutomationAccent.cardActive
                                : 'border-slate-200/90 shadow-xs hover:border-slate-300'
                            }`}
                            aria-label={activeAutomation.nodes.sourceB.label}
                          >
                            <span
                              className="absolute -left-1 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-slate-500 ring-2 ring-white"
                              aria-hidden="true"
                            />
                            <FileCheck2 className="h-4 w-4 text-[#1D4ED8]" />
                            <span
                              className="absolute -right-1 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-slate-500 ring-2 ring-white"
                              aria-hidden="true"
                            />
                          </button>
                          <span className="mt-1.5 w-24 text-center text-[10px] font-medium leading-tight text-slate-700">
                            {activeAutomation.nodes.sourceB.label}
                          </span>
                        </div>

                        {/* 3. Merge Node */}
                        <div className="absolute left-[47%] top-[47.5%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                          <button
                            type="button"
                            onClick={() => setSelectedAutomationNodeId('merge')}
                            className={`relative h-11 w-11 rounded-xl bg-white border flex items-center justify-center transition-all cursor-pointer ${
                              selectedAutomationNodeId === 'merge'
                                ? activeAutomationAccent.cardActive
                                : 'border-slate-200/90 shadow-xs hover:border-slate-300'
                            }`}
                            aria-label={activeAutomation.nodes.merge.label}
                          >
                            <span
                              className="absolute -left-1 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-slate-500 ring-2 ring-white"
                              aria-hidden="true"
                            />
                            <GitMerge className="h-4 w-4 text-slate-700" />
                            <span
                              className="absolute -right-1 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-slate-500 ring-2 ring-white"
                              aria-hidden="true"
                            />
                          </button>
                          <span className="mt-1.5 w-24 text-center text-[10px] font-medium leading-tight text-slate-700">
                            {activeAutomation.nodes.merge.label}
                          </span>
                        </div>

                        {/* 4. Claude AI Processing Node */}
                        <div className="absolute left-[65%] top-[47.5%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                          <button
                            type="button"
                            onClick={() => setSelectedAutomationNodeId('process')}
                            className={`relative h-11 w-11 rounded-xl bg-white border flex items-center justify-center transition-all cursor-pointer ${
                              selectedAutomationNodeId === 'process'
                                ? activeAutomationAccent.cardActive
                                : 'border-slate-200/90 shadow-xs hover:border-slate-300'
                            }`}
                            aria-label={activeAutomation.nodes.process.label}
                          >
                            <span
                              className="absolute -left-1 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-slate-500 ring-2 ring-white"
                              aria-hidden="true"
                            />
                            <Sparkles className="h-4 w-4 text-[#B45309]" />
                            <span
                              className="absolute -right-1 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-slate-500 ring-2 ring-white"
                              aria-hidden="true"
                            />
                          </button>
                          <span className="mt-1.5 w-24 text-center text-[10px] font-medium leading-tight text-slate-700">
                            {activeAutomation.nodes.process.label}
                          </span>
                        </div>

                        {/* 5. Sender Delivery Node */}
                        <div className="absolute left-[82%] top-[19.7%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                          <button
                            type="button"
                            onClick={() => setSelectedAutomationNodeId('deliver')}
                            className={`relative h-11 w-11 rounded-xl bg-white border flex items-center justify-center transition-all cursor-pointer ${
                              selectedAutomationNodeId === 'deliver'
                                ? activeAutomationAccent.cardActive
                                : 'border-slate-200/90 shadow-xs hover:border-slate-300'
                            }`}
                            aria-label={activeAutomation.nodes.deliver.label}
                          >
                            <span
                              className="absolute -left-1 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-slate-500 ring-2 ring-white"
                              aria-hidden="true"
                            />
                            <Mail className="h-4 w-4 text-[#BE185D]" />
                            <span
                              className="absolute -right-1 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-slate-500 ring-2 ring-white"
                              aria-hidden="true"
                            />
                          </button>
                          <span className="mt-1.5 w-24 text-center text-[10px] font-medium leading-tight text-slate-700">
                            {activeAutomation.nodes.deliver.label}
                          </span>
                        </div>

                        {/* 6. Dark + Action Node (Cycles Workflow) */}
                        <div className="absolute left-[94%] top-[47.5%] -translate-x-1/2 -translate-y-1/2 z-10">
                          <button
                            type="button"
                            onClick={handleCycleAutomation}
                            title="Next managed workflow"
                            aria-label="Switch to next managed automation workflow"
                            className="h-7 w-7 rounded-lg bg-[#0F172A] text-white hover:bg-slate-800 shadow-xs flex items-center justify-center transition-colors cursor-pointer"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Compact Vertical Node Fallback for Mobile (< sm) */}
                      <div className="sm:hidden space-y-2">
                        {(
                          ['trigger', 'sourceA', 'sourceB', 'merge', 'process', 'deliver'] as const
                        ).map((nodeKey) => {
                          const node = activeAutomation.nodes[nodeKey];
                          const isSelected = selectedAutomationNodeId === nodeKey;
                          return (
                            <button
                              key={nodeKey}
                              type="button"
                              onClick={() => setSelectedAutomationNodeId(nodeKey)}
                              className={`w-full rounded-lg px-3 py-2 border text-left flex items-center justify-between gap-2 transition-colors cursor-pointer ${
                                isSelected
                                  ? activeAutomationAccent.cardActive
                                  : 'bg-white border-slate-200/90'
                              }`}
                            >
                              <span className="text-xs font-medium text-slate-900">
                                {node.label}
                              </span>
                              <span className="font-mono text-[10px] text-slate-500">
                                {node.tool}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Selected Workflow Node Inspector Strip */}
                    <div className="rounded-xl bg-[#F8FAFC] border border-slate-200/90 px-3.5 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 font-mono text-[10.5px] tabular-nums">
                          <Zap className={`h-3 w-3 shrink-0 ${activeAutomationAccent.text}`} />
                          <span className={`font-medium ${activeAutomationAccent.text}`}>
                            {activeWorkflowNode.tool}
                          </span>
                          <span aria-hidden="true" className="text-slate-300">
                            ·
                          </span>
                          <span className="text-slate-600 truncate">
                            {activeWorkflowNode.label}
                          </span>
                        </div>
                        <p className="mt-0.5 text-xs text-slate-700">
                          {activeWorkflowNode.detail}
                        </p>
                      </div>
                      <span className="font-mono text-[10.5px] text-slate-500 shrink-0 tabular-nums">
                        {activeAutomation.saved} · {activeAutomation.cadence}
                      </span>
                    </div>
                  </div>

                  <div className="px-5 py-3 bg-[#F8FAFC] border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-600">
                    <span>
                      Orchestrated with n8n · Claude AI · Sender · Supabase
                    </span>
                    <span className="font-mono text-[#0369A1] tabular-nums">
                      Full audit logs
                    </span>
                  </div>
                </div>
              )}
                </motion.div>
              </div>
            </MotionConfig>
          </div>

          {/* Right Column: Interactive Steps 01–05 */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-1.5">
            {SUPPORT_STEPS.map((step) => {
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
                      : 'border border-transparent hover:bg-slate-50'
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
                      {isActive && (
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
        </div>
      </div>
    </section>
  );
}
