'use client'

import Link from 'next/link'

export default function SchoolsOverview() {
  return (
    <section id="schools" className="section bg-white" style={{ padding: '110px 0' }}>
      <div className="container">
        <div className="text-center" style={{ maxWidth: '720px', margin: '0 auto 50px' }}>
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
            <span className="panel-tag">100% Online &amp; Self-Paced</span>
            <h3>Online Computer College</h3>
            <p>
              Equip yourself with high-demand digital skills — from AI tools and project management to full Microsoft Office packages and digital marketing.
            </p>
            <ul className="minimal-list">
              <li>AI Tools &amp; Prompting</li>
              <li>Notion &amp; PM Workflows</li>
              <li>MS Office &amp; Basics</li>
              <li>Digital Marketing Mastery</li>
              <li>Verifiable Certificate</li>
              <li>24/7 WhatsApp Mentor</li>
            </ul>
            <div className="panel-actions">
              <Link href="/computer-college" className="btn-outline-white" style={{ color: '#001F3F', borderColor: '#001F3F' }}>
                Explore College Courses →
              </Link>
              <Link href="/application" className="btn btn-navy">
                Enroll Now
              </Link>
            </div>
          </div>

          {/* Professional Driving School Panel */}
          <div className="school-panel driving">
            <span className="panel-tag">NTSA Certified Curriculum</span>
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
            <div className="panel-actions">
              <Link href="/driving-school" className="btn-outline-white">
                Driving Curriculum &amp; Fees →
              </Link>
              <Link href="/application" className="btn btn-primary">
                Book Driving Slot
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
