import React from 'react';
import { MapPin, Phone, Clock, Navigation, MessageCircle, Calendar } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { openingHours, getLiveStatus } from '../data/salonData';

interface ContactSectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const t = translations[currentLang];
  const liveStatus = getLiveStatus(currentLang);
  const todayDayId = new Date().getDay();

  const googleMapsDirectionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Via+Roma+10+Bologna+Italy';

  const whatsappMessage = encodeURIComponent(
    "Buongiorno L'Équipe Salon! Vorrei richiedere informazioni per un appuntamento in salone."
  );
  const whatsappUrl = `https://wa.me/390510000000?text=${whatsappMessage}`;

  return (
    <section id="contatti" className="py-20 md:py-28 bg-[#F4EFE6]/70 border-b border-[#EADCC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B4843D] mb-2">
            {t.contact.sectionTitle}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
            {t.contact.heading}
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Split: Info Cards + Interactive Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Hours & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Status Card */}
            <div className="p-6 bg-white rounded-xl border border-[#EAE3D9] shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${liveStatus.isOpen ? 'bg-emerald-500' : 'bg-amber-600'}`} />
                  <span className="font-serif font-bold text-stone-900 text-base">
                    {liveStatus.statusText}
                  </span>
                </div>

                {liveStatus.nextInfo && (
                  <span className="text-xs text-stone-500 font-medium">
                    {liveStatus.nextInfo}
                  </span>
                )}
              </div>

              <div className="text-xs text-stone-600 leading-relaxed">
                {t.contact.hoursSubtitle}
              </div>
            </div>

            {/* Opening Hours Table */}
            <div className="p-6 bg-white rounded-xl border border-[#EAE3D9] shadow-xs">
              <div className="flex items-center gap-2 mb-4 text-stone-900">
                <Clock className="w-4 h-4 text-[#B4843D]" />
                <h3 className="font-serif font-bold text-base">
                  {t.contact.hoursTitle}
                </h3>
              </div>

              <div className="divide-y divide-stone-100 text-xs">
                {openingHours.map((item) => {
                  const isToday = item.dayId === todayDayId;
                  return (
                    <div
                      key={item.dayId}
                      className={`py-2.5 flex items-center justify-between ${
                        isToday ? 'font-bold text-stone-900 bg-[#FAF4EB]/60 px-2 rounded-md -mx-2' : 'text-stone-700'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        {item.dayName[currentLang]}
                        {isToday && (
                          <span className="text-[10px] text-[#B4843D] uppercase tracking-wider font-semibold">
                            (Oggi)
                          </span>
                        )}
                      </span>

                      <span className="font-mono tabular-nums text-right">
                        {item.isClosed ? (
                          <span className="text-stone-400 font-sans italic">{t.contact.closed}</span>
                        ) : item.fullDay ? (
                          <span>{item.fullDay}</span>
                        ) : (
                          <span>
                            {item.morning} · {item.afternoon}
                          </span>
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+390510000000"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-stone-900 hover:bg-[#B4843D] rounded-lg transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 text-amber-200" />
                <span>{t.contact.callAction}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-xs uppercase tracking-wider font-semibold text-stone-800 bg-white hover:bg-emerald-50 hover:text-emerald-800 border border-stone-200 rounded-lg transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Google Map & Direction Trigger */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white p-4 rounded-2xl border border-[#EAE3D9] shadow-xs">
              
              {/* Map Top Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-stone-100">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#B4843D] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-stone-900">
                      {t.salonName}
                    </div>
                    <div className="text-xs text-stone-600">
                      {t.addressFull}
                    </div>
                  </div>
                </div>

                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#B4843D] hover:text-stone-900 bg-[#FAF4EB] hover:bg-stone-100 rounded-md transition-colors whitespace-nowrap self-start sm:self-auto cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{t.contact.directionsBtn}</span>
                </a>
              </div>

              {/* Embedded Google Map Iframe */}
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-xl overflow-hidden bg-stone-100">
                <iframe
                  title="Posizione Salone L'Équipe Salon in Italia"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Via+Roma+10+Bologna+Italy&t=&z=16&ie=UTF8&iwloc=&output=embed"
                />
              </div>

              {/* Location notes */}
              <div className="mt-3 flex items-center justify-between text-xs text-stone-500">
                <span>Via Roma, 10 · 40121 Bologna (Italia)</span>
                <span className="hidden sm:inline">Parcheggio libero a 30 metri</span>
              </div>
            </div>

            {/* In-page Booking Banner */}
            <div className="p-5 bg-gradient-to-r from-stone-900 to-stone-800 text-white rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-serif font-bold text-base">
                  Desideri prenotare o una consulenza gratuita?
                </div>
                <div className="text-xs text-stone-300 mt-0.5">
                  Scegli online il tuo orario o chiamaci direttamente
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-stone-950 bg-[#C59B53] hover:bg-[#D4AF37] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-stone-950" />
                <span>{t.nav.bookBtn}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
