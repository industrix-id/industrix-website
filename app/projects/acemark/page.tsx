'use client'

import React from 'react'
import { Layout, Typography, Row, Col, Button, Space } from 'antd'
import { ArrowLeftOutlined, GlobalOutlined, CheckCircleOutlined, LinkOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import SimpleNavbar from '@/components/SimpleNavbar'
import Footer from '@/components/Footer'

const { Content } = Layout
const { Title, Paragraph } = Typography

export default function AcemarkPage() {
  const router = useRouter()

  const features = [
    'Modern, professional website design for IP law firm',
    'Multi-language support (ID/EN/JP/CN/TW)',
    'Responsive design optimized for all devices',
    'Service showcase and portfolio sections',
    'Team member profiles and credentials',
    'Contact forms and inquiry system',
    'SEO optimization for legal services',
    'Fast performance with Next.js'
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
                background: 'rgba(34, 197, 94, 0.15)',
                color: '#22c55e',
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase'
              }}>
                Deployed
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
              AceMark IP Law Firm Website
            </Title>

            <Paragraph style={{
              fontSize: 'clamp(15px, 3vw, 17px)',
              lineHeight: 1.6,
              color: '#94a3b8',
              maxWidth: '700px',
              marginBottom: '24px'
            }}>
              Professional corporate website for Indonesia&apos;s leading intellectual property law firm,
              founded in 1951. Modern, multilingual platform showcasing legal services and expertise.
            </Paragraph>

            <Button
              type="primary"
              size="large"
              icon={<LinkOutlined />}
              onClick={() => window.open('https://www.acemark-ip.com/en', '_blank')}
              style={{
                height: '44px',
                padding: '0 24px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #1079FF, #29C5FF)',
                border: 'none',
                fontWeight: 600
              }}
            >
              Visit Live Site
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '48px 12px' }}>
          {/* About */}
          <section style={{ marginBottom: '48px' }}>
            <Title level={2} style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#f1f5f9' }}>
              About AceMark
            </Title>
            <Paragraph style={{ fontSize: '15px', lineHeight: 1.7, color: '#cbd5e1' }}>
              AceMark is a leading intellectual property law firm established in 1951 in Indonesia.
              With over 300 professionals, they provide comprehensive IP legal services including
              patent prosecution, trademark registration, copyright protection, and IP litigation.
            </Paragraph>
          </section>

          {/* Features */}
          <section style={{ marginBottom: '48px' }}>
            <Title level={2} style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#f1f5f9' }}>
              Website Features
            </Title>
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

          {/* Website Structure */}
          <section style={{ marginBottom: '48px' }}>
            <Title level={2} style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#f1f5f9' }}>
              Website Structure
            </Title>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { page: 'Homepage', desc: 'Hero section, service overview, awards, and client testimonials' },
                { page: 'Services', desc: 'Detailed IP legal service offerings across patents, trademarks, and copyrights' },
                { page: 'About Us', desc: 'Firm history, mission, values, and professional credentials' },
                { page: 'Team', desc: 'Attorney profiles, expertise areas, and professional backgrounds' },
                { page: 'Contact', desc: 'Contact forms, office locations, and inquiry submission' }
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
                    {item.page}
                  </div>
                  <div style={{ fontSize: '13px', color: '#94a3b8' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Live Site */}
          <section style={{ marginBottom: '48px' }}>
            <div style={{
              padding: '32px 24px',
              background: 'rgba(34, 197, 94, 0.08)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <GlobalOutlined style={{ fontSize: '36px', color: '#22c55e', marginBottom: '12px' }} />
              <Title level={3} style={{ fontSize: '1.25rem', marginBottom: '8px', color: '#f1f5f9' }}>
                Website is Live
              </Title>
              <Paragraph style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '24px' }}>
                The AceMark website is now deployed and serving clients worldwide.
              </Paragraph>
              <Button
                type="primary"
                size="large"
                icon={<LinkOutlined />}
                onClick={() => window.open('https://www.acemark-ip.com/en', '_blank')}
                style={{
                  height: '44px',
                  padding: '0 24px',
                  borderRadius: '8px',
                  background: '#22c55e',
                  border: 'none',
                  fontWeight: 600
                }}
              >
                Visit acemark-ip.com
              </Button>
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
              Need a Professional Website?
            </Title>
            <Paragraph style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '24px' }}>
              We build modern, responsive websites for businesses and professional services.
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
