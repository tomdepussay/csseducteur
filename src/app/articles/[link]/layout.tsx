import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Article - CSSéducteur",
  description: "",
  authors: [{ name: 'Tom DEPUSSAY' }, { name: 'Florent MENUS' }, { name: 'Thomas LEJEUNE' }],
};

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}