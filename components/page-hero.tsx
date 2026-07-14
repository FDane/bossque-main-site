import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function PageHero({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string
  title: string
  description: string
  action?: { label: string; href: string }
}) {
  return (
    <section className="bg-navy py-16 text-white md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-4">
        <p className="rounded-full border border-lime/40 bg-lime/10 px-4 py-1.5 text-sm font-semibold text-lime">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-heading text-4xl font-extrabold leading-tight text-balance md:text-5xl">
          {title}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-pretty text-white/70">{description}</p>
        {action ? (
          <Link
            href={action.href}
            className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-semibold text-lime-foreground transition-transform hover:scale-105"
          >
            {action.label}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        ) : null}
      </div>
    </section>
  )
}
