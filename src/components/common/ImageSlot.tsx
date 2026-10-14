"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface ImageSlotProps {
  id: string; // e.g. "hero-exterior", "dish-ravioli"
  alt: string;
  aspect?: string;
  className?: string;
  fallback: React.ReactNode;
  priority?: boolean;
  sizes?: string;
}

// Known images in /public/images/
const KNOWN_IMAGES: Record<string, string> = {
  "hero-exterior": "/images/hero-exterior.webp",
  "fountain-buddha": "/images/fountain-buddha.webp",
  "garden-pergola": "/images/garden-pergola.webp",
  "latte-vanah": "/images/latte-vanah.webp",
  "dish-ravioli": "/images/dish-ravioli.jpg",
  "dish-kalari": "/images/dish-kalari.jpg",
  "dish-guacamole": "/images/dish-guacamole.jpg",
  "dish-squash": "/images/dish-squash.jpg",
  "dish-chocolate": "/images/dish-chocolate.jpg",
  "dish-cheesecake": "/images/dish-cheesecake.jpg",
  "private-dining": "/images/private-dining.webp",
};

export const ImageSlot: React.FC<ImageSlotProps> = ({
  id,
  alt,
  aspect = "aspect-[4/5]",
  className = "",
  fallback,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const imgSrc = KNOWN_IMAGES[id];

  return (
    <div className={`relative overflow-hidden ${aspect} ${className}`}>
      {/* Fallback illustration: always rendered underneath */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
          isLoaded && !hasError ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {fallback}
      </div>

      {/* Real photograph: fades in on load */}
      {imgSrc && !hasError && (
        <Image
          src={imgSrc}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover transition-opacity duration-700 ease-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
};
