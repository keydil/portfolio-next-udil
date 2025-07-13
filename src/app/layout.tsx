import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fadhil Firdaus Adha - Portfolio',
  description: 'Portfolio website mahasiswa D3 Teknik Informatika',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
          {children}
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      </body>
    </html>
  );
}
