import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Suiyubliss - Fragrance Inspired by Beauty',
  description: 'Discover feminine and bold fragrances crafted with love at Suiyubliss.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${poppins.className} text-gray-900 min-h-screen`}
        style={{
          background: 'linear-gradient(135deg, #fff7f9 0%, #ffeef5 100%)',
          overflowX: 'hidden',
        }}
      >
        <main>{children}</main>
        <footer className="bg-gradient-to-br from-pink-100 to-rose-100 py-12 px-6 text-center text-gray-700">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-pink-600 mb-4">Suiyubliss</h3>
            <p className="mb-6 text-lg">Fragrance inspired by beauty, crafted with love.</p>
            <div className="flex justify-center space-x-8 text-pink-600 text-2xl mb-6">
              <a href="#" className="hover:scale-125 transition-transform">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:scale-125 transition-transform">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" className="hover:scale-125 transition-transform">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
            <p className="text-sm">© 2025 Suiyubliss. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}