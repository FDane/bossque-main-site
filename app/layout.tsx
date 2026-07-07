import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { BUSINESS, OPENING_HOURS_SPEC, SITE_URL } from '@/lib/data'
import './globals.css'
import UnregisterSW from '@/components/unregister-sw'
import RegisterSW from '@/components/register-sw'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-poppins',
})

// LocalBusiness (AutomotiveBusiness) structured data for Google rich results.
// Kept here so it's emitted once, site-wide, from a server component.
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutomotiveBusiness',
  '@id': `${SITE_URL}/#business`,
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  image: `${SITE_URL}/images/hero-car.png`,
  url: SITE_URL,
  telephone: BUSINESS.telephone,
  priceRange: BUSINESS.priceRange,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.addressLine,
    addressLocality: BUSINESS.addressLocality,
    addressRegion: BUSINESS.addressRegion,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.addressCountry,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS.geo.latitude,
    longitude: BUSINESS.geo.longitude,
  },
  areaServed: BUSINESS.areas.map((a) => ({ '@type': 'City', name: a })),
  openingHoursSpecification: OPENING_HOURS_SPEC.map((spec) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: spec.days,
    opens: spec.opens,
    closes: spec.closes,
  })),
  ...(BUSINESS.sameAs.length > 0 ? { sameAs: BUSINESS.sameAs } : {}),
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  // TODO: tune these for your local search targets
  title: 'Carwash Bossque | Wash the car like a boss in Padang Besar, Perlis',
  description:
    'Wash the car like a boss at our Padang Besar car wash near the Perlis-Thailand border. Exterior and interior detailing for Sedans, SUVs, MPVs, Pickups, Vans, Lorries and Motorcycles with fast WhatsApp booking.',
  keywords: [
    'car wash Padang Besar',
    'cuci kereta Padang Besar',
    'car wash Perlis',
    'cuci kereta Perlis',
    'car wash near Padang Besar border',
    'Carwash Bossque',
  ],
  openGraph: {
    title: 'Carwash Bossque | Wash the car like a boss in Padang Besar',
    description:
      'Wash the car like a boss at our Padang Besar car wash near the Perlis-Thailand border. Book instantly on WhatsApp.',
    type: 'website',
    locale: 'ms_MY',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon-96x96.png',
        sizes: '96x96',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#001f3f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ms" className={`light bg-navy ${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {process.env.NODE_ENV !== 'production' && <UnregisterSW />}
        {children}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Analytics />
            <SpeedInsights />
            <RegisterSW />
          </>
        )}
      </body>
    </html>
  )
}
