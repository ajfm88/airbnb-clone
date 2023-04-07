import { Nunito } from 'next/font/google';

import './globals.css';

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
      <body className={font.className}>{children}</body>
    </html>
  );
}
