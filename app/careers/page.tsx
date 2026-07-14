"use client"

import { ArrowUpRight, Cpu, GraduationCap, ShieldCheck, Users } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { useLanguage } from "@/components/language-provider"

const culture = [
  {
    icon: Cpu,
    en: { title: "Tools that raise the standard", text: "Work with structured checklists, modern equipment and clear service systems—not guesswork." },
    ms: { title: "Alat yang menaikkan standard", text: "Bekerja dengan senarai semak, peralatan moden dan sistem servis yang jelas—bukan tekaan." },
  },
  {
    icon: GraduationCap,
    en: { title: "Learn every shift", text: "Build practical skills through coaching, service reviews and hands-on development across vehicle types." },
    ms: { title: "Belajar setiap syif", text: "Bina kemahiran praktikal melalui bimbingan, semakan servis dan latihan untuk pelbagai kenderaan." },
  },
  {
    icon: ShieldCheck,
    en: { title: "Safety before speed", text: "A disciplined facility, careful chemical handling and clean work bays protect our team and every vehicle." },
    ms: { title: "Keselamatan sebelum kelajuan", text: "Fasiliti berdisiplin, pengendalian bahan kimia dan ruang kerja bersih melindungi pasukan serta kenderaan." },
  },
  {
    icon: Users,
    en: { title: "One bay, one team", text: "We communicate clearly, support one another during busy periods and take shared pride in every handover." },
    ms: { title: "Satu ruang, satu pasukan", text: "Kami berkomunikasi dengan jelas, saling membantu ketika sibuk dan bangga dengan setiap penyerahan." },
  },
]

const roles = [
  {
    title: { en: "Detailing Specialist", ms: "Pakar Detailing" },
    summary: { en: "Deliver precise exterior, interior and engine-bay care while maintaining a consistently premium finish.", ms: "Laksanakan penjagaan luaran, dalaman dan ruang enjin secara teliti dengan hasil premium yang konsisten." },
    skills: { en: ["Quality-focused", "Hands-on learner", "Vehicle care experience preferred"], ms: ["Fokus pada kualiti", "Suka belajar secara praktikal", "Pengalaman penjagaan kenderaan diutamakan"] },
  },
  {
    title: { en: "Operations Assistant", ms: "Pembantu Operasi" },
    summary: { en: "Keep bookings, customer flow and daily bay readiness moving smoothly from arrival to handover.", ms: "Pastikan tempahan, aliran pelanggan dan kesiapsiagaan ruang operasi berjalan lancar dari ketibaan hingga penyerahan." },
    skills: { en: ["Clear communicator", "Organised under pressure", "Comfortable with digital tools"], ms: ["Komunikasi jelas", "Teratur ketika sibuk", "Selesa menggunakan alat digital"] },
  },
]

export default function CareersPage() {
  const { lang } = useLanguage()
  const isMs = lang === "ms"

  return (
    <>
      <PageHero
        eyebrow={isMs ? "Kerjaya di Bossque" : "Careers at Bossque"}
        title={isMs ? "Bina kerjaya dengan standard yang lebih tinggi." : "Build your career around a higher standard."}
        description={isMs ? "Sertai fasiliti penjagaan automotif moden di Perlis yang menghargai kemahiran, sistem kerja dan hasil yang membanggakan." : "Join a modern automotive care facility in Perlis that values skill, thoughtful systems and work you can be proud to hand over."}
      />

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-navy">{isMs ? "Budaya Kami" : "Our Culture"}</p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-balance text-foreground md:text-4xl">
              {isMs ? "Kerja teknikal. Pasukan yang rapat. Kemajuan yang nyata." : "Technical work. A close team. Visible progress."}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {isMs ? "Kami menggabungkan kemahiran tangan dengan proses yang boleh diukur supaya setiap ahli pasukan tahu rupa kerja yang cemerlang." : "We combine hands-on craft with measurable processes, so every teammate knows what excellent work looks like and how to keep improving."}
            </p>
          </div>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {culture.map((item) => {
              const copy = item[lang]
              const Icon = item.icon
              return (
                <li key={copy.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-navy text-lime"><Icon className="size-5" aria-hidden="true" /></span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-foreground">{copy.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy.text}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="bg-navy-light py-16 md:py-24" aria-labelledby="open-roles">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-lime">{isMs ? "Jawatan Terbuka" : "Open Positions"}</p>
              <h2 id="open-roles" className="mt-3 font-heading text-3xl font-extrabold text-balance text-white md:text-4xl">
                {isMs ? "Cari tempat anda dalam pasukan." : "Find your place on the team."}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/65">
              {isMs ? "Semua jawatan berpusat di Padang Besar, Perlis. Latihan kerja disediakan untuk calon yang mempunyai sikap dan disiplin yang betul." : "All roles are based in Padang Besar, Perlis. On-the-job development is available for candidates with the right attitude and discipline."}
            </p>
          </div>

          <ul className="mt-10 grid gap-6 lg:grid-cols-2">
            {roles.map((role) => {
              const subject = isMs ? `Permohonan: ${role.title.ms}` : `Application: ${role.title.en}`
              const body = isMs ? `Hai Carwash Bossque,\n\nSaya ingin memohon jawatan ${role.title.ms}.\n\nNama:\nNombor telefon:\nPengalaman berkaitan:\n` : `Hi Carwash Bossque,\n\nI would like to apply for the ${role.title.en} position.\n\nName:\nPhone number:\nRelevant experience:\n`
              const href = `mailto:hello@bossque.my?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

              return (
                <li key={role.title.en} className="group flex flex-col rounded-2xl border border-white/10 bg-navy p-7 shadow-lg transition-transform hover:-translate-y-1 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-lime">{isMs ? "Sepenuh masa · Di lokasi" : "Full-time · On-site"}</p>
                      <h3 className="mt-3 font-heading text-2xl font-bold text-white">{role.title[lang]}</h3>
                    </div>
                    <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/60">Padang Besar</span>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-white/70">{role.summary[lang]}</p>
                  <ul className="mt-6 flex flex-col gap-2 text-sm text-white/75">
                    {role.skills[lang].map((skill) => <li key={skill} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-lime" />{skill}</li>)}
                  </ul>
                  <a href={href} className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-bold text-lime-foreground transition-transform group-hover:scale-105">
                    {isMs ? "Mohon Sekarang" : "Apply Now"}<ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}
