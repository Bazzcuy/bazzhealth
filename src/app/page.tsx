import React from 'react';
import { 
  Pill, 
  Stethoscope, 
  Activity, 
  ShieldCheck, 
  Truck, 
  Search, 
  Menu, 
  ArrowRight, 
  Clock, 
  Users, 
  Star, 
  CheckCircle2,
  Syringe,
  HeartPulse,
  Sparkles,
  PhoneCall,
  ShoppingBag
} from 'lucide-react';
import PromoPopup from '@/components/PromoPopup';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <PromoPopup />
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-sm shadow-emerald-500/20">
              <HeartPulse className="text-white w-6 h-6" strokeWidth={2.5} />
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">Healthbazz</h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Layanan</a>
            <a href="#categories" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Kategori</a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Panduan</a>
            <div className="h-4 w-px bg-slate-200"></div>
            <button className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
              Masuk
            </button>
            <button className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all active:scale-95 shadow-sm">
              Daftar Sekarang
            </button>
          </div>
          <div className="md:hidden">
            <button className="text-slate-600 p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-emerald-100/40 rounded-full blur-[100px] opacity-70 translate-x-1/3 -translate-y-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4" />
                <span>Layanan Farmasi Modern #1</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Kesehatan Anda, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Kapanpun Dibutuhkan.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
                Dapatkan obat, resep, dan konsultasi kesehatan langsung ke pintu Anda dalam hitungan menit. Cepat, aman, dan tanpa repot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-all shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2 group">
                  <ShoppingBag className="w-5 h-5" />
                  Mulai Belanja
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                  <PhoneCall className="w-5 h-5 text-slate-400" />
                  Tanya Apoteker
                </button>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 sm:gap-8 pt-6 border-t border-slate-200/60">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 font-medium">Dari 50rb+ pengguna</p>
                </div>
                <div className="hidden sm:block h-10 w-px bg-slate-200"></div>
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 bg-[url('https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=e2e8f0')] bg-cover`}></div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center text-xs font-bold text-slate-500">
                    +2k
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Visual Interface Elements */}
            <div className="relative hidden lg:block h-[600px]">
              {/* Main App Mockup Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[340px] bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-6 z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-slate-400 font-medium mb-1">Lokasi Pengiriman</p>
                    <p className="text-sm font-semibold flex items-center gap-1">
                      Kuningan, Jakarta <ArrowRight className="w-3 h-3 text-slate-400" />
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center">
                    <Search className="w-5 h-5 text-slate-600" />
                  </div>
                </div>
                
                <div className="bg-emerald-50 rounded-2xl p-4 mb-6">
                  <p className="text-emerald-800 text-sm font-semibold mb-2">Konsultasi Gratis</p>
                  <p className="text-emerald-600 text-xs mb-4">Chat dengan apoteker kami sekarang</p>
                  <button className="bg-white text-emerald-600 text-xs font-bold px-4 py-2 rounded-full shadow-sm">Mulai Chat</button>
                </div>

                <div className="space-y-4">
                  <p className="font-semibold text-sm">Pesanan Terakhir</p>
                  <div className="flex items-center gap-4 p-3 border border-slate-100 rounded-xl">
                    <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center">
                      <Pill className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Vitamin C 1000mg</p>
                      <p className="text-xs text-slate-400">Sedang dikirim • 15 mnt</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 border border-slate-100 rounded-xl">
                    <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center">
                      <Stethoscope className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Panadol Extra</p>
                      <p className="text-xs text-slate-400">Selesai kemarin</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-12 right-0 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 animate-[bounce_4s_infinite] z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">BPOM Approved</p>
                    <p className="text-xs text-slate-500">100% Produk Asli</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 animate-[bounce_5s_infinite_reverse] z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Super Cepat</p>
                    <p className="text-xs text-slate-500">&lt; 30 menit sampai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Search Bar */}
      <section className="relative z-20 -mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] sm:rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 p-2 flex flex-col sm:flex-row items-center gap-2">
            <div className="w-full flex items-center">
              <div className="pl-4 sm:pl-6 pr-2 flex items-center justify-center">
                <Search className="w-5 sm:w-6 h-5 sm:h-6 text-slate-400" />
              </div>
              <input 
                type="text" 
                placeholder="Cari nama obat, vitamin, keluhan..." 
                className="flex-1 bg-transparent border-none outline-none text-slate-700 placeholder-slate-400 py-3 sm:py-4 w-full"
              />
            </div>
            <button className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors shrink-0">
              Cari Produk
            </button>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section id="features" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-x-8 gap-y-12">
            {[
              {
                icon: Truck,
                title: 'Pengiriman Instan',
                desc: 'Kurir khusus kami memastikan obat sampai dalam 30 menit.',
                color: 'text-blue-500',
                bg: 'bg-blue-50'
              },
              {
                icon: ShieldCheck,
                title: 'Jaminan Keaslian',
                desc: 'Semua produk bersertifikasi BPOM dan disuplai resmi.',
                color: 'text-emerald-500',
                bg: 'bg-emerald-50'
              },
              {
                icon: Users,
                title: 'Tanya Apoteker 24/7',
                desc: 'Konsultasi gratis kapan saja dengan apoteker berlisensi.',
                color: 'text-violet-500',
                bg: 'bg-violet-50'
              },
              {
                icon: Activity,
                title: 'Promo Spesial',
                desc: 'Nikmati harga terbaik dan diskon untuk member loyal.',
                color: 'text-amber-500',
                bg: 'bg-amber-50'
              }
            ].map((Feature, idx) => (
              <div key={idx} className="group cursor-default">
                <div className={`w-14 h-14 ${Feature.bg} ${Feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Feature.icon className="w-7 h-7" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {Feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {Feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Jelajahi Kategori</h2>
              <p className="text-slate-600">Ribuan produk kesehatan siap dikirim ke alamat Anda hari ini juga.</p>
            </div>
            <button className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center gap-1 group">
              Lihat Semua <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: Pill, name: 'Obat Resep', count: '1.2k+ Produk' },
              { icon: Syringe, name: 'Suplemen', count: '850+ Produk' },
              { icon: ShieldCheck, name: 'P3K', count: '420+ Produk' },
              { icon: Sparkles, name: 'Perawatan Diri', count: '930+ Produk' },
              { icon: Activity, name: 'Alat Medis', count: '150+ Produk' }
            ].map((cat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5 transition-all cursor-pointer group flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-50 transition-colors">
                  <cat.icon className="w-6 h-6 text-slate-600 group-hover:text-emerald-600 transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{cat.name}</h3>
                <p className="text-xs text-slate-500">{cat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Paling Sering Dicari</h2>
            <p className="text-slate-600">Obat dan vitamin yang paling banyak dibeli minggu ini.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Enervon-C Multivitamin', price: 'Rp 45.000', orig: 'Rp 50.000', label: 'Terlaris' },
              { name: 'Panadol Paracetamol', price: 'Rp 12.500', orig: null, label: null },
              { name: 'Betadine Antiseptik 15ml', price: 'Rp 18.000', orig: null, label: null },
              { name: 'Tolak Angin Cair 12 Sachet', price: 'Rp 38.000', orig: 'Rp 42.000', label: 'Diskon 10%' }
            ].map((product, idx) => (
              <div key={idx} className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all">
                <div className="h-48 bg-slate-50 relative flex items-center justify-center p-6">
                  {product.label && (
                    <span className="absolute top-4 left-4 bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                      {product.label}
                    </span>
                  )}
                  {/* Placeholder for Product Image using an Icon for now */}
                  <div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center">
                    <Pill className="w-10 h-10 text-slate-300 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">{product.name}</h3>
                  <div className="mt-auto flex items-end justify-between">
                    <div>
                      {product.orig && (
                        <p className="text-xs text-slate-400 line-through mb-0.5">{product.orig}</p>
                      )}
                      <p className="text-lg font-bold text-emerald-600">{product.price}</p>
                    </div>
                    <button className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors">
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://api.dicebear.com/7.x/shapes/svg?seed=health&backgroundColor=0f172a')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold tracking-tight mb-6">Siap untuk Pengalaman Baru?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Bergabunglah dengan puluhan ribu pelanggan lainnya. Instal aplikasi Healthbazz sekarang dan nikmati ongkos kirim gratis untuk pesanan pertama Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/25">
              Unduh Aplikasi
            </button>
            <button className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-full hover:bg-slate-700 transition-colors border border-slate-700">
              Lihat Promo Tersedia
            </button>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <HeartPulse className="text-emerald-500 w-6 h-6" />
            <span className="font-bold text-slate-900 text-lg">Healthbazz</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">Tentang Kami</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Bantuan</a>
          </div>
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Healthbazz Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
