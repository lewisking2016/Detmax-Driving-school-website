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
            <li><span className="icon-sm">📍</span> Main Office, Nairobi, Kenya</li>
            <li><span className="icon-sm">📞</span> +254 111 379171</li>
            <li>
              <span className="icon-sm">✉️</span> 
              <a href="mailto:info@detmaxinstitute.co.ke" style={{ color: 'inherit', textDecoration: 'none' }}>
                info@detmaxinstitute.co.ke
              </a>
            </li>
            <li><span className="icon-sm">🕐</span> Mon - Sat: 8:00 AM - 6:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Detmax Limited Company. All Rights Reserved. Empowering Kenya's Future.</p>
      </div>
    </footer>
  )
}
