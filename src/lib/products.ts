export type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice: number | null;
  label: string | null;
  img: string;
  description: string;
  category: string;
  stock: number;
  weight: string;
  brand: string;
  rating: number;
  sold: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Enervon-C Multivitamin',
    price: 45000,
    originalPrice: 50000,
    label: 'Terlaris',
    img: '/images/product-1.png',
    description: 'Enervon-C mengandung Vitamin C 500mg dan Vitamin B Kompleks yang membantu menjaga daya tahan tubuh, mengurangi rasa lelah, dan mendukung metabolisme energi sehari-hari. Cocok untuk orang dewasa aktif yang membutuhkan asupan vitamin harian yang lengkap.',
    category: 'Vitamin & Suplemen',
    stock: 150,
    weight: '60 Tablet',
    brand: 'Enervon',
    rating: 4.8,
    sold: 12400,
  },
  {
    id: 2,
    name: 'Panadol Paracetamol 500mg',
    price: 12500,
    originalPrice: null,
    label: null,
    img: '/images/product-2.png',
    description: 'Panadol mengandung Paracetamol 500mg yang efektif meredakan demam, sakit kepala, nyeri otot, nyeri sendi, dan nyeri ringan hingga sedang lainnya. Aman untuk lambung dan mudah diserap tubuh.',
    category: 'Obat Bebas',
    stock: 300,
    weight: '10 Tablet',
    brand: 'Haleon',
    rating: 4.9,
    sold: 54200,
  },
  {
    id: 3,
    name: 'Betadine Antiseptik 15ml',
    price: 18000,
    originalPrice: null,
    label: null,
    img: '/images/product-3.png',
    description: 'Betadine antiseptik mengandung Povidone Iodine 10% yang efektif membantu membersihkan dan mencegah infeksi pada luka, lecet, dan luka bakar ringan. Tersedia dalam ukuran praktis 15ml yang mudah dibawa ke mana saja.',
    category: 'P3K & Antiseptik',
    stock: 80,
    weight: '15 ml',
    brand: 'Mundipharma',
    rating: 4.7,
    sold: 8900,
  },
  {
    id: 4,
    name: 'Herbal Supplement 12 Sachet',
    price: 38000,
    originalPrice: 42000,
    label: 'Diskon 10%',
    img: '/images/product-1.png',
    description: 'Suplemen herbal dalam kemasan sachet praktis yang mengandung ekstrak jahe, kunyit, dan temulawak. Membantu menjaga kebugaran tubuh, meningkatkan nafsu makan, dan melancarkan pencernaan secara alami.',
    category: 'Herbal & Tradisional',
    stock: 55,
    weight: '12 Sachet',
    brand: 'Sido Muncul',
    rating: 4.6,
    sold: 3200,
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatPrice(price: number): string {
  return 'Rp ' + price.toLocaleString('id-ID');
}
