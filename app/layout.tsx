import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Christian Thams - Industrial Design & Product Development",
  description: "Portfolio showcasing industrial design and product development projects by Christian Thams",
  keywords: ["industrial design", "product development", "portfolio", "design"],
  authors: [{ name: "Christian Thams" }],
  openGraph: {
    title: "Christian Thams - Industrial Design Portfolio",
    description: "Explore innovative industrial design and product development projects",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
