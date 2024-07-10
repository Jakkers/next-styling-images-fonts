/** @type {import('next').NextConfig} */
const nextConfig = {
  // Added protocol so images from the stated source are not blocked.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
