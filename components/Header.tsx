"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden border-2 border-slate-200 flex-shrink-0">
              {/* Benin flag colors as logo */}
              <div className="h-full flex">
                <div className="w-1/3 bg-[#008751]" />
                <div className="flex flex-col w-2/3">
                  <div className="flex-1 bg-[#FCD116]" />
                  <div className="flex-1 bg-[#E8112D]" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-slate-500 leading-none">République du Bénin</p>
              <p className="font-display font-semibold text-slate-900 text-sm leading-tight">
                Services Publics
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#008751] hover:bg-green-50 rounded-lg transition-colors"
            >
              Accueil
            </Link>
            <Link
              href="/services"
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#008751] hover:bg-green-50 rounded-lg transition-colors"
            >
              Services
            </Link>
            <Link
              href="/services?category=entreprise"
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#008751] hover:bg-green-50 rounded-lg transition-colors"
            >
              Entreprises
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/services"
              className="bg-[#008751] hover:bg-[#006b40] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Toutes les démarches
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-slate-100 py-3 space-y-1">
            <Link href="/" onClick={() => setOpen(false)} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg">Accueil</Link>
            <Link href="/services" onClick={() => setOpen(false)} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg">Services</Link>
            <Link href="/services?category=entreprise" onClick={() => setOpen(false)} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg">Entreprises</Link>
          </div>
        )}
      </div>
    </header>
  );
}
