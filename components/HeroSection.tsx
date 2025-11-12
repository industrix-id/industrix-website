'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Button, Space, Typography, Tag } from 'antd'
import { ArrowRightOutlined, ThunderboltOutlined } from '@ant-design/icons'
import { useTheme } from '../app/theme/ThemeProvider'

const { Title, Paragraph } = Typography

const rotatingWords = ['Plantations', 'Construction', 'Mining', 'Forestry', 'Agriculture']

// Floating Particles Component - Clean geometric shapes
function FloatingParticles({ isDarkMode }: { isDarkMode: boolean }) {
  const particles = [
    { x: 10, y: 15, size: 4, delay: 0, duration: 20, type: 'circle' },
    { x: 85, y: 20, size: 6, delay: 2, duration: 25, type: 'square' },
    { x: 15, y: 70, size: 5, delay: 4, duration: 22, type: 'circle' },
    { x: 90, y: 65, size: 4, delay: 1, duration: 24, type: 'triangle' },
    { x: 20, y: 40, size: 3, delay: 3, duration: 23, type: 'square' },
    { x: 80, y: 45, size: 5, delay: 5, duration: 21, type: 'circle' },
  ]

  return (
    <>
      {particles.map((particle, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: isDarkMode ? 0.2 : 0.15,
            animation: `floatParticle ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
            zIndex: 0,
            pointerEvents: 'none',
            background: particle.type === 'circle' ?
              (isDarkMode ? 'rgba(16, 121, 255, 0.5)' : 'rgba(16, 121, 255, 0.4)') :
              (isDarkMode ? 'rgba(246, 42, 58, 0.5)' : 'rgba(246, 42, 58, 0.4)'),
            borderRadius: particle.type === 'circle' ? '50%' : particle.type === 'square' ? '2px' : '0',
            transform: particle.type === 'triangle' ? 'rotate(45deg)' : 'none',
            boxShadow: `0 0 ${particle.size * 2}px ${isDarkMode ? 'rgba(16, 121, 255, 0.3)' : 'rgba(16, 121, 255, 0.2)'}`
          }}
        />
      ))}
    </>
  )
}

// Grid Background with Data Flow - Industrial Tech Theme
function GridBackground({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: isDarkMode ? 0.15 : 0.1
      }}
    >
      <defs>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path
            d="M 50 0 L 0 0 0 50"
            fill="none"
            stroke={isDarkMode ? '#1079FF' : '#3b82f6'}
            strokeWidth="0.5"
          />
        </pattern>
        <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopOpacity="0.3" />
          <stop offset="50%" stopOpacity="0.1" />
          <stop offset="100%" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" opacity="0.3" />
      <rect width="100%" height="100%" fill="url(#fadeGradient)" />
    </svg>
  )
}

// Animated counter component
function AnimatedCounter({ target, suffix = '', duration = 1500 }: { target: number | string; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (hasAnimated) return

    // For percentage or non-numeric targets
    if (typeof target === 'string') {
      setCount(target as any)
      setHasAnimated(true)
      return
    }

    setHasAnimated(true)
    const startTime = Date.now()
    const endValue = target

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)
      const currentCount = Math.floor(easeOutQuart(progress) * endValue)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }

    requestAnimationFrame(animate)
  }, [target, duration, hasAnimated])

  return <>{count}{suffix}</>
}

export default function HeroSection() {
  const { isDarkMode } = useTheme()
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [statsVisible, setStatsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  // Rotating words animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
        setIsAnimating(false)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Scroll tracking for parallax and fade effects
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return

      const heroRect = heroRef.current.getBoundingClientRect()
      const heroHeight = heroRect.height
      const scrolled = -heroRect.top

      // Calculate scroll progress (0 = top of hero, 1 = hero scrolled past viewport)
      const progress = Math.max(0, Math.min(1, scrolled / heroHeight))
      setScrollProgress(progress)
    }

    handleScroll() // Initial calculation
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection observer for stats counter animation
  useEffect(() => {
    if (!statsRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsVisible) {
            setStatsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(statsRef.current)

    return () => observer.disconnect()
  }, [statsVisible])

  // Parallax calculations
  const badgeTransform = `translateY(${scrollProgress * -50}px)`
  const headingTransform = `translateY(${scrollProgress * -30}px)`
  const subtextTransform = `translateY(${scrollProgress * -20}px)`
  const buttonsTransform = `translateY(${scrollProgress * -10}px)`

  // Fade and scale calculations
  const opacity = 1 - scrollProgress * 0.8
  const scale = 1 - scrollProgress * 0.05

  return (
    <>
      <style jsx>{`
        @keyframes sunriseShift {
          0%, 100% {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
          50% {
            opacity: 0.7;
            transform: translateX(-10px) translateY(-10px);
          }
        }

        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.4;
          }
        }
      `}</style>

      <section
        ref={heroRef}
        style={{
        minHeight: 'max(600px, 100vh)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative',
        overflow: 'hidden'
      }}>
      {/* Background Elements - Indonesian Industrial Theme */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: isDarkMode
          ? 'radial-gradient(circle at 50% 50%, rgba(16, 121, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(246, 42, 58, 0.1) 0%, transparent 50%)'
          : 'radial-gradient(circle at 50% 50%, rgba(16, 121, 255, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(246, 42, 58, 0.05) 0%, transparent 50%)',
        zIndex: 0
      }} />

      {/* Animated Sunrise Gradient Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(135deg,
          ${isDarkMode ? 'rgba(251, 146, 60, 0.12)' : 'rgba(251, 146, 60, 0.08)'} 0%,
          transparent 40%,
          ${isDarkMode ? 'rgba(59, 130, 246, 0.12)' : 'rgba(59, 130, 246, 0.08)'} 100%)`,
        animation: 'sunriseShift 20s ease-in-out infinite',
        zIndex: 0
      }} />

      {/* Floating Particles */}
      <FloatingParticles isDarkMode={isDarkMode} />

      {/* Grid Background */}
      <GridBackground isDarkMode={isDarkMode} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 clamp(20px, 4vw, 24px)',
        width: '100%',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden'
      }}>
        {/* Top Text Content */}
        <div style={{
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto clamp(40px, 8vw, 48px)',
          opacity,
          transform: `scale(${scale})`,
          transition: 'opacity 0.1s ease-out, transform 0.1s ease-out'
        }}>
          {/* Badge */}
          <div style={{
            marginBottom: '24px',
            transform: badgeTransform,
            transition: 'transform 0.1s ease-out'
          }}>
            <Tag style={{
              background: 'linear-gradient(135deg, rgba(16, 121, 255, 0.1), rgba(41, 197, 255, 0.1))',
              border: '1px solid rgba(16, 121, 255, 0.3)',
              borderRadius: '20px',
              padding: '6px 16px',
              fontSize: '13px',
              fontWeight: 600,
              color: '#1079FF'
            }}>
              <ThunderboltOutlined /> Proven in Production
            </Tag>
          </div>

          {/* Main Heading */}
          <Title level={1} style={{
            fontSize: 'clamp(1.75rem, 6vw, 4.5rem)',
            fontWeight: 900,
            marginBottom: 'clamp(20px, 4vw, 24px)',
            lineHeight: 1.15,
            color: isDarkMode ? '#ffffff' : '#0f172a',
            transform: headingTransform,
            transition: 'transform 0.1s ease-out',
            letterSpacing: '-0.02em'
          }}>
            Digitalize Your
            <br />
            <div style={{
              display: 'inline-block',
              position: 'relative',
              minHeight: '1.2em'
            }}>
              <span style={{
                display: 'inline-block',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? 'translateY(-30px)' : 'translateY(0)',
                background: 'var(--industrix-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {rotatingWords[currentWordIndex]}
              </span>
            </div>
            <br />
            Diesel Operations
          </Title>

          {/* Subheading */}
          <Paragraph style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            lineHeight: 1.6,
            color: isDarkMode ? '#94a3b8' : '#475569',
            maxWidth: '700px',
            margin: '0 auto clamp(32px, 6vw, 40px)',
            transform: subtextTransform,
            transition: 'transform 0.1s ease-out'
          }}>
            Real-time fuel monitoring, theft prevention, and complete operational visibility for heavy equipment operations. From IoT sensors to cloud dashboards—proven in Indonesia, expanding globally.
          </Paragraph>

          {/* CTA Buttons */}
          <Space size="middle" wrap style={{
            marginBottom: '32px',
            transform: buttonsTransform,
            transition: 'transform 0.1s ease-out',
            justifyContent: 'center'
          }}>
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                height: '48px',
                paddingLeft: 'clamp(20px, 4vw, 32px)',
                paddingRight: 'clamp(20px, 4vw, 32px)',
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                fontWeight: 700,
                borderRadius: '12px',
                background: 'var(--industrix-gradient)',
                border: 'none',
                boxShadow: '0 8px 24px rgba(16, 121, 255, 0.3)',
                whiteSpace: 'nowrap'
              }}
            >
              Get a Demo
            </Button>
            <Button
              size="large"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                height: '48px',
                paddingLeft: 'clamp(20px, 4vw, 32px)',
                paddingRight: 'clamp(20px, 4vw, 32px)',
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                fontWeight: 700,
                borderRadius: '12px',
                borderWidth: '2px',
                borderColor: isDarkMode ? '#334155' : '#cbd5e1',
                color: isDarkMode ? '#e2e8f0' : '#1e293b',
                background: 'transparent',
                whiteSpace: 'nowrap'
              }}
            >
              View Projects
            </Button>
          </Space>
        </div>


        {/* Trust Indicators - Bottom Center */}
        <div
          ref={statsRef}
          style={{
            display: 'flex',
            gap: 'clamp(24px, 4vw, 48px)',
            flexWrap: 'wrap',
            justifyContent: 'center',
            maxWidth: '100%',
            margin: '0 auto',
            opacity: statsVisible ? 1 : 0,
            transform: statsVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            overflow: 'hidden',
            overflowX: 'hidden',
            overflowY: 'hidden',
            width: '100%'
          }}
        >
          <div style={{
            textAlign: 'center',
            overflow: 'hidden',
            maxWidth: '100%'
          }}>
            <div style={{
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: 800,
              background: 'var(--industrix-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1,
              overflow: 'hidden',
              maxWidth: '100%'
            }}>
              {statsVisible ? <AnimatedCounter target={2} duration={1200} /> : 0}
            </div>
            <div style={{
              fontSize: '15px',
              color: isDarkMode ? '#94a3b8' : '#64748b',
              marginTop: '8px',
              fontWeight: 500,
              overflow: 'hidden',
              maxWidth: '100%',
              whiteSpace: 'nowrap'
            }}>
              Silicon Valley Veterans
            </div>
          </div>
          <div style={{
            textAlign: 'center',
            overflow: 'hidden',
            maxWidth: '100%'
          }}>
            <div style={{
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: 800,
              background: 'var(--industrix-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1,
              overflow: 'hidden',
              maxWidth: '100%'
            }}>
              {statsVisible ? <AnimatedCounter target={3} duration={1400} /> : 0}
            </div>
            <div style={{
              fontSize: '15px',
              color: isDarkMode ? '#94a3b8' : '#64748b',
              marginTop: '8px',
              fontWeight: 500,
              overflow: 'hidden',
              maxWidth: '100%',
              whiteSpace: 'nowrap'
            }}>
              Active Projects
            </div>
          </div>
          <div style={{
            textAlign: 'center',
            overflow: 'hidden',
            maxWidth: '100%'
          }}>
            <div style={{
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: 800,
              background: 'var(--industrix-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1,
              overflow: 'hidden',
              maxWidth: '100%'
            }}>
              {statsVisible ? <AnimatedCounter target={100} suffix="%" duration={1600} /> : '0%'}
            </div>
            <div style={{
              fontSize: '15px',
              color: isDarkMode ? '#94a3b8' : '#64748b',
              marginTop: '8px',
              fontWeight: 500,
              overflow: 'hidden',
              maxWidth: '100%',
              whiteSpace: 'nowrap'
            }}>
              Commitment
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
