'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from '../app/theme/ThemeProvider'

export default function EarthAnimation() {
  const { isDarkMode } = useTheme()
  const [animationProgress, setAnimationProgress] = useState(isDarkMode ? 1 : 0)

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

  // Calculate celestial body position based on animation progress
  const earthCenterX = 250
  const earthCenterY = 250

  // Light mode: sun at top right (angle -45°, behind earth, z-order wise will be before earth elements)
  // Dark mode: moon at center front (angle 0°, in front of earth)
  const startAngle = -45 // Top right for sun
  const endAngle = 180 // Front center for moon (180° puts it at the left, which we'll use to orbit around)

  // Orbit: sun goes from top-right, around the back, to the front
  const currentAngle = startAngle + (endAngle + 180) * animationProgress // Add 180 to complete the orbit to front

  // Radius changes: starts further out, comes closer to front
  const startRadius = 184
  const endRadius = 80 // Closer to earth when it's the moon in front
  const currentRadius = startRadius - (startRadius - endRadius) * animationProgress

  const celestialX = earthCenterX + currentRadius * Math.cos((currentAngle * Math.PI) / 180)
  const celestialY = earthCenterY + currentRadius * Math.sin((currentAngle * Math.PI) / 180)

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
  const currentSize = {
    outer: sunSize.outer - (sunSize.outer - moonSize.outer) * animationProgress,
    middle: sunSize.middle - (sunSize.middle - moonSize.middle) * animationProgress,
    inner: sunSize.inner - (sunSize.inner - moonSize.inner) * animationProgress
  }

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateZ(0);
          }
          50% {
            transform: translateY(-15px) translateZ(0);
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>

      <div style={{
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
      }}>
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

          {/* Celestial body behind earth (when progress < 0.5) */}
          {animationProgress < 0.5 && (
            <>
              <circle cx={celestialX} cy={celestialY} r={currentSize.outer} fill="url(#celestialGradient)" opacity="0.4" style={{ animation: 'pulse 4s ease-in-out infinite' }}/>
              <circle cx={celestialX} cy={celestialY} r={currentSize.middle} fill="url(#celestialGradient)" opacity="0.6"/>
              <circle cx={celestialX} cy={celestialY} r={currentSize.inner} fill={currentColor} opacity="0.9"/>
            </>
          )}

          {/* Earth Circle - large and prominent */}
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

          {/* Celestial body in front of earth (when progress >= 0.5) */}
          {animationProgress >= 0.5 && (
            <>
              <circle cx={celestialX} cy={celestialY} r={currentSize.outer} fill="url(#celestialGradient)" opacity="0.4" style={{ animation: 'pulse 4s ease-in-out infinite' }}/>
              <circle cx={celestialX} cy={celestialY} r={currentSize.middle} fill="url(#celestialGradient)" opacity="0.6"/>
              <circle cx={celestialX} cy={celestialY} r={currentSize.inner} fill={currentColor} opacity="0.9"/>

              {/* Moon craters (visible when animation progress > 0.6) */}
              {animationProgress > 0.6 && (
                <>
                  <circle cx={celestialX - 8} cy={celestialY - 5} r="6" fill={isDarkMode ? '#94a3b8' : '#cbd5e1'} opacity={0.3 * animationProgress}/>
                  <circle cx={celestialX + 10} cy={celestialY + 8} r="4" fill={isDarkMode ? '#94a3b8' : '#cbd5e1'} opacity={0.3 * animationProgress}/>
                  <circle cx={celestialX + 5} cy={celestialY - 10} r="3" fill={isDarkMode ? '#94a3b8' : '#cbd5e1'} opacity={0.3 * animationProgress}/>
                  <circle cx={celestialX - 12} cy={celestialY + 12} r="5" fill={isDarkMode ? '#94a3b8' : '#cbd5e1'} opacity={0.3 * animationProgress}/>
                </>
              )}
            </>
          )}
        </svg>

        {/* Indonesian Flag Pin on Jakarta (on Java island) - larger */}
        <div style={{
          position: 'absolute',
          top: '40.5%',
          left: '43.5%',
          marginTop: '0px',
          marginLeft: '0px',
          zIndex: 10,
          willChange: 'transform'
        }}>
          <div style={{
            transform: 'translate(-50%, -50%)',
            animation: 'float 4s ease-in-out infinite'
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
