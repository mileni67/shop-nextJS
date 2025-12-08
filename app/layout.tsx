import './scss/style.scss'
import localFont from 'next/font/local'
import Header from './ui/header';
import Cart from './ui/cart';
import CartProvider from './providers/CartProvider';
import { Suspense } from "react";

const GTEestiProText = localFont({
  src: [
    {
      path: './fonts/EestiRegular.otf',
      weight: '500'
    },
    {
      path: './fonts/EestiBold.otf',
      weight: '700'
    }
  ]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </head>

      <body className={GTEestiProText.className}>
        <CartProvider>
          <Suspense>
            <Header />

            <main>
              {children}
            </main>

            <Cart />
          </Suspense>
        </CartProvider>
      </body>
    </html>
  );
}
