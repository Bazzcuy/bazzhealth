"use client";

import React from 'react';
import { X, Info } from 'lucide-react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LoginDemoModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 text-center animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <Info className="w-8 h-8 text-amber-500" />
        </div>

        <h3 className="text-xl font-extrabold text-slate-900 mb-2">Mode Demo</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">
          Login tidak tersedia pada versi demo ini. Fitur ini hanya tersedia pada versi produksi.
        </p>

        <button
          onClick={onClose}
          className="w-full py-3 bg-[#23A455] text-white font-bold rounded-xl hover:bg-emerald-600 transition-colors"
        >
          Mengerti
        </button>
      </div>
    </div>
  );
}
