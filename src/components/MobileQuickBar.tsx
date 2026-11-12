import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface MobileQuickBarProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const t = translations[currentLang];

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#EADCC9] px-4 py-2.5 shadow-lg">
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        <a
          href="tel:+390510000000"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-stone-900 bg-white border border-stone-300 rounded-lg shadow-xs active:bg-stone-100"
        >
          <Phone className="w-3.5 h-3.5 text-[#B4843D]" />
          <span>Chiama</span>
        </a>

        <button
          type="button"
          onClick={onOpenBooking}
          className="flex-2 flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-stone-900 hover:bg-[#B4843D] active:bg-[#B4843D] rounded-lg shadow-xs cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-amber-200" />
          <span>{t.nav.bookBtn}</span>
        </button>
      </div>
    </div>
  );
};
