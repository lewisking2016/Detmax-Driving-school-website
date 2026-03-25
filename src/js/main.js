import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initNavbarComponent } from './navbar';
import { initFooterComponent } from './footer';
import { initChatbotComponent } from './chatbot';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import '../css/chatbot.css';

gsap.registerPlugin(ScrollTrigger);

// Scene Setup - Only if hero canvas exists
const heroCanvas = document.querySelector('#hero-canvas');
if (heroCanvas) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
        canvas: heroCanvas,
        antialias: true,
        alpha: true
    });

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(20, 20, 20);
scene.add(pointLight);

// 3D Particles Background
const textureLoader = new THREE.TextureLoader();

// Add a 3D Wireframe Globe for "Depth"
const globeGeometry = new THREE.SphereGeometry(25, 32, 32);
const globeMaterial = new THREE.MeshBasicMaterial({
    color: 0x003366,
    wireframe: true,
    transparent: true,
    opacity: 0.15
});
const globe = new THREE.Mesh(globeGeometry, globeMaterial);
scene.add(globe);

// Parallax Effect
window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    gsap.to(camera.position, {
        x: x * 5, // Increased camera movement for more depth feel
        y: -y * 5,
        duration: 2,
        ease: "power2.out"
    });
});

// Background Particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 3500; // Optimized for performance while keeping the 'Elite' feel
const posArray = new Float32Array(particlesCount * 3);
const colorArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 120;
    
    // Add blue and red variation to particles
    const r = Math.random() > 0.5 ? 1 : 0;
    const b = r === 0 ? 1 : 0.5;
    colorArray[i] = r;
    colorArray[i+1] = 0;
    colorArray[i+2] = b;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.04,
    vertexColors: true,
    transparent: true,
    opacity: 0.6
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    particlesMesh.rotation.y += 0.001;
    particlesMesh.rotation.x += 0.0005;
    globe.rotation.y += 0.002;
    globe.rotation.x += 0.001;

    renderer.render(scene, camera);
}

animate();

    // Handle Resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();
}

// GSAP Animations
const initAnimations = () => {
    // Initial Load Animations
    document.querySelectorAll('[data-gsap]').forEach(el => {
        const animation = el.dataset.gsap;
        const delay = el.dataset.gsapDelay || 0;

        if (animation === 'fade-up') {
            gsap.from(el, {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: delay,
                ease: "power3.out"
            });
        }
    });

    // Scroll-Triggered Animations for Sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const elements = section.querySelectorAll('.feature-card, .adv-card, .program-card, .about-text, .driving-info, .school-panel, .welcome-text, .welcome-image');
        
        if (elements.length > 0) {
            gsap.from(elements, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 95%", // SNAPPY: Trigger as soon as edge enters
                    toggleActions: "play none none none",
                    once: true
                },
                y: 30, // Reduced distance for faster look
                opacity: 0,
                stagger: 0.08, // DRIVER: Much faster stagger
                duration: 0.6, // DRIVER: Faster duration
                ease: "expo.out", // SNAPPY: High energy ease
                onComplete: () => {
                    gsap.set(elements, { clearProps: "all" });
                }
            });
        }
    });

    // Staggered Sections
    const staggeredSections = ['.why-grid', '.process-grid', '.p-quick-grid', '.advantage-grid', '.vision-mission-grid', '.obj-grid', '.pricing-grid', '.payment-grid-full', '.testimonial-grid'];
    staggeredSections.forEach(selector => {
        const section = document.querySelector(selector);
        if (section) {
            gsap.from(section.children, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 95%", // SNAPPY: Trigger as soon as edge enters
                    toggleActions: "play none none none",
                    once: true
                },
                y: 40,
                opacity: 0,
                duration: 0.6, // DRIVER: Faster duration
                stagger: 0.08, // DRIVER: Faster stagger
                ease: "expo.out",
                onComplete: () => {
                    gsap.set(section.children, { clearProps: "all" });
                }
            });
        }
    });

    // 3D Tilt Effect - Disabled to avoid confusion during form entry
    /*
    const cards = document.querySelectorAll('.glass:not(.no-tilt), .p-mini-card...
    ...
    */
};

// Navbar Scroll Effect (Fixed Logic)
const initNavbar = () => {
    const navbar = document.querySelector('.navbar');
    const updateNavbar = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            // Keep it scrolled if we are on a subpage
            if (!document.body.classList.contains('home-page' || window.location.pathname !== '/')) {
                 // Check if it's the home page
                 const isHome = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
                 if (!isHome) {
                    navbar.classList.add('scrolled');
                    return;
                 }
            }
            navbar.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', updateNavbar);
    updateNavbar(); // Initial check
};

// Mobile Menu
const initMobileMenu = () => {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });
    }
};

// Slider Logic
const initSlider = () => {
    const sliders = document.querySelectorAll('.slider-container');
    if (sliders.length === 0) return;

    sliders.forEach(slider => {
        const wrapper = slider.querySelector('.slider-wrapper');
        const slides = slider.querySelectorAll('.slide');
        const prevBtn = slider.querySelector('.prev-btn');
        const nextBtn = slider.querySelector('.next-btn');
        const dotsContainer = slider.querySelector('.slider-dots');

        if (!wrapper || slides.length === 0) return;

        let currentIndex = 0;
        let autoPlayInterval;

        // Create dots
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            if (dotsContainer) dotsContainer.appendChild(dot);
        });

        const updateDots = () => {
            if (!dotsContainer) return;
            slider.querySelectorAll('.dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        };

        const goToSlide = (index) => {
            currentIndex = index;
            wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateDots();
            resetAutoPlay();
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % slides.length;
            goToSlide(currentIndex);
        };

        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            goToSlide(currentIndex);
        };

        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);

        const startAutoPlay = () => {
            autoPlayInterval = setInterval(nextSlide, 5000 + Math.random() * 1000); // randomize slightly so they don't sync exactly
        };

        const resetAutoPlay = () => {
            clearInterval(autoPlayInterval);
            startAutoPlay();
        };

        startAutoPlay();
    });
};

// Initializations
document.addEventListener('DOMContentLoaded', () => {
    initNavbarComponent();
    initFooterComponent();
    initChatbotComponent();
    initNavbar();
    initMobileMenu();
    initAnimations();
    initCustomCursor(); // NEW: Elite Cursor
    initSlider(); // Init Slider if present

    // Initialize Icons AFTER components are injected
    const refreshIcons = () => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    };
    refreshIcons();

    // Preloader Dismissal
    const dismissPreloader = () => {
        const preloader = document.querySelector('#preloader');
        if (preloader) {
            preloader.classList.add('fade-out');
            setTimeout(() => { preloader.style.display = 'none'; }, 500); // Faster dismissal (was 800)
        }
    };

    if (document.readyState === 'complete') {
        dismissPreloader();
    } else {
        window.addEventListener('load', dismissPreloader);
    }

    // Back to Top Logic
    const backToTop = document.querySelector('#backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Initialize Phone Input if it exists
    const phoneInput = document.querySelector("#phone");
    if (phoneInput) {
        intlTelInput(phoneInput, {
            initialCountry: "ke", // Kenya as default given the context
            separateDialCode: true,
            utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.1/build/js/utils.js",
        });
    }
});

// Elite Custom Cursor Implementation
const initCustomCursor = () => {
    if (window.matchMedia("(pointer: coarse)").matches) return; // Skip on touch devices

    const dot = document.createElement('div');
    const outline = document.createElement('div');
    dot.className = 'cursor-dot';
    outline.className = 'cursor-outline';
    document.body.appendChild(dot);
    document.body.appendChild(outline);

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const xDotTo = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3" });
    const yDotTo = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3" });
    const xOutTo = gsap.quickTo(outline, "x", { duration: 0.4, ease: "power3" });
    const yOutTo = gsap.quickTo(outline, "y", { duration: 0.4, ease: "power3" });

    window.addEventListener("mousemove", e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        xDotTo(mouse.x);
        yDotTo(mouse.y);
        xOutTo(mouse.x);
        yOutTo(mouse.y);
    });

    // Hover effect on interactive elements
    const updateInteractives = () => {
        const interactives = document.querySelectorAll('a, button, .curriculum-card, .contact-card, .price-feature-box, .iti__country, .p-tilt');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => {
                dot.classList.add('cursor-active');
                outline.classList.add('cursor-active');
            });
            el.addEventListener('mouseleave', () => {
                dot.classList.remove('cursor-active');
                outline.classList.remove('cursor-active');
            });
        });
    };
    updateInteractives();
    
    // Re-run if content changes (like navbar injection)
    setTimeout(updateInteractives, 1000);
};
