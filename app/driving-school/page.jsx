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
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
      )
    },
    {
      title: 'Modern Dual-Control Fleet',
      desc: 'Well-maintained, fully insured training cars equipped with instructor dual controls for 100% peace of mind.',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
      )
    },
    {
      title: 'Flexible Hourly Slots',
      desc: 'Early morning (6:30 AM), mid-day, evening, and weekend slots to accommodate your work and school schedule.',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      )
    },
    {
      title: '95%+ First-Attempt Pass Rate',
      desc: 'Our mock test prep ensures over 95% of students pass their NTSA road test on their very first trial.',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
      )
    },
  ]

  return (
    <main>
      {/* Header */}
      <header className="page-header bg-navy text-white" style={{ marginTop: '90px', padding: '80px 20px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(220,38,38,0.25) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-eyebrow" style={{ background: 'rgba(255,255,255,0.12)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.25)', marginBottom: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
              <circle cx="7" cy="17" r="2" />
              <circle cx="17" cy="17" r="2" />
            </svg>
            <span>NTSA Certified Driving Academy</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Professional Driving School
          </h1>
          <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
            Gain confidence behind the wheel with licensed instructors, modern dual-pedal vehicles, and guaranteed test booking.
          </p>
        </div>
      </header>

      {/* Package Overview */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            <div>
              <div className="section-eyebrow">
                <span>Everything Included</span>
              </div>
              <h2 className="section-title">What You Will Master</h2>
              <p style={{ color: '#4B5563', fontSize: '1.1rem', lineHeight: 1.65, marginBottom: '24px' }}>
                Our curriculum follows the updated Kenya National Transport and Safety Authority (NTSA) driver training manual:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                {[
                  'Dual-pedal vehicle handling',
                  'Emergency braking & hazard recovery',
                  'Model Town Board mastery',
                  'Parallel & 90° angle parking',
                  'Highway lane discipline',
                  'Night & wet weather tactics',
                  'Essential engine check & maintenance',
                  'NTSA practical test walkthrough',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center', background: '#F8FAFC', padding: '12px 14px', borderRadius: '10px', fontSize: '0.92rem', color: '#334155', fontWeight: 500 }}>
                    <span style={{ color: '#DC2626', fontWeight: 'bold' }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '30px', padding: '20px', background: '#EFF6FF', borderRadius: '16px', border: '1px solid #BFDBFE' }}>
                <strong style={{ color: '#1E40AF', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="17" x2="12" y2="22" />
                    <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.89A2 2 0 0 1 15 10.77V7a3 3 0 0 0-6 0v3.77a2 2 0 0 1-1.11 1.79l-1.78.89A2 2 0 0 0 5 15.24Z" />
                  </svg>
                  Official NTSA Portal Fee Breakdown
                </strong>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#1E3A8A', lineHeight: 1.6 }}>
                  Direct government statutory fees: <strong>PDL (Provisional License): 1,000 Ksh</strong> • <strong>NTSA Examination: 1,000 Ksh</strong> • <strong>Smart Driver License: 3,050 Ksh</strong>. We assist you step-by-step through eCitizen and NTSA TIMS portal.
                </p>
              </div>
            </div>

            {/* Price Box */}
            <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '36px', border: '1.5px solid rgba(0,31,63,0.1)', boxShadow: '0 16px 40px -10px rgba(0,31,63,0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#DC2626', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Full Tuition Package
                </span>
                <span style={{ background: '#DC2626', color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 700, padding: '4px 12px', borderRadius: '100px' }}>
                  Most Popular
                </span>
              </div>

              <div style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--primary-navy)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                13,000 <span style={{ fontSize: '1.2rem', fontWeight: 600, color: '#64748B' }}>KES</span>
              </div>
              <p style={{ color: '#059669', fontWeight: 600, fontSize: '0.9rem', marginBottom: '24px' }}>
                ✓ 2-Part Installment Plan Available via M-Pesa
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px 0', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                  <span style={{ color: '#64748B' }}>Practical Lessons:</span>
                  <strong>14 One-on-One Sessions</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                  <span style={{ color: '#64748B' }}>Vehicle:</span>
                  <strong>Modern Saloon / Dual-Control</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                  <span style={{ color: '#64748B' }}>Theory &amp; Mechanics:</span>
                  <strong>Included in Package</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                  <span style={{ color: '#64748B' }}>Exam Booking:</span>
                  <strong>Full Dedicated Support</strong>
                </div>
              </div>

              <Link href="/registration" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block', padding: '16px', fontSize: '1.05rem', borderRadius: '12px', marginBottom: '12px' }}>
                Book Your Driving Seat Now →
              </Link>
              <a href="https://wa.me/254716894174?text=Hello%20Detmax,%20I%20want%20to%20enroll%20in%20Driving%20School" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', fontSize: '0.95rem', borderRadius: '12px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Chat on WhatsApp (+254 716 894174)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Roadmap */}
      <section className="section bg-light" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="text-center mb-50">
            <div className="section-eyebrow navy">
              <span>Step-by-Step Pathway</span>
            </div>
            <h2 className="section-title">The 14-Lesson Curriculum</h2>
            <p className="section-desc mx-auto">
              Our structured progression ensures you transition smoothly from zero knowledge to test mastery.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '780px', margin: '0 auto' }}>
            {curriculumSteps.map((step, idx) => (
              <div key={idx} style={{ background: '#FFFFFF', padding: '24px 28px', borderRadius: '18px', border: '1px solid rgba(0,31,63,0.06)', display: 'flex', gap: '20px', alignItems: 'flex-start', boxShadow: '0 4px 14px -2px rgba(0,0,0,0.03)' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(220,38,38,0.1)', color: '#DC2626', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.1rem' }}>
                  {step.step}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#DC2626', textTransform: 'uppercase' }}>
                      {step.lessons}
                    </span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, background: '#F1F5F9', color: '#475569', padding: '2px 8px', borderRadius: '4px' }}>
                      {step.tag}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1.18rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '8px' }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: '0.93rem', color: '#64748B', lineHeight: '1.6', margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Pillars */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="text-center mb-50">
            <div className="section-eyebrow">
              <span>Why Learn With Detmax</span>
            </div>
            <h2 className="section-title">The Standard of Safe Driving</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {pillars.map((p, idx) => (
              <div key={idx} style={{ background: '#F8FAFC', padding: '28px', borderRadius: '18px', border: '1px solid rgba(0,31,63,0.06)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(220,38,38,0.1)', color: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                  {p.svg}
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '8px' }}>
                  {p.title}
                </h4>
                <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: '1.6', margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Action Banner */}
      <section className="section bg-navy text-white" style={{ padding: '80px 0' }}>
        <div className="container text-center">
          <h2 className="section-title text-white" style={{ marginBottom: '16px' }}>
            Ready to Get Behind the Wheel?
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto 30px' }}>
            Enroll today for 13,000 KES. Flexible installment options available.
          </p>
          <Link href="/registration" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem', borderRadius: '100px' }}>
            Enroll Now for Driving Training →
          </Link>
        </div>
      </section>
    </main>
  )
}
