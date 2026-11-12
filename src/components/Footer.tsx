import React from 'react';
import { Phone, MapPin, Clock, Heart } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-24 sm:pb-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Address */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <div className="font-serif text-2xl font-bold text-white tracking-tight">
                L'Équipe Salon
              </div>
              <div className="text-xs uppercase tracking-widest text-[#D4AF37] mt-0.5 font-medium">
                Hair & Beauty · Italy
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              {t.footer.description}
            </p>

            <div className="space-y-2 pt-2 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>Via Roma, 10 - 40121 Bologna (Italia)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <a href="tel:+390510000000" className="hover:text-white transition-colors font-mono tabular-nums">
                  +39 051 000 0000
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              {t.footer.quickLinks}
            </div>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#chi-siamo" className="hover:text-white transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#servizi" className="hover:text-white transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#galleria" className="hover:text-white transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#recensioni" className="hover:text-white transition-colors">
                  {t.nav.reviews}
                </a>
              </li>
              <li>
                <a href="#contatti" className="hover:text-white transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Appointments */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{t.footer.schedule}</span>
            </div>
            
            <div className="space-y-1.5 text-xs text-stone-400">
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span>Martedì - Mercoledì - Venerdì:</span>
                <span className="font-mono text-stone-300">08:30-12:30 / 15:00-19:00</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span>Giovedì:</span>
                <span className="font-mono text-stone-300">08:30 - 18:30 (Continuato)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span>Sabato:</span>
                <span className="font-mono text-stone-300">08:00 - 18:00 (Continuato)</span>
              </div>
              <div className="flex justify-between py-1 text-stone-500">
                <span>Domenica & Lunedì:</span>
                <span>Chiuso</span>
              </div>
            </div>

            <p className="text-[11px] text-stone-500 pt-1 italic">
              * Si riceve su appuntamento per offrire la massima puntualità e relax.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} L'Équipe Salon · Italy. {t.footer.rights}
          </div>

          <div className="flex items-center gap-1 text-[11px] text-stone-400">
            <span>Realizzato con passione per l'eccellenza dello styling in Italia</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          </div>
        </div>

      </div>
    </footer>
  );
};
