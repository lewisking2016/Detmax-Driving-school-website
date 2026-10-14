'use client'

import Link from 'next/link'

export default function ComputerCollegeSection() {
  return (
    <section className="section" style={{ padding: '110px 0', background: '#F8FAFC' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center', gap: '64px' }}>
          <div className="slider-container">
            <div className="slider-wrapper">
              <div className="slide"><img src="/detmax.png" alt="Detmax College" className="img-responsive" style={{ width: '100%', display: 'block' }} /></div>
              <div className="slide"><img src="/comp.png" alt="Computer Training" className="img-responsive" style={{ width: '100%', display: 'block' }} /></div>
              <div className="slide"><img src="/comp1.png" alt="Online Programs" className="img-responsive" style={{ width: '100%', display: 'block' }} /></div>
              <div className="slide"><img src="/comp2.png" alt="Digital Skills" className="img-responsive" style={{ width: '100%', display: 'block' }} /></div>
            </div>
          </div>
          <div className="content-box">
            <div className="section-eyebrow navy">
              <span>100% Online Study Across Kenya</span>
            </div>
            <h2 className="section-title">Online Computer &amp; Tech College</h2>
            <p style={{ color: '#334155', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '24px' }}>
              Master high-income digital competencies from the comfort of your home. Study at your own pace with continuous 24/7 instructor assistance and hands-on portfolio projects.
            </p>

            <div style={{ background: '#001F3F', color: '#FFFFFF', padding: '20px 24px', marginBottom: '24px', borderLeft: '4px solid #DC2626' }}>
              <div style={{ fontWeight: 800, fontSize: '0.92rem', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                </svg>
                Active Promotion: 20% Off All Enrollments
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>
                Plus: <strong>FREE Certified First Aid &amp; Life Skills Training</strong> included with every package.
              </p>
            </div>

            <ul className="feature-list-check" style={{ marginBottom: '28px' }}>
              <li>Complete MS Office Suite, Cloud Tools &amp; Typing Mastery</li>
              <li>Generative AI, Prompt Engineering &amp; Automation Workflows</li>
              <li>Notion Project Management &amp; Digital Productivity</li>
              <li>Verifiable Digital Certificate &amp; PMAK Mentorship</li>
            </ul>

            <div className="flex-wrap gap-15" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <Link href="/computer-college" className="btn btn-secondary">
                View All 8 Courses →
              </Link>
              <Link href="/application" className="btn btn-primary">
                Enroll Online Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
