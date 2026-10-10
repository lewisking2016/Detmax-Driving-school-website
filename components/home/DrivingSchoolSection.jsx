'use client'

import Link from 'next/link'

export default function DrivingSchoolSection() {
  return (
    <section className="section bg-white border-top-red">
      <div className="container">
        <div className="grid-2 reverse-mobile">
          <div className="content-box">
            <span className="badge-red">NTSA Accredited</span>
            <h2 className="section-title">Professional Driving School</h2>
            <p className="lead">
              Get your license with confidence. Our certified instructors provide patient, hands-on training for all learners.
            </p>

            <div className="price-feature-box mt-30">
              <div className="price-tag pulsate">
                <span className="label">Total Fee</span>
                <span className="amount">13,000 KES</span>
              </div>
              <ul className="feature-list-check">
                <li>14 Intensive Practical Lessons</li>
                <li>Complete Theory Classes</li>
                <li>Mechanical Basics Inclusion</li>
                <li>NTSA Exam Booking Support</li>
              </ul>
            </div>

            <div className="ntsa-charges-pill mt-30">
              <strong>Additional NTSA Charges:</strong>
              <span>PDL: 1,000Ksh | Exam: 1,000Ksh | DL: 3,050Ksh</span>
            </div>

            <div className="flex-wrap gap-15 mt-30">
              <Link href="/driving-school" className="btn btn-secondary">
                View Full Curriculum →
              </Link>
              <Link href="/registration" className="btn btn-primary">
                Enroll Now
              </Link>
            </div>
          </div>
          <div className="slider-container">
            <div className="slider-wrapper">
              <div className="slide">
                <img src="/driving.png" alt="Driving Practice" className="img-responsive rounded" />
              </div>
              <div className="slide">
                <img src="/driving2.png" alt="Driving Maneuvers" className="img-responsive rounded" />
              </div>
              <div className="slide">
                <img src="/driving3.png" alt="Driving Instructors" className="img-responsive rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
