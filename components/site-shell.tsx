"use client"

import { LanguageProvider, useLanguage } from "@/components/language-provider"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"

function ShellContent({ children }: { children: React.ReactNode }) {
  const { lang, setLang, t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main className="flex-1">{children}</main>
      <SiteFooter t={t} />
    </div>
  )
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ShellContent>{children}</ShellContent>
    </LanguageProvider>
  )
}
