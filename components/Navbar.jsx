'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '/', id: 'nav-home' },
    { label: 'Computer College', href: '/computer-college', id: 'nav-college' },
    { label: 'Driving School', href: '/driving-school', id: 'nav-driving' },
    { label: 'Courses', href: '/#courses', id: 'nav-courses' },
    { label: 'About', href: '/#about', id: 'nav-about' },
    { label: 'Enrollment', href: '/registration', id: 'nav-enroll' },
  ]

  const isActive = (href) => {
    if (href === '/' && pathname === '/') return true
    if (href !== '/' && href.startsWith('/') && !href.includes('#') && pathname.startsWith(href)) return true
    return false
  }

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [mobileMenuOpen])

  // Close drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Close on Escape
  useEffect(() => {
    if (!mobileMenuOpen) return
    const onKey = (e) => { if (e.key === 'Escape') setMobileMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileMenuOpen])

  return (
    <header className="main-header">
      <div className="top-ticker">
        <div className="ticker-content">
          <span>ENROLL NOW FOR ONLINE COMPUTER CLASSES • COMPUTER PACKAGES • ADVANCED TRAINING • NTSA REGISTERED DRIVING SCHOOL • CALL +254 111 379171 • STUDY ANYWHERE IN KENYA • </span>
          <span aria-hidden="true">ENROLL NOW FOR ONLINE COMPUTER CLASSES • COMPUTER PACKAGES • ADVANCED TRAINING • NTSA REGISTERED DRIVING SCHOOL • CALL +254 111 379171 • STUDY ANYWHERE IN KENYA • </span>
        </div>
      </div>

      <div className="nav-container">
        <nav className={`navbar ${mobileMenuOpen ? 'menu-open' : ''}`} aria-label="Main navigation">
          <div className="logo-container">
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <img src="/logo.jpeg" alt="Detmax Logo" className="nav-logo" />
              <span className="brand-name">DETMAX</span>
            </Link>
          </div>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  id={link.id}
                  className={isActive(link.href) ? 'active' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/registration" className="btn btn-primary nav-cta">
            Enroll Now
          </Link>

          <button
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-drawer"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>

      {/* Mobile drawer + overlay */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
      <aside
        id="mobile-drawer"
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile menu"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="drawer-header">Menu</div>
        <ul>
          {navLinks.map((link) => (
            <li key={`m-${link.id}`}>
              <Link
                href={link.href}
                id={`${link.id}-mobile`}
                className={isActive(link.href) ? 'active' : ''}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="drawer-cta">
          <Link href="/registration" className="btn btn-primary btn-block btn-lg" onClick={() => setMobileMenuOpen(false)}>
            Enroll Now
          </Link>
        </div>

        <div className="drawer-contact">
          <a href="tel:+254111379171">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +254 111 379171
          </a>
          <a href="https://wa.me/18013195465" target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 3.5A11.94 11.94 0 0 0 12 0C5.4 0 0 5.4 0 12a12 12 0 0 0 1.7 6L0 24l6.2-1.6A12 12 0 0 0 12 24c6.6 0 12-5.4 12-12 0-3.2-1.3-6.1-3.5-8.5zM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 21.8 12 9.8 9.8 0 0 1 12 21.8z" />
            </svg>
            WhatsApp: +1 801 319 5465
          </a>
        </div>
      </aside>
    </header>
  )
}
