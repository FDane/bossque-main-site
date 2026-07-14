import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Carwash Bossque in Padang Besar, Perlis. Explore automotive detailing and operations careers in a tech-forward vehicle care facility.",
  alternates: { canonical: "/careers" },
}

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children
}
