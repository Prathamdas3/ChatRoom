import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { ApiProvider } from '@/context/DataContext';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chatostore',
  description:
    'An website for storing data and creating rooms for small talks with friends or others',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <ApiProvider>
          <Navbar />
          {children}
        </ApiProvider>
      </body>
    </html>
  );
}
