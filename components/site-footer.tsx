"use client"

import Link from "next/link"
import { FaInstagram, FaFacebookF } from "react-icons/fa"
import { SiTiktok } from "react-icons/si"
import { FiExternalLink } from "react-icons/fi"
import { MdMap } from "react-icons/md"
import { BUSINESS } from "@/lib/data"
import type { Translation } from "@/lib/i18n"

export function SiteFooter({ t }: { t: Translation }) {
  const links = [
    { href: "/about", label: t.nav.services === "Servis" ? "Tentang" : "About" },
    { href: "/services", label: t.nav.services },
    { href: "/faq", label: t.nav.faq },
    { href: "/contact", label: t.nav.services === "Servis" ? "Hubungi" : "Contact" },
  ]

  return (
    <footer className="border-t border-white/10 bg-navy py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 text-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-lime p-1">
            <img src="/icon.svg" alt="Carwash Bossque logo" className="size-6" />
          </span>
          <span className="font-heading text-lg font-bold text-white">{BUSINESS.name}</span>
        </Link>
        <p className="text-sm text-white/60">{t.footer.tagline}</p>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" aria-label="Footer navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-white/70 transition-colors hover:text-lime">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {(BUSINESS.sameAs || []).map((url) => {
            const label = url.includes("instagram") ? "Instagram" : url.includes("facebook") ? "Facebook" : url.includes("tiktok") ? "TikTok" : "Google Maps"
            const Icon = url.includes("instagram") ? FaInstagram : url.includes("facebook") ? FaFacebookF : url.includes("tiktok") ? SiTiktok : url.includes("maps") || url.includes("google") ? MdMap : FiExternalLink
            return (
              <a key={url} href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-white/70 transition-colors hover:text-lime">
                <Icon className="size-5" />
              </a>
            )
          })}
        </div>
        <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} {BUSINESS.name}. {t.footer.rights}</p>
      </div>
    </footer>
  )
}
