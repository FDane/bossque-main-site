"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Star } from "lucide-react"
import type { Translation } from "@/lib/i18n"

export function Hero({ t }: { t: Translation }) {
  return (
    <section id="top" className="relative overflow-hidden bg-navy min-h-[75vh]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-car.png"
          alt="Freshly washed glossy car with foam at Carwash Bossque"
          fill
          priority
          className="object-cover brightness-[0.45] saturate-110"
        />
        <div className="absolute inset-0 bg-navy/60" />
      </div>

      <div className="relative mx-auto flex min-h-[75vh] max-w-5xl flex-col justify-center px-4 py-16">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-4 py-1.5 text-sm font-medium text-lime">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {t.hero.badge}
          </span>
          <h1 className="font-heading text-4xl font-extrabold leading-tight text-balance text-white md:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-white/80 text-pretty">{t.hero.subtitle}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/services#calculator"
              className="rounded-full bg-lime px-6 py-3 font-semibold text-lime-foreground transition-transform hover:scale-105"
            >
              {t.hero.ctaPrimary}
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:border-lime hover:text-lime"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>
          <dl className="mt-6 flex flex-wrap gap-8">
            <div>
              <dt className="text-2xl font-bold text-lime">5,000+</dt>
              <dd className="text-sm text-white/70">{t.hero.stat1}</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-lime">8+</dt>
              <dd className="text-sm text-white/70">{t.hero.stat2}</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1 text-2xl font-bold text-lime">
                4.2 <Star className="h-5 w-5 fill-lime" aria-hidden="true" />
              </dt>
              <dd className="text-sm text-white/70">{t.hero.stat3}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
