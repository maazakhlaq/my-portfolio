// app/layout.tsx
import type { Metadata } from 'next';
import Sidebar from './components/Sidebar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Maaz Akhlaq | Full-Stack Developer',
  description: 'Portfolio of Maaz Akhlaq – Full Stack Developer specializing in React & Next.js.',
  keywords: ['Maaz Akhlaq', 'Full Stack Developer', 'React', 'Next.js'],
  openGraph: {
    title: 'Maaz Akhlaq | Full-Stack Developer',
    description: 'Portfolio of Maaz Akhlaq – Full Stack Developer specializing in React & Next.js.',
    url: 'https://68c7f26ab36c3af68a64d592--adorable-cendol-594948.netlify.app',
    siteName: 'Maaz Akhlaq',
    locale: 'en_US',
    type: 'website',
  }
  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <main className="flex min-h-screen" role="main">
          <nav aria-label="Primary navigation" className="sticky top-0 md:w-64 flex-shrink-0 z-10 h-screen">
            <Sidebar />
          </nav>
          <section className="flex-1 p-4 md:p-6">{children}</section>
        </main>
      </body>
    </html>
  );
}
