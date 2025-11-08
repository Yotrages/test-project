'use client';
import './globals.css';
import { useEffect } from 'react';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      console.log(`Page load time: ${pageLoadTime}ms`);
    }
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>FX Trading Platform - Advanced Forex Trading Dashboard</title>
        <meta name="title" content="FX Trading Platform - Advanced Forex Trading Dashboard" />
        <meta 
          name="description" 
          content="Professional forex trading platform with real-time market data, advanced charting tools, and comprehensive portfolio management. Trade with confidence." 
        />
        <meta name="keywords" content="forex trading, fx platform, trading dashboard, market analysis, portfolio management, real-time trading, forex charts" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="FX Trading Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#0B0B0B" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fxtrading-woad.vercel.app/" />
        <meta property="og:title" content="FX Trading Platform - Advanced Forex Trading Dashboard" />
        <meta 
          property="og:description" 
          content="Professional forex trading platform with real-time market data, advanced charting tools, and comprehensive portfolio management." 
        />
        <meta property="og:image" content="/assets/logo.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://fxtrading-woad.vercel.app/" />
        <meta property="twitter:title" content="FX Trading Platform - Advanced Forex Trading Dashboard" />
        <meta 
          property="twitter:description" 
          content="Professional forex trading platform with real-time market data, advanced charting tools, and comprehensive portfolio management." 
        />
        <meta property="twitter:image" content="/assets/logo.svg" />

        <link rel="icon" type="image/svg" sizes="32x32" href="/assets/logo.svg" />
        <link rel="icon" type="image/svg" sizes="16x16" href="/assets/logo.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/logo.svg" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'FX Trading Platform',
              description: 'Advanced forex trading platform with real-time market data and portfolio management',
              url: 'https://fxtrading-woad.vercel.app/',
              applicationCategory: 'FinanceApplication',
              operatingSystem: 'All',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
            }),
          }}
        />
      </head>
      <body className='w-full min-h-screen' suppressHydrationWarning>
        <noscript>
          <div style={{ padding: '20px', background: '#fff', color: '#000', textAlign: 'center' }}>
            Please enable JavaScript to use this application.
          </div>
        </noscript>
        <main className='w-full min-h-screen bg-black'>
          {children}
        </main>
      </body>
    </html>
  );
}