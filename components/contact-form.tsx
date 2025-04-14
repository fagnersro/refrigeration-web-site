"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "lucide-react"
import { useLocale } from "@/i18n/i18n-context"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { t } = useLocale()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-card p-8 rounded-lg border text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
          <CheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="text-xl font-bold mb-2">{t("contactPage.contactInformationAndForm.formSection.isSubmitted.title")}</h3>
        <p className="text-muted-foreground mb-4">{t("contactPage.contactInformationAndForm.formSection.isSubmitted.description")}</p>
        <Button onClick={() => setIsSubmitted(false)}>{t("contactPage.contactInformationAndForm.formSection.isSubmitted.button")}</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="first-name">{t("contactPage.contactInformationAndForm.formSection.form.firstName")}</Label>
          <Input id="first-name" placeholder="John" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">{t("contactPage.contactInformationAndForm.formSection.form.lastName")}</Label>
          <Input id="last-name" placeholder="Doe" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">{t("contactPage.contactInformationAndForm.formSection.form.email")}</Label>
        <Input id="email" type="email" placeholder="john.doe@example.com" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">{t("contactPage.contactInformationAndForm.formSection.form.phone")}</Label>
        <Input id="phone" type="tel" placeholder="(555) 123-4567" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">{t("contactPage.contactInformationAndForm.formSection.form.service")}</Label>
        <Select>
          <SelectTrigger id="service">
            <SelectValue placeholder={t("contactPage.contactInformationAndForm.formSection.form.selectService.placeholder")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="commercial">{t("contactPage.contactInformationAndForm.formSection.form.selectService.commercial")}</SelectItem>
            <SelectItem value="industrial">{t("contactPage.contactInformationAndForm.formSection.form.selectService.industrial")}</SelectItem>
            <SelectItem value="maintenance">{t("contactPage.contactInformationAndForm.formSection.form.selectService.maintenance")}</SelectItem>
            <SelectItem value="energy">{t("contactPage.contactInformationAndForm.formSection.form.selectService.energy")}</SelectItem>
            <SelectItem value="design">{t("contactPage.contactInformationAndForm.formSection.form.selectService.design")}</SelectItem>
            <SelectItem value="other">{t("contactPage.contactInformationAndForm.formSection.form.selectService.other")}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t("contactPage.contactInformationAndForm.formSection.form.message")}</Label>
        <Textarea id="message" placeholder={t("contactPage.contactInformationAndForm.formSection.form.messagePlaceholder")} className="min-h-[120px]" required />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? t("contactPage.contactInformationAndForm.formSection.form.sending") : t("contactPage.contactInformationAndForm.formSection.form.send")}
      </Button>
    </form>
  )
}
