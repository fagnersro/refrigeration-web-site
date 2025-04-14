"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import HeroCarousel from "@/components/hero-carousel"
import { useLocale } from "@/i18n/i18n-context"

export default function Home() {
  const { t } = useLocale()

  return (
    <>
      {/* Hero Section with Carousel */}
      <HeroCarousel
        slides={[
          {
            image: "/placeholder.svg?height=800&width=1200",
            title: t("homePage.heroSection.slide1.title"),
            description: t("homePage.heroSection.slide1.description"),
            primaryCta: {
              text: t("homePage.heroSection.slide1.primaryCta"),
              href: "/services",
            },
            secondaryCta: {
              text: t("homePage.heroSection.slide1.secondaryCta"),
              href: "/contact",
            },
          },
          {
            image: "/placeholder.svg?height=800&width=1200",
            title: t("homePage.heroSection.slide2.title"),
            description: t("homePage.heroSection.slide2.description"),
            primaryCta: {
              text: t("homePage.heroSection.slide2.primaryCta"),
              href: "/services/energy-efficiency",
            },
            secondaryCta: {
              text: t("homePage.heroSection.slide2.secondaryCta"),
              href: "/contact",
            },
          },
          {
            image: "/placeholder.svg?height=800&width=1200",
            title: t("homePage.heroSection.slide3.title"),
            description: t("homePage.heroSection.slide3.description"),
            primaryCta: {
              text: t("homePage.heroSection.slide3.primaryCta"),
              href: "/services/smart-technology",
            },
            secondaryCta: {
              text: t("homePage.heroSection.slide3.secondaryCta"),
              href: "/contact",
            },
          },
        ]}
      />

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{t("homePage.featuresSection.features.header.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("homePage.featuresSection.features.header.description")}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="h-12 w-12 rounded-full bg-cooltech-100 flex items-center justify-center mb-4 dark:bg-sky-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-cooltech-600 dark:text-sky-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t("homePage.featuresSection.features.energyEfficient.title")}</h3>
              <p className="text-muted-foreground">{t("homePage.featuresSection.features.energyEfficient.description")}</p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="h-12 w-12 rounded-full bg-cooltech-100 flex items-center justify-center mb-4 dark:bg-sky-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-cooltech-600 dark:text-sky-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t("homePage.featuresSection.features.reliable.title")}</h3>
              <p className="text-muted-foreground">{t("homePage.featuresSection.features.reliable.description")}</p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="h-12 w-12 rounded-full bg-cooltech-100 flex items-center justify-center mb-4 dark:bg-sky-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-cooltech-600 dark:text-sky-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t("homePage.featuresSection.features.smart.title")}</h3>
              <p className="text-muted-foreground">{t("homePage.featuresSection.features.smart.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{t("homePage.servicesPreviewSection.header.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("homePage.servicesPreviewSection.header.description")}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <ServiceCard
              title={t("homePage.servicesPreviewSection.cards.commercial.title")}
              description={t("homePage.servicesPreviewSection.cards.commercial.description")}
              icon="ShoppingBag"
              href="/services/commercial"
            />

            <ServiceCard
              title={t("homePage.servicesPreviewSection.cards.industrial.title")}
              description={t("homePage.servicesPreviewSection.cards.industrial.description")}
              icon="Warehouse"
              href="/services/industrial"
            />

            <ServiceCard
              title={t("homePage.servicesPreviewSection.cards.maintenance.title")}
              description={t("homePage.servicesPreviewSection.cards.maintenance.description")}
              icon="Wrench"
              href="/services/maintenance"
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services">{t("homePage.servicesPreviewSection.cards.learnMore")}</Link>
            </Button>
          </div>          
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{t("homePage.testimonialsSection.header.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("homePage.testimonialsSection.header.description")}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote={t("homePage.testimonialsSection.testimonials.testimonial1.quote")}
              author={t("homePage.testimonialsSection.testimonials.testimonial1.author")}
              company={t("homePage.testimonialsSection.testimonials.testimonial1.company")}
            />

            <TestimonialCard
              quote={t("homePage.testimonialsSection.testimonials.testimonial2.quote")}
              author={t("homePage.testimonialsSection.testimonials.testimonial2.author")}
              company={t("homePage.testimonialsSection.testimonials.testimonial2.company")}
            />

            <TestimonialCard
              quote={t("homePage.testimonialsSection.testimonials.testimonial3.quote")}
              author={t("homePage.testimonialsSection.testimonials.testimonial3.author")}
              company={t("homePage.testimonialsSection.testimonials.testimonial3.company")}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-cooltech-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">{t("homePage.ctaSection.title")}</h2>
            <p className="text-xl text-slate-300 mb-8">{t("homePage.ctaSection.description")}</p>
            <Button
              asChild
              size="lg"
              className="bg-cooltech-500 hover:bg-cooltech-600 dark:bg-sky-600 dark:hover:bg-sky-700"
            >
              <Link href="/contact">{t("homePage.ctaSection.button")}</Link> 
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
