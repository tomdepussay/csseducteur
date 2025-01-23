"use client";

import React, { useState } from 'react';
import { Menu, X, Palette } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-violet-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="container mx-auto px-4 flex items-center justify-between">
            <Link onClick={() => setIsOpen(false)} href="/" className="flex items-center gap-2">
              <Palette size={32} className="text-violet-300" />
              <h1 className="text-2xl font-bold">CSSeducteur</h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
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
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="hover:text-violet-300 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <ul className="flex flex-col gap-4">
                <li>
                  <Link onClick={toggleMenu} href="/frameworks" className="hover:text-violet-300 transition-colors">
                    Frameworks
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleMenu} href="/articles" className="hover:text-violet-300 transition-colors">
                    Actualités
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleMenu} href="/contact" className="hover:text-violet-300 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;