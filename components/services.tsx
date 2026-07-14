"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SERVICES } from "@/lib/data"
import type { Lang, Translation } from "@/lib/i18n"

export function Services({ lang, t }: { lang: Lang; t: Translation }) {
  return (
    <section id="services" className="bg-navy-light py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-extrabold text-balance text-white md:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70 text-pretty">{t.services.subtitle}</p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <li
              key={service.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={lang === "ms" ? service.descMs : service.descEn}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="font-heading text-xl font-bold text-lime">{service.label[lang]}</h3>
                <p className="flex-1 text-sm leading-relaxed text-white/70">
                  {lang === "ms" ? service.descMs : service.descEn}
                </p>
                <Link
                  href="/services#calculator"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-lime"
                >
                  {t.services.cta}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
