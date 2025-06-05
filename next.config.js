/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Si tus imágenes están en la carpeta `public`, no necesitas configurar `domains`.
    // Si usas un CDN o un dominio externo, agrégalo aquí.
    // Por ejemplo: domains: ['example.com'],
  },
}

module.exports = nextConfig
