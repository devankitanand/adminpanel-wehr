import './globals.css';
import Head from 'next/head';

export const metadata = {
  title: 'My Next.js PWA',
  description: 'A simple Next.js Progressive Web App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
