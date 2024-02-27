import React from "react";

function useIsDarkMode() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  const applyStyles = (darkMode) => {
    document.body.style.backgroundColor = darkMode ? "#1a1a1a" : "#FEFFEC";
    document.body.style.color = darkMode ? "#ffffff" : "#000000";
  };

  React.useEffect(() => {
    applyStyles(isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((previousMode) => !previousMode);
  };

  return [isDarkMode, toggleDarkMode];
}

export default useIsDarkMode;
