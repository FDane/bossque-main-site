// Central business data. Edit prices, services, and contact info here.

// Replace with the real WhatsApp business number (international format, no "+").
export const WHATSAPP_NUMBER = "60137187040"

// TODO: Replace with your real production domain (no trailing slash).
// This single value drives metadataBase, canonical URLs, sitemap.xml, robots.txt,
// and the JSON-LD schema — update it here once your domain is live.
export const SITE_URL = "https://www.carwashbossque.my"

export const BUSINESS = {
  name: "Carwash Bossque",
  legalName: "Carwash Bossque",
  addressLine: "Berhadapan Masjid Othamaniah, Jalan Padang Besar (U), Kampung Syed Afdan, 02100 Padang Besar, Perlis, Malaysia",
  // TODO: Split into precise components once the exact shoplot address is confirmed.
  addressLocality: "Kangar",
  addressRegion: "Perlis",
  postalCode: "01000",
  addressCountry: "MY",
  // TODO: Replace with the exact GPS coordinates of the outlet (Google Maps > right-click > coordinates).
  geo: { latitude: 6.65647209985443, longitude: 100.28396339146431 },
  telephone: `+${WHATSAPP_NUMBER}`,
  priceRange: "RM5 - RM50",
  areas: ["Titi Tinggi", "Padang Besar"],
  // TODO: Add real profile URLs (Facebook, Instagram, Google Business Profile, TikTok) once available.
  sameAs: [
    "https://maps.app.goo.gl/fste6utYVGpDe33k9",
    "https://www.instagram.com/carwashbossque/",
    "https://www.facebook.com/p/Carwash-Bossque-61565735184334/",
    "https://www.tiktok.com/@carwashbossque",
  ] as string[],
  hours: [
    { day: "Mon", en: "9:00 AM – 7:00 PM", ms: "9:00 Pagi – 7:00 Petang" },
    { day: "Tue", en: "9:00 AM – 7:00 PM", ms: "9:00 Pagi – 7:00 Petang" },
    { day: "Wed", en: "9:00 AM – 7:00 PM", ms: "9:00 Pagi – 7:00 Petang" },
    { day: "Thu", en: "9:00 AM – 7:00 PM", ms: "9:00 Pagi – 7:00 Petang" },
    { day: "Sat", en: "9:00 AM – 7:00 PM", ms: "9:00 Pagi – 7:00 Petang" },
    { day: "Sun", en: "9:00 AM – 7:00 PM", ms: "9:00 Pagi – 7:00 Petang" },
  ],
}

// Maps our Mon–Sun hours to schema.org dayOfWeek + opens/closes (24h "HH:MM").
export const OPENING_HOURS_SPEC = [
  { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "09:00", closes: "19:00" },
  { days: ["Friday"], opens: "09:00", closes: "19:00" },
  { days: ["Saturday", "Sunday"], opens: "09:00", closes: "19:00" },
]

export type FaqItem = { question: { en: string; ms: string }; answer: { en: string; ms: string } }

// FAQ content — shown on-page and mirrored into FAQPage JSON-LD for rich results.
export const FAQS: FaqItem[] = [
  {
    question: {
      en: "How much does a car wash cost in Carwash Bossque?",
      ms: "Berapa harga cuci kereta di Carwash Bossque?",
    },
    answer: {
      en: "Prices start from RM5 for a quick spray rinse and range up to RM50 for a full exterior + interior wash with chemical treatment and engine bay cleaning, depending on your vehicle type (Sedan, SUV, MPV, Pickup, Van, Lorry, or Motorcycle). Use our instant price calculator above to get an exact quote.",
      ms: "Harga bermula dari RM5 untuk semburan pantas sehingga RM50 untuk cucian luar + dalam penuh dengan rawatan kimia dan cucian enjin, bergantung kepada jenis kenderaan anda (Sedan, SUV, MPV, Pickup, Van, Lori, atau Motosikal). Gunakan kalkulator harga segera di atas untuk anggaran tepat.",
    },
  },
  {
    question: {
      en: "Where is Carwash Bossque located?",
      ms: "Di manakah lokasi Carwash Bossque?",
    },
    answer: {
      en: "We're located along Jalan Kangar - Padang Besar, Perlis, conveniently serving customers in Padang Besar.",
      ms: "Kami terletak di Jalan Kangar - Padang Besar, Perlis, memudahkan pelanggan di Padang Besar.",
    },
  },
  {
    question: {
      en: "What are your operating hours?",
      ms: "Apakah waktu operasi anda?",
    },
    answer: {
      en: "We're open everyday from 9:00 AM–7:00 PM, and closes on Friday.",
      ms: "Kami buka setiap hari dari 9:00 PG–7:00 PTG, dan tutup pada hari Jumaat.",
    },
  },
  {
    question: {
      en: "Do I need to book an appointment, or can I walk in?",
      ms: "Perlukah saya tempah dahulu, atau boleh terus datang?",
    },
    answer: {
      en: "Walk-ins are always welcome, but booking ahead on WhatsApp helps you skip the queue, especially on weekends. Tap any \"Book Now\" button to send us your vehicle and service details instantly.",
      ms: "Kami sentiasa alu-alukan pelanggan tanpa temujanji, tetapi menempah lebih awal di WhatsApp membantu anda mengelak giliran, terutamanya pada hujung minggu. Tekan mana-mana butang \"Tempah\" untuk hantar butiran kenderaan & servis serta-merta.",
    },
  },
  {
    question: {
      en: "What vehicle types and services do you offer?",
      ms: "Apakah jenis kenderaan dan servis yang anda tawarkan?",
    },
    answer: {
      en: "We wash Sedans, SUVs, MPVs, Pickups, Vans, Lorries, and Motorcycles, with services ranging from a quick exterior spray to full exterior/interior detailing, chemical snow-foam wash, vacuuming, and engine bay cleaning.",
      ms: "Kami mencuci Sedan, SUV, MPV, Pickup, Van, Lori, dan Motosikal, dengan servis dari semburan luar pantas hingga cucian luar/dalam menyeluruh, cucian buih kimia, vakum, dan pencucian ruang enjin.",
    },
  },
  {
    question: {
      en: "Is there an extra charge for heavily soiled vehicles?",
      ms: "Adakah cas tambahan untuk kenderaan yang sangat kotor?",
    },
    answer: {
      en: "Yes, an additional RM1–RM5 may apply for vehicles with heavy mud, dirt, or stains, on top of the standard price for your selected service.",
      ms: "Ya, cas tambahan RM1–RM5 mungkin dikenakan untuk kenderaan berlumpur, sangat kotor, atau bertompok, tambahan kepada harga standard bagi servis yang dipilih.",
    },
  },
]

export type VehicleId = "sedan" | "suv" | "mpv" | "pickup" | "van" | "lorry" | "motorcycle"
export type ServiceId = "luar" | "luar_dalam" | "sembur" | "vacuum" | "chemical" | "enjin"

export const VEHICLES: { id: VehicleId; label: { en: string; ms: string } }[] = [
  { id: "sedan", label: { en: "Sedan", ms: "Sedan" } },
  { id: "suv", label: { en: "SUV", ms: "SUV" } },
  { id: "mpv", label: { en: "MPV", ms: "MPV" } },
  { id: "pickup", label: { en: "Pickup", ms: "Pickup" } },
  { id: "van", label: { en: "Van", ms: "Van" } },
  { id: "lorry", label: { en: "Lorry", ms: "Lori" } },
  { id: "motorcycle", label: { en: "Motorcycle", ms: "Motosikal" } },
]

export const SERVICES: {
  id: ServiceId
  label: { en: string; ms: string }
  descEn: string
  descMs: string
  image: string
}[] = [
    {
      id: "luar",
      label: { en: "Exterior Wash", ms: "Luar" },
      descEn: "Exterior body wash with soap & shine for a spotless finish.",
      descMs: "Cuci badan luar dengan sabun & kilat untuk hasil bersih berseri.",
      image: "/images/service-luar.png",
    },
    {
      id: "luar_dalam",
      label: { en: "Exterior & Interior", ms: "Luar & Dalam" },
      descEn: "Complete exterior wash plus interior wipe-down and cleaning.",
      descMs: "Cucian luar lengkap serta lap & bersihkan bahagian dalam.",
      image: "/images/service-luar-dalam.png",
    },
    {
      id: "sembur",
      label: { en: "Spray Only", ms: "Sembur Sahaja" },
      descEn: "Quick high-pressure spray rinse to knock off dirt & dust.",
      descMs: "Semburan air tekanan tinggi untuk tanggalkan habuk & kotoran.",
      image: "/images/service-sembur.png",
    },
    {
      id: "vacuum",
      label: { en: "Vacuum Only", ms: "Vacuum Sahaja" },
      descEn: "Thorough interior vacuum for seats, mats & carpets.",
      descMs: "Vakum menyeluruh untuk kerusi, tikar & karpet dalaman.",
      image: "/images/service-vacuum.png",
    },
    {
      id: "chemical",
      label: { en: "Chemical Wash", ms: "Cucian Chemical" },
      descEn: "Snow-foam chemical wash that lifts stubborn grime safely.",
      descMs: "Cucian buih kimia yang mengangkat kotoran degil dengan selamat.",
      image: "/images/service-chemical.png",
    },
    {
      id: "enjin",
      label: { en: "Engine Detailing", ms: "Pencucian Enjin" },
      descEn: "Detailed engine bay cleaning for a fresh, tidy look.",
      descMs: "Pencucian ruang enjin terperinci untuk penampilan kemas & segar.",
      image: "/images/service-enjin.png",
    },
  ]

// Prices in RM. null = not available for that vehicle.
export const PRICES: Record<VehicleId, Record<ServiceId, number | null>> = {
  sedan: {
    luar: 13,
    luar_dalam: 20,
    sembur: 8,
    vacuum: 13,
    chemical: 15,
    enjin: 12
  },
  suv: {
    luar: 15,
    luar_dalam: 27,
    sembur: 12,
    vacuum: 15,
    chemical: 15,
    enjin: 15
  },
  mpv: {
    luar: 20,
    luar_dalam: 27,
    sembur: 12,
    vacuum: 15,
    chemical: 15,
    enjin: 15
  },
  pickup: {
    luar: 20,
    luar_dalam: 27,
    sembur: 12,
    vacuum: 15,
    chemical: 15,
    enjin: 15
  },
  van: {
    luar: 30,
    luar_dalam: 40,
    sembur: 12,
    vacuum: 15,
    chemical: 15,
    enjin: 20
  },
  lorry: {
    luar: 50,
    luar_dalam: 60,
    sembur: 20,
    vacuum: 10,
    chemical: 30,
    enjin: 30
  },
  motorcycle: {
    luar: 10,
    luar_dalam: null,
    sembur: 3,
    vacuum: null,
    chemical: 5,
    enjin: null
  },
};

export function getPrice(vehicle: VehicleId, service: ServiceId): number | null {
  return PRICES[vehicle][service]
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
