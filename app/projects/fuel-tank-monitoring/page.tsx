'use client'

import React, { useState } from 'react'
import { Layout, Typography, Row, Col, Button, Space } from 'antd'
import { ArrowLeftOutlined, CheckCircleOutlined, CloseOutlined, FolderOpenOutlined, FolderOutlined } from '@ant-design/icons'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import SimpleNavbar from '@/components/SimpleNavbar'
import Footer from '@/components/Footer'

const { Content } = Layout
const { Title, Paragraph } = Typography

export default function FuelTankMonitoringPage() {
  const router = useRouter()
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [openFolder, setOpenFolder] = useState<string | null>(null)

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
          padding: '32px 12px 24px'
        }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
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
                In Production
              </div>
            </div>

            <Title level={1} style={{
              fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
              fontWeight: 800,
              marginBottom: '8px',
              background: 'linear-gradient(135deg, #1079FF, #29C5FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Fuel Tank Monitoring & Theft Prevention
            </Title>

            <Paragraph style={{
              fontSize: 'clamp(14px, 3vw, 16px)',
              lineHeight: 1.5,
              color: '#94a3b8',
              maxWidth: '700px',
              marginBottom: 0
            }}>
              Credit-based fuel dispensing system with real-time anomaly detection,
              remote oversight dashboard, and intelligent theft prevention.
            </Paragraph>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '24px 12px' }}>
          {/* Problem & Solution - Side by Side on Desktop */}
          <Row gutter={[16, 12]} style={{ marginBottom: '24px' }}>
            <Col xs={24} md={12}>
              <div style={{
                padding: '16px',
                background: 'rgba(246, 42, 58, 0.06)',
                border: '1px solid rgba(246, 42, 58, 0.15)',
                borderRadius: '10px',
                height: '100%'
              }}>
                <div style={{
                  display: 'inline-block',
                  padding: '4px 8px',
                  background: 'rgba(246, 42, 58, 0.15)',
                  borderRadius: '4px',
                  marginBottom: '8px'
                }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#F62A3A', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Problem
                  </span>
                </div>
                <Paragraph style={{ fontSize: '14px', lineHeight: 1.6, color: '#cbd5e1', margin: 0 }}>
                  Industrial facilities face significant fuel theft and unauthorized consumption.
                  Traditional monitoring only detects theft after it occurs.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div style={{
                padding: '16px',
                background: 'rgba(34, 197, 94, 0.06)',
                border: '1px solid rgba(34, 197, 94, 0.15)',
                borderRadius: '10px',
                height: '100%'
              }}>
                <div style={{
                  display: 'inline-block',
                  padding: '4px 8px',
                  background: 'rgba(34, 197, 94, 0.15)',
                  borderRadius: '4px',
                  marginBottom: '8px'
                }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Solution
                  </span>
                </div>
                <Paragraph style={{ fontSize: '14px', lineHeight: 1.6, color: '#cbd5e1', margin: 0 }}>
                  Credit-based fuel dispensing with IoT hardware, real-time cloud analytics,
                  and anomaly detection to prevent theft before it happens.
                </Paragraph>
              </div>
            </Col>
          </Row>

          {/* Key Features */}
          <section style={{ marginBottom: '24px' }}>
            <Title level={2} style={{ fontSize: '1rem', marginBottom: '12px', color: '#f1f5f9' }}>
              Key Features
            </Title>
            <Row gutter={[10, 10]}>
              {features.map((feature, index) => (
                <Col xs={24} sm={12} md={8} key={index}>
                  <div style={{
                    display: 'flex',
                    gap: '10px',
                    padding: '12px 14px',
                    background: '#1e293b',
                    borderRadius: '8px',
                    height: '100%'
                  }}>
                    <CheckCircleOutlined style={{ color: '#1079FF', fontSize: '14px', marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ fontSize: '13px', color: '#e2e8f0', lineHeight: 1.5 }}>{feature}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </section>

          {/* Operator Interface - Folder */}
          <section style={{ marginBottom: '16px' }}>
            <div
              onClick={() => setOpenFolder(openFolder === 'operator' ? null : 'operator')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px',
                background: '#1e293b',
                borderRadius: openFolder === 'operator' ? '10px 10px 0 0' : '10px',
                cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.08)',
                borderBottom: openFolder === 'operator' ? 'none' : '1px solid rgba(255,255,255,0.08)'
              }}
            >
              {openFolder === 'operator' ? (
                <FolderOpenOutlined style={{ fontSize: '24px', color: '#1079FF' }} />
              ) : (
                <FolderOutlined style={{ fontSize: '24px', color: '#1079FF' }} />
              )}
              <div style={{ flex: 1 }}>
                <Title level={4} style={{ margin: 0, fontSize: '15px', color: '#f1f5f9' }}>
                  Operator Interface Screenshots
                </Title>
                <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>7 images - Tap to {openFolder === 'operator' ? 'close' : 'open'}</p>
              </div>
              <span style={{ color: '#64748b', fontSize: '20px' }}>{openFolder === 'operator' ? '−' : '+'}</span>
            </div>

            {openFolder === 'operator' && (
              <div style={{
                padding: '16px',
                background: 'rgba(30, 41, 59, 0.5)',
                borderRadius: '0 0 10px 10px',
                border: '1px solid rgba(255,255,255,0.08)',
                borderTop: 'none'
              }}>
                {/* Main screenshot */}
                <div onClick={() => setLightboxImage('/5.jpeg')} style={{ marginBottom: '12px', borderRadius: '8px', overflow: 'hidden', cursor: 'zoom-in' }}>
                  <Image src="/5.jpeg" alt="Fuel dispensing in progress" width={1000} height={600} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                  <div style={{ padding: '10px 12px', background: '#1e293b' }}>
                    <p style={{ margin: 0, fontSize: '12px', color: '#94a3b8' }}>Fuel dispensing in progress - showing live flow rate & volume</p>
                  </div>
                </div>

                <Row gutter={[8, 8]}>
                  <Col xs={12} sm={8}>
                    <div onClick={() => setLightboxImage('/3.jpeg')} style={{ borderRadius: '8px', overflow: 'hidden', background: '#1e293b', cursor: 'zoom-in' }}>
                      <Image src="/3.jpeg" alt="RFID card scan" width={400} height={250} style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                      <div style={{ padding: '8px' }}><p style={{ margin: 0, fontSize: '11px', color: '#94a3b8' }}>RFID Card Scan</p></div>
                    </div>
                  </Col>
                  <Col xs={12} sm={8}>
                    <div onClick={() => setLightboxImage('/6.jpeg')} style={{ borderRadius: '8px', overflow: 'hidden', background: '#1e293b', cursor: 'zoom-in' }}>
                      <Image src="/6.jpeg" alt="System idle" width={400} height={250} style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                      <div style={{ padding: '8px' }}><p style={{ margin: 0, fontSize: '11px', color: '#94a3b8' }}>System Idle</p></div>
                    </div>
                  </Col>
                  <Col xs={12} sm={8}>
                    <div onClick={() => setLightboxImage('/7.jpeg')} style={{ borderRadius: '8px', overflow: 'hidden', background: '#1e293b', cursor: 'zoom-in' }}>
                      <Image src="/7.jpeg" alt="Dispensing paused" width={400} height={250} style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                      <div style={{ padding: '8px' }}><p style={{ margin: 0, fontSize: '11px', color: '#94a3b8' }}>Dispensing Paused</p></div>
                    </div>
                  </Col>
                  <Col xs={12} sm={8}>
                    <div onClick={() => setLightboxImage('/2.jpeg')} style={{ borderRadius: '8px', overflow: 'hidden', background: '#1e293b', cursor: 'zoom-in' }}>
                      <Image src="/2.jpeg" alt="Supervisor OTP entry" width={400} height={250} style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                      <div style={{ padding: '8px' }}><p style={{ margin: 0, fontSize: '11px', color: '#94a3b8' }}>Supervisor OTP</p></div>
                    </div>
                  </Col>
                  <Col xs={12} sm={8}>
                    <div onClick={() => setLightboxImage('/4.jpeg')} style={{ borderRadius: '8px', overflow: 'hidden', background: '#1e293b', cursor: 'zoom-in' }}>
                      <Image src="/4.jpeg" alt="Authentication failed" width={400} height={250} style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                      <div style={{ padding: '8px' }}><p style={{ margin: 0, fontSize: '11px', color: '#94a3b8' }}>Auth Failed</p></div>
                    </div>
                  </Col>
                  <Col xs={12} sm={8}>
                    <div onClick={() => setLightboxImage('/9.jpeg')} style={{ borderRadius: '8px', overflow: 'hidden', background: '#1e293b', cursor: 'zoom-in' }}>
                      <Image src="/9.jpeg" alt="Session complete summary" width={400} height={250} style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                      <div style={{ padding: '8px' }}><p style={{ margin: 0, fontSize: '11px', color: '#94a3b8' }}>Session Complete</p></div>
                    </div>
                  </Col>
                </Row>
              </div>
            )}
          </section>

          {/* Deployment Photos - Folder */}
          <section style={{ marginBottom: '24px' }}>
            <div
              onClick={() => setOpenFolder(openFolder === 'deployment' ? null : 'deployment')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px',
                background: '#1e293b',
                borderRadius: openFolder === 'deployment' ? '10px 10px 0 0' : '10px',
                cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.08)',
                borderBottom: openFolder === 'deployment' ? 'none' : '1px solid rgba(255,255,255,0.08)'
              }}
            >
              {openFolder === 'deployment' ? (
                <FolderOpenOutlined style={{ fontSize: '24px', color: '#22c55e' }} />
              ) : (
                <FolderOutlined style={{ fontSize: '24px', color: '#22c55e' }} />
              )}
              <div style={{ flex: 1 }}>
                <Title level={4} style={{ margin: 0, fontSize: '15px', color: '#f1f5f9' }}>
                  Deployment & Hardware Photos
                </Title>
                <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>5 images - Tap to {openFolder === 'deployment' ? 'close' : 'open'}</p>
              </div>
              <span style={{ color: '#64748b', fontSize: '20px' }}>{openFolder === 'deployment' ? '−' : '+'}</span>
            </div>

            {openFolder === 'deployment' && (
              <div style={{
                padding: '16px',
                background: 'rgba(30, 41, 59, 0.5)',
                borderRadius: '0 0 10px 10px',
                border: '1px solid rgba(255,255,255,0.08)',
                borderTop: 'none'
              }}>
                {/* Featured Image */}
                <div onClick={() => setLightboxImage('/deployment-1.jpeg')} style={{ marginBottom: '12px', borderRadius: '8px', overflow: 'hidden', cursor: 'zoom-in' }}>
                  <Image src="/deployment-1.jpeg" alt="On-site installation" width={1000} height={600} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                  <div style={{ padding: '10px 12px', background: '#1e293b' }}>
                    <p style={{ margin: 0, fontSize: '12px', color: '#94a3b8' }}>Team installing fuel monitoring system at plantation site</p>
                  </div>
                </div>

                <Row gutter={[8, 8]}>
                  <Col xs={12} sm={6}>
                    <div onClick={() => setLightboxImage('/deployment-3.jpeg')} style={{ borderRadius: '8px', overflow: 'hidden', background: '#1e293b', cursor: 'zoom-in' }}>
                      <Image src="/deployment-3.jpeg" alt="Hardware setup" width={500} height={350} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
                      <div style={{ padding: '6px 8px' }}><p style={{ margin: 0, fontSize: '10px', color: '#94a3b8' }}>Hardware Setup</p></div>
                    </div>
                  </Col>
                  <Col xs={12} sm={6}>
                    <div onClick={() => setLightboxImage('/ftm5.jpeg')} style={{ borderRadius: '8px', overflow: 'hidden', background: '#1e293b', cursor: 'zoom-in' }}>
                      <Image src="/ftm5.jpeg" alt="Control panel" width={500} height={350} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
                      <div style={{ padding: '6px 8px' }}><p style={{ margin: 0, fontSize: '10px', color: '#94a3b8' }}>Control Panel</p></div>
                    </div>
                  </Col>
                  <Col xs={12} sm={6}>
                    <div onClick={() => setLightboxImage('/ftm2.jpeg')} style={{ borderRadius: '8px', overflow: 'hidden', background: '#1e293b', cursor: 'zoom-in' }}>
                      <Image src="/ftm2.jpeg" alt="Component wiring" width={500} height={350} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
                      <div style={{ padding: '6px 8px' }}><p style={{ margin: 0, fontSize: '10px', color: '#94a3b8' }}>Component Wiring</p></div>
                    </div>
                  </Col>
                  <Col xs={12} sm={6}>
                    <div onClick={() => setLightboxImage('/deployment-8.jpeg')} style={{ borderRadius: '8px', overflow: 'hidden', background: '#1e293b', cursor: 'zoom-in' }}>
                      <Image src="/deployment-8.jpeg" alt="Final assembly" width={500} height={350} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
                      <div style={{ padding: '6px 8px' }}><p style={{ margin: 0, fontSize: '10px', color: '#94a3b8' }}>Final Assembly</p></div>
                    </div>
                  </Col>
                </Row>
              </div>
            )}
          </section>

          {/* What's Next */}
          <section style={{ marginBottom: '24px' }}>
            <Title level={2} style={{ fontSize: '1rem', marginBottom: '12px', color: '#f1f5f9' }}>
              What&apos;s Next
            </Title>
            <div style={{
              padding: '16px',
              background: 'rgba(34, 197, 94, 0.08)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              borderRadius: '10px'
            }}>
              <div>
                <div style={{
                  padding: '4px 12px',
                  background: 'rgba(34, 197, 94, 0.15)',
                  borderRadius: '4px',
                  display: 'inline-block',
                  marginBottom: '10px'
                }}>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#22c55e', textTransform: 'uppercase' }}>
                    In Development
                  </span>
                </div>
                <Title level={3} style={{ fontSize: '1.1rem', marginBottom: '8px', color: '#f1f5f9' }}>
                  Next-Gen Custom PCB
                </Title>
                <Paragraph style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '10px' }}>
                  Custom PCB replacing off-the-shelf components:
                </Paragraph>
                <ul style={{ margin: 0, paddingLeft: '18px', color: '#cbd5e1', fontSize: '12px', lineHeight: 1.7 }}>
                  <li>4-channel relay with LED indicators</li>
                  <li>ADS1115 ADC for precision sensing</li>
                  <li>RS485 industrial communication</li>
                  <li>Dual current sensors</li>
                  <li>Redundant power supplies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div style={{
            padding: '24px',
            background: 'rgba(16, 121, 255, 0.08)',
            border: '1px solid rgba(16, 121, 255, 0.15)',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <Title level={3} style={{ fontSize: '1.1rem', marginBottom: '6px', color: '#f1f5f9' }}>
              Need a Similar Solution?
            </Title>
            <Paragraph style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '16px' }}>
              We build custom monitoring systems for industrial needs.
            </Paragraph>
            <Space size="small" wrap style={{ justifyContent: 'center' }}>
              <Button
                type="primary"
                onClick={() => router.push('/#contact')}
                style={{
                  height: '36px',
                  padding: '0 24px',
                  borderRadius: '6px',
                  background: 'linear-gradient(135deg, #1079FF, #29C5FF)',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: '13px'
                }}
              >
                Get In Touch
              </Button>
              <Button
                onClick={() => router.push('/')}
                style={{
                  height: '36px',
                  padding: '0 24px',
                  borderRadius: '6px',
                  border: '1px solid #1079FF',
                  color: '#1079FF',
                  background: 'transparent',
                  fontWeight: 600,
                  fontSize: '13px'
                }}
              >
                View More Projects
              </Button>
            </Space>
          </div>
        </div>
      </Content>
      <Footer />

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Left tap zone to close */}
          <div
            onClick={() => setLightboxImage(null)}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '15%',
              minWidth: '50px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1
            }}
          >
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px', writingMode: 'vertical-rl', textOrientation: 'mixed' }}>TAP TO CLOSE</span>
          </div>

          {/* Right tap zone to close */}
          <div
            onClick={() => setLightboxImage(null)}
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '15%',
              minWidth: '50px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1
            }}
          >
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px', writingMode: 'vertical-rl', textOrientation: 'mixed' }}>TAP TO CLOSE</span>
          </div>

          {/* Close button */}
          <button
            onClick={() => setLightboxImage(null)}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'rgba(255,255,255,0.15)',
              border: 'none',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '18px',
              zIndex: 2
            }}
          >
            <CloseOutlined />
          </button>

          {/* Image container */}
          <div style={{
            maxWidth: '70%',
            maxHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1
          }}>
            <Image
              src={lightboxImage}
              alt="Full size preview"
              width={1200}
              height={800}
              style={{
                maxWidth: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: '8px'
              }}
            />
          </div>

          {/* Bottom hint */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'rgba(255,255,255,0.4)',
            fontSize: '12px',
            textAlign: 'center'
          }}>
            Tap sides or X to close
          </div>
        </div>
      )}
    </Layout>
  )
}
