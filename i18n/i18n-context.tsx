"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { enUS } from "./locales/en-US"
import { ptBR } from "./locales/pt-BR"

type Locale = "en-US" | "pt-BR"

type LocaleContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const locales = {
  "en-US": enUS,
  "pt-BR": ptBR,
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: ReactNode }) {
  // Initialize with a default locale
  const [locale, setLocale] = useState<Locale>("pt-BR")
  const [isClient, setIsClient] = useState(false)

  // This effect runs only once on the client side
  useEffect(() => {
    setIsClient(true)
    const savedLocale = localStorage.getItem("locale") as Locale | null
    if (savedLocale && (savedLocale === "en-US" || savedLocale === "pt-BR")) {
      setLocale(savedLocale)
    } else {
      // Check browser language
      const browserLang = navigator.language
      if (browserLang.startsWith("pt")) {
        setLocale("pt-BR")
      }
    }
  }, [])

  // This effect runs whenever the locale changes
  useEffect(() => {
    if (isClient) {
      localStorage.setItem("locale", locale)
      document.documentElement.lang = locale
    }
  }, [locale, isClient])

  // Function to get a nested translation by key path (e.g., "navigation.home")
  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = locales[locale]

    for (const k of keys) {
      if (value === undefined) return key
      value = value[k]
    }

    return value || key
  }

  return <LocaleContext.Provider value={{ locale, setLocale, t }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
