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

const steps = [
  {
    number: '01',
    icon: <MessageOutlined />,
    title: 'Konsultasi & Survey',
    description: 'Tim kami mengunjungi lokasi Anda untuk memahami kebutuhan operasional, jumlah unit alat berat, dan infrastruktur yang tersedia.'
  },
  {
    number: '02',
    icon: <ToolOutlined />,
    title: 'Instalasi Hardware',
    description: 'Kami memasang sensor IoT, flow meter, dan sistem RFID pada tangki dan pompa BBM Anda. Proses instalasi 1-3 hari per lokasi.'
  },
  {
    number: '03',
    icon: <CloudServerOutlined />,
    title: 'Koneksi ke Cloud',
    description: 'Semua sensor terhubung ke platform cloud kami. Data dikirim secara real-time melalui jaringan seluler atau WiFi.'
  },
  {
    number: '04',
    icon: <DashboardOutlined />,
    title: 'Akses Dashboard',
    description: 'Tim Anda mendapat akses ke dashboard web dan mobile app untuk monitoring level BBM, konsumsi, dan laporan harian.'
  },
  {
    number: '05',
    icon: <CustomerServiceOutlined />,
    title: 'Support Berkelanjutan',
    description: 'Langganan bulanan mencakup maintenance, update software, dan dukungan teknis untuk memastikan sistem berjalan optimal.'
  }
]

const targetCustomers = [
  { label: 'Perkebunan Kelapa Sawit', icon: '🌴' },
  { label: 'Pertambangan', icon: '⛏️' },
  { label: 'Konstruksi', icon: '🏗️' },
  { label: 'Logistik & Fleet', icon: '🚛' }
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="home-section" style={{ background: '#0f172a' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '12px' }}>
            Bagaimana <span className="text-gradient">Cara Kerjanya</span>
          </h2>
          <p style={{ fontSize: '15px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
            Dari konsultasi hingga operasional — kami menangani semuanya. Anda cukup fokus pada bisnis inti.
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
          <span style={{ color: '#64748b', fontSize: '14px', alignSelf: 'center' }}>Untuk:</span>
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
                  {step.title}
                </h4>
                <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>
                  {step.description}
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
            <strong>Model Layanan:</strong> Pembayaran satu kali untuk hardware & instalasi,
            kemudian langganan bulanan untuk akses dashboard, cloud storage, dan support teknis.
          </p>
        </div>
      </div>
    </section>
  )
}
