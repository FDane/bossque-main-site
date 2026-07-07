"use client"

import { useEffect, useState } from "react"
import { FaTimes } from "react-icons/fa"
import { WHATSAPP_NUMBER } from "@/lib/data"
import type { Translation } from "@/lib/i18n"

export function PromoPopup({ t }: { t: Translation }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const dismissed = window.localStorage.getItem("promoDontShowAgain") === "true"
    if (!dismissed) {
      setIsOpen(true)
    }
  }, [])

    useEffect(() => {
      if (!isOpen) return
      const autoClose = window.setTimeout(() => setIsOpen(false), 8000)
      return () => window.clearTimeout(autoClose)
    }, [isOpen])

    useEffect(() => {
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsOpen(false)
      }
      if (isOpen) window.addEventListener("keydown", onKey)
      return () => window.removeEventListener("keydown", onKey)
    }, [isOpen])

  const closeModal = (dontShowAgain = false) => {
    if (dontShowAgain) {
      window.localStorage.setItem("promoDontShowAgain", "true")
    }
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.promo.title}
      className="fixed left-4 right-4 sm:right-6 sm:left-auto bottom-4 sm:bottom-12 z-50 w-[calc(100%-2rem)] max-w-[360px] motion-safe:animate-slide-in-right motion-reduce:animate-none rounded-3xl border border-white/15 bg-navy/95 p-4 sm:p-5 shadow-2xl shadow-black/30 backdrop-blur-xl"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-lime/80">{t.promo.label}</p>
          <h2 className="mt-2 text-lg font-semibold text-white">{t.promo.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/70">{t.promo.text}</p>
        </div>
        <button
          type="button"
          onClick={() => closeModal()}
          aria-label="Close promotion"
          className="rounded-full border border-white/10 bg-white/10 p-2 text-white/80 transition hover:bg-white/15 hover:text-white"
        >
          <FaTimes className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.promo.waText)}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center rounded-full bg-lime px-4 py-3 text-sm font-semibold text-navy transition hover:bg-lime/90"
        >
          {t.promo.cta}
        </a>
        <button
          type="button"
          onClick={() => closeModal(true)}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/15 hover:text-white"
        >
          {t.promo.noShow}
        </button>
      </div>
    </div>
  )
}
