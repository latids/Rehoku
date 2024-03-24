import React from "react";

function usePrevious(value) {
  const currRef = React.useRef(value);
  const prevRef = React.useRef();
  if (currRef.current !== value) {
    prevRef.current = currRef.current;
    currRef.current = value;
  }

  return prevRef.current;
};

export default usePrevious;
