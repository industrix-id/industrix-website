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
import { useTranslations } from 'next-intl'

export default function AboutSection() {
  const t = useTranslations('about')

  const capabilities = [
    {
      icon: <ApiOutlined />,
      title: t('capabilities.iotPump.title'),
      description: t('capabilities.iotPump.description')
    },
    {
      icon: <UserOutlined />,
      title: t('capabilities.accessControl.title'),
      description: t('capabilities.accessControl.description')
    },
    {
      icon: <DatabaseOutlined />,
      title: t('capabilities.monitoring.title'),
      description: t('capabilities.monitoring.description')
    },
    {
      icon: <SafetyOutlined />,
      title: t('capabilities.theft.title'),
      description: t('capabilities.theft.description')
    }
  ]

  const values = [
    {
      icon: <GlobalOutlined />,
      title: t('values.worksAnywhere.title'),
      description: t('values.worksAnywhere.description')
    },
    {
      icon: <CheckCircleOutlined />,
      title: t('values.fullStack.title'),
      description: t('values.fullStack.description')
    }
  ]

  return (
    <section id="about" className="home-section" style={{ background: '#0f172a' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '12px' }}>
            {t('title')} <span className="text-gradient">{t('titleHighlight')}</span>
          </h2>
          <p style={{ fontSize: '15px', maxWidth: '600px', margin: '0 auto', color: '#94a3b8' }}>
            {t('description')}
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
            {t('platform.title')} <span className="text-gradient">{t('platform.titleHighlight')}</span>
          </h3>
          <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '24px' }}>
            {t('platform.description')}
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
