"use client";

import React from "react";
import { LineArtProps, useDrawOnView } from "./common";

export const Branch: React.FC<LineArtProps> = ({
  className = "w-20 h-14 text-current",
  draw = true,
  strokeWidth = 1.25,
}) => {
  const { ref, hasAnimated } = useDrawOnView(draw);

  return (
    <svg
      ref={ref}
      viewBox="0 0 100 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} overflow-visible`}
      role="img"
      aria-label="Hand-drawn branch illustration"
    >
      <g
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-100"
      >
        <path
          d="M8 44 C28 42, 50 36, 75 22 C84 17, 91 12, 94 9"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "80ms" }}
        />
        <path
          d="M94 9 C96 6, 99 7, 97 11 C93 12, 91 10, 94 9"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "140ms" }}
        />
        <path
          d="M36 40 C38 31, 44 26, 50 24"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "200ms" }}
        />
        <path
          d="M50 24 C54 21, 57 23, 56 26 C53 28, 48 27, 50 24"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "240ms" }}
        />
        <path
          d="M58 32 C65 26, 71 27, 72 31 C67 35, 62 34, 58 32"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "300ms" }}
        />
        <path
          d="M48 37 C49 45, 45 51, 40 50 C38 46, 42 40, 48 37"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "340ms" }}
        />
        <path
          d="M72 24 C78 18, 83 20, 84 24 C80 26, 75 26, 72 24"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "400ms" }}
        />
        <path
          d="M24 43 C23 49, 19 54, 16 52 C15 48, 19 44, 24 43"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "460ms" }}
        />
      </g>
    </svg>
  );
};
