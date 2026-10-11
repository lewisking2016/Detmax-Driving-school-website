'use client'

export default function WelcomeSection() {
  return (
    <section className="welcome section bg-white" style={{ padding: '90px 0' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center' }}>
          <div className="welcome-director-card">
            <div className="section-eyebrow">
              <span>Leadership Vision</span>
            </div>
            <div className="director-quote-badge">“</div>
            <h2 className="section-title" style={{ fontSize: '2.1rem', marginTop: '-10px' }}>
              Message from the Director
            </h2>
            <p className="lead" style={{ color: 'var(--primary-navy)', fontWeight: 600, fontSize: '1.15rem', fontStyle: 'italic', marginBottom: '18px' }}>
              "Our mission is to empower every Kenyan learner with verifiable, life-changing skills that unlock real employment."
            </p>
            <p style={{ color: '#4B5563', lineHeight: 1.7, marginBottom: '16px' }}>
              At Detmax, we believe that education must be practical, transparent, and within financial reach of every household. Since 2022, we have innovated to bridge Kenya’s skills gap — producing skilled, cautious motorists on our highways and digitally adept professionals in our modern remote workforce.
            </p>
            <p style={{ color: '#4B5563', lineHeight: 1.7 }}>
              Our strategic partnership with the <strong>Peer Mentors Association of Kenya (PMAK)</strong> ensures that every trainee receives personalized guidance, character formation, and job-readiness mentorship across all 47 counties.
            </p>

            <div className="director-signature-box">
              <div>
                <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--primary-navy)' }}>
                  Director, Detmax Ltd
                </strong>
                <span style={{ fontSize: '0.85rem', color: '#64748B' }}>
                  Detmax Driving School &amp; Computer College
                </span>
              </div>
              <div className="kra-seal-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                KRA PIN: P051811093F
              </div>
            </div>
          </div>

          <div className="welcome-image" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: -15, left: -15, width: 80, height: 80, background: 'rgba(220, 38, 38, 0.1)', borderRadius: '24px', zIndex: 0 }}></div>
            <img 
              src="/im2.jpeg" 
              alt="Detmax Leadership" 
              className="img-responsive rounded shadow-lg" 
              style={{ width: '100%', borderRadius: '24px', position: 'relative', zIndex: 1, border: '4px solid #FFFFFF', boxShadow: '0 20px 40px -10px rgba(0, 31, 63, 0.15)' }} 
            />
          </div>
        </div>
      </div>
    </section>
  )
}
