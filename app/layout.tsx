// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Suiyubliss',
  description: 'Fragrance inspired by beauty, crafted with love.',
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
        className={inter.className}
        style={{
          fontFamily: "'Poppins', sans-serif",
          background: 'linear-gradient(135deg, #fff7f9 0%, #ffeef5 100%)',
          overflowX: 'hidden',
          color: '#111827', // Tailwind gray-900
        }}
      >
        {children}
      </body>
    </html>
  );
}
