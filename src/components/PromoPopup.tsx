"use client";

import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Gift, Truck, Percent } from 'lucide-react';
import Link from 'next/link';

const promos = [
  {
    id: 1,
    title: "Gratis Ongkir se-Indonesia",
    desc: "Khusus untuk pesanan pertama Anda hari ini. Tanpa minimum belanja!",
    icon: Truck,
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    id: 2,
    title: "Diskon Pengguna Baru",
    desc: "Dapatkan potongan langsung 50% untuk konsultasi dokter pertama.",
    icon: Gift,
    color: "from-emerald-500 to-teal-400",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600"
  },
  {
    id: 3,
    title: "Promo Flash Sale Obat",
    desc: "Vitamin dan suplemen pilihan diskon hingga 70% hanya minggu ini.",
    icon: Percent,
    color: "from-amber-500 to-orange-400",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600"
  }
];

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Show popup on every load/refresh with a slight delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Auto slide
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % promos.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + promos.length) % promos.length);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Popup Content */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-300">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-white/50 hover:bg-white rounded-full text-slate-500 hover:text-slate-800 backdrop-blur-md transition-colors shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {promos.map((promo) => (
              <div key={promo.id} className="w-full shrink-0 flex flex-col">
                <div className={`h-40 bg-gradient-to-br ${promo.color} p-6 flex flex-col justify-end relative overflow-hidden`}>
                  {/* Decorative circles */}
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white/20 blur-xl"></div>
                  <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-24 h-24 rounded-full bg-black/10 blur-lg"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm">
                      <promo.icon className={`w-6 h-6 ${promo.iconColor}`} />
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{promo.title}</h3>
                  <p className="text-slate-500 text-sm mb-6">{promo.desc}</p>
                  <Link 
                    href="/penawaran"
                    onClick={() => setIsOpen(false)}
                    className="inline-block w-full py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors shadow-md"
                  >
                    Klaim Promo Sekarang
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-20 left-4 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white text-slate-800 rounded-full shadow-sm backdrop-blur-sm transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-20 right-4 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white text-slate-800 rounded-full shadow-sm backdrop-blur-sm transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-[104px] left-0 right-0 flex justify-center gap-2">
          {promos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-6 bg-slate-800' : 'w-2 bg-slate-200'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
