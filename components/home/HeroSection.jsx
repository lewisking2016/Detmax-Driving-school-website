'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function HeroSection() {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Three.js animation setup will be handled by external script
    const canvas = canvasRef.current
    if (canvas) {
      // Canvas setup for background animation
      // This would typically be done with Three.js
    }
  }, [])

  return (
    <section id="home" className="hero">
      <canvas id="hero-canvas" ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }}></canvas>
      <div className="hero-content">
        <div className="section-eyebrow mb-20" style={{ background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.25)', color: '#FFFFFF', backdropFilter: 'blur(8px)', display: 'inline-flex', alignItems: 'center', gap: '8px' }} data-gsap="fade-up">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
          <span>NTSA Registered &amp; Government Verified Academy</span>
        </div>
        <h1 className="hero-title" data-gsap="fade-up">
          DETMAX DRIVING SCHOOL <br />
          <span className="title-accent">&amp; COMPUTER COLLEGE</span>
        </h1>
        <p className="hero-subtitle" data-gsap="fade-up" data-gsap-delay="0.2" style={{ maxWidth: '780px', margin: '0 auto 2.5rem', color: 'rgba(255, 255, 255, 0.9)', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
          Master professional driving skills &amp; high-income tech careers. Learn anytime, anywhere in Kenya with certified instructors and transparent pricing.
        </p>
        <div className="hero-btns flex-wrap justify-center gap-20" data-gsap="fade-up" data-gsap-delay="0.4">
          <Link href="/driving-school" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            Driving School
          </Link>
          <Link href="/computer-college" className="btn btn-white" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            Computer College
          </Link>
          <Link href="/registration" className="btn btn-secondary">
            Enroll Now →
          </Link>
        </div>
        <div className="trust-badges" data-gsap="fade-up" data-gsap-delay="0.6" style={{ marginTop: '35px', gap: '20px', flexWrap: 'wrap' }}>
          <span style={{ background: 'rgba(255,255,255,0.08)', padding: '6px 16px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', color: 'white' }}>
            KRA PIN: P051811093F
          </span>
          <span style={{ background: 'rgba(255,255,255,0.08)', padding: '6px 16px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', color: 'white' }}>
            NTSA Certified
          </span>
          <span style={{ background: 'rgba(255,255,255,0.08)', padding: '6px 16px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', color: 'white' }}>
            1,000+ Students
          </span>
          <span style={{ background: 'rgba(255,255,255,0.08)', padding: '6px 16px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', color: 'white' }}>
            All 47 Counties
          </span>
        </div>

        <div className="scroll-indicator">
          <div className="mouse"></div>
          <span style={{ fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Scroll to Explore</span>
        </div>
      </div>
    </section>
  )
}
