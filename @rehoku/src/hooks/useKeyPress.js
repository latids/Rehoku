import { useState, useEffect, useCallback } from "react";

const useKeyPress = (targetKey) => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === targetKey) {
        setIsKeyPressed(true);
      }
    },
    [targetKey]
  );

  const handleKeyUp = useCallback(
    (event) => {
      if (event.key === targetKey) {
        setIsKeyPressed(false);
      }
    },
    [targetKey]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return isKeyPressed;
};
export default useKeyPress;
