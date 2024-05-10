import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer, Navbar } from '@/components';
import Head from 'next/head';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.shubhams.dev/'),
  title: 'Shubham Sharma | Full-Stack Developer',
  description: 'Hello, I am Shubham Sharma, a full-stack developer with some knowledge of web3 also, a freelancer.',
  robots: 'index, follow',
  keywords: 'shubhamku044, shubham sharma, shubham kumar, shubham dev, shubhams, shubhams.dev',
  twitter: {
    site: '@shubhamku044',
    creator: '@shubhamku044',
    title: 'Shubham Sharma | Full-Stack Developer',
    description: 'Hello, I am Shubham Sharma, a full-stack developer with some knowledge of web3 also, a freelancer.',
  },
  openGraph: {
    title: 'Shubham Sharma | Full-Stack Developer',
    description: 'Hello, I am Shubham Sharma, a full-stack developer with some knowledge of web3 also, a freelancer.',
    type: 'website',
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className={inter.className}>
        <Script
          id="gtm-script"
          strategy="lazyOnload">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NK63G2QV');
        `}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NK63G2QV"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}>
          </iframe>
        </noscript>
        <div className="p-4">
          <Navbar />
          <main className="mx-auto mb-16 mt-24 min-h-[90vh] max-w-4xl px-2 sm:px-10">
            {children}
          </main>
          <Footer />
        </div>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-HF2NQPTQ7W`}
        />
        <Script
          id="ga-script"
          strategy="lazyOnload">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HF2NQPTQ7W');
          `}
        </Script>
      </body>
    </html>
  );
}
