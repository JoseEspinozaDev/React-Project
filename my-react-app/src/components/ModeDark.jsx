import React, { useState, useEffect } from "react";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    document.body.classList.toggle("bg-black", isDarkMode);
    document.body.classList.toggle("text-white", isDarkMode);
    document.body.classList.toggle("text-dark", !isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="p-4">
      <h1>My App</h1>
      <button
        onClick={toggleTheme}
        className="mt-2 px-4 py-2 rounded bg-gray-200 dark:bg-gray-800"
      >
        Toggle {isDarkMode ? "Light" : "Dark"} Mode
      </button>
      <p>This is some content that will adapt to the theme.</p>
    </div>
  );
}

export default DarkModeToggle;
