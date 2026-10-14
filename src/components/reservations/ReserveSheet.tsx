"use client";

import React, { useState, useEffect, useRef } from "react";
import siteConfig from "../../../content/site";
import { CoffeeCup } from "../lineart/CoffeeCup";

export interface ReserveSheetProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSeating?: "Garden" | "Inside" | "Private room" | "Either";
  defaultNote?: string;
}

export const ReserveSheet: React.FC<ReserveSheetProps> = ({
  isOpen,
  onClose,
  defaultSeating = "Garden",
  defaultNote = "",
}) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  // Form State
  const [name, setName] = useState("");
  const [date, setDate] = useState("2026-10-14");
  const [minDate, setMinDate] = useState("2026-10-14");
  const [time, setTime] = useState("13:00");
  const [guests, setGuests] = useState("2");
  const [seating, setSeating] = useState<"Garden" | "Inside" | "Private room" | "Either">(defaultSeating);
  const [note, setNote] = useState(defaultNote);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Set today's date on mount safely on client
  useEffect(() => {
    try {
      const today = new Date().toISOString().split("T")[0];
      setDate(today);
      setMinDate(today);
    } catch {
      // safe fallback
    }
  }, []);

  // Synchronize dialog open/close
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
      setIsSubmitted(false);
      if (defaultSeating) setSeating(defaultSeating);
      if (defaultNote) setNote(defaultNote);
      document.body.style.overflow = "hidden";
    } else {
      if (dialog.open) {
        dialog.close();
      }
      document.body.style.overflow = "";
    }
  }, [isOpen, defaultSeating, defaultNote]);

  // Handle Escape and outside backdrop click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format readable date e.g. "Wed 14 Oct"
    let formattedDate = date;
    try {
      const d = new Date(date + "T00:00:00");
      formattedDate = d.toLocaleDateString("en-IN", {
        weekday: "short",
        day: "numeric",
        month: "short",
      });
    } catch {
      formattedDate = date;
    }

    // Format readable time e.g. "1:00 pm"
    let formattedTime = time;
    try {
      const [h, m] = time.split(":").map(Number);
      const ampm = h >= 12 ? "pm" : "am";
      const h12 = h % 12 || 12;
      formattedTime = `${h12}:${m === 0 ? "00" : m} ${ampm}`;
    } catch {
      formattedTime = time;
    }

    const message = [
      "Hello Café Vanah! I'd like to reserve a table.",
      `• Name: ${name || "Guest"}`,
      `• Date: ${formattedDate}`,
      `• Time: ${formattedTime}`,
      `• Guests: ${guests}`,
      `• Seating: ${seating}`,
      note ? `• Note: ${note}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/919145561515?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsSubmitted(true);
  };

  const timeOptions = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
    "20:00", "20:30", "21:00", "21:30",
  ];

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      className="backdrop:bg-ink/50 backdrop:backdrop-blur-none p-0 bg-transparent m-0 max-w-none max-h-none w-full h-full fixed inset-0 z-50 overflow-hidden"
    >
      <div className="w-full h-full flex justify-end items-end md:items-stretch">
        <div className="w-full md:w-[520px] max-h-[92vh] md:max-h-full h-auto md:h-full bg-limewash text-ink flex flex-col shadow-2xl border-l border-oat overflow-y-auto">
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-oat flex items-center justify-between shrink-0">
            <div>
              <div className="flex items-center gap-2">
                <span lang="sa" className="font-devanagari text-2xl text-ink">
                  {siteConfig.wordmark}
                </span>
                <span className="text-[11.5px] font-sans uppercase tracking-[0.16em] text-ink-soft">
                  Table Reservation
                </span>
              </div>
              <p className="mt-1 text-sm font-sans text-ink-soft">
                Reserve your table under the trees
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close reservation sheet"
              className="w-9 h-9 flex items-center justify-center border border-oat text-ink hover:border-sage hover:text-sage transition-colors rounded-[2px]"
            >
              ✕
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8 flex-1">
            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <CoffeeCup className="w-12 h-12 text-sage mb-4" strokeWidth={1.2} />
                <h3 className="font-serif italic text-2xl text-ink font-light">
                  Almost there.
                </h3>
                <p className="mt-3 text-sm font-sans text-ink-soft max-w-xs leading-relaxed">
                  Your message is ready in WhatsApp — just press send, and the café will confirm your table.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-8 px-6 py-3 bg-sage text-line text-sm font-sans tracking-wide rounded-[2px] hover:bg-sage-deep transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="reserve-name" className="block text-[11.5px] font-sans uppercase tracking-[0.16em] text-ink-soft mb-2">
                    Your Name
                  </label>
                  <input
                    id="reserve-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-b border-oat py-2 text-ink text-base font-sans focus:outline-none focus:border-sage transition-colors placeholder:text-ink-soft/40"
                  />
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="reserve-date" className="block text-[11.5px] font-sans uppercase tracking-[0.16em] text-ink-soft mb-2">
                      Date
                    </label>
                    <input
                      id="reserve-date"
                      type="date"
                      required
                      min={minDate}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-transparent border-b border-oat py-2 text-ink text-base font-sans focus:outline-none focus:border-sage transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="reserve-time" className="block text-[11.5px] font-sans uppercase tracking-[0.16em] text-ink-soft mb-2">
                      Time
                    </label>
                    <select
                      id="reserve-time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-transparent border-b border-oat py-2 text-ink text-base font-sans focus:outline-none focus:border-sage transition-colors cursor-pointer"
                    >
                      {timeOptions.map((t) => (
                        <option key={t} value={t} className="bg-limewash text-ink">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-[11.5px] font-sans uppercase tracking-[0.16em] text-ink-soft mb-2">
                    Guests
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["1", "2", "3", "4", "5", "6", "7", "8+"].map((g) => (
                      <button
                        type="button"
                        key={g}
                        onClick={() => setGuests(g)}
                        className={`w-10 h-10 border text-sm font-sans flex items-center justify-center transition-colors rounded-[2px] ${
                          guests === g
                            ? "bg-sage text-line border-sage"
                            : "border-oat text-ink hover:border-sage"
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Seating Preference */}
                <div>
                  <label className="block text-[11.5px] font-sans uppercase tracking-[0.16em] text-ink-soft mb-2">
                    Seating Area
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {(["Garden", "Inside", "Private room", "Either"] as const).map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setSeating(s)}
                        className={`px-3.5 py-2 border text-xs font-sans tracking-wide transition-colors rounded-[2px] ${
                          seating === s
                            ? "bg-sage text-line border-sage"
                            : "border-oat text-ink hover:border-sage"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Note */}
                <div>
                  <label htmlFor="reserve-note" className="block text-[11.5px] font-sans uppercase tracking-[0.16em] text-ink-soft mb-2">
                    Special Requests
                  </label>
                  <input
                    id="reserve-note"
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="A birthday, a high chair, an allergy…"
                    className="w-full bg-transparent border-b border-oat py-2 text-ink text-sm font-sans focus:outline-none focus:border-sage transition-colors placeholder:text-ink-soft/40"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-sage text-line font-sans text-sm tracking-wide rounded-[2px] hover:bg-sage-deep transition-colors text-center"
                  >
                    Send on WhatsApp →
                  </button>
                  <p className="mt-3 text-center text-xs font-sans text-ink-soft">
                    Prefer to call?{" "}
                    <a
                      href={`tel:${siteConfig.contact.phoneRaw}`}
                      className="text-sage hover:underline"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
};
