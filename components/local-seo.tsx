"use client"

import { Clock, Phone } from "lucide-react"
import { MdLocationOn, MdMap } from "react-icons/md"
import { FaInstagram, FaFacebookF } from "react-icons/fa"
import { SiTiktok } from "react-icons/si"
import { BUSINESS, buildWhatsAppUrl } from "@/lib/data"
import type { Lang, Translation } from "@/lib/i18n"

export function LocalSeo({ lang, t }: { lang: Lang; t: Translation }) {
  const waMessage = t.local.waMessage

  return (
    <section id="location" className="scroll-mt-16 bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-balance md:text-4xl">{t.local.title}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">{t.local.subtitle}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Hours */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold">
              <Clock className="h-5 w-5 text-navy" aria-hidden="true" /> {t.local.hoursTitle}
            </h3>
            <ul className="space-y-2">
              {BUSINESS.hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between border-b border-border pb-2 text-sm last:border-0">
                  <span className="font-medium text-foreground">{h.day}</span>
                  <span className="text-muted-foreground">{lang === "ms" ? h.ms : h.en}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & Contact */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold">
              <MdLocationOn className="h-5 w-5 text-navy" aria-hidden="true" /> {t.local.addressTitle}
            </h3>
            <address className="not-italic leading-relaxed text-muted-foreground">
              <p className="font-semibold text-foreground">{BUSINESS.name}</p>
              <p className="mt-1">{BUSINESS.addressLine}</p>
            </address>

            <div className="mt-4 flex flex-col gap-3">
              <a
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-sky-700"
                href={`tel:${BUSINESS.telephone.replace(/\s+/g, "")}`}
              >
                <Phone className="h-4 w-4 text-navy" aria-hidden="true" /> {BUSINESS.telephone}
              </a>

              <div className="flex items-center gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-3 py-1 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
                  href={buildWhatsAppUrl(waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.local.bookWhatsApp}
                </a>

                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-navy px-3 py-1 text-sm font-semibold text-white transition-colors hover:bg-sky-700 hover:border-white/5"
                  href={
                        BUSINESS.sameAs && BUSINESS.sameAs.length
                          ? BUSINESS.sameAs[0]
                          : BUSINESS.geo
                          ? `https://www.google.com/maps/dir/?api=1&destination=${BUSINESS.geo.latitude},${BUSINESS.geo.longitude}`
                          : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.addressLine)}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.local.getDirections}
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                {BUSINESS.areas.map((a) => (
                  <span key={a} className="rounded-full bg-lime/20 px-3 py-1 text-xs font-semibold text-navy">
                    {a}
                  </span>
                ))}
              </div>

              {/* Social badges */}
              <div className="mt-3 flex items-center gap-3">
                {(BUSINESS.sameAs || []).map((url) => {
                  const label = url.includes("instagram")
                    ? "Instagram"
                    : url.includes("facebook")
                    ? "Facebook"
                    : url.includes("tiktok")
                    ? "TikTok"
                    : "Profile"
                  const Icon = url.includes("instagram")
                    ? FaInstagram
                    : url.includes("facebook")
                    ? FaFacebookF
                    : url.includes("tiktok")
                    ? SiTiktok
                    : url.includes("maps") || url.includes("google")
                    ? MdMap
                    : null

                  return (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex items-center"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-xs font-semibold text-white">
                        {Icon ? <Icon className="h-4 w-4" /> : <span className="text-xs">{label[0]}</span>}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Map - full width below */}
        <div className="mt-6 rounded-2xl border border-dashed border-border bg-muted/40 p-0">
          {BUSINESS.geo ? (
            <div className="h-72 w-full">
              {/**
               * If a public GBP link is available in `BUSINESS.sameAs`, link the map
               * and get-directions action straight to the GBP so users see the profile.
               */}
              {(() => {
                const gbp = BUSINESS.sameAs && BUSINESS.sameAs.length ? BUSINESS.sameAs[0] : null
                const mapSrc = `https://www.google.com/maps?q=${BUSINESS.geo.latitude},${BUSINESS.geo.longitude}&hl=${lang === "ms" ? "ms" : "en"}&z=15&output=embed`
                return gbp ? (
                  <a href={gbp} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
                    <iframe
                      title="Carwash Bossque location"
                      src={mapSrc}
                      className="h-full w-full rounded-2xl"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </a>
                ) : (
                  <iframe
                    title="Carwash Bossque location"
                    src={mapSrc}
                    className="h-full w-full rounded-2xl"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                )
              })()}
            </div>
          ) : (
            <div className="flex min-h-56 items-center justify-center p-6 text-center">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <MdLocationOn className="h-8 w-8" aria-hidden="true" />
                <p className="text-sm">{t.local.mapPlaceholder}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
