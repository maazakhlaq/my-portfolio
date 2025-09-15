'use client'
import React, { useState } from "react";
import LinkedIn from "../components/Linked";

export default function Index() {
  const [view, setView] = useState(false);

  const commonLinkClasses = `
    flex items-center space-x-3
  bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-700 text-white shadow-lg
    rounded-xl py-3 px-4 font-semibold
    shadow-md
    transition-transform transform hover:scale-105
    cursor-pointer
    select-none
    w-full
    max-w-md
  `;

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
          text-center
        "
      >
        Get in Touch
      </h2>

      <p className="text-lg font-medium mb-12 max-w-full drop-shadow-md text-center">
        Interested in working together? Feel free to reach out! I’m always open to new projects, collaborations, or just a friendly chat.
      </p>

      <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 justify-center items-start">
        {/* LinkedIn Badge */}
        <div className="flex justify-center items-center md:w-auto">
          <LinkedIn />
        </div>

        {/* Contact info */}
        <div className="flex flex-col space-y-6 w-full max-w-md">
          {/* Email */}
          <a
            href="mailto:maaz.sardar355@gmail.com"
            className={commonLinkClasses}
            aria-label="Send email to maaz.sardar355@gmail.com"
          >
            {/* Email Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 flex-shrink-0 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12l-4-4-4 4m8 0l-4 4-4-4"
              />
            </svg>
            <span className="text-lg break-all">maaz.sardar355@gmail.com</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+966541824212"
            className={commonLinkClasses}
            aria-label="Call phone number +966 541824212"
          >
            {/* Phone Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 flex-shrink-0 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10a7 7 0 007 7h4a7 7 0 007-7v-1a7 7 0 00-7-7h-4a7 7 0 00-7 7v1z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 14l3 3 5-5" />
            </svg>
            <span className="text-lg">+966 541824212</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/maazakhlaq"
            target="_blank"
            rel="noopener noreferrer"
            className={commonLinkClasses}
            aria-label="Visit GitHub profile maazakhlaq"
          >
            {/* GitHub Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 flex-shrink-0 text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.62 0-12 5.38-12 12 0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.06 1.82 2.8 1.3 3.48.99.11-.77.41-1.3.74-1.6-2.67-.3-5.47-1.33-5.47-5.91 0-1.3.46-2.37 1.22-3.21-.12-.3-.53-1.51.12-3.15 0 0 .99-.32 3.24 1.22a11.3 11.3 0 012.95-.4 11.3 11.3 0 012.95.4c2.24-1.54 3.23-1.22 3.23-1.22.65 1.64.24 2.85.12 3.15.76.84 1.22 1.91 1.22 3.21 0 4.59-2.8 5.61-5.48 5.9.42.36.79 1.1.79 2.22v3.3c0 .32.22.7.83.58a12.04 12.04 0 008.21-11.4c0-6.62-5.38-12-12-12z" />
            </svg>
            <span className="text-lg break-all">maazakhlaq</span>
          </a>

          {/* Buttons Container */}
          <div className="flex space-x-4 mt-4">
            {/* View Resume button */}
            <button
              onClick={() => setView(()=>!view)}
              className={`${commonLinkClasses} justify-center`}
              aria-label="View Resume"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 flex-shrink-0 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-lg">View Resume</span>
            </button>

            {/* Download Resume button */}
            <a
              href="/Maaz Akhlaq.pdf"
              download
              className={`${commonLinkClasses} justify-center`}
              aria-label="Download Resume"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 flex-shrink-0 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span className="text-lg">Download Resume</span>
            </a>
          </div>
        </div>
      </div>

      {/* Conditional PDF Viewer */}
      {view && (
        <div className="mt-16 h-full flex justify-center w-full max-w-4xl mx-auto">
          <iframe
            src="/Maaz Akhlaq.pdf"
            title="Resume PDF"
            width="100%"
            height="700px"
            className="rounded-lg shadow-lg border border-indigo-400"
            allowFullScreen
          />
        </div>
      )}
    </section>
  );
}
