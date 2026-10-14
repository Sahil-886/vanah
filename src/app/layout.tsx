import type { Metadata, Viewport } from "next";
import { newsreader, hankenGrotesk, tiroDevanagari } from "@/fonts";
import siteConfig from "../../content/site";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#4D5A4C",
};

export const metadata: Metadata = {
  title: "Café Vanah (वनः) · Crafted coffee, bakehouse & vegetarian dining · Aundh, Pune",
  description:
    "A pure-vegetarian café, bakehouse and conscious dining sanctuary on Baner–Aundh Road, Pune. Single-origin coffees, stone-hearth bakery, and seasonal kitchen plates under garden shade.",
  keywords: [
    "Café Vanah",
    "Cafe Vanah Pune",
    "vanah cafe",
    "pure vegetarian cafe pune",
    "cafe in aundh",
    "vegetarian restaurant baner aundh road",
    "artisanal bakehouse pune",
    "best coffee aundh",
  ],
  authors: [{ name: "Café Vanah" }],
  creator: "Café Vanah",
  metadataBase: new URL("https://cafevanah.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cafevanah.in",
    siteName: "Café Vanah (वनः)",
    title: "Café Vanah (वनः) — Pure Vegetarian Café & Bakehouse | Pune",
    description:
      "Crafted coffee, an artisanal bakehouse and conscious dining on Baner–Aundh Road, Pune.",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Café Vanah — White cottage, garden shade and crafted coffee",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Café Vanah",
    alternateName: "वनः",
    image: "https://cafevanah.in/images/hero-exterior.webp",
    "@id": "https://cafevanah.in",
    url: "https://cafevanah.in",
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: "Maharashtra",
      postalCode: siteConfig.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.5612,
      longitude: 73.8078,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "22:00",
      },
    ],
    servesCuisine: ["Pure Vegetarian", "Modern Indian", "Artisanal Bakery", "Coffee"],
    acceptsReservations: "True",
    menu: siteConfig.ordering.airmenusUrl,
    sameAs: [
      siteConfig.social.instagramUrl,
      siteConfig.google.url,
      siteConfig.ordering.airmenusUrl,
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${newsreader.variable} ${hankenGrotesk.variable} ${tiroDevanagari.variable} h-full`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.documentElement.classList.add('js');
              if (window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                document.documentElement.classList.add('motion');
              }
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-limewash text-ink antialiased selection:bg-sage selection:text-line-on-sage">
        {children}
      </body>
    </html>
  );
}
