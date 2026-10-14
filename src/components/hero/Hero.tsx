"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import siteConfig from "../../../content/site";
import { LeafShadow } from "../common/LeafShadow";

export interface HeroProps {
  onOpenReserve: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReserve }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [openStatus, setOpenStatus] = useState({
    isOpen: true,
    text: "Open now · until 10 pm",
  });

  // Calculate IST open status dynamically
  useEffect(() => {
    setIsMounted(true);

    const updateStatus = () => {
      try {
        const now = new Date();
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const istOffset = 5.5 * 60 * 60000;
        const istDate = new Date(utc + istOffset);
        const hours = istDate.getHours();
        const minutes = istDate.getMinutes();
        const curTime = hours * 60 + minutes;

        // 8:00 am (480 min) to 10:00 pm (1320 min)
        if (curTime >= 480 && curTime < 1320) {
          setOpenStatus({
            isOpen: true,
            text: "Open now · until 10 pm",
          });
        } else {
          setOpenStatus({
            isOpen: false,
            text: "Closed now · opens at 8 am",
          });
        }
      } catch {
        // Fallback default
      }
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero-arrival"
      className="relative w-full min-h-[100svh] text-[#EDE7DA] overflow-hidden flex flex-col justify-between pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12"
    >
      {/* 1. Main Hero Architectural Photo with subtle slow zoom animation */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-exterior.webp"
          alt="Café Vanah — White cottage, sloped tiled roof, and silver oak trees on Baner–Aundh Road"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02] animate-hero-photo"
        />
        {/* Layered Cinematic Scrim for flawless contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#141713]/85 via-[#141713]/55 to-[#141713]/90 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#141713]/40 to-[#141713]/70 pointer-events-none" />
      </div>

      {/* 2. Dappled leaf shadow swaying gently across hero */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-30 mix-blend-multiply overflow-hidden">
        <LeafShadow variant="hero" />
      </div>

      {/* 3. Main Content Container */}
      <div className="relative z-20 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 w-full flex-1 flex flex-col justify-between">
        {/* Top Header Row with Location Label */}
        <div className="flex items-start justify-between">
          {/* Large Devanagari Wordmark (वनः) — Crisp Cream with strong text shadow */}
          <div
            className={`transition-all duration-700 ease-out ${
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[22px]"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <h1
              className="font-devanagari text-[#EDE7DA] leading-[0.85] select-none text-[clamp(3.5rem,10vw,8.5rem)] tracking-[0.02em] font-semibold drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]"
              lang="sa"
            >
              {siteConfig.wordmark}
            </h1>
          </div>

          {/* Top-Right Label */}
          <div
            className={`hidden sm:block text-right transition-all duration-700 ease-out ${
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[22px]"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <span className="text-[10.5px] font-sans uppercase tracking-[0.18em] text-[#EDE7DA] font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              BANER–AUNDH ROAD / PUNE
            </span>
          </div>
        </div>

        {/* Editorial Subheadline & Actions Row */}
        <div className="mt-auto pt-12 max-w-xl">
          <p
            className={`font-serif italic font-light text-[clamp(1.2rem,2.2vw,1.8rem)] leading-[1.28] tracking-[-0.018em] text-[#FAF6EE] drop-shadow-[0_3px_14px_rgba(0,0,0,0.9)] max-w-[22ch] transition-all duration-700 ease-out ${
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[22px]"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Crafted coffee, an artisanal bakehouse, and a vegetarian kitchen under the trees.
          </p>

          {/* Actions Row */}
          <div
            className={`mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6 transition-all duration-700 ease-out ${
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[22px]"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            {/* Reserve a table button */}
            <button
              type="button"
              onClick={onOpenReserve}
              className="bg-[#EDE7DA] text-[#1F211D] text-[14px] font-sans font-medium px-[22px] py-[14px] rounded-[2px] hover:bg-white hover:shadow-lg transition-all shadow-md"
            >
              Reserve a table
            </button>

            {/* See the menu link */}
            <a
              href="#menu"
              className="font-serif italic text-[1.05rem] text-[#EDE7DA] text-link-draw group inline-flex items-center gap-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
            >
              <span>See the menu</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Live IST Status indicator */}
            <div className="flex items-center gap-2 text-xs font-sans tracking-wide text-[#EDE7DA] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              <span
                className={`inline-block w-2.5 h-2.5 rounded-full ${
                  openStatus.isOpen ? "bg-[#88A870] animate-pulse" : "bg-[#D6C8B0]"
                }`}
              />
              <span className="font-medium">{openStatus.text}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
