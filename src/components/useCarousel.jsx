import { useCallback, useEffect, useState } from "react";

export function useCarousel(length, initialIndex = 0) {
  const [activeIdx, setActiveIdx] = useState(initialIndex);

  const next = useCallback(() => {
    if (!length) return;
    setActiveIdx((prev) => (prev + 1) % length);
  }, [length]);

  const previous = useCallback(() => {
    if (!length) return;
    setActiveIdx((prev) => (prev - 1 + length) % length);
  }, [length]);

  const goTo = useCallback(
    (idx) => {
      if (idx < 0 || idx >= length) return;
      setActiveIdx(idx);
    },
    [length]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") previous();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, previous]);

  return { activeIdx, next, previous, goTo };
}
