import { useState, useEffect, useRef } from "react";

function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const hoverRef = useRef(null);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  useEffect(() => {
    const ref = hoverRef.current;
    if (ref) {
      ref.addEventListener("mouseenter", handleMouseOver);
      ref.addEventListener("mouseleave", handleMouseOut);

      return () => {
        ref.removeEventListener("mouseenter", handleMouseOver);
        ref.removeEventListener("mouseleave", handleMouseOut);
      };
    }
  }, []);

  return [hoverRef, isHovered];
}

export default useHover;
