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
    { label: 'Gallery', href: '#gallery', id: 'nav-gallery' },
    { label: 'About', href: '#about', id: 'nav-about' },
    { label: 'FAQs', href: '#faq', id: 'nav-faq' },
    { label: 'Contact', href: '#contact', id: 'nav-contact' },
  ]

  const isActive = (href) => {
    if (href === '/' && pathname === '/') return true
    if (href !== '/' && pathname.includes(href.split('/')[1])) return true
    return false
  }

  useEffect(() => {
    const handleMobileMenuClick = () => {
      setMobileMenuOpen(false)
    }

    if (mobileMenuOpen) {
      document.addEventListener('click', handleMobileMenuClick)
      return () => document.removeEventListener('click', handleMobileMenuClick)
    }
  }, [mobileMenuOpen])

  return (
    <>
      <div className="top-ticker">
        <div className="ticker-content">
          <span>🚀 ENROLL NOW FOR ONLINE COMPUTER CLASSES • COMPUTER PACKAGES • ADVANCED TRAINING • CODING • NTSA REGISTERED DRIVING SCHOOL • CALL +254 111 379171 • STUDY ANYWHERE IN KENYA 🇰🇪 • </span>
          <span>🚀 ENROLL NOW FOR ONLINE COMPUTER CLASSES • COMPUTER PACKAGES • ADVANCED TRAINING • CODING • NTSA REGISTERED DRIVING SCHOOL • CALL +254 111 379171 • STUDY ANYWHERE IN KENYA 🇰🇪 • </span>
        </div>
      </div>
      <header className="main-header">
        <nav className="navbar">
          <div className="logo-container">
            <Link href="/">
              <img src="/logo.jpeg" alt="Detmax Logo" className="nav-logo" />
            </Link>
            <span className="brand-name">DETMAX</span>
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
          <Link href="/registration" className="btn btn-primary nav-cta">Enroll Now</Link>
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
      </header>
    </>
  )
}
