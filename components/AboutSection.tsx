'use client'

import React from 'react'
import { Row, Col, Card, Typography, Progress, Space, Button, Tag } from 'antd'
import {
  TeamOutlined,
  GlobalOutlined,
  TrophyOutlined,
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
    title: 'IoT & Hardware Integration',
    description: 'ROS2-based industrial IoT devices with real-time monitoring and control systems'
  },
  {
    icon: <DatabaseOutlined />,
    title: 'Enterprise Resource Planning',
    description: 'Scalable ERP solutions for multi-site operations and supply chain management'
  },
  {
    icon: <SafetyOutlined />,
    title: 'Environmental Compliance',
    description: 'ESG reporting and environmental monitoring for regulatory adherence'
  },
  {
    icon: <ThunderboltOutlined />,
    title: 'Predictive Analytics',
    description: 'Data-driven insights for equipment tracking, maintenance, and resource optimization'
  }
]

const values = [
  {
    title: 'Full-Stack Integration',
    description: 'End-to-end solutions combining hardware sensors, edge computing, cloud infrastructure, and intuitive dashboards—all built in-house',
    icon: <RocketOutlined />
  },
  {
    title: 'Indonesian Industrial Focus',
    description: 'Deep understanding of local regulations, operational challenges in mining, logistics, manufacturing, and heavy industries across the archipelago',
    icon: <GlobalOutlined />
  },
  {
    title: 'Technical Excellence',
    description: 'Modern engineering practices and proven architectures applied to real-world Indonesian industrial challenges',
    icon: <StarOutlined />
  },
  {
    title: 'Measurable Impact',
    description: 'We deliver quantifiable results: 20-40% efficiency gains, cost reductions, and operational improvements backed by real-time data',
    icon: <CheckCircleOutlined />
  }
]

export default function AboutSection() {
  const { isDarkMode } = useTheme()
  return (
    <section id="about" className="section-padding">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 24px)' }}>
        {/* Main About Content */}
        <Row gutter={[48, 48]} align="middle" style={{ marginBottom: '80px' }}>
          <Col xs={24} lg={12}>
            <div style={{ marginBottom: '24px' }}>
              <Tag color="blue" style={{ marginBottom: '16px', fontSize: '14px', padding: '6px 16px' }}>
                🇮🇩 Built for Indonesian Industry
              </Tag>
            </div>
            <Title level={2} style={{ marginBottom: '24px', fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}>
              Bringing Silicon Valley <span className="text-gradient">Engineering Standards</span> to Indonesian Heavy Industries
            </Title>
            <Paragraph style={{ fontSize: '18px', lineHeight: 1.7, marginBottom: '24px', color: isDarkMode ? '#cbd5e1' : '#475569' }}>
              Industrix modernizes industrial operations through integrated <strong>software + hardware solutions</strong> designed
              specifically for the unique challenges of Indonesian heavy industries, from remote mining sites to multi-warehouse logistics operations.
            </Paragraph>
            <Paragraph style={{ fontSize: '16px', lineHeight: 1.6, marginBottom: '32px', color: isDarkMode ? '#94a3b8' : '#64748b' }}>
              Our platform spans the entire operational stack: <strong>IoT sensors and edge devices</strong>, real-time monitoring dashboards,
              enterprise resource planning (ERP), environmental compliance reporting, and predictive maintenance, all delivered with a
              modular, scalable architecture that grows with your business.
            </Paragraph>
            <Space size="large" wrap>
              <Button
                type="primary"
                size="large"
                className="btn-gradient"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ height: '48px', paddingLeft: '32px', paddingRight: '32px' }}
              >
                View Our Work
              </Button>
              <Button
                size="large"
                className="btn-outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ height: '48px', paddingLeft: '32px', paddingRight: '32px' }}
              >
                Get Started
              </Button>
            </Space>
          </Col>

          <Col xs={24} lg={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%'
            }}>
              <EarthAnimation />
            </div>
          </Col>
        </Row>

        {/* Core Capabilities */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <Title level={2} style={{ marginBottom: '16px' }}>
              Platform <span className="text-gradient">Capabilities</span>
            </Title>
            <Paragraph style={{
              fontSize: '18px',
              color: isDarkMode ? '#d1d5db' : '#6b7280',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Comprehensive digital infrastructure for industrial operations—from field sensors to C-suite dashboards
            </Paragraph>
          </div>

          <Row gutter={[24, 24]}>
            {capabilities.map((capability, index) => (
              <Col xs={24} sm={12} key={index}>
                <Card
                  style={{
                    height: '100%',
                    border: 'none',
                    borderRadius: '16px',
                    background: isDarkMode
                      ? 'linear-gradient(135deg, rgba(16, 121, 255, 0.05), rgba(41, 197, 255, 0.02))'
                      : 'linear-gradient(135deg, rgba(16, 121, 255, 0.03), rgba(41, 197, 255, 0.01))',
                    borderLeft: `4px solid ${index % 2 === 0 ? '#1079FF' : '#29C5FF'}`,
                    transition: 'all 0.3s ease'
                  }}
                  hoverable
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{
                      fontSize: '28px',
                      color: index % 2 === 0 ? '#1079FF' : '#29C5FF',
                      marginTop: '4px'
                    }}>
                      {capability.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <Title level={5} style={{ marginBottom: '8px', fontSize: '16px' }}>
                        {capability.title}
                      </Title>
                      <Paragraph style={{
                        fontSize: '14px',
                        lineHeight: 1.6,
                        color: isDarkMode ? '#cbd5e1' : '#64748b',
                        margin: 0
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
              Our Competitive Edge
            </Tag>
          </div>
          <Title level={2} style={{ marginBottom: '20px', fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}>
            Why Choose <span className="text-gradient">Industrix</span>?
          </Title>
          <Paragraph style={{
            fontSize: '19px',
            lineHeight: 1.6,
            color: isDarkMode ? '#cbd5e1' : '#475569',
            maxWidth: '800px',
            margin: '0 auto 16px'
          }}>
            Most consultancies talk strategy. Most software shops don&apos;t understand hardware.
            Most integrators lack modern engineering practices.
          </Paragraph>
          <Paragraph style={{
            fontSize: '20px',
            lineHeight: 1.6,
            fontWeight: 600,
            color: isDarkMode ? '#e2e8f0' : '#1e293b',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            We do <span className="text-gradient">all three</span> and we do them well.
          </Paragraph>
        </div>

        <Row gutter={[28, 28]} style={{ marginBottom: '64px' }}>
          {values.map((value, index) => (
            <Col xs={24} md={12} key={index}>
              <Card
                style={{
                  height: '100%',
                  border: isDarkMode ? '1px solid rgba(16, 121, 255, 0.1)' : '1px solid rgba(16, 121, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '32px 28px',
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
            Built by Engineers with Real World Experience
          </Title>
          <Paragraph style={{
            fontSize: '18px',
            lineHeight: 1.7,
            marginBottom: '32px',
            color: isDarkMode ? '#cbd5e1' : '#475569',
            maxWidth: '900px',
            margin: '0 auto 32px'
          }}>
            Our team has deployed production robotics and industrial IoT systems that operate profitably today.
            We focus on solving real operational problems facing Indonesian industries, combining practical
            engineering with an understanding of the challenges in deploying technology across the archipelago.
          </Paragraph>

          <div style={{ marginBottom: '32px' }}>
            <Row gutter={[32, 16]} justify="center">
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

          <Space size="middle" wrap>
            <Button
              type="primary"
              size="large"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                height: '48px',
                paddingLeft: '32px',
                paddingRight: '32px',
                background: 'var(--industrix-gradient)',
                border: 'none',
                fontWeight: '600',
                fontSize: '15px'
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
                paddingLeft: '32px',
                paddingRight: '32px',
                fontWeight: '600',
                fontSize: '15px'
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