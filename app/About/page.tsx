import Image from "next/image";

export default function Home() {
  return (
    <div
      className="
        min-h-screen 
        max-w-6xl mx-auto 
        py-10 px-6
        bg-gradient-to-r from-indigo-50 via-purple-100 to-green-100
        dark:from-indigo-900 dark:via-purple-800 dark:to-green-900
        rounded-2xl shadow-xl border-2 border-indigo-600
        transition-colors duration-500
      "
    >
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center md:justify-between">
        
        {/* Photo */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
          <Image
            src="/maazimg.jpg" // Put your image in /public
            alt="Maaz Akhlaq"
            width={250}
            height={250}
            className="rounded-full border-4 border-indigo-600 shadow-lg"
          />
        </div>

        {/* Intro */}
        <div className="text-center md:text-left">
          <h1
            className="
              text-4xl md:text-6xl font-extrabold mb-4 
              bg-clip-text text-transparent 
              bg-gradient-to-r from-purple-600 via-indigo-500 to-green-600
              dark:from-purple-300 dark:via-indigo-200 dark:to-green-300
            "
          >
            Maaz Akhlaq
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-lg">
            Full Stack Developer | React & Next.js Expert
          </p>
          <a
            href="/resume.pdf" // Put resume.pdf in /public
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6 py-3 
              bg-gradient-to-r from-indigo-500 to-purple-600 
              hover:from-indigo-600 hover:to-purple-700
              text-white rounded-lg shadow-lg 
              transition duration-300
              inline-block
            "
          >
            📄 Download Resume
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="mt-16">
        <h2
          className="
            text-3xl font-extrabold text-center mb-10
            bg-clip-text text-transparent 
            bg-gradient-to-r from-purple-600 via-indigo-500 to- green-600
            dark:from-purple-300 dark:via-indigo-200 dark:to- green-300
          "
        >
          My Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div
            className="
              p-6 
              bg-gradient-to-r from-indigo-100 via-purple-100 to- green-100
              dark:from-indigo-800 dark:via-purple-800 dark:to- green-800
              rounded-xl shadow-lg hover:shadow-2xl transition
            "
          >
            <h3 className="text-xl font-semibold mb-2 text-indigo-900 dark:text-white">
              Web Development
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Building modern, responsive, and high-performance websites.
            </p>
          </div>
          <div
            className="
              p-6 
              bg-gradient-to-r from-indigo-100 via-purple-100 to- green-100
              dark:from-indigo-800 dark:via-purple-800 dark:to- green-800
              rounded-xl shadow-lg hover:shadow-2xl transition
            "
          >
            <h3 className="text-xl font-semibold mb-2 text-indigo-900 dark:text-white">
              UI/UX Design
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Creating visually appealing and user-friendly designs.
            </p>
          </div>
          <div
            className="
              p-6 
              bg-gradient-to-r from-indigo-100 via-purple-100 to- green-100
              dark:from-indigo-800 dark:via-purple-800 dark:to- green-800
              rounded-xl shadow-lg hover:shadow-2xl transition
            "
          >
            <h3 className="text-xl font-semibold mb-2 text-indigo-900 dark:text-white">
              SEO Optimization
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Improving your website's visibility on search engines.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
