//Next.js has google fonts installed by default
import { Playfair } from "next/font/google";
import "./globals.css";

//import ClerkProvider to wrap my pages, so all pages have access to clerk
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

//componenets
import Header from "@/components/Header";
// import { Component } from "react";

//configure the font properties. You can add more properties, if you want
//check the font index by pressing cmd + click
const playfair = Playfair({ subsets: ["latin"] });

export const metadata = {
  title: "Coaster Rollers",
  description:
    "The theme park of your steampunk dreams! Life's a roller coaster you've just gotta ride it.",
};

export default function RootLayout({ children }) {
  return (
    // we nest all the root layout elements with the ClerkProvider Component
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        {/* add the font to the body tag  */}
        <body className={playfair.className}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
