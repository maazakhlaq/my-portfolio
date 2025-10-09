// app/layout.tsx
import type { Metadata } from 'next';
import Sidebar from './components/Sidebar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Maaz Akhlaq | Full-Stack Developer',
  description:
    'Portfolio of Maaz Akhlaq – Software Engineer & Frontend Developer skilled in React.js, Next.js, TypeScript, Node.js, and Tailwind CSS.',
  keywords: [
    'Maaz Akhlaq',
    'Full Stack Developer',
    'Frontend Developer',
    'React.js',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Tailwind CSS',
    'JavaScript',
    'Riyadh',
    'Portfolio',
  ],

  openGraph: {
    title: 'Maaz Akhlaq | Full-Stack Developer',
    description:
      'Software Engineer | Frontend Developer skilled in React.js, Next.js, TypeScript, Node.js, and Tailwind CSS. Explore my portfolio!',
    url: 'https://68c7f26ab36c3af68a64d592--adorable-cendol-594948.netlify.app',
    siteName: 'Maaz Akhlaq Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: "maazimg.jpg",
        width: 1200,
        height: 630,
        alt: 'Maaz Akhlaq | Full-Stack Developer Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Maaz Akhlaq | Full-Stack Developer',
    description:
      'Software Engineer | Frontend Developer skilled in React.js, Next.js, TypeScript, Node.js, and Tailwind CSS.',
    images: [
      'https://68c7f26ab36c3af68a64d592--adorable-cendol-594948.netlify.app/og-image.jpg',
    ],
  },
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
