import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - CSSéducteur",
  description: "Contactez-nous pour toute question ou suggestion concernant notre site.",
  authors: [{ name: 'Tom DEPUSSAY' }, { name: 'Florent MENUS' }, { name: 'Thomas LEJEUNE' }],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}