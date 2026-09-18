export const siteConfig = {
  whatsappNumber: "6283863190378",
  whatsappMessage: "Halo Affan Coconut, saya mau tanya menu.",
  address: "Kp. Pondok Jengkol, Pagedangan, Tangerang (dekat Medang)",
  hours: "09.00–17.00",
  // Titik sementara. Ganti dua angka ini setelah koordinat lokasi usaha tersedia.
  map: { latitude: -6.27401, longitude: 106.62726, zoom: 16 },
} as const

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`
export const mapEmbedUrl = `https://www.google.com/maps?q=${siteConfig.map.latitude},${siteConfig.map.longitude}&z=${siteConfig.map.zoom}&output=embed`
export const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${siteConfig.map.latitude},${siteConfig.map.longitude}`
