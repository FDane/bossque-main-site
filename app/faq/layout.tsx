import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Carwash Bossque",
  description: "Find answers about Carwash Bossque pricing, opening hours, bookings, services, and accepted vehicle types.",
  alternates: { canonical: "/faq" },
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children
}
