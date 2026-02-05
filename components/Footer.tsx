'use client'

import React from 'react'
import { Row, Col } from 'antd'
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const t = useTranslations('footer')
  const locale = useLocale()

  return (
    <footer style={{ background: '#1a1a1a', padding: '48px 12px 32px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Row gutter={[24, 32]}>
          {/* Logo & Description */}
          <Col xs={24} md={8}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <Image src="/Logo.svg" alt="Industrix" width={32} height={32} />
              <span style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>Industrix</span>
            </div>
            <p style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.6 }}>
              {t('description')}
            </p>
          </Col>

          {/* Quick Links */}
          <Col xs={12} md={4}>
            <h5 style={{ color: '#fff', fontSize: '14px', marginBottom: '16px' }}>{t('company')}</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: t('links.aboutUs'), href: `/${locale}#about` },
                { label: t('links.projects'), href: `/${locale}#projects` },
                { label: t('links.contact'), href: `/${locale}#contact` }
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{ color: '#a1a1aa', fontSize: '13px', textDecoration: 'none' }}
                  className="footer-link"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Col>

          <Col xs={12} md={4}>
            <h5 style={{ color: '#fff', fontSize: '14px', marginBottom: '16px' }}>{t('solutions')}</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: t('links.fuelMonitoring'), href: `/${locale}#about` },
                { label: t('links.iotSensors'), href: `/${locale}#about` },
                { label: t('links.analytics'), href: `/${locale}#about` }
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{ color: '#a1a1aa', fontSize: '13px', textDecoration: 'none' }}
                  className="footer-link"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Col>

          {/* Contact */}
          <Col xs={24} md={8}>
            <h5 style={{ color: '#fff', fontSize: '14px', marginBottom: '16px' }}>Contact</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#a1a1aa', fontSize: '13px' }}>
                <MailOutlined style={{ color: '#1079FF' }} />
                carlos@industrix.id
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#a1a1aa', fontSize: '13px' }}>
                <PhoneOutlined style={{ color: '#1079FF' }} />
                +62 815-3003-886
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#a1a1aa', fontSize: '13px' }}>
                <EnvironmentOutlined style={{ color: '#1079FF', marginTop: '2px' }} />
                <span>Jl. Taman Palem Mutiara No.3 Blok A5, RT.7/RW.14, Cengkareng Tim., Kec. Cengkareng, Jakarta Barat 11730</span>
              </div>
            </div>
          </Col>
        </Row>

        {/* Bottom */}
        <div
          style={{
            borderTop: '1px solid #333',
            marginTop: '32px',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <span style={{ color: '#a1a1aa', fontSize: '12px' }}>
            © {currentYear} {t('copyright')}
          </span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link
              href={`/${locale}/privacy`}
              style={{ color: '#a1a1aa', fontSize: '12px', textDecoration: 'none' }}
              className="footer-link"
            >
              {t('privacy')}
            </Link>
            <Link
              href={`/${locale}/terms`}
              style={{ color: '#a1a1aa', fontSize: '12px', textDecoration: 'none' }}
              className="footer-link"
            >
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
