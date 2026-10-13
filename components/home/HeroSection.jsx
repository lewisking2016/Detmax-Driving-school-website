'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function HeroSection() {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Three.js animation is wired from ScriptInitializer; this ref just keeps
    // the canvas element stable across re-renders.
    const canvas = canvasRef.current
    if (canvas) {
      canvas.dataset.heroCanvas = 'true'
    }
  }, [])

  return (
    <section id="home" className="hero">
      <canvas id="hero-canvas" ref={canvasRef}></canvas>

      <div className="hero-content">
        <div
          className="section-eyebrow mb-20"
          style={{
            background: 'rgba(255,255,255,0.14)',
            borderColor: 'rgba(255,255,255,0.32)',
            color: '#FFFFFF',
            backdropFilter: 'blur(8px)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}
          data-gsap="fade-up"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <span>NTSA Registered &amp; Government Verified Academy</span>
        </div>

        <h1 className="hero-title" data-gsap="fade-up">
          <span className="title-line">Detmax Driving School</span>
          <span className="title-line title-accent">&amp; Computer College</span>
        </h1>

        <p
          className="hero-subtitle"
          data-gsap="fade-up"
          data-gsap-delay="0.2"
          style={{
            maxWidth: '780px',
            margin: '0 auto 2rem',
            color: 'rgba(255, 255, 255, 0.92)',
            textShadow: '0 2px 10px rgba(0,0,0,0.45)',
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
          }}
        >
          Master the road <strong>and</strong> the digital future. NTSA-aligned driving lessons plus 80%-online computer packages — taught by certified instructors, with transparent M-Pesa pricing and a 1,000+ strong alumni network across all 47 counties.
        </p>

        <div
          className="hero-btns flex-wrap justify-center gap-20"
          data-gsap="fade-up"
          data-gsap-delay="0.4"
        >
          <Link
            href="/driving-school"
            className="btn btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
              <circle cx="7" cy="17" r="2" />
              <circle cx="17" cy="17" r="2" />
            </svg>
            Explore Driving School
          </Link>
          <Link
            href="/computer-college"
            className="btn btn-white"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            Explore Computer College
          </Link>
          <Link
            href="/#inquiry"
            className="btn btn-secondary"
          >
            Quick Inquiry →
          </Link>
        </div>

        <div
          className="trust-badges"
          data-gsap="fade-up"
          data-gsap-delay="0.6"
          style={{ marginTop: '32px', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          {[
            { label: 'KRA PIN: P051811093F', color: '#FF3333' },
            { label: 'NTSA Certified', color: '#22c55e' },
            { label: '1,000+ Students', color: '#60a5fa' },
            { label: 'All 47 Counties', color: '#fbbf24' },
          ].map((b) => (
            <span
              key={b.label}
              style={{
                background: 'rgba(255,255,255,0.10)',
                padding: '6px 14px',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.18)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.88rem',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: b.color,
                  boxShadow: `0 0 8px ${b.color}`,
                }}
              />
              {b.label}
            </span>
          ))}
        </div>

        <div className="scroll-indicator">
          <div className="mouse"></div>
          <span style={{ fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Scroll to Explore
          </span>
        </div>
      </div>
    </section>
  )
}
