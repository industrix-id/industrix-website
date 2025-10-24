'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useTheme } from '../app/theme/ThemeProvider'

export default function EarthAnimation() {
  const { isDarkMode } = useTheme()
  const [animationProgress, setAnimationProgress] = useState(isDarkMode ? 1 : 0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [smoothScrollProgress, setSmoothScrollProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)

  // Animate sun/moon transformation when theme changes
  useEffect(() => {
    const duration = 1200 // 1.2 seconds for the transition
    const targetProgress = isDarkMode ? 1 : 0
    const startProgress = animationProgress
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease in-out function for smooth animation
      const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

      const easedProgress = easeInOutCubic(progress)
      const newProgress = startProgress + (targetProgress - startProgress) * easedProgress

      setAnimationProgress(newProgress)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode])

  // Track scroll position for orbit and parallax effects
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how much of the component is visible
      const componentCenter = rect.top + rect.height / 2
      const viewportCenter = windowHeight / 2
      const distanceFromCenter = componentCenter - viewportCenter

      // Map to 0-1 range with extended range for smoother transitions
      // Give it more breathing room (-0.2 to 1.2) then clamp
      let progress = 0.5 - (distanceFromCenter / (windowHeight * 1.5))
      progress = Math.max(0, Math.min(1, progress))

      // Apply easing for even smoother feel
      const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

      const easedProgress = easeInOutCubic(progress)

      setScrollProgress(easedProgress)
    }

    handleScroll() // Initial calculation
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  // Smooth interpolation for buttery animations
  useEffect(() => {
    const smoothingFactor = 0.08 // Lower = smoother but slower response

    const animate = () => {
      setSmoothScrollProgress((prev) => {
        const diff = scrollProgress - prev
        // Smoothly interpolate towards target
        return prev + diff * smoothingFactor
      })

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [scrollProgress])

  // Calculate celestial body position based on animation progress AND scroll
  const earthCenterX = 250
  const earthCenterY = 250

  // 3D diagonal orbit - combination of Y-axis and Z-axis rotation
  // Creates a tilted orbital plane for more dynamic movement
  const scrollOrbitAngle = smoothScrollProgress * 270 // 3/4 rotation as you scroll down
  const angleRad = (scrollOrbitAngle * Math.PI) / 180

  // 3D position calculation on a tilted orbital plane
  const orbitRadius = 160
  const tiltAngle = 25 // Degrees of tilt from horizontal
  const tiltRad = (tiltAngle * Math.PI) / 180

  // Elliptical orbit with tilt (more visually interesting)
  const celestialX = earthCenterX + orbitRadius * Math.sin(angleRad) // Left-right movement
  const celestialZ = orbitRadius * Math.cos(angleRad) // Depth (+ = towards viewer, - = away)

  // Add vertical movement based on the orbit angle for diagonal effect
  // This creates a tilted orbital plane
  const celestialY = earthCenterY - (orbitRadius * 0.4) * Math.sin(angleRad) * Math.sin(tiltRad)

  // Perspective scaling: objects farther away (negative Z) appear smaller
  // More subtle scaling for smoother effect
  const perspectiveScale = 1 + (celestialZ / 600) // Scale between ~0.73 and 1.27

  // Check if celestial body is behind Earth (for rendering order)
  const isBehindEarth = celestialZ < 0

  // Color transition from sun (yellow) to moon (gray)
  const sunColor = { r: 251, g: 191, b: 36 } // #fbbf24
  const moonColor = { r: 226, g: 232, b: 240 } // #e2e8f0

  const currentR = Math.round(sunColor.r + (moonColor.r - sunColor.r) * animationProgress)
  const currentG = Math.round(sunColor.g + (moonColor.g - sunColor.g) * animationProgress)
  const currentB = Math.round(sunColor.b + (moonColor.b - sunColor.b) * animationProgress)
  const currentColor = `rgb(${currentR}, ${currentG}, ${currentB})`

  // Size changes: sun is bigger, moon is smaller
  const sunSize = { outer: 80, middle: 60, inner: 45 }
  const moonSize = { outer: 50, middle: 40, inner: 35 }
  const baseSize = {
    outer: sunSize.outer - (sunSize.outer - moonSize.outer) * animationProgress,
    middle: sunSize.middle - (sunSize.middle - moonSize.middle) * animationProgress,
    inner: sunSize.inner - (sunSize.inner - moonSize.inner) * animationProgress
  }

  // Apply perspective scaling to size
  const currentSize = {
    outer: baseSize.outer * perspectiveScale,
    middle: baseSize.middle * perspectiveScale,
    inner: baseSize.inner * perspectiveScale
  }

  // Opacity based on depth (slightly fade when far away)
  // Adjusted for new perspective scale range
  const depthOpacity = 0.75 + (perspectiveScale - 0.73) / (1.27 - 0.73) * 0.25

  // Parallax offsets (different layers move at different speeds)
  // Reduced intensity and using smoothScrollProgress for silky movement
  const parallaxCelestial = (smoothScrollProgress - 0.5) * -20 // Slowest (background)
  const parallaxEarth = (smoothScrollProgress - 0.5) * -35 // Medium speed
  const parallaxFlag = (smoothScrollProgress - 0.5) * -50 // Fastest (foreground)

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateZ(0);
          }
          50% {
            transform: translateY(-12px) translateZ(0);
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        /* Smooth all transformations */
        svg * {
          transition: opacity 0.3s ease-out;
        }
      `}</style>

      <div
        ref={containerRef}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '500px',
          height: 'auto',
          aspectRatio: '1/1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          willChange: 'transform',
          margin: '0 auto'
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 500 500" style={{
          filter: 'drop-shadow(0 20px 60px rgba(16, 121, 255, 0.3))',
          maxWidth: '100%',
          height: 'auto'
        }}>
          <defs>
            <radialGradient id="celestialGradient">
              <stop offset="0%" stopColor={currentColor} stopOpacity="1"/>
              <stop offset="70%" stopColor={currentColor} stopOpacity="0.8"/>
              <stop offset="100%" stopColor={currentColor} stopOpacity="0.3"/>
            </radialGradient>
            <radialGradient id="earthGradient">
              <stop offset="0%" stopColor={isDarkMode ? '#0ea5e9' : '#60a5fa'} stopOpacity="0.8"/>
              <stop offset="50%" stopColor={isDarkMode ? '#0284c7' : '#3b82f6'} stopOpacity="0.6"/>
              <stop offset="100%" stopColor={isDarkMode ? '#0369a1' : '#2563eb'} stopOpacity="0.4"/>
            </radialGradient>
          </defs>

          {/* Celestial body BEHIND earth - only render when behind */}
          {isBehindEarth && (
            <g transform={`translate(0, ${parallaxCelestial})`} opacity={depthOpacity}>
              <circle cx={celestialX} cy={celestialY} r={currentSize.outer} fill="url(#celestialGradient)" opacity="0.4" style={{ animation: 'pulse 5s ease-in-out infinite' }}/>
              <circle cx={celestialX} cy={celestialY} r={currentSize.middle} fill="url(#celestialGradient)" opacity="0.6"/>
              <circle cx={celestialX} cy={celestialY} r={currentSize.inner} fill={currentColor} opacity="0.9"/>

              {/* Moon craters (visible when animation progress > 0.6) */}
              {animationProgress > 0.6 && (
                <>
                  <circle cx={celestialX - 8 * perspectiveScale} cy={celestialY - 5 * perspectiveScale} r={6 * perspectiveScale} fill={isDarkMode ? '#94a3b8' : '#cbd5e1'} opacity={0.3 * animationProgress}/>
                  <circle cx={celestialX + 10 * perspectiveScale} cy={celestialY + 8 * perspectiveScale} r={4 * perspectiveScale} fill={isDarkMode ? '#94a3b8' : '#cbd5e1'} opacity={0.3 * animationProgress}/>
                  <circle cx={celestialX + 5 * perspectiveScale} cy={celestialY - 10 * perspectiveScale} r={3 * perspectiveScale} fill={isDarkMode ? '#94a3b8' : '#cbd5e1'} opacity={0.3 * animationProgress}/>
                  <circle cx={celestialX - 12 * perspectiveScale} cy={celestialY + 12 * perspectiveScale} r={5 * perspectiveScale} fill={isDarkMode ? '#94a3b8' : '#cbd5e1'} opacity={0.3 * animationProgress}/>
                </>
              )}
            </g>
          )}

          {/* Earth Circle - large and prominent - MIDDLE LAYER */}
          <g transform={`translate(0, ${parallaxEarth})`}>
            <circle cx="250" cy="250" r="180" fill={isDarkMode ? '#1e40af' : '#3b82f6'} opacity="0.15"/>
            <circle cx="250" cy="250" r="170" fill="url(#earthGradient)"/>

            {/* Indonesia Archipelago - puffy ellipse style, accurate locations */}

          {/* Sumatra (western island) - long diagonal island */}
          <ellipse cx="188" cy="240" rx="18" ry="45" fill={isDarkMode ? '#15803d' : '#22c55e'} opacity="0.85" transform="rotate(-20 188 240)"/>

          {/* Java (where Jakarta is) - long thin island below Sumatra */}
          <ellipse cx="228" cy="272" rx="38" ry="9" fill={isDarkMode ? '#15803d' : '#22c55e'} opacity="0.85" transform="rotate(3 228 272)"/>

          {/* Bali - small island east of Java */}
          <circle cx="264" cy="275" r="4" fill={isDarkMode ? '#15803d' : '#22c55e'} opacity="0.85"/>

          {/* Lombok */}
          <circle cx="271" cy="275" r="3" fill={isDarkMode ? '#15803d' : '#22c55e'} opacity="0.85"/>

          {/* Sumbawa */}
          <ellipse cx="280" cy="276" rx="7" ry="4" fill={isDarkMode ? '#15803d' : '#22c55e'} opacity="0.85"/>

          {/* Flores */}
          <ellipse cx="295" cy="277" rx="11" ry="4" fill={isDarkMode ? '#15803d' : '#22c55e'} opacity="0.85"/>

          {/* Sumba - below Flores */}
          <ellipse cx="290" cy="285" rx="7" ry="4" fill={isDarkMode ? '#15803d' : '#22c55e'} opacity="0.85"/>

          {/* Timor - southeasternmost island */}
          <ellipse cx="312" cy="284" rx="9" ry="4.5" fill={isDarkMode ? '#15803d' : '#22c55e'} opacity="0.85" transform="rotate(-8 312 284)"/>

          {/* Kalimantan/Borneo (large central island) - big puffy shape */}
          <ellipse cx="256" cy="225" rx="34" ry="38" fill={isDarkMode ? '#15803d' : '#22c55e'} opacity="0.85"/>

          {/* Sulawesi (Celebes) - K-shaped, use overlapping ellipses */}
          <ellipse cx="298" cy="240" rx="16" ry="24" fill={isDarkMode ? '#15803d' : '#22c55e'} opacity="0.85" transform="rotate(-15 298 240)"/>
          <ellipse cx="306" cy="252" rx="10" ry="14" fill={isDarkMode ? '#15803d' : '#22c55e'} opacity="0.85" transform="rotate(25 306 252)"/>

          {/* Banda Islands (small cluster between Sulawesi and Papua) */}
          <circle cx="318" cy="258" r="2.5" fill={isDarkMode ? '#15803d' : '#22c55e'} opacity="0.8"/>
          <circle cx="322" cy="260" r="2" fill={isDarkMode ? '#15803d' : '#22c55e'} opacity="0.8"/>
          <circle cx="325" cy="256" r="2" fill={isDarkMode ? '#15803d' : '#22c55e'} opacity="0.8"/>

          {/* Papua/New Guinea (eastern part) - large puffy shape */}
          <ellipse cx="348" cy="250" rx="32" ry="26" fill={isDarkMode ? '#15803d' : '#22c55e'} opacity="0.85" transform="rotate(8 348 250)"/>

          {/* Ocean waves/details */}
          <path d="M 250 150 Q 270 155, 290 150" stroke={isDarkMode ? '#475569' : '#cbd5e1'} strokeWidth="3" fill="none" opacity="0.4"/>
          <path d="M 150 300 Q 170 310, 190 315" stroke={isDarkMode ? '#475569' : '#cbd5e1'} strokeWidth="3" fill="none" opacity="0.4"/>
          <path d="M 350 280 Q 360 290, 370 285" stroke={isDarkMode ? '#475569' : '#cbd5e1'} strokeWidth="3" fill="none" opacity="0.4"/>

            {/* Orbit lines - more prominent */}
            <ellipse cx="250" cy="250" rx="190" ry="60" fill="none" stroke={isDarkMode ? '#475569' : '#cbd5e1'} strokeWidth="2" opacity="0.4" transform="rotate(20 250 250)" strokeDasharray="5,5"/>
            <ellipse cx="250" cy="250" rx="190" ry="60" fill="none" stroke={isDarkMode ? '#475569' : '#cbd5e1'} strokeWidth="2" opacity="0.4" transform="rotate(-20 250 250)" strokeDasharray="5,5"/>
          </g>

          {/* Celestial body IN FRONT of earth - only render when in front */}
          {!isBehindEarth && (
            <g transform={`translate(0, ${parallaxCelestial})`} opacity={depthOpacity}>
              <circle cx={celestialX} cy={celestialY} r={currentSize.outer} fill="url(#celestialGradient)" opacity="0.4" style={{ animation: 'pulse 5s ease-in-out infinite' }}/>
              <circle cx={celestialX} cy={celestialY} r={currentSize.middle} fill="url(#celestialGradient)" opacity="0.6"/>
              <circle cx={celestialX} cy={celestialY} r={currentSize.inner} fill={currentColor} opacity="0.9"/>

              {/* Moon craters (visible when animation progress > 0.6) */}
              {animationProgress > 0.6 && (
                <>
                  <circle cx={celestialX - 8 * perspectiveScale} cy={celestialY - 5 * perspectiveScale} r={6 * perspectiveScale} fill={isDarkMode ? '#94a3b8' : '#cbd5e1'} opacity={0.3 * animationProgress}/>
                  <circle cx={celestialX + 10 * perspectiveScale} cy={celestialY + 8 * perspectiveScale} r={4 * perspectiveScale} fill={isDarkMode ? '#94a3b8' : '#cbd5e1'} opacity={0.3 * animationProgress}/>
                  <circle cx={celestialX + 5 * perspectiveScale} cy={celestialY - 10 * perspectiveScale} r={3 * perspectiveScale} fill={isDarkMode ? '#94a3b8' : '#cbd5e1'} opacity={0.3 * animationProgress}/>
                  <circle cx={celestialX - 12 * perspectiveScale} cy={celestialY + 12 * perspectiveScale} r={5 * perspectiveScale} fill={isDarkMode ? '#94a3b8' : '#cbd5e1'} opacity={0.3 * animationProgress}/>
                </>
              )}
            </g>
          )}
        </svg>

        {/* Indonesian Flag Pin on Jakarta (on Java island) - larger - FOREGROUND LAYER */}
        <div style={{
          position: 'absolute',
          top: '40.5%',
          left: '43.5%',
          marginTop: '0px',
          marginLeft: '0px',
          zIndex: 10,
          willChange: 'transform',
          transform: `translateY(${parallaxFlag}px)`
        }}>
          <div style={{
            transform: 'translate(-50%, -50%)',
            animation: 'float 5s ease-in-out infinite'
          }}>
            {/* Flag Pole */}
            <div style={{
              width: '3px',
              height: '70px',
              background: isDarkMode ? '#94a3b8' : '#475569',
              margin: '0 auto'
            }}/>
            {/* Indonesian Flag */}
            <div style={{
              width: '50px',
              height: '38px',
              position: 'absolute',
              top: '0',
              left: '3px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
              borderRadius: '3px',
              overflow: 'hidden'
            }}>
              <div style={{ height: '19px', background: '#FF0000' }}/>
              <div style={{ height: '19px', background: '#FFFFFF' }}/>
            </div>
            {/* Pin dot */}
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#ef4444',
              position: 'absolute',
              bottom: '-6px',
              left: '50%',
              transform: 'translateX(-50%)',
              boxShadow: '0 4px 12px rgba(239, 68, 68, 0.5)'
            }}/>
          </div>
        </div>
      </div>
    </>
  )
}
