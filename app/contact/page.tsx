"use client"

import { ContactForm } from "@/components/contact-form"
import { LocalSeo } from "@/components/local-seo"
import { PageHero } from "@/components/page-hero"
import { useLanguage } from "@/components/language-provider"

export default function ContactPage() {
  const { lang, t } = useLanguage()
  return <><PageHero eyebrow={lang === "ms" ? "Hubungi Carwash Bossque" : "Contact Carwash Bossque"} title={lang === "ms" ? "Rancang kunjungan anda dengan mudah" : "Plan your visit with ease"} description={lang === "ms" ? "Hantar pertanyaan, semak waktu operasi atau dapatkan arah ke lokasi kami di Padang Besar." : "Send an enquiry, check our opening hours, or get directions to our Padang Besar location."} /><section className="bg-muted py-16 md:py-24"><div className="mx-auto max-w-4xl px-4"><ContactForm lang={lang} /></div></section><LocalSeo lang={lang} t={t} /></>
}
