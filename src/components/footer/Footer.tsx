"use client";

import React from "react";
import siteData from "../../../content/site.json";
import { Cottage, LeafSprig, Fern, CoffeeCup } from "../lineart";

/**
 * Enhanced Footer (Section 6)
 * - Warm sage-deep background with botanical grain
 * - Three-column layout: Brand + Navigation + Contact
 * - Instagram feed mention
 * - Pure vegetarian badge
 * - Built with love attribution
 */
export interface FooterProps {
  onOpenReserve?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReserve }) => {
  const currentYear = 2026;

  return (
    <footer className="relative bg-[#3A4A39] text-[#EDE7DA] overflow-hidden border-t border-[#EDE7DA]/20">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-multiply bg-[radial-gradient(#141713_1.5px,transparent_1.5px)] [background-size:8px_8px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-baseline gap-2.5 mb-4">
              <span lang="sa" className="font-devanagari text-2xl font-bold text-[#EDE7DA] tracking-wide">
                {siteData.wordmark}
              </span>
              <span className="text-[11.5px] font-sans tracking-[0.2em] text-[#EDE7DA]/80 uppercase font-medium">
                Café Vanah
              </span>
            </div>
            <p className="text-[13px] font-sans text-[#EDE7DA]/85 leading-relaxed max-w-xs">
              A pure-vegetarian café, bakehouse and conscious dining sanctuary under the trees on Baner–Aundh Road, Pune.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <Fern className="w-5 h-7 text-[#EDE7DA]/75" draw={false} strokeWidth={1.2} />
              <div className="flex items-center gap-1.5 text-[11px] font-sans text-[#EDE7DA]/85 tracking-[0.14em] uppercase font-medium">
                <div className="w-3.5 h-3.5 border border-[#EDE7DA]/80 rounded-[1px] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EDE7DA]" />
                </div>
                <span>Pure Vegetarian</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-[11.5px] font-sans uppercase tracking-[0.2em] text-[#EDE7DA]/80 mb-4 font-semibold">
              Explore
            </h4>
            <nav className="flex flex-col gap-3">
              <a href="#hero-arrival" className="text-[14px] font-sans text-[#EDE7DA]/90 hover:text-white transition-colors py-0.5">
                Home
              </a>
              <a href="#vanah-story" className="text-[14px] font-sans text-[#EDE7DA]/90 hover:text-white transition-colors py-0.5">
                The Idea
              </a>
              <a href="#menu" className="text-[14px] font-sans text-[#EDE7DA]/90 hover:text-white transition-colors py-0.5">
                Menu
              </a>
              <a href="#spaces" className="text-[14px] font-sans text-[#EDE7DA]/90 hover:text-white transition-colors py-0.5">
                Spaces & Garden
              </a>
              <a href="#visit" className="text-[14px] font-sans text-[#EDE7DA]/90 hover:text-white transition-colors py-0.5">
                Visit
              </a>
              <a
                href={siteData.ordering.airmenusUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-sans text-[#EDE7DA]/90 hover:text-white transition-colors py-0.5"
              >
                Order Online ↗
              </a>
            </nav>
          </div>

          {/* Column 3: Hours */}
          <div>
            <h4 className="text-[11.5px] font-sans uppercase tracking-[0.2em] text-[#EDE7DA]/80 mb-4 font-semibold">
              Hours & Location
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2.5">
                <CoffeeCup className="w-5 h-5 text-[#EDE7DA]/75 shrink-0 mt-0.5" draw={false} strokeWidth={1.2} />
                <div>
                  <p className="text-[14px] font-sans text-[#EDE7DA]/90">
                    {siteData.hours.display}
                  </p>
                  <p className="text-[12px] font-sans text-[#EDE7DA]/75 mt-0.5">
                    Bakehouse from {siteData.hours.bakehouseOpen}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Cottage className="w-6 h-4 text-[#EDE7DA]/75 shrink-0 mt-1" draw={false} strokeWidth={1.2} />
                <address className="not-italic text-[14px] font-sans text-[#EDE7DA]/90 leading-relaxed">
                  {siteData.address.short}
                  <br />
                  <a
                    href={siteData.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] text-[#EDE7DA] hover:underline underline-offset-2 decoration-[#EDE7DA]/50 transition-colors inline-block mt-1 font-medium"
                  >
                    Get directions →
                  </a>
                </address>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <h4 className="text-[11.5px] font-sans uppercase tracking-[0.2em] text-[#EDE7DA]/80 mb-4 font-semibold">
              Connect
            </h4>
            <div className="space-y-3.5">
              <a
                href={`tel:${siteData.contact.phoneRaw}`}
                className="flex items-center gap-2.5 text-[14px] font-sans text-[#EDE7DA]/90 hover:text-white transition-colors py-1 min-h-[44px]"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#EDE7DA]/80">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {siteData.contact.phone}
              </a>
              <a
                href={siteData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[14px] font-sans text-[#EDE7DA]/90 hover:text-white transition-colors py-1 min-h-[44px]"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-[#EDE7DA]/80">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 0 1-4.29-1.24l-.31-.18-3.12.82.83-3.04-.2-.32A8 8 0 1 1 12 20z" />
                </svg>
                WhatsApp
              </a>
              <a
                href={siteData.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[14px] font-sans text-[#EDE7DA]/90 hover:text-white transition-colors py-1 min-h-[44px]"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#EDE7DA]/80">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                {siteData.social.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-[#EDE7DA]/20">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-sans text-[#EDE7DA]/80 tracking-wide">
          <div className="flex items-center gap-2">
            <LeafSprig className="w-4 h-4 text-[#EDE7DA]/70" draw={false} strokeWidth={1.2} />
            <span>© {currentYear} Café Vanah. All rights reserved.</span>
          </div>
          <span className="text-center text-[#EDE7DA]/80">
            Crafted Coffee · Artisanal Bakehouse · Conscious Dining
          </span>
        </div>
      </div>
    </footer>
  );
};
