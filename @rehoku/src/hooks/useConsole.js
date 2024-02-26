import { useEffect, useRef } from "react";

const useConsole = (data, consoleMethod = "log") => {
  const prevData = useRef(data);

  useEffect(() => {
    if (prevData.current !== data) {
      switch (consoleMethod) {
        case "error":
          console.error(data);
          break;
        case "warn":
          console.warn(data);
          break;

        default:
          console.log(data);
      }
      prevData.current = data;
    }
  }, [data, consoleMethod]);
};
export default useConsole;
