export type Lang = "ms" | "en"

export const translations = {
  en: {
    nav: { services: "Services", pricing: "Pricing", location: "Location", faq: "FAQ", book: "Book Now" },
    hero: {
      badge: "Car Wash in Padang Besar, Perlis",
      title: "Wash the car like a boss",
      subtitle:
        "Professional exterior & interior detailing right at the Padang Besar border. Fast local service for Perlis drivers, with instant booking on WhatsApp.",
      ctaPrimary: "Get an Instant Quote",
      ctaSecondary: "View Services",
      stat1: "Happy Customers",
      stat2: "Years Serving Perlis",
      stat3: "Google Rating",
    },
    calc: {
      title: "Instant Price Calculator",
      subtitle: "Select your vehicle and service to see the price right away.",
      vehicle: "Vehicle Type",
      service: "Service",
      total: "Estimated Price",
      unavailable: "Not available for this vehicle",
      note: "Additional charge of RM1–RM5 for heavily soiled vehicles.",
      book: "Book on WhatsApp",
      selectPrompt: "Select a vehicle and service",
      waMessage: (v: string, s: string, p: string) =>
        `Hi Carwash Bossque! I'd like to book:\n\nVehicle: ${v}\nService: ${s}\nEstimated price: RM${p}\n\nWhen are you available?`,
    },
    services: {
      title: "Services We Provide",
      subtitle: "From a quick rinse to a full detail — pick the care your ride needs.",
      cta: "Get a Quote",
    },
    local: {
      title: "Providing the Best Car Wash in Padang Besar.",
      subtitle:
        "Located near the Padang Besar border, we serve drivers across Perlis and the nearby Thailand border. Drop by or book ahead — we'll make your car shine like a boss.",
      hoursTitle: "Business Hours",
      addressTitle: "Find Us",
      mapPlaceholder: "Google Map — embed your location here",
      bookWhatsApp: "Book on WhatsApp",
      getDirections: "Get directions",
      waMessage: "Hi Carwash Bossque! I'd like to book a service.",
    },
    promo: {
      label: "Promotion",
      title: "Skip the queue today",
      text: "Book ahead on WhatsApp for priority service with fast entry. No hustle needed — just faster service.",
      cta: "Skip the queue on WhatsApp",
      waText: "Hi Carwash Bossque! I want to skip the queue and book a service.",
      noShow: "Don't show again",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know before you book.",
    },
    footer: { tagline: "The shine your car deserves.", rights: "All rights reserved." },
  },
  ms: {
    nav: { services: "Servis", pricing: "Harga", location: "Lokasi", faq: "Soalan", book: "Tempah" },
    hero: {
      badge: "Cuci Kereta di Padang Besar, Perlis",
      title: "Cuci Kereta Macam Bos",
      subtitle:
        "Cucian luar & dalam profesional di sempadan Padang Besar. Perkhidmatan tempatan pantas untuk pemandu Perlis, dengan tempahan segera di WhatsApp.",
      ctaPrimary: "Dapatkan Harga Segera",
      ctaSecondary: "Lihat Servis",
      stat1: "Pelanggan Gembira",
      stat2: "Tahun Berkhidmat di Perlis",
      stat3: "Penarafan Google",
    },
    calc: {
      title: "Kalkulator Harga Segera",
      subtitle: "Pilih kenderaan dan servis anda untuk melihat harga serta-merta.",
      vehicle: "Jenis Kenderaan",
      service: "Servis",
      total: "Anggaran Harga",
      unavailable: "Tidak tersedia untuk kenderaan ini",
      note: "Cas tambahan RM1–RM5 bagi kekotoran yang teruk.",
      book: "Tempah di WhatsApp",
      selectPrompt: "Pilih kenderaan dan servis",
      waMessage: (v: string, s: string, p: string) =>
        `Hai Carwash Bossque! Saya ingin menempah:\n\nKenderaan: ${v}\nServis: ${s}\nAnggaran harga: RM${p}\n\nBila masa yang sesuai?`,
    },
    services: {
      title: "Servis Yang Kami Sediakan",
      subtitle: "Dari semburan pantas hingga cucian menyeluruh — pilih cucian yang sesuai untuk kenderaan anda.",
      cta: "Dapatkan Harga",
    },
    local: {
      title: "Menawarkan Servis yang Terbaik di sekitar Padang Besar.",
      subtitle:
        "Terletak strategik di sempadan Padang Besar, kami berkhidmat kepada pemandu di seluruh Perlis dan kawasan bersempadan Thailand. Datang terus atau tempah awal — kami pastikan kereta anda bersinar seperti bos.",
      hoursTitle: "Waktu Operasi",
      addressTitle: "Cari Kami",
      mapPlaceholder: "Google Map — masukkan lokasi anda di sini",
      bookWhatsApp: "Tempah di WhatsApp",
      getDirections: "Dapatkan Arah",
      waMessage: "Hai Carwash Bossque! Saya ingin menempah servis.",
    },
    promo: {
      label: "Promosi",
      title: "Langkau barisan hari ini",
      text: "Tempah lebih awal di WhatsApp untuk servis keutamaan dan masuk cepat. Tiada kesulitan diperlukan — hanya servis lebih pantas.",
      cta: "Tempah di WhatsApp",
      waText: "Hai Carwash Bossque! Saya mahu langkau barisan dan tempah servis.",
      noShow: "Jangan tunjuk lagi",
    },
    faq: {
      title: "Soalan Lazim",
      subtitle: "Semua yang anda perlu tahu sebelum menempah.",
    },
    footer: { tagline: "Kilauan yang kereta anda layak.", rights: "Hak cipta terpelihara." },
  },
} as const

export type Translation = (typeof translations)[Lang]
