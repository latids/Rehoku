import React from "react";

function useToggle(initialState = false) {
  const [value, setValue] = React.useState(initialState);

  const toggle = () => {
    setValue((prevValue) => !prevValue);
  };

  return [value, toggle];
};

export default useToggle;
