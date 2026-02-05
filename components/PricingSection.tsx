'use client'

import React from 'react'
import { Row, Col, Button } from 'antd'
import { CheckCircleOutlined, RocketOutlined, ThunderboltOutlined, CrownOutlined } from '@ant-design/icons'
import { useTranslations } from 'next-intl'

export default function PricingSection() {
  const t = useTranslations('pricing')

  const pricingTiers = [
    {
      key: 'basic',
      icon: <RocketOutlined />,
      setupPrice: '36.900.000',
      monthlyPrice: '300.000',
      gradient: 'linear-gradient(135deg, #64748b, #94a3b8)',
      popular: false
    },
    {
      key: 'advanced',
      icon: <ThunderboltOutlined />,
      setupPrice: '49.900.000',
      monthlyPrice: '500.000',
      gradient: 'linear-gradient(135deg, #1079FF, #29C5FF)',
      popular: true
    },
    {
      key: 'enterprise',
      icon: <CrownOutlined />,
      setupPrice: 'Custom',
      monthlyPrice: 'Custom',
      gradient: 'linear-gradient(135deg, #22c55e, #4ade80)',
      popular: false
    }
  ]

  const getFeatures = (key: string): string[] => {
    const features = t.raw(`features.${key}`)
    return Array.isArray(features) ? features : []
  }

  return (
    <section id="pricing" className="home-section" style={{ background: '#0f172a' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '12px' }}>
            <span className="text-gradient">{t('titleHighlight')}</span> {t('title')}
          </h2>
          <p style={{ fontSize: '15px', color: '#94a3b8', maxWidth: '500px', margin: '0 auto' }}>
            {t('description')}
          </p>
        </div>

        {/* Pricing Cards */}
        <Row gutter={[16, 16]} justify="center">
          {pricingTiers.map((tier) => (
            <Col xs={24} md={8} key={tier.key}>
              <div
                style={{
                  background: '#1e293b',
                  borderRadius: '12px',
                  padding: '24px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: tier.popular ? '2px solid #1079FF' : '1px solid rgba(255,255,255,0.08)',
                  position: 'relative'
                }}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #1079FF, #29C5FF)',
                    padding: '4px 16px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'white',
                    textTransform: 'uppercase'
                  }}>
                    {t('labels.mostPopular')}
                  </div>
                )}

                {/* Icon */}
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: tier.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '20px',
                    marginBottom: '16px'
                  }}
                >
                  {tier.icon}
                </div>

                {/* Tier Name & Description */}
                <h3 style={{ fontSize: '18px', marginBottom: '4px', color: '#f1f5f9' }}>
                  {t(`tiers.${tier.key}.name`)}
                </h3>
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px' }}>
                  {t(`tiers.${tier.key}.description`)}
                </p>

                {/* Pricing */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ marginBottom: '8px' }}>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>{t('labels.hardwareSetup')}</span>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: '#f1f5f9' }}>
                      {tier.setupPrice === 'Custom' ? (
                        <span>{t('labels.customQuote')}</span>
                      ) : (
                        <>
                          <span style={{ fontSize: '14px', fontWeight: 400 }}>Rp </span>
                          {tier.setupPrice}
                        </>
                      )}
                    </div>
                    {tier.setupPrice !== 'Custom' && (
                      <span style={{ fontSize: '11px', color: '#64748b' }}>{t('labels.oneTime')}</span>
                    )}
                  </div>
                  <div style={{
                    padding: '12px',
                    background: 'rgba(16, 121, 255, 0.1)',
                    borderRadius: '8px',
                    marginTop: '12px'
                  }}>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>{t('labels.monthlySubscription')}</span>
                    <div style={{ fontSize: '20px', fontWeight: 700, color: '#1079FF' }}>
                      {tier.monthlyPrice === 'Custom' ? (
                        <span>{t('labels.custom')}</span>
                      ) : (
                        <>
                          <span style={{ fontSize: '12px', fontWeight: 400 }}>Rp </span>
                          {tier.monthlyPrice}
                          <span style={{ fontSize: '12px', fontWeight: 400, color: '#64748b' }}>{t('labels.perMonth')}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul style={{ margin: '0 0 20px 0', padding: 0, listStyle: 'none', flex: 1 }}>
                  {getFeatures(tier.key).map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        fontSize: '13px',
                        color: '#cbd5e1',
                        marginBottom: '8px'
                      }}
                    >
                      <CheckCircleOutlined style={{ color: '#22c55e', marginTop: '2px', flexShrink: 0 }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  type="primary"
                  block
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    height: '44px',
                    borderRadius: '8px',
                    background: tier.popular ? 'linear-gradient(135deg, #1079FF, #29C5FF)' : 'transparent',
                    border: tier.popular ? 'none' : '1px solid #1079FF',
                    color: tier.popular ? 'white' : '#1079FF',
                    fontWeight: 600
                  }}
                >
                  {t('labels.getQuote')}
                </Button>
              </div>
            </Col>
          ))}
        </Row>

        {/* Note */}
        <p style={{
          textAlign: 'center',
          marginTop: '24px',
          fontSize: '13px',
          color: '#64748b'
        }}>
          {t('note')}
        </p>
      </div>
    </section>
  )
}
