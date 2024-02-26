import { useEffect, useRef } from "react";

const validateParams = (callback, delay, renderCount) => {
  if (typeof callback !== "function") {
    console.error("useTimeout: Callback must be a function.");
    return false;
  }

  if (typeof delay !== "number" || delay < 0) {
    console.error("useTimeout: Delay must be a positive number.");
    return false;
  }

  if (typeof renderCount !== "number" || renderCount < 0) {
    console.error(
      "useTimeout: Render count must be a positive number, by default its 0."
    );
    return false;
  }

  return true;
};

const useTimeout = (callback, delay = 1000, renderCount = 0) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const validParams = validateParams(callback, delay, renderCount);

    if (!validParams) {
      return;
    }

    if (renderCount > 0) {
      const id = setTimeout(() => {
        savedCallback.current();
      }, delay);

      return () => clearTimeout(id);
    }
  }, [callback, delay, renderCount]);

  useEffect(() => {
    renderCount++;
  });

  return renderCount;
};

export default useTimeout;
