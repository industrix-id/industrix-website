'use client'

import React, { useState } from 'react'
import { Button, Drawer } from 'antd'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('nav')
  const locale = useLocale()

  const navItems = [
    { label: t('home'), href: `/${locale}#home` },
    { label: t('about'), href: `/${locale}#about` },
    { label: t('howItWorks'), href: `/${locale}#how-it-works` },
    { label: t('pricing'), href: `/${locale}#pricing` },
    { label: t('projects'), href: `/${locale}#projects` },
    { label: t('contact'), href: `/${locale}#contact` }
  ]

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 12px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {/* Logo */}
        <Link href={`/${locale}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Image src="/Logo.svg" alt="Industrix" width={32} height={32} />
          <span
            style={{
              fontSize: '20px',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #1079FF, #29C5FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Industrix
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div className="desktop-nav" style={{ display: 'flex', gap: '20px' }}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 500
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="desktop-nav">
            <LanguageSwitcher />
          </div>

          <Button
            type="primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="desktop-nav"
            style={{
              height: '40px',
              padding: '0 20px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #1079FF, #29C5FF)',
              border: 'none',
              fontWeight: 600,
              fontSize: '13px'
            }}
          >
            {t('getDemo')}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: '20px' }} />}
            onClick={() => setIsOpen(true)}
            className="mobile-nav"
            style={{ color: '#e2e8f0', padding: '8px' }}
          />
        </nav>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title={null}
        placement="right"
        onClose={() => setIsOpen(false)}
        open={isOpen}
        width={280}
        closeIcon={<CloseOutlined style={{ color: '#e2e8f0' }} />}
        styles={{
          header: { background: '#1e293b', borderBottom: '1px solid rgba(255,255,255,0.08)' },
          body: { background: '#1e293b', padding: '24px 16px' }
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              style={{
                color: '#e2e8f0',
                textDecoration: 'none',
                fontSize: '16px',
                padding: '12px',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.05)'
              }}
            >
              {item.label}
            </a>
          ))}

          <div style={{ padding: '12px', marginTop: '8px' }}>
            <LanguageSwitcher />
          </div>

          <Button
            type="primary"
            block
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              setIsOpen(false)
            }}
            style={{
              marginTop: '8px',
              height: '44px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #1079FF, #29C5FF)',
              border: 'none',
              fontWeight: 600
            }}
          >
            {t('getDemo')}
          </Button>
        </div>
      </Drawer>

      <style jsx global>{`
        @media (max-width: 850px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: block !important; }
        }
        @media (min-width: 851px) {
          .desktop-nav { display: flex !important; }
          .mobile-nav { display: none !important; }
        }
      `}</style>
    </header>
  )
}
