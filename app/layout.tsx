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
    url: "https://christianthams.com",
    siteName: "Christian Thams Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Christian Thams - Industrial Designer & Product Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Thams - Industrial Design & Product Development",
    description: "Industrial designer making things people love. Experience at Bang & Olufsen, SOUNDBOKS, and UVISA Health.",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL("https://christianthams.com"),
};

// JSON-LD structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Christian Thams",
  jobTitle: "Industrial Designer & Chief Product Officer",
  description: "Industrial designer and product developer based in Copenhagen with 10 years of experience turning ideas into real products.",
  url: "https://christianthams.com",
  sameAs: [
    "https://www.linkedin.com/in/christian-thams-15a302a4/",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Copenhagen",
    addressCountry: "Denmark",
  },
  worksFor: {
    "@type": "Organization",
    name: "UVISA Health",
    url: "https://www.uvisahealth.com/",
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Lund University School of Industrial Design",
    },
    {
      "@type": "EducationalOrganization",
      name: "Umeå Institute of Design",
    },
    {
      "@type": "EducationalOrganization",
      name: "University of Skövde",
    },
  ],
  knowsAbout: [
    "Industrial Design",
    "Product Development",
    "Mechanical Engineering",
    "CAD",
    "Prototyping",
    "Medical Device Design",
    "Consumer Electronics",
    "DFM",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
