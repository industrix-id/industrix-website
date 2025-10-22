'use client'

import React from 'react'
import { Layout, Typography, Card, Row, Col, Tag, Button, Space } from 'antd'
import { ArrowLeftOutlined, GlobalOutlined, CheckCircleOutlined, LinkOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import { useTheme } from '@/app/theme/ThemeProvider'
import SimpleNavbar from '@/components/SimpleNavbar'
import Footer from '@/components/Footer'

const { Content } = Layout
const { Title, Paragraph } = Typography

export default function AcemarkPage() {
  const router = useRouter()
  const { isDarkMode } = useTheme()

  const technologies = [
    'Next.js',
    'React + TypeScript',
    'Tailwind CSS',
    'Responsive Design',
    'Multi-language (ID/EN)'
  ]

  const features = [
    'Modern, professional website design for IP law firm',
    'Multi-language support (Indonesian & English)',
    'Responsive design optimized for all devices',
    'Service showcase and portfolio sections',
    'Team member profiles and credentials',
    'Contact forms and inquiry system',
    'SEO optimization for legal services',
    'Fast performance with Next.js'
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
          padding: '80px 24px'
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
              In Development
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
              AceMark IP Law Firm Website
            </Title>

            <Paragraph style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              lineHeight: 1.6,
              color: isDarkMode ? '#94a3b8' : '#64748b',
              maxWidth: '900px',
              marginBottom: '32px'
            }}>
              Professional corporate website for Indonesia's leading intellectual property law firm,
              founded in 1951. Modern, bilingual platform showcasing legal services, team expertise,
              and client success stories.
            </Paragraph>

            {/* Technologies */}
            <div style={{ marginBottom: '32px' }}>
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

            {/* Live Preview Link */}
            <Button
              type="primary"
              size="large"
              icon={<LinkOutlined />}
              onClick={() => window.open('https://acemark-website.vercel.app/id', '_blank')}
              style={{
                height: '48px',
                paddingLeft: '24px',
                paddingRight: '24px',
                borderRadius: '12px',
                background: 'var(--industrix-gradient)',
                border: 'none',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              View Live Preview
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '60px 24px'
        }}>
          {/* About the Client */}
          <section style={{ marginBottom: '60px' }}>
            <Title level={2} style={{
              fontSize: '2rem',
              marginBottom: '24px',
              color: isDarkMode ? '#e2e8f0' : '#1e293b'
            }}>
              About AceMark
            </Title>
            <Paragraph style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: isDarkMode ? '#cbd5e1' : '#475569',
              marginBottom: '24px'
            }}>
              AceMark is a leading intellectual property law firm established in 1951 in Indonesia.
              With over 300 professionals holding scientific degrees, they provide comprehensive
              IP legal services including patent prosecution, trademark registration, copyright
              protection, and IP litigation.
            </Paragraph>
            <Paragraph style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: isDarkMode ? '#cbd5e1' : '#475569'
            }}>
              The firm serves innovators, creators, and businesses seeking to protect and monetize
              their intellectual assets across multiple technology sectors including AI, blockchain,
              and biotechnology.
            </Paragraph>
          </section>

          {/* The Solution */}
          <section style={{ marginBottom: '60px' }}>
            <Title level={2} style={{
              fontSize: '2rem',
              marginBottom: '24px',
              color: isDarkMode ? '#e2e8f0' : '#1e293b'
            }}>
              Our Approach
            </Title>
            <Paragraph style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: isDarkMode ? '#cbd5e1' : '#475569',
              marginBottom: '32px'
            }}>
              We're building a modern, professional website that reflects AceMark's position as
              Indonesia's premier IP law firm. The site features a clean design, bilingual content,
              and optimized user experience for both potential clients and legal professionals.
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

          {/* Key Pages */}
          <section style={{ marginBottom: '60px' }}>
            <Title level={2} style={{
              fontSize: '2rem',
              marginBottom: '24px',
              color: isDarkMode ? '#e2e8f0' : '#1e293b'
            }}>
              Website Structure
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
                    page: 'Homepage',
                    desc: 'Hero section, service overview, awards, and client testimonials'
                  },
                  {
                    page: 'Services',
                    desc: 'Detailed IP legal service offerings across patents, trademarks, and copyrights'
                  },
                  {
                    page: 'About Us',
                    desc: 'Firm history, mission, values, and professional credentials'
                  },
                  {
                    page: 'Team',
                    desc: 'Attorney profiles, expertise areas, and professional backgrounds'
                  },
                  {
                    page: 'Contact',
                    desc: 'Contact forms, office locations, and inquiry submission'
                  }
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
                      {item.page}
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

          {/* Development Status */}
          <section style={{ marginBottom: '60px' }}>
            <Title level={2} style={{
              fontSize: '2rem',
              marginBottom: '24px',
              color: isDarkMode ? '#e2e8f0' : '#1e293b'
            }}>
              Development Status
            </Title>
            <Card
              style={{
                border: 'none',
                borderRadius: '16px',
                background: isDarkMode
                  ? 'linear-gradient(145deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.05))'
                  : 'linear-gradient(145deg, rgba(59, 130, 246, 0.05), rgba(37, 99, 235, 0.02))',
                padding: '32px',
                textAlign: 'center'
              }}
            >
              <GlobalOutlined style={{
                fontSize: '48px',
                color: '#3b82f6',
                marginBottom: '16px'
              }} />
              <Title level={3} style={{
                marginBottom: '16px',
                color: isDarkMode ? '#e2e8f0' : '#1e293b'
              }}>
                Currently Under Development
              </Title>
              <Paragraph style={{
                fontSize: '1.1rem',
                color: isDarkMode ? '#94a3b8' : '#64748b',
                marginBottom: '24px'
              }}>
                The AceMark website is actively being developed and refined.
                Visit the live preview to see the latest progress.
              </Paragraph>
              <Button
                type="primary"
                size="large"
                icon={<LinkOutlined />}
                onClick={() => window.open('https://acemark-website.vercel.app/id', '_blank')}
                style={{
                  height: '48px',
                  paddingLeft: '32px',
                  paddingRight: '32px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                  border: 'none',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                View Live Preview
              </Button>
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
              Need a Professional Website?
            </Title>
            <Paragraph style={{
              fontSize: '1.1rem',
              marginBottom: '32px',
              color: isDarkMode ? '#94a3b8' : '#64748b',
              maxWidth: '600px',
              margin: '0 auto 32px'
            }}>
              We build modern, responsive websites for businesses and professional services.
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
