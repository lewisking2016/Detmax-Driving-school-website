'use client'

import Link from 'next/link'

export default function ComputerCollege() {
  const courses = [
    {
      name: 'AI in Daily Life',
      price: '7,500',
      duration: '3 weeks',
      tag: 'Most Popular',
      desc: 'ChatGPT, Claude, Prompt Engineering & AI Automation workflows for work.',
      highlights: ['Prompt Engineering Mastery', 'Workflow Automation', 'WhatsApp Tutor Support'],
      link: '/courses/ai-basics',
      saving: 'Save 75% vs Strathmore',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" /><rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
        </svg>
      ),
    },
    {
      name: 'Notion & Project Management',
      price: '8,500',
      duration: '3 weeks',
      tag: 'In-Demand',
      desc: 'Organize team workflows, Kanban boards, sprint trackers, and custom templates.',
      highlights: ['10 Ready Templates (5K Value)', 'Agile & Kanban Boards', 'Remote Work Ready'],
      link: '/courses/notion-pm',
      saving: 'Save 70% vs Corporate Rates',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" />
        </svg>
      ),
    },
    {
      name: 'Project Management Fundamentals',
      price: '6,000',
      duration: '2 weeks',
      tag: 'Best Value',
      desc: 'Budgeting, milestones, risk registers, and team deliverables execution.',
      highlights: ['Practical Project Delivery', 'Gantt & Timeline Tracking', 'Resource Allocation'],
      link: '/courses/project-management',
      saving: 'Lowest PM fee in Kenya',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      name: 'Solar System Design Basics',
      price: '12,000',
      duration: '3 weeks',
      tag: 'Green Tech',
      desc: 'Solar fundamentals, inverter sizing, battery banking & prep for T1 certification.',
      highlights: ['Load & Sizing Calculation', 'T1 Certification Prep', 'Off-Grid & Hybrid'],
      link: '/courses/solar-basics',
      saving: 'Save 65% vs University Labs',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
        </svg>
      ),
    },
    {
      name: 'Intro to Enterprise ERP & eTIMS',
      price: '10,000',
      duration: '3 weeks',
      tag: 'Corporate',
      desc: 'Business management software, KRA eTIMS invoice generation & M-Pesa ledger sync.',
      highlights: ['KRA eTIMS Integration', 'Inventory & Ledger Sync', 'SME Accounting Basics'],
      link: '/courses/erp-intro',
      saving: 'Save 80% vs SAP Academies',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      name: 'Medical Administration & Operations',
      price: '7,000',
      duration: '2 weeks',
      tag: 'Healthcare',
      desc: 'Clinic workflow, digital patient registers, billing, and NHIF/SHIF claims protocol.',
      highlights: ['Patient Records Systems', 'Billing & SHIF Claims', 'Clinic Front-Office'],
      link: '/courses/medical-admin',
      saving: 'Save 60% vs Medical Colleges',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
    },
    {
      name: 'Full Computer Packages (MS Office)',
      price: '9,500',
      duration: '4 weeks',
      tag: 'Essential Foundation',
      desc: 'Word, Excel, PowerPoint, Access, Internet research, email security, and typing.',
      highlights: ['Advanced Excel & Formulas', 'Professional Typing Drills', 'Cloud Google Docs / Drive'],
      link: '/courses/computer-basics',
      saving: 'Free First Aid Included',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      name: 'Digital Marketing & Social Strategy',
      price: '7,500',
      duration: '2 weeks',
      tag: 'High ROI',
      desc: 'Meta Ads, TikTok business content, SEO fundamentals, and WhatsApp sales funnels.',
      highlights: ['Meta Ads Campaign Setup', 'Copywriting That Converts', 'Sales Funnel Systems'],
      link: '/courses/digital-marketing',
      saving: 'Save 75% vs Agency Bootcamps',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
        </svg>
      ),
    },
  ]

  const reasons = [
    {
      title: '100% Online & Flexible',
      desc: 'Study anytime from any device. Complete assignments at night or during weekends without commute.',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
    },
    {
      title: 'Affordable M-Pesa Installments',
      desc: 'Split your fees into 2 easy payments with zero interest. Transparent pricing with no exam surcharges.',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" /><line x1="2" y1="10" x2="22" y2="10" /></svg>,
    },
    {
      title: 'Recognized Digital Certificates',
      desc: 'Each graduate receives a verifiable completion credential to enhance their LinkedIn and job applications.',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>,
    },
    {
      title: '24/7 WhatsApp Mentor Support',
      desc: 'Direct access to your dedicated course instructor for prompt troubleshooting and feedback on projects.',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
    },
    {
      title: 'PMAK Career Mentorship',
      desc: 'Collaborative empowerment sessions with the Peer Mentors Association of Kenya for job search readiness.',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>,
    },
    {
      title: 'Free First Aid & Life Skills',
      desc: 'Every enrolled computer student receives complimentary access to emergency response training.',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>,
    },
  ]

  return (
    <main>
      <header className="page-header">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-eyebrow" style={{ borderColor: '#FFFFFF', color: '#FFFFFF', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <span>Kenya's Remote Tech Academy</span>
          </div>
          <h1>Online Computer College</h1>
          <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1.12rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.7 }}>
            Accredited digital training for students, job seekers, and working professionals. Study 100% online from anywhere in Kenya.
          </p>
        </div>
      </header>

      <section className="section" style={{ padding: '110px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '720px', margin: '0 auto 50px' }}>
            <div className="section-eyebrow">
              <span>Course Catalog</span>
            </div>
            <h2 className="section-title">Industry-Relevant Short Courses</h2>
            <p className="section-desc mx-auto">
              Choose your track to acquire in-demand tools and boost your earning potential.
            </p>
          </div>

          <div className="catalog-grid">
            {courses.map((course) => (
              <div key={course.name} className="catalog-card">
                <div className="card-top">
                  <span className="course-icon">{course.icon}</span>
                  <span className="duration-badge">{course.duration}</span>
                </div>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#DC2626', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '6px' }}>
                  {course.tag}
                </span>
                <h3>{course.name}</h3>
                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.55, marginBottom: '16px' }}>
                  {course.desc}
                </p>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
                  <div className="price">{course.price} KES</div>
                  <span style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 700, padding: '3px 8px', border: '1px solid #059669', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {course.saving}
                  </span>
                </div>

                <ul className="curriculum-chips">
                  {course.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
                  <Link href={course.link} className="btn btn-secondary" style={{ flex: 1, padding: '12px 16px', fontSize: '0.88rem' }}>
                    View Syllabus →
                  </Link>
                  <Link href="/application" className="btn btn-primary" style={{ padding: '12px 18px', fontSize: '0.88rem' }}>
                    Enroll
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: '110px 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '720px', margin: '0 auto 50px' }}>
            <div className="section-eyebrow navy">
              <span>The Detmax Advantage</span>
            </div>
            <h2 className="section-title">Why Learn Online With Us?</h2>
            <p className="section-desc mx-auto">
              Built from the ground up for convenience, affordability, and practical job skills.
            </p>
          </div>

          <div className="advantage-grid">
            {reasons.map((r) => (
              <div key={r.title} className="adv-card" style={{ flexDirection: 'row', gap: '20px' }}>
                <div className="icon-box">{r.icon}</div>
                <div>
                  <h4>{r.title}</h4>
                  <p>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: '110px 0', background: '#001F3F', color: '#FFFFFF' }}>
        <div className="container text-center" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div className="section-eyebrow" style={{ borderColor: '#FFFFFF', color: '#FFFFFF', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
            </svg>
            <span>Early Bird Special</span>
          </div>
          <h2 className="section-title text-white" style={{ marginBottom: '16px' }}>
            Get 30% Off Your Enrollment Today
          </h2>
          <p style={{ fontSize: '1.12rem', color: 'rgba(255,255,255,0.82)', maxWidth: '620px', margin: '0 auto 32px', lineHeight: 1.7 }}>
            Limited to the first 50 registrations across Kenya. Reserve your slot now and start immediately.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/application" className="btn btn-primary btn-lg">
              Claim 30% Discount &amp; Enroll →
            </Link>
            <a href="https://wa.me/18013195465?text=Hello%20Detmax,%20I%20want%20to%20enroll%20in%20Computer%20College" target="_blank" rel="noopener noreferrer" className="btn btn-white btn-lg">
              Chat with Course Advisor
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
