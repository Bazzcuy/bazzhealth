"use client";

import React, { useState } from 'react';
import { ArrowLeft, ShoppingBag, Trash2, Plus, Minus, ShieldCheck, Truck } from 'lucide-react';
import Link from 'next/link';
import { products, formatPrice } from '@/lib/products';
import LoginDemoModal from '@/components/LoginDemoModal';

// Simulate cart with static items for demo purposes
const cartItems = [
  { product: products[0], qty: 2 },
  { product: products[1], qty: 1 },
];

export default function KeranjangPage() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [items, setItems] = useState(cartItems);

  const total = items.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const totalItems = items.reduce((sum, item) => sum + item.qty, 0);

  const updateQty = (idx: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((item, i) => i === idx ? { ...item, qty: Math.max(0, item.qty + delta) } : item)
        .filter((item) => item.qty > 0)
    );
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans">
      <LoginDemoModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />

      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors font-semibold">
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Lanjut Belanja</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#23A455] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg leading-none">+</span>
            </div>
            <span className="font-extrabold text-[#1a1a1a]">bazzhealth</span>
          </div>
          <div className="relative text-slate-600">
            <ShoppingBag className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#23A455] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <h1 className="text-2xl font-extrabold text-[#1a1a1a] mb-8 tracking-tight">Keranjang Belanja</h1>

        {items.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-100 p-16 text-center">
            <ShoppingBag className="w-12 h-12 text-slate-200 mx-auto mb-4" />
            <p className="text-slate-500 font-medium mb-4">Keranjang Anda masih kosong</p>
            <Link href="/" className="text-[#23A455] font-bold hover:underline">Mulai Belanja</Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Cart Items */}
            <div className="flex-1 space-y-4">
              {items.map((item, idx) => (
                <div key={item.product.id} className="bg-white rounded-2xl border border-slate-100 p-4 sm:p-6 flex items-center gap-4 shadow-sm">
                  <Link href={`/produk/${item.product.id}`}>
                    <div className="w-20 h-20 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 p-2">
                      <img src={item.product.img} alt={item.product.name} className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link href={`/produk/${item.product.id}`}>
                      <p className="font-bold text-slate-900 hover:text-[#23A455] transition-colors line-clamp-2 text-sm sm:text-base">{item.product.name}</p>
                    </Link>
                    <p className="text-[#23A455] font-extrabold mt-1">{formatPrice(item.product.price)}</p>
                  </div>
                  <div className="flex flex-col items-end gap-3 shrink-0">
                    <button onClick={() => updateQty(idx, 999)} className="text-slate-300 hover:text-red-400 transition-colors">
                      <Trash2 className="w-4 h-4" onClick={() => setItems(prev => prev.filter((_, i) => i !== idx))} />
                    </button>
                    <div className="flex items-center gap-0 border border-slate-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => updateQty(idx, -1)}
                        className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-bold text-slate-900">{item.qty}</span>
                      <button
                        onClick={() => updateQty(idx, 1)}
                        className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-[340px] shrink-0">
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm sticky top-24">
                <h2 className="font-extrabold text-slate-900 text-lg mb-5">Ringkasan Pesanan</h2>
                
                <div className="space-y-3 mb-5">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex justify-between text-sm">
                      <span className="text-slate-600 truncate mr-2">{item.product.name} x{item.qty}</span>
                      <span className="font-semibold text-slate-800 shrink-0">{formatPrice(item.product.price * item.qty)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-100 pt-4 mb-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Subtotal</span>
                    <span className="font-semibold">{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Ongkos Kirim</span>
                    <span className="font-semibold text-[#23A455]">Gratis</span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-slate-100 pt-4 mb-6">
                  <span className="font-bold text-slate-900">Total</span>
                  <span className="text-xl font-extrabold text-[#23A455]">{formatPrice(total)}</span>
                </div>

                {/* Checkout → triggers login modal */}
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="w-full py-4 bg-[#23A455] text-white font-bold rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-5 h-5" />
                  Lanjut ke Pembayaran
                </button>
                
                <div className="flex items-center justify-center gap-4 mt-4">
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>100% Original</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <Truck className="w-3.5 h-3.5" />
                    <span>Pengiriman Cepat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
