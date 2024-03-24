import { useEffect } from "react";

function useDidMount(callback) {
  useEffect(() => {
    if (typeof callback === "function") {
      callback();
    }
  }, [callback]);
}

export default useDidMount;
