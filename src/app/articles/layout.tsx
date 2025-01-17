import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles - CSSéducteur",
  description: "Restez informé des dernières évolutions des frameworks CSS grâce à nos actualités spécialisées.",
  authors: [{ name: 'Tom DEPUSSAY' }, { name: 'Florent MENUS' }, { name: 'Thomas LEJEUNE' }],
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}