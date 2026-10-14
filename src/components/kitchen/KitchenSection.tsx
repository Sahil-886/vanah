"use client";

import React from "react";
import { ImageSlot } from "../common/ImageSlot";
import { DishIllustration } from "./DishIllustrations";

interface DishItem {
  id: string;
  title: string;
  description: string;
}

const dishes: DishItem[] = [
  {
    id: "dish-ravioli",
    title: "Ravioli",
    description: "In a pale cream sauce, with nasturtium leaves from the garden.",
  },
  {
    id: "dish-kalari",
    title: "Kothimbir kalari",
    description: "A house signature, and one of the most-mentioned plates.",
  },
  {
    id: "dish-guacamole",
    title: "Guacamole",
    description: "Built tall and fresh, made for the middle of the table.",
  },
  {
    id: "dish-squash",
    title: "Roasted squash",
    description: "Soft and seasonal, finished with herbs.",
  },
  {
    id: "dish-chocolate",
    title: "Chocolate cake",
    description: "Glossy dark chocolate with fresh strawberries.",
  },
  {
    id: "dish-cheesecake",
    title: "Cookie dough cheesecake",
    description: "The dessert people come back for.",
  },
];

export const KitchenSection: React.FC = () => {
  return (
    <section
      id="kitchen"
      className="relative z-20 w-full bg-limewash py-12 sm:py-18 lg:py-24 px-5 sm:px-8 lg:px-10 border-b border-oat overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10 sm:mb-12">
          <div>
            <span className="text-[10.5px] font-sans uppercase tracking-[0.16em] text-ink-soft font-medium mb-2.5 block">
              SEASONAL PLATES
            </span>
            <h2 className="font-serif italic font-light text-[clamp(1.75rem,3.4vw,3rem)] text-ink leading-tight tracking-[-0.018em]">
              From the kitchen
            </h2>
          </div>
          <p className="max-w-md text-[15px] font-sans text-ink-soft leading-[1.62]">
            Modern Indian and fusion, all vegetarian. These are the plates guests write about most.
          </p>
        </div>

        {/* Desktop 3-Column Grid with Middle Column Offset Down ~6vw */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-10 items-start">
          {/* Column 1 (Dishes 0 & 3) */}
          <div className="space-y-10">
            {[dishes[0], dishes[3]].map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>

          {/* Column 2 (Dishes 1 & 4) — Offset Down ~6vw */}
          <div className="space-y-10 md:mt-[6vw]">
            {[dishes[1], dishes[4]].map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>

          {/* Column 3 (Dishes 2 & 5) */}
          <div className="space-y-10">
            {[dishes[2], dishes[5]].map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        </div>

        {/* Mobile Horizontal Scroll-Snap Strip */}
        <div className="md:hidden -mx-5 px-5 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-5 scrollbar-none">
          {dishes.map((dish) => (
            <div key={dish.id} className="w-[70vw] shrink-0 snap-center">
              <DishCard dish={dish} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DishCard: React.FC<{ dish: DishItem }> = ({ dish }) => {
  return (
    <div className="group">
      <div className="overflow-hidden rounded-[2px] border border-oat bg-plaster shadow-none">
        {/* TODO(owner): replace AI placeholder image with real photo */}
        <ImageSlot
          id={dish.id}
          alt={dish.title}
          aspect="aspect-[4/5]"
          fallback={<DishIllustration id={dish.id} />}
        />
      </div>
      <div className="mt-3">
        <h3 className="font-serif text-lg sm:text-xl text-ink font-normal tracking-tight">
          {dish.title}
        </h3>
        <p className="mt-1 text-[14px] sm:text-[15px] font-sans text-ink-soft leading-relaxed not-italic">
          {dish.description}
        </p>
      </div>
    </div>
  );
};
