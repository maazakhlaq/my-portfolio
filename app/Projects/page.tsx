"use client";

import { useState, useRef, useEffect, useMemo } from "react";

interface Project {
  id: string;
  name: string;
  desc: string;
}

export default function Projects() {
  // Memoize the projects array so it doesn’t re-create on every render
  const projects = useMemo<Project[]>(
    () => [
      {
        id: "medifusion",
        name: "Medifusion PMS/EHR",
        desc: `Developed and maintained core modules for a comprehensive Practice Management System (PMS) and Electronic Health Records (EHR) platform using React, Redux, and Axios.
Implemented dynamic patient demographics and encounter management to streamline workflows and improve data accuracy. Integrated secure JWT authentication to protect sensitive patient data.
Enhanced UI/UX with reusable components styled via Tailwind CSS, ensuring responsiveness across devices.
Automated data retrieval and updates to optimize performance and reduce latency.
Collaborated with healthcare professionals to tailor features meeting regulatory standards.
Used Redux for efficient state management of complex forms and real-time updates.
Ensured cross-browser compatibility and accessibility compliance.
Developed reporting tools for patient visit analytics.
Maintained API integrations with backend services to facilitate seamless data exchange.
Provided ongoing support and enhancements based on user feedback.`,
      },
      {
        id: "tlexy",
        name: "Tlexy - Telemedicine Platform",
        desc: `Architected a HIPAA-compliant telemedicine platform enabling secure, real-time video consultations using React, Redux, and Twilio SDK.
Integrated Twilio APIs to provide seamless video and audio streaming, as well as secure messaging features.
Designed an analytics dashboard with Chart.js to visualize patient engagement and consultation metrics.
Implemented role-based access control (RBAC) to manage permissions across doctors, patients, and admins.
Ensured platform stability with thorough cross-browser testing and debugging.
Applied best practices for security and privacy in healthcare applications.
Developed responsive UI components optimized for desktop and mobile.
Coordinated with backend teams to align APIs for smooth data flow.
Incorporated notification systems for appointment reminders.
Conducted user training and produced documentation for healthcare staff.`,
      },
      {
        id: "credentialing",
        name: "Credentialing Management System",
        desc: `Designed and implemented a full-stack credential management system utilizing React on the frontend and Node.js with Sequelize for backend and database handling.
Automated credential verification workflows with expiration date tracking and notification alerts to ensure timely renewals.
Integrated AWS S3 for secure and scalable document storage and retrieval.
Followed NCQA standards to support primary source verification and credential checks.
Enhanced reporting capabilities allowing advanced filtering and sorting for credential administrators.
Developed an intuitive user interface for managing complex credentialing data.
Improved system reliability through comprehensive testing and continuous integration.
Collaborated with compliance teams to meet regulatory requirements.
Optimized database queries to handle large volumes of credential data efficiently.
Maintained audit trails and logs for data security and compliance audits.`,
      },
      {
        id: "right-assist",
        name: "The Right Assist",
        desc: `Developed a transportation services application aimed at providing reliable medical transportation solutions using Next.js and TypeScript.
Converted the Next.js web application into a mobile app using Capacitor, enabling cross-platform access.
Built a scalable backend with Vue.js and Node.js and utilized Sequelize for relational database management.
Designed features ensuring patients get timely transportation to healthcare facilities.
Implemented user authentication and secure data handling.
Created responsive UI components tailored for both web and mobile devices.
Integrated real-time tracking and notifications for ride status updates.
Collaborated with transportation providers to streamline scheduling and dispatching.
Ensured compliance with healthcare and transportation regulations.
Provided comprehensive documentation and user support materials.`,
      },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState(projects[0].id);
  const [menuOpen, setMenuOpen] = useState(false);
  const refs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 160;
      let current = activeTab;
      for (const project of projects) {
        const ref = refs.current[project.id];
        if (ref && scrollPos >= ref.offsetTop) {
          current = project.id;
        }
      }
      if (current !== activeTab) setActiveTab(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeTab, projects]);

  const scrollToProject = (id: string) => {
    setActiveTab(id);
    setMenuOpen(false);
    refs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
          bg-gradient-to-r from-purple-600 via-indigo-500 to-red-600
          dark:from-purple-400 dark:via-indigo-300 dark:to-red-400
          
        "
      >
        Projects
      </h2>

      {/* Tabs & Dropdown */}
      <div
        className="
          sticky top-0 bg-white bg-opacity-90 backdrop-blur-sm
          dark:bg-gray-900 dark:bg-opacity-90 z-1
          border-b border-gray-300 dark:border-gray-700 mb-8
        "
      >
        {/* Desktop Tabs */}
        <nav
          aria-label="Project categories"
          className="hidden sm:flex space-x-3 overflow-x-auto py-3 px-2"
        >
          {projects.map(({ id, name }) => (
            <button
              key={id}
              onClick={() => scrollToProject(id)}
              className={`whitespace-nowrap px-4 py-2 rounded-md font-semibold text-base transition
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                ${
                  activeTab === id
                    ? "bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-700 text-white shadow-lg"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-500 hover:text-white"
                }
              `}
              aria-current={activeTab === id ? "true" : undefined}
              aria-controls={`${id}-project`}
              type="button"
            >
              {name}
            </button>
          ))}
        </nav>

        {/* Mobile Dropdown */}
        <div className="sm:hidden relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-haspopup="true"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="w-full flex justify-between items-center px-4 py-2 text-base font-semibold rounded-md
              bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300
              hover:bg-indigo-500 hover:text-white transition
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {projects.find((p) => p.id === activeTab)?.name || "Select Project"}
            <svg
              className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                menuOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {menuOpen && (
            <ul
              id="mobile-menu"
              role="menu"
              className="
                absolute left-0 right-0 mt-1
                bg-gradient-to-b from-indigo-700 via-purple-700 to-pink-700
                border border-indigo-600 rounded-lg shadow-xl max-h-64 overflow-auto
                divide-y divide-indigo-600
              "
            >
              {projects.map(({ id, name }) => (
                <li key={id} role="none" className="last:rounded-b-lg">
                  <button
                    role="menuitem"
                    onClick={() => scrollToProject(id)}
                    className={`flex items-center w-full text-left px-6 py-3 text-base font-semibold
                      transition-colors duration-300 rounded-none
                      ${
                        activeTab === id
                          ? "bg-gradient-to-r from-red-500 via-purple-600 to-indigo-600 text-white shadow-lg"
                          : "text-indigo-100 hover:bg-indigo-600 hover:text-white"
                      }
                      focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1 focus:ring-offset-indigo-900
                    `}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Project cards timeline */}
      <div className="relative border-l-4 border-indigo-600 dark:border-indigo-400">
        {projects.map(({ id, name, desc }) => (
          <article
            key={id}
            id={`${id}-project`}
            ref={(el) => {
              refs.current[id] = el;
            }}
            tabIndex={-1}
            className="
              mb-10 ml-6 sm:ml-8 pl-8 pb-8 relative rounded-xl shadow-xl
              hover:shadow-2xl transition-shadow duration-300 scroll-mt-24 whitespace-pre-wrap
              bg-gradient-to-r from-indigo-50 to-purple-100 dark:from-indigo-900 dark:to-purple-800
            "
            aria-label={name}
          >
            {/* Timeline dot */}
            <span className="
              absolute -left-6 top-8 w-5 h-5 rounded-full
              bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-600
              dark:from-pink-400 dark:via-purple-500 dark:to-indigo-500
              shadow-lg
            "></span>

            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-300">
                {name}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-indigo-900 dark:text-indigo-200 leading-relaxed whitespace-pre-line">
              {desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
