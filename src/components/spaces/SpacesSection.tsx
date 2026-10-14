"use client";

import React from "react";
import { ImageSlot } from "../common/ImageSlot";
import { LeafShadow } from "../common/LeafShadow";
import { Cottage, LeafSprig } from "../lineart";

export interface SpacesSectionProps {
  onOpenEnquire?: (seating: "Private room") => void;
}

export const SpacesSection: React.FC<SpacesSectionProps> = ({ onOpenEnquire }) => {
  return (
    <section
      id="spaces"
      className="relative z-20 w-full bg-limewash py-12 sm:py-16 lg:py-22 px-5 sm:px-8 lg:px-10 border-b border-oat overflow-hidden"
    >
      {/* Sunlight through trees leaf shadow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <LeafShadow variant="subtle" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-11">
          <span className="text-[10.5px] font-sans uppercase tracking-[0.16em] text-ink-soft font-medium mb-2 block">
            THE SANCTUARY
          </span>
          <h2 className="font-serif italic font-light text-[clamp(1.6rem,3vw,2.6rem)] text-ink leading-tight tracking-[-0.018em]">
            Three places to sit.
          </h2>
          <p className="mt-2.5 text-[15px] font-sans text-ink-soft leading-[1.62]">
            The garden under the pergola, the house full of daylight, and a private room for when you&apos;d like the table to yourselves.
          </p>
        </div>

        {/* Spaces Layout: Mobile stacked single column, Tablet 2-col, Desktop 12-col */}
        <div className="space-y-10 sm:space-y-12 lg:space-y-16">
          {/* Space 1: The Garden */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <div className="p-1.5 bg-ink rounded-[2px] shadow-sm">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-plaster">
                  {/* TODO(owner): replace AI placeholder image with real photo */}
                  <ImageSlot
                    id="garden-pergola"
                    alt="Café Vanah garden dining tables under the mature tree canopy"
                    aspect="aspect-[4/3]"
                    fallback={
                      <div className="w-full h-full flex items-center justify-center p-8 bg-plaster text-sage">
                        <LeafSprig className="w-12 h-12" draw={false} strokeWidth={1.2} />
                      </div>
                    }
                  />
                  {/* Centre mullion window frame accent */}
                  <div className="absolute inset-y-0 left-1/2 w-[3px] -ml-[1.5px] bg-ink pointer-events-none z-10" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h3 className="font-serif text-lg sm:text-xl text-ink font-normal tracking-tight">
                The garden
              </h3>
              <p className="mt-1.5 text-sm sm:text-base font-sans text-ink-soft leading-relaxed">
                Tables under the pergola and the big trees. Best in the morning and after sunset.
              </p>
            </div>
          </div>

          {/* Space 2: The House */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-start">
            <div className="lg:col-span-6 lg:col-start-2">
              <div className="overflow-hidden rounded-[2px] border border-oat bg-plaster shadow-none">
                {/* TODO(owner): replace AI placeholder image with real photo */}
                <ImageSlot
                  id="hero-exterior"
                  alt="Café Vanah white cottage interior with sunlight and wood accents"
                  aspect="aspect-[4/3] sm:aspect-[4/5]"
                  fallback={
                    <div className="w-full h-full flex items-center justify-center p-8 bg-plaster text-sage">
                      <Cottage className="w-14 h-10" draw={false} strokeWidth={1.2} />
                    </div>
                  }
                />
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-center">
              <h3 className="font-serif text-lg sm:text-xl text-ink font-normal tracking-tight">
                The house
              </h3>
              <p className="mt-1.5 text-sm sm:text-base font-sans text-ink-soft leading-relaxed">
                White walls, warm wood, big windows. Quiet enough to work, or to talk.
              </p>
            </div>
          </div>

          {/* Space 3: The Private Room */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-start">
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="overflow-hidden rounded-[2px] border border-oat bg-plaster shadow-none">
                {/* TODO(owner): replace AI placeholder image with real photo */}
                <ImageSlot
                  id="private-dining"
                  alt="Café Vanah private dining room for intimate gatherings"
                  aspect="aspect-[3/2]"
                  fallback={
                    <div className="w-full h-full flex items-center justify-center p-8 bg-plaster text-sage">
                      <Cottage className="w-12 h-9" draw={false} strokeWidth={1.2} />
                    </div>
                  }
                />
              </div>
            </div>
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
              <h3 className="font-serif text-lg sm:text-xl text-ink font-normal tracking-tight">
                The private room
              </h3>
              <p className="mt-1.5 text-sm sm:text-base font-sans text-ink-soft leading-relaxed">
                For birthdays, small celebrations and long work dinners.
              </p>
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => onOpenEnquire?.("Private room")}
                  className="font-serif italic text-[1.05rem] text-ink text-link-draw group inline-flex items-center gap-1.5 py-1 min-h-[44px]"
                >
                  <span>Enquire</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
