import { useEffect, useRef } from "react";

function useFocus(initialFocus = true) {
  const ref = useRef(null);

  useEffect(() => {
    if (initialFocus && ref.current) {
      ref.current.focus();
    }
  }, [initialFocus]);

  return ref;
}

export default useFocus;
