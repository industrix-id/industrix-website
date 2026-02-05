'use client'

import React from 'react'
import { Row, Col, Button } from 'antd'
import { RocketOutlined, GlobalOutlined, ShoppingOutlined, ArrowRightOutlined, CodeOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'

interface Project {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  status: string
  statusColor: string
  gradient: string
  features: string[]
  link?: string
}

// Core product
const coreProduct: Project = {
  id: 'fuel-tank-monitoring',
  title: 'Palm Oil Diesel Tracking',
  description: 'Real-time diesel monitoring for palm oil plantation contractors with IoT sensors and cloud dashboards.',
  icon: <RocketOutlined />,
  status: 'In Production',
  statusColor: '#22c55e',
  gradient: 'linear-gradient(135deg, #1079FF, #29C5FF)',
  features: [
    'IoT fuel dispensing stations',
    'Real-time theft detection',
    'Cloud dashboard for operations',
    'Usage analytics & reports'
  ]
}

// Custom development projects for clients
const clientProjects: Project[] = [
  {
    id: 'acemark',
    title: 'AceMark IP Law Firm',
    description: 'Corporate website for Indonesia\'s leading IP law firm with multi-language support.',
    icon: <GlobalOutlined />,
    status: 'Deployed',
    statusColor: '#22c55e',
    gradient: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
    link: 'https://www.acemark-ip.com/en',
    features: [
      'Professional design',
      'Multi-language (ID/EN/JP/CN)',
      'Service showcase',
      'SEO optimized'
    ]
  },
  {
    id: 'kis',
    title: 'PT. Kreasi Inti Sukses',
    description: 'Product catalog and company profile with CMS backend and 8-language support.',
    icon: <ShoppingOutlined />,
    status: 'Deployed',
    statusColor: '#22c55e',
    gradient: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
    link: 'https://payload-kis.vercel.app/en',
    features: [
      'Payload CMS backend',
      '8-language support',
      'Product catalog',
      'Admin dashboard'
    ]
  }
]

export default function ProjectsSection() {
  const router = useRouter()

  const handleClick = (project: Project) => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer')
    } else if (project.id === 'fuel-tank-monitoring') {
      router.push(`/projects/${project.id}`)
    }
  }

  return (
    <section id="projects" className="home-section" style={{ background: '#0f172a' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '12px' }}>
            <span className="text-gradient">Proven</span> in Production
          </h2>
          <p style={{ fontSize: '15px', color: '#94a3b8', maxWidth: '500px', margin: '0 auto' }}>
            Our diesel tracking system is deployed and running today in palm oil operations.
          </p>
        </div>

        {/* Core Product - Featured */}
        <div
          style={{
            background: '#1e293b',
            borderRadius: '16px',
            padding: '32px',
            marginBottom: '48px',
            border: '2px solid #1079FF',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Featured badge */}
          <div style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            padding: '6px 12px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #1079FF, #29C5FF)',
            fontSize: '11px',
            fontWeight: 700,
            color: 'white',
            textTransform: 'uppercase'
          }}>
            Core Product
          </div>

          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} md={14}>
              {/* Status */}
              <div
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: '10px',
                  background: `${coreProduct.statusColor}20`,
                  color: coreProduct.statusColor,
                  fontSize: '11px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  marginBottom: '16px'
                }}
              >
                {coreProduct.status}
              </div>

              <h3 style={{ fontSize: '24px', marginBottom: '12px', color: '#f1f5f9' }}>
                {coreProduct.title}
              </h3>
              <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
                {coreProduct.description}
              </p>

              <Button
                type="primary"
                size="large"
                onClick={() => handleClick(coreProduct)}
                style={{
                  height: '44px',
                  padding: '0 24px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #1079FF, #29C5FF)',
                  border: 'none',
                  fontWeight: 600
                }}
              >
                View Details <ArrowRightOutlined style={{ marginLeft: '6px' }} />
              </Button>
            </Col>
            <Col xs={24} md={10}>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {coreProduct.features.map((feature, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '14px',
                      color: '#cbd5e1',
                      marginBottom: '12px',
                      padding: '10px 14px',
                      background: 'rgba(16, 121, 255, 0.1)',
                      borderRadius: '8px'
                    }}
                  >
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#1079FF',
                      flexShrink: 0
                    }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </div>

        {/* Custom Development Section */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '16px'
              }}
            >
              <CodeOutlined />
            </div>
            <div>
              <h3 style={{ fontSize: '18px', margin: 0, color: '#f1f5f9' }}>
                Custom Development
              </h3>
              <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                We also build custom solutions for clients who trust our technical team
              </p>
            </div>
          </div>
        </div>

        {/* Client Projects Grid */}
        <Row gutter={[16, 16]}>
          {clientProjects.map((project) => (
            <Col xs={24} md={12} key={project.id}>
              <div
                style={{
                  background: '#1e293b',
                  borderRadius: '12px',
                  padding: '24px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid rgba(255,255,255,0.08)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Top accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: project.gradient
                }} />

                {/* Status */}
                <div
                  style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '10px',
                    background: `${project.statusColor}20`,
                    color: project.statusColor,
                    fontSize: '11px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                    alignSelf: 'flex-start'
                  }}
                >
                  {project.status}
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: project.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '18px',
                    marginBottom: '16px'
                  }}
                >
                  {project.icon}
                </div>

                {/* Title & Description */}
                <h3 style={{ fontSize: '16px', marginBottom: '8px', color: '#f1f5f9' }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.5, marginBottom: '16px' }}>
                  {project.description}
                </p>

                {/* Features */}
                <ul style={{ margin: '0 0 16px 0', padding: 0, listStyle: 'none', flex: 1 }}>
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '12px',
                        color: '#cbd5e1',
                        marginBottom: '6px'
                      }}
                    >
                      <span style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: project.gradient,
                        flexShrink: 0
                      }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Button
                  type="primary"
                  onClick={() => handleClick(project)}
                  disabled={!project.link}
                  style={{
                    width: '100%',
                    height: '40px',
                    borderRadius: '8px',
                    background: project.link ? project.gradient : '#334155',
                    border: 'none',
                    fontWeight: 600,
                    fontSize: '13px'
                  }}
                >
                  {project.link ? 'Visit Website' : 'Coming Soon'}
                  {project.link && <ArrowRightOutlined style={{ marginLeft: '6px' }} />}
                </Button>
              </div>
            </Col>
          ))}
        </Row>

        {/* CTA */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '40px',
            padding: '32px 24px',
            background: 'rgba(16, 121, 255, 0.05)',
            border: '1px solid rgba(16, 121, 255, 0.15)',
            borderRadius: '12px'
          }}
        >
          <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#f1f5f9' }}>
            Stop Diesel Theft. Optimize Your Fleet.
          </h3>
          <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '24px' }}>
            Our system adapts to palm oil, construction, or industrial facilities.
          </p>
          <Button
            type="primary"
            size="large"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              height: '44px',
              padding: '0 24px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #1079FF, #29C5FF)',
              border: 'none',
              fontWeight: 600
            }}
          >
            Discuss Your Needs
          </Button>
        </div>
      </div>
    </section>
  )
}
