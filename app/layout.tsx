import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist_Mono, Inter, Noto_Sans_KR, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const notoKr = Noto_Sans_KR({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-noto-kr' })

export const metadata: Metadata = {
  metadataBase: new URL('https://sahar-portfolio-taupe.vercel.app'),
  title: 'Sahar Mirzazadeh — Computer Science & Frontend',
  description:
    'Computer Science student in South Korea building practical bilingual web experiences across frontend development, data structures, and applied machine learning.',
  authors: [{ name: 'Sahar Mirzazadeh' }],
  creator: 'Sahar Mirzazadeh',
  openGraph: {
    title: 'Sahar Mirzazadeh — Portfolio',
    description: 'Bilingual web projects, computer science, and applied data work.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ko_KR',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fffaf6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} ${notoKr.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
