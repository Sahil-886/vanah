"use client";

import React from "react";
import siteConfig from "../../../content/site";

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      className="relative z-20 w-full bg-sage-deep texture-linen text-line py-18 sm:py-24 lg:py-28 px-5 sm:px-8 lg:px-10 border-b border-line/15 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Huge Rating & Stars (Cols 1–5) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="font-serif font-light text-line leading-none text-[clamp(3.5rem,12vw,6.5rem)] tracking-tight">
              4.7
            </span>

            {/* Five Line-Drawn Stars in Soft Gold #E3C98F — 5th star 70% filled for accurate 4.7 */}
            <div className="mt-3 sm:mt-4 flex items-center gap-2">
              <svg className="sr-only">
                <defs>
                  <clipPath id="star-partial-clip">
                    <rect x="0" y="0" width="16.8" height="24" />
                  </clipPath>
                </defs>
              </svg>

              {[0, 1, 2, 3].map((i) => (
                <svg
                  key={i}
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="#E3C98F"
                  stroke="#E3C98F"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}

              {/* 5th star: Outline background with 70% filled foreground */}
              <div className="relative w-[22px] height-[22px] shrink-0">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E3C98F"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <div className="absolute inset-0 overflow-hidden w-[70%]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="#E3C98F"
                    stroke="#E3C98F"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              </div>
            </div>

            <p className="mt-3 text-xs sm:text-sm font-sans uppercase tracking-[0.16em] text-line/75">
              on Google · {siteConfig.google.reviewsCount.toLocaleString()} reviews
            </p>
          </div>

          {/* Spacer Column 6 */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Right: Guest Praise & Link (Cols 7–12) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="font-serif italic font-light text-[clamp(1.3rem,2.2vw,1.8rem)] text-line leading-[1.3] tracking-[-0.015em]">
              Guests write about the calm and the greenery, the ravioli and the cookie dough cheesecake — and about staff who know the menu well.
            </p>

            <div className="mt-6">
              <a
                href={siteConfig.google.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif italic text-[1.05rem] text-line text-link-draw group inline-flex items-center gap-1.5"
              >
                <span>Read the reviews on Google</span>
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
