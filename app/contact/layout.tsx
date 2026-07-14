import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact & Location | Carwash Bossque",
  description: "Contact Carwash Bossque, check opening hours, and get directions to our car wash in Padang Besar, Perlis.",
  alternates: { canonical: "/contact" },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
