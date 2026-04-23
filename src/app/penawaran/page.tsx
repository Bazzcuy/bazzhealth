import React from 'react';
import { ArrowLeft, Gift, Truck, Percent, Copy, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const offers = [
  {
    id: 1,
    title: "Gratis Ongkir se-Indonesia",
    desc: "Nikmati gratis ongkir ke seluruh Indonesia tanpa minimum pembelian. Berlaku untuk pengiriman reguler dan same-day.",
    icon: Truck,
    color: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50",
    iconColor: "text-blue-500",
    code: "FREESHIP24",
    validUntil: "31 Des 2024"
  },
  {
    id: 2,
    title: "Diskon 50% Pengguna Baru",
    desc: "Dapatkan potongan langsung 50% (maks. Rp 50.000) untuk konsultasi dokter atau pembelian obat pertama Anda.",
    icon: Gift,
    color: "from-emerald-500 to-teal-400",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    code: "NEWUSER50",
    validUntil: "Berlaku 7 hari sejak daftar"
  },
  {
    id: 3,
    title: "Flash Sale Vitamin & Suplemen",
    desc: "Jaga daya tahan tubuh! Diskon hingga 70% untuk produk vitamin C, D3, dan multivitamin pilihan.",
    icon: Percent,
    color: "from-amber-500 to-orange-400",
    bg: "bg-amber-50",
    iconColor: "text-amber-500",
    code: "SEHAT70",
    validUntil: "Minggu ini"
  }
];

export default function Penawaran() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans">
      {/* Simple Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5" />
            Kembali
          </Link>
          <div className="mx-auto font-bold text-lg text-slate-900 absolute left-1/2 -translate-x-1/2">
            Promo & Penawaran
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Penawaran Eksklusif</h1>
          <p className="text-slate-600 max-w-xl mx-auto text-lg">Klaim kupon di bawah ini saat *checkout* untuk mendapatkan potongan harga dan keuntungan lainnya.</p>
        </div>

        <div className="space-y-6">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row group">
              {/* Left colorful side */}
              <div className={`md:w-48 bg-gradient-to-br ${offer.color} p-6 flex flex-col items-center justify-center text-white relative overflow-hidden shrink-0`}>
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-black/10 rounded-full blur-xl translate-x-1/3 translate-y-1/3"></div>
                
                <offer.icon className="w-12 h-12 mb-2 relative z-10" />
                <span className="font-bold text-center leading-tight relative z-10">{offer.title}</span>
              </div>
              
              {/* Right content side */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {offer.desc}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                  <div className="flex items-center gap-2 bg-slate-100 rounded-xl p-2 px-4 w-fit border border-slate-200 border-dashed">
                    <span className="font-mono font-bold text-slate-800 tracking-wider">{offer.code}</span>
                    <button className="text-slate-400 hover:text-emerald-600 transition-colors p-1" title="Salin Kode">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-right flex items-center justify-between sm:block">
                    <span className="text-xs text-slate-500 block mb-1">Berlaku s/d:</span>
                    <span className="text-sm font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full">{offer.validUntil}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-6 flex items-start gap-4">
          <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-slate-900 mb-1">Cara Menggunakan Kupon</h4>
            <p className="text-sm text-slate-600 leading-relaxed">Salin kode promo yang Anda inginkan di halaman ini, lalu tempel (*paste*) kode tersebut pada kolom "Kode Promo" di halaman keranjang belanja Anda sebelum melakukan pembayaran.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
