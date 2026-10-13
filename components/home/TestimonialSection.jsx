'use client'

export default function TestimonialSection() {
  const testimonials = [
    {
      name: 'Sarah Kimani',
      initials: 'SK',
      location: 'Nairobi',
      course: 'NTSA Driving Course',
      rating: 5,
      quote: 'The driving instructors were patient and meticulous with defensive maneuvers. Passed my NTSA test on the first attempt with zero anxiety.',
    },
    {
      name: 'John Mwangi',
      initials: 'JM',
      location: 'Kisumu',
      course: 'AI & Notion PM',
      rating: 5,
      quote: 'Studying online from Kisumu was completely seamless. The AI workflow prompts helped me land a remote operations role within 4 weeks of graduation.',
    },
    {
      name: 'Grace Otieno',
      initials: 'GO',
      location: 'Mombasa',
      course: 'Computer Basics & Office',
      rating: 5,
      quote: 'The installment payment via M-Pesa made this education accessible for my budget. 24/7 WhatsApp assistance solved every question quickly.',
    },
    {
      name: 'Dennis Kiprop',
      initials: 'DK',
      location: 'Eldoret',
      course: 'Digital Marketing',
      rating: 5,
      quote: 'Practical assignments directly applicable to running local business ads. Detmax delivered more value than courses that cost 40,000 KES elsewhere.',
    },
  ]

  return (
    <section className="section bg-navy text-white" style={{ padding: '110px 0', background: '#001F3F' }}>
      <div className="container">
        <div className="text-center" style={{ maxWidth: '720px', margin: '0 auto 50px' }}>
          <div className="section-eyebrow" style={{ borderColor: '#FFFFFF', color: '#FFFFFF' }}>
            <span>Real Graduate Feedback</span>
          </div>
          <h2 className="section-title text-white">What Our Students Say</h2>
          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1.08rem', lineHeight: 1.65 }}>
            Hear from graduates across Kenya who built confidence on the road and launched high-value digital careers.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <div key={item.name} className="testimonial-card">
              <div>
                <div className="star-rating" style={{ display: 'flex', gap: '3px', marginBottom: '14px' }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="testimonial-quote">"{item.quote}"</p>
              </div>

              <div className="testimonial-author-box">
                <div className="avatar-circle">{item.initials}</div>
                <div className="author-info">
                  <h4>{item.name}</h4>
                  <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)' }}>
                    {item.location} · {item.course}
                  </span>
                </div>
                <div
                  style={{
                    marginLeft: 'auto',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#86efac',
                    border: '1px solid #86efac',
                    padding: '3px 8px',
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Verified
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
