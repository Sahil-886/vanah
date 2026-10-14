"use client";

import React, { useEffect, useState } from "react";
import { useDrawOnView } from "./common";

interface PlacematSceneProps {
  className?: string;
  draw?: boolean;
}

/**
 * PlacematScene (State B Hero — Section 2)
 * Comprehensive botanical & architectural line-art panorama in --line-on-sage:
 * 1. Continuous ground baseline with pebble & leaf textures
 * 2. Buddha water fountain seated among broad tropical leaves (Left)
 * 3. The authentic white cottage with sloped tiled roof and mullions (Center)
 * 4. Two mature trees with loose hand-drawn foliage canopies
 * 5. Metal pergola garden pavilion (Right)
 * 6. Foreground ceramic stoneware cup with rising steam & stencilled वनः
 */
export const PlacematScene: React.FC<PlacematSceneProps> = ({
  className = "w-full h-full",
  draw = true,
}) => {
  const { ref, hasAnimated } = useDrawOnView(draw);
  const [hasCustomSvg, setHasCustomSvg] = useState(false);

  useEffect(() => {
    // Check if user has supplied /art/placemat.svg
    fetch("/art/placemat.svg", { method: "HEAD" })
      .then((res) => {
        if (res.ok) setHasCustomSvg(true);
      })
      .catch(() => {});
  }, []);

  if (hasCustomSvg) {
    return (
      <div className={`relative w-full h-full flex items-end justify-center ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/art/placemat.svg"
          alt="Café Vanah Signature Placemat Artwork"
          className="w-full max-h-[85%] object-contain object-bottom select-none pointer-events-none"
        />
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full flex items-end justify-center overflow-hidden ${className}`}>
      <svg
        ref={ref}
        viewBox="0 0 1200 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[92%] object-contain object-bottom select-none overflow-visible"
        role="img"
        aria-label="Hand-drawn placemat architectural scene of Café Vanah"
      >
        <g
          stroke="var(--line-on-sage)"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-95"
        >
          {/* ============================================================== */}
          {/* PHASE 1: Ground Baseline & Garden Pathway (0ms – 400ms)         */}
          {/* ============================================================== */}
          <path
            d="M-20 460 C180 459, 420 461, 700 460 C920 459, 1140 461, 1220 460"
            className={draw && hasAnimated ? "line-draw-path" : ""}
            style={{ animationDelay: "0ms" }}
          />
          <path
            d="M40 472 C120 470, 240 473, 340 471"
            className={draw && hasAnimated ? "line-draw-path" : ""}
            style={{ animationDelay: "120ms" }}
          />
          <path
            d="M840 471 C960 473, 1080 470, 1160 472"
            className={draw && hasAnimated ? "line-draw-path" : ""}
            style={{ animationDelay: "180ms" }}
          />

          {/* Stepping stones / garden path */}
          <ellipse cx="480" cy="482" rx="22" ry="5" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "220ms" }} />
          <ellipse cx="560" cy="492" rx="26" ry="6" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "260ms" }} />
          <ellipse cx="650" cy="484" rx="24" ry="5" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "300ms" }} />

          {/* ============================================================== */}
          {/* PHASE 2: Boundary Wall & Cottage Main Structure (400ms – 1.0s) */}
          {/* ============================================================== */}
          {/* Low boundary wall on left */}
          <path
            d="M260 460 L260 410 C260 405, 270 405, 270 410 L380 410 L380 460"
            className={draw && hasAnimated ? "line-draw-path" : ""}
            style={{ animationDelay: "360ms" }}
          />
          <path d="M260 418 L380 418" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "420ms" }} />
          {/* Wall coping stone texture */}
          <path d="M295 410 L295 418" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "460ms" }} />
          <path d="M335 410 L335 418" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "480ms" }} />

          {/* Cottage Main White Walls (Long, horizontal proportion) */}
          <path
            d="M370 460 L370 290 L790 290 L790 460"
            className={draw && hasAnimated ? "line-draw-path" : ""}
            style={{ animationDelay: "520ms" }}
          />

          {/* Cottage Sloped Tiled Roof (Pitch & Ridge) */}
          <path
            d="M340 296 C440 240, 530 190, 580 178 C630 190, 720 240, 820 296"
            className={draw && hasAnimated ? "line-draw-path" : ""}
            style={{ animationDelay: "620ms" }}
          />
          {/* Overhanging eaves line */}
          <path
            d="M332 304 C436 246, 528 196, 580 184 C632 196, 724 246, 828 304"
            className={draw && hasAnimated ? "line-draw-path" : ""}
            style={{ animationDelay: "700ms" }}
          />

          {/* ============================================================== */}
          {/* PHASE 3: Roof Tile Courses & Windows (1.0s – 1.6s)             */}
          {/* ============================================================== */}
          {/* Horizontal tile courses */}
          <path
            d="M390 274 C470 232, 540 200, 580 196 C620 200, 690 232, 770 274"
            className={draw && hasAnimated ? "line-draw-path" : ""}
            style={{ animationDelay: "800ms" }}
          />
          <path
            d="M440 250 C500 220, 550 205, 580 203 C610 205, 660 220, 720 250"
            className={draw && hasAnimated ? "line-draw-path" : ""}
            style={{ animationDelay: "880ms" }}
          />

          {/* Short vertical tile grooves */}
          <path d="M430 278 L420 296" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "940ms" }} />
          <path d="M485 258 L475 288" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "980ms" }} />
          <path d="M540 238 L535 278" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1020ms" }} />
          <path d="M580 205 L580 286" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1060ms" }} />
          <path d="M620 238 L625 278" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1100ms" }} />
          <path d="M675 258 L685 288" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1140ms" }} />
          <path d="M730 278 L740 296" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1180ms" }} />

          {/* Center Arched Entrance Door */}
          <path
            d="M555 460 L555 350 C555 338, 605 338, 605 350 L605 460"
            className={draw && hasAnimated ? "line-draw-path" : ""}
            style={{ animationDelay: "1220ms" }}
          />
          <circle cx="563" cy="405" r="1.5" fill="var(--line-on-sage)" />

          {/* Left Window (Black frame with mullion cross) */}
          <rect x="410" y="335" width="70" height="65" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1280ms" }} />
          <path d="M445 335 L445 400" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1320ms" }} />
          <path d="M410 367 L480 367" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1350ms" }} />

          {/* Right Window (Black frame with mullion cross) */}
          <rect x="680" y="335" width="70" height="65" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1400ms" }} />
          <path d="M715 335 L715 400" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1440ms" }} />
          <path d="M680 367 L750 367" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1470ms" }} />

          {/* ============================================================== */}
          {/* PHASE 4: Mature Trees, Buddha Fountain & Pergola (1.6s – 2.2s) */}
          {/* ============================================================== */}
          {/* Left Big Tree Trunk & Canopy */}
          <path d="M210 460 L215 310 Q190 240 160 210" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1520ms" }} />
          <path d="M225 460 L223 330 Q250 250 290 200" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1560ms" }} />
          {/* Tree Canopy Strokes (overlapping loose leaves) */}
          <path
            d="M140 320 C80 300, 60 210, 110 160 C90 120, 140 60, 200 65 C240 20, 310 30, 330 80 C380 85, 410 150, 380 200 C410 240, 380 310, 310 320 C270 350, 180 360, 140 320 Z"
            className={draw && hasAnimated ? "line-draw-path" : ""}
            style={{ animationDelay: "1620ms" }}
          />

          {/* Sandstone Buddha Fountain (Left among big leaves) */}
          <g transform="translate(100, 370)">
            {/* Seated Buddha Silhouette Outline */}
            <path d="M45 90 C30 88, 20 82, 22 75 C25 65, 38 65, 40 55 C40 50, 38 45, 45 40 C43 35, 47 28, 50 26 C53 28, 57 35, 55 40 C62 45, 60 50, 60 55 C62 65, 75 65, 78 75 C80 82, 70 88, 55 90 Z" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1720ms" }} />
            {/* Water ripples / stone bowl */}
            <ellipse cx="50" cy="90" rx="35" ry="6" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1780ms" }} />
            {/* Surrounding broad tropical leaves */}
            <path d="M12 90 C-10 65, -15 35, 10 25 C18 45, 15 70, 12 90 Z" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1840ms" }} />
            <path d="M88 90 C110 65, 115 35, 90 25 C82 45, 85 70, 88 90 Z" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1880ms" }} />
          </g>

          {/* Right Garden Pergola Pavilion */}
          <g transform="translate(830, 320)">
            {/* Pergola Roof Beam & Slats */}
            <path d="M0 40 L280 20" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1920ms" }} />
            <path d="M0 48 L280 28" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1960ms" }} />
            {/* Transverse rafters */}
            <path d="M30 46 L30 22" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "1990ms" }} />
            <path d="M70 43 L70 19" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "2020ms" }} />
            <path d="M110 40 L110 16" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "2050ms" }} />
            <path d="M150 37 L150 13" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "2080ms" }} />
            <path d="M190 34 L190 10" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "2110ms" }} />
            <path d="M230 31 L230 7" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "2140ms" }} />
            {/* Support posts */}
            <path d="M35 46 L35 140" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "2180ms" }} />
            <path d="M155 37 L155 140" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "2210ms" }} />
            <path d="M260 29 L260 140" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "2240ms" }} />
            {/* Overhanging pergola climber foliage */}
            <path d="M-5 25 C30 5, 80 15, 120 3 C160 8, 220 -2, 275 10" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "2280ms" }} />
          </g>

          {/* ============================================================== */}
          {/* PHASE 5: Foreground Coffee Cup with वनः Stencil (2.3s – 2.8s)   */}
          {/* ============================================================== */}
          <g transform="translate(680, 420)">
            {/* Saucer */}
            <ellipse cx="65" cy="74" rx="42" ry="7" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "2320ms" }} />
            {/* Ceramic Stoneware Cup */}
            <path d="M36 45 C37 66, 48 72, 65 72 C82 72, 93 66, 94 45 Z" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "2380ms" }} />
            {/* Cup Rim Ellipse */}
            <ellipse cx="65" cy="45" rx="29" ry="6" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "2440ms" }} />
            {/* Cup Handle */}
            <path d="M94 48 C104 48, 108 55, 106 63 C104 69, 95 68, 88 67" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "2490ms" }} />
            {/* Rising Steam Lines */}
            <path d="M54 36 C52 28, 58 24, 55 16" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "2540ms" }} />
            <path d="M66 35 C64 25, 70 20, 67 11" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "2590ms" }} />
            <path d="M78 37 C76 29, 82 25, 79 17" className={draw && hasAnimated ? "line-draw-path" : ""} style={{ animationDelay: "2640ms" }} />
          </g>
        </g>

        {/* Cocoa Stencilled वनः in Devanagari on cappuccino foam */}
        <text
          x="745"
          y="467"
          textAnchor="middle"
          lang="hi"
          className="font-devanagari select-none"
          fill="var(--line-on-sage)"
          fontSize="14"
          letterSpacing="0.05em"
          opacity={draw && hasAnimated ? "0.9" : "0"}
          style={{
            transition: "opacity 0.6s ease-out 2.5s",
          }}
        >
          वनः
        </text>
      </svg>
    </div>
  );
};
