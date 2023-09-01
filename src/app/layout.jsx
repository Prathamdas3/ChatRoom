import './assets/styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Chat Room',
  description: 'This is a chat room for strange people to talk to each other ',
  keywords: [
    'chat',
    'chat room',
    'facebook',
    'twitter',
    'chatting',
    'whatsapp',
    'talking',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
