import { useEffect, useState } from "react";

const useIsDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  const applyStyles = (darkMode) => {
    document.body.style.backgroundColor = darkMode ? "#1a1a1a" : "#FEFFEC";
    document.body.style.color = darkMode ? "#ffffff" : "#000000";
  };

  useEffect(() => {
    applyStyles(isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((previousMode) => !previousMode);
  };

  return [isDarkMode, toggleDarkMode];
};
export default useIsDarkMode;
