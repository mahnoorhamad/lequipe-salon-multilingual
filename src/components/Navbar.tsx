import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: () => void;
}

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const t = translations[currentLang];

  const currentLangObj = languages.find((l) => l.code === currentLang) || languages[0];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EADCC9]/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single element brand wordmark */}
          <a
            href="#"
            className="flex flex-col group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B4843D]"
          >
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-stone-900 group-hover:text-[#B4843D] transition-colors">
              L'Équipe Salon
            </span>
            <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-stone-500 font-medium">
              Hair & Beauty · Italy
            </span>
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
            <a
              href="#chi-siamo"
              className="hover:text-[#B4843D] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {t.nav.about}
            </a>
            <a
              href="#servizi"
              className="hover:text-[#B4843D] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {t.nav.services}
            </a>
            <a
              href="#galleria"
              className="hover:text-[#B4843D] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {t.nav.gallery}
            </a>
            <a
              href="#recensioni"
              className="hover:text-[#B4843D] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {t.nav.reviews}
            </a>
            <a
              href="#contatti"
              className="hover:text-[#B4843D] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Zone 3: Language Selector & Primary CTA Button */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            
            {/* Multilingual Selector Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-50 border border-stone-200 rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-xs focus-visible:ring-2 focus-visible:ring-[#B4843D]"
                aria-label="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-stone-500" />
                <span>{currentLangObj.flag}</span>
                <span className="uppercase">{currentLangObj.code}</span>
                <ChevronDown className="w-3 h-3 text-stone-400" />
              </button>

              {langDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLangDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-1.5 w-36 bg-white border border-stone-200 rounded-lg shadow-lg py-1 z-50 animate-in fade-in zoom-in-95 duration-150">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        type="button"
                        onClick={() => {
                          onLanguageChange(l.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs text-left transition-colors cursor-pointer ${
                          currentLang === l.code
                            ? 'bg-[#FAF4EB] font-bold text-[#B4843D]'
                            : 'text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        <span className="text-sm">{l.flag}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Direct Call Link */}
            <a
              href="tel:+390510000000"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-stone-800 hover:text-[#B4843D] border border-stone-300 rounded-lg transition-colors whitespace-nowrap bg-white/60 hover:bg-white"
              title="Chiama il salone al +39 051 000 0000"
            >
              <Phone className="w-3.5 h-3.5 text-[#B4843D]" />
              <span className="font-mono tabular-nums">051 000 0000</span>
            </a>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-stone-900 hover:bg-[#B4843D] rounded-lg transition-all duration-200 whitespace-nowrap shadow-sm hover:shadow-md cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B4843D]"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-200" />
              <span>{t.nav.bookBtn}</span>
            </button>
          </div>

          {/* Mobile Right Controls: Language & Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            {/* Quick language button for mobile */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1 p-2 text-xs font-bold text-stone-700 bg-white border border-stone-200 rounded-lg"
              >
                <span>{currentLangObj.flag}</span>
                <span className="uppercase text-[11px]">{currentLangObj.code}</span>
              </button>

              {langDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLangDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-1.5 w-32 bg-white border border-stone-200 rounded-lg shadow-lg py-1 z-50">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        type="button"
                        onClick={() => {
                          onLanguageChange(l.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-xs text-left ${
                          currentLang === l.code
                            ? 'bg-[#FAF4EB] font-bold text-[#B4843D]'
                            : 'text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-900 rounded-lg focus-visible:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-stone-200 bg-[#FAF7F2] px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-2 text-base font-medium text-stone-800">
            <a
              href="#chi-siamo"
              onClick={handleNavClick}
              className="px-3 py-2 rounded-md hover:bg-stone-200/60"
            >
              {t.nav.about}
            </a>
            <a
              href="#servizi"
              onClick={handleNavClick}
              className="px-3 py-2 rounded-md hover:bg-stone-200/60"
            >
              {t.nav.services}
            </a>
            <a
              href="#galleria"
              onClick={handleNavClick}
              className="px-3 py-2 rounded-md hover:bg-stone-200/60"
            >
              {t.nav.gallery}
            </a>
            <a
              href="#recensioni"
              onClick={handleNavClick}
              className="px-3 py-2 rounded-md hover:bg-stone-200/60"
            >
              {t.nav.reviews}
            </a>
            <a
              href="#contatti"
              onClick={handleNavClick}
              className="px-3 py-2 rounded-md hover:bg-stone-200/60"
            >
              {t.nav.contact}
            </a>
          </nav>

          <div className="pt-2 border-t border-stone-200 flex flex-col gap-2">
            <a
              href="tel:+390510000000"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-stone-900 bg-white border border-stone-300 rounded-lg"
            >
              <Phone className="w-4 h-4 text-[#B4843D]" />
              <span>{t.nav.callBtn}: +39 051 000 0000</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-stone-900 hover:bg-[#B4843D] rounded-lg"
            >
              <Calendar className="w-4 h-4 text-amber-200" />
              <span>{t.nav.bookBtn}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
