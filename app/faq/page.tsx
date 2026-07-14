"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Faq } from "@/components/faq"
import { PageHero } from "@/components/page-hero"
import { useLanguage } from "@/components/language-provider"

export default function FaqPage() {
  const { lang, t } = useLanguage()
  return <><PageHero eyebrow={lang === "ms" ? "Pusat bantuan" : "Help centre"} title={lang === "ms" ? "Jawapan ringkas sebelum anda datang" : "Clear answers before your visit"} description={lang === "ms" ? "Ketahui tentang harga, waktu operasi, tempahan dan jenis kenderaan yang kami terima." : "Learn about pricing, opening hours, bookings, and the vehicle types we accept."} /><Faq lang={lang} t={t} /><section className="bg-navy-light py-12 text-white"><div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-5 px-4 md:flex-row md:items-center"><div><h2 className="font-heading text-2xl font-bold">{lang === "ms" ? "Masih perlukan bantuan?" : "Still need help?"}</h2><p className="mt-2 text-white/70">{lang === "ms" ? "Hubungi kami dan terangkan apa yang anda perlukan." : "Contact us and tell us what you need."}</p></div><Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 font-semibold text-lime-foreground">{lang === "ms" ? "Hubungi kami" : "Contact us"}<ArrowRight className="size-4" /></Link></div></section></>
}
