//import Image component
import Image from "next/image";
//import local image from public
import mountain from "@/../public/mountain.jpg";
//import my animation component
import Animation from "@/components/Animation";

export default function Home() {
  return (
    <>
      <h1 className="flex flex-col items-center p-24 text-5xl animate-pulse">
        Coaster Rollers
      </h1>
      <main>
        <Animation />
        {/* <Image
        src="https://images.unsplash.com/photo-1720459963979-1a6b9ad26bb2?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="An image of a roller coaster"
        width={800}
        height={600}
      /> */}
        {/* we can use blur in local images by default   */}
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
