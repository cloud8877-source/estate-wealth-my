import type { Metadata } from 'next'
import { Inter, Poppins, Merriweather } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: {
    default: 'Estate Wealth MY - Estate Planning for Malaysian Families',
    template: '%s | Estate Wealth MY'
  },
  description: 'Protect your family\'s future with professional estate planning services for Malaysian non-Muslim families. Take our free 2-minute quiz to get your personalized estate planning roadmap.',
  keywords: ['estate planning', 'will writing', 'trust creation', 'Malaysia', 'inheritance', 'family protection'],
  authors: [{ name: 'Estate Wealth MY' }],
  creator: 'Estate Wealth MY',
  publisher: 'Estate Wealth MY',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://estatewealthmy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: 'https://estatewealthmy.com',
    title: 'Estate Wealth MY - Estate Planning for Malaysian Families',
    description: 'Protect your family\'s future with professional estate planning services for Malaysian non-Muslim families.',
    siteName: 'Estate Wealth MY',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Estate Wealth MY - Estate Planning Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estate Wealth MY - Estate Planning for Malaysian Families',
    description: 'Protect your family\'s future with professional estate planning services for Malaysian non-Muslim families.',
    images: ['/images/og-image.jpg'],
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
  verification: {
    // Add Google Search Console verification here
    // google: 'verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${merriweather.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
