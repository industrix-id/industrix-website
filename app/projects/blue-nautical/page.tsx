'use client'

import React from 'react'
import { Layout, Typography, Card, Row, Col, Tag, Button, Space } from 'antd'
import { ArrowLeftOutlined, CheckCircleOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import { useTheme } from '@/app/theme/ThemeProvider'
import SimpleNavbar from '@/components/SimpleNavbar'
import Footer from '@/components/Footer'

const { Content } = Layout
const { Title, Paragraph } = Typography

export default function BlueNauticalPage() {
  const router = useRouter()
  const { isDarkMode } = useTheme()

  const technologies = [
    'React + TypeScript',
    'GPS Geofencing',
    'Mobile Photography',
    'Real-time Tracking',
    'PostgreSQL'
  ]

  const features = [
    'Multi-location seafood intake & dispatch tracking',
    'GPS-enforced geolocation security to prevent fraud',
    'Mandatory photo documentation at each logistics stage',
    'Automated weight discrepancy detection with admin review workflow',
    'Real-time cold storage warehouse tracking (Jakarta & Bali)',
    'Mobile-first responsive design for field operations'
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
          padding: '40px 24px 100px',
          minHeight: '500px'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* Back Button - Separated */}
            <div style={{ marginBottom: '64px' }}>
              <Button
                icon={<ArrowLeftOutlined />}
                onClick={() => router.push('/')}
                size="large"
                style={{
                  height: '44px',
                  paddingLeft: '24px',
                  paddingRight: '24px',
                  borderRadius: '10px',
                  border: isDarkMode ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(0,0,0,0.1)',
                  background: isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.03)',
                  color: isDarkMode ? '#e2e8f0' : '#1e293b',
                  fontWeight: 500,
                  transition: 'all 0.3s ease'
                }}
              >
                Back to Home
              </Button>
            </div>

            {/* Badge */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{
                display: 'inline-block',
                padding: '10px 24px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                color: 'white',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: '0 4px 16px rgba(245, 158, 11, 0.3)'
              }}>
                IN PRODUCTION
              </div>
            </div>

            {/* Title */}
            <Title level={1} style={{
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              fontWeight: 900,
              marginBottom: '32px',
              lineHeight: 1.15,
              color: isDarkMode ? '#ffffff' : '#0f172a'
            }}>
              <span style={{
                background: 'var(--industrix-gradient-red)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block'
              }}>
                Blue Nautical
              </span>
              <br />
              Cold Storage Logistics App
            </Title>

            {/* Description */}
            <Paragraph style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: 1.8,
              color: isDarkMode ? '#cbd5e1' : '#475569',
              maxWidth: '850px',
              marginBottom: '48px',
              fontWeight: 400
            }}>
              Mobile-first web application for tracking seafood logistics operations between
              Jakarta and Bali warehouses with anti-fraud GPS security features and photo
              documentation requirements.
            </Paragraph>

            {/* Technologies */}
            <div>
              <Title level={5} style={{
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '20px',
                color: isDarkMode ? '#94a3b8' : '#64748b',
                opacity: 0.8
              }}>
                Technology Stack
              </Title>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {technologies.map((tech, index) => (
                  <Tag
                    key={index}
                    style={{
                      padding: '10px 20px',
                      fontSize: '14px',
                      borderRadius: '10px',
                      background: isDarkMode
                        ? 'rgba(246, 42, 58, 0.15)'
                        : 'rgba(246, 42, 58, 0.08)',
                      color: isDarkMode ? '#fca5a5' : '#dc2626',
                      border: `1px solid ${isDarkMode ? 'rgba(246, 42, 58, 0.3)' : 'rgba(246, 42, 58, 0.2)'}`,
                      fontWeight: 600
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
          padding: '60px 24px'
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
              Blue Nautical operates cold storage warehouses in Jakarta and Bali for seafood
              logistics. Their manual tracking system was prone to fraud - drivers could
              report incorrect locations, weights, and skip proper documentation. This resulted
              in inventory discrepancies and accountability issues across their supply chain.
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
              We built a mobile-first logistics tracking app with GPS geofencing that enforces
              location-based actions. Drivers and warehouse staff must be physically at the
              correct location to log seafood intake or dispatch. Every transaction requires
              photo documentation, and weight discrepancies trigger automatic admin reviews.
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
                        color: '#F62A3A',
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

          {/* Key Features */}
          <section style={{ marginBottom: '60px' }}>
            <Title level={2} style={{
              fontSize: '2rem',
              marginBottom: '24px',
              color: isDarkMode ? '#e2e8f0' : '#1e293b'
            }}>
              How It Works
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
                  {
                    step: 'Step 1: GPS Verification',
                    desc: 'Driver must be physically at warehouse location (verified by GPS geofencing)'
                  },
                  {
                    step: 'Step 2: Photo Documentation',
                    desc: 'Mandatory photos of seafood condition and packaging before intake/dispatch'
                  },
                  {
                    step: 'Step 3: Weight Recording',
                    desc: 'Record actual weight and compare with expected weight from previous stage'
                  },
                  {
                    step: 'Step 4: Automated Review',
                    desc: 'System flags discrepancies and notifies admins for review and approval'
                  },
                  {
                    step: 'Step 5: Real-time Tracking',
                    desc: 'All transactions synced in real-time across Jakarta and Bali warehouses'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '16px',
                      borderRadius: '8px',
                      background: isDarkMode
                        ? 'rgba(246, 42, 58, 0.1)'
                        : 'rgba(246, 42, 58, 0.05)',
                      borderLeft: '4px solid #F62A3A'
                    }}
                  >
                    <Title level={5} style={{
                      margin: 0,
                      marginBottom: '8px',
                      color: '#F62A3A'
                    }}>
                      {item.step}
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

          {/* Impact */}
          <section style={{ marginBottom: '60px' }}>
            <Title level={2} style={{
              fontSize: '2rem',
              marginBottom: '24px',
              color: isDarkMode ? '#e2e8f0' : '#1e293b'
            }}>
              Impact
            </Title>
            <Row gutter={[24, 24]}>
              {[
                { metric: 'Location Fraud', value: 'Eliminated', desc: 'GPS enforcement prevents fake location reports' },
                { metric: 'Documentation', value: '100%', desc: 'Complete photo evidence for all transactions' },
                { metric: 'Inventory Accuracy', value: 'Improved', desc: 'Automated weight discrepancy detection' }
              ].map((item, index) => (
                <Col xs={24} md={8} key={index}>
                  <Card
                    style={{
                      border: 'none',
                      borderRadius: '12px',
                      background: isDarkMode
                        ? 'rgba(30, 41, 59, 0.5)'
                        : 'rgba(255, 255, 255, 0.8)',
                      textAlign: 'center',
                      padding: '24px'
                    }}
                  >
                    <Title level={4} style={{
                      color: isDarkMode ? '#64748b' : '#94a3b8',
                      fontSize: '14px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      marginBottom: '12px'
                    }}>
                      {item.metric}
                    </Title>
                    <Title level={2} style={{
                      color: '#F62A3A',
                      fontSize: '2.5rem',
                      marginBottom: '12px'
                    }}>
                      {item.value}
                    </Title>
                    <Paragraph style={{
                      color: isDarkMode ? '#cbd5e1' : '#475569',
                      margin: 0
                    }}>
                      {item.desc}
                    </Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>

          {/* CTA */}
          <Card
            style={{
              border: 'none',
              borderRadius: '16px',
              background: isDarkMode
                ? 'linear-gradient(145deg, rgba(246, 42, 58, 0.1), rgba(248, 91, 98, 0.05))'
                : 'linear-gradient(145deg, rgba(246, 42, 58, 0.05), rgba(248, 91, 98, 0.02))',
              padding: '40px 24px',
              textAlign: 'center'
            }}
          >
            <Title level={3} style={{
              marginBottom: '16px',
              color: isDarkMode ? '#e2e8f0' : '#1e293b'
            }}>
              Need a Logistics Tracking Solution?
            </Title>
            <Paragraph style={{
              fontSize: '1.1rem',
              marginBottom: '32px',
              color: isDarkMode ? '#94a3b8' : '#64748b',
              maxWidth: '600px',
              margin: '0 auto 32px'
            }}>
              We can build custom logistics and supply chain tracking apps with GPS security
              and documentation features.
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
                  background: 'var(--industrix-gradient-red)',
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
                  borderColor: '#F62A3A',
                  color: '#F62A3A',
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
