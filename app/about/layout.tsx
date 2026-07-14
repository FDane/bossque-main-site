import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Carwash Bossque",
  description: "Learn about Carwash Bossque, our mission, values, and vehicle care team in Padang Besar, Perlis.",
  alternates: { canonical: "/about" },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
