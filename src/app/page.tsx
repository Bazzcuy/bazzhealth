import React from 'react'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">💊</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Healthbazz</h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-primary transition">Fitur</a>
            <a href="#categories" className="text-gray-600 hover:text-primary transition">Kategori</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary transition">Cara Kerja</a>
            <button className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">
              Masuk
            </button>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600">☰</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="gradient-primary text-white py-16 md:py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/15 rounded-full blur-lg"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-2xl">🏥</span>
                <span className="text-sm font-medium">Apotek Terpercaya #1 Indonesia</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                Kesehatan Anda adalah <span className="text-yellow-300">Prioritas</span> Kami
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-lg">
                Pesan obat online dengan pengiriman cepat ke seluruh Indonesia. Dapatkan resep Anda diisi dan dikirim ke pintu rumah Anda dengan aman dan terpercaya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  🛒 Pesan Sekarang
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  📞 Konsultasi Dokter
                </button>
              </div>
              <div className="flex gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xl">⚡</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">30-60</p>
                    <p className="opacity-75">Menit Kirim</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xl">👥</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">50K+</p>
                    <p className="opacity-75">Pelanggan</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xl">⭐</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">4.8</p>
                    <p className="opacity-75">Rating</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                {/* Main Hero Image Placeholder */}
                <div className="w-full h-96 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl border border-white/30 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🏥</div>
                    <p className="text-white/80 font-medium">Apotek Modern</p>
                    <p className="text-white/60 text-sm">24 Jam Siap Melayani</p>
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💊</span>
                  </div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center">
                    <span className="text-xl">🩺</span>
                  </div>
                  <div className="absolute top-1/2 left-4 w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center">
                    <span className="text-lg">🌡️</span>
                  </div>
                </div>
                {/* Floating Cards */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🚚</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Gratis Ongkir</p>
                      <p className="text-sm text-gray-600">Min. Rp 50.000</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🔒</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">100% Aman</p>
                      <p className="text-sm text-gray-600">Obat Asli</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 -mt-12 relative z-10">
            <div className="flex items-center gap-3 border-2 border-gray-200 rounded-xl px-4 py-3 focus-within:border-primary transition">
              <span className="text-2xl">🔍</span>
              <input 
                type="text" 
                placeholder="Cari obat, vitamin, suplemen..." 
                className="flex-1 outline-none text-gray-700 placeholder-gray-400"
              />
              <button className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">
                Cari
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Pilih Healthbazz?
            </h2>
            <p className="text-lg text-gray-600">
              Kami menyediakan pengalaman farmasi terbaik dengan kualitas dan keandalan
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: '🚀',
                title: 'Pengiriman Super Cepat',
                desc: 'Obat sampai dalam 30-60 menit di kota besar',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: '🛡️',
                title: '100% Aman & Terpercaya',
                desc: 'Obat asli dengan sertifikasi BPOM',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: '💰',
                title: 'Harga Terjangkau',
                desc: 'Diskon hingga 30% setiap hari',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: '👨‍⚕️',
                title: 'Konsultasi Gratis',
                desc: 'Apoteker siap bantu 24/7',
                color: 'from-orange-500 to-orange-600'
              }
            ].map((feature, idx) => (
              <div key={idx} className="group p-8 bg-white rounded-3xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-3xl text-white">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Jelajahi Kategori
            </h2>
            <p className="text-lg text-gray-600">
              Temukan apa yang Anda butuhkan dari pilihan lengkap kami
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: '💊', name: 'Obat & Vitamin', count: '2.500+', color: 'from-red-400 to-red-500', bg: 'bg-red-50' },
              { icon: '🧬', name: 'Suplemen', count: '800+', color: 'from-blue-400 to-blue-500', bg: 'bg-blue-50' },
              { icon: '🩹', name: 'Pertolongan Pertama', count: '600+', color: 'from-green-400 to-green-500', bg: 'bg-green-50' },
              { icon: '💄', name: 'Perawatan & Kecantikan', count: '1.200+', color: 'from-pink-400 to-pink-500', bg: 'bg-pink-50' },
              { icon: '🏥', name: 'Alat Kesehatan', count: '400+', color: 'from-purple-400 to-purple-500', bg: 'bg-purple-50' }
            ].map((cat, idx) => (
              <button
                key={idx}
                className="group p-6 bg-white rounded-3xl hover:shadow-2xl hover:border-primary border-2 border-transparent transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-16 h-16 ${cat.bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{cat.icon}</span>
                </div>
                <p className="font-bold text-gray-900 text-center mb-1 group-hover:text-primary transition-colors">
                  {cat.name}
                </p>
                <p className="text-sm text-gray-500 text-center">{cat.count}</p>
                <div className={`mt-3 w-full h-1 bg-gradient-to-r ${cat.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              </button>
            ))}
          </div>
      {/* Popular Products Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Produk Terlaris
            </h2>
            <p className="text-lg text-gray-600">
              Pilih dari koleksi obat dan vitamin terbaik kami
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: 'Vitamin C 1000mg',
                price: 'Rp 45.000',
                originalPrice: 'Rp 55.000',
                rating: 4.9,
                image: '🧴',
                discount: '18%'
              },
              {
                name: 'Paracetamol 500mg',
                price: 'Rp 12.000',
                originalPrice: 'Rp 15.000',
                rating: 4.8,
                image: '💊',
                discount: '20%'
              },
              {
                name: 'Masker Medis 3ply',
                price: 'Rp 25.000',
                originalPrice: 'Rp 35.000',
                rating: 4.7,
                image: '😷',
                discount: '29%'
              },
              {
                name: 'Termometer Digital',
                price: 'Rp 85.000',
                originalPrice: 'Rp 95.000',
                rating: 4.9,
                image: '🌡️',
                discount: '11%'
              }
            ].map((product, idx) => (
              <div key={idx} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className="relative p-6 bg-gradient-to-br from-gray-50 to-white">
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {product.discount}
                  </div>
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">{product.image}</span>
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>⭐</span>
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-center">{product.name}</h3>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Tambah ke Keranjang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="how-it-works" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cara Kerja Healthbazz
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Cari & Jelajahi',
                desc: 'Temukan obat dengan pencarian mudah kami'
              },
              {
                step: '2',
                title: 'Unggah Resep',
                desc: 'Unggah resep digital jika diperlukan'
              },
              {
                step: '3',
                title: 'Tambah ke Keranjang',
                desc: 'Pilih jumlah dan lanjutkan ke pembayaran'
              },
              {
                step: '4',
                title: 'Terima di Rumah',
                desc: 'Terima di rumah dengan pengiriman gratis'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
                {idx < 3 && (
                  <div className="hidden md:block absolute right-0 top-20 -translate-x-8 text-3xl text-primary">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apa Kata Pelanggan Kami
            </h2>
            <p className="text-lg text-gray-600">
              Ribuan pelanggan sudah merasakan pengalaman berbelanja obat online yang mudah dan aman
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Putri',
                location: 'Jakarta',
                rating: 5,
                comment: 'Pengiriman super cepat! Obat sampai dalam 45 menit. Sangat membantu saat darurat.',
                avatar: '👩‍⚕️'
              },
              {
                name: 'Ahmad Rahman',
                location: 'Surabaya',
                rating: 5,
                comment: 'Harga terjangkau dan obatnya asli. Sudah sering belanja di sini, recommended!',
                avatar: '👨‍💼'
              },
              {
                name: 'Maya Sari',
                location: 'Bandung',
                rating: 5,
                comment: 'Konsultasi apoteker sangat membantu. Dijelaskan cara minum obat dengan detail.',
                avatar: '👩‍🎓'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="gradient-primary text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Memulai?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Unduh aplikasi atau kunjungi website kami untuk memesan obat sekarang
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition">
              Unduh Aplikasi
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition">
              Kunjungi Website
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span>💊</span>
                </div>
                <h3 className="font-bold text-lg">Healthbazz</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Mitra apotek terpercaya Anda untuk pengiriman obat yang cepat dan andal.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Tautan Cepat</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition">Beranda</a></li>
                <li><a href="#" className="hover:text-primary transition">Kategori</a></li>
                <li><a href="#" className="hover:text-primary transition">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-primary transition">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition">Kebijakan Privasi</a></li>
                <li><a href="#" className="hover:text-primary transition">Syarat Layanan</a></li>
                <li><a href="#" className="hover:text-primary transition">Kebijakan Pengembalian</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>📧 support@healthbazz.com</li>
                <li>📞 1-800-HEALTH-1</li>
                <li>🕐 Tersedia 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Healthbazz. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
