import { useState, useCallback } from "react";

function useDeepCopy(initialObject) {
  const [copiedObject, setCopiedObject] = useState(initialObject);

  const deepCopy = useCallback((objectToCopy) => {
    return JSON.parse(JSON.stringify(objectToCopy));
  }, []);

  const copyObject = useCallback(() => {
    const newCopiedObject = deepCopy(initialObject);
    setCopiedObject(newCopiedObject);
  }, [deepCopy, initialObject]);

  return { copiedObject, copyObject };
}

export default useDeepCopy;
