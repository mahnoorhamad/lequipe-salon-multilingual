import React from 'react';
import { Clock3, Scissors, Sparkles, Coffee } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { salonImages } from '../data/salonData';

interface AboutSectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang, onOpenBooking }) => {
  const t = translations[currentLang];

  return (
    <section id="chi-siamo" className="py-20 md:py-28 bg-[#FAF7F2] border-b border-[#EADCC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B4843D] mb-2">
            {t.about.sectionTitle}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight [text-wrap:balance]">
            {t.about.heading}
          </h2>
        </div>

        {/* 2-Column Split: Story & Interior Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Column: Narrative Prose */}
          <div className="lg:col-span-6 space-y-6 text-stone-700 font-sans leading-relaxed">
            <p className="text-lg text-stone-900 font-medium">
              {t.about.p1}
            </p>
            <p className="text-stone-600">
              {t.about.p2}
            </p>
            
            {/* Friendly quote block with subtle warm paper styling */}
            <div className="p-6 bg-white/80 rounded-xl border border-[#EADCC9] shadow-xs">
              <div className="flex items-start gap-3">
                <Coffee className="w-5 h-5 text-[#B4843D] shrink-0 mt-1" />
                <div className="text-sm text-stone-700 italic">
                  "Nel nostro salone ogni persona è unica: ci prendiamo il tempo per ascoltare i tuoi desideri davanti a un buon caffè, prima ancora di impugnare le forbici."
                  <div className="mt-2 text-xs font-semibold not-italic text-stone-900 font-sans">
                    — Master Stylist & L'Équipe Salon (Italy)
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-stone-900 bg-white border border-stone-300 hover:border-[#B4843D] hover:text-[#B4843D] rounded-lg transition-all duration-200 shadow-xs cursor-pointer"
              >
                <span>{t.nav.bookBtn}</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          {/* Right Column: High-Fidelity Salon Interior Image */}
          <div className="lg:col-span-6">
            <div className="relative group overflow-hidden rounded-2xl border border-[#EADCC9] shadow-md bg-stone-100">
              <img
                src={salonImages.interior}
                alt="Interno elegante del salone L'Équipe Salon in Italia"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-1">
                  Italy · Via Roma 10
                </div>
                <div className="font-serif text-lg font-semibold">
                  Un ambiente accogliente, luminoso e rilassante
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Core Pillars in Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#EADCC9]">
          
          <div className="p-6 bg-white rounded-xl border border-[#EAE3D9] hover:border-[#D5C2AA] transition-colors shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#FAF4EB] text-[#B4843D] flex items-center justify-center mb-4">
              <Clock3 className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
              {t.about.feature1Title}
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              {t.about.feature1Desc}
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-[#EAE3D9] hover:border-[#D5C2AA] transition-colors shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#FAF4EB] text-[#B4843D] flex items-center justify-center mb-4">
              <Scissors className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
              {t.about.feature2Title}
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              {t.about.feature2Desc}
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-[#EAE3D9] hover:border-[#D5C2AA] transition-colors shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#FAF4EB] text-[#B4843D] flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
              {t.about.feature3Title}
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              {t.about.feature3Desc}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
