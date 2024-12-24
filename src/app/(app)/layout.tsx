import React, { ReactNode } from 'react'
import type { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
import { CSPostHogProvider } from '@/context/providers'
import { Toaster } from '@/components/shadcn/toaster'
import { applicationName, appConfig } from '@/app-config'
import { BreakpointOverlay } from '@/components/breakpoint-overlay'
const { mode } = appConfig
import 'fumadocs-ui/style.css'
import '@/styles/styles.css'
import RoundedDrawerNav from '../components/layout/roundedDrawerNav'
import Footer from '../components/layout/footer/footer'

export const metadata: Metadata = {
  title: process.env.NODE_ENV === 'development' ? `DEV - ${applicationName} ` : applicationName,
  icons: [{ rel: 'icon', type: 'image/png', sizes: '48x48', url: '/favicon.ico' }],
  keywords:
    'Web App Development, Web Development, Web Design, Web Development Company, Web Development Services, Web Development Agency, American Web Development Company, American Web Development Services, American Web Development Agency',
  description: 'Michael Martell Portfolio',
  openGraph:
    mode === 'comingSoon'
      ? {
          title: 'MichaelMartell.com',
          description: "Michael Martell's personal portfolio website. Coming soon!",
          url: 'https://michaelmartell.com',
          siteName: 'Michael Martell',
          type: 'website',
          images: [
            {
              url: 'https://wdcstarterkit.com/starterkitcard.png',
              secureUrl: 'https://wdcstarterkit.com/starterkitcard.png',
              width: 800,
              height: 418,
              alt: 'The MichaelMartell.com social media card image',
            },
          ],
        }
      : undefined,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen h-fit bg-background antialiased relative">
        <NextTopLoader />
        <CSPostHogProvider>
          <div className="flex-grow w-full h-full">
            <RoundedDrawerNav>{children}</RoundedDrawerNav>
          </div>
        </CSPostHogProvider>
        <BreakpointOverlay />
        <Toaster />
      </body>
    </html>
  )
}