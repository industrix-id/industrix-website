'use client'

import React from 'react'
import { Row, Col, Card, Typography, Space, Button, Tag } from 'antd'
import {
  GlobalOutlined,
  RocketOutlined,
  CheckCircleOutlined,
  StarOutlined,
  ApiOutlined,
  DatabaseOutlined,
  SafetyOutlined,
  ThunderboltOutlined
} from '@ant-design/icons'
import { useTheme } from '../app/theme/ThemeProvider'
import EarthAnimation from './EarthAnimation'

const { Title, Paragraph } = Typography

const capabilities = [
  {
    icon: <ApiOutlined />,
    title: 'IoT Fuel Sensors',
    description: 'Industrial-grade sensors installed on excavators, trucks, and generators—tracking every liter in real-time'
  },
  {
    icon: <DatabaseOutlined />,
    title: 'Real-time Monitoring',
    description: 'Cloud-based dashboards showing live fuel levels, consumption rates, and equipment status across all sites'
  },
  {
    icon: <SafetyOutlined />,
    title: 'Theft & Anomaly Detection',
    description: 'Automated alerts for suspicious fuel drops, unauthorized usage, and operational anomalies'
  },
  {
    icon: <ThunderboltOutlined />,
    title: 'Usage Analytics & Reports',
    description: 'Historical trends, equipment efficiency metrics, and detailed reports for operations and management'
  }
]

const values = [
  {
    title: 'Proven in Production',
    description: 'Currently deployed in palm oil operations, tracking diesel across excavators, trucks, and generators. Same system works for construction, mining, forestry, and agriculture.',
    icon: <RocketOutlined />
  },
  {
    title: 'Works Anywhere',
    description: 'Designed for challenging environments—from remote Indonesian plantations to US construction yards. Reliable connectivity in areas with limited infrastructure.',
    icon: <GlobalOutlined />
  },
  {
    title: 'Complete Hardware + Software',
    description: 'We handle everything: IoT sensor installation, cloud infrastructure, dashboard development, and ongoing support—all from one team.',
    icon: <StarOutlined />
  },
  {
    title: 'Measurable ROI',
    description: 'Stop diesel theft, catch anomalies in real-time, reduce fuel waste, and get detailed usage analytics that actually save money.',
    icon: <CheckCircleOutlined />
  }
]

export default function AboutSection() {
  const { isDarkMode } = useTheme()
  return (
    <section id="about" className="section-padding" style={{ overflow: 'hidden', overflowX: 'hidden' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 clamp(20px, 4vw, 24px)',
        overflow: 'hidden',
        overflowX: 'hidden'
      }}>
        {/* Main About Content */}
        <Row gutter={[{ xs: 24, sm: 32, md: 48 }, { xs: 32, sm: 40, md: 48 }]} align="middle" style={{
          marginBottom: 'clamp(48px, 8vw, 80px)',
          overflow: 'hidden',
          overflowX: 'hidden'
        }}>
          <Col xs={24} lg={12}>
            <div style={{ marginBottom: '24px' }}>
              <Tag color="blue" style={{ marginBottom: '16px', fontSize: '14px', padding: '6px 16px' }}>
                🌏 Global Heavy Equipment Operations
              </Tag>
            </div>
            <Title level={2} style={{ marginBottom: '24px', fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}>
              Diesel Operations <span className="text-gradient">Digitalization</span> for Heavy Industries
            </Title>
            <Paragraph style={{ fontSize: 'clamp(16px, 3vw, 18px)', lineHeight: 1.7, marginBottom: '24px', color: isDarkMode ? '#cbd5e1' : '#475569' }}>
              We digitalize diesel footprints for heavy equipment operations—<strong>proven in Indonesian palm oil plantations</strong>, now expanding to construction sites in the USA, and heavy industries globally. Our platform combines IoT sensors, real-time monitoring, and theft prevention to give you complete operational visibility.
            </Paragraph>
            <Paragraph style={{ fontSize: 'clamp(15px, 2.5vw, 16px)', lineHeight: 1.6, marginBottom: '32px', color: isDarkMode ? '#94a3b8' : '#64748b' }}>
              From <strong>fuel monitoring sensors</strong> on excavators and trucks to cloud-based dashboards showing every liter consumed, we deliver end-to-end solutions that stop theft, reduce waste, and optimize your diesel operations—whether you&apos;re running remote plantation sites or busy construction yards.
            </Paragraph>
            <Space size="middle" wrap>
              <Button
                type="primary"
                size="large"
                className="btn-gradient"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  height: '48px',
                  paddingLeft: 'clamp(20px, 4vw, 32px)',
                  paddingRight: 'clamp(20px, 4vw, 32px)',
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  whiteSpace: 'nowrap'
                }}
              >
                View Our Work
              </Button>
              <Button
                size="large"
                className="btn-outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  height: '48px',
                  paddingLeft: 'clamp(20px, 4vw, 32px)',
                  paddingRight: 'clamp(20px, 4vw, 32px)',
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  whiteSpace: 'nowrap'
                }}
              >
                Get Started
              </Button>
            </Space>
          </Col>

          <Col xs={24} lg={12} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              overflow: 'hidden',
              maxWidth: '100%'
            }}>
              <EarthAnimation />
            </div>
          </Col>
        </Row>

        {/* Core Capabilities */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <Title level={2} style={{ marginBottom: '16px' }}>
              Our <span className="text-gradient">Solution</span>
            </Title>
            <Paragraph style={{
              fontSize: 'clamp(16px, 3vw, 18px)',
              color: isDarkMode ? '#d1d5db' : '#6b7280',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              End-to-end diesel monitoring system—from IoT sensors on equipment to real-time cloud dashboards
            </Paragraph>
          </div>

          <Row gutter={[{ xs: 16, sm: 20, md: 24 }, { xs: 16, sm: 20, md: 24 }]} style={{
            overflow: 'hidden',
            maxWidth: '100%'
          }}>
            {capabilities.map((capability, index) => (
              <Col xs={24} sm={12} key={index} style={{
                overflow: 'hidden',
                maxWidth: '100%'
              }}>
                <Card
                  style={{
                    height: '100%',
                    border: 'none',
                    borderRadius: '16px',
                    background: isDarkMode
                      ? 'linear-gradient(135deg, rgba(16, 121, 255, 0.05), rgba(41, 197, 255, 0.02))'
                      : 'linear-gradient(135deg, rgba(16, 121, 255, 0.03), rgba(41, 197, 255, 0.01))',
                    borderLeft: `4px solid ${index % 2 === 0 ? '#1079FF' : '#29C5FF'}`,
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                    maxWidth: '100%'
                  }}
                  hoverable
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    overflow: 'hidden',
                    maxWidth: '100%'
                  }}>
                    <div style={{
                      fontSize: '28px',
                      color: index % 2 === 0 ? '#1079FF' : '#29C5FF',
                      marginTop: '4px',
                      flexShrink: 0
                    }}>
                      {capability.icon}
                    </div>
                    <div style={{
                      flex: 1,
                      overflow: 'hidden',
                      maxWidth: '100%',
                      minWidth: 0
                    }}>
                      <Title level={5} style={{
                        marginBottom: '8px',
                        fontSize: '16px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {capability.title}
                      </Title>
                      <Paragraph style={{
                        fontSize: '14px',
                        lineHeight: 1.6,
                        color: isDarkMode ? '#cbd5e1' : '#64748b',
                        margin: 0,
                        overflow: 'hidden',
                        wordWrap: 'break-word'
                      }}>
                        {capability.description}
                      </Paragraph>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Statistics
        <Row gutter={[32, 32]} style={{ marginBottom: '80px' }}>
          {stats.map((stat, index) => (
            <Col xs={12} md={6} key={index}>
              <Card 
                style={{
                  textAlign: 'center',
                  border: 'none',
                  borderRadius: '16px',
                  height: '100%',
                  background: index % 2 === 0 
                    ? 'linear-gradient(135deg, rgba(16, 121, 255, 0.05), rgba(41, 197, 255, 0.05))' 
                    : 'linear-gradient(135deg, rgba(246, 42, 58, 0.05), rgba(248, 91, 98, 0.05))',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                hoverable
              >
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: index % 2 === 0 
                    ? 'var(--industrix-gradient)' 
                    : 'var(--industrix-gradient-red)',
                  transition: 'height 0.3s ease'
                }} />
                <div style={{ 
                  fontSize: '32px', 
                  color: index % 2 === 0 ? '#1079FF' : '#F62A3A',
                  marginBottom: '16px'
                }}>
                  {stat.icon}
                </div>
                <Title level={2} style={{ 
                  background: index % 2 === 0 ? 'var(--industrix-gradient)' : 'var(--industrix-gradient-red)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '8px',
                  fontSize: '2.5rem'
                }}>
                  {stat.number}
                </Title>
                <Title level={5} style={{ marginBottom: '12px', color: isDarkMode ? '#e2e8f0' : '#1f2937' }}>
                  {stat.label}
                </Title>
                <Paragraph style={{ 
                  fontSize: '14px',
                  color: isDarkMode ? '#d1d5db' : '#6b7280',
                  margin: 0
                }}>
                  {stat.description}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row> */}

        {/* Why Industrix */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ marginBottom: '16px' }}>
            <Tag
              color="blue"
              style={{
                fontSize: '13px',
                padding: '4px 14px',
                border: 'none',
                background: isDarkMode ? 'rgba(16, 121, 255, 0.15)' : 'rgba(16, 121, 255, 0.1)',
                color: '#1079FF'
              }}
            >
              Industries We Serve
            </Tag>
          </div>
          <Title level={2} style={{ marginBottom: '20px', fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}>
            One Platform, <span className="text-gradient">Multiple Industries</span>
          </Title>
          <Paragraph style={{
            fontSize: 'clamp(16px, 3vw, 19px)',
            lineHeight: 1.6,
            color: isDarkMode ? '#cbd5e1' : '#475569',
            maxWidth: '800px',
            margin: '0 auto 16px'
          }}>
            Our diesel monitoring system was built for palm oil contractors, but the same technology works for any heavy equipment operation.
          </Paragraph>
          <Paragraph style={{
            fontSize: 'clamp(17px, 3.5vw, 20px)',
            lineHeight: 1.6,
            fontWeight: 600,
            color: isDarkMode ? '#e2e8f0' : '#1e293b',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            If you run excavators, trucks, or generators—<span className="text-gradient">we can help</span>.
          </Paragraph>
        </div>

        <Row gutter={[{ xs: 16, sm: 20, md: 28 }, { xs: 16, sm: 20, md: 28 }]} style={{ marginBottom: 'clamp(48px, 8vw, 64px)', overflow: 'hidden', maxWidth: '100%' }}>
          {values.map((value, index) => (
            <Col xs={24} md={12} key={index}>
              <Card
                style={{
                  height: '100%',
                  border: isDarkMode ? '1px solid rgba(16, 121, 255, 0.1)' : '1px solid rgba(16, 121, 255, 0.08)',
                  borderRadius: '20px',
                  padding: 'clamp(24px, 4vw, 32px) clamp(20px, 4vw, 28px)',
                  background: isDarkMode
                    ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(30, 41, 59, 0.4) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.8) 100%)',
                  boxShadow: isDarkMode
                    ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                    : '0 8px 32px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                hoverable
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = isDarkMode
                    ? '0 16px 48px rgba(16, 121, 255, 0.2)'
                    : '0 16px 48px rgba(16, 121, 255, 0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = isDarkMode
                    ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                    : '0 8px 32px rgba(0, 0, 0, 0.06)'
                }}
              >
                {/* Number badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: index % 2 === 0
                    ? 'linear-gradient(135deg, rgba(16, 121, 255, 0.15) 0%, rgba(41, 197, 255, 0.1) 100%)'
                    : 'linear-gradient(135deg, rgba(246, 42, 58, 0.15) 0%, rgba(248, 91, 98, 0.1) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: index % 2 === 0 ? '#1079FF' : '#F62A3A'
                }}>
                  {index + 1}
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '18px',
                    background: index % 2 === 0 ? 'var(--industrix-gradient)' : 'var(--industrix-gradient-red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '28px',
                    flexShrink: 0,
                    boxShadow: index % 2 === 0
                      ? '0 8px 24px rgba(16, 121, 255, 0.35)'
                      : '0 8px 24px rgba(246, 42, 58, 0.35)'
                  }}>
                    {value.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <Title level={4} style={{
                      marginBottom: '14px',
                      fontSize: '20px',
                      fontWeight: 700,
                      color: isDarkMode ? '#f1f5f9' : '#0f172a'
                    }}>
                      {value.title}
                    </Title>
                    <Paragraph style={{
                      fontSize: '15px',
                      lineHeight: 1.75,
                      color: isDarkMode ? '#cbd5e1' : '#475569',
                      margin: 0
                    }}>
                      {value.description}
                    </Paragraph>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Future Vision Section */}
        <div style={{ marginBottom: 'clamp(48px, 8vw, 64px)', textAlign: 'center' }}>
          <div style={{ marginBottom: '32px' }}>
            <Tag
              color="blue"
              style={{
                fontSize: '13px',
                padding: '4px 14px',
                border: 'none',
                background: isDarkMode ? 'rgba(16, 121, 255, 0.15)' : 'rgba(16, 121, 255, 0.1)',
                color: '#1079FF',
                marginBottom: '16px'
              }}
            >
              Future Expansion
            </Tag>
          </div>
          <Title level={2} style={{ marginBottom: '20px', fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}>
            Our <span className="text-gradient">Roadmap</span>
          </Title>
          <Paragraph style={{
            fontSize: 'clamp(16px, 3vw, 18px)',
            lineHeight: 1.7,
            color: isDarkMode ? '#cbd5e1' : '#475569',
            maxWidth: '800px',
            margin: '0 auto 40px'
          }}>
            We&apos;re expanding beyond diesel tracking. Our platform will grow to include GPS fleet management,
            inventory control, and predictive maintenance—serving construction, mining, and eventually defense sectors globally.
          </Paragraph>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(16px, 3vw, 24px)',
            flexWrap: 'wrap',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {[
              { title: 'GPS Fleet Tracking', desc: 'Real-time location and route optimization', status: 'Coming Soon' },
              { title: 'Inventory Management', desc: 'Supply chain visibility and control', status: 'In Development' },
              { title: 'Defense Applications', desc: 'Specialized solutions for military operations', status: 'Future' }
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  flex: '1 1 250px',
                  maxWidth: '280px',
                  padding: '24px',
                  borderRadius: '16px',
                  border: isDarkMode ? '1px solid rgba(16, 121, 255, 0.2)' : '1px solid rgba(16, 121, 255, 0.15)',
                  background: isDarkMode
                    ? 'rgba(30, 41, 59, 0.4)'
                    : 'rgba(255, 255, 255, 0.6)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#1079FF',
                  marginBottom: '12px'
                }}>
                  {item.status}
                </div>
                <Title level={5} style={{
                  marginBottom: '8px',
                  fontSize: '16px',
                  color: isDarkMode ? '#f1f5f9' : '#0f172a'
                }}>
                  {item.title}
                </Title>
                <Paragraph style={{
                  fontSize: '13px',
                  lineHeight: 1.6,
                  color: isDarkMode ? '#94a3b8' : '#64748b',
                  margin: 0
                }}>
                  {item.desc}
                </Paragraph>
              </div>
            ))}
          </div>
        </div>

        {/* Team Highlight */}
        <Card
          style={{
            borderRadius: '20px',
            border: 'none',
            background: isDarkMode
              ? 'linear-gradient(135deg, rgba(16, 121, 255, 0.1) 0%, rgba(41, 197, 255, 0.05) 100%)'
              : 'linear-gradient(135deg, rgba(16, 121, 255, 0.08) 0%, rgba(41, 197, 255, 0.03) 100%)',
            textAlign: 'center',
            padding: '48px 32px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'var(--industrix-gradient)'
          }} />

          <Title level={3} style={{ marginBottom: '20px', fontSize: '1.75rem' }}>
            Deployed Today. Expanding Globally.
          </Title>
          <Paragraph style={{
            fontSize: 'clamp(16px, 3vw, 18px)',
            lineHeight: 1.7,
            marginBottom: '32px',
            color: isDarkMode ? '#cbd5e1' : '#475569',
            maxWidth: '900px',
            margin: '0 auto 32px'
          }}>
            Our diesel monitoring system is live in Indonesian palm oil operations and expanding to construction industries in the USA.
            We build practical solutions that work in real-world conditions—and we&apos;re ready to scale this proven technology to your operations, wherever they are.
          </Paragraph>

          <div style={{ marginBottom: '32px' }}>
            <Row gutter={[{ xs: 24, sm: 28, md: 32 }, { xs: 12, sm: 14, md: 16 }]} justify="center">
              <Col>
                <div style={{ textAlign: 'center' }}>
                  <Title level={2} className="text-gradient" style={{ marginBottom: '4px' }}>
                    3+
                  </Title>
                  <Paragraph style={{ fontSize: '14px', margin: 0, color: isDarkMode ? '#94a3b8' : '#64748b' }}>
                    Active Enterprise Projects
                  </Paragraph>
                </div>
              </Col>
              <Col>
                <div style={{ textAlign: 'center' }}>
                  <Title level={2} className="text-gradient" style={{ marginBottom: '4px' }}>
                    24/7
                  </Title>
                  <Paragraph style={{ fontSize: '14px', margin: 0, color: isDarkMode ? '#94a3b8' : '#64748b' }}>
                    Monitoring & Support
                  </Paragraph>
                </div>
              </Col>
            </Row>
          </div>

          <Space size="middle" wrap style={{ justifyContent: 'center' }}>
            <Button
              type="primary"
              size="large"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                height: '48px',
                paddingLeft: 'clamp(20px, 4vw, 32px)',
                paddingRight: 'clamp(20px, 4vw, 32px)',
                background: 'var(--industrix-gradient)',
                border: 'none',
                fontWeight: '600',
                fontSize: 'clamp(14px, 2.5vw, 15px)',
                whiteSpace: 'nowrap'
              }}
            >
              See Our Projects
            </Button>
            <Button
              size="large"
              className="btn-outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                height: '48px',
                paddingLeft: 'clamp(20px, 4vw, 32px)',
                paddingRight: 'clamp(20px, 4vw, 32px)',
                fontWeight: '600',
                fontSize: 'clamp(14px, 2.5vw, 15px)',
                whiteSpace: 'nowrap'
              }}
            >
              Let&apos;s Talk
            </Button>
          </Space>
        </Card>
      </div>
    </section>
  )
}