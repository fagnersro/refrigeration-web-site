"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLocale } from "@/i18n/i18n-context"

export default function AboutPageClient() {
  const { t } = useLocale()

  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">{t("aboutPage.heroSection.title")}</h1>
              <p className="text-xl text-muted-foreground mb-6">
                {t("aboutPage.heroSection.description1")}
              </p>
              <p className="text-muted-foreground mb-6">
                {t("aboutPage.heroSection.description2")}
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="CoolTech headquarters"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{t("aboutPage.missionValuesSection.header.title")}</h2>
            <p className="text-lg text-muted-foreground">
              {t("aboutPage.missionValuesSection.header.description")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
              <div className="h-16 w-16 rounded-full bg-cooltech-100 flex items-center justify-center mx-auto mb-4 dark:bg-sky-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-cooltech-600 dark:text-sky-600"
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
              <h3 className="text-xl font-bold mb-2">{t("aboutPage.missionValuesSection.cards.card1.title")}</h3>
              <p className="text-muted-foreground">
                {t("aboutPage.missionValuesSection.cards.card1.description")}
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
              <div className="h-16 w-16 rounded-full bg-cooltech-100 flex items-center justify-center mx-auto mb-4 dark:bg-sky-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-cooltech-600 dark:text-sky-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t("aboutPage.missionValuesSection.cards.card2.title")}</h3>
              <p className="text-muted-foreground">
                {t("aboutPage.missionValuesSection.cards.card2.description")}
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
              <div className="h-16 w-16 rounded-full bg-cooltech-100 flex items-center justify-center mx-auto mb-4 dark:bg-sky-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-cooltech-600 dark:text-sky-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t("aboutPage.missionValuesSection.cards.card3.title")}</h3>
              <p className="text-muted-foreground">
                {t("aboutPage.missionValuesSection.cards.card3.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{t("aboutPage.teamSection.header.title")}</h2>
            <p className="text-lg text-muted-foreground">
              {t("aboutPage.teamSection.header.description")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-card rounded-lg overflow-hidden shadow-sm border">
              <div className="relative h-64 w-full">
                <Image src="/placeholder.svg?height=400&width=400" alt="CEO portrait" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{t("aboutPage.teamSection.teamMembers.member1.name")}</h3>
                <p className="text-sky-600 mb-4">{t("aboutPage.teamSection.teamMembers.member1.role")}</p>
                <p className="text-muted-foreground">
                  {t("aboutPage.teamSection.teamMembers.member1.description")}
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden shadow-sm border">
              <div className="relative h-64 w-full">
                <Image src="/placeholder.svg?height=400&width=400" alt="CTO portrait" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{t("aboutPage.teamSection.teamMembers.member2.name")}</h3>
                <p className="text-sky-600 mb-4">{t("aboutPage.teamSection.teamMembers.member2.role")}</p>
                <p className="text-muted-foreground">
                  {t("aboutPage.teamSection.teamMembers.member2.description")}
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden shadow-sm border">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Operations Director portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{t("aboutPage.teamSection.teamMembers.member3.name")}</h3>
                <p className="text-sky-600 mb-4">{t("aboutPage.teamSection.teamMembers.member3.role")}</p>
                <p className="text-muted-foreground">
                  {t("aboutPage.teamSection.teamMembers.member3.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{t("aboutPage.historyTimelineSection.header.title")}</h2>
            <p className="text-lg text-muted-foreground">
              {t("aboutPage.historyTimelineSection.header.description")}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l border-slate-200 pl-8 pb-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-sky-600"></div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-1">{t("aboutPage.historyTimelineSection.timeline.year1.year")}</h3>
                <p className="text-sky-600 mb-2">{t("aboutPage.historyTimelineSection.timeline.year1.event")}</p>
                <p className="text-muted-foreground">
                  {t("aboutPage.historyTimelineSection.timeline.year1.description")}
                </p>
              </div>
            </div>

            <div className="relative border-l border-slate-200 pl-8 pb-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-sky-600"></div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-1">{t("aboutPage.historyTimelineSection.timeline.year2.year")}</h3>
                <p className="text-sky-600 mb-2">{t("aboutPage.historyTimelineSection.timeline.year2.event")}</p>
                <p className="text-muted-foreground">
                  {t("aboutPage.historyTimelineSection.timeline.year2.description")}
                </p>
              </div>
            </div>

            <div className="relative border-l border-slate-200 pl-8 pb-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-sky-600"></div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-1">{t("aboutPage.historyTimelineSection.timeline.year3.year")}</h3>
                <p className="text-sky-600 mb-2">{t("aboutPage.historyTimelineSection.timeline.year3.event")}</p>
                <p className="text-muted-foreground">
                  {t("aboutPage.historyTimelineSection.timeline.year3.description")}
                </p>
              </div>
            </div>

            <div className="relative pl-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-sky-600"></div>
              <div>
                <h3 className="text-xl font-bold mb-1">{t("aboutPage.historyTimelineSection.timeline.year4.year")}</h3>
                <p className="text-sky-600 mb-2">{t("aboutPage.historyTimelineSection.timeline.year4.event")}</p>
                <p className="text-muted-foreground">
                  {t("aboutPage.historyTimelineSection.timeline.year4.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-cooltech-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">{t("aboutPage.ctaSection.title")}</h2>
            <p className="text-xl text-slate-300 mb-8">
              {t("aboutPage.ctaSection.description")}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-cooltech-500 hover:bg-cooltech-600 dark:bg-sky-600 dark:hover:bg-sky-700"
            >
              <Link href="/careers">{t("aboutPage.ctaSection.button")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
