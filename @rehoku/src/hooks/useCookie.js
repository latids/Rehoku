import React from "react";

function useCookie(cookieName) {
  function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = React.useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.error("Error retrieving data from localStorage:", error);
        return initialValue;
      }
    });

    React.useEffect(() => {
      try {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      } catch (error) {
        console.error("Error storing data in localStorage:", error);
      }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
  }

  const [cookie, setCookie] = useLocalStorage(cookieName, null);

  function updateCookie(value) {
    setCookie(value);
  }

  function deleteCookie() {
    setCookie(null);
  }

  return { cookie, updateCookie, deleteCookie };
}

export default useCookie;
