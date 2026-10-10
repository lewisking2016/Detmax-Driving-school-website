'use client'

import Link from 'next/link'

export default function Registration() {
  return (
    <main>
      <header className="page-header bg-navy text-white" style={{ marginTop: '100px', padding: '60px 20px' }}>
        <div className="container">
          <h1>Enroll Now</h1>
          <p>Join Our Community of Successful Students</p>
        </div>
      </header>

      <section className="section bg-white">
        <div className="container">
          <div className="grid-2">
            <div className="content">
              <h2>Quick Registration</h2>
              <form id="registration-form" style={{ marginTop: '30px' }}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Full Name *</label>
                  <input type="text" name="fullName" required style={{ width: '100%', padding: '12px', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Email Address *</label>
                  <input type="email" name="email" required style={{ width: '100%', padding: '12px', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Phone Number *</label>
                  <input type="tel" name="phone" required style={{ width: '100%', padding: '12px', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Choose a Course *</label>
                  <select name="course" required style={{ width: '100%', padding: '12px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                    <option value="">-- Select a Course --</option>
                    <option value="ai-basics">AI Basics (7,500 KES)</option>
                    <option value="notion-pm">Notion & PM (8,500 KES)</option>
                    <option value="project-management">Project Management (6,000 KES)</option>
                    <option value="solar-basics">Solar Basics (12,000 KES)</option>
                    <option value="erp-intro">ERP Intro (10,000 KES)</option>
                    <option value="medical-admin">Medical Admin (7,000 KES)</option>
                    <option value="computer-basics">Computer Basics (9,500 KES)</option>
                    <option value="digital-marketing">Digital Marketing (7,500 KES)</option>
                    <option value="driving-school">Driving School (13,000 KES)</option>
                  </select>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>County/Region</label>
                  <input type="text" name="county" style={{ width: '100%', padding: '12px', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Message (Optional)</label>
                  <textarea name="message" rows={4} style={{ width: '100%', padding: '12px', border: '1px solid #e5e7eb', borderRadius: '8px' }}></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Complete Registration
                </button>
              </form>
            </div>

            <div className="content">
              <h2>What Happens Next?</h2>
              <div style={{ marginTop: '30px' }}>
                <div style={{ background: '#f0f7ff', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                  <h4 style={{ color: '#0369a1', marginBottom: '10px' }}>1. Confirmation</h4>
                  <p>We'll confirm your enrollment via email and WhatsApp within 24 hours.</p>
                </div>

                <div style={{ background: '#f0f7ff', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                  <h4 style={{ color: '#0369a1', marginBottom: '10px' }}>2. Payment Link</h4>
                  <p>Receive M-Pesa payment link for easy payment. Installments available!</p>
                </div>

                <div style={{ background: '#f0f7ff', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                  <h4 style={{ color: '#0369a1', marginBottom: '10px' }}>3. Course Access</h4>
                  <p>Upon payment, immediate access to course materials and WhatsApp group.</p>
                </div>

                <div style={{ background: '#f0f7ff', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                  <h4 style={{ color: '#0369a1', marginBottom: '10px' }}>4. Start Learning</h4>
                  <p>Begin your course journey with dedicated instructor support!</p>
                </div>
              </div>

              <div style={{ background: '#fff5f5', padding: '20px', borderRadius: '8px', marginTop: '30px' }}>
                <h4 style={{ color: '#FF0000', marginBottom: '10px' }}>✓ Early Bird Bonus</h4>
                <p>First 50 students get 30% discount! Use code: DETMAX30</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container text-center">
          <h2 className="section-title">Questions?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>Contact us anytime via WhatsApp</p>
          <a href="https://wa.me/254716894174" className="btn btn-primary btn-lg">
            Chat on WhatsApp 💬
          </a>
        </div>
      </section>
    </main>
  )
}
