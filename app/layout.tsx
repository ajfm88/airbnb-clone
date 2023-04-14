import { Nunito } from 'next/font/google';

import './globals.css';
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import Modal from './components/modals/Modal';

export const metadata = {
  title: 'Airbnb Clone',
  description:
    '🏠 An Airbnb rental app replica created by ajfm88 using Next.js, TypeScript, TailwindCSS, and MongoDB. 🏢',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <Modal title='Hello World' isOpen />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
