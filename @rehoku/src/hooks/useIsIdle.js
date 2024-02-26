import { useState, useEffect } from "react";

const useIsIdle = (timeout = 150000) => {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let idleTimer;

    const resetIdleTimer = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => setIsIdle(true), timeout);
    };

    const handleUserActivity = () => {
      setIsIdle(false);
      resetIdleTimer();
    };

    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keydown", handleUserActivity);
    resetIdleTimer();

    return () => {
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
      clearTimeout(idleTimer);
    };
  }, [timeout]);

  return isIdle;
};
export default useIsIdle;
