/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['drive.google.com'],
    // Opcional: Si necesitas usar remotePatterns, asegúrate de que estén configurados correctamente
    // remotePatterns: [
    //   {
    //     // Ejemplo de configuración con hostname
    //     hostname: 'drive.google.com',
    //     // Opcional: Si necesitas otras partes de la URL, como pathname, protocol, etc.
    //     // pathname: '/path/to/images',
    //     // protocol: 'https',
    //   }
    // ]
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
