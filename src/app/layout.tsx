'use client';

import './globals.css';
import { Bebas_Neue, Roboto } from 'next/font/google';

import Header from './templates/header/header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue', // Define la variable
});

export const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto', // Define la variable
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={roboto.className}>
      <head lang="es" className={roboto.className} />
      <body className="flex flex-col min-h-screen antialiased">
        <main className="bg-white flex-grow">
          <Header />
          {children}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <div />
        </main>
      </body>
    </html>
  );
}
