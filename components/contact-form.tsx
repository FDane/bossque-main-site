"use client"

import { useState, type FormEvent } from "react"
import { Mail, Send } from "lucide-react"
import type { Lang } from "@/lib/i18n"

const EMAIL = "hello@bossque.my"

export function ContactForm({ lang }: { lang: Lang }) {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const text = lang === "ms" ? { title: "Hantar pertanyaan", intro: "Isi butiran anda dan aplikasi e-mel akan dibuka dengan mesej yang telah disediakan.", name: "Nama", email: "E-mel", phone: "Nombor telefon", subject: "Subjek", message: "Mesej", send: "Buka aplikasi e-mel", required: "Ruangan ini diperlukan.", invalid: "Masukkan alamat e-mel yang sah.", subjectPlaceholder: "Contoh: Pertanyaan servis", messagePlaceholder: "Beritahu kami bagaimana kami boleh membantu." } : { title: "Send an enquiry", intro: "Complete your details and your email app will open with a prepared message.", name: "Name", email: "Email", phone: "Phone number", subject: "Subject", message: "Message", send: "Open email app", required: "This field is required.", invalid: "Enter a valid email address.", subjectPlaceholder: "Example: Service enquiry", messagePlaceholder: "Tell us how we can help." }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get("name") ?? "").trim()
    const email = String(form.get("email") ?? "").trim()
    const phone = String(form.get("phone") ?? "").trim()
    const subject = String(form.get("subject") ?? "").trim()
    const message = String(form.get("message") ?? "").trim()
    const nextErrors: Record<string, string> = {}
    if (!name) nextErrors.name = text.required
    if (!email) nextErrors.email = text.required
    else if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = text.invalid
    if (!subject) nextErrors.subject = text.required
    if (!message) nextErrors.message = text.required
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    const body = `${lang === "ms" ? "Nama" : "Name"}: ${name}\n${lang === "ms" ? "E-mel" : "Email"}: ${email}\n${lang === "ms" ? "Telefon" : "Phone"}: ${phone || "-"}\n\n${message}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const fieldClass = "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-navy/30"
  return <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8"><div className="flex items-start gap-3"><span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-lime text-lime-foreground"><Mail className="size-5" /></span><div><h2 className="font-heading text-2xl font-bold">{text.title}</h2><p className="mt-1 leading-relaxed text-muted-foreground">{text.intro}</p></div></div><form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit} noValidate><div className="grid gap-5 sm:grid-cols-2"><Field label={text.name} name="name" error={errors.name} className={fieldClass} required /><Field label={text.email} name="email" type="email" error={errors.email} className={fieldClass} required /><Field label={text.phone} name="phone" type="tel" error={errors.phone} className={fieldClass} /><Field label={text.subject} name="subject" error={errors.subject} className={fieldClass} placeholder={text.subjectPlaceholder} required /></div><label className="text-sm font-semibold" htmlFor="message">{text.message}<textarea id="message" name="message" rows={5} required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} placeholder={text.messagePlaceholder} className={fieldClass} />{errors.message ? <span id="message-error" className="mt-1 block text-sm text-destructive">{errors.message}</span> : null}</label><button type="submit" className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-navy px-6 py-3 font-semibold text-white transition-transform hover:scale-105"><Send className="size-4" />{text.send}</button></form></div>
}

function Field({ label, name, type = "text", error, className, placeholder, required = false }: { label: string; name: string; type?: string; error?: string; className: string; placeholder?: string; required?: boolean }) {
  return <label className="text-sm font-semibold" htmlFor={name}>{label}<input id={name} name={name} type={type} required={required} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined} placeholder={placeholder} className={className} />{error ? <span id={`${name}-error`} className="mt-1 block text-sm text-destructive">{error}</span> : null}</label>
}
