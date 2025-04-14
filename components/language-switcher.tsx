"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLocale } from "@/i18n/i18n-context"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{t("common.language")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLocale("en-US")} className={locale === "en-US" ? "bg-accent" : ""}>
          <span className="mr-2">🇺🇸</span> English (US)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLocale("pt-BR")} className={locale === "pt-BR" ? "bg-accent" : ""}>
          <span className="mr-2">🇧🇷</span> Português (BR)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
