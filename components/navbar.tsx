"use client"

import { Droplets } from "lucide-react"
import type { Lang, Translation } from "@/lib/i18n"

export function Navbar({
  lang,
  setLang,
  t,
}: {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translation
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime p-1">
            <img src="/icon.svg" alt="Carwash Bossque logo" className="h-7 w-7" />
          </span>
          <span className="font-heading text-lg font-bold text-white">Carwash Bossque</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#services" className="text-sm font-medium text-white/80 transition-colors hover:text-lime">
            {t.nav.services}
          </a>
          <a href="#calculator" className="text-sm font-medium text-white/80 transition-colors hover:text-lime">
            {t.nav.pricing}
          </a>
          <a href="#location" className="text-sm font-medium text-white/80 transition-colors hover:text-lime">
            {t.nav.location}
          </a>
          <a href="#faq" className="text-sm font-medium text-white/80 transition-colors hover:text-lime">
            {t.nav.faq}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div
            className="flex items-center rounded-full border border-white/20 p-0.5"
            role="group"
            aria-label="Language switcher"
          >
            <button
              type="button"
              onClick={() => setLang("ms")}
              aria-pressed={lang === "ms"}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                lang === "ms" ? "bg-lime text-lime-foreground" : "text-white/70 hover:text-white"
              }`}
            >
              BM
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                lang === "en" ? "bg-lime text-lime-foreground" : "text-white/70 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>
          <a
            href="#calculator"
            className="hidden rounded-full bg-lime px-4 py-2 text-sm font-semibold text-lime-foreground transition-transform hover:scale-105 sm:inline-block"
          >
            {t.nav.book}
          </a>
        </div>
      </nav>
    </header>
  )
}
