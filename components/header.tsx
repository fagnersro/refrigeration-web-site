"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Snowflake, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { useLocale } from "@/i18n/i18n-context"
import LanguageSwitcher from "./language-switcher"
import ThemeSwitcher from "./theme-switcher"

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLocale()

  const routes = [
    { name: t("navigation.home"), path: "/" },
    { name: t("navigation.about"), path: "/about" },
    { name: t("navigation.services"), path: "/services" },
    { name: t("navigation.contact"), path: "/contact" },
  ]

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

  // Handle navigation with scroll to top
  const handleNavigation = (path: string) => {
    if (isOpen) {
      setIsOpen(false)
    }

    // If we're already on the page, just scroll to top
    if (pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" onClick={() => handleNavigation("/")}>
          <Snowflake className="h-6 w-6 text-cooltech-600 dark:text-sky-600" />
          <span className="hidden font-bold sm:inline-block">Orlifrio</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              onClick={() => handleNavigation(route.path)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive(route.path) ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {route.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-1">
          <LanguageSwitcher />
          <ThemeSwitcher />

          <Button asChild className="hidden md:flex ml-2">
            <Link href="/contact" onClick={() => handleNavigation("/contact")}>
              {t("navigation.getQuote")}
            </Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="ml-2 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    onClick={() => handleNavigation(route.path)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      isActive(route.path) ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {route.name}
                  </Link>
                ))}
                <div className="flex space-x-2 mt-4">
                  <LanguageSwitcher />
                  <ThemeSwitcher />
                </div>
                <Button asChild className="mt-4">
                  <Link href="/contact" onClick={() => handleNavigation("/contact")}>
                    {t("navigation.getQuote")}
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
