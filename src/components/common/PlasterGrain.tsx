"use client";

import React from "react";

/**
 * LimewashPlasterTexture (Section 3)
 * Provides a genuine hand-applied lime-wash plaster surface:
 * 1. Soft, low-frequency tonal variation simulating lime troweling
 * 2. Delicate plaster micro-grain at ~3.5% opacity
 */
export const PlasterGrain: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 select-none overflow-hidden"
    >
      {/* Plaster Micro-Grain Texture */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.038] mix-blend-multiply"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="limewash-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#limewash-grain)" />
      </svg>

      {/* Soft Mottled Plaster Wash (Very low frequency organic variation) */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.03] mix-blend-multiply"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="plaster-mottle">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.0035 0.0035"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="
              0.33 0.33 0.33 0 0
              0.33 0.33 0.33 0 0
              0.33 0.33 0.33 0 0
              0    0    0    1 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#plaster-mottle)" />
      </svg>
    </div>
  );
};
