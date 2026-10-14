"use client";

import React from "react";
import siteConfig from "../../../content/site";
import menuData from "../../../content/menu";

export const MenuSection: React.FC = () => {
  return (
    <section
      id="menu"
      className="relative z-20 w-full texture-marble clip-roofline py-12 sm:py-18 lg:py-24 px-4 sm:px-8 lg:px-10 border-b border-oat overflow-hidden"
    >
      <div className="max-w-[1000px] mx-auto">
        {/* The Sage Linen Placemat — Light, fresh botanical sage green */}
        <div
          className="relative bg-[#6E886C] texture-linen text-[#F8F5EE] p-5 sm:p-8 lg:p-11 rounded-[2px] shadow-[0_24px_50px_-25px_rgba(31,33,29,0.3)] border border-[#F8F5EE]/30 transform-none lg:-rotate-[0.5deg]"
        >
          {/* Inset Hairline Border (12px on mobile) */}
          <div className="absolute inset-3 sm:inset-4 border border-[#F8F5EE]/30 pointer-events-none rounded-[1px]" />

          {/* Botanical Sprig Corners: Scaled down on mobile */}
          <svg
            viewBox="0 0 100 100"
            className="absolute top-4 left-4 sm:top-5 sm:left-5 w-8 h-8 sm:w-12 sm:h-12 text-[#F8F5EE]/40 pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <path d="M 15 85 Q 25 45, 65 20 M 35 48 Q 45 40, 52 44 M 45 36 Q 40 25, 34 28 M 55 26 Q 62 18, 58 14" />
          </svg>
          <svg
            viewBox="0 0 100 100"
            className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 w-8 h-8 sm:w-12 sm:h-12 text-[#F8F5EE]/40 pointer-events-none rotate-180"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <path d="M 15 85 Q 25 45, 65 20 M 35 48 Q 45 40, 52 44 M 45 36 Q 40 25, 34 28 M 55 26 Q 62 18, 58 14" />
          </svg>

          {/* Placemat Header Centred */}
          <div className="text-center mb-8 sm:mb-11">
            <span lang="sa" className="font-devanagari text-xl sm:text-2xl text-[#F8F5EE] block mb-1.5 font-bold tracking-wide drop-shadow-sm">
              {siteConfig.wordmark}
            </span>
            <h2 className="font-serif italic font-light text-xl sm:text-3xl lg:text-4xl text-[#F8F5EE] tracking-tight">
              Menu
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm md:text-base font-sans text-[#F8F5EE]/90 max-w-md mx-auto">
              A preview of the menu. The full list, with prices, is on AirMenus.
            </p>
          </div>

          {/* Two-Column Printed Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
            {/* Column 1: Coffee & Coolers + Bakehouse */}
            <div className="space-y-10">
              {/* Category 1: Coffee & Coolers */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="font-sans text-[12px] uppercase tracking-[0.2em] text-[#F8F5EE]/80 font-medium shrink-0">
                    COFFEE & COOLERS
                  </h3>
                  <div className="flex-1 h-[1px] bg-[#F8F5EE]/25" />
                </div>
                <div className="space-y-5">
                  {menuData.categories[0].items.map((item) => (
                    <MenuItemRow key={item.name} item={item} />
                  ))}
                </div>
              </div>

              {/* Category 2: Bakehouse */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="font-sans text-[12px] uppercase tracking-[0.2em] text-[#F8F5EE]/80 font-medium shrink-0">
                    BAKEHOUSE
                  </h3>
                  <div className="flex-1 h-[1px] bg-[#F8F5EE]/25" />
                </div>
                <div className="space-y-5">
                  {menuData.categories[1].items.map((item) => (
                    <MenuItemRow key={item.name} item={item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Kitchen + Good to know */}
            <div className="space-y-10">
              {/* Category 3: Kitchen */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="font-sans text-[12px] uppercase tracking-[0.2em] text-[#F8F5EE]/80 font-medium shrink-0">
                    KITCHEN
                  </h3>
                  <div className="flex-1 h-[1px] bg-[#F8F5EE]/25" />
                </div>
                <div className="space-y-5">
                  {menuData.categories[2].items.map((item) => (
                    <MenuItemRow key={item.name} item={item} />
                  ))}
                </div>
              </div>

              {/* Good to know Notice */}
              <div className="p-5 bg-[#F8F5EE]/10 border border-[#F8F5EE]/20 rounded-[2px]">
                <h4 className="font-sans text-[11.5px] uppercase tracking-[0.16em] text-[#F8F5EE]/90 font-medium mb-1.5">
                  GOOD TO KNOW
                </h4>
                <p className="text-sm font-sans text-[#F8F5EE]/85 leading-relaxed">
                  {menuData.note}
                </p>
              </div>
            </div>
          </div>

          {/* Footer Row */}
          <div className="mt-11 sm:mt-14 pt-6 border-t border-[#F8F5EE]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs sm:text-sm font-sans text-[#F8F5EE]/90 text-center sm:text-left">
              Ordering for pickup or delivery? Order direct from the café.
            </p>
            <a
              href={siteConfig.ordering.airmenusUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center font-serif italic text-base sm:text-lg text-[#F8F5EE] text-link-draw group inline-flex items-center justify-center gap-1.5 py-2.5 sm:py-1 min-h-[44px]"
            >
              <span>Order on AirMenus</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const MenuItemRow: React.FC<{ item: any }> = ({ item }) => {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="flex items-center gap-2">
          {/* Indian Vegetarian Mark: 12px square outline with filled dot */}
          <div className="w-3 h-3 border border-[#C5D9AE] flex items-center justify-center shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C5D9AE]" />
          </div>
          <span className="font-serif text-[1.05rem] sm:text-[1.15rem] text-[#F8F5EE] font-normal tracking-tight">
            {item.name}
          </span>
        </div>
        {item.vegan && (
          <span className="text-[10px] font-sans uppercase tracking-[0.14em] text-[#F8F5EE]/80 border border-[#F8F5EE]/40 px-1.5 py-[1px] rounded-[1px] shrink-0 font-medium">
            VEGAN
          </span>
        )}
      </div>
      <p className="mt-1 pl-[20px] text-[13px] sm:text-sm font-sans text-[#F8F5EE]/85 leading-relaxed">
        {item.description}
      </p>
    </div>
  );
};
