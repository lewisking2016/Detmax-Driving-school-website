'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col about">
          <img src="/logo.jpeg" alt="Detmax Logo" className="footer-logo" />
          <h4>About Detmax</h4>
          <p>Detmax Limited Company is a premier educational institution committed to bridging the digital gap and producing safe, competent motorists. Registered under PIN: P051811093F.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/computer-college">Computer College</Link></li>
            <li><Link href="/driving-school">Driving School</Link></li>
            <li><Link href="/#about">About Us</Link></li>
            <li><Link href="/registration">Enrollment</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <ul className="footer-links">
            <li><Link href="/#contact">Help Center</Link></li>
            <li><a href="/terms-of-service.html">Terms of Service</a></li>
            <li><a href="/privacy-policy.html">Privacy Policy</a></li>
            <li><Link href="/#faq">FAQ</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Connect With Us</h4>
          <ul className="footer-contact-info">
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Main Office, Nairobi, Kenya</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+254 111 379171</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:info@detmaxinstitute.co.ke" style={{ color: 'inherit', textDecoration: 'none' }}>
                info@detmaxinstitute.co.ke
              </a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Detmax Limited Company. All Rights Reserved. Empowering Kenya's Future.</p>
      </div>
    </footer>
  )
}
