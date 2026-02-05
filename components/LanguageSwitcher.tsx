'use client'

import React from 'react'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Select } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import { locales, type Locale } from '@/i18n/config'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleChange = (newLocale: Locale) => {
    // Remove current locale from pathname
    const segments = pathname.split('/')
    const currentLocaleIndex = locales.findIndex(l => segments[1] === l)

    if (currentLocaleIndex !== -1) {
      segments[1] = newLocale
    } else {
      segments.splice(1, 0, newLocale)
    }

    const newPath = segments.join('/') || '/'
    router.push(newPath)
  }

  return (
    <Select
      value={locale as Locale}
      onChange={handleChange}
      style={{ width: 'auto', minWidth: '80px' }}
      dropdownStyle={{ background: '#1e293b' }}
      suffixIcon={<GlobalOutlined style={{ color: '#94a3b8' }} />}
      variant="borderless"
    >
      {locales.map((loc) => (
        <Select.Option key={loc} value={loc}>
          <span style={{ color: '#e2e8f0', fontSize: '13px' }}>
            {loc.toUpperCase()}
          </span>
        </Select.Option>
      ))}
    </Select>
  )
}
