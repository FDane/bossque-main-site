import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Check, Clock3, Sparkles } from "lucide-react"
import { SITE_URL, buildWhatsAppUrl } from "@/lib/data"
import { SERVICE_DETAILS, getServiceDetail } from "@/lib/service-details"
import { ServiceDetailContent } from "@/components/service-detail-content"

export function generateStaticParams() {
  return SERVICE_DETAILS.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceDetail(slug)
  if (!service) return {}

  const path = `/services/${service.slug}`
  return {
    title: service.title.en,
    description: service.seoDescription,
    alternates: { canonical: path },
    openGraph: {
      title: `${service.title.en} | Carwash Bossque`,
      description: service.seoDescription,
      url: `${SITE_URL}${path}`,
      images: [{ url: service.image, alt: service.title.en }],
    },
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceDetail(slug)
  if (!service) notFound()

  const bookingUrl = buildWhatsAppUrl(`Hi Carwash Bossque, I would like to book the ${service.title.en} service. Please share the next available slot.`)

  return <ServiceDetailContent service={service} bookingUrl={bookingUrl} />
}
