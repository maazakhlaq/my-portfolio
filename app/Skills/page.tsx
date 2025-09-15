export default function Index() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "SQL",
    "JWT Authentication",
    "Tailwind CSS",
    "Bootstrap",
    "Redux",
    "Redux Toolkit",
    "Git",
    "SVN",
    "JIRA",
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
      >
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-700 text-white
              rounded-xl py-3 px-4 font-semibold text-center
              shadow-md
              transition-transform transform hover:scale-105
              cursor-default
              select-none
            "
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
