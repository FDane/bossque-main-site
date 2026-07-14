import type { ServiceId } from "@/lib/data"

export type LocalizedText = { en: string; ms: string }
export type ServiceDetail = {
  slug: ServiceId
  title: LocalizedText
  eyebrow: LocalizedText
  summary: LocalizedText
  seoDescription: string
  image: string
  duration: LocalizedText
  bestFor: LocalizedText
  steps: { title: LocalizedText; description: LocalizedText }[]
  benefits: LocalizedText[]
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "luar",
    title: { en: "Exterior Car Wash", ms: "Cucian Luar Kenderaan" },
    eyebrow: { en: "Clean paint. Clear finish.", ms: "Cat bersih. Kemasan jelas." },
    summary: { en: "A methodical exterior wash designed to remove road film, dust and everyday grime while protecting visible vehicle surfaces.", ms: "Cucian luar bersistem untuk menanggalkan debu jalan, habuk dan kotoran harian sambil menjaga permukaan kenderaan." },
    seoDescription: "Professional exterior car wash in Padang Besar, Perlis with pressure rinse, safe soap wash, wheel cleaning and careful drying.",
    image: "/images/service-luar.png",
    duration: { en: "Efficient daily-care service", ms: "Servis penjagaan harian yang cekap" },
    bestFor: { en: "Routine maintenance and road-film removal", ms: "Penjagaan berkala dan menanggalkan debu jalan" },
    steps: [
      { title: { en: "Vehicle condition check", ms: "Pemeriksaan keadaan kenderaan" }, description: { en: "We review visible paint, trim, wheels and high-soil areas to select the right wash approach before water touches the vehicle.", ms: "Kami menilai cat, trim, roda dan kawasan sangat kotor untuk memilih kaedah cucian yang sesuai sebelum proses bermula." } },
      { title: { en: "Controlled pre-rinse", ms: "Pra-bilas terkawal" }, description: { en: "A top-to-bottom pressure rinse loosens sand, dust and surface debris, reducing contact with particles during the soap stage.", ms: "Bilasan tekanan dari atas ke bawah melonggarkan pasir, habuk dan kotoran permukaan, mengurangkan sentuhan semasa cucian sabun." } },
      { title: { en: "Soap wash and agitation", ms: "Cucian sabun dan sentuhan teliti" }, description: { en: "Vehicle-safe soap is worked across body panels, glass and exterior details with attention to seams and lower sections.", ms: "Sabun selamat untuk kenderaan digunakan pada panel badan, kaca dan perincian luar termasuk celah serta bahagian bawah." } },
      { title: { en: "Wheels and lower panels", ms: "Roda dan panel bawah" }, description: { en: "Wheels, arches and lower body areas receive focused cleaning because they collect the heaviest road contamination.", ms: "Roda, ruang roda dan panel bawah diberi perhatian kerana kawasan ini mengumpul kotoran jalan yang paling berat." } },
      { title: { en: "Final rinse and dry", ms: "Bilasan akhir dan pengeringan" }, description: { en: "We rinse away residue and carefully dry exposed surfaces to minimise water marks before a final visual inspection.", ms: "Kami membilas sisa dan mengeringkan permukaan dengan teliti bagi mengurangkan kesan air sebelum pemeriksaan akhir." } },
    ],
    benefits: [{ en: "Removes daily dirt and road film", ms: "Menanggalkan kotoran harian dan debu jalan" }, { en: "Cleans wheels, glass and body panels", ms: "Membersihkan roda, kaca dan panel badan" }, { en: "Supports consistent exterior maintenance", ms: "Menyokong penjagaan luaran yang konsisten" }],
  },
  {
    slug: "luar_dalam",
    title: { en: "Exterior & Interior Wash", ms: "Cucian Luar & Dalam" },
    eyebrow: { en: "Complete everyday reset", ms: "Kesegaran lengkap harian" },
    summary: { en: "A comprehensive wash combining exterior care with a focused interior clean for a vehicle that feels refreshed inside and out.", ms: "Cucian menyeluruh yang menggabungkan penjagaan luaran dengan pembersihan dalaman untuk rasa segar luar dan dalam." },
    seoDescription: "Complete exterior and interior car wash in Padang Besar, Perlis, including body wash, vacuuming, interior wipe-down and final quality inspection.",
    image: "/images/service-luar-dalam.png",
    duration: { en: "Complete exterior and cabin care", ms: "Penjagaan lengkap luar dan kabin" },
    bestFor: { en: "Family cars, daily drivers and full refreshes", ms: "Kereta keluarga, kegunaan harian dan kesegaran penuh" },
    steps: [
      { title: { en: "Arrival inspection", ms: "Pemeriksaan ketibaan" }, description: { en: "We identify exterior soil, cabin condition and priority areas such as floor mats, cup holders and high-touch surfaces.", ms: "Kami mengenal pasti kotoran luar, keadaan kabin dan kawasan utama seperti tikar, pemegang cawan serta permukaan kerap disentuh." } },
      { title: { en: "Exterior pre-rinse and wash", ms: "Pra-bilas dan cucian luar" }, description: { en: "Loose debris is rinsed away before a controlled soap wash across the body, windows, wheels and lower panels.", ms: "Kotoran longgar dibilas sebelum cucian sabun terkawal pada badan, tingkap, roda dan panel bawah." } },
      { title: { en: "Mat and cabin vacuum", ms: "Vakum tikar dan kabin" }, description: { en: "Mats are addressed separately while seats, carpets, footwells and reachable crevices are vacuumed systematically.", ms: "Tikar dibersihkan berasingan manakala kerusi, karpet, ruang kaki dan celah yang boleh dicapai divakum secara sistematik." } },
      { title: { en: "Interior surface wipe", ms: "Lap permukaan dalaman" }, description: { en: "Dashboard, console, door panels and practical touchpoints are wiped to lift dust and leave a clean, orderly cabin.", ms: "Papan pemuka, konsol, panel pintu dan titik sentuhan dilap untuk menanggalkan habuk dan mengemaskan kabin." } },
      { title: { en: "Drying and quality handover", ms: "Pengeringan dan penyerahan berkualiti" }, description: { en: "Exterior surfaces are dried, interior details are checked and the vehicle receives a final walk-around before handover.", ms: "Permukaan luar dikeringkan, perincian dalaman diperiksa dan kenderaan disemak sepenuhnya sebelum diserahkan." } },
    ],
    benefits: [{ en: "One visit for exterior and cabin care", ms: "Satu lawatan untuk penjagaan luar dan kabin" }, { en: "Reduces dust across seats, mats and surfaces", ms: "Mengurangkan habuk pada kerusi, tikar dan permukaan" }, { en: "Ideal for busy daily-use vehicles", ms: "Sesuai untuk kenderaan kegunaan harian" }],
  },
  {
    slug: "sembur",
    title: { en: "High-Pressure Spray Rinse", ms: "Semburan Tekanan Tinggi" },
    eyebrow: { en: "Fast dirt removal", ms: "Tanggalkan kotoran dengan pantas" },
    summary: { en: "A quick pressure-rinse service for removing loose dust, light mud and surface debris when your vehicle needs an efficient refresh.", ms: "Servis bilasan tekanan pantas untuk menanggalkan habuk, lumpur ringan dan kotoran permukaan apabila kenderaan memerlukan kesegaran segera." },
    seoDescription: "Quick high-pressure car spray rinse in Padang Besar, Perlis for loose dirt, dust and light mud on cars, motorcycles and commercial vehicles.",
    image: "/images/service-sembur.png",
    duration: { en: "Our fastest exterior refresh", ms: "Kesegaran luaran terpantas kami" },
    bestFor: { en: "Loose dust, light mud and between-wash upkeep", ms: "Habuk longgar, lumpur ringan dan penjagaan antara cucian" },
    steps: [
      { title: { en: "Quick surface assessment", ms: "Penilaian permukaan pantas" }, description: { en: "We confirm that a spray rinse suits the soil level and note sensitive or heavily contaminated areas.", ms: "Kami memastikan bilasan semburan sesuai dengan tahap kotoran serta mengenal pasti kawasan sensitif atau sangat kotor." } },
      { title: { en: "Top-down pressure rinse", ms: "Bilasan tekanan dari atas" }, description: { en: "Water pressure is applied methodically from roof to lower panels so loosened debris travels away from cleaned sections.", ms: "Tekanan air digunakan secara sistematik dari bumbung ke panel bawah supaya kotoran bergerak keluar dari kawasan yang telah dibilas." } },
      { title: { en: "Wheel and arch pass", ms: "Bilasan roda dan ruang roda" }, description: { en: "Wheels, arches and lower sections receive a focused pass where loose mud and road splash commonly collect.", ms: "Roda, ruang roda dan bahagian bawah diberi bilasan khusus pada kawasan yang lazim mengumpul lumpur serta percikan jalan." } },
      { title: { en: "Final clear-water check", ms: "Semakan air bersih akhir" }, description: { en: "A final pass clears displaced dirt and confirms that loose surface contamination has been removed evenly.", ms: "Bilasan akhir membersihkan kotoran yang telah dilonggarkan dan memastikan pencemaran permukaan dibuang secara sekata." } },
    ],
    benefits: [{ en: "Quick and practical", ms: "Pantas dan praktikal" }, { en: "Suitable between full washes", ms: "Sesuai antara cucian penuh" }, { en: "Available for multiple vehicle types", ms: "Tersedia untuk pelbagai jenis kenderaan" }],
  },
  {
    slug: "vacuum",
    title: { en: "Interior Vacuum Service", ms: "Servis Vakum Dalaman" },
    eyebrow: { en: "A cleaner cabin, precisely", ms: "Kabin lebih bersih, dengan teliti" },
    summary: { en: "A focused interior vacuum for seats, mats, carpets and practical crevices, built around an orderly zone-by-zone process.", ms: "Vakum dalaman khusus untuk kerusi, tikar, karpet dan celah praktikal menggunakan proses teratur mengikut zon." },
    seoDescription: "Professional car interior vacuum service in Padang Besar, Perlis for seats, mats, carpets, footwells and reachable cabin crevices.",
    image: "/images/service-vacuum.png",
    duration: { en: "Focused cabin-only service", ms: "Servis khusus kabin sahaja" },
    bestFor: { en: "Dust, crumbs, sand and everyday cabin debris", ms: "Habuk, serpihan, pasir dan kotoran harian kabin" },
    steps: [
      { title: { en: "Cabin preparation", ms: "Penyediaan kabin" }, description: { en: "We review the cabin, identify priority zones and remove mats so each practical surface can be accessed efficiently.", ms: "Kami menilai kabin, mengenal pasti zon utama dan mengeluarkan tikar supaya setiap permukaan boleh dicapai dengan cekap." } },
      { title: { en: "Mat cleaning", ms: "Pembersihan tikar" }, description: { en: "Loose dirt is lifted from each mat separately before they are returned to the cabin in an orderly condition.", ms: "Kotoran longgar disedut daripada setiap tikar secara berasingan sebelum diletakkan semula dengan kemas." } },
      { title: { en: "Seats and footwells", ms: "Kerusi dan ruang kaki" }, description: { en: "Seats, seat seams, carpets and footwells are vacuumed zone by zone to avoid skipping high-use areas.", ms: "Kerusi, jahitan kerusi, karpet dan ruang kaki divakum mengikut zon supaya kawasan kerap digunakan tidak terlepas." } },
      { title: { en: "Edges and reachable crevices", ms: "Tepi dan celah yang boleh dicapai" }, description: { en: "Appropriate attachments target edges, under-seat access points and practical crevices where debris settles.", ms: "Aksesori sesuai digunakan pada tepi, kawasan bawah kerusi dan celah praktikal tempat kotoran terkumpul." } },
      { title: { en: "Cabin reset", ms: "Pengemasan semula kabin" }, description: { en: "Mats and seats are reset, visible areas are checked and the cabin is prepared for a clean handover.", ms: "Tikar dan kerusi dikemaskan, kawasan kelihatan diperiksa dan kabin disediakan untuk penyerahan bersih." } },
    ],
    benefits: [{ en: "Targets seats, mats and carpets", ms: "Meliputi kerusi, tikar dan karpet" }, { en: "Reduces loose cabin debris", ms: "Mengurangkan kotoran longgar dalam kabin" }, { en: "Convenient standalone interior care", ms: "Penjagaan dalaman tersendiri yang mudah" }],
  },
  {
    slug: "chemical",
    title: { en: "Chemical Snow-Foam Wash", ms: "Cucian Buih Kimia" },
    eyebrow: { en: "Deeper exterior cleaning", ms: "Pembersihan luar lebih mendalam" },
    summary: { en: "A snow-foam chemical wash that extends dwell time to loosen stubborn road grime before controlled contact cleaning and rinsing.", ms: "Cucian buih kimia yang memberi masa tindak balas untuk melonggarkan kotoran jalan degil sebelum sentuhan dan bilasan terkawal." },
    seoDescription: "Chemical snow-foam car wash in Padang Besar, Perlis for stubborn grime, road film and a more thorough exterior vehicle clean.",
    image: "/images/service-chemical.png",
    duration: { en: "Enhanced exterior treatment", ms: "Rawatan luaran dipertingkat" },
    bestFor: { en: "Stubborn road grime and a deeper wash", ms: "Kotoran jalan degil dan cucian lebih mendalam" },
    steps: [
      { title: { en: "Contamination assessment", ms: "Penilaian pencemaran" }, description: { en: "We inspect soil levels, lower panels and sensitive trim to guide chemical use and contact technique.", ms: "Kami memeriksa tahap kotoran, panel bawah dan trim sensitif untuk menentukan penggunaan bahan serta teknik sentuhan." } },
      { title: { en: "Thorough pre-rinse", ms: "Pra-bilas menyeluruh" }, description: { en: "Loose particles and surface debris are rinsed away first, preparing the paint for an even foam application.", ms: "Partikel longgar dan kotoran permukaan dibilas dahulu bagi menyediakan cat untuk aplikasi buih yang sekata." } },
      { title: { en: "Snow-foam application", ms: "Aplikasi buih salji" }, description: { en: "Vehicle-safe chemical foam is applied evenly and allowed controlled dwell time to soften bonded grime without drying on the surface.", ms: "Buih kimia selamat untuk kenderaan digunakan secara sekata dan dibiarkan bertindak secara terkawal tanpa mengering pada permukaan." } },
      { title: { en: "Detailed contact wash", ms: "Cucian sentuhan terperinci" }, description: { en: "Body panels, exterior details and high-soil zones are cleaned carefully after the foam has loosened contamination.", ms: "Panel badan, perincian luar dan zon sangat kotor dibersihkan dengan teliti selepas buih melonggarkan pencemaran." } },
      { title: { en: "Rinse, dry and inspect", ms: "Bilas, kering dan periksa" }, description: { en: "Chemical residue is fully rinsed, surfaces are dried and the finish is visually checked before handover.", ms: "Sisa bahan dibilas sepenuhnya, permukaan dikeringkan dan kemasan diperiksa sebelum penyerahan." } },
    ],
    benefits: [{ en: "Longer dwell time on stubborn grime", ms: "Masa tindakan lebih lama pada kotoran degil" }, { en: "More thorough than a basic rinse", ms: "Lebih menyeluruh daripada bilasan asas" }, { en: "Systematic chemical handling", ms: "Pengendalian bahan kimia yang sistematik" }],
  },
  {
    slug: "enjin",
    title: { en: "Engine Bay Detailing", ms: "Detailing Ruang Enjin" },
    eyebrow: { en: "A tidy, presentable engine bay", ms: "Ruang enjin kemas dan terjaga" },
    summary: { en: "A careful engine-bay cleaning process focused on visible grime and presentation, with controlled product and water application.", ms: "Proses pembersihan ruang enjin yang teliti untuk kotoran kelihatan dan penampilan, menggunakan bahan serta air secara terkawal." },
    seoDescription: "Careful engine bay cleaning and detailing in Padang Besar, Perlis with controlled degreasing, targeted agitation, rinsing and final inspection.",
    image: "/images/service-enjin.png",
    duration: { en: "Specialist engine-bay care", ms: "Penjagaan khusus ruang enjin" },
    bestFor: { en: "Visible dust, grime and a tidier engine compartment", ms: "Habuk, kotoran kelihatan dan ruang enjin lebih kemas" },
    steps: [
      { title: { en: "Engine-bay assessment", ms: "Penilaian ruang enjin" }, description: { en: "The bay is reviewed before work begins so we can identify visible grime, delicate areas and the appropriate cleaning intensity.", ms: "Ruang enjin dinilai sebelum kerja bermula untuk mengenal pasti kotoran, kawasan sensitif dan tahap pembersihan yang sesuai." } },
      { title: { en: "Loose dust removal", ms: "Pembuangan habuk longgar" }, description: { en: "Dry loose debris is addressed first to reduce the amount of contamination that needs wet cleaning.", ms: "Kotoran kering dan habuk longgar dibuang dahulu untuk mengurangkan pencemaran yang perlu dibersihkan secara basah." } },
      { title: { en: "Targeted product application", ms: "Aplikasi bahan secara khusus" }, description: { en: "Cleaning product is applied selectively to visible oily or dirty zones instead of flooding the entire compartment.", ms: "Bahan pembersih digunakan secara terpilih pada zon berminyak atau kotor tanpa membanjiri keseluruhan ruang." } },
      { title: { en: "Controlled agitation and rinse", ms: "Sentuhan dan bilasan terkawal" }, description: { en: "Accessible surfaces are agitated as needed, followed by a carefully controlled rinse or wipe-down appropriate to the area.", ms: "Permukaan yang boleh dicapai digosok mengikut keperluan, diikuti bilasan atau lap terkawal yang sesuai dengan kawasan tersebut." } },
      { title: { en: "Drying and presentation check", ms: "Pengeringan dan semakan penampilan" }, description: { en: "Visible surfaces are dried and inspected so the engine bay is returned in a neat, presentable condition.", ms: "Permukaan kelihatan dikeringkan dan diperiksa supaya ruang enjin diserahkan dalam keadaan kemas serta terjaga." } },
    ],
    benefits: [{ en: "Improves visible engine-bay presentation", ms: "Memperbaiki penampilan ruang enjin" }, { en: "Controlled product and water use", ms: "Penggunaan bahan dan air secara terkawal" }, { en: "Focused attention to accessible surfaces", ms: "Perhatian khusus pada permukaan yang boleh dicapai" }],
  },
]

export function getServiceDetail(slug: string) {
  return SERVICE_DETAILS.find((service) => service.slug === slug)
}
