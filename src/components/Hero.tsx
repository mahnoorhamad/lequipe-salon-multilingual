import React from 'react';
import { Calendar, Phone, Star, MapPin, Clock } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { salonImages, getLiveStatus } from '../data/salonData';

interface HeroProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenBooking }) => {
  const t = translations[currentLang];
  const liveStatus = getLiveStatus(currentLang);

  return (
    <section className="relative overflow-hidden bg-stone-900 text-stone-100">
      {/* Background Image Container with Measured High-Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={salonImages.hero}
          alt="Hairstylist professionista de L'Équipe Salon in Italia"
          className="w-full h-full object-cover object-[65%_center] md:object-center opacity-45 scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Multilayered warm gradient scrim to ensure text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-stone-900/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-stone-950/40 to-stone-950/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
        
        {/* Trust & Location Quiet Metadata Strip */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs md:text-sm text-stone-300 font-medium mb-6">
          <span className="flex items-center gap-1.5 text-amber-300">
            <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
            <span className="font-semibold text-white">4.7 / 5.0</span>
            <span className="text-stone-300">(85+ recensioni Google)</span>
          </span>
          <span aria-hidden="true" className="text-stone-500">·</span>
          <span className="flex items-center gap-1.5 text-stone-300">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Via Roma 10, Italia</span>
          </span>
          <span aria-hidden="true" className="text-stone-500">·</span>
          <span className="flex items-center gap-1.5 text-stone-300">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{liveStatus.statusText}</span>
            {liveStatus.nextInfo && (
              <span className="text-stone-400">({liveStatus.nextInfo})</span>
            )}
          </span>
        </div>

        {/* Hero Content */}
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6 [text-wrap:balance]">
            {t.hero.headline}
          </h1>

          <p className="text-base sm:text-lg text-stone-200/90 leading-relaxed font-light mb-8 max-w-2xl">
            {t.heroSubtitle}
          </p>

          {/* Quick CTA Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
            {/* Primary Booking Button */}
            <button
              type="button"
              onClick={onOpenBooking}
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm uppercase tracking-wider font-semibold text-stone-950 bg-[#C59B53] hover:bg-[#D4AF37] rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <Calendar className="w-4 h-4 text-stone-950" />
              <span>{t.hero.ctaBook}</span>
            </button>

            {/* Direct Click-to-Call Link */}
            <a
              href="tel:+390510000000"
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm uppercase tracking-wider font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-lg backdrop-blur-xs transition-all duration-200 shadow-xs focus-visible:ring-2 focus-visible:ring-white"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>{t.hero.ctaCall}</span>
            </a>

            {/* Direct Phone Number display for quick dialing */}
            <a
              href="tel:+390510000000"
              className="hidden xl:flex items-center gap-2 text-stone-300 hover:text-amber-300 text-sm font-mono tracking-wide px-3 py-2 transition-colors"
            >
              <span className="text-stone-400 font-sans text-xs">Tel:</span>
              <span className="font-semibold tabular-nums text-white">+39 051 000 0000</span>
            </a>
          </div>

          {/* Key Value Strip with clean typography (No pill boxes) */}
          <div className="pt-6 border-t border-stone-800/80 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <div className="font-serif text-2xl font-bold text-amber-300">4.7 ★</div>
              <div className="text-xs text-stone-400 mt-0.5">{t.hero.statRatingLabel}</div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-white">85+</div>
              <div className="text-xs text-stone-400 mt-0.5">{t.hero.statClientsLabel}</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="font-serif text-2xl font-bold text-white">Equipe</div>
              <div className="text-xs text-stone-400 mt-0.5">{t.hero.statExperienceLabel}</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
