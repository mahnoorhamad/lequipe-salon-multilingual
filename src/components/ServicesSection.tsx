import React, { useState } from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { Language, ServiceCategory, ServiceItem } from '../types';
import { translations } from '../data/translations';
import { salonServices } from '../data/salonData';

interface ServicesSectionProps {
  currentLang: Language;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  currentLang,
  onSelectService,
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const t = translations[currentLang];

  const categories: { id: ServiceCategory; label: string }[] = [
    { id: 'all', label: t.services.tabs.all },
    { id: 'cut', label: t.services.tabs.cut },
    { id: 'color', label: t.services.tabs.color },
    { id: 'treatment', label: t.services.tabs.treatment },
    { id: 'special', label: t.services.tabs.special },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? salonServices
      : salonServices.filter((s) => s.category === activeCategory);

  return (
    <section id="servizi" className="py-20 md:py-28 bg-[#F4EFE6]/60 border-b border-[#EADCC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B4843D] mb-2">
              {t.services.sectionTitle}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
              {t.services.heading}
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              {t.services.subtitle}
            </p>
          </div>

          <div className="text-xs text-stone-500 font-medium">
            Consulenza e diagnosi cute & capello sempre incluse
          </div>
        </div>

        {/* Interactive Filter Tabs (Valid buttons per Section 1.A) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#E2D2BC]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-100 hover:text-stone-900 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-[#EAE3D9] p-6 flex flex-col justify-between hover:border-[#C59B53] hover:shadow-md transition-all duration-200 group"
            >
              <div>
                {/* Clean unboxed category & target metadata */}
                <div className="flex items-center justify-between text-xs text-stone-500 mb-3 font-medium">
                  <span className="uppercase tracking-wider text-[#B4843D]">
                    {service.category === 'cut' && t.services.tabs.cut}
                    {service.category === 'color' && t.services.tabs.color}
                    {service.category === 'treatment' && t.services.tabs.treatment}
                    {service.category === 'special' && t.services.tabs.special}
                  </span>
                  
                  <span className="flex items-center gap-1 text-stone-500 font-mono">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span>{service.duration[currentLang]}</span>
                  </span>
                </div>

                {/* Service Name */}
                <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-[#B4843D] transition-colors mb-2">
                  {service.name[currentLang]}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  {service.description[currentLang]}
                </p>
              </div>

              {/* Price baseline & Request CTA */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-stone-400 font-medium">
                    Prezzo indicativo
                  </div>
                  <div className="font-serif text-lg font-bold text-stone-900 font-mono tabular-nums">
                    {service.priceRange}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-stone-800 bg-[#FAF7F2] hover:bg-stone-900 hover:text-white border border-[#EAE3D9] rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{t.services.requestBtn}</span>
                  <ChevronRight className="w-3 h-3 text-stone-400 group-hover:text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Transparency Note */}
        <div className="mt-10 p-4 bg-white/70 rounded-lg border border-[#EADCC9] text-xs text-stone-600 text-center">
          {t.services.note}
        </div>

      </div>
    </section>
  );
};
