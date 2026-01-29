import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Christian Thams | Industrial Designer",
  description: "Learn about Christian Thams, an industrial designer with 10 years of experience at Bang & Olufsen, SOUNDBOKS, and UVISA Health. Skills in CAD, prototyping, and product development.",
  openGraph: {
    title: "About - Christian Thams | Industrial Designer",
    description: "Learn about Christian Thams, an industrial designer with 10 years of experience at Bang & Olufsen, SOUNDBOKS, and UVISA Health.",
    type: "profile",
    url: "https://christianthams.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
