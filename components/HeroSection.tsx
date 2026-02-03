'use client'

import React from 'react'
import { Button, Space } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'

export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 12px 48px',
        background: 'radial-gradient(circle at 30% 30%, rgba(16, 121, 255, 0.08) 0%, transparent 50%)'
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        {/* Badge */}
        <div
          style={{
            display: 'inline-block',
            padding: '6px 14px',
            borderRadius: '20px',
            background: 'rgba(16, 121, 255, 0.1)',
            border: '1px solid rgba(16, 121, 255, 0.3)',
            fontSize: '13px',
            fontWeight: 600,
            color: '#1079FF',
            marginBottom: '24px'
          }}
        >
          Proven in Production
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: 'clamp(2rem, 7vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '20px',
            color: '#f1f5f9'
          }}
        >
          Digitalize Your{' '}
          <span className="text-gradient">Diesel Operations</span>
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontSize: 'clamp(15px, 3vw, 18px)',
            lineHeight: 1.7,
            color: '#94a3b8',
            maxWidth: '650px',
            margin: '0 auto 32px'
          }}
        >
          Real-time fuel monitoring, theft prevention, and complete operational
          visibility for heavy equipment. From IoT sensors to cloud dashboards,
          proven in Indonesian plantations.
        </p>

        {/* Buttons */}
        <Space size="middle" wrap style={{ justifyContent: 'center' }}>
          <Button
            type="primary"
            size="large"
            icon={<ArrowRightOutlined />}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              height: '48px',
              padding: '0 28px',
              fontSize: '15px',
              fontWeight: 600,
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #1079FF, #29C5FF)',
              border: 'none'
            }}
          >
            Get a Demo
          </Button>
          <Button
            size="large"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              height: '48px',
              padding: '0 28px',
              fontSize: '15px',
              fontWeight: 600,
              borderRadius: '8px',
              border: '2px solid #334155',
              color: '#e2e8f0',
              background: 'transparent'
            }}
          >
            See How It Works
          </Button>
        </Space>
      </div>
    </section>
  )
}
