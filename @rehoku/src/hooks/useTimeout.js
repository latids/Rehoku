import React from "react";

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

function useTimeout(callback, delay = 1000, renderCount = 0) {
  const savedCallback = React.useRef();

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    const validParams = validateParams(callback, delay, renderCount);

    if (!validParams) {
      return;
    }

    if (renderCount > 0) {
      const id = setTimeout(() => {
        savedCallback.current();
      }, delay);

      return () => clearTimeout(id);
    } else {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);

      return () => clearInterval(id);
    }
  }, [callback, delay, renderCount]);
}

export default useTimeout;
