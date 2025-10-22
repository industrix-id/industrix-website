'use client'

import React from 'react'
import { useTheme } from '../app/theme/ThemeProvider'

export default function EarthAnimation() {
  const { isDarkMode } = useTheme()

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
          {/* Sun behind earth on the right */}
          <defs>
            <radialGradient id="sunGradient">
              <stop offset="0%" stopColor={isDarkMode ? '#fbbf24' : '#fbbf24'} stopOpacity="1"/>
              <stop offset="50%" stopColor={isDarkMode ? '#f59e0b' : '#f59e0b'} stopOpacity="0.9"/>
              <stop offset="100%" stopColor={isDarkMode ? '#d97706' : '#d97706'} stopOpacity="0.5"/>
            </radialGradient>
            <radialGradient id="earthGradient">
              <stop offset="0%" stopColor={isDarkMode ? '#0ea5e9' : '#60a5fa'} stopOpacity="0.8"/>
              <stop offset="50%" stopColor={isDarkMode ? '#0284c7' : '#3b82f6'} stopOpacity="0.6"/>
              <stop offset="100%" stopColor={isDarkMode ? '#0369a1' : '#2563eb'} stopOpacity="0.4"/>
            </radialGradient>
          </defs>

          {/* Sun with enhanced glow - positioned top right */}
          <circle cx="380" cy="120" r="80" fill="url(#sunGradient)" opacity="0.4" style={{ animation: 'pulse 4s ease-in-out infinite' }}/>
          <circle cx="380" cy="120" r="60" fill="url(#sunGradient)" opacity="0.6"/>
          <circle cx="380" cy="120" r="45" fill={isDarkMode ? '#fbbf24' : '#fde047'} opacity="0.9"/>

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
