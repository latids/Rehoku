import { useCallback } from "react";

function usePrint() {
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  return handlePrint;
}

export default usePrint;
