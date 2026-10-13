'use client'

import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="section" style={{ padding: '110px 0', background: '#001F3F', color: '#FFFFFF', position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="text-center" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div className="section-eyebrow" style={{ borderColor: '#FFFFFF', color: '#FFFFFF' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <span>Limited Enrollment Window</span>
          </div>
          <h2 className="section-title text-white" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '20px' }}>
            Transform Your Career &amp; Independence Today
          </h2>
          <p style={{ fontSize: '1.12rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.7, marginBottom: '36px' }}>
            Join hundreds of active trainees across Kenya. Claim your <strong style={{ color: '#FFFFFF' }}>30% early-bird discount</strong> on our certified driving or online computer packages.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/registration" className="btn btn-primary btn-lg">
              Enroll Now — Claim 30% Off
            </Link>
            <a
              href="https://wa.me/18013195465?text=Hello%20Detmax,%20I%20want%20to%20enroll"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white btn-lg"
            >
              WhatsApp: +1 801 319 5465
            </a>
          </div>

          <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
            <span>✓ Instant Onboarding</span>
            <span>✓ M-Pesa Installments</span>
            <span>✓ NTSA Compliant</span>
            <span>✓ Official Certificate</span>
          </div>
        </div>
      </div>
    </section>
  )
}
