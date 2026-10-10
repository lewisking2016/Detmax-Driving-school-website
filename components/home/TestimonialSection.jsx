'use client'

export default function TestimonialSection() {
  return (
    <section className="section bg-navy text-white">
      <div className="container text-center">
        <h2 className="section-title">What Our Students Say</h2>
        <p className="section-desc mx-auto" style={{ maxWidth: '600px', color: 'rgba(255,255,255,0.9)' }}>
          Join thousands of satisfied students who have transformed their careers with Detmax.
        </p>

        <div className="testimonial-grid mt-50" style={{ marginTop: '50px' }}>
          <div
            style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '30px',
              borderRadius: '12px',
              marginBottom: '20px',
            }}
          >
            <p style={{ marginBottom: '15px', fontStyle: 'italic' }}>
              "The driving instructors were patient and professional. I got my license in one try!"
            </p>
            <strong>Sarah K. - Nairobi</strong>
          </div>

          <div
            style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '30px',
              borderRadius: '12px',
              marginBottom: '20px',
            }}
          >
            <p style={{ marginBottom: '15px', fontStyle: 'italic' }}>
              "The computer course helped me get a better job. Worth every shilling!"
            </p>
            <strong>John M. - Kisumu</strong>
          </div>

          <div
            style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '30px',
              borderRadius: '12px',
              marginBottom: '20px',
            }}
          >
            <p style={{ marginBottom: '15px', fontStyle: 'italic' }}>
              "Best investment in my education. The instructors really care about student success."
            </p>
            <strong>Grace O. - Mombasa</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
