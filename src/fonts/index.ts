import localFont from "next/font/local";

export const newsreader = localFont({
  src: [
    {
      path: "./newsreader-normal.woff2",
      weight: "200 800",
      style: "normal",
    },
    {
      path: "./newsreader-italic.woff2",
      weight: "200 800",
      style: "italic",
    },
  ],
  variable: "--font-newsreader",
  display: "swap",
});

export const hankenGrotesk = localFont({
  src: [
    {
      path: "./hanken-grotesk.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-hanken",
  display: "swap",
});

export const tiroDevanagari = localFont({
  src: [
    {
      path: "./tiro-devanagari-hindi.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-tiro",
  display: "swap",
});

// Backward compatibility alias
export const gambetta = newsreader;
