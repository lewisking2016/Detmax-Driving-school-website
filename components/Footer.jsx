'use client'

import Link from 'next/link'

export default function Footer() {
  const socials = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/r/1E5A1BHvJN/',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33V22c4.78-.8 8.44-4.94 8.44-9.94z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/reel/DYyv9clTzHT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: 'X / Twitter',
      href: 'https://twitter.com/intent/tweet?text=Detmax%20Driving%20School%20%26%20Computer%20College&url=https%3A%2F%2Fdetmaxinstitute.co.ke',
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25h6.83l4.713 6.231zM17.083 19.77h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    // TikTok, YouTube and LinkedIn were removed here: they pointed at the bare
    // platform homepages (https://www.youtube.com/), which is a dead end for a
    // visitor. Re-add them with the real Detmax profile URLs.
  ]

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col about">
          <img src="/logo.jpeg" alt="Detmax Logo" className="footer-logo" />
          <h4>About Detmax</h4>
          <p>Detmax Limited Company is a premier educational institution committed to bridging the digital gap and producing safe, competent motorists. Registered under PIN: P051811093F.</p>
          <div className="footer-socials" aria-label="Detmax social media">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                title={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/computer-college">Computer College</Link></li>
            <li><Link href="/driving-school">Driving School</Link></li>
            <li><Link href="/#about">About Us</Link></li>
            <li><Link href="/#inquiry">Inquiries</Link></li>
            <li><Link href="/registration">Enrollment</Link></li>
            <li><Link href="/#faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <ul className="footer-links">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service">Terms of Service</Link></li>
            <li><Link href="/#faq">Frequently Asked Questions</Link></li>
            <li><Link href="/#inquiry">Contact Support</Link></li>
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
              <a href="tel:+254111379171" style={{ color: 'inherit', textDecoration: 'none' }}>
                +254 111 379171
              </a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 3.5A11.94 11.94 0 0 0 12 0C5.4 0 0 5.4 0 12a12 12 0 0 0 1.7 6L0 24l6.2-1.6A12 12 0 0 0 12 24c6.6 0 12-5.4 12-12 0-3.2-1.3-6.1-3.5-8.5zM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 21.8 12 9.8 9.8 0 0 1 12 21.8z" />
              </svg>
              <a href="https://wa.me/18013195465" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                WhatsApp: +1 801 319 5465
              </a>
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
        <p style={{ marginTop: '8px', fontSize: '0.8rem', opacity: 0.7 }}>
          <Link href="/privacy-policy" style={{ color: 'inherit', marginRight: '12px' }}>Privacy Policy</Link>
          <Link href="/terms-of-service" style={{ color: 'inherit', marginRight: '12px' }}>Terms of Service</Link>
          <Link href="/#faq" style={{ color: 'inherit' }}>FAQ</Link>
        </p>
      </div>
    </footer>
  )
}
