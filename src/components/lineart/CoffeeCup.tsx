"use client";

import React from "react";
import { LineArtProps, useDrawOnView } from "./common";

export const CoffeeCup: React.FC<LineArtProps> = ({
  className = "w-16 h-16 text-current",
  draw = true,
  strokeWidth = 1.25,
}) => {
  const { ref, hasAnimated } = useDrawOnView(draw);

  return (
    <svg
      ref={ref}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} overflow-visible`}
      role="img"
      aria-label="Hand-drawn coffee cup illustration"
    >
      <g
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-100"
      >
        <path
          d="M20 40 C20 37, 56 37, 56 40 C56 43, 20 43, 20 40 Z"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "80ms" }}
        />
        <path
          d="M22 41 C23 54, 30 63, 38 63 C46 63, 53 54, 54 41"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "150ms" }}
        />
        <path
          d="M32 63.5 L44 63.5"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "200ms" }}
        />
        <path
          d="M14 66 C22 69, 54 69, 62 66"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "250ms" }}
        />
        <path
          d="M54 44 C61 44, 65 48, 64 54 C63 58, 57 58, 51 57"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "300ms" }}
        />
        <path
          d="M31 32 C30 27, 34 23, 32 18"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "360ms" }}
        />
        <path
          d="M39 31 C38 25, 43 21, 41 15"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "400ms" }}
        />
        <path
          d="M47 33 C46 29, 49 26, 48 21"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "440ms" }}
        />
      </g>
    </svg>
  );
};
