'use client'

import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="section bg-white" style={{ padding: '95px 0' }}>
      <div className="container">
        <div 
          style={{ 
            background: 'radial-gradient(circle at 100% 0%, #003366 0%, #00172E 100%)', 
            borderRadius: '28px', 
            padding: '64px 36px', 
            textAlign: 'center', 
            color: '#FFFFFF',
            boxShadow: '0 20px 50px -10px rgba(0, 31, 63, 0.25)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'rgba(220, 38, 38, 0.2)', borderRadius: '50%', filter: 'blur(40px)' }}></div>
          <div style={{ position: 'absolute', bottom: -40, left: -40, width: 200, height: 200, background: 'rgba(59, 130, 246, 0.2)', borderRadius: '50%', filter: 'blur(40px)' }}></div>

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px', margin: '0 auto' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.12)', padding: '6px 18px', borderRadius: '100px', fontSize: '0.84rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px', backdropFilter: 'blur(10px)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              Limited Enrollment Window
            </span>
            <h2 className="section-title text-white" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', marginBottom: '18px' }}>
              Transform Your Career &amp; Independence Today
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.65, marginBottom: '36px' }}>
              Join hundreds of active trainees across Kenya. Claim your <strong>30% early-bird discount</strong> on our certified driving or online computer packages.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/registration" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem', borderRadius: '100px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                </svg>
                Enroll Now — Claim 30% Off
              </Link>
              <a 
                href="https://wa.me/254716894174?text=Hello%20Detmax,%20I%20want%20to%20enroll" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-white" 
                style={{ padding: '16px 32px', fontSize: '1.05rem', borderRadius: '100px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                WhatsApp: +254 716 894174
              </a>
            </div>

            <div style={{ marginTop: '36px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.75)' }}>
              <span>✓ Instant Onboarding</span>
              <span>✓ M-Pesa Installments</span>
              <span>✓ NTSA Compliant</span>
              <span>✓ Official Certificate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
