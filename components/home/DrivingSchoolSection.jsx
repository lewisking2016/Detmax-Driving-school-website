'use client'

import Link from 'next/link'

export default function DrivingSchoolSection() {
  return (
    <section className="section bg-white" style={{ padding: '110px 0', borderTop: '1px solid #E2E8F0' }}>
      <div className="container">
        <div className="grid-2 reverse-mobile" style={{ alignItems: 'center', gap: '64px' }}>
          <div className="content-box">
            <div className="section-eyebrow">
              <span>NTSA Accredited Training</span>
            </div>
            <h2 className="section-title">Professional Driving School</h2>
            <p className="lead" style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '32px' }}>
              Pass your driving test with confidence. Certified instructors provide patient, one-on-one training designed to make you a safe, defensive motorist for life.
            </p>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderLeft: '4px solid #DC2626', padding: '24px 28px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '12px', marginBottom: '16px', borderBottom: '1px solid #E2E8F0', paddingBottom: '14px' }}>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                    Tuition Package Fee
                  </div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#001F3F', letterSpacing: '-0.02em', lineHeight: 1 }}>
                    13,000 <span style={{ fontSize: '1rem', fontWeight: 600, color: '#64748B' }}>KES</span>
                  </div>
                </div>
                <span style={{ border: '1.5px solid #059669', color: '#059669', padding: '4px 12px', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Installments Accepted
                </span>
              </div>

              <ul className="feature-list-check">
                <li>14 Intensive Behind-The-Wheel Practical Lessons</li>
                <li>Comprehensive Road Sign, Model Town Board &amp; Theory Classes</li>
                <li>Basic Mechanical Inspection &amp; Maintenance Training</li>
                <li>NTSA Portal Registration &amp; Guaranteed Exam Booking Support</li>
              </ul>
            </div>

            <div style={{ border: '1px solid #E2E8F0', background: '#FFFFFF', padding: '16px 20px', marginBottom: '28px', borderLeft: '4px solid #001F3F' }}>
              <strong style={{ color: '#001F3F', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px', fontSize: '0.92rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="17" x2="12" y2="22" />
                  <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.89A2 2 0 0 1 15 10.77V7a3 3 0 0 0-6 0v3.77a2 2 0 0 1-1.11 1.79l-1.78.89A2 2 0 0 0 5 15.24Z" />
                </svg>
                Official NTSA Portal Charges
              </strong>
              <div style={{ fontSize: '0.9rem', color: '#475569' }}>
                PDL: 1,000 Ksh &nbsp;•&nbsp; NTSA Exam: 1,000 Ksh &nbsp;•&nbsp; Smart DL: 3,050 Ksh
              </div>
            </div>

            <div className="flex-wrap gap-15" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <Link href="/driving-school" className="btn btn-secondary">
                View 14-Lesson Curriculum →
              </Link>
              <Link href="/application" className="btn btn-primary">
                Book Driving Slot
              </Link>
            </div>
          </div>

          <div className="slider-container">
            <div className="slider-wrapper">
              <div className="slide"><img src="/driving.png" alt="Driving Practice" className="img-responsive" style={{ width: '100%', display: 'block' }} /></div>
              <div className="slide"><img src="/driving2.png" alt="Driving Maneuvers" className="img-responsive" style={{ width: '100%', display: 'block' }} /></div>
              <div className="slide"><img src="/driving3.png" alt="Driving Instructors" className="img-responsive" style={{ width: '100%', display: 'block' }} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
