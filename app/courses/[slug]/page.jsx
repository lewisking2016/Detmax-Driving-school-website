'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

const coursesData = {
  'ai-basics': {
    title: 'AI in Daily Life',
    subtitle: 'ChatGPT, Claude & Everyday Tools for Work & Study',
    price: '7,500 KES',
    duration: '3 weeks',
    format: 'Online, Self-paced',
    support: 'WhatsApp + Email',
    color: '#dc2626',
    what_youll_learn: [
      'ChatGPT, Claude, Gemini - Which tool for what',
      'Prompt engineering - How to ask AI better questions',
      'AI tools for productivity (NotebookLM, Perplexity)',
      'Using AI for writing, planning & problem-solving',
      'AI limitations & ethical use',
      'Real-world projects you can use immediately',
    ],
    curriculum: [
      {
        week: 'Week 1: AI Fundamentals',
        modules: [
          'Module 1: What is AI? History, capabilities & limitations',
          'Module 2: ChatGPT vs Claude vs Gemini - Hands-on comparison',
          'Module 3: First AI project - Write your first prompt',
          'Assignment: Experiment with 3 AI tools',
        ],
      },
      {
        week: 'Week 2: Practical Skills',
        modules: [
          'Module 1: Prompt Engineering - CO-STAR framework',
          'Module 2: AI tools for productivity (NotebookLM, Perplexity, Photomath)',
          'Module 3: Using AI for work (emails, presentations, planning)',
          'Assignment: Create 5 powerful prompts',
        ],
      },
      {
        week: 'Week 3: Application & Ethics',
        modules: [
          'Module 1: AI for job hunting & career development',
          'Module 2: AI red flags - Hallucinations, bias, outdated info',
          'Module 3: Ethics & responsible AI use',
          'Final Project: Build your personal AI workflow',
        ],
      },
    ],
    audience: [
      { icon: '👨‍🎓', title: 'High School Leavers', desc: 'Upskill before university' },
      { icon: '💼', title: 'Professionals', desc: 'Stay ahead with AI skills' },
      { icon: '🎯', title: 'Job Seekers', desc: 'Boost your resume' },
      { icon: '🚀', title: 'Entrepreneurs', desc: 'Automate your business' },
    ],
    payment_options: [
      { title: 'Full Payment', price: '7,500 KES', desc: 'Pay once, start immediately' },
      { title: '2 Installments', price: '3,750 KES', desc: 'Week 1 + Week 3 (No interest)' },
    ],
  },
  'notion-pm': {
    title: 'Notion & Project Management',
    subtitle: 'Master Notion, Organize Your Projects, Collaborate Better',
    price: '8,500 KES',
    duration: '3 weeks',
    format: 'Online, Self-paced',
    support: 'WhatsApp + Email',
    color: '#8b5cf6',
    what_youll_learn: [
      'Notion basics (pages, databases, templates)',
      'Project management setup (tasks, timelines, Kanban views)',
      'Note-taking systems',
      'Team collaboration',
      'Creating dashboards',
      'Real projects (school assignments, personal projects, business tasks)',
    ],
    curriculum: [
      {
        week: 'Week 1: Notion Fundamentals',
        modules: [
          'Module 1: Creating pages, databases, templates',
          'Module 2: Building your first Notion workspace',
          'Module 3: Organization systems (para-archive-flag method)',
          'Project: Personal knowledge base',
        ],
      },
      {
        week: 'Week 2: Project Management System',
        modules: [
          'Module 1: Task tracking (Kanban, timeline, calendar views)',
          'Module 2: Building a project board',
          'Module 3: Real examples (school projects, freelance work)',
          'Project: Manage a real task in Notion',
        ],
      },
      {
        week: 'Week 3: Collaboration & Advanced',
        modules: [
          'Module 1: Sharing & team collaboration',
          'Module 2: Automating workflows',
          'Module 3: Connecting tools (Google, Slack integration)',
          'Final Project: Build system for your situation',
        ],
      },
    ],
    audience: [
      { icon: '🎓', title: 'Students', desc: 'Manage group projects better' },
      { icon: '👔', title: 'Young Professionals', desc: 'Lead teams and projects' },
      { icon: '🏢', title: 'SME Owners', desc: 'Organize your business tasks' },
      { icon: '🎯', title: 'Anyone', desc: 'Who wants to be organized' },
    ],
    payment_options: [
      { title: 'Full Payment', price: '8,500 KES', desc: 'Pay once, start immediately' },
      { title: '2 Installments', price: '4,250 KES', desc: 'Week 1 + Week 3 (No interest)' },
    ],
    bonus: '10 Notion templates (5,000 KES value) included free!',
  },
  'project-management': {
    title: 'Project Management Basics',
    subtitle: 'Planning, Tracking & Team Collaboration Made Simple',
    price: '6,000 KES',
    duration: '2 weeks',
    format: 'Online, Self-paced',
    support: 'WhatsApp + Email',
    color: '#0369a1',
    what_youll_learn: [
      'What is project management and why it matters',
      'Project lifecycle - From planning to closure',
      'Defining scope, timeline, and resources',
      'Task breakdown and delegation',
      'Tracking progress and managing risks',
      'Team communication best practices',
      'Real-world project examples',
    ],
    curriculum: [
      {
        week: 'Week 1: Project Fundamentals',
        modules: [
          'Module 1: What is project management? Key concepts',
          'Module 2: Project lifecycle - 5 phases explained',
          'Module 3: Scope, time, cost & quality (the iron triangle)',
          'Assignment: Define a project you want to manage',
        ],
      },
      {
        week: 'Week 2: Planning & Execution',
        modules: [
          'Module 1: Creating a project plan',
          'Module 2: Task breakdown (WBS - Work Breakdown Structure)',
          'Module 3: Tracking progress and managing risks',
          'Final Project: Create complete project plan with timeline',
        ],
      },
    ],
    audience: [
      { icon: '🎓', title: 'Students', desc: 'Manage group projects better' },
      { icon: '👔', title: 'Young Professionals', desc: 'Lead teams and projects' },
      { icon: '🏢', title: 'SME Owners', desc: 'Organize your business tasks' },
      { icon: '🎯', title: 'Anyone', desc: 'Who wants to be organized' },
    ],
    payment_options: [
      { title: 'Full Payment', price: '6,000 KES', desc: 'Pay once, start immediately' },
      { title: '2 Installments', price: '3,000 KES', desc: 'Week 1 + Week 2 (No interest)' },
    ],
  },
  'solar-basics': {
    title: 'Solar Energy Basics',
    subtitle: 'Gateway to T1 Certification & Solar Technician Career',
    price: '12,000 KES',
    duration: '3 weeks',
    format: 'Online, Self-paced',
    support: 'WhatsApp + Email',
    color: '#f59e0b',
    what_youll_learn: [
      'How solar energy works - fundamentals',
      'Solar PV components (panels, batteries, controllers, inverters)',
      'System types (standalone vs grid-tie)',
      'System sizing and design basics',
      'Installation safety and process overview',
      'Maintenance and troubleshooting',
      'Path to official T1 certification',
      'Solar careers and job opportunities',
    ],
    curriculum: [
      {
        week: 'Week 1: Solar Fundamentals',
        modules: [
          'Module 1: How solar energy works - The physics explained simply',
          'Module 2: Solar PV system components (panels, batteries, charge controllers, inverters)',
          'Module 3: System types - Standalone vs grid-tie systems',
          'Assignment: Identify components in real Kenya installations',
        ],
      },
      {
        week: 'Week 2: System Sizing & Design',
        modules: [
          'Module 1: Calculating energy needs (kWh daily usage)',
          'Module 2: System sizing basics (PV array, battery, inverter sizing)',
          'Module 3: Real project examples - Typical Kenyan home/business',
          'Assignment: Size a solar system for given scenario',
        ],
      },
      {
        week: 'Week 3: Installation, Maintenance & Careers',
        modules: [
          'Module 1: Installation safety and process overview',
          'Module 2: Maintenance and troubleshooting common issues',
          'Module 3: Solar careers and T1 certification pathway',
          'Final Project: Design and present complete solar solution',
        ],
      },
    ],
    audience: [
      { icon: '⚡', title: 'Career Changers', desc: 'Enter high-demand field' },
      { icon: '🎓', title: 'High School Leavers', desc: 'Learn trade skills' },
      { icon: '🏠', title: 'Property Owners', desc: 'Understand solar better' },
      { icon: '🚀', title: 'Entrepreneurs', desc: 'Start solar business' },
    ],
    payment_options: [
      { title: 'Full Payment', price: '12,000 KES', desc: 'Pay once, start immediately' },
      { title: '3 Installments', price: '4,000 KES', desc: 'Weekly payments (No interest)' },
    ],
    pathway: 'Step 1: Detmax Solar Basics (12K) → Step 2: Official T1 Certification (42K UoN) → Step 3: Solar Technician (50K+ salary)',
  },
  'erp-intro': {
    title: 'ERP Systems Introduction',
    subtitle: 'Business Systems Fundamentals for Office Workers & Career Changers',
    price: '10,000 KES',
    duration: '3 weeks',
    format: 'Online, Self-paced',
    support: 'WhatsApp + Email',
    color: '#8b5cf6',
    what_youll_learn: [
      'What is ERP and why businesses use it',
      'Key ERP modules (Finance, Inventory, HR, Sales, CRM)',
      'How data connects across ERP systems',
      'Kenya-specific systems (KRA eTIMS, M-Pesa reconciliation)',
      'Payroll processing (PAYE, NSSF, NHIF)',
      'Hands-on with ERPNext demo system',
      'ERP career paths and salary expectations',
      'Path to professional ERP certification',
    ],
    curriculum: [
      {
        week: 'Week 1: ERP Fundamentals',
        modules: [
          'Module 1: ERP Fundamentals - What is ERP? Why do businesses use it?',
          'Module 2: Key modules (Finance, Inventory, HR, Sales, CRM)',
          'Module 3: How data connects across modules',
          'Assignment: Analyze a real business\' ERP needs',
        ],
      },
      {
        week: 'Week 2: Kenya-Specific ERP Topics',
        modules: [
          'Module 1: KRA eTIMS integration for tax compliance',
          'Module 2: M-Pesa reconciliation and payment processing',
          'Module 3: Payroll systems (PAYE, NSSF, NHIF calculations)',
          'Assignment: Practice with ERPNext demo system',
        ],
      },
      {
        week: 'Week 3: Careers & Advanced Topics',
        modules: [
          'Module 1: ERP career paths in Kenya (SAP, Oracle, ERPNext consultants)',
          'Module 2: Salary expectations (40K-100K+ per month)',
          'Module 3: How to get ERP-certified after this course',
          'Final Project: Complete ERP implementation analysis',
        ],
      },
    ],
    audience: [
      { icon: '💼', title: 'Office Workers', desc: 'Understand your system' },
      { icon: '🔄', title: 'Career Changers', desc: 'Enter high-paying field' },
      { icon: '🏢', title: 'SME Owners', desc: 'Run business systems' },
      { icon: '📊', title: 'Finance Staff', desc: 'Master accounting systems' },
    ],
    payment_options: [
      { title: 'Full Payment', price: '10,000 KES', desc: 'Pay once, start immediately' },
      { title: '2 Installments', price: '5,000 KES', desc: 'Week 1 + Week 3 (No interest)' },
    ],
    stats: 'Market: 1000+ businesses using ERP in Kenya | Salary: 60K-100K+/month | Jobs: 5000+ annually',
  },
  'medical-admin': {
    title: 'Medical Admin Basics',
    subtitle: 'Healthcare Administration & Office Management Fundamentals',
    price: '7,000 KES',
    duration: '2 weeks',
    format: 'Online, Self-paced',
    support: 'WhatsApp + Email',
    color: '#ec4899',
    what_youll_learn: [
      'Healthcare industry overview in Kenya',
      'Patient data management and privacy',
      'Electronic health records (EHR) basics',
      'Medical terminology essentials',
      'Hospital and clinic administrative systems',
      'Appointment and patient scheduling',
      'Healthcare compliance and regulations',
      'Office management best practices',
    ],
    curriculum: [
      {
        week: 'Week 1: Healthcare Fundamentals',
        modules: [
          'Module 1: Kenya\' healthcare system - Public, private, and NGO sectors',
          'Module 2: Healthcare worker roles and responsibilities',
          'Module 3: Medical terminology essentials',
          'Assignment: Learn 50 key medical terms',
        ],
      },
      {
        week: 'Week 2: Administrative Systems',
        modules: [
          'Module 1: Patient data management and NHIF',
          'Module 2: Electronic health records (EHR) and systems',
          'Module 3: Appointment scheduling and clinic management',
          'Final Project: Design clinic administrative workflow',
        ],
      },
    ],
    audience: [
      { icon: '🏥', title: 'Healthcare Workers', desc: 'Upgrade your skills' },
      { icon: '👨‍⚕️', title: 'Medical Students', desc: 'Learn admin side' },
      { icon: '🔄', title: 'Career Changers', desc: 'Enter healthcare field' },
      { icon: '📋', title: 'Admin Professionals', desc: 'Specialize in healthcare' },
    ],
    payment_options: [
      { title: 'Full Payment', price: '7,000 KES', desc: 'Pay once, start immediately' },
      { title: '2 Installments', price: '3,500 KES', desc: 'Week 1 + Week 2 (No interest)' },
    ],
  },
  'computer-basics': {
    title: 'Computer Basics Enhanced',
    subtitle: 'Master Essential Digital Skills & Office Tools',
    price: '9,500 KES',
    duration: '4 weeks',
    format: 'Online, Self-paced',
    support: 'WhatsApp + Email',
    color: '#06b6d4',
    what_youll_learn: [
      'Computer fundamentals - Hardware, software, operating systems',
      'Windows/Mac operating system mastery',
      'File management and organization',
      'Microsoft Word - Professional document creation',
      'Microsoft Excel - Data, formulas, and basic analysis',
      'Microsoft PowerPoint - Professional presentations',
      'Internet and email management',
      'Cybersecurity and online safety',
    ],
    curriculum: [
      {
        week: 'Week 1: Computer Fundamentals',
        modules: [
          'Module 1: Computer basics - Hardware and software',
          'Module 2: Operating system (Windows/Mac)',
          'Module 3: File management and folder organization',
          'Assignment: Organize your computer files',
        ],
      },
      {
        week: 'Week 2: Microsoft Office Suite - Part 1',
        modules: [
          'Module 1: Microsoft Word - Document creation and formatting',
          'Module 2: Creating professional letters and resumes',
          'Module 3: Tables, images, and advanced formatting',
          'Assignment: Create a professional resume',
        ],
      },
      {
        week: 'Week 3: Microsoft Office Suite - Part 2',
        modules: [
          'Module 1: Microsoft Excel - Spreadsheets and formulas',
          'Module 2: Data organization and basic analysis',
          'Module 3: Charts and graphs for presentations',
          'Assignment: Create a business budget spreadsheet',
        ],
      },
      {
        week: 'Week 4: Internet, Email & Security',
        modules: [
          'Module 1: Internet basics and web browsers',
          'Module 2: Email management (Gmail, Outlook)',
          'Module 3: Microsoft PowerPoint - Creating presentations',
          'Final Project: Create a business presentation',
        ],
      },
    ],
    audience: [
      { icon: '👨‍🎓', title: 'First-Time Learners', desc: 'Start from zero' },
      { icon: '💼', title: 'Job Seekers', desc: 'Boost your resume' },
      { icon: '👴', title: 'Older Adults', desc: 'Learn at your pace' },
      { icon: '🏢', title: 'Business Staff', desc: 'Upgrade your skills' },
    ],
    payment_options: [
      { title: 'Full Payment', price: '9,500 KES', desc: 'Pay once, start immediately' },
      { title: '2 Installments', price: '4,750 KES', desc: 'Week 1 + Week 3 (No interest)' },
    ],
    includes: 'Template library + Ready-to-use documents + Certificate upon completion',
  },
  'digital-marketing': {
    title: 'Digital Marketing Basics',
    subtitle: 'Master Social Media, SEO & Online Marketing Fundamentals',
    price: '7,500 KES',
    duration: '2 weeks',
    format: 'Online, Self-paced',
    support: 'WhatsApp + Email',
    color: '#ef4444',
    what_youll_learn: [
      'Digital marketing overview and strategy',
      'Social media marketing (Facebook, Instagram, WhatsApp, TikTok)',
      'SEO basics - Getting found on Google',
      'Email marketing fundamentals',
      'Content marketing and copywriting',
      'Google Analytics and tracking',
      'Paid advertising (Google Ads, Facebook Ads)',
      'Building a marketing strategy for business',
    ],
    curriculum: [
      {
        week: 'Week 1: Digital Marketing Fundamentals',
        modules: [
          'Module 1: Digital marketing overview and strategy',
          'Module 2: Social media platforms (Facebook, Instagram, TikTok, WhatsApp)',
          'Module 3: Creating engaging content and copywriting basics',
          'Assignment: Create a social media post that sells',
        ],
      },
      {
        week: 'Week 2: Advanced Digital Marketing',
        modules: [
          'Module 1: SEO basics - Keywords, on-page optimization, analytics',
          'Module 2: Email marketing and lead generation',
          'Module 3: Google Analytics and tracking results',
          'Final Project: Create a digital marketing plan for a business',
        ],
      },
    ],
    audience: [
      { icon: '🏢', title: 'Business Owners', desc: 'Grow online presence' },
      { icon: '📱', title: 'Social Media Managers', desc: 'Upskill your craft' },
      { icon: '💼', title: 'Career Changers', desc: 'Enter marketing field' },
      { icon: '🎯', title: 'Freelancers', desc: 'Market yourself better' },
    ],
    payment_options: [
      { title: 'Full Payment', price: '7,500 KES', desc: 'Pay once, start immediately' },
      { title: '2 Installments', price: '3,750 KES', desc: 'Week 1 + Week 2 (No interest)' },
    ],
  },
}

export default function CoursePage() {
  const params = useParams()
  const slug = params.slug
  const course = coursesData[slug]

  if (!course) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h1>Course Not Found</h1>
        <p>The course you're looking for doesn't exist.</p>
        <Link href="/" className="btn btn-primary mt-30">
          Back to Home
        </Link>
      </div>
    )
  }

  const renderAudienceIcon = (title) => {
    const t = (title || '').toLowerCase()
    if (t.includes('student') || t.includes('leaver') || t.includes('school')) {
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      )
    }
    if (t.includes('professional') || t.includes('career') || t.includes('changer')) {
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      )
    }
    if (t.includes('entrepreneur') || t.includes('owner') || t.includes('business') || t.includes('sme')) {
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    }
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    )
  }

  return (
    <main>
      {/* Header */}
      <header
        className="page-header text-white"
        style={{
          background: `linear-gradient(135deg, ${course.color} 0%, #00172E 100%)`,
          padding: '80px 20px',
          textAlign: 'center',
          marginTop: '90px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-eyebrow" style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)', marginBottom: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <span>Detmax Online Program</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 900, marginBottom: '16px', letterSpacing: '-0.02em' }}>
            {course.title}
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.92)', maxWidth: '650px', margin: '0 auto 24px', lineHeight: 1.6 }}>
            {course.subtitle}
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(255,255,255,0.12)', padding: '6px 16px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              {course.duration}
            </span>
            <span style={{ background: 'rgba(255,255,255,0.12)', padding: '6px 16px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              {course.format}
            </span>
            <span style={{ background: 'rgba(255,255,255,0.12)', padding: '6px 16px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              {course.support}
            </span>
          </div>
        </div>
      </header>

      {/* Overview Section */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            <div>
              <div className="section-eyebrow navy">
                <span>Core Competencies</span>
              </div>
              <h2 className="section-title">What You'll Learn</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px' }}>
                {course.what_youll_learn.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'center', background: '#F8FAFC', padding: '14px 18px', borderRadius: '12px', border: '1px solid rgba(0,31,63,0.06)' }}>
                    <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(16,185,129,0.15)', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.8rem', flexShrink: 0 }}>
                      ✓
                    </span>
                    <span style={{ fontSize: '0.98rem', color: '#334155', fontWeight: 500 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Summary Box */}
            <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '36px', border: '1.5px solid rgba(0,31,63,0.08)', boxShadow: '0 16px 40px -10px rgba(0,31,63,0.08)' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: course.color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Tuition &amp; Certification
              </span>
              <div style={{ fontSize: '2.8rem', fontWeight: 900, color: course.color, margin: '10px 0 6px', letterSpacing: '-0.02em' }}>
                {course.price}
              </div>
              <p style={{ color: '#059669', fontSize: '0.9rem', fontWeight: 600, marginBottom: '24px' }}>
                ✓ 2-Part Installment Plan via M-Pesa Available
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px 0', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.94rem' }}>
                  <span style={{ color: '#64748B' }}>Duration:</span>
                  <strong>{course.duration}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.94rem' }}>
                  <span style={{ color: '#64748B' }}>Format:</span>
                  <strong>{course.format}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.94rem' }}>
                  <span style={{ color: '#64748B' }}>Instructor Support:</span>
                  <strong>{course.support}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.94rem' }}>
                  <span style={{ color: '#64748B' }}>Certificate:</span>
                  <strong>Verified Digital &amp; Printable</strong>
                </div>
              </div>

              <Link href="/application" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block', padding: '16px', fontSize: '1.05rem', borderRadius: '12px', marginBottom: '12px' }}>
                Enroll Now in {course.title} →
              </Link>
              <a href="https://wa.me/254716894174?text=Hello%20Detmax,%20I%20have%20questions%20about%20the%20course" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', fontSize: '0.95rem', borderRadius: '12px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Chat with Course Advisor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section bg-light" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="text-center mb-50">
            <div className="section-eyebrow navy">
              <span>Weekly Syllabus</span>
            </div>
            <h2 className="section-title">Course Curriculum</h2>
            <p className="section-desc mx-auto">
              Hands-on modules designed for direct application on practical projects.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '850px', margin: '0 auto' }}>
            {course.curriculum.map((item, idx) => (
              <div key={idx} style={{ background: '#FFFFFF', padding: '28px 32px', borderRadius: '20px', border: '1px solid rgba(0,31,63,0.06)', boxShadow: '0 4px 16px -2px rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ width: '32px', height: '32px', borderRadius: '8px', background: course.color, color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.9rem' }}>
                    {idx + 1}
                  </span>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-navy)', margin: 0 }}>
                    {item.week}
                  </h4>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '44px' }}>
                  {item.modules.map((module, modIdx) => (
                    <div key={modIdx} style={{ fontSize: '0.94rem', color: '#4B5563', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                      <span style={{ color: course.color, fontWeight: 'bold' }}>•</span>
                      <span>{module}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="section bg-navy text-white" style={{ padding: '80px 0' }}>
        <div className="container text-center">
          <div className="section-eyebrow" style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: '#FFFFFF' }}>
            <span>Target Audience</span>
          </div>
          <h2 className="section-title text-white">Who Should Enroll?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginTop: '40px' }}>
            {course.audience.map((aud, idx) => (
              <div key={idx} style={{ background: 'rgba(255,255,255,0.08)', padding: '28px 24px', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', textAlign: 'center' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(255,255,255,0.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: '#FFFFFF' }}>
                  {renderAudienceIcon(aud.title)}
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px', color: '#FFFFFF' }}>{aud.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.5 }}>{aud.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="text-center mb-50">
            <div className="section-eyebrow navy">
              <span>Financial Inclusion</span>
            </div>
            <h2 className="section-title">Transparent Payment Plans</h2>
            <p className="section-desc mx-auto">
              Choose the option that fits your cash flow. Zero interest on split installments.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
            {course.payment_options.map((opt, idx) => (
              <div key={idx} style={{ background: '#F8FAFC', border: `2px solid ${idx === 0 ? course.color : '#E2E8F0'}`, padding: '32px 24px', borderRadius: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: course.color, textTransform: 'uppercase', marginBottom: '8px' }}>
                  {idx === 0 ? 'Full Discount' : 'Flexible Split'}
                </span>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '8px' }}>{opt.title}</h4>
                <p style={{ fontSize: '2rem', fontWeight: 900, color: course.color, margin: '8px 0 12px' }}>{opt.price}</p>
                <p style={{ fontSize: '0.92rem', color: '#64748B', marginBottom: '24px' }}>{opt.desc}</p>
                <Link href="/application" className="btn btn-primary" style={{ marginTop: 'auto', borderRadius: '10px', padding: '12px' }}>
                  Select Plan →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-light" style={{ padding: '80px 0' }}>
        <div className="container text-center">
          <h2 className="section-title">Ready to Start Learning?</h2>
          <p style={{ fontSize: '1.15rem', marginBottom: '30px', color: '#4B5563', maxWidth: '600px', margin: '0 auto 30px' }}>
            Join smart learners across Kenya today. Gain verified skills with dedicated mentorship.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/application" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem', borderRadius: '100px' }}>
              Enroll Now — {course.price} →
            </Link>
            <a href="https://wa.me/254716894174" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '16px 32px', fontSize: '1.05rem', borderRadius: '100px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Inquire via WhatsApp
            </a>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#DC2626', fontWeight: 600, marginTop: '24px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" />
              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
            </svg>
            Limited intake: First 50 students get 30% off!
          </p>
        </div>
      </section>
    </main>
  )
}
