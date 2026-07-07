"use client"

import { useMemo, useState } from "react"
import { Car, Info, MessageCircle } from "lucide-react"
import {
  SERVICES,
  VEHICLES,
  buildWhatsAppUrl,
  getPrice,
  type ServiceId,
  type VehicleId,
} from "@/lib/data"
import type { Lang, Translation } from "@/lib/i18n"

export function Calculator({ lang, t }: { lang: Lang; t: Translation }) {
  const [vehicle, setVehicle] = useState<VehicleId>("sedan")
  const [service, setService] = useState<ServiceId>("luar_dalam")

  const price = getPrice(vehicle, service)
  const vehicleLabel = VEHICLES.find((v) => v.id === vehicle)?.label[lang] ?? ""
  const serviceLabel = SERVICES.find((s) => s.id === service)?.label[lang] ?? ""

  const waUrl = useMemo(() => {
    if (price == null) return null
    const msg = t.calc.waMessage(vehicleLabel, serviceLabel, String(price))
    return buildWhatsAppUrl(msg)
  }, [price, vehicleLabel, serviceLabel, t])

  return (
    <section id="calculator" className="scroll-mt-16 bg-background py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-balance md:text-4xl">{t.calc.title}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">{t.calc.subtitle}</p>
        </div>

        <div className="grid gap-6 rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
          {/* Vehicle */}
          <fieldset>
            <legend className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
              <Car className="h-4 w-4" aria-hidden="true" /> {t.calc.vehicle}
            </legend>
            <div className="flex flex-wrap gap-2">
              {VEHICLES.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setVehicle(v.id)}
                  aria-pressed={vehicle === v.id}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    vehicle === v.id
                      ? "border-navy bg-navy text-white"
                      : "border-border bg-background text-foreground hover:border-navy"
                  }`}
                >
                  {v.label[lang]}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Service */}
          <fieldset>
            <legend className="mb-3 text-sm font-semibold text-foreground">{t.calc.service}</legend>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {SERVICES.map((s) => {
                const p = getPrice(vehicle, s.id)
                const disabled = p == null
                return (
                  <button
                    key={s.id}
                    type="button"
                    disabled={disabled}
                    onClick={() => setService(s.id)}
                    aria-pressed={service === s.id}
                    className={`flex flex-col items-start rounded-xl border px-4 py-3 text-left transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                      service === s.id
                        ? "border-navy bg-navy text-white"
                        : "border-border bg-background text-foreground hover:border-navy"
                    }`}
                  >
                    <span className="text-sm font-semibold">{s.label[lang]}</span>
                    <span
                      className={`text-xs ${service === s.id ? "text-white/70" : "text-muted-foreground"}`}
                    >
                      {lang === "ms" ? s.descMs : s.descEn}
                    </span>
                  </button>
                )
              })}
            </div>
          </fieldset>

          {/* Total */}
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-navy p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="text-sm font-medium text-white/60">{t.calc.total}</p>
              {price == null ? (
                <p className="mt-1 text-lg font-semibold text-white/80">{t.calc.unavailable}</p>
              ) : (
                <p className="mt-1 font-heading text-4xl font-extrabold text-lime">
                  RM{price}
                  <span className="ml-2 text-base font-medium text-white/60">
                    {vehicleLabel} · {serviceLabel}
                  </span>
                </p>
              )}
            </div>
            {waUrl ? (
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-semibold text-lime-foreground transition-transform hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                {t.calc.book}
              </a>
            ) : (
              <span className="text-sm text-white/50">{t.calc.selectPrompt}</span>
            )}
          </div>

          <p className="flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
            <Info className="h-4 w-4 shrink-0" aria-hidden="true" />
            {t.calc.note}
          </p>
        </div>
      </div>
    </section>
  )
}
