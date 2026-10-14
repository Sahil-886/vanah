"use client";

import React from "react";
import Image from "next/image";
import { ImageSlot } from "../common/ImageSlot";
import { Fern, LeafSprig } from "../lineart";
import { LeafShadow } from "../common/LeafShadow";

export const VanahStory: React.FC = () => {
  return (
    <section
      id="vanah-story"
      className="relative z-20 w-full bg-limewash py-12 sm:py-18 lg:py-24 px-5 sm:px-8 lg:px-10 border-b border-oat overflow-hidden"
    >
      {/* Sunlight through trees leaf shadow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <LeafShadow variant="subtle" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Cols 1–5 */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Label */}
            <div className="mb-4">
              <span className="text-[10.5px] font-sans uppercase tracking-[0.16em] text-ink-soft font-medium">
                PURE VEGETARIAN · VEGAN OPTIONS
              </span>
            </div>

            {/* Lede Paragraph: Newsreader Roman */}
            <p className="font-serif text-[clamp(1.25rem,1.9vw,1.7rem)] text-ink leading-[1.3] tracking-[-0.015em] font-normal">
              <span lang="sa" className="font-devanagari font-semibold text-[1.15em] tracking-[0.01em]">
                वनः
              </span>{" "}
              means forest. We planted a small one on Baner–Aundh Road — shade, slow coffee, a bakehouse that starts at eight, and a vegetarian kitchen that cooks with what&apos;s in season.
            </p>

            {/* Body Copy: Hanken Grotesk 17px / 1.62 */}
            <p className="mt-5 text-[15px] font-sans text-ink-soft leading-[1.62] max-w-md">
              Come for a first coffee under the trees, a long lunch in the garden, or dinner with people you like. Everything we serve is vegetarian, and much of it can be made vegan.
            </p>

            {/* Hand-drawn Fern + Sprig */}
            <div className="mt-6 flex items-center gap-3 text-sage">
              <Fern className="w-8 h-10" draw={true} strokeWidth={1.2} />
              <LeafSprig className="w-8 h-8" draw={true} strokeWidth={1.2} />
            </div>
          </div>

          {/* Spacer Column 6 */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Right Column: Cols 7–12 — Image Wall */}
          <div className="lg:col-span-6 relative w-full h-[256px] xs:h-[296px] sm:h-[352px] md:h-[385px] mx-auto max-w-[400px] lg:max-w-none">
            {/* 1. Fountain (3:4, top-left, 50% wide) */}
            <div className="absolute top-0 left-0 w-[50%] aspect-[3/4] z-10 overflow-hidden rounded-[2px] border border-oat shadow-sm bg-plaster">
              {/* TODO(owner): replace AI placeholder image with real photo */}
              <ImageSlot
                id="fountain-buddha"
                alt="Stone Buddha fountain surrounded by garden foliage at Café Vanah"
                aspect="aspect-[3/4]"
                fallback={
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-ink-soft bg-plaster">
                    <span className="font-serif italic text-lg text-ink">Buddha Fountain</span>
                    <span className="text-xs font-sans text-ink-soft mt-1">Under garden canopy</span>
                  </div>
                }
              />
            </div>

            {/* 2. Pergola in Black Window Frame (3:2, right, 58% wide, 18% from top) */}
            <div className="absolute top-[18%] right-0 w-[58%] aspect-[3/2] z-20 p-[5px] bg-ink rounded-[2px] shadow-sm">
              <div className="relative w-full h-full overflow-hidden bg-plaster">
                {/* TODO(owner): replace AI placeholder image with real photo */}
                <ImageSlot
                  id="garden-pergola"
                  alt="Outdoor dining pergola covered with climbing vines at Café Vanah"
                  aspect="aspect-[3/2]"
                  fallback={
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center text-ink-soft bg-plaster">
                      <span className="font-serif italic text-base text-ink">Garden Pergola</span>
                      <span className="text-xs font-sans text-ink-soft mt-1">Open-air courtyard</span>
                    </div>
                  }
                />
                {/* 4px Vertical Mullion */}
                <div className="absolute inset-y-0 left-1/2 w-[4px] -ml-[2px] bg-ink pointer-events-none z-10" />
                {/* Horizontal Transom at 36% */}
                <div className="absolute inset-x-0 top-[36%] h-[4px] -mt-[2px] bg-ink pointer-events-none z-10" />
              </div>
            </div>

            {/* 3. Real Photograph of the Cappuccino (1:1, 32% wide) overlapping bottom-left of pergola by ~40px */}
            <div className="absolute bottom-2 left-[34%] w-[32%] aspect-square z-30 rounded-[2px] border-[6px] sm:border-[7px] border-limewash shadow-lg overflow-hidden bg-plaster">
              {/* Real photo of the latte with dusted Vanah stencil */}
              <Image
                src="/images/latte-vanah.webp"
                alt="Café Vanah cappuccino with dusted वनः cocoa stencil on stoneware"
                fill
                sizes="(max-width: 640px) 32vw, (max-width: 1024px) 24vw, 18vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
