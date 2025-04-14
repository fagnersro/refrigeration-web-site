import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"
import { LocaleProvider } from "@/i18n/i18n-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CoolTech Refrigeration Solutions",
  description: "Professional refrigeration services for commercial and industrial needs",
  keywords: "refrigeration, cold storage, commercial refrigeration, industrial cooling",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LocaleProvider>
            <ScrollToTop />
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <BackToTop />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'