"use client";

import React from "react";
import { LineArtProps, useDrawOnView } from "./common";

export const Sun: React.FC<LineArtProps> = ({
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
      aria-label="Hand-drawn sun illustration"
    >
      <g
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-100"
      >
        <path
          d="M40 26 C47.5 25.8, 54 32.2, 54 40 C53.8 47.8, 47.4 54.1, 39.8 54 C32.1 53.8, 26 47.5, 26 39.8 C26.1 32.2, 32.4 26.1, 40 26"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "80ms" }}
        />
        <path
          d="M40 21 L40 12"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "140ms" }}
        />
        <path
          d="M51 28.5 L58 21.5"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "180ms" }}
        />
        <path
          d="M59 40 L68 40.2"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "220ms" }}
        />
        <path
          d="M51 51.5 L58.5 58.5"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "260ms" }}
        />
        <path
          d="M40 59 L39.8 68"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "300ms" }}
        />
        <path
          d="M28.5 51.5 L21.5 58.5"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "340ms" }}
        />
        <path
          d="M21 40 L12 39.8"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "380ms" }}
        />
        <path
          d="M28.5 28.5 L22 22"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "420ms" }}
        />
      </g>
    </svg>
  );
};
