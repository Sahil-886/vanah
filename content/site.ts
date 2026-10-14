export interface SiteConfig {
  name: string;
  wordmark: string;
  wordmarkAlt: string;
  tagline: string;
  cuisine: string;
  address: {
    street: string;
    locality: string;
    city: string;
    pincode: string;
    full: string;
    short: string;
    mapsUrl: string;
    googleMapsSearchUrl: string;
  };
  hours: {
    open: string;
    close: string;
    display: string;
    bakehouseOpen: string;
    days: string;
    timezone: string;
  };
  contact: {
    phone: string;
    phoneRaw: string;
    whatsappUrl: string;
  };
  social: {
    instagram: string;
    instagramUrl: string;
    instagramHandle: string;
  };
  ordering: {
    airmenusUrl: string;
  };
  google: {
    rating: number;
    reviewsCount: number;
    url: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Café Vanah",
  wordmark: "वनः",
  wordmarkAlt: "Vanah",
  tagline: "Crafted coffee · Artisanal bakehouse · Conscious dining",
  cuisine: "Pure vegetarian, vegan options. Modern Indian, fusion, desserts, coffee.",
  address: {
    street: "11B, Silver Oak Park, Baner–Aundh Road",
    locality: "Sanewadi, Aundh",
    city: "Pune",
    pincode: "411069",
    full: "11B, Silver Oak Park, Baner–Aundh Road, Sanewadi, Aundh, Pune 411069",
    short: "Silver Oak Park, Baner–Aundh Road, Pune",
    mapsUrl: "https://maps.google.com/?q=Cafe+Vanah+Aundh+Pune",
    googleMapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Cafe%20Vanah%20Silver%20Oak%20Park%20Aundh%20Pune",
  },
  hours: {
    open: "08:00",
    close: "22:00",
    display: "Every day, 8:00 am – 10:00 pm",
    bakehouseOpen: "8:00 am",
    days: "Monday through Sunday",
    timezone: "Asia/Kolkata",
  },
  contact: {
    phone: "+91 91455 61515",
    phoneRaw: "+919145561515",
    whatsappUrl: "https://wa.me/919145561515",
  },
  social: {
    instagram: "@cafevanah",
    instagramUrl: "https://instagram.com/cafevanah",
    instagramHandle: "@cafevanah",
  },
  ordering: {
    airmenusUrl: "https://airmenus.in/cafevanah",
  },
  google: {
    rating: 4.7,
    reviewsCount: 1499,
    url: "https://www.google.com/maps/search/?api=1&query=Cafe%20Vanah%20Silver%20Oak%20Park%20Aundh%20Pune",
  },
};

export default siteConfig;
