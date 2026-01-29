import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Christian Thams | Industrial Design Portfolio",
  description: "Explore industrial design projects by Christian Thams including SOUNDBOKS 3, Beocreate for Bang & Olufsen, UVISA medical devices, and more. Consumer electronics, medtech, and concept design.",
  openGraph: {
    title: "Projects - Christian Thams | Industrial Design Portfolio",
    description: "Explore industrial design projects including SOUNDBOKS 3, Beocreate for Bang & Olufsen, UVISA medical devices, and more.",
    type: "website",
    url: "https://christianthams.com/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
