import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fajar Andhika - Skills",
  description: "Fajar Andhika - Software Developer | Fullstack Developer | Mobile App Developer | Reactjs | Nodejs | Flutter ",
  keywords: [
    'Skills',
    'Website Skills',
    'Reactjs Skills',
    'Nodejs Skills',
    'Vue.js Skills'
  ],
  openGraph: {
    title: "Fajar Andhika - Skills",
    description: "Fajar Andhika - Skills ",
    url: "https://portfolio.alamondai.com/skills",
    siteName: "Natnael Engeda - Portfolio",
    images: [
      {
        url: "/skills-seo-image.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Natnael Engeda - Skills',
    description: "Natnael Engeda - Software Developer | Fullstack Developer | Mobile App Developer | Reactjs | Nodejs | Flutter ",
    site: "@NatnaelEngeda",
    images: ['/skills-seo-image.jpg'],
    creator: "@NatnaelEngeda",
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