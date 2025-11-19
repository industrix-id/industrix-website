'use client'

import React from 'react'
import { Layout, Typography, Card, Row, Col, Tag, Button, Space } from 'antd'
import { ArrowLeftOutlined, RocketOutlined, CheckCircleOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import { useTheme } from '@/app/theme/ThemeProvider'
import SimpleNavbar from '@/components/SimpleNavbar'
import Footer from '@/components/Footer'

const { Content } = Layout
const { Title, Paragraph } = Typography

export default function FuelTankMonitoringPage() {
  const router = useRouter()
  const { isDarkMode } = useTheme()

  const technologies = [
    'React + TypeScript',
    'Node.js + WebSocket',
    'Cloud Database',
    'IoT Sensors',
    'Real-time Analytics',
    'Mobile Dashboards'
  ]

  const features = [
    'Credit-based fuel dispensing with automatic pump control',
    'Real-time theft detection and anomaly alerts',
    'Remote Finance/Admin dashboard for oversight',
    'Pattern analysis and behavioral learning',
    'Hardware integration with fuel flow meters',
    'Multi-factor authentication and role-based access control'
  ]

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SimpleNavbar />
      <Content style={{
        marginTop: '64px',
        background: isDarkMode ? '#0f172a' : '#ffffff'
      }}>
        {/* Hero Section */}
        <div style={{
          background: isDarkMode
            ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
            : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          padding: 'clamp(40px, 8vw, 80px) clamp(16px, 4vw, 24px)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Button
              icon={<ArrowLeftOutlined />}
              onClick={() => router.push('/')}
              style={{
                marginBottom: '32px',
                borderRadius: '8px',
                border: 'none',
                background: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                color: isDarkMode ? '#fff' : '#000'
              }}
            >
              Back to Home
            </Button>

            <div style={{
              display: 'inline-block',
              padding: '8px 20px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
              color: 'white',
              fontSize: '14px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: '24px'
            }}>
              In Delivery
            </div>

            <Title level={1} style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              marginBottom: '24px',
              background: 'var(--industrix-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Fuel Tank Monitoring & Theft Prevention System
            </Title>

            <Paragraph style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              lineHeight: 1.6,
              color: isDarkMode ? '#94a3b8' : '#64748b',
              maxWidth: '900px',
              marginBottom: '32px'
            }}>
              Credit-based fuel dispensing system with real-time anomaly detection,
              remote oversight dashboard, and intelligent theft prevention for industrial
              operations.
            </Paragraph>

            {/* Technologies */}
            <div style={{ marginBottom: '24px' }}>
              <Title level={5} style={{
                fontSize: '14px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '16px',
                color: isDarkMode ? '#e2e8f0' : '#1e293b'
              }}>
                Technology Stack
              </Title>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {technologies.map((tech, index) => (
                  <Tag
                    key={index}
                    style={{
                      padding: '8px 16px',
                      fontSize: '14px',
                      borderRadius: '8px',
                      background: isDarkMode
                        ? 'rgba(16, 121, 255, 0.2)'
                        : 'rgba(16, 121, 255, 0.1)',
                      color: '#1079FF',
                      border: '1px solid rgba(16, 121, 255, 0.3)',
                      fontWeight: 500
                    }}
                  >
                    {tech}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: 'clamp(40px, 8vw, 60px) clamp(16px, 4vw, 24px)'
        }}>
          {/* The Problem */}
          <section style={{ marginBottom: '60px' }}>
            <Title level={2} style={{
              fontSize: '2rem',
              marginBottom: '24px',
              color: isDarkMode ? '#e2e8f0' : '#1e293b'
            }}>
              The Problem
            </Title>
            <Paragraph style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: isDarkMode ? '#cbd5e1' : '#475569'
            }}>
              Industrial facilities face significant fuel theft and unauthorized consumption
              issues. Traditional monitoring systems only detect theft after it occurs, while
              manual oversight is inefficient and provides no real-time controls. Companies need
              proactive prevention measures combined with remote administrative oversight.
            </Paragraph>
          </section>

          {/* The Solution */}
          <section style={{ marginBottom: '60px' }}>
            <Title level={2} style={{
              fontSize: '2rem',
              marginBottom: '24px',
              color: isDarkMode ? '#e2e8f0' : '#1e293b'
            }}>
              The Solution
            </Title>
            <Paragraph style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: isDarkMode ? '#cbd5e1' : '#475569',
              marginBottom: '32px'
            }}>
              We built a credit-based fuel dispensing system that prevents theft before it happens.
              The system integrates with existing fuel flow meters using industrial IoT hardware
              at each fuel station. Real-time data streams to cloud servers where advanced analytics
              detect patterns and anomalies. Finance and operations teams access remote dashboards
              with theft detection, pattern analysis, and automated alerts.
            </Paragraph>

            <Row gutter={[24, 24]}>
              {features.map((feature, index) => (
                <Col xs={24} md={12} key={index}>
                  <Card
                    style={{
                      border: 'none',
                      borderRadius: '12px',
                      background: isDarkMode
                        ? 'rgba(30, 41, 59, 0.5)'
                        : 'rgba(255, 255, 255, 0.8)',
                      height: '100%'
                    }}
                  >
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <CheckCircleOutlined style={{
                        color: '#1079FF',
                        fontSize: '20px',
                        marginTop: '4px'
                      }} />
                      <Paragraph style={{
                        fontSize: '15px',
                        lineHeight: 1.6,
                        margin: 0,
                        color: isDarkMode ? '#e2e8f0' : '#1e293b'
                      }}>
                        {feature}
                      </Paragraph>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>

          {/* Technical Architecture */}
          <section style={{ marginBottom: '60px' }}>
            <Title level={2} style={{
              fontSize: '2rem',
              marginBottom: '24px',
              color: isDarkMode ? '#e2e8f0' : '#1e293b'
            }}>
              Technical Architecture
            </Title>
            <Card
              style={{
                border: 'none',
                borderRadius: '16px',
                background: isDarkMode
                  ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.7))'
                  : 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
                padding: '24px'
              }}
            >
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                {[
                  { layer: 'Hardware Layer', desc: 'Industrial IoT devices with fuel flow meter integration and edge computing' },
                  { layer: 'Communication Layer', desc: 'Real-time data streaming with automatic reconnection and failover' },
                  { layer: 'Backend Layer', desc: 'Cloud servers with transactional and time-series databases' },
                  { layer: 'Analytics Layer', desc: 'Pattern analysis engine with anomaly detection algorithms' },
                  { layer: 'Frontend Layer', desc: 'React admin dashboard with mobile-responsive design' }
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '16px',
                      borderRadius: '8px',
                      background: isDarkMode
                        ? 'rgba(16, 121, 255, 0.1)'
                        : 'rgba(16, 121, 255, 0.05)',
                      borderLeft: '4px solid #1079FF'
                    }}
                  >
                    <Title level={5} style={{
                      margin: 0,
                      marginBottom: '8px',
                      color: '#1079FF'
                    }}>
                      {item.layer}
                    </Title>
                    <Paragraph style={{
                      margin: 0,
                      color: isDarkMode ? '#cbd5e1' : '#475569'
                    }}>
                      {item.desc}
                    </Paragraph>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Photos Section - Placeholder */}
          <section style={{ marginBottom: '60px' }}>
            <Title level={2} style={{
              fontSize: '2rem',
              marginBottom: '24px',
              color: isDarkMode ? '#e2e8f0' : '#1e293b'
            }}>
              Project Photos
            </Title>
            <Card
              style={{
                border: '2px dashed',
                borderColor: isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
                borderRadius: '16px',
                background: isDarkMode
                  ? 'rgba(30, 41, 59, 0.3)'
                  : 'rgba(248, 250, 252, 0.5)',
                padding: '60px 24px',
                textAlign: 'center'
              }}
            >
              <RocketOutlined style={{
                fontSize: '48px',
                color: isDarkMode ? '#64748b' : '#94a3b8',
                marginBottom: '16px'
              }} />
              <Paragraph style={{
                fontSize: '1.1rem',
                color: isDarkMode ? '#64748b' : '#94a3b8'
              }}>
                Hardware installation photos coming soon
              </Paragraph>
            </Card>
          </section>

          {/* CTA */}
          <Card
            style={{
              border: 'none',
              borderRadius: '16px',
              background: isDarkMode
                ? 'linear-gradient(145deg, rgba(16, 121, 255, 0.1), rgba(41, 197, 255, 0.05))'
                : 'linear-gradient(145deg, rgba(16, 121, 255, 0.05), rgba(41, 197, 255, 0.02))',
              padding: '40px 24px',
              textAlign: 'center'
            }}
          >
            <Title level={3} style={{
              marginBottom: '16px',
              color: isDarkMode ? '#e2e8f0' : '#1e293b'
            }}>
              Need a Similar Solution?
            </Title>
            <Paragraph style={{
              fontSize: '1.1rem',
              marginBottom: '32px',
              color: isDarkMode ? '#94a3b8' : '#64748b',
              maxWidth: '600px',
              margin: '0 auto 32px'
            }}>
              We can build custom theft prevention and monitoring systems tailored to your specific industrial needs.
            </Paragraph>
            <Space size="large">
              <Button
                type="primary"
                size="large"
                onClick={() => router.push('/#contact')}
                style={{
                  height: '48px',
                  paddingLeft: '32px',
                  paddingRight: '32px',
                  borderRadius: '12px',
                  background: 'var(--industrix-gradient)',
                  border: 'none',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                Get In Touch
              </Button>
              <Button
                size="large"
                onClick={() => router.push('/')}
                style={{
                  height: '48px',
                  paddingLeft: '32px',
                  paddingRight: '32px',
                  borderRadius: '12px',
                  borderWidth: '2px',
                  borderColor: '#1079FF',
                  color: '#1079FF',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                View More Projects
              </Button>
            </Space>
          </Card>
        </div>
      </Content>
      <Footer />
    </Layout>
  )
}
