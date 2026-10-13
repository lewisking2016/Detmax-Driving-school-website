'use client'

import { useState } from 'react'

export default function InquirySection() {
  const [status, setStatus] = useState({ type: '', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: '', message: '' })
    const form = e.currentTarget
    const data = {
      type: 'inquiry',
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      program: form.program.value.trim(),
      message: form.message.value.trim(),
    }

    if (!data.name || !data.phone) {
      setStatus({ type: 'error', message: 'Please provide your name and phone number.' })
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(json.error || 'Failed to send inquiry.')

      setStatus({ type: 'success', message: '✓ Inquiry received. We will reply within 24 hours at info@detmaxinstitute.co.ke.' })
      form.reset()
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Something went wrong. Please try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="inquiry"
      className="section"
      style={{
        padding: '110px 0',
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
      }}
    >
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'flex-start', gap: '64px' }}>
          <div>
            <div className="section-eyebrow">
              <span>Inquiry Tab</span>
            </div>
            <h2 className="section-title">Have Questions? We Reply Within 24 Hours.</h2>
            <p style={{ color: '#475569', fontSize: '1.08rem', lineHeight: 1.7, marginBottom: '28px' }}>
              Drop your details below and our admissions team will email you at <strong>info@detmaxinstitute.co.ke</strong>. For instant chat, tap the WhatsApp bubble or our FAQ chat tool.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#334155', display: 'grid', gap: '14px' }}>
              {[
                'Personalized course recommendations',
                'Transparent fee breakdown (no hidden charges)',
                'M-Pesa installment options',
                'Job-readiness mentorship via PMAK',
              ].map((line) => (
                <li key={line} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.98rem', fontWeight: 500 }}>
                  <span style={{ width: '18px', height: '18px', background: '#001F3F', color: '#FFFFFF', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', flexShrink: 0 }}>✓</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <form
            id="inquiryForm"
            onSubmit={handleSubmit}
            style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              padding: '36px',
              display: 'grid',
              gap: '16px',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <label style={{ display: 'grid', gap: '6px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#001F3F' }}>Full name *</span>
                <input name="name" type="text" required placeholder="Jane Achieng" style={inputStyle} />
              </label>
              <label style={{ display: 'grid', gap: '6px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#001F3F' }}>Phone / WhatsApp *</span>
                <input name="phone" type="tel" required placeholder="+254 7XX XXX XXX" style={inputStyle} />
              </label>
            </div>
            <label style={{ display: 'grid', gap: '6px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#001F3F' }}>Email (optional)</span>
              <input name="email" type="email" placeholder="jane@example.com" style={inputStyle} />
            </label>
            <label style={{ display: 'grid', gap: '6px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#001F3F' }}>Program of interest</span>
              <select name="program" defaultValue="" style={inputStyle}>
                <option value="" disabled>Choose a program…</option>
                <option value="Driving - Manual">Driving — Manual</option>
                <option value="Driving - Automatic">Driving — Automatic</option>
                <option value="Computer Basics">Computer Basics</option>
                <option value="Microsoft Office Packages">Microsoft Office Packages</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="AI & Notion PM">AI & Notion PM</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </label>
            <label style={{ display: 'grid', gap: '6px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#001F3F' }}>Your question</span>
              <textarea name="message" rows="3" placeholder="Tell us a bit about what you want to learn…" style={{ ...inputStyle, resize: 'vertical', minHeight: '84px', fontFamily: 'inherit' }} />
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="btn btn-primary btn-block btn-lg"
              style={{ marginTop: '8px' }}
            >
              {submitting ? 'Sending…' : 'Send Inquiry →'}
            </button>
            {status.message && (
              <p
                role="status"
                style={{
                  margin: 0,
                  fontSize: '0.9rem',
                  color: status.type === 'success' ? '#059669' : '#DC2626',
                  fontWeight: 600,
                }}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
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
