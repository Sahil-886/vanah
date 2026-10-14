"use client";

import React, { useState } from "react";
import siteConfig from "../../../content/site";
import { Cottage, LeafSprig, CoffeeCup } from "../lineart";

export interface VisitSectionProps {
  onOpenReserve?: () => void;
}

export const VisitSection: React.FC<VisitSectionProps> = ({ onOpenReserve }) => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  return (
    <section
      id="visit"
      className="relative z-20 w-full bg-limewash py-12 sm:py-16 lg:py-22 px-5 sm:px-8 lg:px-10 border-b border-oat overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-2 text-[10.5px] font-sans uppercase tracking-[0.16em] text-ink-soft">
            <span className="w-5 h-[1px] bg-oat" />
            <span>VISIT US</span>
            <span className="w-5 h-[1px] bg-oat" />
          </div>
          <h2 className="font-serif italic font-light text-[clamp(1.6rem,3.2vw,2.6rem)] text-ink leading-tight tracking-[-0.018em]">
            Find us under the trees
          </h2>
          <p className="mt-2.5 text-[15px] font-sans text-ink-soft max-w-lg mx-auto leading-relaxed">
            On Baner–Aundh Road, in the quiet of Sanewadi — just past the silver oak canopy.
          </p>
        </div>

        {/* Responsive Two-Column Grid: On mobile, Info + Actions on top, Map below */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-11 items-start">
          {/* Map Container: On mobile order-2, on desktop order-1 */}
          <div className="order-2 lg:order-1 relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-[3px] overflow-hidden border border-oat bg-plaster shadow-sm">
            {isMapLoaded ? (
              <iframe
                title="Café Vanah location on Google Maps"
                src="https://maps.google.com/maps?q=Caf%C3%A9+Vanah+Baner+Aundh+Road+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              /* Styled Static Sage Linen Placeholder (saves ~1MB data & prevents touch scroll hijacking) */
              <div className="absolute inset-0 bg-[#5F755E] texture-linen flex flex-col items-center justify-center p-6 text-center text-[#F8F5EE]">
                <div className="w-14 h-14 rounded-full bg-[#F8F5EE]/15 flex items-center justify-center mb-3">
                  <Cottage className="w-8 h-6 text-[#F8F5EE]" draw={false} strokeWidth={1.3} />
                </div>
                <h4 className="font-serif italic text-xl text-[#F8F5EE] tracking-tight">
                  Café Vanah
                </h4>
                <p className="mt-1 text-xs font-sans text-[#F8F5EE]/80 max-w-xs">
                  Baner–Aundh Road, Sanewadi, Pune
                </p>

                <button
                  type="button"
                  onClick={() => setIsMapLoaded(true)}
                  className="mt-4 px-6 py-3 bg-[#F8F5EE] text-[#1F211D] text-xs font-sans uppercase tracking-[0.16em] font-medium rounded-[2px] shadow-md hover:bg-white transition-all min-h-[44px] flex items-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                    <line x1="8" y1="2" x2="8" y2="18" />
                    <line x1="16" y1="6" x2="16" y2="22" />
                  </svg>
                  <span>Open interactive map</span>
                </button>
              </div>
            )}

            {/* External Google Maps Button */}
            <a
              href={siteConfig.address.googleMapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-ink/90 text-[#EDE7DA] text-[11px] font-sans uppercase tracking-[0.14em] rounded-[2px] hover:bg-ink transition-colors shadow-sm min-h-[44px]"
            >
              Open in Maps ↗
            </a>
          </div>

          {/* Visit Info Cards: On mobile order-1, on desktop order-2 */}
          <div className="order-1 lg:order-2 flex flex-col gap-5 sm:gap-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <Cottage className="w-8 h-6 text-sage shrink-0 mt-1" draw={false} strokeWidth={1.2} />
              <div>
                <h3 className="font-serif text-lg sm:text-xl text-ink tracking-tight mb-1">
                  Address
                </h3>
                <address className="not-italic text-[15px] sm:text-base font-sans text-ink-soft leading-relaxed">
                  {siteConfig.address.full}
                </address>
                <a
                  href={siteConfig.address.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-flex items-center gap-1 text-[13px] font-sans text-sage hover:text-sage-deep transition-colors underline underline-offset-2 decoration-sage/40"
                >
                  Get directions on Google Maps →
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <CoffeeCup className="w-6 h-6 text-crema shrink-0 mt-1" draw={false} strokeWidth={1.2} />
              <div>
                <h3 className="font-serif text-lg sm:text-xl text-ink tracking-tight mb-1">
                  Hours
                </h3>
                <p className="text-[15px] sm:text-base font-sans text-ink-soft leading-relaxed">
                  {siteConfig.hours.display}
                </p>
                <div className="mt-1.5 flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-sans text-ink-soft">
                  <span className="flex items-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-crema" />
                    Bakehouse opens {siteConfig.hours.bakehouseOpen}
                  </span>
                  <span className="text-oat">·</span>
                  <span>Kitchen closes at 10:00 pm</span>
                </div>
              </div>
            </div>

            {/* Contact Channels (3-up row on touch, each >= 44px) */}
            <div className="flex items-start gap-4">
              <LeafSprig className="w-6 h-6 text-leaf shrink-0 mt-1" draw={false} strokeWidth={1.2} />
              <div className="w-full">
                <h3 className="font-serif text-lg sm:text-xl text-ink tracking-tight mb-2">
                  Get in Touch
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 border border-oat rounded-[2px] text-xs font-sans text-ink hover:border-sage hover:text-sage transition-colors min-h-[44px]"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span>{siteConfig.contact.phone}</span>
                  </a>
                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 bg-sage text-line rounded-[2px] text-xs font-sans hover:bg-sage-deep transition-colors min-h-[44px]"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 0 1-4.29-1.24l-.31-.18-3.12.82.83-3.04-.2-.32A8 8 0 1 1 12 20z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={siteConfig.social.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 border border-oat rounded-[2px] text-xs font-sans text-ink hover:border-sage hover:text-sage transition-colors min-h-[44px]"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                    <span>{siteConfig.social.instagramHandle}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons: Full width Get Directions on mobile */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={siteConfig.address.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sage text-line text-[14px] font-sans font-medium px-5 py-3 rounded-[2px] hover:bg-sage-deep transition-colors text-center min-h-[44px] flex items-center justify-center"
              >
                Get directions
              </a>

              {onOpenReserve && (
                <button
                  type="button"
                  onClick={onOpenReserve}
                  className="font-serif italic text-[1.05rem] text-ink text-link-draw group inline-flex items-center justify-center gap-1.5 py-2 min-h-[44px]"
                >
                  <span>Reserve a table</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              )}
            </div>

            {/* Pure Vegetarian Notice */}
            <div className="flex items-center gap-3 text-xs font-sans text-ink-soft pt-1">
              <div className="w-3.5 h-3.5 border-2 border-leaf rounded-[1px] flex items-center justify-center shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-leaf" />
              </div>
              <span>
                Pure Vegetarian · No meat, poultry, or seafood served at Café Vanah
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
