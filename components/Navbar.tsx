'use client'

import React, { useState } from 'react'
import { Button, Drawer } from 'antd'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'

const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

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
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
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
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <div className="desktop-nav" style={{ display: 'flex', gap: '24px' }}>
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

          <Button
            type="primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="desktop-nav"
            style={{
              height: '40px',
              padding: '0 24px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #1079FF, #29C5FF)',
              border: 'none',
              fontWeight: 600,
              fontSize: '13px'
            }}
          >
            Get a Demo
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
          <Button
            type="primary"
            block
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              setIsOpen(false)
            }}
            style={{
              marginTop: '16px',
              height: '44px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #1079FF, #29C5FF)',
              border: 'none',
              fontWeight: 600
            }}
          >
            Get a Demo
          </Button>
        </div>
      </Drawer>

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: block !important; }
        }
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          .mobile-nav { display: none !important; }
        }
      `}</style>
    </header>
  )
}
