/**
 * Decorative WebGL hero scene (wireframe globe + particle field).
 *
 * Kept out of ScriptInitializer so that `import('@/components/hero-scene')`
 * puts three.js in its own lazy chunk. The library is ~508 kB and only powers
 * a decorative animation, so shipping it in the initial bundle for every route
 * was hurting first paint for no functional gain.
 *
 * `initHeroScene` returns either a cleanup function or null, and never throws:
 * WebGL can be unavailable (software fallback disabled, GPU blocked by the
 * browser, or the context lost after a previous mount) and the hero has a CSS
 * gradient backdrop, so failing soft is always the right call.
 */
import * as THREE from 'three'
import gsap from 'gsap'

export function initHeroScene(heroCanvas) {
  if (!heroCanvas) return null

  // If a renderer was already attached, dispose it first so repeated mounts
  // don't leave competing WebGL contexts behind.
  if (heroCanvas.__threeRenderer) {
    try {
      heroCanvas.__threeRenderer.dispose()
    } catch (e) { /* noop */ }
    heroCanvas.__threeRenderer = null
  }

  try {
    // A previous failed attempt may have hidden the canvas; this one owns it.
    heroCanvas.style.display = ''

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      heroCanvas.clientWidth / (heroCanvas.clientHeight || 1),
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({
      canvas: heroCanvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })

    heroCanvas.__threeRenderer = renderer
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Size the drawing buffer to the hero element, not the viewport, and keep
    // `updateStyle` false so three.js does not write inline pixel sizes that
    // would override the CSS (100% x 100% of the hero).
    const stage = heroCanvas.parentElement
    const sizeToStage = () => {
      const w = stage?.clientWidth || window.innerWidth
      const h = stage?.clientHeight || window.innerHeight
      if (!w || !h) return
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h, false)
    }
    sizeToStage()
    camera.position.setZ(30)

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.5))
    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(20, 20, 20)
    scene.add(pointLight)

    // Wireframe globe
    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(25, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0x003366,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
      })
    )
    scene.add(globe)

    // Inner solid globe for depth
    const innerGlobe = new THREE.Mesh(
      new THREE.SphereGeometry(24.5, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0x001f3f, transparent: true, opacity: 0.35 })
    )
    scene.add(innerGlobe)

    // Glow ring around the globe
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(26, 28, 64),
      new THREE.MeshBasicMaterial({
        color: 0xdc2626,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.18,
      })
    )
    ring.rotation.x = Math.PI / 2
    scene.add(ring)

    // Pointer parallax
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

    // Particle field
    const particlesCount = 1400
    const posArray = new Float32Array(particlesCount * 3)
    const colorArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 120
      posArray[i + 1] = (Math.random() - 0.5) * 120
      posArray[i + 2] = (Math.random() - 0.5) * 120
      const r = Math.random() > 0.5 ? 1 : 0
      colorArray[i] = r
      colorArray[i + 1] = 0
      colorArray[i + 2] = r === 0 ? 1 : 0.5
    }

    const particlesGeometry = new THREE.BufferGeometry()
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3))

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.65,
      })
    )
    scene.add(particlesMesh)

    // Animation loop - single source of truth, killable.
    let rafId = 0
    let cancelled = false
    const animate = () => {
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

    const handleResize = () => sizeToStage()
    window.addEventListener('resize', handleResize)

    let resizeObserver = null
    if (typeof ResizeObserver !== 'undefined' && stage) {
      resizeObserver = new ResizeObserver(handleResize)
      resizeObserver.observe(stage)
    }

    // Pause while the tab is hidden.
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId)
      } else if (!cancelled) {
        animate()
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    const dispose = () => {
      cancelled = true
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', onMouseMove)
      heroCanvas.removeEventListener('webglcontextlost', onContextLost)
      document.removeEventListener('visibilitychange', onVisibility)
      if (resizeObserver) resizeObserver.disconnect()

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
        // dispose() releases three's own objects but not the GPU context.
        // Browsers cap live WebGL contexts (Chrome at ~16) and silently kill
        // the oldest once the cap is hit, which is the other way the hero went
        // blank after moving around the site. Hand the context back now.
        renderer.forceContextLoss()
      } catch (e) { /* noop */ }

      if (heroCanvas.__threeRenderer === renderer) {
        heroCanvas.__threeRenderer = null
      }
    }

    // If the context is still taken away for any reason, rebuild the scene
    // instead of leaving a permanently blank hero.
    const onContextLost = (event) => {
      event.preventDefault()
      dispose()
      setTimeout(() => {
        // A detached canvas means the route changed; the pathname-keyed effect
        // in ScriptInitializer owns re-initialisation in that case.
        if (heroCanvas.isConnected) initHeroScene(heroCanvas)
      }, 0)
    }
    heroCanvas.addEventListener('webglcontextlost', onContextLost)

    return dispose
  } catch (error) {
    console.warn('[Detmax] Hero 3D scene unavailable - using CSS fallback.', error)
    heroCanvas.style.display = 'none'
    return null
  }
}
