'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cafeConfig } from '@/data/cafeConfig';
import { 
  Coffee, 
  Menu as MenuIcon, 
  X, 
  Sun, 
  MessageCircle,
  Globe
} from 'lucide-react';

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#menu', label: t.nav.menu },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#reservation', label: t.nav.reservation },
    { href: '#location', label: t.nav.location },
    { href: '#contact', label: language === 'ar' ? 'تواصل معنا' : 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-cream-300/60 py-3' 
          : 'bg-cream-50/90 backdrop-blur-sm border-b border-cream-200/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity (Matching Reference Image) */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-espresso-900 to-espresso-950 flex items-center justify-center shadow-md shadow-espresso-950/15 group-hover:scale-105 transition-transform duration-300 border border-caramel-500/40">
              {/* Flame / Coffee bean stylized vector */}
              <Coffee className="w-5 h-5 text-cream-100" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-black text-lg tracking-wider text-espresso-900 leading-tight">
                ROAST N&apos; TOAST
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-caramel-600 font-semibold">
                SPECIALTY COFFEE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors relative py-1 ${
                  idx === 0 
                    ? 'text-espresso-900 font-bold after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-5 after:h-0.5 after:bg-caramel-500 after:rounded-full' 
                    : 'text-espresso-800/80 hover:text-caramel-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Controls: Language Toggle, Theme Icon, WhatsApp Button */}
          <div className="hidden sm:flex items-center gap-4">
            
            {/* Language Switcher (EN | العربية) */}
            <button
              onClick={toggleLanguage}
              className="text-xs font-bold text-espresso-800 hover:text-caramel-600 transition-colors cursor-pointer flex items-center gap-1.5 px-2 py-1"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-caramel-600" />
              <span>{language === 'ar' ? 'EN' : 'العربية'}</span>
            </button>

            {/* Subtle Sun Icon */}
            <div className="text-espresso-700/80 p-1.5 rounded-full hover:bg-cream-200/50 transition-colors">
              <Sun className="w-4 h-4 text-caramel-500" />
            </div>

            {/* WhatsApp Pill Button (Exact match with reference image) */}
            <a
              href={`https://wa.me/201503001914`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-espresso-900 hover:bg-espresso-950 text-cream-50 font-bold text-xs tracking-wide shadow-md shadow-espresso-900/20 hover:scale-105 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 rounded-full border border-cream-300 text-xs font-bold text-espresso-900 bg-cream-50"
              aria-label="Toggle language"
            >
              {language === 'ar' ? 'EN' : 'عربي'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-espresso-900 hover:text-caramel-600 bg-cream-100"
              aria-label="Open menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-cream-50/98 border-b border-cream-200 px-4 pt-3 pb-6 animate-fadeIn shadow-lg">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-semibold text-espresso-900 hover:bg-cream-200/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-cream-200 flex flex-col gap-2.5">
              <a
                href="https://wa.me/201503001914"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-espresso-900 text-cream-50 font-bold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
