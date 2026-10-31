'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection';
import ReservationSection from '@/components/ReservationSection';
import HoursSection from '@/components/HoursSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream-100 text-espresso-950 selection:bg-caramel-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <GallerySection />
      <ReservationSection />
      <HoursSection />
      <LocationSection />
      <Footer />
      <FloatingWidgets />
    </main>
  );
}
