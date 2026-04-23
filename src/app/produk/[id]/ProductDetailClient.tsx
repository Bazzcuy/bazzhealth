"use client";

import React, { useState } from 'react';
import { ArrowLeft, ShoppingBag, Star, Shield, Truck, Minus, Plus, Package, Tag } from 'lucide-react';
import Link from 'next/link';
import { Product, formatPrice } from '@/lib/products';
import LoginDemoModal from '@/components/LoginDemoModal';

export default function ProductDetailClient({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans">
      <LoginDemoModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />

      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors font-semibold">
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Kembali</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#23A455] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg leading-none">+</span>
            </div>
            <span className="font-extrabold text-[#1a1a1a]">bazzhealth</span>
          </div>
          <Link href="/keranjang" className="relative text-slate-600 hover:text-[#23A455] transition-colors">
            <ShoppingBag className="w-6 h-6" />
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">

          {/* Product Image */}
          <div className="bg-white rounded-3xl border border-slate-100 flex items-center justify-center p-10 md:p-16 aspect-square shadow-sm">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-contain mix-blend-multiply drop-shadow-lg"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-[#23A455] bg-green-50 px-3 py-1 rounded-full border border-green-100">
                {product.category}
              </span>
              {product.label && (
                <span className="text-xs font-bold text-white bg-[#23A455] px-3 py-1 rounded-full">
                  {product.label}
                </span>
              )}
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold text-[#1a1a1a] tracking-tight mb-3">
              {product.name}
            </h1>

            {/* Rating & Sold */}
            <div className="flex items-center gap-4 mb-5">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-slate-800 text-sm">{product.rating}</span>
              </div>
              <span className="text-slate-300">|</span>
              <span className="text-sm text-slate-500">Terjual <span className="font-semibold text-slate-700">{product.sold.toLocaleString('id-ID')}</span></span>
            </div>

            {/* Price */}
            <div className="bg-green-50 rounded-2xl p-4 mb-6">
              <div className="flex items-end gap-3">
                <span className="text-3xl font-extrabold text-[#23A455]">{formatPrice(product.price)}</span>
                {discount && (
                  <span className="text-sm font-bold text-white bg-red-500 px-2 py-0.5 rounded-md mb-1">-{discount}%</span>
                )}
              </div>
              {product.originalPrice && (
                <p className="text-sm text-slate-400 line-through mt-1">{formatPrice(product.originalPrice)}</p>
              )}
            </div>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Package className="w-4 h-4 text-slate-400" />
                <span>Berat: <span className="font-semibold">{product.weight}</span></span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Tag className="w-4 h-4 text-slate-400" />
                <span>Brand: <span className="font-semibold">{product.brand}</span></span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Shield className="w-4 h-4 text-slate-400" />
                <span>Stok: <span className="font-semibold text-[#23A455]">{product.stock} tersedia</span></span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Truck className="w-4 h-4 text-slate-400" />
                <span>Pengiriman <span className="font-semibold">Same-day</span></span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-sm leading-relaxed mb-8 border-t border-slate-100 pt-6">
              {product.description}
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-semibold text-slate-700">Jumlah:</span>
              <div className="flex items-center gap-0 border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center font-bold text-slate-900">{qty}</span>
                <button
                  onClick={() => setQty(Math.min(product.stock, qty + 1))}
                  className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-sm text-slate-500">Subtotal: <span className="font-bold text-slate-900">{formatPrice(product.price * qty)}</span></span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-auto">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-4 rounded-xl font-bold text-sm border-2 transition-all flex items-center justify-center gap-2 ${
                  addedToCart
                    ? 'bg-[#23A455] text-white border-[#23A455]'
                    : 'bg-white text-[#23A455] border-[#23A455] hover:bg-green-50'
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                {addedToCart ? 'Ditambahkan!' : 'Tambah ke Keranjang'}
              </button>
              <button
                onClick={() => setShowLoginModal(true)}
                className="flex-1 py-4 bg-[#23A455] text-white rounded-xl font-bold text-sm hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
              >
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
