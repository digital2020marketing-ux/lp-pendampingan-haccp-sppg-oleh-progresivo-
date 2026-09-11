import React, { useState, useEffect } from 'react';
import { ShieldCheck, MessageCircle, Menu, X, PhoneCall } from 'lucide-react';
import { WHATSAPP_NUMBER, createWhatsAppUrl } from '../data/haccpData';
import { trackWhatsAppClick } from '../utils/metaPixel';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const nextScrolled = window.scrollY > 15;
          setIsScrolled((prev) => (prev !== nextScrolled ? nextScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tentang Layanan', href: '#tentang' },
    { label: 'Assessment', href: '#assessment' },
    { label: 'Pendampingan', href: '#pendampingan' },
    { label: 'Tahapan', href: '#tahapan' },
    { label: 'Formulir SPPG', href: '#form-lead' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-slate-800/80 py-2.5'
          : 'bg-slate-950 text-white border-b border-slate-800/60 py-3'
      }`}
    >
      <div className="w-full px-4 sm:px-5">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo Brand */}
          <a
            href="#"
            id="brand-logo"
            className="flex items-center gap-2.5 focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 via-teal-500 to-emerald-400 flex items-center justify-center text-white shadow-md shadow-emerald-500/30 shrink-0">
              <ShieldCheck className="w-5 h-5 stroke-[2.4]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-white leading-tight flex items-center gap-1">
                Progresivo <span className="text-emerald-400 font-bold text-sm">Consulting</span>
              </span>
              <span className="text-[10px] text-slate-300 font-medium tracking-wide uppercase">
                HACCP SPPG MBG
              </span>
            </div>
          </a>

          {/* Right: Quick Action WA / Menu */}
          <div className="flex items-center gap-2">
            <a
              id="header-cta-wa"
              href={createWhatsAppUrl()}
              onClick={() => trackWhatsAppClick('Header Top Button')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-md shadow-emerald-950/40 active:scale-95 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>KONSULTASI</span>
            </a>

            {/* Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Dropdown Menu for Mobile */}
        {mobileMenuOpen && (
          <div className="mt-3 pt-3 pb-3 border-t border-slate-800/80 flex flex-col gap-1 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-semibold text-slate-200 hover:text-emerald-400 hover:bg-slate-900 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-slate-600 text-[10px]">→</span>
              </a>
            ))}

            <div className="pt-2 mt-1 border-t border-slate-800">
              <a
                href={createWhatsAppUrl()}
                onClick={() => trackWhatsAppClick('Header Dropdown Menu')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2.5 rounded-lg text-xs font-bold shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp: {WHATSAPP_NUMBER}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
