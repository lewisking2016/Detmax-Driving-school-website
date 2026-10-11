'use client'

export default function AdvantagesSection() {
  const advantages = [
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      ),
      title: 'Fully Registered & Compliant',
      description: 'Licensed under Detmax Limited Company with full KRA tax compliance and legal business standing in Kenya.',
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: 'Self-Paced Flexible Study',
      description: 'Access course modules, videos, assignments, and quizzes at your convenience without quitting your job.',
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          <line x1="2" y1="10" x2="22" y2="10"></line>
        </svg>
      ),
      title: 'Affordable Rates & Installments',
      description: 'Up to 75% cheaper than traditional universities, with split installments so anyone can learn without debt.',
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: 'Nationwide PMAK Mentorship',
      description: 'Career empowerment sessions partnered with Peer Mentors Association of Kenya for resume building and networking.',
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      ),
      title: 'Recognized Certifications',
      description: 'Receive verifiable digital and print completion certificates that add real weight to your professional CV.',
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
          <circle cx="7" cy="17" r="2"></circle>
          <circle cx="17" cy="17" r="2"></circle>
        </svg>
      ),
      title: 'NTSA Curriculum Driving',
      description: 'One-on-one behind-the-wheel instruction, defensive driving drills, and full exam prep with guaranteed test dates.',
    },
  ]

  return (
    <section className="advantages section bg-white" style={{ padding: '90px 0' }}>
      <div className="container">
        <div className="text-center">
          <div className="section-eyebrow navy">
            <span>Proven Track Record</span>
          </div>
          <h2 className="section-title">Why Thousands Choose Detmax</h2>
          <p className="section-desc mx-auto">
            From beginner drivers to career upskillers, we deliver an uncompromised standard of excellence.
          </p>
        </div>

        <div className="advantage-grid">
          {advantages.map((adv, index) => (
            <div key={index} className="adv-card">
              <div className="icon-box">
                {adv.svg}
              </div>
              <div>
                <h4>{adv.title}</h4>
                <p>{adv.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
