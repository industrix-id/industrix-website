'use client'

import React from 'react'
import { Row, Col, Button } from 'antd'
import { RocketOutlined, SettingOutlined, GlobalOutlined, ArrowRightOutlined } from '@ant-design/icons'
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

const projects: Project[] = [
  {
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
  },
  {
    id: 'commerce-inventory',
    title: 'Commerce & Inventory System',
    description: 'Inventory tracking and commerce management for multi-location operations.',
    icon: <SettingOutlined />,
    status: 'In Development',
    statusColor: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #F62A3A, #F85B62)',
    features: [
      'Multi-location tracking',
      'Real-time stock monitoring',
      'Automated reorder alerts',
      'Sales analytics'
    ]
  },
  {
    id: 'acemark',
    title: 'AceMark IP Law Firm',
    description: 'Corporate website for Indonesia\'s leading IP law firm with multi-language support.',
    icon: <GlobalOutlined />,
    status: 'Deployed',
    statusColor: '#22c55e',
    gradient: 'linear-gradient(135deg, #1079FF, #29C5FF)',
    link: 'https://www.acemark-ip.com/en',
    features: [
      'Professional design',
      'Multi-language (ID/EN/JP/CN)',
      'Service showcase',
      'SEO optimized'
    ]
  }
]

export default function ProjectsSection() {
  const router = useRouter()

  const handleClick = (project: Project) => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer')
    } else if (project.id !== 'commerce-inventory') {
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

        {/* Projects Grid */}
        <Row gutter={[16, 16]}>
          {projects.map((project) => (
            <Col xs={24} md={8} key={project.id}>
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
                  disabled={project.id === 'commerce-inventory'}
                  style={{
                    width: '100%',
                    height: '40px',
                    borderRadius: '8px',
                    background: project.id === 'commerce-inventory' ? '#334155' : project.gradient,
                    border: 'none',
                    fontWeight: 600,
                    fontSize: '13px'
                  }}
                >
                  {project.link ? 'Visit Website' : project.id === 'commerce-inventory' ? 'Coming Soon' : 'View Details'}
                  {project.id !== 'commerce-inventory' && <ArrowRightOutlined style={{ marginLeft: '6px' }} />}
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
