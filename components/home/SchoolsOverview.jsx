'use client'

import Link from 'next/link'

export default function SchoolsOverview() {
  return (
    <section id="schools" className="section bg-white" style={{ padding: '90px 0' }}>
      <div className="container">
        <div className="text-center mb-50">
          <div className="section-eyebrow navy">
            <span>Two Specialized Academies</span>
          </div>
          <h2 className="section-title">Choose Your Learning Path</h2>
          <p className="section-desc mx-auto">
            Whether mastering the steering wheel or unlocking global digital skills, Detmax offers government-verified, accredited programs tailored to your goals.
          </p>
        </div>

        <div className="school-split-grid">
          {/* Online Computer College Panel */}
          <div className="school-panel college">
            <div className="panel-content">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.15)', color: '#FFFFFF', padding: '4px 12px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.08em' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                100% Online &amp; Self-Paced
              </span>
              <h3>Online Computer College</h3>
              <p>
                Equip yourself with high-demand digital skills — from AI tools and project management to full Microsoft Office packages and digital marketing.
              </p>
              <ul className="minimal-list">
                <li>AI Tools &amp; Prompting</li>
                <li>Notion &amp; PM Workflows</li>
                <li>MS Office &amp; Computer Basics</li>
                <li>Digital Marketing Mastery</li>
                <li>Verifiable Certificate</li>
                <li>24/7 WhatsApp Mentor</li>
              </ul>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link href="/computer-college" className="btn-outline-white">
                  Explore College Courses →
                </Link>
                <Link href="/registration" className="btn btn-white" style={{ borderRadius: '100px', padding: '14px 28px' }}>
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>

          {/* Professional Driving School Panel */}
          <div className="school-panel driving">
            <div className="panel-content">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.2)', color: '#FFFFFF', padding: '4px 12px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.08em' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
                NTSA Certified Curriculum
              </span>
              <h3>Professional Driving School</h3>
              <p>
                Gain confident behind-the-wheel mastery. Modern training cars, patient instructors, and guaranteed test booking support.
              </p>
              <ul className="minimal-list">
                <li>14 Practical Driving Lessons</li>
                <li>Defensive Road Tactics</li>
                <li>Model Town Board &amp; Theory</li>
                <li>Basic Mechanical Troubleshooting</li>
                <li>NTSA Test Booking Support</li>
                <li>High 1st-Attempt Pass Rate</li>
              </ul>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link href="/driving-school" className="btn-outline-white">
                  Driving Curriculum &amp; Fees →
                </Link>
                <Link href="/registration" className="btn btn-white" style={{ borderRadius: '100px', padding: '14px 28px' }}>
                  Book Driving Slot
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
