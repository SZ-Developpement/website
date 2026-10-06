import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // les logos de la stack sont des SVG servis depuis /public :
    // sans ça l'optimiseur d'images refuse le SVG et les logos cassent en silence
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
