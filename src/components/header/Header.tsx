"use client";

import React, { useState, useEffect } from "react";
import siteConfig from "../../../content/site";

export interface HeaderProps {
  onOpenReserve: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenReserve }) => {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero is 100svh
      const heroThreshold = window.innerHeight * 0.85;
      setIsScrolledPastHero(window.scrollY > heroThreshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile explore sheet is open
  useEffect(() => {
    if (isExploreOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isExploreOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-350 ease-out pt-[env(safe-area-inset-top,0px)] ${
          isScrolledPastHero
            ? "bg-limewash/96 border-b border-oat text-ink shadow-sm"
            : "bg-transparent text-[#EDE7DA]"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 h-[52px] min-[900px]:h-16 flex items-center justify-between">
          {/* Left: Devanagari Wordmark (Fades in once scrolled past hero) */}
          <div className="flex items-center">
            <a
              href="#hero-arrival"
              className={`font-devanagari text-xl sm:text-[26px] transition-opacity duration-300 ${
                isScrolledPastHero ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              lang="sa"
            >
              {siteConfig.wordmark}
            </a>
          </div>

          {/* Desktop Navigation (Visible >= 900px) */}
          <nav className="hidden min-[900px]:flex items-center gap-6 text-[13px] font-sans tracking-wide">
            <a
              href="#coffee"
              className={`transition-opacity ${isScrolledPastHero ? "hover:opacity-75" : "hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"}`}
            >
              Coffee
            </a>
            <a
              href="#kitchen"
              className={`transition-opacity ${isScrolledPastHero ? "hover:opacity-75" : "hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"}`}
            >
              Kitchen
            </a>
            <a
              href="#menu"
              className={`transition-opacity ${isScrolledPastHero ? "hover:opacity-75" : "hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"}`}
            >
              Menu
            </a>
            <a
              href="#spaces"
              className={`transition-opacity ${isScrolledPastHero ? "hover:opacity-75" : "hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"}`}
            >
              Spaces
            </a>
            <a
              href="#visit"
              className={`transition-opacity ${isScrolledPastHero ? "hover:opacity-75" : "hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"}`}
            >
              Visit
            </a>

            {/* Square Outlined Reserve Button */}
            <button
              type="button"
              onClick={onOpenReserve}
              className={`px-4 py-1.5 border text-[13px] font-sans tracking-wide transition-all rounded-[2px] min-h-[44px] flex items-center justify-center ${
                isScrolledPastHero
                  ? "border-ink text-ink hover:bg-ink hover:text-limewash"
                  : "border-[#EDE7DA] text-[#EDE7DA] hover:bg-[#EDE7DA] hover:text-[#1F211D] shadow-sm drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]"
              }`}
            >
              Reserve
            </button>
          </nav>

          {/* Mobile Actions (< 900px) */}
          <div className="flex min-[900px]:hidden items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setIsExploreOpen(true)}
              className={`text-[13px] font-sans tracking-wider uppercase px-2.5 py-1.5 min-h-[44px] min-w-[44px] inline-flex items-center justify-center ${
                isScrolledPastHero ? "" : "text-[#EDE7DA] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
              }`}
            >
              Explore
            </button>
            <button
              type="button"
              onClick={onOpenReserve}
              className={`px-3.5 py-1.5 border text-xs font-sans tracking-wide rounded-[2px] transition-all min-h-[44px] inline-flex items-center justify-center ${
                isScrolledPastHero
                  ? "border-ink text-ink hover:bg-ink hover:text-limewash"
                  : "border-[#EDE7DA] text-[#EDE7DA] hover:bg-[#EDE7DA] hover:text-[#1F211D] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
              }`}
            >
              Reserve
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Sage Linen Explore Sheet for Mobile */}
      {isExploreOpen && (
        <div className="fixed inset-0 z-50 bg-sage texture-linen text-line flex flex-col justify-between p-6 sm:p-10 animate-fadeIn">
          {/* Top Bar with Close */}
          <div className="flex items-center justify-between border-b border-line/20 pb-4">
            <span lang="sa" className="font-devanagari text-2xl text-line">
              {siteConfig.wordmark}
            </span>
            <button
              type="button"
              onClick={() => setIsExploreOpen(false)}
              className="w-10 h-10 flex items-center justify-center border border-line/40 text-line rounded-[2px]"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-5 my-auto py-6">
            <a
              href="#vanah-story"
              onClick={() => setIsExploreOpen(false)}
              className="font-serif italic text-2xl sm:text-3xl text-line hover:opacity-80 transition-opacity"
            >
              The idea
            </a>
            <a
              href="#coffee"
              onClick={() => setIsExploreOpen(false)}
              className="font-serif italic text-3xl sm:text-4xl text-line hover:opacity-80 transition-opacity"
            >
              Coffee & bakehouse
            </a>
            <a
              href="#kitchen"
              onClick={() => setIsExploreOpen(false)}
              className="font-serif italic text-3xl sm:text-4xl text-line hover:opacity-80 transition-opacity"
            >
              The kitchen
            </a>
            <a
              href="#menu"
              onClick={() => setIsExploreOpen(false)}
              className="font-serif italic text-3xl sm:text-4xl text-line hover:opacity-80 transition-opacity"
            >
              Menu
            </a>
            <a
              href="#spaces"
              onClick={() => setIsExploreOpen(false)}
              className="font-serif italic text-3xl sm:text-4xl text-line hover:opacity-80 transition-opacity"
            >
              Spaces
            </a>
            <a
              href="#visit"
              onClick={() => setIsExploreOpen(false)}
              className="font-serif italic text-3xl sm:text-4xl text-line hover:opacity-80 transition-opacity"
            >
              Visit
            </a>
          </nav>

          {/* Footer Info */}
          <div className="border-t border-line/20 pt-4 text-xs font-sans text-line/70 leading-relaxed">
            <p>{siteConfig.address.full}</p>
            <p className="mt-1">{siteConfig.hours.display}</p>
          </div>
        </div>
      )}
    </>
  );
};
