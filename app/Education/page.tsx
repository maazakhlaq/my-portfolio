export default function Index() {
  return (
    <section
      id="skills"
      className="
          mx-auto py-16 px-6
        bg-gradient-to-r from-indigo-50 via-purple-100 to-pink-100
        dark:from-indigo-900 dark:via-purple-800 dark:to-pink-900
        rounded-2xl shadow-xl border-2 border-indigo-600
        transition-colors duration-500
      "
    >
      <h2
        className="
          text-3xl font-extrabold mb-10
          border-b-4 border-indigo-600 pb-3
          bg-clip-text text-transparent
          bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-600
          dark:from-purple-400 dark:via-indigo-300 dark:to-pink-400
          
        "
      >
        Education
      </h2>

      <article className="relative bg-gradient-to-r from-indigo-50 to-purple-100 dark:from-indigo-900 dark:to-purple-800 p-8 rounded-xl shadow-xl max-w-3xl mx-auto border border-indigo-300 dark:border-indigo-600">
        {/* Timeline Dot */}
        
        

        <h3 className="text-2xl font-semibold text-indigo-900 dark:text-indigo-300 mb-2">
          Bachelor of Science in Information Technology
        </h3>
        <p className="text-indigo-800 dark:text-indigo-200 font-medium mb-1">
          Arid Agriculture University, Rawalpindi, Pakistan
        </p>
        <p className="text-indigo-700 dark:text-indigo-400 italic font-semibold">
          2018 – 2022
        </p>
      </article>
    </section>
  );
}
