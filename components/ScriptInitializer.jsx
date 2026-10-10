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
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({
        canvas: heroCanvas,
        antialias: true,
        alpha: true
      })

      renderer.setPixelRatio(window.devicePixelRatio)
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
        opacity: 0.15
      })
      const globe = new THREE.Mesh(globeGeometry, globeMaterial)
      scene.add(globe)

      // Parallax Effect
      window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2
        const y = (e.clientY / window.innerHeight - 0.5) * 2

        gsap.to(camera.position, {
          x: x * 5,
          y: -y * 5,
          duration: 2,
          ease: "power2.out"
        })
      })

      // Background Particles
      const particlesGeometry = new THREE.BufferGeometry()
      const particlesCount = 3500
      const posArray = new Float32Array(particlesCount * 3)
      const colorArray = new Float32Array(particlesCount * 3)

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 120
        const r = Math.random() > 0.5 ? 1 : 0
        const b = r === 0 ? 1 : 0.5
        colorArray[i] = r
        colorArray[i + 1] = 0
        colorArray[i + 2] = b
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
      particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3))

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.04,
        vertexColors: true,
        transparent: true,
        opacity: 0.6
      })

      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
      scene.add(particlesMesh)

      // Animation Loop
      function animate() {
        requestAnimationFrame(animate)
        particlesMesh.rotation.y += 0.001
        particlesMesh.rotation.x += 0.0005
        globe.rotation.y += 0.002
        globe.rotation.x += 0.001
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

      return () => {
        window.removeEventListener('resize', handleResize)
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
        const elements = section.querySelectorAll('.feature-card, .adv-card, .program-card, .about-text, .driving-info, .school-panel, .welcome-text, .welcome-image')
        
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
      const staggeredSections = ['.why-grid', '.process-grid', '.p-quick-grid', '.advantage-grid', '.vision-mission-grid', '.obj-grid', '.pricing-grid', '.payment-grid-full', '.testimonial-grid']
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

    // Initialize all
    setTimeout(() => {
      initAnimations()
      initNavbar()
      initMobileMenu()
      initSlider()
      initBackToTop()

      // Refresh Lucide icons
      if (typeof window.lucide !== 'undefined') {
        window.lucide.createIcons()
      }
    }, 100)

  }, [])

  return null
}
