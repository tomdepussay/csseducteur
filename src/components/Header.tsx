import { Palette } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-violet-900 text-white py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Palette size={32} className="text-violet-300" />
            <h1 className="text-2xl font-bold">CSSeducteur</h1>
          </Link>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/frameworks" className="hover:text-violet-300 transition-colors">
                Frameworks
              </Link>
            </li>
            <li>
              <Link href="/articles" className="hover:text-violet-300 transition-colors">
                Actualités
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-violet-300 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}