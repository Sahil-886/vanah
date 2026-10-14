"use client";

import React from "react";

interface DishIllustrationProps {
  id: string;
  className?: string;
}

export const DishIllustration: React.FC<DishIllustrationProps> = ({
  id,
  className = "",
}) => {
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center bg-plaster border border-oat select-none ${className}`}
      role="img"
      aria-label={`Line art illustration of ${id}`}
    >
      <svg
        viewBox="0 0 300 375"
        className="w-full h-full p-6 text-ink-soft"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {/* Double-ring Plate */}
        <circle cx="150" cy="180" r="115" strokeWidth="1.6" />
        <circle cx="150" cy="180" r="92" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />

        {/* Dish Motifs */}
        {id === "dish-ravioli" && (
          <g>
            {/* Sauce pool */}
            <path
              d="M 120 160 C 130 140, 175 145, 185 165 C 195 185, 180 215, 155 210 C 130 205, 110 180, 120 160 Z"
              fill="#E8E1D3"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
            {/* Rotated squares with crimped inner lines */}
            <g transform="rotate(-12 140 165)">
              <rect x="120" y="145" width="40" height="40" rx="1" />
              <rect x="125" y="150" width="30" height="30" rx="1" strokeDasharray="3 2" />
            </g>
            <g transform="rotate(22 170 185)">
              <rect x="150" y="165" width="38" height="38" rx="1" />
              <rect x="155" y="170" width="28" height="28" rx="1" strokeDasharray="3 2" />
            </g>
            <g transform="rotate(-5 130 195)">
              <rect x="110" y="175" width="36" height="36" rx="1" />
              <rect x="115" y="180" width="26" height="26" rx="1" strokeDasharray="3 2" />
            </g>
            {/* Round nasturtium leaves with radial veins */}
            <circle cx="160" cy="140" r="12" fill="#E8E1D3" />
            <path d="M 160 140 L 152 134 M 160 140 L 168 134 M 160 140 L 160 152" strokeWidth="1" />
            <circle cx="125" cy="215" r="10" fill="#E8E1D3" />
            <path d="M 125 215 L 118 210 M 125 215 L 132 210" strokeWidth="1" />
          </g>
        )}

        {id === "dish-kalari" && (
          <g>
            {/* Three overlapping rounds */}
            <circle cx="130" cy="165" r="32" fill="#E8E1D3" strokeWidth="1.8" />
            <circle cx="170" cy="170" r="34" fill="#E8E1D3" strokeWidth="1.8" />
            <circle cx="145" cy="195" r="32" fill="#E8E1D3" strokeWidth="1.8" />
            {/* Coriander leaves and dots */}
            <path d="M 140 155 Q 145 145, 150 148 Q 155 145, 160 155" strokeWidth="1.2" />
            <path d="M 130 190 Q 135 180, 140 185 Q 145 180, 150 190" strokeWidth="1.2" />
            <circle cx="120" cy="160" r="1.5" fill="currentColor" />
            <circle cx="175" cy="165" r="1.5" fill="currentColor" />
            <circle cx="145" cy="200" r="1.5" fill="currentColor" />
            <circle cx="155" cy="175" r="1.5" fill="currentColor" />
          </g>
        )}

        {id === "dish-guacamole" && (
          <g>
            {/* Concentric rings in a round mould */}
            <circle cx="150" cy="180" r="42" fill="#E8E1D3" strokeWidth="1.8" />
            <circle cx="150" cy="180" r="30" strokeDasharray="3 3" />
            <circle cx="150" cy="180" r="16" />
            {/* Triangular chips around */}
            <polygon points="100,145 118,170 92,175" fill="#E8E1D3" />
            <polygon points="190,140 210,165 185,172" fill="#E8E1D3" />
            <polygon points="98,205 125,215 106,230" fill="#E8E1D3" />
            <polygon points="175,210 202,205 190,230" fill="#E8E1D3" />
          </g>
        )}

        {id === "dish-squash" && (
          <g>
            {/* Crescent slices */}
            <path d="M 120 150 C 130 135, 165 140, 180 160 C 160 150, 135 150, 120 150 Z" fill="#E8E1D3" strokeWidth="1.8" />
            <path d="M 110 175 C 125 155, 175 160, 190 185 C 165 170, 130 170, 110 175 Z" fill="#E8E1D3" strokeWidth="1.8" />
            <path d="M 125 200 C 140 185, 175 185, 185 210 C 165 198, 145 200, 125 200 Z" fill="#E8E1D3" strokeWidth="1.8" />
            {/* Herb leaves */}
            <path d="M 145 165 Q 155 158, 150 150 Q 145 158, 145 165" fill="#E8E1D3" />
            <path d="M 160 185 Q 170 178, 165 170 Q 160 178, 160 185" fill="#E8E1D3" />
          </g>
        )}

        {id === "dish-chocolate" && (
          <g>
            {/* 3D slab with a gloss line */}
            <polygon points="115,160 175,145 195,190 135,205" fill="#E8E1D3" strokeWidth="1.8" />
            <polygon points="115,160 135,205 135,218 115,173" fill="#E8E1D3" strokeWidth="1.8" />
            <polygon points="135,205 195,190 195,203 135,218" fill="#E8E1D3" strokeWidth="1.8" />
            <line x1="125" y1="170" x2="180" y2="156" strokeDasharray="6 3" />
            {/* Three strawberries with seed dots */}
            <g transform="translate(145, 130)">
              <path d="M 0 16 Q -8 8, -6 0 Q 0 4, 6 0 Q 8 8, 0 16 Z" fill="#E8E1D3" />
              <circle cx="-1" cy="6" r="0.8" fill="currentColor" />
              <circle cx="2" cy="10" r="0.8" fill="currentColor" />
            </g>
            <g transform="translate(175, 140)">
              <path d="M 0 14 Q -6 6, -5 0 Q 0 3, 5 0 Q 6 6, 0 14 Z" fill="#E8E1D3" />
              <circle cx="0" cy="5" r="0.8" fill="currentColor" />
            </g>
          </g>
        )}

        {id === "dish-cheesecake" && (
          <g>
            {/* A wedge with a crust line and dough chunks */}
            <polygon points="110,210 185,150 190,205" fill="#E8E1D3" strokeWidth="1.8" />
            {/* Crust line */}
            <path d="M 185 150 C 195 175, 195 190, 190 205" strokeWidth="3" />
            {/* Dough chunks */}
            <rect x="135" y="185" width="8" height="8" rx="1" fill="currentColor" />
            <rect x="155" y="172" width="7" height="6" rx="1" fill="currentColor" />
            <rect x="162" y="190" width="8" height="7" rx="1" fill="currentColor" />
          </g>
        )}
      </svg>
    </div>
  );
};
