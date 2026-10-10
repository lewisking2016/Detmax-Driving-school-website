'use client'

import Link from 'next/link'

export default function SchoolsOverview() {
  return (
    <section id="schools" className="section bg-white">
      <div className="container">
        <div className="school-split-grid">
          <div className="school-panel college bg-navy text-white rounded shadow-lg">
            <div className="panel-content">
              <h3>Online Computer College</h3>
              <p>Master the tools of the digital age. From basic typing to advanced graphic design.</p>
              <ul className="minimal-list">
                <li>MS Office Packages</li>
                <li>Graphic Design Basics</li>
                <li>Internet & Emails</li>
                <li>Certificate Included</li>
              </ul>
              <Link href="/computer-college" className="btn btn-outline-white">
                Explore College →
              </Link>
            </div>
          </div>
          <div className="school-panel driving bg-red text-white rounded shadow-lg">
            <div className="panel-content">
              <h3>Professional Driving School</h3>
              <p>Get your license with confidence. Practical training with expert instructors.</p>
              <ul className="minimal-list">
                <li>14 Practical Lessons</li>
                <li>Theory & Mechanics</li>
                <li>Defensive Driving</li>
                <li>NTSA Exam Prep</li>
              </ul>
              <Link href="/driving-school" className="btn btn-outline-white">
                Explore Driving School →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
