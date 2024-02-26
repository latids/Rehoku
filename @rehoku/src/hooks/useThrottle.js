import { useRef } from "react";

const useThrottle = (callback, delay) => {
  const timeoutRef = useRef(null);
  const lastExecuted = useRef(0);

  return (...args) => {
    const now = Date.now();
    const elapsedTime = now - lastExecuted.current;

    if (!timeoutRef.current) {
      if (elapsedTime >= delay) {
        callback(...args);
        lastExecuted.current = now;
      } else {
        timeoutRef.current = setTimeout(() => {
          callback(...args);
          lastExecuted.current = Date.now();
          timeoutRef.current = null;
        }, delay - elapsedTime);
      }
    }
  };
};
export default useThrottle;
