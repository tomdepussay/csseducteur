import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frameworks - CSSéducteur",
  description: "Découvrez tous les frameworks CSS populaires et leurs fonctionnalités pour vous aider à choisir le meilleur pour votre projet.",
  authors: [{ name: 'Tom DEPUSSAY' }, { name: 'Florent MENUS' }, { name: 'Thomas LEJEUNE' }],
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}