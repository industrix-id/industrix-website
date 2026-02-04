import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from './theme/ThemeProvider'
import ErrorBoundary from '@/components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  title: {
    default: 'Industrix - Diesel Operations Digitalization',
    template: '%s | Industrix'
  },
  description: 'Real-time diesel monitoring and fuel tracking for heavy equipment operations. IoT sensors, theft detection, and cloud dashboards for plantations, construction, mining, and forestry. Proven in Indonesian palm oil operations.',
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
    description: 'Real-time diesel monitoring and fuel tracking for heavy equipment. IoT sensors, theft detection, and operational visibility for palm oil, construction, mining, and forestry operations.',
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
    description: 'Real-time diesel monitoring and fuel tracking for heavy equipment. IoT sensors, theft detection, and operational visibility for palm oil, construction, mining, and forestry operations.',
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}