'use client'

import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="section bg-light">
      <div className="container text-center">
        <h2 className="section-title">Transform Your Career Today</h2>
        <p className="section-desc mx-auto" style={{ maxWidth: '600px', marginBottom: '40px' }}>
          Don't wait. Join our community of successful students. Enroll now and get 30% off for the first 50 students.
        </p>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/driving-school" className="btn btn-primary btn-lg">
            Explore Driving School
          </Link>
          <Link href="/computer-college" className="btn btn-secondary btn-lg">
            Explore Computer College
          </Link>
          <Link href="/registration" className="btn btn-outline btn-lg">
            Enroll in a Course
          </Link>
        </div>

        <p style={{ marginTop: '30px', fontSize: '0.9rem', color: '#666' }}>
          Questions? Contact us via WhatsApp: <strong>+254 716 894174</strong>
        </p>
      </div>
    </section>
  )
}
