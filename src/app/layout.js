//Next.js has google fonts installed by default
import { Playfair } from "next/font/google";
import "./globals.css";

//componenets
import Header from "@/components/Header";

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
    <html lang="en">
      {/* add the font to the body tag  */}
      <body className={playfair.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
