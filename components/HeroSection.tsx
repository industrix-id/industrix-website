'use client'

import React, { useState, useEffect } from 'react'
import { Button, Space, Typography, Tag } from 'antd'
import { ArrowRightOutlined, ThunderboltOutlined } from '@ant-design/icons'
import { useTheme } from '../app/theme/ThemeProvider'

const { Title, Paragraph } = Typography

const rotatingWords = ['Hardware', 'Software', 'IoT Systems', 'Web Portals', 'Mobile Apps']

export default function HeroSection() {
  const { isDarkMode } = useTheme()
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

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

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      paddingBottom: '40px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Elements */}
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

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 clamp(16px, 4vw, 24px)',
        width: '100%',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Top Text Content */}
        <div style={{
          textAlign: 'center',
          marginBottom: '48px',
          maxWidth: '900px',
          margin: '0 auto 48px'
        }}>
          {/* Badge */}
          <div style={{ marginBottom: '24px' }}>
            <Tag style={{
              background: 'linear-gradient(135deg, rgba(16, 121, 255, 0.1), rgba(41, 197, 255, 0.1))',
              border: '1px solid rgba(16, 121, 255, 0.3)',
              borderRadius: '20px',
              padding: '6px 16px',
              fontSize: '13px',
              fontWeight: 600,
              color: '#1079FF'
            }}>
              <ThunderboltOutlined /> Silicon Valley Tech Standards
            </Tag>
          </div>

          {/* Main Heading */}
          <Title level={1} style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 900,
            marginBottom: '24px',
            lineHeight: 1.1,
            color: isDarkMode ? '#ffffff' : '#0f172a'
          }}>
            Custom
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
            for Indonesia
          </Title>

          {/* Subheading */}
          <Paragraph style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            marginBottom: '40px',
            lineHeight: 1.7,
            color: isDarkMode ? '#94a3b8' : '#475569',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            We build enterprise-grade digital solutions — from IoT devices to web platforms —
            transforming Indonesian industries with world-class technology.
          </Paragraph>

          {/* CTA Buttons */}
          <Space size={16} wrap style={{ marginBottom: '32px' }}>
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                height: '56px',
                paddingLeft: '32px',
                paddingRight: '32px',
                fontSize: '16px',
                fontWeight: 700,
                borderRadius: '12px',
                background: 'var(--industrix-gradient)',
                border: 'none',
                boxShadow: '0 8px 24px rgba(16, 121, 255, 0.3)'
              }}
            >
              Start Your Project
            </Button>
            <Button
              size="large"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                height: '56px',
                paddingLeft: '32px',
                paddingRight: '32px',
                fontSize: '16px',
                fontWeight: 700,
                borderRadius: '12px',
                borderWidth: '2px',
                borderColor: isDarkMode ? '#334155' : '#cbd5e1',
                color: isDarkMode ? '#e2e8f0' : '#1e293b',
                background: 'transparent'
              }}
            >
              View Projects
            </Button>
          </Space>
        </div>


        {/* Trust Indicators - Bottom Center */}
        <div style={{
          display: 'flex',
          gap: '48px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              background: 'var(--industrix-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1
            }}>
              2
            </div>
            <div style={{
              fontSize: '15px',
              color: isDarkMode ? '#94a3b8' : '#64748b',
              marginTop: '8px',
              fontWeight: 500
            }}>
              Silicon Valley Veterans
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              background: 'var(--industrix-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1
            }}>
              3
            </div>
            <div style={{
              fontSize: '15px',
              color: isDarkMode ? '#94a3b8' : '#64748b',
              marginTop: '8px',
              fontWeight: 500
            }}>
              Active Projects
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              background: 'var(--industrix-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1
            }}>
              100%
            </div>
            <div style={{
              fontSize: '15px',
              color: isDarkMode ? '#94a3b8' : '#64748b',
              marginTop: '8px',
              fontWeight: 500
            }}>
              Commitment
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
