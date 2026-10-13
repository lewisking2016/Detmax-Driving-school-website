'use client'

import Link from 'next/link'

export default function DrivingSchool() {
  const curriculumSteps = [
    {
      step: '01',
      lessons: 'Lessons 1–3',
      title: 'Vehicle Controls & Familiarization',
      desc: 'Cockpit drill, blind spot checks, mirror calibration, steering wheel discipline, and starting/stopping procedures.',
      tag: 'Foundation',
    },
    {
      step: '02',
      lessons: 'Lessons 4–7',
      title: 'Precision Maneuvers & Motion Control',
      desc: 'Clutch control, hill starts, three-point turns, smooth gear shifts, and controlled deceleration.',
      tag: 'Control',
    },
    {
      step: '03',
      lessons: 'Lessons 8–10',
      title: 'Traffic Scenarios & Model Town Board',
      desc: 'NTSA Model Town Board navigation, roundabouts, road markings, priority rules, and parallel parking.',
      tag: 'Rules & Road',
    },
    {
      step: '04',
      lessons: 'Lessons 11–13',
      title: 'Defensive Driving & Highway Tactics',
      desc: 'Anticipatory driving, braking distance under wet conditions, emergency hazard avoidance, and night driving.',
      tag: 'Safety Mastery',
    },
    {
      step: '05',
      lessons: 'Lesson 14',
      title: 'NTSA Mock Driving Examination',
      desc: 'Strict simulation of the government NTSA practical & theory test so you enter test day completely relaxed.',
      tag: 'Test Ready',
    },
  ]

  const pillars = [
    {
      title: 'NTSA Certified Instructors',
      desc: 'Patient, vetted professionals trained in modern road safety pedagogy and adult learning.',
      svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>,
    },
    {
      title: 'Modern Dual-Control Fleet',
      desc: 'Well-maintained, fully insured training cars equipped with instructor dual controls for 100% peace of mind.',
      svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></svg>,
    },
    {
      title: 'Flexible Hourly Slots',
      desc: 'Early morning (6:30 AM), mid-day, evening, and weekend slots to accommodate your work and school schedule.',
      svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
    },
    {
      title: '95%+ First-Attempt Pass Rate',
      desc: 'Our mock test prep ensures over 95% of students pass their NTSA road test on their very first trial.',
      svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>,
    },
  ]

  const skills = [
    'Dual-pedal vehicle handling',
    'Emergency braking & hazard recovery',
    'Model Town Board mastery',
    'Parallel & 90° angle parking',
    'Highway lane discipline',
    'Night & wet weather tactics',
    'Essential engine check & maintenance',
    'NTSA practical test walkthrough',
  ]

  return (
    <main>
      <header className="page-header">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-eyebrow" style={{ borderColor: '#FFFFFF', color: '#FFFFFF', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
              <circle cx="7" cy="17" r="2" />
              <circle cx="17" cy="17" r="2" />
            </svg>
            <span>NTSA Certified Driving Academy</span>
          </div>
          <h1>Professional Driving School</h1>
          <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1.12rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.7 }}>
            Gain confidence behind the wheel with licensed instructors, modern dual-pedal vehicles, and guaranteed test booking.
          </p>
        </div>
      </header>

      <section className="section" style={{ padding: '110px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: '64px' }}>
            <div>
              <div className="section-eyebrow">
                <span>Everything Included</span>
              </div>
              <h2 className="section-title">What You Will Master</h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '28px' }}>
                Our curriculum follows the updated Kenya National Transport and Safety Authority (NTSA) driver training manual.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid #E2E8F0' }}>
                {skills.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      gap: '10px',
                      alignItems: 'center',
                      background: '#FFFFFF',
                      padding: '14px 16px',
                      fontSize: '0.92rem',
                      color: '#334155',
                      fontWeight: 500,
                      borderRight: '1px solid #E2E8F0',
                      borderBottom: '1px solid #E2E8F0',
                    }}
                  >
                    <span style={{ width: '14px', height: '14px', background: '#DC2626', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontSize: '9px', flexShrink: 0 }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '28px', padding: '20px 24px', background: '#001F3F', color: '#FFFFFF', borderLeft: '4px solid #DC2626' }}>
                <strong style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="17" x2="12" y2="22" />
                    <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.89A2 2 0 0 1 15 10.77V7a3 3 0 0 0-6 0v3.77a2 2 0 0 1-1.11 1.79l-1.78.89A2 2 0 0 0 5 15.24Z" />
                  </svg>
                  Official NTSA Portal Fee Breakdown
                </strong>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.65 }}>
                  Direct government statutory fees: <strong>PDL: 1,000 Ksh</strong> &nbsp;·&nbsp; <strong>NTSA Exam: 1,000 Ksh</strong> &nbsp;·&nbsp; <strong>Smart DL: 3,050 Ksh</strong>. We assist you step-by-step through eCitizen and NTSA TIMS portal.
                </p>
              </div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '40px', border: '1px solid #E2E8F0', borderTop: '4px solid #001F3F' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#DC2626', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  Full Tuition Package
                </span>
                <span style={{ background: '#DC2626', color: '#FFFFFF', fontSize: '0.7rem', fontWeight: 700, padding: '4px 10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Most Popular
                </span>
              </div>

              <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#001F3F', marginBottom: '8px', letterSpacing: '-0.02em', lineHeight: 1 }}>
                13,000 <span style={{ fontSize: '1rem', fontWeight: 600, color: '#64748B' }}>KES</span>
              </div>
              <p style={{ color: '#059669', fontWeight: 700, fontSize: '0.78rem', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                ✓ 2-Part Installment Plan Available via M-Pesa
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px 0', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', marginBottom: '24px' }}>
                {[
                  { l: 'Practical Lessons', v: '14 One-on-One Sessions' },
                  { l: 'Vehicle', v: 'Modern Saloon / Dual-Control' },
                  { l: 'Theory & Mechanics', v: 'Included in Package' },
                  { l: 'Exam Booking', v: 'Full Dedicated Support' },
                ].map((row) => (
                  <div key={row.l} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem' }}>
                    <span style={{ color: '#64748B' }}>{row.l}:</span>
                    <strong style={{ color: '#001F3F' }}>{row.v}</strong>
                  </div>
                ))}
              </div>

              <Link href="/registration" className="btn btn-primary btn-block btn-lg" style={{ marginBottom: '12px' }}>
                Book Your Driving Seat Now →
              </Link>
              <a
                href="https://wa.me/18013195465?text=Hello%20Detmax,%20I%20want%20to%20enroll%20in%20Driving%20School"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-block"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: '110px 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '720px', margin: '0 auto 50px' }}>
            <div className="section-eyebrow navy">
              <span>Step-by-Step Pathway</span>
            </div>
            <h2 className="section-title">The 14-Lesson Curriculum</h2>
            <p className="section-desc mx-auto">
              Our structured progression ensures you transition smoothly from zero knowledge to test mastery.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxWidth: '860px', margin: '0 auto', border: '1px solid #E2E8F0' }}>
            {curriculumSteps.map((step) => (
              <div
                key={step.step}
                style={{
                  background: '#FFFFFF',
                  padding: '24px 28px',
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'flex-start',
                  borderBottom: '1px solid #E2E8F0',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    background: '#001F3F',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '1.1rem',
                    fontFamily: 'var(--font-main)',
                  }}
                >
                  {step.step}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px', flexWrap: 'wrap', gap: '8px' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#DC2626', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {step.lessons}
                    </span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#001F3F', textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '2px solid #001F3F', paddingBottom: '2px' }}>
                      {step.tag}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#001F3F', marginBottom: '8px', letterSpacing: '-0.01em' }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: '110px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '720px', margin: '0 auto 50px' }}>
            <div className="section-eyebrow">
              <span>Why Learn With Detmax</span>
            </div>
            <h2 className="section-title">The Standard of Safe Driving</h2>
          </div>

          <div className="feature-grid">
            {pillars.map((p) => (
              <div key={p.title} className="feature-card">
                <div className="icon-box">{p.svg}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: '110px 0', background: '#001F3F', color: '#FFFFFF' }}>
        <div className="container text-center" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 className="section-title text-white" style={{ marginBottom: '16px' }}>
            Ready to Get Behind the Wheel?
          </h2>
          <p style={{ fontSize: '1.12rem', color: 'rgba(255,255,255,0.82)', maxWidth: '600px', margin: '0 auto 32px', lineHeight: 1.7 }}>
            Enroll today for 13,000 KES. Flexible installment options available.
          </p>
          <Link href="/registration" className="btn btn-primary btn-lg">
            Enroll Now for Driving Training →
          </Link>
        </div>
      </section>
    </main>
  )
}
