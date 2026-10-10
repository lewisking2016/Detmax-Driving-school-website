'use client'

import Link from 'next/link'

export default function ComputerCollege() {
  return (
    <main>
      <header className="page-header bg-navy text-white" style={{ marginTop: '100px', padding: '60px 20px' }}>
        <div className="container">
          <h1>Online Computer College</h1>
          <p>Master Digital Skills 100% Online - Flexible, Affordable, Comprehensive</p>
        </div>
      </header>

      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title text-center mb-50">Our Course Offerings</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {[
              { name: 'AI Basics', price: '7,500', duration: '3 weeks', link: '/courses/ai-basics' },
              { name: 'Notion & PM', price: '8,500', duration: '3 weeks', link: '/courses/notion-pm' },
              { name: 'Project Management', price: '6,000', duration: '2 weeks', link: '/courses/project-management' },
              { name: 'Solar Basics', price: '12,000', duration: '3 weeks', link: '/courses/solar-basics' },
              { name: 'ERP Intro', price: '10,000', duration: '3 weeks', link: '/courses/erp-intro' },
              { name: 'Medical Admin', price: '7,000', duration: '2 weeks', link: '/courses/medical-admin' },
              { name: 'Computer Basics', price: '9,500', duration: '4 weeks', link: '/courses/computer-basics' },
              { name: 'Digital Marketing', price: '7,500', duration: '2 weeks', link: '/courses/digital-marketing' },
            ].map((course, idx) => (
              <div key={idx} style={{ border: '1px solid #e5e7eb', padding: '30px', borderRadius: '12px', textAlign: 'center' }}>
                <h3>{course.name}</h3>
                <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FF0000', margin: '15px 0' }}>{course.price} KES</p>
                <p style={{ color: '#666', marginBottom: '20px' }}>{course.duration}</p>
                <Link href={course.link} className="btn btn-primary">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center">Why Choose Our Computer College?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '40px' }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
              <h4>✓ 100% Online</h4>
              <p>Study from anywhere, anytime</p>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
              <h4>✓ Affordable</h4>
              <p>Best prices in Kenya (6K-12K KES)</p>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
              <h4>✓ Certificates</h4>
              <p>Recognized upon completion</p>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
              <h4>✓ WhatsApp Support</h4>
              <p>24/7 instructor assistance</p>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
              <h4>✓ Flexible Payment</h4>
              <p>Installments available</p>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
              <h4>✓ Job-Ready Skills</h4>
              <p>Real-world practical training</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container text-center">
          <h2 className="section-title">Special Offer</h2>
          <p style={{ fontSize: '1.3rem', marginBottom: '30px' }}>30% OFF for the first 50 students!</p>
          <Link href="/registration" className="btn btn-primary btn-lg">
            Start Learning Today →
          </Link>
        </div>
      </section>
    </main>
  )
}
