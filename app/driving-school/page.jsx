'use client'

import Link from 'next/link'

export default function DrivingSchool() {
  return (
    <main>
      <header className="page-header bg-navy text-white" style={{ marginTop: '100px', padding: '60px 20px' }}>
        <div className="container">
          <h1>Professional Driving School</h1>
          <p>Get Your NTSA License with Confidence - Expert Training, Affordable Fees</p>
        </div>
      </header>

      <section className="section bg-white">
        <div className="container">
          <div className="grid-2">
            <div className="content">
              <h2>What You'll Learn</h2>
              <ul className="check-list">
                <li>Vehicle control and handling</li>
                <li>Road signs and traffic rules</li>
                <li>Defensive driving techniques</li>
                <li>Mechanical basics</li>
                <li>NTSA exam preparation</li>
                <li>Emergency procedures</li>
                <li>Night driving skills</li>
              </ul>
            </div>
            <div className="content">
              <h2>Course Details</h2>
              <div style={{ background: '#f0f7ff', padding: '30px', borderRadius: '12px' }}>
                <p>
                  <strong>Duration:</strong> 14 Practical Lessons
                </p>
                <p>
                  <strong>Format:</strong> One-on-One Training
                </p>
                <p>
                  <strong>Instructors:</strong> NTSA Certified
                </p>
                <p>
                  <strong>Certificate:</strong> Upon Completion
                </p>

                <div style={{ marginTop: '30px', padding: '20px', background: 'white', borderRadius: '8px', borderLeft: '4px solid #FF0000' }}>
                  <p style={{ fontSize: '0.9rem', margin: 0 }}>
                    <strong>Price:</strong>
                  </p>
                  <p style={{ fontSize: '2rem', fontWeight: 800, color: '#FF0000', margin: '10px 0' }}>13,000 KES</p>
                  <p style={{ fontSize: '0.9rem', color: '#666' }}>Plus NTSA charges: PDL 1,000 | Exam 1,000 | DL 3,050</p>
                </div>

                <Link href="/registration" className="btn btn-primary mt-30" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center">Our Curriculum (14 Lessons)</h2>
          <div style={{ marginTop: '30px', maxWidth: '600px', margin: '30px auto' }}>
            <div style={{ background: 'white', padding: '20px', marginBottom: '15px', borderRadius: '8px' }}>
              <h4>Lessons 1-3: Vehicle Familiarization</h4>
              <p>Controls, mirrors, seat adjustment, starting procedure</p>
            </div>
            <div style={{ background: 'white', padding: '20px', marginBottom: '15px', borderRadius: '8px' }}>
              <h4>Lessons 4-7: Basic Driving Skills</h4>
              <p>Steering, acceleration, braking, smooth turns</p>
            </div>
            <div style={{ background: 'white', padding: '20px', marginBottom: '15px', borderRadius: '8px' }}>
              <h4>Lessons 8-10: Road Situations</h4>
              <p>Traffic rules, signs, intersections, parking</p>
            </div>
            <div style={{ background: 'white', padding: '20px', marginBottom: '15px', borderRadius: '8px' }}>
              <h4>Lessons 11-13: Advanced Skills</h4>
              <p>Night driving, defensive techniques, emergencies</p>
            </div>
            <div style={{ background: 'white', padding: '20px', marginBottom: '15px', borderRadius: '8px' }}>
              <h4>Lesson 14: Mock Exam</h4>
              <p>Full simulation of NTSA driving test</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container text-center">
          <h2 className="section-title">Why Choose Our Driving School?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '40px' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '8px' }}>
              <h4>NTSA Certified</h4>
              <p>All instructors meet NTSA standards</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '8px' }}>
              <h4>Modern Vehicles</h4>
              <p>Well-maintained, insured vehicles</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '8px' }}>
              <h4>Flexible Scheduling</h4>
              <p>Train at times that suit you</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '8px' }}>
              <h4>90% Pass Rate</h4>
              <p>Most students pass on first attempt</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container text-center">
          <h2 className="section-title">Ready to Get Your License?</h2>
          <Link href="/registration" className="btn btn-primary btn-lg">
            Start Training - 13,000 KES →
          </Link>
        </div>
      </section>
    </main>
  )
}
