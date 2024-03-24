import { useEffect } from "react";

function useScrollLock(isLocked) {
  useEffect(() => {
    const handleScroll = (e) => {
      if (isLocked) {
        e.preventDefault();
      }
    };

    if (isLocked) {
      document.body.style.overflow = "hidden";
      document.addEventListener("scroll", handleScroll, { passive: false });
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("scroll", handleScroll);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isLocked]);
}

export default useScrollLock;
