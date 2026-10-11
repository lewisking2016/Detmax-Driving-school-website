'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState('ai')

  const courses = [
    {
      id: 'ai',
      name: 'AI Basics',
      iconSvg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
          <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
        </svg>
      ),
      detmaxPrice: '7,500 KES',
      duration: '3 weeks',
      features: [
        'ChatGPT & Claude Training',
        'Prompt Engineering Mastery',
        'AI Productivity Tools for Work',
        'Dedicated WhatsApp Support',
        'Verifiable Certificate Included',
      ],
      competitors: [
        { name: 'Moringa School', price: '40,000 KES' },
        { name: 'Coursera (Pro)', price: '25,000 KES' },
      ],
      message: 'Save 50–81% compared to conventional bootcamps',
      link: '/courses/ai-basics',
    },
    {
      id: 'notion',
      name: 'Notion & PM',
      iconSvg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        </svg>
      ),
      detmaxPrice: '8,500 KES',
      duration: '3 weeks',
      features: [
        'Notion Masterclass & Databases',
        'Project Boards & Kanban Setup',
        'Team Collaboration Systems',
        '10 Pre-built Templates (5K value)',
        'One-on-One Instructor Support',
      ],
      competitors: [
        { name: 'NobleProg', price: '35,000 KES' },
        { name: 'Skillademia', price: '15,000 KES' },
      ],
      message: 'Save 43–75% plus receive 10 professional templates',
      link: '/courses/notion-pm',
    },
    {
      id: 'pm',
      name: 'Project Mgmt',
      iconSvg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      detmaxPrice: '6,000 KES',
      duration: '2 weeks',
      features: [
        'Project Lifecycle Fundamentals',
        'Milestone & Budget Tracking',
        'Real Portfolio Case Studies',
        'Team Leadership Protocols',
        'Fast-Track Qualification',
      ],
      competitors: [
        { name: 'Moringa School', price: '45,000 KES' },
        { name: 'IJLAPS Institute', price: '25,000 KES' },
      ],
      message: 'Most accessible practical PM training in Kenya',
      link: '/courses/project-management',
    },
    {
      id: 'solar',
      name: 'Solar Basics',
      iconSvg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ),
      detmaxPrice: '12,000 KES',
      duration: '3 weeks',
      features: [
        'Photovoltaic Fundamentals',
        'Load & Inverter Sizing Calculation',
        'Installation Safety Standards',
        'Pathway to EPRA T1 License',
        'Clean Energy Career Foundations',
      ],
      competitors: [
        { name: 'University of Nairobi', price: '42,000 KES' },
        { name: 'SERC Strathmore', price: '49,000 KES' },
      ],
      message: 'Save 60–77% before official EPRA certification',
      link: '/courses/solar-basics',
    },
    {
      id: 'erp',
      name: 'ERP & eTIMS',
      iconSvg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      detmaxPrice: '10,000 KES',
      duration: '3 weeks',
      features: [
        'ERP Workflow Fundamentals',
        'KRA eTIMS Electronic Invoicing',
        'M-Pesa Business Reconciliation',
        'Inventory Management Systems',
        'Beginner-Friendly Business Setup',
      ],
      competitors: [
        { name: 'NobleProg (SAP)', price: '260,000 KES' },
        { name: 'ITKenya', price: '260,000 KES' },
      ],
      message: 'Direct practical training on Kenya tax & inventory software',
      link: '/courses/erp-intro',
    },
    {
      id: 'medical',
      name: 'Medical Admin',
      iconSvg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      detmaxPrice: '7,000 KES',
      duration: '2 weeks',
      features: [
        'Healthcare Clinic Operations',
        'Digital Patient File Management',
        'NHIF / SHIF Billing Procedures',
        'Front-Desk Protocol & Scheduling',
        'Accredited Certificate Included',
      ],
      competitors: [
        { name: 'KIPS College', price: '25,000 KES' },
        { name: 'ICS College', price: '20,000 KES' },
      ],
      message: 'Designed specifically for healthcare and clinic staff',
      link: '/courses/medical-admin',
    },
    {
      id: 'computer',
      name: 'Computer Basics',
      iconSvg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      detmaxPrice: '9,500 KES',
      duration: '4 weeks',
      features: [
        'Full MS Office (Word, Excel, PPT)',
        'Touch Typing & Accuracy',
        'Cloud Workspace & Gmail Security',
        '100% Online Self-Paced Training',
        'Free First Aid & Life Skills Access',
      ],
      competitors: [
        { name: 'Strathmore University', price: '45,000 KES' },
        { name: 'Tech Academy Nairobi', price: '30,000 KES' },
      ],
      message: 'Save 52–80% on full computer packages',
      link: '/courses/computer-basics',
    },
    {
      id: 'marketing',
      name: 'Digital Mkt',
      iconSvg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      ),
      detmaxPrice: '7,500 KES',
      duration: '2 weeks',
      features: [
        'Meta & TikTok Business Ad Setup',
        'Converting Content & Copywriting',
        'Local SEO & Google Maps Traffic',
        'WhatsApp Business Funnels',
        'Actionable Sales Campaigns',
      ],
      competitors: [
        { name: 'IIDE Academy', price: '40,000 KES' },
        { name: 'EduDelphi', price: '35,000 KES' },
      ],
      message: 'Save 62–81% on modern practical digital marketing',
      link: '/courses/digital-marketing',
    },
  ]

  const activeCourse = courses.find((c) => c.id === activeTab)

  return (
    <section id="courses" className="section bg-light" style={{ padding: '95px 0' }}>
      <div className="container">
        {/* Header Block with distinct centered eyebrow */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
            <span className="section-eyebrow">Price Comparison &amp; Value</span>
          </div>
          <h2 className="section-title">Master In-Demand Skills For Less</h2>
          <p className="section-desc" style={{ margin: '0 auto', maxWidth: '720px' }}>
            Industry-standard practical training at <strong style={{ color: '#DC2626' }}>60–75% less</strong> than major Nairobi colleges.
            Join <strong style={{ color: '#DC2626' }}>1,000+ graduates</strong> building real careers.
          </p>
        </div>

        {/* Course Tabs (Clean Pill Buttons with SVG icons, no emojis) */}
        <div className="course-tabs mb-40">
          <div className="tabs-container">
            {courses.map((course) => (
              <button
                key={course.id}
                className={`tab-btn ${activeTab === course.id ? 'active' : ''}`}
                onClick={() => setActiveTab(course.id)}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                  {course.iconSvg}
                </span>
                <span>{course.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Course Card */}
        {activeCourse && (
          <div className="course-comparison-card active" style={{ maxWidth: '1060px', margin: '0 auto' }}>
            <div className="comparison-grid">
              {/* Detmax Column */}
              <div className="provider-column detmax-featured">
                <div className="provider-header detmax">
                  <div>
                    <h3 style={{ fontSize: '1.4rem' }}>Detmax Academy</h3>
                    <span style={{ fontSize: '0.85rem', color: '#64748B' }}>Online + Personal Mentor</span>
                  </div>
                  <span className="badge-best" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    Best Value
                  </span>
                </div>

                <div className="course-details" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div className="price-highlight">{activeCourse.detmaxPrice}</div>
                  <div className="duration-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                    {activeCourse.duration} Intensive
                  </div>

                  <ul className="features-list">
                    {activeCourse.features.map((feature, idx) => (
                      <li key={idx}>
                        <span style={{ color: '#16A34A', fontWeight: 'bold' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div style={{ marginTop: 'auto' }}>
                    <Link
                      href={activeCourse.link}
                      className="btn btn-primary full-width"
                      style={{ textAlign: 'center', display: 'block', borderRadius: '12px' }}
                    >
                      Enroll in {activeCourse.name} →
                    </Link>
                    <p className="marketing-note">{activeCourse.message}</p>
                  </div>
                </div>
              </div>

              {/* Competitor Columns */}
              {activeCourse.competitors.map((competitor, idx) => (
                <div key={idx} className="provider-column" style={{ justifyContent: 'space-between' }}>
                  <div>
                    <div className="provider-header competitor">
                      <div>
                        <h3>{competitor.name}</h3>
                        <span style={{ fontSize: '0.82rem', color: '#94A3B8' }}>Market Alternative</span>
                      </div>
                      <span className="badge-standard">Competitor</span>
                    </div>
                    <div className="course-details">
                      <div className="price-highlight competitor-price">{competitor.price}</div>
                      <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: '1.5', marginTop: '12px' }}>
                        Typical commercial fee in Kenya for equivalent syllabus coverage.
                      </p>
                      <div style={{ marginTop: '20px', padding: '14px', background: '#F1F5F9', borderRadius: '10px', fontSize: '0.85rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div>• Standard classroom schedules</div>
                        <div>• High physical overhead costs</div>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #E2E8F0', textAlign: 'center' }}>
                    <span style={{ fontSize: '0.82rem', color: '#94A3B8' }}>Save with Detmax</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Banner */}
        <div
          className="text-center mt-60"
          style={{
            background: '#FFFFFF',
            padding: '40px 30px',
            borderRadius: '24px',
            maxWidth: '850px',
            margin: '60px auto 0',
            border: '1px solid rgba(0, 31, 63, 0.08)',
            boxShadow: '0 10px 30px -5px rgba(0,0,0,0.05)',
          }}
        >
          <h3 style={{ fontSize: '1.85rem', marginBottom: '12px', color: 'var(--primary-navy)', fontWeight: 800 }}>
            Join Kenya's Smartest Upskilling Community
          </h3>
          <p style={{ fontSize: '1.1rem', color: '#4B5563', maxWidth: '600px', margin: '0 auto 24px', lineHeight: 1.6 }}>
            Gain job-ready skills with verifiable certificates and live mentor support.
            <br />
            <span style={{ color: '#DC2626', fontWeight: '700' }}>
              Early bird: 30% discount available for the next 50 enrollments
            </span>
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/registration" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
              Start Learning Today →
            </Link>
            <a
              href="https://wa.me/254716894174"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: '16px 32px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Chat with Advisor
            </a>
          </div>
          <p style={{ marginTop: '20px', fontSize: '0.9rem', color: '#64748B' }}>
            ✓ No prior experience needed • ✓ 100% Online flexibility • ✓ Recognized certificates included
          </p>
        </div>
      </div>
    </section>
  )
}
