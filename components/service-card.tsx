import Link from "next/link"
import {
  ShoppingBag,
  Warehouse,
  Wrench,
  LineChart,
  PenTool,
  Leaf,
  Thermometer,
  RefreshCw,
  Shield,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/i18n/i18n-context"


interface ServiceCardProps {
  title: string
  description: string
  icon: string
  href: string
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  const getIcon = (): LucideIcon => {
    switch (icon) {
      case "ShoppingBag":
        return ShoppingBag
      case "Warehouse":
        return Warehouse
      case "Wrench":
        return Wrench
      case "LineChart":
        return LineChart
      case "PenTool":
        return PenTool
      case "Leaf":
        return Leaf
      case "Thermometer":
        return Thermometer
      case "RefreshCw":
        return RefreshCw
      case "Shield":
        return Shield
      default:
        return ShoppingBag
    }
  }

  const Icon = getIcon()

  const { t } = useLocale()

  return (
    <div className="bg-card p-6 rounded-lg shadow-sm border flex flex-col h-full">
      <div className="h-12 w-12 rounded-full bg-cooltech-100 flex items-center justify-center mb-4 dark:bg-sky-100">
        <Icon className="h-6 w-6 text-cooltech-600 dark:text-sky-600" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
      <Button asChild variant="outline" className="mt-auto">
        <Link href={href}>{t("servicesPage.additionalServiceSection.cards.learnMore")}</Link>
      </Button>
    </div>
  )
}
