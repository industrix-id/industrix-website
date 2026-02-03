'use client'

import React from 'react'
import { Layout, Typography, Row, Col, Button, Space } from 'antd'
import { ArrowLeftOutlined, RocketOutlined, CheckCircleOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import SimpleNavbar from '@/components/SimpleNavbar'
import Footer from '@/components/Footer'

const { Content } = Layout
const { Title, Paragraph } = Typography

export default function FuelTankMonitoringPage() {
  const router = useRouter()

  const features = [
    'Credit-based fuel dispensing with automatic pump control',
    'Real-time theft detection and anomaly alerts',
    'Remote Finance/Admin dashboard for oversight',
    'Pattern analysis and behavioral learning',
    'Hardware integration with fuel flow meters',
    'Multi-factor authentication and role-based access control'
  ]

  return (
    <Layout style={{ minHeight: '100vh', background: '#0f172a' }}>
      <SimpleNavbar />
      <Content style={{ marginTop: '64px' }}>
        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          padding: '48px 12px'
        }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
              <Button
                icon={<ArrowLeftOutlined />}
                onClick={() => router.push('/')}
                style={{
                  borderRadius: '8px',
                  border: 'none',
                  background: 'rgba(255,255,255,0.1)',
                  color: '#fff'
                }}
              >
                Back
              </Button>
              <div style={{
                padding: '6px 14px',
                borderRadius: '16px',
                background: 'rgba(34, 197, 94, 0.15)',
                color: '#22c55e',
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase'
              }}>
                In Production
              </div>
            </div>

            <Title level={1} style={{
              fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
              fontWeight: 800,
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #1079FF, #29C5FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Fuel Tank Monitoring & Theft Prevention
            </Title>

            <Paragraph style={{
              fontSize: 'clamp(15px, 3vw, 17px)',
              lineHeight: 1.6,
              color: '#94a3b8',
              maxWidth: '700px'
            }}>
              Credit-based fuel dispensing system with real-time anomaly detection,
              remote oversight dashboard, and intelligent theft prevention.
            </Paragraph>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '48px 12px' }}>
          {/* The Problem */}
          <section style={{ marginBottom: '48px' }}>
            <Title level={2} style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#f1f5f9' }}>
              The Problem
            </Title>
            <Paragraph style={{ fontSize: '15px', lineHeight: 1.7, color: '#cbd5e1' }}>
              Industrial facilities face significant fuel theft and unauthorized consumption.
              Traditional monitoring only detects theft after it occurs. Companies need
              proactive prevention with remote administrative oversight.
            </Paragraph>
          </section>

          {/* The Solution */}
          <section style={{ marginBottom: '48px' }}>
            <Title level={2} style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#f1f5f9' }}>
              The Solution
            </Title>
            <Paragraph style={{ fontSize: '15px', lineHeight: 1.7, color: '#cbd5e1', marginBottom: '24px' }}>
              A credit-based fuel dispensing system that prevents theft before it happens.
              IoT hardware integrates with fuel flow meters, streaming data to cloud servers
              where analytics detect patterns and anomalies.
            </Paragraph>

            <Row gutter={[16, 16]}>
              {features.map((feature, index) => (
                <Col xs={24} sm={12} key={index}>
                  <div style={{
                    display: 'flex',
                    gap: '12px',
                    padding: '16px',
                    background: '#1e293b',
                    borderRadius: '12px',
                    height: '100%'
                  }}>
                    <CheckCircleOutlined style={{ color: '#1079FF', fontSize: '18px', marginTop: '2px' }} />
                    <span style={{ fontSize: '14px', color: '#e2e8f0', lineHeight: 1.5 }}>{feature}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </section>

          {/* Technical Architecture */}
          <section style={{ marginBottom: '48px' }}>
            <Title level={2} style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#f1f5f9' }}>
              Technical Architecture
            </Title>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { layer: 'Hardware', desc: 'Industrial IoT devices with fuel flow meter integration' },
                { layer: 'Communication', desc: 'Real-time data streaming with automatic failover' },
                { layer: 'Backend', desc: 'Cloud servers with transactional and time-series databases' },
                { layer: 'Analytics', desc: 'Pattern analysis with anomaly detection algorithms' },
                { layer: 'Frontend', desc: 'React admin dashboard with mobile-responsive design' }
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: '16px',
                    borderRadius: '8px',
                    background: 'rgba(16, 121, 255, 0.08)',
                    borderLeft: '3px solid #1079FF'
                  }}
                >
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#1079FF', marginBottom: '4px' }}>
                    {item.layer}
                  </div>
                  <div style={{ fontSize: '13px', color: '#94a3b8' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Photos Placeholder */}
          <section style={{ marginBottom: '48px' }}>
            <Title level={2} style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#f1f5f9' }}>
              Project Photos
            </Title>
            <div style={{
              border: '2px dashed rgba(255,255,255,0.15)',
              borderRadius: '12px',
              padding: '48px 24px',
              textAlign: 'center'
            }}>
              <RocketOutlined style={{ fontSize: '36px', color: '#64748b', marginBottom: '12px' }} />
              <p style={{ color: '#64748b', margin: 0 }}>Hardware installation photos coming soon</p>
            </div>
          </section>

          {/* CTA */}
          <div style={{
            padding: '32px 24px',
            background: 'rgba(16, 121, 255, 0.08)',
            border: '1px solid rgba(16, 121, 255, 0.15)',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <Title level={3} style={{ fontSize: '1.25rem', marginBottom: '8px', color: '#f1f5f9' }}>
              Need a Similar Solution?
            </Title>
            <Paragraph style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '24px' }}>
              We build custom monitoring systems tailored to your industrial needs.
            </Paragraph>
            <Space size="middle" wrap style={{ justifyContent: 'center' }}>
              <Button
                type="primary"
                size="large"
                onClick={() => router.push('/#contact')}
                style={{
                  height: '44px',
                  padding: '0 24px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #1079FF, #29C5FF)',
                  border: 'none',
                  fontWeight: 600
                }}
              >
                Get In Touch
              </Button>
              <Button
                size="large"
                onClick={() => router.push('/')}
                style={{
                  height: '44px',
                  padding: '0 24px',
                  borderRadius: '8px',
                  border: '2px solid #1079FF',
                  color: '#1079FF',
                  background: 'transparent',
                  fontWeight: 600
                }}
              >
                View More Projects
              </Button>
            </Space>
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  )
}
