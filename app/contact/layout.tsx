import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Christian Thams | Get in Touch",
  description: "Contact Christian Thams for industrial design projects, product development, or collaboration opportunities. Based in Copenhagen, Denmark.",
  openGraph: {
    title: "Contact - Christian Thams | Get in Touch",
    description: "Contact Christian Thams for industrial design projects, product development, or collaboration opportunities.",
    type: "website",
    url: "https://christianthams.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
