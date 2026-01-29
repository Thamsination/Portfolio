import type { Metadata } from "next";
import { League_Spartan, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  weight: ["400", "500", "600", "700", "800"],
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Christian Thams - Industrial Design & Product Development",
  description: "Industrial designer and product developer based in Copenhagen. Experienced in consumer electronics, medical devices, DFM, and UI/UX. Previously at Bang & Olufsen, SOUNDBOKS, and UVISA Health.",
  keywords: [
    "industrial design", 
    "product development", 
    "Copenhagen", 
    "Denmark",
    "medical device design",
    "consumer electronics",
    "DFM",
    "UI/UX",
    "Bang & Olufsen",
    "SOUNDBOKS",
    "product design engineering",
    "CAD",
    "prototyping"
  ],
  authors: [{ name: "Christian Thams" }],
  openGraph: {
    title: "Christian Thams - Industrial Design & Product Development",
    description: "Industrial designer making things people love. Experience at Bang & Olufsen, SOUNDBOKS, and UVISA Health.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${leagueSpartan.variable} ${libreBaskerville.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        {/* GoatCounter Analytics - privacy-friendly, no cookies */}
        <script
          data-goatcounter="https://thamsination.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        />
      </body>
    </html>
  );
}
