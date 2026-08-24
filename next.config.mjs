/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/app",
        permanent: false,
      },
      {
        source: "/vademecum",
        destination: "/pro/vademecum",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
