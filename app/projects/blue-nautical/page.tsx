'use client'

import React from 'react'
import { Layout, Typography, Row, Col, Button, Space } from 'antd'
import { ArrowLeftOutlined, CheckCircleOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import SimpleNavbar from '@/components/SimpleNavbar'
import Footer from '@/components/Footer'

const { Content } = Layout
const { Title, Paragraph } = Typography

export default function BlueNauticalPage() {
  const router = useRouter()

  const features = [
    'Multi-location seafood intake & dispatch tracking',
    'GPS-enforced geolocation security to prevent fraud',
    'Mandatory photo documentation at each logistics stage',
    'Automated weight discrepancy detection with admin review',
    'Real-time cold storage warehouse tracking (Jakarta & Bali)',
    'Mobile-first responsive design for field operations'
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
                padding: '6px 12px',
                borderRadius: '16px',
                background: 'rgba(245, 158, 11, 0.15)',
                color: '#f59e0b',
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
              background: 'linear-gradient(135deg, #F62A3A, #F85B62)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Blue Nautical Cold Storage Logistics
            </Title>

            <Paragraph style={{
              fontSize: 'clamp(15px, 3vw, 17px)',
              lineHeight: 1.6,
              color: '#94a3b8',
              maxWidth: '700px'
            }}>
              Mobile-first logistics tracking app with GPS geofencing and anti-fraud
              security for seafood operations between Jakarta and Bali warehouses.
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
              Blue Nautical&apos;s manual tracking system was prone to fraud - drivers could
              report incorrect locations, weights, and skip documentation. This resulted
              in inventory discrepancies across their supply chain.
            </Paragraph>
          </section>

          {/* The Solution */}
          <section style={{ marginBottom: '48px' }}>
            <Title level={2} style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#f1f5f9' }}>
              The Solution
            </Title>
            <Paragraph style={{ fontSize: '15px', lineHeight: 1.7, color: '#cbd5e1', marginBottom: '24px' }}>
              A mobile-first app with GPS geofencing that enforces location-based actions.
              Every transaction requires photo documentation, and weight discrepancies
              trigger automatic admin reviews.
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
                    <CheckCircleOutlined style={{ color: '#F62A3A', fontSize: '18px', marginTop: '2px' }} />
                    <span style={{ fontSize: '14px', color: '#e2e8f0', lineHeight: 1.5 }}>{feature}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </section>

          {/* How It Works */}
          <section style={{ marginBottom: '48px' }}>
            <Title level={2} style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#f1f5f9' }}>
              How It Works
            </Title>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { step: '1. GPS Verification', desc: 'Driver must be physically at warehouse (verified by geofencing)' },
                { step: '2. Photo Documentation', desc: 'Mandatory photos of seafood condition before intake/dispatch' },
                { step: '3. Weight Recording', desc: 'Record actual weight and compare with expected weight' },
                { step: '4. Automated Review', desc: 'System flags discrepancies and notifies admins' },
                { step: '5. Real-time Sync', desc: 'All transactions synced across Jakarta and Bali warehouses' }
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: '16px',
                    borderRadius: '8px',
                    background: 'rgba(246, 42, 58, 0.08)',
                    borderLeft: '3px solid #F62A3A'
                  }}
                >
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#F62A3A', marginBottom: '4px' }}>
                    {item.step}
                  </div>
                  <div style={{ fontSize: '13px', color: '#94a3b8' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Impact */}
          <section style={{ marginBottom: '48px' }}>
            <Title level={2} style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#f1f5f9' }}>
              Impact
            </Title>
            <Row gutter={[16, 16]}>
              {[
                { metric: 'Location Fraud', value: 'Eliminated', desc: 'GPS enforcement prevents fake reports' },
                { metric: 'Documentation', value: '100%', desc: 'Complete photo evidence for all transactions' },
                { metric: 'Accuracy', value: 'Improved', desc: 'Automated weight discrepancy detection' }
              ].map((item, index) => (
                <Col xs={24} md={8} key={index}>
                  <div style={{
                    background: '#1e293b',
                    borderRadius: '12px',
                    padding: '24px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>
                      {item.metric}
                    </div>
                    <div style={{ fontSize: '2rem', fontWeight: 700, color: '#F62A3A', marginBottom: '8px' }}>
                      {item.value}
                    </div>
                    <div style={{ fontSize: '13px', color: '#94a3b8' }}>{item.desc}</div>
                  </div>
                </Col>
              ))}
            </Row>
          </section>

          {/* CTA */}
          <div style={{
            padding: '32px 24px',
            background: 'rgba(246, 42, 58, 0.08)',
            border: '1px solid rgba(246, 42, 58, 0.15)',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <Title level={3} style={{ fontSize: '1.25rem', marginBottom: '8px', color: '#f1f5f9' }}>
              Need a Logistics Tracking Solution?
            </Title>
            <Paragraph style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '24px' }}>
              We build custom logistics apps with GPS security and documentation features.
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
                  background: 'linear-gradient(135deg, #F62A3A, #F85B62)',
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
                  border: '2px solid #F62A3A',
                  color: '#F62A3A',
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
