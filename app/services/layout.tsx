import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Car Wash Services & Pricing | Carwash Bossque",
  description: "Explore car wash services and calculate pricing for cars, SUVs, MPVs, pickups, vans, lorries, and motorcycles in Padang Besar.",
  alternates: { canonical: "/services" },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
