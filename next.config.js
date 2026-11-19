/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/launch.html",
        destination: "/launch",
        permanent: true,
      },
      {
        source: "/launch/html",
        destination: "/launch",
        permanent: true,
      },
    ];
  },
};

export default config;

