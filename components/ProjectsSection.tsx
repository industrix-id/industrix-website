'use client'

import React from 'react'
import { Card, Typography, Button, Space } from 'antd'
import { RocketOutlined, SettingOutlined, EyeOutlined, ArrowRightOutlined, GlobalOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import { useTheme } from '../app/theme/ThemeProvider'

const { Title, Paragraph } = Typography

interface CaseStudy {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  technologies: string[]
  status: string
  gradient: string
  link?: string
  features: string[]
}

const caseStudies: CaseStudy[] = [
  {
    id: 'fuel-tank-monitoring',
    title: 'Palm Oil Diesel Tracking System',
    description: 'Real-time diesel monitoring for palm oil plantation contractors, tracking fuel dispensing at centralized fuel stations with IoT sensors, theft detection, and cloud dashboards.',
    icon: <RocketOutlined />,
    technologies: ['React + TypeScript', 'Node.js + WebSocket', 'Cloud Database', 'IoT Sensors', 'Real-time Monitoring'],
    status: 'Deployed in Production',
    gradient: 'var(--industrix-gradient)',
    features: [
      'IoT-enabled fuel dispensing stations',
      'Real-time fuel theft detection & alerts',
      'Cloud dashboard for operations & finance',
      'Usage analytics & efficiency reports'
    ]
  },
  {
    id: 'commerce-inventory',
    title: 'Commerce and Inventory Management System',
    description: 'Comprehensive inventory tracking and commerce management platform for multi-location operations with real-time stock monitoring and analytics.',
    icon: <SettingOutlined />,
    technologies: ['React + TypeScript', 'Real-time Tracking', 'Analytics Dashboard', 'Multi-location Support'],
    status: 'Early Stage Development',
    gradient: 'var(--industrix-gradient-red)',
    features: [
      'Multi-location inventory tracking',
      'Real-time stock level monitoring',
      'Automated reorder alerts',
      'Sales and purchase analytics'
    ]
  },
  {
    id: 'acemark',
    title: 'AceMark IP Law Firm Website',
    description: 'Professional corporate website for Indonesia\'s leading intellectual property law firm with multi-language support and modern design.',
    icon: <GlobalOutlined />,
    technologies: ['Next.js', 'React + TypeScript', 'Tailwind CSS', 'Multi-language'],
    status: 'Late Stage Development',
    gradient: 'var(--industrix-gradient)',
    link: 'https://www.acemark-ip.com/en',
    features: [
      'Modern, professional design',
      'Multi-language support (ID/EN/JP/CN/TW)',
      'Service showcase and portfolio',
      'SEO optimization'
    ]
  }
]

export default function CaseStudiesSection() {
  const { isDarkMode } = useTheme()
  const router = useRouter()
  const [shakingCard, setShakingCard] = React.useState<string | null>(null)

  return (
    <section id="projects" style={{
      padding: '80px 0',
      background: isDarkMode
        ? '#0f172a'
        : '#ffffff'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 48px)' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 8vw, 64px)' }}>
          <Title level={2} style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            marginBottom: '24px',
            background: 'var(--industrix-gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Proven in Production
          </Title>
          <Paragraph style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            maxWidth: '800px',
            margin: '0 auto',
            color: isDarkMode ? '#94a3b8' : '#64748b'
          }}>
            Our diesel tracking system is deployed and running today in palm oil operations.
            The same platform is expanding to construction, mining, and heavy equipment industries globally.
          </Paragraph>
        </div>

        {/* Projects Grid */}
        <div
          className="projects-container"
          style={{
            paddingBottom: '32px',
            paddingTop: '8px',
            marginBottom: '8px'
          }}
        >
          <style>{`
            @keyframes shakeButton {
              0%, 100% { transform: translateX(0); }
              10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
              20%, 40%, 60%, 80% { transform: translateX(8px); }
            }
            .shake-animation {
              animation: shakeButton 0.6s ease-in-out;
            }
            @media (min-width: 1024px) {
              .projects-container > div {
                display: flex;
                gap: 24px;
                overflow-x: auto;
                overflow-y: visible;
                scroll-snap-type: x mandatory;
                scroll-behavior: smooth;
                -webkit-overflow-scrolling: touch;
                scrollbar-width: thin;
                scrollbar-color: ${isDarkMode ? '#1079FF transparent' : '#1079FF transparent'};
              }
              .projects-container > div::-webkit-scrollbar {
                height: 8px;
              }
              .projects-container > div::-webkit-scrollbar-track {
                background: transparent;
                border-radius: 5px;
              }
              .projects-container > div::-webkit-scrollbar-thumb {
                background: linear-gradient(135deg, #1079FF, #29C5FF);
                border-radius: 5px;
              }
              .projects-container > div::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(135deg, #0d63d9, #1fa3d9);
              }
              .project-card {
                min-width: 380px;
                max-width: 380px;
                flex-shrink: 0;
                scroll-snap-align: center;
              }
            }
            @media (max-width: 1023px) {
              .projects-container > div {
                display: grid;
                grid-template-columns: 1fr;
                gap: 24px;
              }
              .project-card {
                width: 100%;
                max-width: 100%;
              }
            }
          `}</style>
          <div>
            {caseStudies.map((caseStudy) => (
              <Card
                key={caseStudy.id}
                className="project-card"
                style={{
                  border: isDarkMode
                    ? '1px solid rgba(255, 255, 255, 0.1)'
                    : '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '16px',
                  background: isDarkMode
                    ? 'rgba(30, 41, 59, 0.5)'
                    : 'rgba(255, 255, 255, 0.8)',
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  padding: '24px'
                }}
                hoverable
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = isDarkMode ? 'rgba(16, 121, 255, 0.4)' : 'rgba(16, 121, 255, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'
                }}
              >
                {/* Simple Top Border Accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: caseStudy.gradient
                }} />

                {/* Status Badge */}
                <div style={{
                  display: 'inline-block',
                  marginBottom: '16px',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  background: caseStudy.status === 'Deployed in Production'
                    ? 'rgba(34, 197, 94, 0.15)'
                    : caseStudy.status === 'In Delivery'
                    ? 'rgba(59, 130, 246, 0.15)'
                    : caseStudy.status === 'Late Stage Development'
                    ? 'rgba(245, 158, 11, 0.15)'
                    : 'rgba(139, 92, 246, 0.15)',
                  color: caseStudy.status === 'Deployed in Production'
                    ? '#22c55e'
                    : caseStudy.status === 'In Delivery'
                    ? '#3b82f6'
                    : caseStudy.status === 'Late Stage Development'
                    ? '#f59e0b'
                    : '#8b5cf6',
                  fontSize: '10px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {caseStudy.status}
                </div>

                {/* Icon */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: caseStudy.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    color: 'white'
                  }}>
                    {caseStudy.icon}
                  </div>
                </div>

                {/* Title and Description */}
                <div style={{ marginBottom: '20px' }}>
                  <Title level={3} style={{
                    marginBottom: '10px',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    lineHeight: 1.3,
                    color: isDarkMode ? '#f1f5f9' : '#0f172a'
                  }}>
                    {caseStudy.title}
                  </Title>

                  <Paragraph style={{
                    fontSize: '13px',
                    lineHeight: 1.6,
                    color: isDarkMode ? '#94a3b8' : '#64748b',
                    marginBottom: 0
                  }}>
                    {caseStudy.description}
                  </Paragraph>
                </div>

                {/* Technologies */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{
                    marginBottom: '10px',
                    fontSize: '10px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                    color: isDarkMode ? '#64748b' : '#94a3b8'
                  }}>
                    Tech Stack
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {caseStudy.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        style={{
                          padding: '4px 10px',
                          borderRadius: '6px',
                          background: isDarkMode
                            ? 'rgba(16, 121, 255, 0.15)'
                            : 'rgba(16, 121, 255, 0.1)',
                          color: '#1079FF',
                          fontSize: '11px',
                          fontWeight: 500
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{
                    marginBottom: '10px',
                    fontSize: '10px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                    color: isDarkMode ? '#64748b' : '#94a3b8'
                  }}>
                    Key Features
                  </div>
                  <ul style={{
                    margin: 0,
                    paddingLeft: '0',
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}>
                    {caseStudy.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        fontSize: '12px',
                        lineHeight: 1.5,
                        color: isDarkMode ? '#cbd5e1' : '#475569'
                      }}>
                        <span style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: caseStudy.gradient,
                          marginTop: '6px',
                          flexShrink: 0
                        }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <Button
                  type="primary"
                  size="large"
                  className={shakingCard === caseStudy.id ? 'shake-animation' : ''}
                  onClick={() => {
                    if (caseStudy.link) {
                      window.open(caseStudy.link, '_blank', 'noopener,noreferrer')
                    } else if (caseStudy.id === 'commerce-inventory') {
                      // Coming soon - trigger shake animation
                      setShakingCard(caseStudy.id)
                      setTimeout(() => setShakingCard(null), 600)
                    } else {
                      router.push(`/projects/${caseStudy.id}`)
                    }
                  }}
                  style={{
                    width: '100%',
                    height: '48px',
                    borderRadius: '10px',
                    background: caseStudy.gradient,
                    border: 'none',
                    fontWeight: 600,
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease'
                  }}
                  icon={<EyeOutlined />}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.9'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1'
                  }}
                >
                  {caseStudy.link ? 'Visit Website' : caseStudy.id === 'commerce-inventory' ? 'Coming Soon' : 'View Details'}
                  <ArrowRightOutlined style={{ fontSize: '12px' }} />
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          marginTop: '32px',
          padding: '48px 32px',
          borderRadius: '20px',
          background: isDarkMode
            ? 'linear-gradient(145deg, rgba(16, 121, 255, 0.1), rgba(41, 197, 255, 0.05))'
            : 'linear-gradient(145deg, rgba(16, 121, 255, 0.05), rgba(41, 197, 255, 0.02))',
          border: `1px solid ${isDarkMode ? 'rgba(16, 121, 255, 0.2)' : 'rgba(16, 121, 255, 0.1)'}`
        }}>
          <Title level={3} style={{
            marginBottom: '16px',
            color: isDarkMode ? '#e2e8f0' : '#1e293b'
          }}>
            Stop Diesel Theft. Optimize Your Fleet.
          </Title>
          <Paragraph style={{
            fontSize: 'clamp(15px, 2.5vw, 16px)',
            marginBottom: '32px',
            color: isDarkMode ? '#94a3b8' : '#64748b',
            maxWidth: '600px',
            margin: '0 auto 32px'
          }}>
            Whether you&apos;re running palm oil operations, construction sites, or industrial facilities,
            our diesel tracking system adapts to your needs.
          </Paragraph>
          <Space size="middle" wrap style={{ justifyContent: 'center' }}>
            <Button
              type="primary"
              size="large"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                height: '48px',
                paddingLeft: 'clamp(20px, 4vw, 32px)',
                paddingRight: 'clamp(20px, 4vw, 32px)',
                borderRadius: '12px',
                background: 'var(--industrix-gradient)',
                border: 'none',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontSize: 'clamp(13px, 2.5vw, 14px)',
                whiteSpace: 'nowrap'
              }}
            >
              Discuss Your Needs
            </Button>
            <Button
              size="large"
              onClick={() => {
                const element = document.getElementById('projects')
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              style={{
                height: '48px',
                paddingLeft: 'clamp(20px, 4vw, 32px)',
                paddingRight: 'clamp(20px, 4vw, 32px)',
                borderRadius: '12px',
                borderWidth: '2px',
                borderColor: '#1079FF',
                color: '#1079FF',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontSize: 'clamp(13px, 2.5vw, 14px)',
                whiteSpace: 'nowrap'
              }}
            >
              View All Projects
            </Button>
          </Space>
        </div>
      </div>
    </section>
  )
}