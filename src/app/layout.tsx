import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import './globals.css'
import { siteConfig } from '@/lib/site'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? `https://${siteConfig.domain}`
)

export const metadata: Metadata = {
  metadataBase,
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: 'es_CL',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${dmSans.variable} bg-[var(--background)] font-sans text-[var(--foreground)] antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
