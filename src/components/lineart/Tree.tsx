"use client";

import React from "react";
import { LineArtProps, useDrawOnView } from "./common";

export const Tree: React.FC<LineArtProps> = ({
  className = "w-20 h-24 text-current",
  draw = true,
  strokeWidth = 1.25,
}) => {
  const { ref, hasAnimated } = useDrawOnView(draw);

  return (
    <svg
      ref={ref}
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} overflow-visible`}
      role="img"
      aria-label="Hand-drawn tree illustration"
    >
      <g
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-100"
      >
        <path
          d="M37 84 L38 52"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "80ms" }}
        />
        <path
          d="M43 84 L42 52"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "120ms" }}
        />
        <path
          d="M28 84.5 C36 84.2, 44 84.2, 52 84.5"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "160ms" }}
        />
        <path
          d="M38 60 C32 54, 25 50, 22 47"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "220ms" }}
        />
        <path
          d="M42 56 C48 50, 56 46, 59 42"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "260ms" }}
        />
        <path
          d="M40 52 C39 42, 40 33, 40 24"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "300ms" }}
        />
        <path
          d="M30 72 C18 68, 14 53, 20 42 C16 33, 22 22, 33 21 C36 14, 45 13, 50 18 C58 13, 67 19, 65 29 C72 37, 70 51, 62 58 C65 67, 54 74, 46 72"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "360ms" }}
        />
      </g>
    </svg>
  );
};
