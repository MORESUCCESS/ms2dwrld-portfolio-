import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MS2DWRLD - Multi-Talented Creator",
  description: "Software Developer, Music Artist, Virtual Numbers & Social Media Growth Services",
  keywords: "MS2DWRLD, software development, music artist, virtual numbers, social media growth",
  authors: [{ name: "MS2DWRLD" }],
  creator: "MS2DWRLD",
  publisher: "MS2DWRLD",
  robots: "index, follow",
  other: {
    "v0-attribution": "false",
    "v0-disable-branding": "true",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="v0-attribution" content="false" />
        <meta name="v0-disable-branding" content="true" />
      </head>
      <body className={inter.className}>
        <div suppressHydrationWarning>{children}</div>
      </body>
    </html>
  )
}
