"use client"

import Link from "next/link"
import { Clock3, Mail, MapPin, Phone } from "lucide-react"
import { BUSINESS, SERVICES } from "@/lib/data"
import { useLanguage } from "@/components/language-provider"

const quickLinks = [
  { href: "/", en: "Home", ms: "Utama" },
  { href: "/about", en: "About", ms: "Tentang" },
  { href: "/careers", en: "Careers", ms: "Kerjaya" },
  { href: "/contact", en: "Contact", ms: "Hubungi" },
]

export function Footer() {
  const { lang } = useLanguage()
  const isMs = lang === "ms"

  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.35fr]">
          <section className="flex flex-col gap-5" aria-labelledby="footer-brand">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl bg-lime p-1.5">
                <img src="/icon.svg" alt="" className="size-8" />
              </span>
              <span id="footer-brand" className="font-heading text-xl font-bold">Carwash Bossque</span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-white/65">
              {isMs
                ? "Pusat penjagaan automotif berteknologi di utara Malaysia, dibina untuk hasil yang konsisten, pantas dan teliti."
                : "A tech-driven automotive care facility in northern Malaysia, engineered for consistent, efficient and precise results."}
            </p>
            <p className="text-xs font-semibold uppercase tracking-widest text-lime">
              {isMs ? "Bersih dengan standard" : "Cleaned to a standard"}
            </p>
          </section>

          <nav className="flex flex-col gap-4" aria-labelledby="footer-quick-links">
            <h2 id="footer-quick-links" className="font-heading text-sm font-bold uppercase tracking-wider text-lime">
              {isMs ? "Pautan Pantas" : "Quick Links"}
            </h2>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-lime">{isMs ? link.ms : link.en}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="flex flex-col gap-4" aria-labelledby="footer-services">
            <h2 id="footer-services" className="font-heading text-sm font-bold uppercase tracking-wider text-lime">
              {isMs ? "Servis Kami" : "Our Services"}
            </h2>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.id}`} className="transition-colors hover:text-lime">
                    {service.label[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section className="flex flex-col gap-4" aria-labelledby="footer-contact">
            <h2 id="footer-contact" className="font-heading text-sm font-bold uppercase tracking-wider text-lime">
              {isMs ? "Maklumat Hubungan" : "Contact Info"}
            </h2>
            <address className="flex flex-col gap-4 text-sm not-italic leading-relaxed text-white/70">
              <a href={BUSINESS.sameAs[0]} target="_blank" rel="noreferrer" className="flex items-start gap-3 transition-colors hover:text-lime">
                <MapPin className="mt-0.5 size-5 shrink-0 text-lime" aria-hidden="true" />
                <span>{BUSINESS.addressLine}</span>
              </a>
              <a href={`tel:${BUSINESS.telephone}`} className="flex items-center gap-3 transition-colors hover:text-lime">
                <Phone className="size-5 shrink-0 text-lime" aria-hidden="true" />
                <span>{BUSINESS.telephone}</span>
              </a>
              <a href="mailto:hello@bossque.my" className="flex items-center gap-3 transition-colors hover:text-lime">
                <Mail className="size-5 shrink-0 text-lime" aria-hidden="true" />
                <span>hello@bossque.my</span>
              </a>
              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 size-5 shrink-0 text-lime" aria-hidden="true" />
                <span>{isMs ? "Sabtu–Khamis, 9:00 Pagi–7:00 Petang · Tutup Jumaat" : "Saturday–Thursday, 9:00 AM–7:00 PM · Closed Friday"}</span>
              </div>
            </address>
          </section>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Carwash Bossque. {isMs ? "Hak cipta terpelihara." : "All rights reserved."}</p>
          <p>Padang Besar, Perlis · Northern Malaysia</p>
        </div>
      </div>
    </footer>
  )
}
