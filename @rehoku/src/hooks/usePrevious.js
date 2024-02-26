import { useRef } from "react";

const usePrevious = (value) => {
  const currRef = useRef(value);
  const prevRef = useRef();
  if (currRef.current !== value) {
    prevRef.current = currRef.current;
    currRef.current = value;
  }

  return prevRef.current;
};
export default usePrevious;
