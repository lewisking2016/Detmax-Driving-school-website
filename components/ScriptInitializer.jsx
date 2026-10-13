'use client'

import { useEffect } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ScriptInitializer() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Scene Setup - Only if hero canvas exists
    const heroCanvas = document.querySelector('#hero-canvas')
    if (heroCanvas) {
      // Guard: if a renderer was already attached, kill it first to avoid
      // the "lost on route change" bug (multiple WebGL contexts fighting).
      if (heroCanvas.__threeRenderer) {
        try {
          heroCanvas.__threeRenderer.dispose()
        } catch (e) { /* noop */ }
        heroCanvas.__threeRenderer = null
      }

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({
        canvas: heroCanvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      })

      // Mark the canvas so we can clean it up next time
      heroCanvas.__threeRenderer = renderer

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.position.setZ(30)

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
      scene.add(ambientLight)

      const pointLight = new THREE.PointLight(0xffffff, 1)
      pointLight.position.set(20, 20, 20)
      scene.add(pointLight)

      // Add a 3D Wireframe Globe
      const globeGeometry = new THREE.SphereGeometry(25, 32, 32)
      const globeMaterial = new THREE.MeshBasicMaterial({
        color: 0x003366,
        wireframe: true,
        transparent: true,
        opacity: 0.18
      })
      const globe = new THREE.Mesh(globeGeometry, globeMaterial)
      scene.add(globe)

      // Inner solid globe for depth
      const innerGlobe = new THREE.Mesh(
        new THREE.SphereGeometry(24.5, 32, 32),
        new THREE.MeshBasicMaterial({ color: 0x001f3f, transparent: true, opacity: 0.35 })
      )
      scene.add(innerGlobe)

      // Glow ring around globe
      const ringGeometry = new THREE.RingGeometry(26, 28, 64)
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0xff3333,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.18,
      })
      const ring = new THREE.Mesh(ringGeometry, ringMaterial)
      ring.rotation.x = Math.PI / 2
      scene.add(ring)

      // Parallax Effect — keep the "active mouse" feel
      const onMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2
        const y = (e.clientY / window.innerHeight - 0.5) * 2

        gsap.to(camera.position, {
          x: x * 5,
          y: -y * 5,
          duration: 1.6,
          ease: 'power2.out',
          overwrite: 'auto',
        })

        gsap.to(globe.rotation, {
          x: y * 0.3,
          y: globe.rotation.y + x * 0.0005,
          duration: 1.6,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      }
      window.addEventListener('mousemove', onMouseMove)

      // Background Particles
      const particlesGeometry = new THREE.BufferGeometry()
      const particlesCount = 3500
      const posArray = new Float32Array(particlesCount * 3)
      const colorArray = new Float32Array(particlesCount * 3)

      for (let i = 0; i < particlesCount * 3; i += 3) {
        posArray[i] = (Math.random() - 0.5) * 120
        posArray[i + 1] = (Math.random() - 0.5) * 120
        posArray[i + 2] = (Math.random() - 0.5) * 120
        const r = Math.random() > 0.5 ? 1 : 0
        const b = r === 0 ? 1 : 0.5
        colorArray[i] = r
        colorArray[i + 1] = 0
        colorArray[i + 2] = b
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
      particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3))

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.65
      })

      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
      scene.add(particlesMesh)

      // Animation Loop — single source of truth, killable.
      let rafId = 0
      let cancelled = false
      function animate() {
        if (cancelled) return
        rafId = requestAnimationFrame(animate)
        particlesMesh.rotation.y += 0.001
        particlesMesh.rotation.x += 0.0005
        globe.rotation.y += 0.0025
        innerGlobe.rotation.y -= 0.0015
        ring.rotation.z += 0.001
        renderer.render(scene, camera)
      }
      animate()

      // Handle Resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
      window.addEventListener('resize', handleResize)

      // Visibility — pause when tab hidden, resume when visible.
      const onVisibility = () => {
        if (document.hidden) {
          cancelAnimationFrame(rafId)
        } else if (!cancelled) {
          animate()
        }
      }
      document.addEventListener('visibilitychange', onVisibility)

      // CLEANUP — properly dispose of Three.js resources
      return () => {
        cancelled = true
        cancelAnimationFrame(rafId)
        window.removeEventListener('resize', handleResize)
        window.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('visibilitychange', onVisibility)

        try {
          scene.traverse((obj) => {
            if (obj.geometry) obj.geometry.dispose()
            if (obj.material) {
              if (Array.isArray(obj.material)) {
                obj.material.forEach((m) => m.dispose())
              } else {
                obj.material.dispose()
              }
            }
          })
          renderer.dispose()
          renderer.forceContextLoss?.()
        } catch (e) { /* noop */ }

        if (heroCanvas.__threeRenderer === renderer) {
          heroCanvas.__threeRenderer = null
        }
      }
    }
  }, [])

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

    // FAQ Accordion
    const initFaq = () => {
      document.querySelectorAll('.faq-question').forEach((btn) => {
        if (btn.__faqBound) return
        btn.__faqBound = true
        btn.addEventListener('click', () => {
          const item = btn.closest('.faq-item')
          if (!item) return
          const isOpen = item.classList.contains('open')
          document.querySelectorAll('.faq-item.open').forEach((other) => {
            if (other !== item) other.classList.remove('open')
          })
          item.classList.toggle('open', !isOpen)
        })
      })
    }

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

    // Chatbot (FAQ line chat tool)
    const initChatbot = async () => {
      if (document.getElementById('chatbotToggle')) return
      try {
        const mod = await import('@/src/js/chatbot.js')
        if (typeof mod.initChatbotComponent === 'function') {
          mod.initChatbotComponent()
        }
      } catch (e) {
        console.warn('Chatbot module not available:', e?.message)
      }
    }

    // Initialize all
    const boot = () => {
      initAnimations()
      initNavbar()
      initMobileMenu()
      initSlider()
      initBackToTop()
      initFaq()
      initInquiryForm()
      initChatbot()

      // Refresh Lucide icons
      if (typeof window.lucide !== 'undefined') {
        window.lucide.createIcons()
      }
    }

    setTimeout(boot, 100)

    return () => {
      // No global listeners to remove here; per-element bindings are
      // guarded with `.__faqBound` / `.__inquiryBound` flags so re-init
      // is safe across client-side route changes.
    }
  }, [])

  return null
}
