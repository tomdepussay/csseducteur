import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Framework - CSSéducteur",
  description: "",
  authors: [{ name: 'Tom DEPUSSAY' }, { name: 'Florent MENUS' }, { name: 'Thomas LEJEUNE' }],
};

export default function FrameworkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}