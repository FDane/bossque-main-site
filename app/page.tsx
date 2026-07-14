"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Quote, Sparkles } from "lucide-react"
import { Hero } from "@/components/hero"
import { PromoPopup } from "@/components/promo-popup"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/components/language-provider"
import { SERVICES } from "@/lib/data"

const testimonials = {
  ms: [
    { quote: "Kerja kemas dan pantas. Kereta terasa segar semula selepas cucian luar dan dalam.", name: "Pelanggan tempatan", detail: "Padang Besar" },
    { quote: "Mudah semak harga sebelum datang dan pilihan servis diterangkan dengan jelas.", name: "Pemandu harian", detail: "Perlis" },
    { quote: "Lokasi senang dicari dan tempahan awal menjadikan urusan lebih lancar.", name: "Pelanggan hujung minggu", detail: "Titi Tinggi" },
  ],
  en: [
    { quote: "Neat and efficient work. The car felt fresh again after the exterior and interior wash.", name: "Local customer", detail: "Padang Besar" },
    { quote: "It is easy to check the price before visiting, and the service choices are clearly explained.", name: "Daily driver", detail: "Perlis" },
    { quote: "The location is easy to find and booking ahead makes the visit run smoothly.", name: "Weekend customer", detail: "Titi Tinggi" },
  ],
}

export default function Page() {
  const { lang, t } = useLanguage()

  return (
    <>
      <PromoPopup t={t} />
      <Hero t={t} />
      <ScrollReveal>
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-navy"><Sparkles className="size-4" />{lang === "ms" ? "Pilihan utama" : "Featured care"}</p>
                <h2 className="font-heading text-3xl font-extrabold text-balance md:text-4xl">{lang === "ms" ? "Servis untuk setiap tahap kebersihan" : "Care for every level of clean"}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{lang === "ms" ? "Daripada cucian pantas hingga penjagaan menyeluruh, pilih servis yang sesuai untuk kenderaan anda." : "From a quick refresh to complete care, choose the right service for your vehicle."}</p>
              </div>
              <Link href="/services" className="inline-flex items-center gap-2 font-semibold text-navy hover:underline">{lang === "ms" ? "Lihat semua servis" : "Explore all services"}<ArrowRight className="size-4" /></Link>
            </div>
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {SERVICES.slice(0, 3).map((service) => (
                <li key={service.id} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                  <div className="relative aspect-[4/3]"><Image src={service.image} alt={lang === "ms" ? service.descMs : service.descEn} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></div>
                  <div className="flex flex-col gap-2 p-5"><h3 className="font-heading text-xl font-bold">{service.label[lang]}</h3><p className="text-sm leading-relaxed text-muted-foreground">{lang === "ms" ? service.descMs : service.descEn}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section className="bg-navy-light py-16 text-white md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-2xl text-center"><p className="text-sm font-bold uppercase tracking-wider text-lime">{lang === "ms" ? "Pengalaman pelanggan" : "Customer experience"}</p><h2 className="mt-3 font-heading text-3xl font-extrabold text-balance md:text-4xl">{lang === "ms" ? "Pemandu datang untuk cucian yang mudah" : "Drivers come for a cleaner, simpler visit"}</h2></div>
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonials[lang].map((item) => (
                <li key={item.quote} className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-navy p-6"><Quote className="size-7 text-lime" aria-hidden="true" /><blockquote className="flex-1 leading-relaxed text-white/80">&ldquo;{item.quote}&rdquo;</blockquote><div><p className="font-semibold text-white">{item.name}</p><p className="text-sm text-white/50">{item.detail}</p></div></li>
              ))}
            </ul>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
