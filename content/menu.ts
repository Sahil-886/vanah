export interface MenuItem {
  name: string;
  description: string;
  vegan?: boolean;
  signature?: boolean;
  price?: number | null; // TODO(owner): prices to be confirmed
}

export interface MenuCategory {
  id: string;
  name: string;
  note?: string;
  items: MenuItem[];
}

export const menuData: { categories: MenuCategory[]; note: string } = {
  categories: [
    {
      id: "coffee-coolers",
      name: "Coffee & Coolers",
      note: "Single-origin beans pulled fresh, and chilled botanical infusions",
      items: [
        {
          name: "Cappuccino",
          description: "Finished with वनः in dusted cocoa powder.",
          signature: true,
          price: null,
        },
        {
          name: "Café Latte",
          description: "Velvety textured milk over espresso pulled to order.",
          price: null,
        },
        {
          name: "Espresso",
          description: "Rich, syrupy double shot with hazelnut and fruit notes.",
          price: null,
        },
        {
          name: "Guava Cooler",
          description: "Pink guava, pink peppercorn, and garden mint.",
          vegan: true,
          price: null,
        },
        {
          name: "Fresh Lime Cooler",
          description: "Crushed ice, fresh lime, garden basil, and sparkling water.",
          vegan: true,
          price: null,
        },
      ],
    },
    {
      id: "bakehouse",
      name: "Bakehouse",
      note: "Made here every morning — from eight",
      items: [
        {
          name: "Pound Cake",
          description: "Dense, golden crumb with warm vanilla bean. Perfect with cappuccino.",
          signature: true,
          price: null,
        },
        {
          name: "Chocolate Cake",
          description: "Glossy dark chocolate ganache layered with fresh strawberries.",
          price: null,
        },
        {
          name: "Cookie Dough Cheesecake",
          description: "The dessert people come back for. Creamy cheesecake studded with dough.",
          signature: true,
          price: null,
        },
      ],
    },
    {
      id: "kitchen",
      name: "Kitchen",
      note: "Seasonal plates from the garden hearth",
      items: [
        {
          name: "Ravioli",
          description: "In a pale cream sauce, with nasturtium leaves from the garden.",
          signature: true,
          price: null,
        },
        {
          name: "Kothimbir Kalari",
          description: "A house signature, and one of the most-mentioned plates.",
          signature: true,
          price: null,
        },
        {
          name: "Guacamole",
          description: "Built tall and fresh with ripe avocados, made for the middle of the table.",
          vegan: true,
          price: null,
        },
        {
          name: "Roasted Squash",
          description: "Soft and seasonal butternut squash, finished with fresh herbs and seeds.",
          price: null,
        },
        {
          name: "Garden Salad",
          description: "Crisp local greens, shaved radishes, toasted nuts, and citrus dressing.",
          vegan: true,
          price: null,
        },
      ],
    },
  ],
  note: "Everything is vegetarian — many dishes can be made vegan, just ask.",
};

export default menuData;
