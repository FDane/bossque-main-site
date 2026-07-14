"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Clock3, Sparkles } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import type { ServiceDetail } from "@/lib/service-details"

export function ServiceDetailContent({ service, bookingUrl }: { service: ServiceDetail; bookingUrl: string }) {
  const { lang } = useLanguage()
  const isMs = lang === "ms"

  return (
    <>
      <section className="bg-navy py-12 text-white md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[1fr_0.9fr]">
          <div className="flex flex-col items-start gap-6">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition-colors hover:text-lime">
              <ArrowLeft className="size-4" aria-hidden="true" />{isMs ? "Semua servis" : "All services"}
            </Link>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-lime">{service.eyebrow[lang]}</p>
              <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-tight text-balance sm:text-5xl lg:text-6xl">{service.title[lang]}</h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">{service.summary[lang]}</p>
            </div>
            <a href={bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-bold text-lime-foreground transition-transform hover:scale-105">
              {isMs ? `Tempah ${service.title.ms}` : `Book ${service.title.en}`}<ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <Image src={service.image} alt={service.title[lang]} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy text-lime"><Clock3 className="size-5" aria-hidden="true" /></span>
              <div><p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{isMs ? "Format servis" : "Service format"}</p><p className="mt-2 font-heading text-lg font-bold text-foreground">{service.duration[lang]}</p></div>
            </div>
            <div className="flex gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy text-lime"><Sparkles className="size-5" aria-hidden="true" /></span>
              <div><p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{isMs ? "Paling sesuai untuk" : "Best for"}</p><p className="mt-2 font-heading text-lg font-bold text-foreground">{service.bestFor[lang]}</p></div>
            </div>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-navy">{isMs ? "Proses kami" : "Our process"}</p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-balance text-foreground md:text-4xl">{isMs ? "Setiap langkah ada tujuannya." : "Every step has a purpose."}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{isMs ? "Pasukan kami mengikut aliran kerja yang jelas untuk menjaga konsistensi dan memastikan setiap kawasan penting diberi perhatian." : "Our team follows a clear workflow to protect consistency and make sure every important area receives focused attention."}</p>
              <ul className="mt-8 flex flex-col gap-3">
                {service.benefits.map((benefit) => <li key={benefit.en} className="flex items-start gap-3 text-sm text-foreground"><span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-lime"><Check className="size-3 text-lime-foreground" aria-hidden="true" /></span>{benefit[lang]}</li>)}
              </ul>
            </div>

            <ol className="flex flex-col gap-4">
              {service.steps.map((step, index) => (
                <li key={step.title.en} className="grid gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-[3rem_1fr]">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-navy font-heading text-lg font-bold text-lime">{String(index + 1).padStart(2, "0")}</span>
                  <div><h3 className="font-heading text-xl font-bold text-foreground">{step.title[lang]}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description[lang]}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-navy-light py-14 md:py-18">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center">
          <div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-widest text-lime">{isMs ? "Sedia untuk kenderaan lebih bersih?" : "Ready for a cleaner vehicle?"}</p><h2 className="mt-3 font-heading text-3xl font-extrabold text-balance text-white">{isMs ? `Tempah ${service.title.ms} hari ini.` : `Book your ${service.title.en} today.`}</h2></div>
          <a href={bookingUrl} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-lime px-6 py-3 font-bold text-lime-foreground transition-transform hover:scale-105">{isMs ? "Tempah di WhatsApp" : "Book on WhatsApp"}<ArrowRight className="size-4" aria-hidden="true" /></a>
        </div>
      </section>
    </>
  )
}
