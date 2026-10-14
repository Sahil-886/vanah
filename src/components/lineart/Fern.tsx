"use client";

import React from "react";
import { LineArtProps, useDrawOnView } from "./common";

export const Fern: React.FC<LineArtProps> = ({
  className = "w-16 h-20 text-current",
  draw = true,
  strokeWidth = 1.25,
}) => {
  const { ref, hasAnimated } = useDrawOnView(draw);

  return (
    <svg
      ref={ref}
      viewBox="0 0 70 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} overflow-visible`}
      role="img"
      aria-label="Hand-drawn fern illustration"
    >
      <g
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-100"
      >
        <path
          d="M22 82 C24 64, 30 42, 48 12"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "80ms" }}
        />
        <path
          d="M48 12 C50 9, 53 10, 52 13 C50 14, 48 13, 48 12"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "140ms" }}
        />
        <path
          d="M44 20 C49 17, 54 18, 56 20"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "200ms" }}
        />
        <path
          d="M42 24 C36 21, 31 22, 29 25"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "240ms" }}
        />
        <path
          d="M39 31 C46 27, 53 29, 57 32"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "280ms" }}
        />
        <path
          d="M37 36 C30 32, 22 34, 19 38"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "320ms" }}
        />
        <path
          d="M33 44 C42 40, 51 42, 57 46"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "360ms" }}
        />
        <path
          d="M31 50 C22 46, 14 48, 11 53"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "400ms" }}
        />
        <path
          d="M28 59 C37 55, 47 58, 53 62"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "440ms" }}
        />
        <path
          d="M26 65 C17 61, 9 64, 7 69"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "480ms" }}
        />
      </g>
    </svg>
  );
};
