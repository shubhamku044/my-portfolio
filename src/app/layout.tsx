import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { RandomFavicon } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.shubhams.dev/'),
  title: 'Shubham Sharma | Full-Stack Developer',
  description:
    'Hello, I am Shubham Sharma, a full-stack developer with some knowledge of web3 also, a freelancer.',
  robots: 'index, follow',
  keywords: 'shubhamku044, shubham sharma, shubham kumar, shubham dev, shubhams, shubhams.dev',
  twitter: {
    site: '@shubhamku044',
    creator: '@shubhamku044',
    title: 'Shubham Sharma | Full-Stack Developer',
    description:
      'Hello, I am Shubham Sharma, a full-stack developer with some knowledge of web3 also, a freelancer.',
  },
  openGraph: {
    title: 'Shubham Sharma | Full-Stack Developer',
    description:
      'Hello, I am Shubham Sharma, a full-stack developer with some knowledge of web3 also, a freelancer.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <RandomFavicon />
      </head>
      <body
        className={`${inter.className} mx-auto min-h-screen max-w-2xl bg-amber-50 px-6 py-12 text-stone-800 antialiased sm:py-24`}
      >
        <Script id="gtm-script" strategy="lazyOnload">
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
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <main className="flex min-h-dvh flex-col space-y-10">{children}</main>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-HF2NQPTQ7W`}
        />
        <Analytics />
        <SpeedInsights />
        <Script id="ga-script" strategy="lazyOnload">
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