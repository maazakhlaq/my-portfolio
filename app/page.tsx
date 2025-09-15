 import About from "./About/page";
  
export const metadata = {
  title: "About Maaz Akhlaq – Front-end Developer | React & Next.js",
  description:
    "Portfolio of Maaz Akhlaq, a Front-end Developer based in Riyadh, Saudi Arabia. Skilled in React.js, Next.js, Tailwind CSS, and creating responsive, SEO-optimized websites.",
  keywords: [
    "Maaz Akhlaq",
    "Front-end Developer Riyadh",
    "Next.js Developer",
    "React.js Portfolio",
    "Tailwind CSS",
    "SEO Optimized Web Development",
  ],
};

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      
        {/* Add About or Contact or other sections here */}
        <About />
       
    </main>
  );
}
