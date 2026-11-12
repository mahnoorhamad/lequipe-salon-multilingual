import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, MessageCircle, Check, Download, Clock } from 'lucide-react';
import { Language, ServiceItem } from '../types';
import { translations } from '../data/translations';
import { salonServices } from '../data/salonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  preSelectedService?: ServiceItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  preSelectedService,
}) => {
  const t = translations[currentLang];

  const [selectedServiceId, setSelectedServiceId] = useState<string>('cut-women');
  const [stylist, setStylist] = useState<string>('any');
  const [date, setDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('morning');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingCode, setBookingCode] = useState<string>('');

  useEffect(() => {
    if (preSelectedService) {
      setSelectedServiceId(preSelectedService.id);
    }
  }, [preSelectedService]);

  useEffect(() => {
    // Set default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setDate(`${yyyy}-${mm}-${dd}`);
  }, [isOpen]);

  if (!isOpen) return null;

  const currentService = salonServices.find((s) => s.id === selectedServiceId) || salonServices[0];

  const handleOnlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = 'ROB-' + Math.floor(1000 + Math.random() * 9000);
    setBookingCode(randomCode);
    setIsSubmitted(true);
  };

  const handleWhatsAppSubmit = () => {
    const serviceName = currentService.name[currentLang];
    const text = `Buongiorno L'Équipe Salon! 💇‍♀️\nVorrei richiedere un appuntamento per:\n- Servizio: ${serviceName}\n- Data richiesta: ${date || 'Prossima disponibilità'}\n- Orario: ${timeSlot === 'morning' ? 'Mattina (8:30-12:30)' : 'Pomeriggio (15:00-19:00)'}\n- Preferenza: ${stylist === 'master' ? 'Master Stylist' : 'Primo operatore disponibile'}\n- Nome: ${name || 'Cliente'}\n- Recapito: ${phone || 'Telefono'}\n${notes ? `- Note: ${notes}` : ''}`;
    
    const url = `https://wa.me/390510000000?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleDownloadCalendar = () => {
    const serviceName = currentService.name[currentLang];
    const cleanDate = date.replace(/-/g, '');
    const startTime = timeSlot === 'morning' ? `${cleanDate}T093000` : `${cleanDate}T160000`;
    const endTime = timeSlot === 'morning' ? `${cleanDate}T103000` : `${cleanDate}T170000`;

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//L\'Équipe Salon//IT',
      'BEGIN:VEVENT',
      `SUMMARY:Appuntamento Salone: ${serviceName}`,
      `DESCRIPTION:Appuntamento presso L'Équipe Salon - Via Roma 10, 40121 Bologna, Italy. Tel: +39 051 000 0000`,
      `LOCATION:Via Roma 10, 40121 Bologna, Italy`,
      `DTSTART:${startTime}`,
      `DTEND:${endTime}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `appuntamento-lequipe-salon.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="fixed inset-0"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden z-10 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-stone-100 bg-[#FAF7F2] flex items-center justify-between">
          <div>
            <h3 className="font-serif text-xl font-bold text-stone-900">
              {isSubmitted ? t.booking.successTitle : t.booking.modalTitle}
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              {isSubmitted ? `Codice: ${bookingCode}` : t.booking.modalSubtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-200/50 transition-colors cursor-pointer"
            aria-label={t.booking.closeModal}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>

              <div className="max-w-md mx-auto space-y-2">
                <div className="font-serif text-lg font-bold text-stone-900">
                  {name ? `${name}, ` : ''}la tua richiesta è stata registrata!
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {t.booking.successMessage}
                </p>
              </div>

              {/* Summary recap */}
              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#EADCC9] text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-stone-500">Servizio:</span>
                  <span className="font-semibold text-stone-900">{currentService.name[currentLang]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Prezzo indicativo:</span>
                  <span className="font-mono font-bold text-stone-900">{currentService.priceRange}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Data richiesta:</span>
                  <span className="font-medium text-stone-900">{date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Fascia:</span>
                  <span className="font-medium text-stone-900">
                    {timeSlot === 'morning' ? t.booking.timeMorning : t.booking.timeAfternoon}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleDownloadCalendar}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-900 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#B4843D]" />
                  <span>{t.booking.calendarDownload}</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2.5 text-xs font-semibold text-white bg-stone-900 hover:bg-[#B4843D] rounded-lg cursor-pointer"
                >
                  {t.booking.closeModal}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleOnlineSubmit} className="space-y-4">
              
              {/* Service Select */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  {t.booking.serviceLabel} *
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#B4843D]"
                  required
                >
                  {salonServices.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name[currentLang]} ({s.priceRange})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    {t.booking.dateLabel} *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#B4843D]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    {t.booking.timeLabel} *
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#B4843D]"
                  >
                    <option value="morning">{t.booking.timeMorning}</option>
                    <option value="afternoon">{t.booking.timeAfternoon}</option>
                  </select>
                </div>
              </div>

              {/* Stylist preference */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  {t.booking.stylistLabel}
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => setStylist('any')}
                    className={`py-2 px-3 border rounded-lg text-center cursor-pointer transition-colors ${
                      stylist === 'any'
                        ? 'border-stone-900 bg-stone-900 text-white font-semibold'
                        : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    {t.booking.stylistAny}
                  </button>
                  <button
                    type="button"
                    onClick={() => setStylist('master')}
                    className={`py-2 px-3 border rounded-lg text-center cursor-pointer transition-colors ${
                      stylist === 'master'
                        ? 'border-stone-900 bg-stone-900 text-white font-semibold'
                        : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    {t.booking.stylistMaster}
                  </button>
                  <button
                    type="button"
                    onClick={() => setStylist('team')}
                    className={`py-2 px-3 border rounded-lg text-center cursor-pointer transition-colors ${
                      stylist === 'team'
                        ? 'border-stone-900 bg-stone-900 text-white font-semibold'
                        : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    {t.booking.stylistTeam}
                  </button>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    {t.booking.nameLabel} *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.booking.namePlaceholder}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#B4843D]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    {t.booking.phoneLabel} *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.booking.phonePlaceholder}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#B4843D]"
                    required
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  {t.booking.notesLabel}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t.booking.notesPlaceholder}
                  className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#B4843D]"
                />
              </div>

              {/* Fast Instant WhatsApp / Phone Options */}
              <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  <span>{t.booking.whatsappSubmit}</span>
                </button>

                <a
                  href="tel:+390510000000"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-lg transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B4843D]" />
                  <span>{t.booking.phoneSubmit}</span>
                </a>
              </div>

              {/* Primary Form Submit */}
              <button
                type="submit"
                className="w-full py-3 px-4 text-xs uppercase tracking-wider font-semibold text-white bg-stone-900 hover:bg-[#B4843D] rounded-lg transition-all duration-150 cursor-pointer shadow-sm hover:shadow-md"
              >
                {t.booking.inAppSubmit}
              </button>

              <div className="text-[11px] text-stone-500 text-center leading-tight">
                {t.booking.disclaimer}
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
