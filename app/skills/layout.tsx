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
    url: "https://fan-png.vercel.app/skills",
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