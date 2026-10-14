"use client";

import { useEffect, useRef, useState } from "react";

export interface LineArtProps {
  className?: string;
  draw?: boolean;
  strokeColor?: string;
  strokeWidth?: number;
}

export function useDrawOnView(enabled: boolean = true) {
  const ref = useRef<SVGSVGElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!enabled || hasAnimated || typeof window === "undefined") {
      setHasAnimated(true);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHasAnimated(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [enabled, hasAnimated]);

  return { ref, hasAnimated };
}
