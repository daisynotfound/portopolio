import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fajar Andhika - Projects",
  description: "Natnael Engeda - Portfolio | Projects",
  keywords: [
    'Fitsum Advert and Print',
    'Semah MCH ',
    'Angel Skin',
    'Tomoca App',
    'Website Portfolios',
    'Mobile App Portfolios',
    'Website Projects',
    'Mobile App Projects'
  ],
  openGraph: {
    title: "Fajar Andhika - Projects",
    description: "Natnael Engeda - Portfolio | Projects",
    url: "https://fan-png.vercel.app/portfolio",
    siteName: "Fajar Andhika - Portfolio",
    images: [
      {
        url: "/portfolio-seo-image.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
};