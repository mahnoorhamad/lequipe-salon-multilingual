import React, { useState } from 'react';
import { Star, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { salonReviews } from '../data/salonData';

interface ReviewsSectionProps {
  currentLang: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ currentLang }) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'cut' | 'color' | 'men'>('all');
  const t = translations[currentLang];

  const filteredReviews =
    filterCategory === 'all'
      ? salonReviews
      : salonReviews.filter((r) => r.category === filterCategory);

  return (
    <section id="recensioni" className="py-20 md:py-28 bg-[#FAF7F2] border-b border-[#EADCC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block & Quantitative Proof */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-8">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B4843D] mb-2">
              {t.reviews.sectionTitle}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
              {t.reviews.heading}
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              {t.reviews.subtitle}
            </p>
          </div>

          {/* Google 4.7 Aggregate Score Card */}
          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#EADCC9] shadow-xs flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i === 4 ? 'fill-amber-400/40 text-amber-500' : 'fill-amber-400 text-amber-500'
                    }`}
                  />
                ))}
              </div>
              <div className="text-xs text-stone-600 font-medium">
                {t.reviews.googleBadge}
              </div>
            </div>

            <div className="text-right">
              <div className="font-serif text-3xl font-bold text-stone-900 leading-none">
                4.7
              </div>
              <div className="text-[11px] text-stone-500 mt-1">
                85+ recensioni
              </div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#E2D2BC]">
          <button
            type="button"
            onClick={() => setFilterCategory('all')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${
              filterCategory === 'all'
                ? 'bg-stone-900 text-white'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            {t.reviews.filterAll}
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('color')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${
              filterCategory === 'color'
                ? 'bg-stone-900 text-white'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            {t.reviews.filterColor}
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('cut')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${
              filterCategory === 'cut'
                ? 'bg-stone-900 text-white'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            {t.reviews.filterCut}
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('men')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${
              filterCategory === 'men'
                ? 'bg-stone-900 text-white'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            {t.reviews.filterMen}
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-xl border border-[#EAE3D9] p-6 flex flex-col justify-between hover:border-[#D5C2AA] transition-all shadow-xs"
            >
              <div>
                {/* Header: Stars & Date */}
                <div className="flex items-center justify-between mb-3 text-xs text-stone-400">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                  <span>{rev.date[currentLang]}</span>
                </div>

                {/* Service Mention */}
                <div className="text-xs font-medium text-[#B4843D] mb-3">
                  {rev.service[currentLang]}
                </div>

                {/* Quote Text */}
                <p className="text-stone-700 text-sm leading-relaxed mb-6 italic">
                  "{rev.comment[currentLang]}"
                </p>
              </div>

              {/* Author & Verified Badge */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div className="font-serif font-bold text-stone-900 text-sm">
                  {rev.author}
                </div>
                
                {rev.verified && (
                  <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verificata</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Link to Leave Google Review */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/Via+Roma,+10,+40121+Bologna+BO,+Italy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-stone-700 hover:text-[#B4843D] transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#B4843D]" />
            <span>{t.reviews.writeReview}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
};
