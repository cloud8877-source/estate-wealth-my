import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://estatewealthmy.com'),
  title: {
    default: "Estate Planning Malaysia | Will Writing & Trust Services for Non-Muslims | Estate Wealth My",
    template: "%s | Estate Wealth My - Estate Planning Malaysia"
  },
  description: "Malaysia's #1 tech-powered estate planning for non-Muslim families. Will writing from RM 2,500. Complete in 2 weeks. RHB Trustee partner. 500+ families protected. Free consultation.",
  keywords: [
    "estate planning malaysia",
    "will writing malaysia",
    "trust services malaysia",
    "estate planning for non-muslims",
    "will writing services kuala lumpur",
    "living trust malaysia",
    "estate planning kl",
    "will writer malaysia",
    "RHB trustee",
    "asset protection malaysia",
    "inheritance planning malaysia",
    "testamentary trust malaysia",
    "estate distribution malaysia",
    "guardianship will malaysia",
    "power of attorney malaysia",
    "estate planning cost malaysia",
    "online will malaysia",
    "estate planning services",
    "wealth management malaysia",
    "succession planning malaysia"
  ],
  authors: [{ name: "Estate Wealth My" }],
  creator: "Estate Wealth My",
  publisher: "Estate Wealth My",
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://estatewealthmy.com",
    siteName: "Estate Wealth My",
    title: "Estate Planning Malaysia | Will Writing & Trust Services",
    description: "Malaysia's #1 tech-powered estate planning. Will writing from RM 2,500. Complete in 2 weeks. 500+ families protected.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Estate Wealth My - Estate Planning Malaysia"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Estate Planning Malaysia | Estate Wealth My",
    description: "Tech-powered estate planning for Malaysian families. From RM 2,500. Complete in 2 weeks.",
    images: ["/og-image.jpg"]
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
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://estatewealthmy.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-MY">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="geo.region" content="MY" />
        <meta name="geo.placename" content="Malaysia" />
        <meta name="language" content="English" />

        {/* Schema.org markup for Local Business */}
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Estate Wealth My",
              "description": "Tech-powered estate planning services for non-Muslim families in Malaysia",
              "url": "https://estatewealthmy.com",
              "telephone": "+60-12-345-6789",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kuala Lumpur",
                "addressCountry": "MY"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "3.139003",
                "longitude": "101.686855"
              },
              "priceRange": "RM 2500 - RM 50000",
              "image": "https://estatewealthmy.com/og-image.jpg",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "200"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Malaysia"
              },
              "serviceType": ["Estate Planning", "Will Writing", "Trust Services", "Asset Protection"],
              "knowsAbout": ["Estate Planning", "Will Writing", "Living Trust", "Testamentary Trust", "Power of Attorney"]
            })
          }}
        />

        {/* Organization Schema */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Estate Wealth My",
              "url": "https://estatewealthmy.com",
              "logo": "https://estatewealthmy.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/estatewealthmy",
                "https://www.linkedin.com/company/estatewealthmy"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+60-12-345-6789",
                "contactType": "customer service",
                "areaServed": "MY",
                "availableLanguage": ["English", "Malay", "Chinese"]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton variant="fab" />
      </body>
    </html>
  );
}
