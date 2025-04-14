"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  // When the pathname changes, scroll to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // This component doesn't render anything
  return null
}
