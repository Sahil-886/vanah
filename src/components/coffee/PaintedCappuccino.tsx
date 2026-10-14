"use client";

import React from "react";

export interface PaintedCappuccinoProps {
  className?: string;
  cropped?: boolean; // When true, crop tight to the cup for the Idea section
}

export const PaintedCappuccino: React.FC<PaintedCappuccinoProps> = ({
  className = "",
  cropped = false,
}) => {
  if (cropped) {
    // Tight crop around the cup (viewBox 180 180 240 240)
    return (
      <svg
        viewBox="180 180 240 240"
        className={`w-full h-full object-cover select-none ${className}`}
        role="img"
        aria-label="Cup of artisanal cappuccino with वनः stencilled in cocoa powder"
      >
        <defs>
          <filter id="cocoaDustCrop" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.6" xChannelSelector="R" yChannelSelector="G" result="displaced" />
            <feGaussianBlur in="displaced" stdDeviation="0.35" />
          </filter>
          <radialGradient id="cupRimGradCrop" cx="45%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#FAF6EE" />
            <stop offset="100%" stopColor="#E7DFD0" />
          </radialGradient>
          <radialGradient id="cremaGradCrop" cx="45%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#F4E8D3" />
            <stop offset="55%" stopColor="#ECD7B6" />
            <stop offset="86%" stopColor="#D4AE80" />
            <stop offset="100%" stopColor="#A9764B" />
          </radialGradient>
        </defs>

        {/* Stoneware Saucer */}
        <circle cx="300" cy="300" r="110" fill="#EEE8DC" />
        <circle cx="300" cy="300" r="82" fill="none" stroke="#D6C8B0" strokeWidth="1.2" />

        {/* Cup Handle */}
        <path
          d="M 370 282 C 400 282, 400 318, 370 318"
          fill="none"
          stroke="#E7DFD0"
          strokeWidth="14"
          strokeLinecap="round"
        />

        {/* Cup Outer Body */}
        <circle cx="300" cy="300" r="76" fill="url(#cupRimGradCrop)" stroke="#D6C8B0" strokeWidth="1" />

        {/* Coffee Crema Foam */}
        <circle cx="300" cy="300" r="66" fill="url(#cremaGradCrop)" />

        {/* Dusted Cocoa वनः Wordmark */}
        <text
          x="300"
          y="318"
          fill="#5A3925"
          fillOpacity="0.88"
          fontFamily="var(--font-devanagari)"
          fontSize="56"
          fontWeight="400"
          textAnchor="middle"
          filter="url(#cocoaDustCrop)"
          lang="sa"
        >
          वनः
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 600 600"
      className={`w-full h-auto select-none overflow-hidden ${className}`}
      role="img"
      aria-label="Artisanal Café Vanah cappuccino with dusted cocoa वनः stencil on a sage linen placemat with slice of pound cake"
    >
      <defs>
        {/* Cocoa dust dispersion filter */}
        <filter id="cocoaDust" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.6" xChannelSelector="R" yChannelSelector="G" result="displaced" />
          <feGaussianBlur in="displaced" stdDeviation="0.35" />
        </filter>

        {/* Soft Shadow */}
        <filter id="softPlacematShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="16" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.12  0 0 0 0 0.13  0 0 0 0 0.11  0 0 0 0.22 0" />
          <feOffset dx="0" dy="12" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>

        {/* Marble Texture filter */}
        <filter id="marbleFilter" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence baseFrequency="0.0022 0.0075" numOctaves="5" result="turb" />
          <feColorMatrix in="turb" values="0 0 0 0 .5  0 0 0 0 .5  0 0 0 0 .48  1.7 0 0 0 -.66" result="col" />
          <feComponentTransfer in="col">
            <feFuncA type="table" tableValues="0 0 .42 0 0 .22 0 0" />
          </feComponentTransfer>
        </filter>

        {/* Plate Gradient */}
        <radialGradient id="plateGrad" cx="45%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#D3DDCB" />
          <stop offset="100%" stopColor="#AEBDA6" />
        </radialGradient>

        {/* Stoneware Cup Gradient */}
        <radialGradient id="cupRimGrad" cx="45%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#FAF6EE" />
          <stop offset="100%" stopColor="#E7DFD0" />
        </radialGradient>

        {/* Crema Gradient */}
        <radialGradient id="cremaGrad" cx="46%" cy="46%" r="52%">
          <stop offset="0%" stopColor="#F4E8D3" />
          <stop offset="55%" stopColor="#ECD7B6" />
          <stop offset="86%" stopColor="#D4AE80" />
          <stop offset="100%" stopColor="#A9764B" />
        </radialGradient>

        {/* Silver Spoon Linear Gradient */}
        <linearGradient id="silverSpoon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E5E4E2" />
          <stop offset="40%" stopColor="#BCC0C4" />
          <stop offset="70%" stopColor="#F2F3F4" />
          <stop offset="100%" stopColor="#9FA2A6" />
        </linearGradient>
      </defs>

      {/* 1. Marble Table Background */}
      <rect width="600" height="600" fill="#ECE8E1" />
      <rect width="600" height="600" filter="url(#marbleFilter)" opacity="0.65" />

      {/* 2. Sage Linen Placemat rotated -4° with soft shadow */}
      <g transform="rotate(-4 300 300)">
        <rect
          x="60"
          y="70"
          width="480"
          height="460"
          rx="2"
          fill="#4D5A4C"
          filter="url(#softPlacematShadow)"
        />
        {/* Inset Border on Placemat */}
        <rect
          x="75"
          y="85"
          width="450"
          height="430"
          rx="1"
          fill="none"
          stroke="#EDE7DA"
          strokeWidth="0.85"
          strokeOpacity="0.45"
        />

        {/* Line art sprig, sun and fern on placemat */}
        {/* Small sun top-left */}
        <g stroke="#EDE7DA" strokeWidth="0.9" fill="none" opacity="0.4">
          <circle cx="106" cy="116" r="10" />
          {[...Array(8)].map((_, i) => {
            const angle = (i * Math.PI * 2) / 8;
            return (
              <line
                key={i}
                x1={106 + Math.cos(angle) * 13}
                y1={116 + Math.sin(angle) * 13}
                x2={106 + Math.cos(angle) * 17}
                y2={116 + Math.sin(angle) * 17}
              />
            );
          })}
        </g>
        {/* Sprigs along bottom-right */}
        <path
          d="M 470 480 Q 450 450, 420 440 M 440 458 Q 450 450, 456 453 M 430 448 Q 424 438, 420 441"
          stroke="#EDE7DA"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />
      </g>

      {/* 3. Celadon Side Plate with Slice of Pound Cake (left-top) */}
      <g transform="translate(165, 230)">
        {/* Plate Shadow */}
        <circle cx="0" cy="0" r="92" fill="#1F211D" opacity="0.14" />
        {/* Celadon Plate Body */}
        <circle cx="0" cy="0" r="88" fill="url(#plateGrad)" stroke="#9DAE95" strokeWidth="1" />
        <circle cx="0" cy="0" r="66" fill="none" stroke="#90A188" strokeWidth="0.8" opacity="0.6" />

        {/* Slice of Pound Cake */}
        <g transform="rotate(-15) translate(-36, -28)">
          {/* Cake Body */}
          <path
            d="M 0 0 L 72 0 L 68 55 L 4 55 Z"
            fill="#E7C285"
            stroke="#D4A760"
            strokeWidth="0.8"
          />
          {/* Darker Golden Crust Band */}
          <path
            d="M 0 0 L 72 0 L 70 12 L 2 12 Z"
            fill="#B47A3F"
          />
          {/* Crumb Dots */}
          <circle cx="18" cy="28" r="1" fill="#C9974D" />
          <circle cx="34" cy="38" r="1.2" fill="#C9974D" />
          <circle cx="52" cy="24" r="1" fill="#C9974D" />
          <circle cx="42" cy="46" r="0.8" fill="#C9974D" />
        </g>
      </g>

      {/* 4. Saucer, Cup & Stencilled Crema (center-right) */}
      <g transform="translate(365, 345)">
        {/* Saucer Drop Shadow */}
        <ellipse cx="0" cy="10" rx="145" ry="142" fill="#1F211D" opacity="0.16" />

        {/* Stoneware Saucer */}
        <circle cx="0" cy="0" r="140" fill="#EEE8DC" stroke="#D6C8B0" strokeWidth="1" />
        <circle cx="0" cy="0" r="102" fill="none" stroke="#D6C8B0" strokeWidth="0.9" strokeDasharray="4 2" opacity="0.5" />

        {/* Silver Spoon placed diagonally */}
        <g transform="rotate(38) translate(110, -8)">
          <path
            d="M -70 4 Q -20 5, 20 2 Q 45 -4, 55 -3 Q 65 -2, 60 4 Q 50 10, 20 6 L -70 5 Z"
            fill="url(#silverSpoon)"
            opacity="0.95"
          />
        </g>

        {/* Cup Handle (pointing right) */}
        <path
          d="M 88 -22 C 128 -22, 128 22, 88 22"
          fill="none"
          stroke="#E7DFD0"
          strokeWidth="16"
          strokeLinecap="round"
        />

        {/* Stoneware Cup Outer Rim */}
        <circle cx="0" cy="0" r="95" fill="url(#cupRimGrad)" stroke="#D6C8B0" strokeWidth="1.2" />

        {/* Speckles on Cup Rim */}
        <circle cx="-60" cy="-55" r="0.9" fill="#8B5E3C" opacity="0.4" />
        <circle cx="-75" cy="12" r="0.8" fill="#8B5E3C" opacity="0.35" />
        <circle cx="-32" cy="78" r="1" fill="#8B5E3C" opacity="0.4" />
        <circle cx="48" cy="72" r="0.9" fill="#8B5E3C" opacity="0.3" />
        <circle cx="78" cy="-35" r="0.8" fill="#8B5E3C" opacity="0.35" />

        {/* Coffee Crema Foam */}
        <circle cx="0" cy="0" r="82" fill="url(#cremaGrad)" />

        {/* Crema Marbling Halo */}
        <circle cx="-6" cy="-6" r="76" fill="none" stroke="#ECD7B6" strokeWidth="3" opacity="0.25" />

        {/* Dusted Cocoa वनः Wordmark */}
        <text
          x="0"
          y="26"
          fill="#5A3925"
          fillOpacity="0.88"
          fontFamily="var(--font-devanagari)"
          fontSize="82"
          fontWeight="400"
          textAnchor="middle"
          filter="url(#cocoaDust)"
          lang="sa"
        >
          वनः
        </text>
      </g>
    </svg>
  );
};
