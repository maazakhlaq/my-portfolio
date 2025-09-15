import Sidebar from './components/Sidebar';
import './globals.css';
import type { Metadata } from 'next';

// Example metadata; update accordingly
export const metadata: Metadata = {
  title: 'Your Site Title',
  description: 'A brief description of your website for SEO purposes.',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  openGraph: {
    title: 'Your Site Title',
    description: 'A brief description of your website for SEO purposes.',
    url: 'https://yourwebsite.com',
    siteName: 'Your Site Name',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Site Title',
    description: 'A brief description of your website for SEO purposes.',
    site: '@yourtwitterhandle',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Title and description are also set via metadata export */}
      </head>
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <main className="flex min-h-screen" role="main">
          {/* Sticky Sidebar container */}
          <nav aria-label="Primary navigation" className="sticky top-0 z-1  h-screen">
            <Sidebar />
          </nav>

          <section className="flex-1 p-1 ">{children}</section>
        </main>
      </body>
    </html>
  );
}
