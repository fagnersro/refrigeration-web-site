"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    // Check if we're near the footer (about 500px from the bottom of the page)
    const scrolled = window.scrollY
    const nearFooter = document.body.scrollHeight - (window.innerHeight + scrolled) < 500

    if (scrolled > 300 || nearFooter) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <Button
      variant="secondary"
      size="icon"
      className={cn(
        "fixed bottom-6 right-6 z-50 rounded-full shadow-lg transition-opacity duration-300 bg-cooltech-500 hover:bg-cooltech-600 text-white dark:bg-sky-600 dark:hover:bg-sky-700",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  )
}
