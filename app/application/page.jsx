'use client'

/**
 * Course Application form — /application
 *
 * This is deliberately NOT the enrollment form. Applying is the first step:
 * the applicant tells us which course they want and asks to be kept informed
 * about intake dates. Official enrollment (/registration) is the second step,
 * where an approved applicant submits their ID, DOB, emergency contact and
 * schedule so we can book them with NTSA.
 *
 * Every submission is emailed to info@detmaxinstitute.co.ke by
 * /api/send-email with type: 'application'.
 */
import { useEffect, useState } from 'react'
import Link from 'next/link'

const PROGRAMMES = [
  { id: 'driving', label: 'Driving School (NTSA)' },
  { id: 'computer', label: 'Computer College' },
  { id: 'professional', label: 'Short Professional Courses' },
]

const COURSES = [
  { name: 'Driving School (NTSA Practical & Theory)', price: '13,000 KES', programme: 'driving' },
  { name: 'Full Computer Packages (MS Office)', price: '9,500 KES', programme: 'computer' },
  { name: 'Digital Marketing & Social Strategy', price: '7,500 KES', programme: 'computer' },
  { name: 'AI in Daily Life (ChatGPT & Workflows)', price: '7,500 KES', programme: 'professional' },
  { name: 'Notion & Project Management', price: '8,500 KES', programme: 'professional' },
  { name: 'Project Management Fundamentals', price: '6,000 KES', programme: 'professional' },
  { name: 'Solar Basics (Sizing & Installation)', price: '12,000 KES', programme: 'professional' },
  { name: 'ERP Intro & KRA eTIMS Integration', price: '10,000 KES', programme: 'professional' },
  { name: 'Medical Administration & Operations', price: '7,000 KES', programme: 'professional' },
]

const INTAKES = [
  'Next available intake',
  'Within 1 month',
  'Within 3 months',
  'Just gathering information',
]

const REFERRALS = ['Google search', 'Facebook / Instagram', 'TikTok', 'Friend or family', 'Alumni', 'Walk-in / referral agent', 'Other']

export default function ApplicationPage() {
  const [formData, setFormData] = useState({
    programme: '',
    course: '',
    fullName: '',
    email: '',
    phone: '',
    county: '',
    intake: '',
    referral: '',
    message: '',
  })
  const [notifyUpdates, setNotifyUpdates] = useState(true)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  // A course page can deep-link here with ?course=..., e.g. the "Apply for this
  // course" buttons. Read from window rather than useSearchParams so the page
  // needs no Suspense boundary and stays statically renderable.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const requested = params.get('course')
    if (!requested) return
    const match = COURSES.find((c) => c.name.toLowerCase() === requested.toLowerCase())
               || COURSES.find((c) => c.name.toLowerCase().includes(requested.toLowerCase()))
    if (match) {
      setFormData((prev) => ({ ...prev, course: match.name, programme: match.programme }))
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    // Changing the programme clears a course that belongs to another one.
    if (name === 'programme') {
      setFormData((prev) => ({ ...prev, programme: value, course: '' }))
      return
    }
    setFormData((prev) => ({ ...prev, [name]: value }))
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
          type: 'application',
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          county: formData.county,
          category: PROGRAMMES.find((p) => p.id === formData.programme)?.label || '',
          course: formData.course,
          intake: formData.intake,
          notifyUpdates,
          referral: formData.referral,
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

  const availableCourses = formData.programme
    ? COURSES.filter((c) => c.programme === formData.programme)
    : COURSES

  return (
    <main>
      <header className="page-header">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-eyebrow" style={{ borderColor: '#FFFFFF', color: '#FFFFFF', display: 'inline-flex' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <span>Step 1 of 2 — Course Application</span>
          </div>
          <h1 className="page-title">Apply for a Course</h1>
          <p className="page-subtitle">
            Tell us which course you want and we will confirm your eligibility, current intake dates and a
            full fee breakdown. Applying is free and takes under two minutes — no payment is required until
            your place is confirmed.
          </p>
        </div>
      </header>

      <section className="section" style={{ padding: '80px 0 110px', background: '#F8FAFC' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: '56px' }}>
            {/* ── Why apply + next steps ─────────────────────────────── */}
            <div>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.1rem)' }}>
                Apply Now, Get Updated on Every Intake
              </h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '28px' }}>
                Every application is reviewed by our admissions team and sent straight to{' '}
                <strong>info@detmaxinstitute.co.ke</strong>. You receive an email confirmation immediately, and
                we reply within <strong>24 hours</strong>.
              </p>

              <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'grid', gap: '18px' }}>
                {[
                  {
                    t: 'Apply online (this form)',
                    d: 'Choose your programme, course and preferred intake. Takes 2 minutes.',
                  },
                  {
                    t: 'We call or WhatsApp you within 24 hours',
                    d: 'Eligibility confirmed, current intake dates shared and any questions answered.',
                  },
                  {
                    t: 'Complete official enrollment',
                    d: 'Submit your ID, date of birth and emergency contact on the enrollment form, then pay via M-Pesa.',
                  },
                ].map((step, i) => (
                  <li key={step.t} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <span
                      style={{
                        flexShrink: 0,
                        width: '30px',
                        height: '30px',
                        background: i === 0 ? '#DC2626' : '#001F3F',
                        color: '#FFFFFF',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '0.85rem',
                      }}
                    >
                      {i + 1}
                    </span>
                    <span>
                      <strong style={{ display: 'block', color: '#001F3F', fontSize: '1rem' }}>{step.t}</strong>
                      <span style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>{step.d}</span>
                    </span>
                  </li>
                ))}
              </ol>

              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderLeft: '3px solid #001F3F',
                  padding: '22px 24px',
                }}
              >
                <strong style={{ display: 'block', color: '#001F3F', marginBottom: '6px', fontSize: '0.95rem' }}>
                  Already applied?
                </strong>
                <p style={{ margin: 0, color: '#475569', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Once your application is approved, complete your enrollment to lock in your place.{' '}
                  <Link href="/registration" style={{ color: '#DC2626', fontWeight: 700 }}>
                    Go to the enrollment form →
                  </Link>
                </p>
              </div>
            </div>

            {/* ── The form ──────────────────────────────────────────── */}
            {status === 'success' ? (
              <div
                role="status"
                style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '44px 36px', textAlign: 'center' }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    margin: '0 auto 20px',
                    borderRadius: '50%',
                    background: '#ECFDF5',
                    color: '#059669',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '26px',
                  }}
                >
                  ✓
                </div>
                <h2 style={{ margin: '0 0 12px', color: '#001F3F', fontSize: '1.4rem' }}>
                  Application Received
                </h2>
                <p style={{ color: '#475569', lineHeight: 1.7, margin: '0 0 10px' }}>
                  Thank you, <strong>{formData.fullName || 'applicant'}</strong>. Your application for{' '}
                  <strong>{formData.course || 'your selected course'}</strong> has been sent to our admissions
                  team, and a confirmation is on its way to <strong>{formData.email}</strong>.
                </p>
                <p style={{ color: '#475569', lineHeight: 1.7, margin: '0 0 26px' }}>
                  We will contact you within <strong>24 hours</strong> with your intake dates and fee breakdown.
                </p>
                <Link href="/registration" className="btn btn-primary btn-lg">
                  Complete Your Enrollment →
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '36px', display: 'grid', gap: '18px' }}
              >
                <div>
                  <span className="field-label" style={labelStyle}>Programme *</span>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {PROGRAMMES.map((p) => {
                      const active = formData.programme === p.id
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => handleChange({ target: { name: 'programme', value: p.id } })}
                          aria-pressed={active}
                          style={{
                            padding: '10px 16px',
                            fontSize: '0.88rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            background: active ? '#001F3F' : '#FFFFFF',
                            color: active ? '#FFFFFF' : '#334155',
                            border: `1.5px solid ${active ? '#001F3F' : '#E2E8F0'}`,
                            fontFamily: 'inherit',
                          }}
                        >
                          {p.label}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <label style={{ display: 'grid', gap: '6px' }}>
                  <span style={labelStyle}>Course you want to apply for *</span>
                  <select name="course" required value={formData.course} onChange={handleChange} style={inputStyle}>
                    <option value="" disabled>Select a course…</option>
                    {availableCourses.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.name} — {c.price}
                      </option>
                    ))}
                  </select>
                </label>

                <label style={{ display: 'grid', gap: '6px' }}>
                  <span style={labelStyle}>Full name *</span>
                  <input name="fullName" type="text" required value={formData.fullName} onChange={handleChange} placeholder="Jane Achieng" style={inputStyle} />
                </label>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <label style={{ display: 'grid', gap: '6px' }}>
                    <span style={labelStyle}>Email *</span>
                    <input name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="jane@example.com" style={inputStyle} />
                  </label>
                  <label style={{ display: 'grid', gap: '6px' }}>
                    <span style={labelStyle}>Phone / WhatsApp *</span>
                    <input name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="+254 7XX XXX XXX" style={inputStyle} />
                  </label>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <label style={{ display: 'grid', gap: '6px' }}>
                    <span style={labelStyle}>County / Town</span>
                    <input name="county" type="text" value={formData.county} onChange={handleChange} placeholder="Nairobi" style={inputStyle} />
                  </label>
                  <label style={{ display: 'grid', gap: '6px' }}>
                    <span style={labelStyle}>Preferred intake</span>
                    <select name="intake" value={formData.intake} onChange={handleChange} style={inputStyle}>
                      <option value="" disabled>Select a timeframe…</option>
                      {INTAKES.map((i) => (
                        <option key={i} value={i}>{i}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <label style={{ display: 'grid', gap: '6px' }}>
                  <span style={labelStyle}>How did you hear about us?</span>
                  <select name="referral" value={formData.referral} onChange={handleChange} style={inputStyle}>
                    <option value="" disabled>Select an option…</option>
                    {REFERRALS.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </label>

                <label
                  style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start',
                    background: '#F1F5F9',
                    border: '1px solid #E2E8F0',
                    padding: '14px 16px',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={notifyUpdates}
                    onChange={(e) => setNotifyUpdates(e.target.checked)}
                    style={{ marginTop: '3px', width: '17px', height: '17px', accentColor: '#DC2626', cursor: 'pointer' }}
                  />
                  <span style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.6 }}>
                    <strong style={{ color: '#001F3F' }}>Email me when new intakes open.</strong> Get notified about
                    upcoming intake dates, new courses and early-bird discounts for the course you selected.
                  </span>
                </label>

                <label style={{ display: 'grid', gap: '6px' }}>
                  <span style={labelStyle}>Anything else we should know?</span>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your goals, preferred class times, or a question for our admissions team…"
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '84px', fontFamily: 'inherit' }}
                  />
                </label>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn btn-primary btn-block btn-lg"
                  style={{ marginTop: '4px' }}
                >
                  {status === 'submitting' ? 'Submitting…' : 'Submit Application →'}
                </button>

                {status === 'error' && (
                  <p role="alert" style={{ margin: 0, fontSize: '0.9rem', color: '#DC2626', fontWeight: 600 }}>
                    {errorMsg}
                  </p>
                )}

                <p style={{ margin: 0, fontSize: '0.82rem', color: '#64748B', lineHeight: 1.6 }}>
                  Applying is free and does not commit you to payment. Your details are emailed only to Detmax
                  admissions at info@detmaxinstitute.co.ke.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

const labelStyle = {
  fontSize: '0.78rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: '#001F3F',
  marginBottom: '2px',
}

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  background: '#FFFFFF',
  border: '1.5px solid #E2E8F0',
  color: '#001F3F',
  fontSize: '0.95rem',
  outline: 'none',
  fontFamily: 'inherit',
}
