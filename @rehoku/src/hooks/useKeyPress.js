import React from "react";

function useKeyPress(targetKey) {
  const [isKeyPressed, setIsKeyPressed] = React.useState(false);

  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.key === targetKey) {
        setIsKeyPressed(true);
      }
    },
    [targetKey]
  );

  const handleKeyUp = React.useCallback(
    (event) => {
      if (event.key === targetKey) {
        setIsKeyPressed(false);
      }
    },
    [targetKey]
  );

  React.useEffect(() => {
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
