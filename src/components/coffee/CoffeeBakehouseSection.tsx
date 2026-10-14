"use client";

import React from "react";
import Image from "next/image";

export const CoffeeBakehouseSection: React.FC = () => {
  return (
    <section
      id="coffee"
      className="relative z-20 w-full bg-plaster py-12 sm:py-18 lg:py-24 px-5 sm:px-8 lg:px-10 border-b border-oat overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Real Photo of the Cappuccino (Cols 1–6) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[460px] aspect-square rounded-[2px] border border-oat shadow-md overflow-hidden bg-plaster">
              <Image
                src="/images/latte-vanah.webp"
                alt="Café Vanah cappuccino with dusted वनः cocoa stencil on stoneware"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Spacer Column 7 */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Right: Content (Cols 8–12) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Label (Maximum one per section) */}
            <div className="mb-4">
              <span className="text-[10.5px] font-sans uppercase tracking-[0.16em] text-ink-soft font-medium">
                BAKEHOUSE OPENS AT 8 AM
              </span>
            </div>

            {/* H2 in Newsreader Italic */}
            <h2 className="font-serif italic font-light text-[clamp(1.75rem,3.2vw,2.6rem)] text-ink leading-tight tracking-[-0.018em]">
              The first cup, from eight.
            </h2>

            {/* Body */}
            <p className="mt-5 text-[15px] font-sans text-ink-soft leading-[1.62]">
              Coffee pulled to order and finished with{" "}
              <span lang="sa" className="font-devanagari text-ink font-semibold text-[1.1em] tracking-[0.01em]">
                वनः
              </span>{" "}
              in cocoa. From the bakehouse, cakes and bakes made here every morning — the pound cake with a cappuccino is how a lot of our regulars start the day.
            </p>

            {/* Hairline Divider */}
            <div className="my-6 h-[1px] bg-oat" />

            {/* Three Pairs: Label above, serif below */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <span className="block text-[11px] font-sans uppercase tracking-[0.16em] text-ink-soft/70">
                  POUR
                </span>
                <span className="mt-1 block font-serif text-base sm:text-lg text-ink font-normal">
                  Cappuccino
                </span>
              </div>
              <div>
                <span className="block text-[11px] font-sans uppercase tracking-[0.16em] text-ink-soft/70">
                  BAKE
                </span>
                <span className="mt-1 block font-serif text-base sm:text-lg text-ink font-normal">
                  Pound cake
                </span>
              </div>
              <div>
                <span className="block text-[11px] font-sans uppercase tracking-[0.16em] text-ink-soft/70">
                  COOL
                </span>
                <span className="mt-1 block font-serif text-base sm:text-lg text-ink font-normal">
                  Guava cooler
                </span>
              </div>
            </div>

            {/* Link to Menu */}
            <div className="mt-8">
              <a
                href="#menu"
                className="font-serif italic text-[1.05rem] text-ink text-link-draw group inline-flex items-center gap-1.5"
              >
                <span>Coffee & bakes on the menu</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
