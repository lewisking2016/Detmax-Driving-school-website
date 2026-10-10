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
        <h1 className="hero-title" data-gsap="fade-up">
          DETMAX DRIVING SCHOOL & COMPUTER COLLEGE
        </h1>
        <p className="hero-subtitle" data-gsap="fade-up" data-gsap-delay="0.2">
          Quality Education, Anytime. Anywhere.
        </p>
        <div className="hero-btns flex-wrap justify-center gap-20" data-gsap="fade-up" data-gsap-delay="0.4">
          <Link href="/driving-school" className="btn btn-primary">
            Driving School
          </Link>
          <Link href="/computer-college" className="btn btn-white">
            Computer College
          </Link>
          <Link href="/registration" className="btn btn-secondary">
            Enroll Now →
          </Link>
        </div>
        <div className="trust-badges" data-gsap="fade-up" data-gsap-delay="0.6">
          <span>PIN: P051811093F</span>
          <span>Est. 2022</span>
          <span>NTSA Registered</span>
        </div>

        <div className="scroll-indicator">
          <div className="mouse"></div>
          <span>Scroll to Explore</span>
        </div>
      </div>
    </section>
  )
}
