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
import { useTranslations } from 'next-intl'

const { TextArea } = Input

interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  industry: string
  message: string
}

export default function ContactSection() {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const t = useTranslations('contact')

  const contactInfo = [
    { icon: <MailOutlined />, label: t('labels.email'), value: 'carlos@industrix.id', href: 'mailto:carlos@industrix.id' },
    { icon: <PhoneOutlined />, label: t('labels.phone'), value: '+62 815-3003-886', href: 'tel:+628153003886' },
    { icon: <EnvironmentOutlined />, label: t('labels.location'), value: 'Jl. Taman Palem Mutiara No.3 Blok A5, Cengkareng, Jakarta Barat 11730', href: 'https://maps.google.com/?q=Jl.+Taman+Palem+Mutiara+No.3+Blok+A5+Jakarta' }
  ]

  const industries = [
    { value: 'palm-oil', label: t('form.industries.palmOil') },
    { value: 'mining', label: t('form.industries.mining') },
    { value: 'construction', label: t('form.industries.construction') },
    { value: 'logistics', label: t('form.industries.logistics') },
    { value: 'manufacturing', label: t('form.industries.manufacturing') },
    { value: 'other', label: t('form.industries.other') }
  ]

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
        try {
          await emailjs.send('service_q60i136', 'template_mu9wwrp', {
            to_email: values.email,
            to_name: values.name,
            from_name: 'Industrix Team'
          })
        } catch { /* silent */ }

        message.success(t('messages.success'))
        form.resetFields()
      }
    } catch {
      message.error(t('messages.error'))
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
            {t('title')} <span className="text-gradient">{t('titleHighlight')}</span>
          </h2>
          <p style={{ fontSize: '14px', color: '#94a3b8' }}>
            {t('description')}
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
                {t('info.title')}
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', marginBottom: '24px' }}>
                {t('info.subtitle')}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href || undefined}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
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
                        fontSize: '14px',
                        flexShrink: 0
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>{item.label}</div>
                      <div style={{ fontSize: '13px' }}>{item.value}</div>
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
                    <Form.Item name="name" label={t('form.fullName')} rules={[{ required: true, message: t('form.required') }]}>
                      <Input prefix={<UserOutlined style={{ color: '#64748b' }} />} placeholder={t('form.placeholders.name')} size="large" style={{ width: '100%', height: '44px' }} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item name="email" label={t('form.email')} rules={[{ required: true, message: t('form.required') }, { type: 'email', message: t('form.invalid') }]}>
                      <Input prefix={<MailOutlined style={{ color: '#64748b' }} />} placeholder={t('form.placeholders.email')} size="large" style={{ width: '100%', height: '44px' }} />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={[12, 0]}>
                  <Col xs={24} sm={12}>
                    <Form.Item name="phone" label={t('form.phone')}>
                      <Input prefix={<PhoneOutlined style={{ color: '#64748b' }} />} placeholder={t('form.placeholders.phone')} size="large" style={{ width: '100%', height: '44px' }} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item name="company" label={t('form.company')} rules={[{ required: true, message: t('form.required') }]}>
                      <Input prefix={<BankOutlined style={{ color: '#64748b' }} />} placeholder={t('form.placeholders.company')} size="large" style={{ width: '100%', height: '44px' }} />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item name="industry" label={t('form.industry')} rules={[{ required: true, message: t('form.required') }]}>
                  <Select placeholder={t('form.placeholders.industry')} size="large" style={{ width: '100%', height: '44px' }}>
                    {industries.map((ind) => (
                      <Select.Option key={ind.value} value={ind.value}>{ind.label}</Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item name="message" label={t('form.message')} rules={[{ required: true, message: t('form.required') }]}>
                  <TextArea placeholder={t('form.placeholders.message')} rows={4} style={{ resize: 'none', width: '100%' }} />
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
                  {t('form.submit')}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}
