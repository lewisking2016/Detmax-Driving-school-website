'use client'

import Image from 'next/image'

export default function WelcomeSection() {
  return (
    <section className="welcome section bg-white">
      <div className="container">
        <div className="grid-2">
          <div className="welcome-text">
            <h2 className="section-title">Message from the Director</h2>
            <p className="lead">"Our commitment is to empower the next generation with skills that matter."</p>
            <p>
              At Detmax, we believe that education should be accessible, practical, and affordable. Since our founding in 2022, we have strived to bridge the gap between traditional learning and the digital era. Whether you're behind the wheel or behind a keyboard, our goal remains the same: Excellence in every output.
            </p>
            <p>
              We are proud to collaborate with the Peer Mentors Association of Kenya (PMAK) to ensure our training reaches the grassroots level, empowering youth and professionals across all 47 counties.
            </p>
            <div className="director-signature">
              <strong>Director, Detmax Ltd</strong>
              <span>PIN: P051811093F</span>
            </div>
          </div>
          <div className="welcome-image">
            <img src="/im2.jpeg" alt="Detmax Leadership" className="img-responsive rounded shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
