/** @type {import('next').NextConfig} */
const nextConfig = {
  // Řekne Next.js, aby vytvořil statické soubory do složky /out
  output: 'export',

  // Toto je doporučené pro statický export, aby se obrázky
  // správně načítaly bez optimalizačního serveru Next.js.
  images: {
    unoptimized: true,
  },

  browsersList: [
    '> 0.5%',
    'not dead',
    'not op_mini all'
  ],

  // Můžete zde mít i další nastavení, např.
  // reactStrictMode: true,
};

export default nextConfig;