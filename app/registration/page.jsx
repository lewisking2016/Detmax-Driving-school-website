'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Registration() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    county: '',
    gender: '',
    dob: '',
    startDate: '',
    schedule: '',
    referredBy: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle, submitting, success, error
  const [errorMsg, setErrorMsg] = useState('')

  const courses = [
    { id: 'driving-school', name: 'Driving School (NTSA Practical & Theory)', price: '13,000 KES' },
    { id: 'ai-basics', name: 'AI in Daily Life (ChatGPT & Workflows)', price: '7,500 KES' },
    { id: 'notion-pm', name: 'Notion & Project Management', price: '8,500 KES' },
    { id: 'project-management', name: 'Project Management Fundamentals', price: '6,000 KES' },
    { id: 'solar-basics', name: 'Solar Basics (Sizing & Installation)', price: '12,000 KES' },
    { id: 'erp-intro', name: 'ERP Intro & KRA eTIMS Integration', price: '10,000 KES' },
    { id: 'medical-admin', name: 'Medical Administration & Operations', price: '7,000 KES' },
    { id: 'computer-basics', name: 'Full Computer Packages (MS Office)', price: '9,500 KES' },
    { id: 'digital-marketing', name: 'Digital Marketing & Social Strategy', price: '7,500 KES' },
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'enrollment',
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          course: formData.course,
          address: formData.county,
          gender: formData.gender,
          dob: formData.dob,
          startDate: formData.startDate,
          schedule: formData.schedule,
          referredBy: formData.referredBy,
          message: formData.message,
        }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) {
        setErrorMsg(json.error || 'Submission failed. Please try again.')
        setStatus('error')
        return
      }
      setStatus('success')
    } catch (err) {
      setErrorMsg(err.message || 'Network error. Please try again.')
      setStatus('error')
    }
  }

  return (
    <main>
      <header className="page-header">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-eyebrow" style={{ borderColor: '#FFFFFF', color: '#FFFFFF', display: 'inline-flex' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <span>Instant Online Registration</span>
          </div>
          <h1>Enroll in Detmax Academy</h1>
          <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1.12rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.7 }}>
            Lock in your 30% early-bird discount slot. Fast admission, transparent fees, and personal WhatsApp onboarding.
          </p>
        </div>
      </header>

      <section className="section" style={{ padding: '110px 0', background: '#F8FAFC' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: '64px' }}>
            {/* Form Column */}
            <div className="registration-glass-card">
              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      background: '#001F3F',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.6rem',
                      margin: '0 auto 24px',
                      borderLeft: '4px solid #DC2626',
                    }}
                  >
                    ✓
                  </div>
                  <h3 style={{ fontSize: '1.7rem', fontWeight: 800, color: '#001F3F', marginBottom: '12px', letterSpacing: '-0.01em' }}>
                    Registration Received
                  </h3>
                  <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: '28px' }}>
                    Thank you <strong>{formData.fullName}</strong>. Our admissions team will reach out to <strong>{formData.phone}</strong> via WhatsApp and email within 12 hours with your M-Pesa admission link.
                  </p>
                  <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a
                      href={`https://wa.me/18013195465?text=Hello%20Detmax,%20I%20just%20submitted%20registration%20for%20${encodeURIComponent(formData.fullName)}%20(${encodeURIComponent(formData.course)})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-lg"
                    >
                      Accelerate via WhatsApp
                    </a>
                    <button
                      onClick={() => {
                        setStatus('idle')
                        setErrorMsg('')
                        setFormData({ fullName: '', email: '', phone: '', course: '', county: '', gender: '', dob: '', startDate: '', schedule: '', referredBy: '', message: '' })
                      }}
                      className="btn btn-secondary btn-lg"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div style={{ marginBottom: '32px', paddingBottom: '20px', borderBottom: '1px solid #E2E8F0' }}>
                    <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#001F3F', marginBottom: '6px', letterSpacing: '-0.01em' }}>
                      Admission Details
                    </h2>
                    <p style={{ fontSize: '0.85rem', color: '#64748B' }}>
                      Fields marked <span style={{ color: '#DC2626' }}>*</span> are mandatory.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="form-group-modern">
                      <label htmlFor="fullName">Full Legal Name *</label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="e.g. John Kamau Njoroge"
                        className="form-control-modern"
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                      <div className="form-group-modern">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="e.g. kamau@gmail.com"
                          className="form-control-modern"
                        />
                      </div>

                      <div className="form-group-modern">
                        <label htmlFor="phone">Phone (M-Pesa) *</label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="e.g. 0712 345 678"
                          className="form-control-modern"
                        />
                      </div>
                    </div>

                    <div className="form-group-modern">
                      <label htmlFor="course">Select Your Program *</label>
                      <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                        className="form-control-modern"
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="">-- Choose a Program --</option>
                        {courses.map((c) => (
                          <option key={c.id} value={c.name}>
                            {c.name} — {c.price}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group-modern">
                      <label htmlFor="county">County of Residence *</label>
                      <input
                        id="county"
                        type="text"
                        name="county"
                        value={formData.county}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Nairobi, Nakuru, Kiambu, Mombasa, Kisumu..."
                        className="form-control-modern"
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                      <div className="form-group-modern">
                        <label htmlFor="gender">Gender (Optional)</label>
                        <select
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="form-control-modern"
                          style={{ cursor: 'pointer' }}
                        >
                          <option value="">-- Select --</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                      </div>
                      <div className="form-group-modern">
                        <label htmlFor="dob">Date of Birth (Optional)</label>
                        <input
                          id="dob"
                          type="date"
                          name="dob"
                          value={formData.dob}
                          onChange={handleChange}
                          className="form-control-modern"
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                      <div className="form-group-modern">
                        <label htmlFor="startDate">Preferred Start Date</label>
                        <input
                          id="startDate"
                          type="date"
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleChange}
                          className="form-control-modern"
                        />
                      </div>
                      <div className="form-group-modern">
                        <label htmlFor="schedule">Schedule Preference</label>
                        <select
                          id="schedule"
                          name="schedule"
                          value={formData.schedule}
                          onChange={handleChange}
                          className="form-control-modern"
                          style={{ cursor: 'pointer' }}
                        >
                          <option value="">-- Select --</option>
                          <option value="Weekday Mornings">Weekday Mornings</option>
                          <option value="Weekday Afternoons">Weekday Afternoons</option>
                          <option value="Weekday Evenings">Weekday Evenings</option>
                          <option value="Weekend Mornings">Weekend Mornings</option>
                          <option value="Weekend Afternoons">Weekend Afternoons</option>
                          <option value="Fully Online / Self-Paced">Fully Online / Self-Paced</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group-modern">
                      <label htmlFor="referredBy">Referred By (Optional)</label>
                      <input
                        id="referredBy"
                        type="text"
                        name="referredBy"
                        value={formData.referredBy}
                        onChange={handleChange}
                        placeholder="Name of person or channel that referred you (e.g. WhatsApp, Facebook, friend)"
                        className="form-control-modern"
                      />
                    </div>

                    <div className="form-group-modern">
                      <label htmlFor="message">Questions or Notes (Optional)</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Anything else we should know? (Preferred timing, installment plans, accessibility needs…)"
                        className="form-control-modern"
                        style={{ resize: 'vertical' }}
                      ></textarea>
                    </div>

                    {status === 'error' && errorMsg && (
                      <div
                        role="alert"
                        style={{
                          background: '#FEF2F2',
                          border: '1px solid #DC2626',
                          color: '#991B1B',
                          padding: '12px 16px',
                          marginBottom: '16px',
                          fontSize: '0.9rem',
                        }}
                      >
                        ⚠ {errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn btn-primary btn-lg btn-block"
                    >
                      {status === 'submitting' ? 'Processing Enrollment…' : 'Complete Registration & Claim 30% Off →'}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* What Happens Next Column */}
            <div>
              <div style={{ marginBottom: '32px', paddingBottom: '20px', borderBottom: '4px solid #001F3F' }}>
                <span className="section-eyebrow navy">Transparent Process</span>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#001F3F', marginBottom: '8px', letterSpacing: '-0.01em' }}>
                  What Happens Next?
                </h2>
                <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: 1.65 }}>
                  Your journey with Detmax is swift, structured, and friendly.
                </p>
              </div>

              <div>
                {[
                  {
                    t: 'Direct WhatsApp & Email Confirmation',
                    d: 'Our registrar checks your preferred schedule and verifies your slot within a few hours.',
                  },
                  {
                    t: 'Secure M-Pesa Admission Receipt',
                    d: 'Receive our official Detmax Limited Paybill details with your unique student PIN.',
                  },
                  {
                    t: 'Portal Onboarding & Mentor Matching',
                    d: 'Get instant access to training materials, syllabus guides, and your dedicated instructor channel.',
                  },
                  {
                    t: 'Start Training with 24/7 Support',
                    d: 'Drive or code your way to certified excellence with comprehensive career mentorship.',
                  },
                ].map((s, i) => (
                  <div key={i} className="step-card-modern">
                    <div className="step-number-badge">{i + 1}</div>
                    <div className="step-content">
                      <h4>{s.t}</h4>
                      <p>{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: '#001F3F', color: '#FFFFFF', padding: '24px', marginTop: '24px', borderLeft: '4px solid #DC2626' }}>
                <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '0.92rem', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                  Early-Bird Discount Locked
                </div>
                <p style={{ margin: 0, fontSize: '0.92rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.65 }}>
                  Submitting this form automatically locks your <strong>30% fee reduction</strong> for the first 50 students this intake.
                </p>
              </div>

              <div style={{ marginTop: '24px', textAlign: 'center' }}>
                <p style={{ fontSize: '0.88rem', color: '#64748B', marginBottom: '10px' }}>
                  Prefer talking to a registrar right now?
                </p>
                <a
                  href="https://wa.me/18013195465?text=Hello%20Detmax,%20I%20have%20questions%20about%20registration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Chat Live on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
