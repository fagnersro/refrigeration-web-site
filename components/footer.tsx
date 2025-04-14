"use client"

import Link from "next/link"
import { Snowflake, Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react"
import { useLocale } from "@/i18n/i18n-context"

export default function Footer() {
  const { t } = useLocale()

  // Function to handle scroll to top
  const handleScrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  return (
    <footer className="bg-cooltech-800 text-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4" onClick={handleScrollToTop}>
              <Snowflake className="h-6 w-6 text-cooltech-400 dark:text-sky-400" />
              <span className="font-bold text-white">Orlifrio</span>
            </Link>
            <p className="text-slate-400 mb-4">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                  {t("navigation.home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  {t("navigation.about")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                  {t("navigation.services")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  {t("navigation.contact")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-400 hover:text-white transition-colors">
                  {t("navigation.careers")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">{t("footer.servicesTitle")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/commercial" className="text-slate-400 hover:text-white transition-colors">
                  {t("footer.servicesFooter.commercial")}
                </Link>
              </li>
              <li>
                <Link href="/services/industrial" className="text-slate-400 hover:text-white transition-colors">
                  {t("footer.servicesFooter.industrial")}
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="text-slate-400 hover:text-white transition-colors">
                  {t("footer.servicesFooter.maintenance")}
                </Link>
              </li>
              <li>
                <Link href="/services/energy-efficiency" className="text-slate-400 hover:text-white transition-colors">
                  {t("footer.servicesFooter.energy")}
                </Link>
              </li>
              <li>
                <Link href="/services/system-design" className="text-slate-400 hover:text-white transition-colors">
                  {t("footer.servicesFooter.design")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">{t("footer.contactUs")}</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-cooltech-400 dark:text-sky-400 mr-2 mt-0.5" />
                <span className="text-slate-400">info@cooltech.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-cooltech-400 dark:text-sky-400 mr-2 mt-0.5" />
                <span className="text-slate-400">(555) 123-4567</span>
              </li>
              <li className="text-slate-400">
                123 Cooling Avenue
                <br />
                Frostville, CA 94105
                <br />
                United States
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} CoolTech Refrigeration Solutions. {t("footer.rights")}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
              {t("footer.terms")}
            </Link>
            <Link href="/sitemap" className="text-slate-400 hover:text-white text-sm transition-colors">
              {t("footer.sitemap")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
