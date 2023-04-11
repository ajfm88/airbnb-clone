import { Nunito } from 'next/font/google';

import './globals.css';
import Navbar from './components/navbar/Navbar';

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
