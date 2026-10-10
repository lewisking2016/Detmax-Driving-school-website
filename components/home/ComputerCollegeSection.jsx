'use client'

import Link from 'next/link'

export default function ComputerCollegeSection() {
  return (
    <section className="section bg-light border-top-navy">
      <div className="container">
        <div className="grid-2">
          <div className="slider-container">
            <div className="slider-wrapper">
              <div className="slide">
                <img src="/detmax.png" alt="Detmax College" className="img-responsive rounded" />
              </div>
              <div className="slide">
                <img src="/comp.png" alt="Computer Training" className="img-responsive rounded" />
              </div>
              <div className="slide">
                <img src="/comp1.png" alt="Online Programs" className="img-responsive rounded" />
              </div>
              <div className="slide">
                <img src="/comp2.png" alt="Digital Skills" className="img-responsive rounded" />
              </div>
            </div>
          </div>
          <div className="content-box">
            <span className="badge-navy">100% Online</span>
            <h2 className="section-title">Online Computer College</h2>
            <p
              className="lead"
              style={{
                color: 'var(--primary-navy)',
                fontSize: '1.1rem',
                lineHeight: 1.6,
                marginBottom: '20px',
              }}
            >
              Master digital skills from home.{' '}
              <strong style={{ color: 'var(--secondary-red)' }}>20% DISCOUNT ON ALL COURSES!</strong> The computer
              lessons are 80% online at your own comfort and at a flexible schedule. With 24/7 instructor assistant.
            </p>
            <div style={{ background: 'var(--secondary-red)', color: 'white', padding: '6px 12px', borderRadius: '8px', fontWeight: 600, fontSize: '0.85rem', display: 'inline-block' }}>
              FREE CERTIFIED FIRST AID & LIFE SKILLS CLASSES/TRAINING
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
