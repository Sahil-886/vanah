"use client";

import React, { useState } from "react";
import { Header } from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import { VanahStory } from "@/components/story/VanahStory";
import { CoffeeBakehouseSection } from "@/components/coffee/CoffeeBakehouseSection";
import { KitchenSection } from "@/components/kitchen/KitchenSection";
import { MenuSection } from "@/components/menu/MenuSection";
import { SpacesSection } from "@/components/spaces/SpacesSection";
import { ReviewsSection } from "@/components/reviews/ReviewsSection";
import { VisitSection } from "@/components/visit/VisitSection";
import { Footer } from "@/components/footer/Footer";
import { ReserveSheet } from "@/components/reservations/ReserveSheet";
import { AmbientBotanicalBg } from "@/components/common/AmbientBotanicalBg";

export default function Home() {
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const [reserveSeating, setReserveSeating] = useState<"Garden" | "Inside" | "Private room" | "Either">("Garden");
  const [reserveNote, setReserveNote] = useState("");

  const handleOpenReserve = (
    seating: "Garden" | "Inside" | "Private room" | "Either" = "Garden",
    note = ""
  ) => {
    setReserveSeating(seating);
    setReserveNote(note);
    setIsReserveOpen(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-limewash text-ink font-sans selection:bg-sage selection:text-[#EDE7DA] overflow-x-hidden">
      {/* Ambient Botanical Animated Background — stays fixed in background as you scroll */}
      <AmbientBotanicalBg />

      {/* 00 — Minimal Sticky Header */}
      <Header onOpenReserve={() => handleOpenReserve("Garden")} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-1">
        {/* 01 — Arrival (Hero: Architectural Photo + Scrim + Under the Trees) */}
        <Hero onOpenReserve={() => handleOpenReserve("Garden")} />

        {/* 02 — "Vanah (the idea)" — Story Section with Buddha fountain, pergola, real latte */}
        <VanahStory />

        {/* 03 — "Coffee & Bakehouse" — The first cup, from eight with real latte photo */}
        <CoffeeBakehouseSection />

        {/* 04 — "From the kitchen" — Seasonal plates */}
        <KitchenSection />

        {/* 05 — "The Menu" — Light botanical sage placemat, printed styling, Indian veg mark */}
        <MenuSection />

        {/* 06 — "The Spaces" — Three places to sit */}
        <SpacesSection
          onOpenEnquire={(seating) =>
            handleOpenReserve(seating, "Enquiring for private room / group celebration")
          }
        />

        {/* 07 — "What guests say" — 4.7★ from 1,499 Google reviews */}
        <ReviewsSection />

        {/* 08 — "Visit Us" — Interactive Google Maps embed + hours + directions */}
        <VisitSection onOpenReserve={() => handleOpenReserve("Garden")} />
      </main>

      {/* 09 — Enhanced Footer */}
      <Footer onOpenReserve={() => handleOpenReserve("Garden")} />

      {/* Lightweight Reservation Slideover */}
      <ReserveSheet
        isOpen={isReserveOpen}
        onClose={() => setIsReserveOpen(false)}
        defaultSeating={reserveSeating}
        defaultNote={reserveNote}
      />
    </div>
  );
}
