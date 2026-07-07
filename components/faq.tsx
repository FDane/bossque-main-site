"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { FAQS } from "@/lib/data"
import type { Lang, Translation } from "@/lib/i18n"

export function Faq({ lang, t }: { lang: Lang; t: Translation }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // FAQPage structured data — always emitted in both languages' worth of content
  // is unnecessary; schema follows the language currently rendered on the page.
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: lang === "ms" ? f.question.ms : f.question.en,
      acceptedAnswer: {
        "@type": "Answer",
        text: lang === "ms" ? f.answer.ms : f.answer.en,
      },
    })),
  }

  return (
    <section id="faq" className="scroll-mt-16 bg-background py-16 md:py-24">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-balance md:text-4xl">{t.faq.title}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">{t.faq.subtitle}</p>
        </div>

        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i
            const question = lang === "ms" ? item.question.ms : item.question.en
            const answer = lang === "ms" ? item.answer.ms : item.answer.en
            return (
              <div key={i} className="overflow-hidden rounded-2xl border border-border bg-card">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-heading text-base font-bold text-foreground md:text-lg">{question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-navy transition-transform ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  className={`grid transition-all duration-200 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-relaxed text-muted-foreground text-pretty">{answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
