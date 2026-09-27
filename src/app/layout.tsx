import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google"

import { site } from "../../content/site"

import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.lede,
}

export const viewport: Viewport = {
  themeColor: "#f4f1e8",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full snap-y snap-proximity scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
