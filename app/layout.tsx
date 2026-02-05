import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  title: {
    default: 'Industrix - Diesel Operations Digitalization',
    template: '%s | Industrix'
  },
  description: 'Real-time diesel monitoring and fuel tracking for heavy equipment operations. IoT sensors, theft detection, and cloud dashboards for plantations, construction, mining, and forestry.',
  keywords: ['diesel tracking', 'fuel monitoring', 'theft prevention', 'palm oil', 'construction', 'heavy equipment', 'IoT sensors', 'fleet management', 'Indonesia', 'mining', 'forestry', 'agriculture', 'industrial IoT'],
  authors: [{ name: 'Industrix' }],
  creator: 'Industrix',
  publisher: 'Industrix',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000',
    title: 'Industrix - Diesel Operations Digitalization',
    description: 'Real-time diesel monitoring and fuel tracking for heavy equipment. IoT sensors, theft detection, and operational visibility.',
    siteName: 'Industrix',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Industrix - Diesel Operations Digitalization',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrix - Diesel Operations Digitalization',
    description: 'Real-time diesel monitoring and fuel tracking for heavy equipment.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
