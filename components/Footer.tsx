'use client'

import React from 'react'
import { Row, Col } from 'antd'
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ background: '#1a1a1a', padding: '48px 12px 24px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Row gutter={[24, 32]}>
          {/* Logo & Description */}
          <Col xs={24} md={8}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <Image src="/Logo.svg" alt="Industrix" width={32} height={32} />
              <span style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>Industrix</span>
            </div>
            <p style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.6 }}>
              Transform your industrial operations with smart digital solutions for equipment tracking and resource monitoring.
            </p>
          </Col>

          {/* Quick Links */}
          <Col xs={12} md={4}>
            <h5 style={{ color: '#fff', fontSize: '14px', marginBottom: '16px' }}>Company</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'About Us', href: '/#about' },
                { label: 'Projects', href: '/#projects' },
                { label: 'Contact', href: '/#contact' }
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
            <h5 style={{ color: '#fff', fontSize: '14px', marginBottom: '16px' }}>Solutions</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Fuel Monitoring', 'IoT Sensors', 'Analytics'].map((link) => (
                <Link
                  key={link}
                  href="/#about"
                  style={{ color: '#a1a1aa', fontSize: '13px', textDecoration: 'none' }}
                  className="footer-link"
                >
                  {link}
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
                Jakarta, Indonesia
              </div>
            </div>
          </Col>
        </Row>

        {/* Bottom */}
        <div
          style={{
            borderTop: '1px solid #333',
            marginTop: '32px',
            paddingTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <span style={{ color: '#a1a1aa', fontSize: '12px' }}>
            © {currentYear} PT. Teknologi Solusi Industri
          </span>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacy', 'Terms'].map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase()}`}
                style={{ color: '#a1a1aa', fontSize: '12px', textDecoration: 'none' }}
                className="footer-link"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
