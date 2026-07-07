"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { PromoPopup } from "@/components/promo-popup"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Calculator } from "@/components/calculator"
import { Services } from "@/components/services"
import { LocalSeo } from "@/components/local-seo"
import { Faq } from "@/components/faq"
import { SiteFooter } from "@/components/site-footer"
import { translations, type Lang } from "@/lib/i18n"

export default function Page() {
  const [lang, setLang] = useState<Lang>("ms")
  const t = translations[lang]

  return (
    <main>
      <Navbar lang={lang} setLang={setLang} t={t} />
      <PromoPopup t={t} />
      <Hero t={t} />
      <ScrollReveal>
        <Calculator lang={lang} t={t} />
      </ScrollReveal>
      <ScrollReveal>
        <Services lang={lang} t={t} />
      </ScrollReveal>
      <ScrollReveal>
        <LocalSeo lang={lang} t={t} />
      </ScrollReveal>
      <ScrollReveal>
        <Faq lang={lang} t={t} />
      </ScrollReveal>
      <SiteFooter t={t} />
    </main>
  )
}
