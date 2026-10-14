"use client";

import React from "react";
import { LineArtProps, useDrawOnView } from "./common";

/**
 * The White Cottage (Café Vanah Architecture — Section 2 & Revision Spec)
 * Faithful hand-drawn line illustration of Café Vanah's signature building:
 * - Long, low, gently pitched tiled roof with multiple parallel tile ridges
 * - Extended overhanging eaves
 * - Black window frames with mullions (quadrant windowpanes)
 * - White boundary wall plinth with garden planter
 * - Authentic 1.25px stroke with slight organic wobble
 */
export const Cottage: React.FC<LineArtProps> = ({
  className = "w-28 h-20 text-current",
  draw = true,
  strokeWidth = 1.25,
}) => {
  const { ref, hasAnimated } = useDrawOnView(draw);

  return (
    <svg
      ref={ref}
      viewBox="0 0 160 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} overflow-visible`}
      role="img"
      aria-label="Café Vanah white cottage architecture illustration"
    >
      <g
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-100"
      >
        {/* Ground baseline */}
        <path
          d="M6 86 C40 85.8, 110 86.2, 154 86"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "60ms" }}
        />

        {/* Boundary wall & low plinth on left */}
        <path
          d="M8 86 L8 70 C8 68, 12 68, 12 70 L34 70 L34 86"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "140ms" }}
        />

        {/* Cottage main white wall silhouette (long & low proportions) */}
        <path
          d="M26 86 L26 50 L136 50 L136 86"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "220ms" }}
        />

        {/* Long, low sloped tiled roof — Main roof pitch */}
        <path
          d="M18 52 C45 36, 75 22, 82 19 C89 22, 118 36, 144 52"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "300ms" }}
        />

        {/* Roof ridge / overhanging eaves with subtle wobble */}
        <path
          d="M14 54.5 C42 38, 74 24, 82 21 C90 24, 122 38, 148 54.5"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "380ms" }}
        />

        {/* Parallel tiled roof courses (short textural tile strokes) */}
        <path
          d="M32 46 C52 35, 70 27, 82 24 C94 27, 112 35, 130 46"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "450ms" }}
        />
        <path
          d="M44 40 C60 32, 72 27, 82 26 C92 27, 104 32, 118 40"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "520ms" }}
        />

        {/* Vertical tile grooves (slight tilt following pitch) */}
        <path d="M48 46 L43 51" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "560ms" }} />
        <path d="M64 38 L60 48" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "590ms" }} />
        <path d="M82 27 L82 48" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "620ms" }} />
        <path d="M100 38 L104 48" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "650ms" }} />
        <path d="M116 46 L121 51" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "680ms" }} />

        {/* Cottage entrance door with arched transom */}
        <path
          d="M74 86 L74 61 C74 58, 88 58, 88 61 L88 86"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "720ms" }}
        />
        {/* Door handle / latch */}
        <circle cx="77" cy="74" r="0.8" fill="currentColor" />

        {/* Black window frame — Left (Mullions: cross divider) */}
        <path
          d="M38 58 L58 58 L58 76 L38 76 Z"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "780ms" }}
        />
        <path d="M48 58 L48 76" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "820ms" }} />
        <path d="M38 67 L58 67" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "840ms" }} />

        {/* Black window frame — Right (Mullions: cross divider) */}
        <path
          d="M104 58 L124 58 L124 76 L104 76 Z"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "880ms" }}
        />
        <path d="M114 58 L114 76" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "920ms" }} />
        <path d="M104 67 L124 67" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "940ms" }} />

        {/* Potted tropical garden plant on porch */}
        <path
          d="M62 86 L63 78 L69 78 L70 86 Z"
          className={draw && hasAnimated ? "line-draw-path" : ""}
          style={{ animationDelay: "980ms" }}
        />
        <path d="M66 78 C64 72, 60 70, 57 71" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1020ms" }} />
        <path d="M66 78 C67 71, 71 69, 74 72" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1050ms" }} />
        <path d="M66 78 C66 70, 65 67, 65 66" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1080ms" }} />

        {/* Climbing ivy foliage on cottage wall edge */}
        <path d="M136 78 C138 75, 142 77, 140 80" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1120ms" }} />
        <path d="M136 70 C139 67, 143 69, 141 73" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1150ms" }} />
        <path d="M136 62 C138 59, 142 61, 140 65" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1180ms" }} />
      </g>
    </svg>
  );
};
