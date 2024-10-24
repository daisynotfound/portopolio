import type { Metadata } from 'next'
import './globals.css'
import './styles/loading-style.css'
import './styles/underline-style.css'
import Header from './layouts/Header'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'Fajar Andhika',
  category: 'Technology',
  description: 'Fajar Andhika - Software Developer | Fullstack Developer | Mobile App Developer | Reactjs | Nodejs | Flutter',
  applicationName: 'Next.js',
  metadataBase: new URL('https://www.natnaelengeda.tech/'),
  keywords: [
    'Software Development',
    'Fullstack Development',
    'Reactjs',
    'Nodejs',
    'Frontend Developer',
    'Ethiopia Developer',
    'Flutter Developer',
    'Software Developer in Ethiopia',
    'Reactjs Developer in Ethiopia',
    'Ethiopia',
    'Fajar Andhika',
    'Fajar',
    'Jar',
    'Andhika',
  ],
  creator: 'Fajar Andhika',
  authors: [
    {
      name: 'Fajar Andhika',
      url: 'https://www.natnaelengeda.tech/'
    }
  ],
  publisher: "Fajar Andhika",
  openGraph: {
    title: 'Fajar Andhika',
    description: "Fajar Andhika - Software Developer | Fullstack Developer | Mobile App Developer | Reactjs | Nodejs | Flutter ",
    url: "https://www.natnaelengeda.tech/",
    siteName: "Fajar Andhika - Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['nattynengeda@gmail.com', 'https://www.natnaelengeda.tech/']
    }
  },
  appleWebApp: {
    title: 'Natnael Engeda',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/logo.png'
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        {/* <NextUIProvider> */}
        <Header />
        <main className='w-full min-h-screen gradient_background pt-10 md:pt-28'>
          {children}
          <SpeedInsights />
        </main>
        {/* </NextUIProvider> */}
      </body>
    </html>
  )
}
