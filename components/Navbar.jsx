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
    { label: 'About', href: '/#about', id: 'nav-about' },
    { label: 'Courses', href: '/#courses', id: 'nav-courses' },
    { label: 'Enrollment', href: '/registration', id: 'nav-enroll' },
  ]

  const isActive = (href) => {
    if (href === '/' && pathname === '/') return true
    if (href !== '/' && pathname.startsWith(href)) return true
    return false
  }

  useEffect(() => {
    const handleMobileMenuClick = (e) => {
      if (!e.target.closest('.navbar')) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('click', handleMobileMenuClick)
      return () => document.removeEventListener('click', handleMobileMenuClick)
    }
  }, [mobileMenuOpen])

  return (
    <header className="main-header">
      <div className="top-ticker">
        <div className="ticker-content">
          <span>ENROLL NOW FOR ONLINE COMPUTER CLASSES • COMPUTER PACKAGES • ADVANCED TRAINING • NTSA REGISTERED DRIVING SCHOOL • CALL +254 111 379171 • STUDY ANYWHERE IN KENYA • </span>
          <span>ENROLL NOW FOR ONLINE COMPUTER CLASSES • COMPUTER PACKAGES • ADVANCED TRAINING • NTSA REGISTERED DRIVING SCHOOL • CALL +254 111 379171 • STUDY ANYWHERE IN KENYA • </span>
        </div>
      </div>

      <div className="nav-container">
        <nav className={`navbar ${mobileMenuOpen ? 'menu-open' : ''}`}>
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
                  onClick={() => setMobileMenuOpen(false)}
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
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  )
}
