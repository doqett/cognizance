import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import { meta } from '@/assets/data/constants';

import { ThemeProvider } from '@/context/theme-provider';
import { Footer, Header } from '@/components/navigation';
import { Suspense } from 'react';
import { GoogleTagManager } from '@/components/common/gtag';

const inter = Source_Sans_3({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});
export const viewport: Viewport = {
  themeColor: meta.themeColor,
};

export const metadata: Metadata = {
  metadataBase: new URL(meta.URL),
  title: {
    default: meta.siteName,
    template: `%s | ${meta.siteName}`,
  },
  description: meta.description,
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/icon-light.svg',
        href: '/images/icon-light.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/icon-dark.svg',
        href: '/images/icon-dark.svg',
      },
    ],
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.URL,
    siteName: meta.siteName,
    images: [
      {
        url: meta.og.ogImage,
        width: meta.og.width,
        height: meta.og.height,
      },
    ],
    locale: meta.og.locale,
    type: meta.og.type,
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} grid min-h-full grid-rows-[auto_1fr_auto] antialiased transition-colors`}
      >
        <Suspense>
          <GoogleTagManager />
        </Suspense>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-full w-screen bg-background text-foreground">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
