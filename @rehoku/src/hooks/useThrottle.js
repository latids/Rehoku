import React from "react";

function useThrottle(callback, delay) {
  const timeoutRef = React.useRef(null);
  const lastExecuted = React.useRef(0);

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
}

export default useThrottle;
