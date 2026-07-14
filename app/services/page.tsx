"use client"

import { Calculator } from "@/components/calculator"
import { PageHero } from "@/components/page-hero"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Services } from "@/components/services"
import { useLanguage } from "@/components/language-provider"

export default function ServicesPage() {
  const { lang, t } = useLanguage()
  return <><PageHero eyebrow={lang === "ms" ? "Hab servis" : "Service hub"} title={lang === "ms" ? "Pilih penjagaan yang tepat untuk kenderaan anda" : "Choose the right care for your vehicle"} description={lang === "ms" ? "Bandingkan servis, semak anggaran harga dan teruskan kepada tempahan melalui WhatsApp." : "Compare services, check an estimated price, and continue to booking through WhatsApp."} action={{ label: lang === "ms" ? "Semak harga" : "Check pricing", href: "#calculator" }} /><ScrollReveal><Services lang={lang} t={t} /></ScrollReveal><ScrollReveal><Calculator lang={lang} t={t} /></ScrollReveal></>
}
