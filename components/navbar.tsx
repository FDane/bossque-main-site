"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
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
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    { href: "/", label: lang === "ms" ? "Utama" : "Home" },
    { href: "/about", label: lang === "ms" ? "Tentang" : "About" },
    { href: "/services", label: t.nav.services },
    { href: "/faq", label: t.nav.faq },
    { href: "/contact", label: lang === "ms" ? "Hubungi" : "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-4" aria-label="Primary navigation">
        <div className="flex h-16 items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <span className="flex size-9 items-center justify-center rounded-lg bg-lime p-1">
              <img src="/icon.svg" alt="Carwash Bossque logo" className="size-7" />
            </span>
            <span className="font-heading text-base font-bold text-white sm:text-lg">Carwash Bossque</span>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {links.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-lime",
                    active ? "text-lime" : "text-white/80",
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-full border border-white/20 p-0.5" role="group" aria-label="Language switcher">
              {(["ms", "en"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setLang(option)}
                  aria-pressed={lang === option}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-semibold uppercase transition-colors",
                    lang === option ? "bg-lime text-lime-foreground" : "text-white/70 hover:text-white",
                  )}
                >
                  {option === "ms" ? "BM" : "EN"}
                </button>
              ))}
            </div>
            <Link href="/services#calculator" className="hidden rounded-full bg-lime px-4 py-2 text-sm font-semibold text-lime-foreground transition-transform hover:scale-105 sm:block">
              {t.nav.book}
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex size-9 items-center justify-center rounded-lg border border-white/20 text-white lg:hidden"
            >
              {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div id="mobile-navigation" className="flex flex-col gap-1 border-t border-white/10 py-3 lg:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:bg-white/10 hover:text-lime",
                  pathname === link.href ? "bg-white/10 text-lime" : "text-white/80",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        ) : null}
      </nav>
    </header>
  )
}
