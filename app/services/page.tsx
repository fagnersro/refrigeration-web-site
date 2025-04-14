"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import { useLocale } from "@/i18n/i18n-context"

export default function ServicesPage() {
  const { t } = useLocale()

  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">{t("servicesPage.heroSection.title")}</h1>
            <p className="text-xl text-muted-foreground">{t("servicesPage.heroSection.description")}</p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {/* Commercial Refrigeration */}
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold tracking-tight mb-4">{t("servicesPage.mainServicesSection.commercial.title")}</h2>
                <p className="text-muted-foreground mb-6">{t("servicesPage.mainServicesSection.commercial.description")}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-sky-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{t("servicesPage.mainServicesSection.commercial.features.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-sky-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{t("servicesPage.mainServicesSection.commercial.features.feature2")}</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-sky-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{t("servicesPage.mainServicesSection.commercial.features.feature3")}</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-sky-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{t("servicesPage.mainServicesSection.commercial.features.feature4")}</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/services/commercial">{t("servicesPage.mainServicesSection.commercial.learnMore")}</Link>
                </Button>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg order-1 md:order-2">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Commercial refrigeration systems"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Industrial Refrigeration */}
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Industrial refrigeration systems"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">{t("servicesPage.mainServicesSection.industrial.title")}</h2>
                <p className="text-muted-foreground mb-6">{t("servicesPage.mainServicesSection.industrial.description")}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-sky-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{t("servicesPage.mainServicesSection.industrial.features.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-sky-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{t("servicesPage.mainServicesSection.industrial.features.feature2")}</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-sky-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{t("servicesPage.mainServicesSection.industrial.features.feature3")}</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-sky-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{t("servicesPage.mainServicesSection.industrial.features.feature4")}</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/services/industrial">{t("servicesPage.mainServicesSection.industrial.learnMore")}</Link>
                </Button>
              </div>
            </div>

            {/* Maintenance & Repair */}
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold tracking-tight mb-4">{t("servicesPage.mainServicesSection.maintenance.title")}</h2>
                <p className="text-muted-foreground mb-6">{t("servicesPage.mainServicesSection.maintenance.description")}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-sky-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{t("servicesPage.mainServicesSection.maintenance.features.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-sky-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{t("servicesPage.mainServicesSection.maintenance.features.feature2")}</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-sky-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{t("servicesPage.mainServicesSection.maintenance.features.feature3")}</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-sky-600 mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{t("servicesPage.mainServicesSection.maintenance.features.feature4")}</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/services/maintenance">{t("servicesPage.mainServicesSection.maintenance.learnMore")}</Link>
                </Button>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg order-1 md:order-2">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Refrigeration maintenance and repair"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{t("servicesPage.additionalServiceSection.hero.title")}</h2>
            <p className="text-lg text-muted-foreground">
              {t("servicesPage.additionalServiceSection.hero.description")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <ServiceCard
              title={t("servicesPage.additionalServiceSection.cards.card1.title")}
              description={t("servicesPage.additionalServiceSection.cards.card1.description")}
              icon="LineChart"
              href="/services/energy-efficiency"
            />

            <ServiceCard
              title={t("servicesPage.additionalServiceSection.cards.card2.title")}
              description={t("servicesPage.additionalServiceSection.cards.card2.description")}
              icon="PenTool"
              href="/services/system-design"
            />

            <ServiceCard
              title={t("servicesPage.additionalServiceSection.cards.card3.title")}
              description={t("servicesPage.additionalServiceSection.cards.card3.description")}
              icon="Leaf"
              href="/services/refrigerant-management"
            />

            <ServiceCard
              title={t("servicesPage.additionalServiceSection.cards.card4.title")}
              description={t("servicesPage.additionalServiceSection.cards.card4.description")}
              icon="Thermometer"
              href="/services/temperature-monitoring"
            />

            <ServiceCard
              title={t("servicesPage.additionalServiceSection.cards.card5.title")}
              description={t("servicesPage.additionalServiceSection.cards.card5.description")}
              icon="RefreshCw"
              href="/services/equipment-upgrades"
            />

            <ServiceCard
              title={t("servicesPage.additionalServiceSection.cards.card6.title")}
              description={t("servicesPage.additionalServiceSection.cards.card6.description")}
              icon="Shield"
              href="/services/compliance"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-cooltech-700 text-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">{t("servicesPage.ctaSection.title")}</h2>
            <p className="text-xl text-slate-300 mb-8">{t("servicesPage.ctaSection.description")}</p>
            <Button
              asChild
              size="lg"
              className="bg-cooltech-500 hover:bg-cooltech-600 dark:bg-sky-600 dark:hover:bg-sky-700"
            >
              <Link href="/contact">{t("servicesPage.ctaSection.button")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
