'use client'

export default function FeaturesSection() {
  const features = [
    {
      icon: 'globe',
      title: '100% Online Flexibility',
      description: 'Our computer programs are specially designed for the Kenyan learner. Study from any county, at any time that suits your schedule.',
    },
    {
      icon: 'shield-check',
      title: 'Government Verified',
      description: 'We are a legally registered entity (Detmax Ltd) with KRA PIN: P051811093F and NTSA compliant driving training standards.',
    },
    {
      icon: 'users',
      title: 'Expert Mentorship',
      description: 'Beyond technical skills, we partner with the Peer Mentors Association of Kenya (PMAK) to offer professional guidance for your career.',
    },
    {
      icon: 'banknote',
      title: 'Installment Options',
      description: 'We believe in financial inclusion. Pay your fees in manageable installments via our secure M-Pesa Paybill channels.',
    },
  ]

  return (
    <section className="features section bg-light">
      <div className="container text-center">
        <h2 className="section-title">Why Choose Detmax?</h2>
        <p className="section-desc mx-auto">
          We combine years of expertise with a modern, student-centered approach to ensure you graduate with both skill and confidence.
        </p>

        <div className="feature-grid mt-50">
          {features.map((feature, index) => (
            <div key={index} className="feature-card glass text-left">
              <div className="icon-box mb-20">
                <i data-lucide={feature.icon}></i>
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
