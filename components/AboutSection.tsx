'use client'

import React from 'react'
import { Row, Col } from 'antd'
import {
  ApiOutlined,
  UserOutlined,
  DatabaseOutlined,
  SafetyOutlined,
  GlobalOutlined,
  CheckCircleOutlined
} from '@ant-design/icons'

const capabilities = [
  {
    icon: <ApiOutlined />,
    title: 'IoT Fuel Pump System',
    description: 'Mini fuel station kits with pumps, flow meters, tank probes, and RFID tap access for complete fuel management'
  },
  {
    icon: <UserOutlined />,
    title: 'User Access Control',
    description: 'RFID-based access control with role permissions, multi-factor authentication, and operator activity tracking'
  },
  {
    icon: <DatabaseOutlined />,
    title: 'Real-time Monitoring',
    description: 'Cloud dashboards showing live fuel levels, consumption rates, historical trends, and efficiency reports'
  },
  {
    icon: <SafetyOutlined />,
    title: 'Theft Detection',
    description: 'Automated alerts for suspicious fuel drops, unauthorized access attempts, and operational anomalies'
  }
]

const values = [
  {
    icon: <GlobalOutlined />,
    title: 'Works Anywhere',
    description: 'Built for remote sites with limited infrastructure'
  },
  {
    icon: <CheckCircleOutlined />,
    title: 'Full Stack Delivery',
    description: 'Sensors, cloud, dashboards, and support from one team'
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="home-section" style={{ background: '#0f172a' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '12px' }}>
            Diesel Operations <span className="text-gradient">Digitalization</span>
          </h2>
          <p style={{ fontSize: '15px', maxWidth: '600px', margin: '0 auto', color: '#94a3b8' }}>
            We digitalize diesel footprints for heavy equipment operations, proven in Indonesian palm oil plantations with a roadmap for global application.
          </p>
        </div>

        {/* Capabilities Grid */}
        <Row gutter={[16, 16]} style={{ marginBottom: '48px' }}>
          {capabilities.map((item, index) => (
            <Col xs={24} sm={12} key={index}>
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  padding: '16px',
                  background: '#1e293b',
                  borderRadius: '12px',
                  borderLeft: `3px solid ${index % 2 === 0 ? '#1079FF' : '#29C5FF'}`,
                  height: '100%'
                }}
              >
                <div
                  style={{
                    fontSize: '22px',
                    color: index % 2 === 0 ? '#1079FF' : '#29C5FF',
                    flexShrink: 0
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', marginBottom: '4px', color: '#f1f5f9' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '13px', margin: 0, color: '#94a3b8', lineHeight: 1.5 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Why Industrix */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: '8px' }}>
            One Platform, <span className="text-gradient">Multiple Industries</span>
          </h3>
          <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '24px' }}>
            If you run excavators, trucks, or generators — we can help.
          </p>
        </div>

        <Row gutter={[16, 16]}>
          {values.map((item, index) => (
            <Col xs={24} sm={12} key={index}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  background: 'rgba(16, 121, 255, 0.05)',
                  border: '1px solid rgba(16, 121, 255, 0.15)',
                  borderRadius: '12px'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: index % 2 === 0 ? 'linear-gradient(135deg, #1079FF, #29C5FF)' : 'linear-gradient(135deg, #F62A3A, #F85B62)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '20px',
                    flexShrink: 0
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', marginBottom: '2px', color: '#f1f5f9' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '13px', margin: 0, color: '#94a3b8' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}
