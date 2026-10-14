"use client";

import React from "react";
import { LineArtProps, useDrawOnView } from "./common";

export const LeafSprig: React.FC<LineArtProps> = ({
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
      aria-label="Hand-drawn leaf sprig illustration"
    >
      <g
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-100"
      >
        <path
          d="M18 68 C24 55, 33 38, 56 16"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "80ms" }}
        />
        <path
          d="M56 16 C60 12, 65 11, 68 13 C67 17, 62 20, 56 16"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "150ms" }}
        />
        <path
          d="M48 24 C55 23, 62 26, 61 31 C56 33, 50 29, 48 24"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "220ms" }}
        />
        <path
          d="M43 30 C37 26, 30 27, 28 32 C33 35, 39 34, 43 30"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "280ms" }}
        />
        <path
          d="M38 39 C46 39, 52 44, 49 48 C43 49, 39 44, 38 39"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "340ms" }}
        />
        <path
          d="M32 44 C24 41, 18 43, 17 48 C22 51, 28 49, 32 44"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "400ms" }}
        />
        <path
          d="M26 53 C33 54, 38 60, 36 64 C31 64, 27 59, 26 53"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "460ms" }}
        />
      </g>
    </svg>
  );
};
