'use client'

export default function FeaturesSection() {
  const features = [
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      title: '100% Online Flexibility',
      description: 'Study computer & AI programs from any of Kenya’s 47 counties at your own pace with 24/7 dedicated instructor support.',
      tag: 'Any County',
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 12 11 14 15 10"></polyline>
        </svg>
      ),
      title: 'Government Verified',
      description: 'Legally registered (Detmax Ltd, KRA PIN: P051811093F) meeting rigorous NTSA national driving training standards.',
      tag: 'NTSA & KRA',
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: 'Expert Mentorship',
      description: 'Partnered with the Peer Mentors Association of Kenya (PMAK) to offer career coaching, CV building, and industry placement guidance.',
      tag: 'PMAK Certified',
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2"></rect>
          <line x1="2" y1="10" x2="22" y2="10"></line>
        </svg>
      ),
      title: 'Installment Options',
      description: 'Transparent payment plans with zero hidden fees. Pay comfortably via secure M-Pesa Paybill in 2 to 3 flexible installments.',
      tag: 'M-Pesa Friendly',
    },
  ]

  return (
    <section className="features section bg-light" style={{ padding: '90px 0' }}>
      <div className="container text-center">
        <div className="section-eyebrow">
          <span>Why Detmax Academy</span>
        </div>
        <h2 className="section-title">Built for Kenya's Ambitious Learners</h2>
        <p className="section-desc mx-auto">
          We combine accredited practical training with cutting-edge digital curricula to give you verified qualifications and real career confidence.
        </p>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card text-left">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div className="icon-box">
                  {feature.svg}
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, background: 'rgba(0, 31, 63, 0.06)', color: 'var(--primary-navy)', padding: '4px 10px', borderRadius: '100px' }}>
                  {feature.tag}
                </span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
