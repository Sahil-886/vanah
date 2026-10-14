"use client";

import React from "react";

/**
 * Ambient Botanical Background
 * A fixed, ethereal botanical background layer with subtle swaying branches
 * and dappled light that stays fixed at the back while the page scrolls.
 */
export const AmbientBotanicalBg: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-40 mix-blend-multiply"
    >
      {/* Top-Right Swaying Branch Silhouette */}
      <div className="absolute -top-16 -right-16 w-[550px] sm:w-[720px] h-[550px] sm:h-[720px] animate-leaf-sway-1 opacity-[0.06] text-[#3D3220]">
        <svg
          viewBox="0 0 600 600"
          fill="currentColor"
          className="w-full h-full"
        >
          {/* Organic leafy canopy cluster */}
          <path d="M 600 0 C 450 60, 320 180, 240 320 C 180 420, 100 480, 0 520 C 80 440, 200 360, 280 240 C 350 140, 480 40, 600 0 Z" />
          <ellipse cx="260" cy="300" rx="45" ry="22" transform="rotate(-35 260 300)" />
          <ellipse cx="210" cy="370" rx="48" ry="24" transform="rotate(-50 210 370)" />
          <ellipse cx="140" cy="430" rx="52" ry="25" transform="rotate(-25 140 430)" />
          <ellipse cx="320" cy="220" rx="42" ry="20" transform="rotate(-40 320 220)" />
          <ellipse cx="380" cy="150" rx="46" ry="22" transform="rotate(-30 380 150)" />
          <ellipse cx="450" cy="90" rx="50" ry="24" transform="rotate(-20 450 90)" />
          <ellipse cx="170" cy="470" rx="38" ry="18" transform="rotate(-65 170 470)" />
          <ellipse cx="280" cy="360" rx="40" ry="20" transform="rotate(-15 280 360)" />
        </svg>
      </div>

      {/* Bottom-Left Gentle Foliage Silhouette */}
      <div className="absolute -bottom-24 -left-20 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] animate-leaf-sway-2 opacity-[0.05] text-[#3D3220]">
        <svg
          viewBox="0 0 500 500"
          fill="currentColor"
          className="w-full h-full"
        >
          <path d="M 0 500 C 60 380, 160 280, 280 200 C 360 140, 420 80, 480 0 C 400 90, 320 180, 220 260 C 140 320, 60 410, 0 500 Z" />
          <ellipse cx="230" cy="250" rx="44" ry="22" transform="rotate(45 230 250)" />
          <ellipse cx="300" cy="180" rx="48" ry="24" transform="rotate(35 300 180)" />
          <ellipse cx="370" cy="110" rx="50" ry="22" transform="rotate(25 370 110)" />
          <ellipse cx="160" cy="320" rx="40" ry="20" transform="rotate(55 160 320)" />
          <ellipse cx="100" cy="390" rx="44" ry="22" transform="rotate(65 100 390)" />
        </svg>
      </div>
    </div>
  );
};
