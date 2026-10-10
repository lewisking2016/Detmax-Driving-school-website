'use client'

export default function AdvantagesSection() {
  const advantages = [
    { icon: 'shield-check', title: 'Fully Registered', description: 'Licensed under Detmax Limited Company with KRA compliance.' },
    { icon: 'clock', title: 'Flexible Learning', description: 'Study online at your own pace, anytime, anywhere.' },
    { icon: 'banknote', title: 'Affordable Fees', description: 'Competitive pricing with transparent payment plans.' },
    { icon: 'users', title: 'Community Focused', description: 'Partnered with PMAK for grassroots empowerment.' },
    { icon: 'graduation-cap', title: 'Certified Training', description: 'Receive recognized certificates upon completion.' },
    { icon: 'car', title: 'NTSA Standard', description: 'Driving training aligned with modern NTSA regulations.' },
  ]

  return (
    <section className="advantages section bg-light">
      <div className="container">
        <h2 className="section-title text-center">Why Thousands Choose Detmax</h2>
        <div className="advantage-grid mt-50">
          {advantages.map((adv, index) => (
            <div key={index} className="adv-card">
              <div className="icon-box mb-20">
                <i data-lucide={adv.icon}></i>
              </div>
              <h4>{adv.title}</h4>
              <p>{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
