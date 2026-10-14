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
          <rect x="4" y="4" width="16" height="16" rx="0" />
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
      duration: '4 weeks',
      features: [
        'PV System Sizing & Load Calculation',
        'Battery & Inverter Selection',
        'Hands-on Installation Lab',
        'NEMA & KCAA Compliance',
        'Career-Ready Skills Certificate',
      ],
      competitors: [
        { name: 'Nairobi Technical', price: '50,000 KES' },
        { name: 'RVTTI', price: '35,000 KES' },
      ],
      message: 'Save 65–76% on accredited solar training',
      link: '/courses/solar-basics',
    },
    {
      id: 'erp',
      name: 'ERP & eTIMS',
      iconSvg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="0" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      detmaxPrice: '10,000 KES',
      duration: '3 weeks',
      features: [
        'ERP System Architecture Basics',
        'KRA eTIMS Integration Workflows',
        'Tax Compliance & Reporting',
        'Real Business Case Studies',
        'Industry-Recognized Certificate',
      ],
      competitors: [
        { name: 'Strathmore University', price: '60,000 KES' },
        { name: 'KASNEB-aligned', price: '28,000 KES' },
      ],
      message: 'Save 64–83% on practical ERP training',
      link: '/courses/erp-intro',
    },
    {
      id: 'medical',
      name: 'Medical Admin',
      iconSvg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
        </svg>
      ),
      detmaxPrice: '7,000 KES',
      duration: '2 weeks',
      features: [
        'Hospital Front-Office Operations',
        'Patient Records & EMR Systems',
        'Insurance Claims & Billing',
        'KMPDC Compliance Basics',
        'Job-Ready Skills Certificate',
      ],
      competitors: [
        { name: 'AMREF Training', price: '32,000 KES' },
        { name: 'Kenyatta University', price: '45,000 KES' },
      ],
      message: 'Save 78–84% on healthcare admin training',
      link: '/courses/medical-admin',
    },
    {
      id: 'computer',
      name: 'Computer Basics',
      iconSvg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="0" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      detmaxPrice: '9,500 KES',
      duration: '4 weeks',
      features: [
        'Full MS Office Suite Mastery',
        'Internet, Email & Cloud Tools',
        'Typing & File Management',
        'Professional Document Creation',
        'Recognized Completion Certificate',
      ],
      competitors: [
        { name: 'Excel Academy', price: '28,000 KES' },
        { name: 'KIM College', price: '22,000 KES' },
      ],
      message: 'Save 57–66% with PMAK mentorship included',
      link: '/courses/computer-basics',
    },
    {
      id: 'digital',
      name: 'Digital Marketing',
      iconSvg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
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
    <section id="courses" className="section" style={{ padding: '110px 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-eyebrow" style={{ display: 'inline-flex' }}>
            <span>Price Comparison &amp; Value</span>
          </div>
          <h2 className="section-title">Master In-Demand Skills For Less</h2>
          <p className="section-desc" style={{ margin: '0 auto', maxWidth: '720px' }}>
            Industry-standard practical training at <strong>60–75% less</strong> than major Nairobi colleges.
            Join <strong>1,000+ graduates</strong> building real careers.
          </p>
        </div>

        <div className="course-tabs mb-40">
          <div className="tabs-container" style={{ overflowX: 'auto', flexWrap: 'nowrap' }}>
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

        {activeCourse && (
          <div className="course-comparison-card active" style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <div className="comparison-grid">
              <div className="provider-column detmax-featured">
                <div className="provider-header detmax">
                  <div>
                    <h3 style={{ fontSize: '1.25rem' }}>Detmax Academy</h3>
                    <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Online + Personal Mentor</span>
                  </div>
                  <span className="badge-best">Best Value</span>
                </div>

                <div className="course-details" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div className="price-highlight">{activeCourse.detmaxPrice}</div>
                  <div className="duration-tag">
                    {activeCourse.duration} · Self-paced
                  </div>

                  <ul className="features-list">
                    {activeCourse.features.map((feature) => (
                      <li key={feature}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div style={{ marginTop: 'auto' }}>
                    <Link
                      href={activeCourse.link}
                      className="btn btn-primary btn-block"
                    >
                      Enroll in {activeCourse.name} →
                    </Link>
                    <p className="marketing-note">{activeCourse.message}</p>
                  </div>
                </div>
              </div>

              {activeCourse.competitors.map((competitor) => (
                <div key={competitor.name} className="provider-column">
                  <div>
                    <div className="provider-header">
                      <div>
                        <h3 style={{ fontSize: '1.05rem' }}>{competitor.name}</h3>
                        <span style={{ fontSize: '0.78rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Market Alternative</span>
                      </div>
                      <span className="badge-standard">Competitor</span>
                    </div>
                    <div className="price-highlight competitor-price">{competitor.price}</div>
                    <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: 1.55, marginTop: '12px' }}>
                      Typical commercial fee in Kenya for equivalent syllabus coverage.
                    </p>
                    <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid #E2E8F0', fontSize: '0.85rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div>· Standard classroom schedules</div>
                      <div>· High physical overhead costs</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div
          className="text-center"
          style={{
            background: '#001F3F',
            color: '#FFFFFF',
            padding: '48px 32px',
            maxWidth: '900px',
            margin: '60px auto 0',
            borderLeft: '4px solid #DC2626',
          }}
        >
          <h3 style={{ fontSize: '1.6rem', marginBottom: '12px', color: '#FFFFFF', fontWeight: 800, letterSpacing: '-0.01em' }}>
            Join Kenya's Smartest Upskilling Community
          </h3>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.82)', maxWidth: '640px', margin: '0 auto 24px', lineHeight: 1.65 }}>
            Gain job-ready skills with verifiable certificates and live mentor support.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/application" className="btn btn-primary btn-lg">
              Start Learning Today →
            </Link>
            <a
              href="https://wa.me/18013195465"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white btn-lg"
            >
              Chat with Advisor
            </a>
          </div>
          <p style={{ marginTop: '20px', fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
            ✓ No prior experience &nbsp;·&nbsp; ✓ 100% Online &nbsp;·&nbsp; ✓ Recognized certificates
          </p>
        </div>
      </div>
    </section>
  )
}
