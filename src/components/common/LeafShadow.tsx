"use client";

import React from "react";

interface LeafShadowProps {
  className?: string;
  variant?: "hero" | "subtle" | "image-wall";
}

/**
 * Botanical Leaf Shadow (Section 3: Dappled leaf light)
 * Three SVG layers of recognizable silhouettes (Frangipani, Ficus, Fern)
 * in warm shadow color #4A3B22 with optical depth blurs (7px, 10px, 14px)
 * and branch-pivot sway animations.
 */
export const LeafShadow: React.FC<LeafShadowProps> = ({
  className = "",
  variant = "hero",
}) => {
  const isImageWall = variant === "image-wall";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden mix-blend-multiply select-none z-10 isolate ${className}`}
    >
      <div className="relative w-full h-full">
        {/* Layer 1 — Frangipani Clusters (Foreground canopy, 7px blur, 11s sway) */}
        <div className="absolute -top-12 -left-8 right-0 h-[115%] animate-leaf-sway-1 opacity-[0.11] will-change-transform transform-gpu">
          <svg
            viewBox="0 0 1440 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
          >
            <filter id="frangipani-blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="7" />
            </filter>
            <g filter="url(#frangipani-blur)" fill="#4A3B22">
              {/* Heavy branch crossing upper right to center */}
              <path d="M1480 -30 Q1150 40 860 20 Q620 0 440 70 L430 45 Q620 -20 870 0 Q1160 20 1480 -50 Z" />

              {/* Frangipani cluster 1 — Upper center */}
              <g transform="translate(680, 60) rotate(-15)">
                {/* 5 Petals whorl */}
                <path d="M0 0 C-15 -35 15 -65 30 -50 C45 -35 25 -5 0 0 Z" />
                <path d="M0 0 C25 -25 65 -15 60 10 C55 35 25 25 0 0 Z" />
                <path d="M0 0 C30 15 45 55 25 65 C5 75 -10 45 0 0 Z" />
                <path d="M0 0 C-10 30 -45 45 -55 25 C-65 5 -35 -15 0 0 Z" />
                <path d="M0 0 C-35 -5 -60 -40 -35 -55 C-10 -70 5 -35 0 0 Z" />
                {/* Adjacent broad obovate leaves */}
                <path d="M20 -15 C60 -70 120 -80 150 -50 C180 -20 130 30 50 10 Z" />
                <path d="M-20 20 C-60 80 -120 90 -160 60 C-190 30 -130 -20 -50 0 Z" />
                <path d="M35 25 C90 70 140 60 155 30 C170 0 120 -30 60 5 Z" />
              </g>

              {/* Frangipani cluster 2 — Upper left reach */}
              <g transform="translate(240, 40) rotate(22)">
                <path d="M0 0 C-20 -40 10 -70 28 -55 C46 -40 22 -8 0 0 Z" />
                <path d="M0 0 C22 -22 60 -10 52 14 C44 38 18 24 0 0 Z" />
                <path d="M0 0 C24 18 38 52 18 60 C-2 68 -15 38 0 0 Z" />
                <path d="M0 0 C-12 28 -42 38 -50 18 C-58 -2 -28 -18 0 0 Z" />
                <path d="M0 0 C-30 -8 -52 -38 -28 -50 C-4 -62 10 -28 0 0 Z" />
                {/* Elongated leaves */}
                <path d="M30 -10 C90 -50 170 -40 190 -10 C210 20 150 50 60 15 Z" />
                <path d="M-15 30 C-65 90 -135 110 -170 80 C-205 50 -150 0 -60 10 Z" />
              </g>

              {/* Secondary frangipani spray — Right frame edge */}
              <g transform="translate(1180, 90) rotate(-28)">
                <path d="M0 0 C50 -60 130 -70 160 -40 C190 -10 140 40 40 15 Z" />
                <path d="M-10 10 C-50 70 -110 80 -140 50 C-170 20 -120 -30 -30 0 Z" />
                <path d="M20 20 C70 80 130 70 150 40 C170 10 120 -20 40 0 Z" />
              </g>
            </g>
          </svg>
        </div>

        {/* Layer 2 — Ficus Tree Leaves (Midground canopy with drip tips, 10px blur, 14s sway) */}
        <div className="absolute -top-16 left-0 right-0 h-[120%] animate-leaf-sway-2 opacity-[0.10] will-change-transform transform-gpu">
          <svg
            viewBox="0 0 1440 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
          >
            <filter id="ficus-blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="10" />
            </filter>
            <g filter="url(#ficus-blur)" fill="#4A3B22">
              {/* Slender ficus branch arched across center */}
              <path d="M-60 80 Q240 120 540 60 Q820 0 1140 70 L1150 50 Q820 -20 530 40 Q230 100 -60 60 Z" />

              {/* Ficus leaves with slender petiole and prominent drip-tip */}
              {/* Leaf 1 */}
              <path d="M120 90 C160 50 210 65 240 110 C260 140 280 150 300 155 C275 165 240 160 210 145 C160 120 135 125 120 90 Z" />
              {/* Leaf 2 */}
              <path d="M190 115 C210 160 240 190 285 200 C320 205 340 220 360 230 C335 235 305 220 280 200 C240 170 210 155 190 115 Z" />
              {/* Leaf 3 */}
              <path d="M340 85 C390 40 450 50 485 95 C510 125 530 135 555 140 C525 150 490 140 460 125 C410 100 375 110 340 85 Z" />
              {/* Leaf 4 */}
              <path d="M420 70 C460 20 520 25 560 65 C590 95 620 105 645 110 C615 120 580 115 545 95 C500 70 460 80 420 70 Z" />
              {/* Leaf 5 */}
              <path d="M600 55 C650 10 715 20 750 65 C780 100 810 110 835 115 C800 125 765 115 730 95 C680 70 645 80 600 55 Z" />
              {/* Leaf 6 */}
              <path d="M780 45 C830 5 895 15 930 60 C960 95 990 105 1015 110 C980 120 945 110 910 90 C860 65 825 75 780 45 Z" />
              {/* Leaf 7 */}
              <path d="M960 70 C1010 30 1070 45 1100 90 C1125 125 1150 135 1175 140 C1145 150 1110 140 1080 120 C1030 95 995 105 960 70 Z" />
            </g>
          </svg>
        </div>

        {/* Layer 3 — Delicate Fern Frond (Deep canopy edge, 14px blur, 17s sway) */}
        <div className="absolute -top-8 -right-12 h-[120%] w-[80%] animate-leaf-sway-3 opacity-[0.09] will-change-transform transform-gpu">
          <svg
            viewBox="0 0 1000 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
          >
            <filter id="fern-blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="14" />
            </filter>
            <g filter="url(#fern-blur)" fill="#4A3B22" transform="translate(500, -20) rotate(35)">
              {/* Curving Fern Rachis */}
              <path d="M0 0 Q180 240 320 540 L315 542 Q175 240 0 0 Z" />
              {/* Fern Pinnate Leaflets alternating along stem */}
              <path d="M25 50 C70 45 110 65 130 90 C85 95 50 80 25 50 Z" />
              <path d="M30 65 C-20 60 -60 85 -75 110 C-30 115 5 95 30 65 Z" />
              <path d="M60 110 C120 105 170 130 195 160 C140 165 90 145 60 110 Z" />
              <path d="M70 130 C10 125 -40 150 -60 180 C-10 185 30 165 70 130 Z" />
              <path d="M100 180 C170 170 230 200 260 235 C195 240 140 220 100 180 Z" />
              <path d="M115 205 C45 200 -10 225 -35 260 C25 265 75 245 115 205 Z" />
              <path d="M150 260 C230 250 295 285 325 325 C250 330 190 305 150 260 Z" />
              <path d="M170 290 C90 280 30 310 0 350 C70 355 125 330 170 290 Z" />
              <path d="M205 350 C285 340 345 375 370 415 C300 420 245 395 205 350 Z" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
