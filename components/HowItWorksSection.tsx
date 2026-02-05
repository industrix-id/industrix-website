'use client'

import React from 'react'
import { Row, Col } from 'antd'
import {
  MessageOutlined,
  ToolOutlined,
  CloudServerOutlined,
  DashboardOutlined,
  CustomerServiceOutlined
} from '@ant-design/icons'
import { useTranslations } from 'next-intl'

export default function HowItWorksSection() {
  const t = useTranslations('howItWorks')

  const steps = [
    { number: '01', icon: <MessageOutlined />, key: 'consultation' },
    { number: '02', icon: <ToolOutlined />, key: 'installation' },
    { number: '03', icon: <CloudServerOutlined />, key: 'cloud' },
    { number: '04', icon: <DashboardOutlined />, key: 'dashboard' },
    { number: '05', icon: <CustomerServiceOutlined />, key: 'support' }
  ]

  const targetCustomers = [
    { label: t('customers.palmOil'), icon: '🌴' },
    { label: t('customers.mining'), icon: '⛏️' },
    { label: t('customers.construction'), icon: '🏗️' },
    { label: t('customers.logistics'), icon: '🚛' }
  ]

  return (
    <section id="how-it-works" className="home-section" style={{ background: '#0f172a' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '12px' }}>
            {t('title')} <span className="text-gradient">{t('titleHighlight')}</span>
          </h2>
          <p style={{ fontSize: '15px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
            {t('description')}
          </p>
        </div>

        {/* Target Customers */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '40px'
        }}>
          <span style={{ color: '#64748b', fontSize: '14px', alignSelf: 'center' }}>{t('forLabel')}</span>
          {targetCustomers.map((customer, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                background: 'rgba(16, 121, 255, 0.1)',
                border: '1px solid rgba(16, 121, 255, 0.2)',
                borderRadius: '20px',
                fontSize: '13px',
                color: '#e2e8f0'
              }}
            >
              <span>{customer.icon}</span>
              {customer.label}
            </div>
          ))}
        </div>

        {/* Steps */}
        <Row gutter={[16, 16]}>
          {steps.map((step, index) => (
            <Col xs={24} sm={12} md={index < 3 ? 8 : 12} key={index}>
              <div
                style={{
                  background: '#1e293b',
                  borderRadius: '12px',
                  padding: '24px',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Step number watermark */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '10px',
                    fontSize: '64px',
                    fontWeight: 800,
                    color: 'rgba(16, 121, 255, 0.08)',
                    lineHeight: 1
                  }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #1079FF, #29C5FF)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '18px',
                    marginBottom: '16px'
                  }}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <h4 style={{ fontSize: '16px', marginBottom: '8px', color: '#f1f5f9' }}>
                  {t(`steps.${step.key}.title`)}
                </h4>
                <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>
                  {t(`steps.${step.key}.description`)}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Service Model Note */}
        <div
          style={{
            marginTop: '32px',
            padding: '20px 24px',
            background: 'linear-gradient(135deg, rgba(16, 121, 255, 0.1), rgba(41, 197, 255, 0.05))',
            border: '1px solid rgba(16, 121, 255, 0.2)',
            borderRadius: '12px',
            textAlign: 'center'
          }}
        >
          <p style={{ fontSize: '14px', color: '#e2e8f0', margin: 0 }}>
            <strong>{t('serviceModel.label')}</strong> {t('serviceModel.description')}
          </p>
        </div>
      </div>
    </section>
  )
}
