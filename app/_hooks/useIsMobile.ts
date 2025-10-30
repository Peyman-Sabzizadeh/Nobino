"use client";

import { useEffect, useState } from "react";

export default function useIsMobile() {
  const [matches, setMatches] = useState<boolean>(false);
  const query = "(max-width: 768px)";
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}
