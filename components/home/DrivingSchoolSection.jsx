'use client'

import Link from 'next/link'

export default function DrivingSchoolSection() {
  return (
    <section className="section bg-white border-top-red" style={{ padding: '90px 0' }}>
      <div className="container">
        <div className="grid-2 reverse-mobile">
          <div className="content-box">
            <div className="section-eyebrow">
              <span>NTSA Accredited Training</span>
            </div>
            <h2 className="section-title">Professional Driving School</h2>
            <p className="lead" style={{ color: '#4B5563', fontSize: '1.12rem', lineHeight: 1.65 }}>
              Pass your driving test with confidence. Certified instructors provide patient, one-on-one training designed to make you a safe, defensive motorist for life.
            </p>

            <div className="price-feature-box">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '16px', borderBottom: '1px solid #E2E8F0', paddingBottom: '14px' }}>
                <div>
                  <span style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Tuition Package Fee
                  </span>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#DC2626', letterSpacing: '-0.02em' }}>
                    13,000 KES
                  </div>
                </div>
                <span style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#059669', padding: '6px 14px', borderRadius: '100px', fontWeight: 700, fontSize: '0.82rem' }}>
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

            <div className="ntsa-charges-pill mb-30">
              <strong>Official NTSA Portal Charges:</strong>
              <div style={{ marginTop: '4px', fontSize: '0.88rem' }}>
                PDL: 1,000 Ksh • NTSA Exam: 1,000 Ksh • Smart DL: 3,050 Ksh
              </div>
            </div>

            <div className="flex-wrap gap-15">
              <Link href="/driving-school" className="btn btn-secondary">
                View 14-Lesson Curriculum →
              </Link>
              <Link href="/registration" className="btn btn-primary">
                Book Driving Slot
              </Link>
            </div>
          </div>

          <div className="slider-container">
            <div className="slider-wrapper">
              <div className="slide">
                <img src="/driving.png" alt="Driving Practice" className="img-responsive rounded shadow-lg" style={{ width: '100%', borderRadius: '20px' }} />
              </div>
              <div className="slide">
                <img src="/driving2.png" alt="Driving Maneuvers" className="img-responsive rounded shadow-lg" style={{ width: '100%', borderRadius: '20px' }} />
              </div>
              <div className="slide">
                <img src="/driving3.png" alt="Driving Instructors" className="img-responsive rounded shadow-lg" style={{ width: '100%', borderRadius: '20px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
