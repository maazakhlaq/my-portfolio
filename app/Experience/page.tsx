export default function Index() {
  const jobs = [
    {
      title: "Front-end Developer",
      company: "BellMedEx",
      period: "Aug 2022 – Feb 2025",
      details: [
        "Developed scalable and efficient applications using React.js and Redux.",
        "Implemented JWT authentication for secure user access.",
        "Enhanced UI components to optimize user experience.",
        "Collaborated with backend developers to integrate RESTful APIs.",
      ],
    },
    {
      title: "Cloud Application Developer",
      company: "Systems Limited",
      period: "Jan 2021 – Jul 2022",
      details: [
        "Built mobile-responsive components using React Native.",
        "Implemented state management using Redux.",
        "Debugged complex issues to improve application stability.",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="
          mx-auto py-16 px-6
        bg-gradient-to-r from-indigo-50 via-purple-100 to-gray-100
        dark:from-indigo-900 dark:via-purple-800 dark:to-gray-900
        rounded-2xl shadow-xl border-2 border-indigo-600
        transition-colors duration-500
      "
    >
      <h2
        className="
          text-3xl font-extrabold mb-10
          border-b-4 border-indigo-600 pb-3
          bg-clip-text text-transparent
          bg-gradient-to-r from-purple-600 via-indigo-500 to-gray-600
          dark:from-purple-400 dark:via-indigo-300 dark:to-gray-400
          
        "
      >Experience
      </h2>

      <div className="relative border-l-4 border-indigo-600">
        {jobs.map((job, i) => (
          <div
            key={i}
            className="mb-10 ml-6 sm:ml-8 pl-8 pb-8 relative rounded-xl shadow-xl
              hover:shadow-2xl transition-shadow duration-300 scroll-mt-24 whitespace-pre-wrap
              bg-gradient-to-r from-indigo-50 to-purple-100 dark:from-indigo-900 dark:to-purple-800
            "
          >
            {/* Timeline dot */}
            <span className="absolute -left-5 top-6 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400 shadow-lg"></span>

            <div className="flex justify-between items-center p-1 mb-3">
              <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400">
                {job.title}
              </h3>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {job.period}
              </span>
            </div>

            <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
              {job.company}
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
              {job.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
