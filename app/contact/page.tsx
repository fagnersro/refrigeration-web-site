"use client"

import ContactForm from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useLocale } from "@/i18n/i18n-context"

export default function ContactPage() {
  const { t } = useLocale()

  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">{t("contactPage.heroSection.title")}</h1>
            <p className="text-xl text-muted-foreground">{t("contactPage.heroSection.description")}</p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-8">{t("contactPage.contactInformationAndForm.title")}</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cooltech-100 flex items-center justify-center mr-4 dark:bg-sky-100">
                    <MapPin className="h-5 w-5 text-cooltech-600 dark:text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{t("contactPage.contactInformationAndForm.location.title")}</h3>
                    <p className="text-muted-foreground">
                      123 Cooling Avenue
                      <br />
                      Frostville, CA 94105
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cooltech-100 flex items-center justify-center mr-4 dark:bg-sky-100">
                    <Phone className="h-5 w-5 text-cooltech-600 dark:text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{t("contactPage.contactInformationAndForm.phone.title")}</h3>
                    <p className="text-muted-foreground">
                      {t("contactPage.contactInformationAndForm.phone.main")} (555) 123-4567
                      <br />
                      {t("contactPage.contactInformationAndForm.phone.service")} (555) 987-6543
                      <br />
                      {t("contactPage.contactInformationAndForm.phone.tollFree")} 1-800-COOLTECH
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cooltech-100 flex items-center justify-center mr-4 dark:bg-sky-100">
                    <Mail className="h-5 w-5 text-cooltech-600 dark:text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{t("contactPage.contactInformationAndForm.email.title")}</h3>
                    <p className="text-muted-foreground">
                      {t("contactPage.contactInformationAndForm.email.general")} info@cooltech.com
                      <br />
                      {t("contactPage.contactInformationAndForm.email.service")} service@cooltech.com
                      <br />
                      {t("contactPage.contactInformationAndForm.email.sales")} sales@cooltech.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cooltech-100 flex items-center justify-center mr-4 dark:bg-sky-100">
                    <Clock className="h-5 w-5 text-cooltech-600 dark:text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{t("contactPage.contactInformationAndForm.hours.title")}</h3>
                    <p className="text-muted-foreground">
                      {t("contactPage.contactInformationAndForm.hours.hours")}
                      <br />
                      {t("contactPage.contactInformationAndForm.hours.saturday")}
                      <br />
                      {t("contactPage.contactInformationAndForm.hours.sunday")}
                      <br />
                      <span className="font-medium">{t("contactPage.contactInformationAndForm.hours.emergency")}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">{t("contactPage.contactInformationAndForm.serviceAreas.title")}</h3>
                <p className="text-muted-foreground mb-4">
                  {t("contactPage.contactInformationAndForm.serviceAreas.description")}
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-sky-600 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t("contactPage.contactInformationAndForm.serviceAreas.areas.sanFrancisco")}
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-sky-600 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t("contactPage.contactInformationAndForm.serviceAreas.areas.oakland")}
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-sky-600 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t("contactPage.contactInformationAndForm.serviceAreas.areas.sanJose")}
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-sky-600 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t("contactPage.contactInformationAndForm.serviceAreas.areas.paloAlto")}
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-sky-600 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t("contactPage.contactInformationAndForm.serviceAreas.areas.berkeley")}
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-sky-600 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t("contactPage.contactInformationAndForm.serviceAreas.areas.fremont")}
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-8">{t("contactPage.contactInformationAndForm.formSection.title")}</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{t("contactPage.mapSection.header.title")}</h2>
            <p className="text-lg text-muted-foreground">
              {t("contactPage.mapSection.header.description")}
            </p>
          </div>

          <div className="h-[400px] bg-slate-200 rounded-xl overflow-hidden shadow-lg">
            {/* This would be replaced with an actual map component in a real implementation */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-lg font-medium">{t("contactPage.mapSection.map.title")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">
              {t("contactPage.faqSection.title")}
            </h2>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-2">{t("contactPage.faqSection.question1.question")}</h3>
                <p className="text-muted-foreground">
                  {t("contactPage.faqSection.question1.answer")}
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-2">{t("contactPage.faqSection.question2.question")}</h3>
                <p className="text-muted-foreground">
                  {t("contactPage.faqSection.question2.answer")}
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-2">{t("contactPage.faqSection.question3.question")}</h3>
                <p className="text-muted-foreground">
                  {t("contactPage.faqSection.question3.answer")}
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-2">{t("contactPage.faqSection.question4.question")}</h3>
                <p className="text-muted-foreground">
                  {t("contactPage.faqSection.question4.answer")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
