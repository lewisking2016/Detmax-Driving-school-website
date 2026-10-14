'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Module scope on purpose: survives StrictMode's double effect invocation so
// the DOM bootstrapping runs exactly once per page load.
let didBoot = false

export default function ScriptInitializer() {
  // This component lives in the ROOT layout, which Next keeps mounted across
  // client-side navigation. The hero canvas, however, only exists on routes
  // that render <HeroSection>, and React destroys and recreates that element
  // on every visit. Keying the scene effect on the pathname is what makes the
  // globe reappear after you navigate away and come back: without it the init
  // ran once per hard page load, so returning to the homepage mounted a fresh
  // <canvas> that nothing was rendering into - the globe looked lost.
  const pathname = usePathname()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Hero 3D scene - loaded lazily.
    // three.js is ~508 kB and only drives a decorative animation, so a static
    // import here put it in the initial bundle of every route. The dynamic
    // import below keeps it in its own chunk, and the hero still has a CSS
    // gradient backdrop when WebGL is unavailable.
    const heroCanvas = document.querySelector('#hero-canvas')
    let disposeScene = null
    let unmounted = false

    if (heroCanvas) {
      import('@/components/hero-scene')
        .then(({ initHeroScene }) => {
          if (unmounted) return
          disposeScene = initHeroScene(heroCanvas)
        })
        .catch((error) => {
          console.warn('[Detmax] Hero 3D scene unavailable - using CSS fallback.', error)
          heroCanvas.style.display = 'none'
        })
    }

    return () => {
      unmounted = true
      if (typeof disposeScene === 'function') disposeScene()
    }
  }, [pathname])

  useEffect(() => {
    // GSAP Animations
    const initAnimations = () => {
      document.querySelectorAll('[data-gsap]').forEach(el => {
        const animation = el.dataset.gsap
        const delay = el.dataset.gsapDelay || 0

        if (animation === 'fade-up') {
          gsap.from(el, {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: delay,
            ease: "power3.out"
          })
        }
      })

      // Scroll-Triggered Animations
      const sections = document.querySelectorAll('.section')
      sections.forEach(section => {
        const elements = section.querySelectorAll('.feature-card, .adv-card, .program-card, .about-text, .driving-info, .school-panel, .welcome-text, .welcome-image, .faq-item, .inquiry-card')

        if (elements.length > 0) {
          gsap.from(elements, {
            scrollTrigger: {
              trigger: section,
              start: "top 95%",
              toggleActions: "play none none none",
              once: true
            },
            y: 30,
            opacity: 0,
            stagger: 0.08,
            duration: 0.6,
            ease: "expo.out",
            onComplete: () => {
              gsap.set(elements, { clearProps: "all" })
            }
          })
        }
      })

      // Staggered Sections
      const staggeredSections = ['.why-grid', '.process-grid', '.p-quick-grid', '.advantage-grid', '.vision-mission-grid', '.obj-grid', '.pricing-grid', '.payment-grid-full', '.testimonial-grid', '.faq-list', '.social-grid']
      staggeredSections.forEach(selector => {
        const section = document.querySelector(selector)
        if (section) {
          gsap.from(section.children, {
            scrollTrigger: {
              trigger: section,
              start: "top 95%",
              toggleActions: "play none none none",
              once: true
            },
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "expo.out",
            onComplete: () => {
              gsap.set(section.children, { clearProps: "all" })
            }
          })
        }
      })
    }

    // Navbar Scroll Effect
    const initNavbar = () => {
      const navbar = document.querySelector('.navbar')
      if (!navbar) return

      const updateNavbar = () => {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled')
        } else {
          const isHome = window.location.pathname === '/' || window.location.pathname.endsWith('index.html')
          if (!isHome) {
            navbar.classList.add('scrolled')
            return
          }
          navbar.classList.remove('scrolled')
        }
      }

      window.addEventListener('scroll', updateNavbar)
      updateNavbar()
    }

    // Mobile Menu
    const initMobileMenu = () => {
      const menuToggle = document.querySelector('.mobile-menu-toggle')
      const navLinks = document.querySelector('.nav-links')
      if (menuToggle) {
        menuToggle.addEventListener('click', (e) => {
          e.stopPropagation()
          navLinks.classList.toggle('active')
          menuToggle.classList.toggle('open')
        })
      }
    }

    // FAQ: the accordion is a React component (FAQSection) that owns its own
    // open/closed state. Binding a second click handler here double-toggled
    // every question, so it has been removed.

    // Inquiry form -> /api/send-email
    const initInquiryForm = () => {
      const form = document.getElementById('inquiryForm')
      if (!form || form.__inquiryBound) return
      form.__inquiryBound = true

      const statusEl = document.getElementById('inquiryStatus')
      const submitBtn = form.querySelector('button[type="submit"]')

      form.addEventListener('submit', async (e) => {
        e.preventDefault()
        const data = {
          type: 'inquiry',
          name: form.name?.value?.trim(),
          email: form.email?.value?.trim(),
          phone: form.phone?.value?.trim(),
          program: form.program?.value?.trim(),
          message: form.message?.value?.trim(),
        }

        if (!data.name || !data.phone) {
          if (statusEl) {
            statusEl.textContent = 'Please provide your name and phone number.'
            statusEl.style.color = '#dc2626'
          }
          return
        }

        if (submitBtn) {
          submitBtn.disabled = true
          submitBtn.dataset.original = submitBtn.textContent
          submitBtn.textContent = 'Sending…'
        }
        if (statusEl) {
          statusEl.textContent = ''
          statusEl.style.color = ''
        }

        try {
          const res = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          })
          const json = await res.json().catch(() => ({}))
          if (!res.ok) throw new Error(json.error || 'Failed to send inquiry.')

          if (statusEl) {
            statusEl.textContent = '✓ Inquiry received. We will reply within 24 hours.'
            statusEl.style.color = '#16a34a'
          }
          form.reset()
        } catch (err) {
          if (statusEl) {
            statusEl.textContent = err.message || 'Something went wrong. Please try again.'
            statusEl.style.color = '#dc2626'
          }
        } finally {
          if (submitBtn) {
            submitBtn.disabled = false
            submitBtn.textContent = submitBtn.dataset.original || 'Send Inquiry'
          }
        }
      })
    }

    // Slider Logic
    const initSlider = () => {
      const sliders = document.querySelectorAll('.slider-container')
      if (sliders.length === 0) return

      sliders.forEach(slider => {
        const wrapper = slider.querySelector('.slider-wrapper')
        const slides = slider.querySelectorAll('.slide')
        const prevBtn = slider.querySelector('.prev-btn')
        const nextBtn = slider.querySelector('.next-btn')
        const dotsContainer = slider.querySelector('.slider-dots')

        if (!wrapper || slides.length === 0) return

        let currentIndex = 0
        let autoPlayInterval

        slides.forEach((_, index) => {
          const dot = document.createElement('div')
          dot.classList.add('dot')
          if (index === 0) dot.classList.add('active')
          dot.addEventListener('click', () => goToSlide(index))
          if (dotsContainer) dotsContainer.appendChild(dot)
        })

        const updateDots = () => {
          if (!dotsContainer) return
          slider.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex)
          })
        }

        const goToSlide = (index) => {
          currentIndex = index
          wrapper.style.transform = `translateX(-${currentIndex * 100}%)`
          updateDots()
          resetAutoPlay()
        }

        const nextSlide = () => {
          currentIndex = (currentIndex + 1) % slides.length
          goToSlide(currentIndex)
        }

        const prevSlide = () => {
          currentIndex = (currentIndex - 1 + slides.length) % slides.length
          goToSlide(currentIndex)
        }

        if (nextBtn) nextBtn.addEventListener('click', nextSlide)
        if (prevBtn) prevBtn.addEventListener('click', prevSlide)

        const startAutoPlay = () => {
          autoPlayInterval = setInterval(nextSlide, 5000 + Math.random() * 1000)
        }

        const resetAutoPlay = () => {
          clearInterval(autoPlayInterval)
          startAutoPlay()
        }

        startAutoPlay()
      })
    }

    // Back to Top Logic
    const initBackToTop = () => {
      const backToTop = document.querySelector('#backToTop')
      if (backToTop) {
        window.addEventListener('scroll', () => {
          if (window.scrollY > 400) {
            backToTop.classList.add('active')
          } else {
            backToTop.classList.remove('active')
          }
        })

        backToTop.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        })
      }
    }

    // Elite custom cursor - the dot + trailing ring that followed the pointer
    // before the Next.js migration. The styles survived in style.css, the JS
    // did not. `has-custom-cursor` is what hides the native pointer, and it is
    // only set once these elements exist, so a JS failure can never leave a
    // visitor with no cursor at all.
    const initCustomCursor = () => {
      if (typeof window === 'undefined') return
      if (window.matchMedia('(pointer: coarse)').matches) return // touch devices keep theirs
      if (document.querySelector('.cursor-dot')) return

      const dot = document.createElement('div')
      const ring = document.createElement('div')
      dot.className = 'cursor-dot'
      ring.className = 'cursor-outline'
      dot.setAttribute('aria-hidden', 'true')
      ring.setAttribute('aria-hidden', 'true')
      document.body.append(dot, ring)
      document.documentElement.classList.add('has-custom-cursor')

      // quickTo keeps the follow smooth without spawning a tween per mousemove.
      const dotX = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power3' })
      const dotY = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power3' })
      const ringX = gsap.quickTo(ring, 'x', { duration: 0.42, ease: 'power3' })
      const ringY = gsap.quickTo(ring, 'y', { duration: 0.42, ease: 'power3' })

      // Visibility is written with immediate sets rather than tweens so the
      // cursor can never be left stranded mid-transition by throttled frames.
      let visible = false
      let hovered = false
      let pressed = false
      const paint = () => {
        gsap.set(dot, { opacity: visible ? 1 : 0 })
        gsap.set(ring, { opacity: visible ? (pressed ? 0.85 : hovered ? 1 : 0.5) : 0 })
        gsap.to(dot, { scale: hovered ? 1.6 : 1, duration: 0.2, overwrite: 'auto' })
        gsap.to(ring, { scale: pressed ? 0.8 : hovered ? 1.55 : 1, duration: 0.25, overwrite: 'auto' })
      }
      paint()

      const onMove = (e) => {
        if (!visible) {
          visible = true
          paint()
        }
        dotX(e.clientX)
        dotY(e.clientY)
        ringX(e.clientX)
        ringY(e.clientY)
      }

      const onOver = (e) => {
        const target = e.target instanceof Element ? e.target : null
        const interactive = Boolean(
          target?.closest('a, button, input, select, textarea, label, [role="button"]')
        )
        if (interactive === hovered) return
        hovered = interactive
        dot.classList.toggle('cursor-active', hovered)
        ring.classList.toggle('cursor-active', hovered)
        paint()
      }

      const onLeave = () => {
        visible = false
        paint()
      }

      const onDown = () => {
        pressed = true
        paint()
      }

      const onUp = () => {
        pressed = false
        paint()
      }

      window.addEventListener('mousemove', onMove, { passive: true })
      window.addEventListener('mouseover', onOver, { passive: true })
      window.addEventListener('mousedown', onDown, { passive: true })
      window.addEventListener('mouseup', onUp, { passive: true })
      document.addEventListener('mouseleave', onLeave)
      window.addEventListener('blur', onLeave)
    }

    // Chatbot (FAQ line chat tool)
    const initChatbot = async () => {
      if (document.getElementById('chatbotToggle')) return
      try {
        const mod = await import('@/src/js/chatbot.js')
        // Re-check after the await: two concurrent calls could both pass the
        // check above before either finished importing.
        if (document.getElementById('chatbotToggle')) return
        if (typeof mod.initChatbotComponent === 'function') {
          mod.initChatbotComponent()
        }
      } catch (e) {
        console.warn('Chatbot module not available:', e?.message)
      }
    }

    // Initialize all - guarded by a module-scope flag because React StrictMode
    // runs this effect twice in development, which previously injected a
    // second navbar/handler set and a duplicate chatbot widget.
    const boot = () => {
      if (didBoot) return
      didBoot = true

      initAnimations()
      initNavbar()
      initMobileMenu()
      initCustomCursor()
      initSlider()
      initBackToTop()
      initInquiryForm()
      initChatbot()
    }

    const bootTimer = setTimeout(boot, 100)

    return () => {
      clearTimeout(bootTimer)
    }
  }, [])

  return null
}
