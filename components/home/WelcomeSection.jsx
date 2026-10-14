'use client'

export default function WelcomeSection() {
  return (
    <section id="about" className="welcome section bg-white" style={{ padding: '110px 0', borderTop: '1px solid #E2E8F0' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center', gap: '80px' }}>
          <div>
            <div className="section-eyebrow navy">
              <span>Leadership Vision</span>
            </div>
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 3.6vw, 2.6rem)', marginTop: '0' }}>
              Message from the Director
            </h2>
            <p
              style={{
                color: '#001F3F',
                fontWeight: 600,
                fontSize: '1.18rem',
                fontStyle: 'normal',
                lineHeight: 1.55,
                marginBottom: '20px',
                borderLeft: '3px solid #DC2626',
                paddingLeft: '20px',
              }}
            >
              "Our mission is to empower every Kenyan learner with verifiable, life-changing skills that unlock real employment."
            </p>
            <p style={{ color: '#475569', lineHeight: 1.75, marginBottom: '16px', fontSize: '1rem' }}>
              At Detmax, we believe that education must be practical, transparent, and within financial reach of every household. Since 2022, we have innovated to bridge Kenya&apos;s skills gap — producing skilled, cautious motorists on our highways and digitally adept professionals in our modern remote workforce.
            </p>
            <p style={{ color: '#475569', lineHeight: 1.75, marginBottom: '32px', fontSize: '1rem' }}>
              Our strategic partnership with the <strong>Peer Mentors Association of Kenya (PMAK)</strong> ensures that every trainee receives personalized guidance, character formation, and job-readiness mentorship across all 47 counties.
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #E2E8F0', paddingTop: '24px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <strong style={{ display: 'block', fontSize: '1.02rem', color: '#001F3F' }}>
                  Director, Detmax Ltd
                </strong>
                <span style={{ fontSize: '0.85rem', color: '#64748B' }}>
                  Detmax Driving School &amp; Computer College
                </span>
              </div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  border: '1.5px solid #001F3F',
                  color: '#001F3F',
                  padding: '6px 12px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                KRA PIN: P051811093F
              </div>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <img
              src="/im2.jpeg"
              alt="Detmax Leadership"
              className="img-responsive"
              style={{ width: '100%', display: 'block', border: '1px solid #E2E8F0' }}
            />
            <div
              className="welcome-badge"
              style={{
                background: 'var(--navy-700)',
                color: '#FFFFFF',
                padding: '18px 24px',
                borderLeft: '4px solid var(--red-500)',
              }}
            >
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>
                Founded
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1 }}>2022</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
