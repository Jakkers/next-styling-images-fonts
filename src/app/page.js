//import Image component
import Image from "next/image";
//import local image from public
import mountain from "@/../public/mountain.jpg";
//import my animation component
import Animation from "@/components/Animation";
import PopoverDemo from "@/components/PopoverDemo";

export default function Home() {
  return (
    <>
      <h1 className="flex flex-col items-center p-24 text-5xl animate-pulse">
        Coaster Rollers
      </h1>
      <main>
        <Animation />
        <PopoverDemo />
        <Image
          src={mountain}
          alt="A beautiful yellow mountain scape "
          width={1000}
          height={800}
          placeholder="blur"
          className="w-screen"
        />
      </main>
    </>
  );
}

//? In next.config.mjs --> This is only needed for external images
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//         port: "",
//         pathname: "/**",
//       },
//     ],
//   },
// };

// export default nextConfig;
