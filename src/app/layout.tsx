import './globals.css'

export const metadata = {
  title: 'Healthbazz - Apotek & Pengiriman Obat Online',
  description: 'Pesan obat online dengan pengiriman cepat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
