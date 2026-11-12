import React, { useState } from 'react';
import { Eye, X, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { salonImages } from '../data/salonData';

interface GallerySectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

interface GalleryItem {
  id: string;
  image: string;
  title: Record<Language, string>;
  category: Record<Language, string>;
  alt: string;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);
  const t = translations[currentLang];

  const items: GalleryItem[] = [
    {
      id: 'g-1',
      image: salonImages.balayage,
      title: {
        it: 'Balayage Caramello & Onde Luminose',
        en: 'Caramel Balayage & Luminous Waves',
        de: 'Karamell-Balayage & Glanzwellen',
        fr: 'Balayage Caramel & Ondulations',
      },
      category: {
        it: 'Colorazione Artistica',
        en: 'Artisan Coloring',
        de: 'Farbveredelung',
        fr: 'Coloration Artistique',
      },
      alt: "Balayage biondo caramello su capelli lunghi mossi realizzato a L'Équipe Salon",
    },
    {
      id: 'g-2',
      image: salonImages.mens,
      title: {
        it: 'Taglio Uomo Sartoriale & Cura Barba',
        en: "Men's Modern Fade & Beard Shaping",
        de: 'Moderner Herrenschnitt & Bartpflege',
        fr: 'Dégradé Homme & Soin de Barbe',
      },
      category: {
        it: 'Grooming Maschile',
        en: "Men's Grooming",
        de: 'Herren-Styling',
        fr: 'Coiffure Homme',
      },
      alt: "Taglio uomo con sfumatura precisa e barba curata nel salone L'Équipe",
    },
    {
      id: 'g-3',
      image: salonImages.interior,
      title: {
        it: 'L’Atmosfera Esclusiva del Salone',
        en: 'Exclusive Salon Ambience',
        de: 'Exklusive Salon-Atmosphäre',
        fr: 'L’Atmosphère Exclusive du Salon',
      },
      category: {
        it: 'Il Nostro Spazio',
        en: 'Our Sanctuary',
        de: 'Unser Salon',
        fr: 'Notre Espace',
      },
      alt: "Poltrone da parrucchiere moderne e specchi luminosi nel salone in Italia",
    },
    {
      id: 'g-4',
      image: salonImages.hero,
      title: {
        it: 'Styling Professionale & Cura della Chioma',
        en: 'Master Styling & Deep Hair Care',
        de: 'Meister-Styling & Tiefenpflege',
        fr: 'Coiffage Précis & Soin Profond',
      },
      category: {
        it: 'In Azione',
        en: 'In Action',
        de: 'Im Salon',
        fr: 'En Action',
      },
      alt: "Master stylist esperto all'opera nel salone L'Équipe in Italia",
    },
  ];

  return (
    <section id="galleria" className="py-20 md:py-28 bg-[#FAF7F2] border-b border-[#EADCC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B4843D] mb-2">
              {t.gallery.sectionTitle}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
              {t.gallery.heading}
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              {t.gallery.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-stone-900 bg-white border border-[#EAE3D9] hover:border-[#B4843D] rounded-lg shadow-xs cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B4843D]" />
            <span>Prenota la tua trasformazione</span>
          </button>
        </div>

        {/* 4-Card Portfolio Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative rounded-xl overflow-hidden border border-[#EAE3D9] bg-stone-200 cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-4/3 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              {/* Text content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                <div className="text-[11px] font-sans uppercase tracking-widest text-amber-300 font-semibold mb-1">
                  {item.category[currentLang]}
                </div>
                <h3 className="font-serif text-base font-bold leading-snug">
                  {item.title[currentLang]}
                </h3>

                <div className="mt-3 flex items-center gap-1.5 text-xs text-stone-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Visualizza dettaglio</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-stone-200">
            <button
              type="button"
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-10 p-2 text-stone-700 bg-white/90 hover:bg-white rounded-full shadow-md transition-colors"
              aria-label="Chiudi finestra"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] overflow-hidden bg-stone-900 flex items-center justify-center">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.alt}
                className="max-h-[70vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#B4843D] font-semibold mb-1">
                  {activeModalItem.category[currentLang]}
                </div>
                <div className="font-serif text-xl font-bold text-stone-900">
                  {activeModalItem.title[currentLang]}
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setActiveModalItem(null);
                  onOpenBooking();
                }}
                className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-stone-900 hover:bg-[#B4843D] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                {t.nav.bookBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
