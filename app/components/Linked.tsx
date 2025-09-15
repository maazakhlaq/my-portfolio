'use client';
import { useEffect } from "react";

export default function LinkedIn() {
  useEffect(() => {
    if (!document.getElementById("linkedin-badge-script")) {
      const script = document.createElement("script");
      script.src = "https://platform.linkedin.com/badges/js/profile.js";
      script.id = "linkedin-badge-script";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="max-w-xs mx-auto p-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-indigo-400 dark:border-indigo-600">
      

      <div
        className="badge-base LI-profile-badge mx-auto"
        data-locale="en_US"
        data-size="medium"
        data-theme="dark"          
        data-type="VERTICAL"
        data-vanity="maaz-akhlaq355"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://www.linkedin.com/in/maaz-akhlaq355"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Maaz Akhlaq LinkedIn Profile"
        >
          Maaz Akhlaq
        </a>
      </div>
    </div>
  );
}
