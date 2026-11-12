/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language, ServiceItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('it');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preSelectedService, setPreSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenBooking = () => {
    setPreSelectedService(null);
    setIsBookingOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setPreSelectedService(service);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1917] font-sans flex flex-col selection:bg-[#EADCC9] selection:text-stone-900">
      
      {/* Top Navigation */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenBooking={handleOpenBooking}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        {/* About Us Section */}
        <AboutSection
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        {/* Services & Pricing Menu */}
        <ServicesSection
          currentLang={currentLang}
          onSelectService={handleSelectService}
        />

        {/* Salon Transformations & Gallery */}
        <GallerySection
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        {/* Social Proof & Customer Reviews */}
        <ReviewsSection
          currentLang={currentLang}
        />

        {/* Contact, Opening Hours & Google Maps */}
        <ContactSection
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />

      {/* Mobile Sticky Quick Bar */}
      <MobileQuickBar
        currentLang={currentLang}
        onOpenBooking={handleOpenBooking}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        currentLang={currentLang}
        preSelectedService={preSelectedService}
      />

    </div>
  );
}
