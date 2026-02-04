'use client'

import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Input, Button, Select, message } from 'antd'
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  SendOutlined,
  UserOutlined,
  BankOutlined
} from '@ant-design/icons'
import emailjs from '@emailjs/browser'

const { TextArea } = Input

interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  industry: string
  message: string
}

const contactInfo = [
  { icon: <MailOutlined />, label: 'Email', value: 'carlos@industrix.id', href: 'mailto:carlos@industrix.id' },
  { icon: <PhoneOutlined />, label: 'Phone', value: '+62 815-3003-886', href: 'tel:+628153003886' },
  { icon: <EnvironmentOutlined />, label: 'Location', value: 'Jakarta, Indonesia', href: null }
]

export default function ContactSection() {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    emailjs.init('uLHUv1UdTBP0eJ57R')
  }, [])

  const handleSubmit = async (values: ContactFormData) => {
    setLoading(true)
    try {
      const result = await emailjs.send('service_q60i136', 'template_uaamyte', {
        name: values.name,
        time: new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }),
        message_type: 'Contact Form Message',
        details: `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone || 'N/A'}\nCompany: ${values.company}\nIndustry: ${values.industry}`,
        message: values.message,
        to_email: 'carlos@industrix.id',
        reply_to: values.email
      })

      if (result.status === 200) {
        // Send confirmation email
        try {
          await emailjs.send('service_q60i136', 'template_mu9wwrp', {
            to_email: values.email,
            to_name: values.name,
            from_name: 'Industrix Team'
          })
        } catch { /* silent */ }

        message.success('Message sent! We\'ll respond within 24 hours.')
        form.resetFields()
      }
    } catch {
      message.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="home-section" style={{ background: '#0f172a' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '8px' }}>
            Let&apos;s <span className="text-gradient">Work Together</span>
          </h2>
          <p style={{ fontSize: '14px', color: '#94a3b8' }}>
            Ready to digitalize your diesel operations? Get in touch.
          </p>
        </div>

        <Row gutter={[24, 24]}>
          {/* Contact Info */}
          <Col xs={24} md={8}>
            <div
              style={{
                background: 'linear-gradient(135deg, #1e3a5f 0%, #1e293b 100%)',
                borderRadius: '12px',
                padding: '24px',
                height: '100%'
              }}
            >
              <h4 style={{ color: '#fff', marginBottom: '8px', fontSize: '16px' }}>
                Contact Information
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', marginBottom: '24px' }}>
                Reach out directly or fill out the form.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href || undefined}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      color: '#fff',
                      textDecoration: 'none',
                      cursor: item.href ? 'pointer' : 'default'
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: 'rgba(255,255,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px'
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>{item.label}</div>
                      <div style={{ fontSize: '14px' }}>{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Col>

          {/* Form */}
          <Col xs={24} md={16}>
            <div
              style={{
                background: '#1e293b',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid rgba(255,255,255,0.08)'
              }}
            >
              <Form form={form} layout="vertical" onFinish={handleSubmit} requiredMark={false}>
                <Row gutter={[12, 0]}>
                  <Col xs={24} sm={12}>
                    <Form.Item name="name" label="Full Name" rules={[{ required: true, message: 'Required' }]}>
                      <Input prefix={<UserOutlined style={{ color: '#64748b' }} />} placeholder="John Doe" size="large" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Required' }, { type: 'email', message: 'Invalid' }]}>
                      <Input prefix={<MailOutlined style={{ color: '#64748b' }} />} placeholder="john@company.com" size="large" />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={[12, 0]}>
                  <Col xs={24} sm={12}>
                    <Form.Item name="phone" label="Phone (Optional)">
                      <Input prefix={<PhoneOutlined style={{ color: '#64748b' }} />} placeholder="+62 812 3456 7890" size="large" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item name="company" label="Company" rules={[{ required: true, message: 'Required' }]}>
                      <Input prefix={<BankOutlined style={{ color: '#64748b' }} />} placeholder="Your company" size="large" />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item name="industry" label="Industry" rules={[{ required: true, message: 'Required' }]}>
                  <Select placeholder="Select your industry" size="large">
                    <Select.Option value="palm-oil">Palm Oil / Agriculture</Select.Option>
                    <Select.Option value="mining">Mining</Select.Option>
                    <Select.Option value="construction">Construction</Select.Option>
                    <Select.Option value="logistics">Logistics / Fleet</Select.Option>
                    <Select.Option value="manufacturing">Manufacturing</Select.Option>
                    <Select.Option value="other">Other</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item name="message" label="Message" rules={[{ required: true, message: 'Required' }]}>
                  <TextArea placeholder="Tell us about your operations..." rows={4} style={{ resize: 'none' }} />
                </Form.Item>

                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  icon={<SendOutlined />}
                  size="large"
                  style={{
                    height: '44px',
                    padding: '0 24px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #1079FF, #29C5FF)',
                    border: 'none',
                    fontWeight: 600
                  }}
                >
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}
