export interface Product {
  id: string;
  name: string;
  description: string;
  packSize: string;
  category: string;
  features?: string[];
  price?: number;
  priceUnit?: string;
  moq?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 'instant-mix',
    name: 'Instant Mix',
    slug: 'instant-mix',
    description: '1) Breakfast mix  2) Beverages Mix  3) Soups and Porridge mixes. Quick, hassle-free options for breakfast, drinks, and wholesome soups.',
    products: [] // Filled in getCategoryBySlug
  },
  {
    id: '1',
    name: 'Breakfast Cereals',
    slug: 'breakfast-cereals',
    description: 'Wholesome breakfast cereals made from millets and cereals. Great source of fiber and energy to start your day.',
    products: [
      {
        id: 'bc-1',
        name: 'Wheat Flakes',
        description: 'Crispy and nutritious wheat flakes, perfect for a healthy breakfast.',
        packSize: 'per Kg',
        category: 'breakfast-cereals',
        price: 120,
        priceUnit: 'per kg',
        moq: '10 kg',
        features: ['High in fiber', 'No artificial flavors', 'Rich in nutrients']
      },
      {
        id: 'bc-2',
        name: 'Ragi Flakes',
        description: 'Nutritious ragi flakes rich in calcium and iron.',
        packSize: 'per Kg',
        category: 'breakfast-cereals',
        price: 120,
        priceUnit: 'per kg',
        moq: '10 kg',
        features: ['High calcium', 'Iron-rich', 'Gluten-free']
      },
      {
        id: 'bc-3',
        name: 'Kodo Flakes',
        description: 'Healthy kodo millet flakes for a nutritious breakfast.',
        packSize: 'per Kg',
        category: 'breakfast-cereals',
        price: 170,
        priceUnit: 'per kg',
        moq: '10 kg',
        features: ['High fiber', 'Diabetic-friendly', 'Gluten-free']
      },
      {
        id: 'bc-4',
        name: 'Bajra Flakes',
        description: 'Nutritious bajra (pearl millet) flakes.',
        packSize: 'per Kg',
        category: 'breakfast-cereals',
        price: 100,
        priceUnit: 'per kg',
        moq: '10 kg',
        features: ['Iron-rich', 'Gluten-free', 'Energy-rich']
      },
      {
        id: 'bc-5',
        name: 'Red Rice Flakes',
        description: 'Healthy red rice flakes for traditional breakfast.',
        packSize: 'per Kg',
        category: 'breakfast-cereals',
        price: 150,
        priceUnit: 'per kg',
        moq: '10 kg',
        features: ['Antioxidant-rich', 'Natural', 'Traditional']
      },
      {
        id: 'bc-6',
        name: 'Browntop Flakes',
        description: 'Nutritious browntop millet flakes.',
        packSize: 'per Kg',
        category: 'breakfast-cereals',
        price: 130,
        priceUnit: 'per kg',
        moq: '10 kg',
        features: ['High fiber', 'Gluten-free', 'Nutritious']
      },
      {
        id: 'bc-7',
        name: 'Brownrice Flakes',
        description: 'Healthy brown rice flakes for a wholesome breakfast.',
        packSize: 'per Kg',
        category: 'breakfast-cereals',
        price: 130,
        priceUnit: 'per kg',
        moq: '10 kg',
        features: ['High fiber', 'Natural', 'Nutritious']
      },
      {
        id: 'bc-8',
        name: 'Barley Flakes',
        description: 'Nutritious barley flakes for a healthy start.',
        packSize: 'per Kg',
        category: 'breakfast-cereals',
        price: 120,
        priceUnit: 'per kg',
        moq: '400 kg',
        features: ['High fiber', 'Beta-glucan rich', 'Heart healthy']
      },
      {
        id: 'bc-9',
        name: 'Jowar Flakes',
        description: 'Healthy jowar (sorghum) flakes.',
        packSize: 'per Kg',
        category: 'breakfast-cereals',
        price: 130,
        priceUnit: 'per kg',
        moq: '100 kg',
        features: ['Gluten-free', 'High protein', 'Nutritious']
      },
      {
        id: 'bc-10',
        name: 'Muesli Vanilla / Muesli Flakes',
        description: 'Delicious vanilla-flavored muesli with a perfect blend of millets, nuts, and dried fruits.',
        packSize: 'per Pack',
        category: 'breakfast-cereals',
        price: 165,
        priceUnit: 'per pack',
        moq: '50 packs',
        features: ['High in fiber', 'No artificial flavors', 'Rich in nutrients']
      },
      {
        id: 'bc-11',
        name: 'Ragi Malt',
        description: 'Traditional ragi malt for strength and vitality. Rich in calcium and iron.',
        packSize: 'per Pack',
        category: 'breakfast-cereals',
        price: 99,
        priceUnit: 'per pack',
        moq: '50 packs',
        features: ['High calcium', 'Natural iron source', 'Strengthens bones']
      }
    ]
  },
  {
    id: '2',
    name: 'Breakfast Mixes',
    slug: 'breakfast-mixes',
    description: 'Quick & hassle-free traditional breakfast with millets and cereals. Ready-to-cook instant mixes for authentic South Indian breakfast.',
    products: [
      {
        id: 'bm-1',
        name: 'Health Mix',
        description: 'Power-packed health drink with multiple grains, nuts, and seeds for overall wellness.',
        packSize: 'Pack (multi-grain health mix powder)',
        category: 'breakfast-mixes',
        price: 99,
        priceUnit: 'per pack',
        moq: '100 packs',
        features: ['Multi-grain formula', 'Energy booster', 'Suitable for all ages']
      },
      {
        id: 'bm-2',
        name: 'Millet Upma Mix',
        description: 'Quick and healthy upma mix made from nutritious millets.',
        packSize: '250 g pack',
        category: 'breakfast-mixes',
        price: 99,
        priceUnit: 'per pack',
        moq: '50 packs',
        features: ['Ready in minutes', 'High fiber', 'Wholesome']
      },
      {
        id: 'bm-3',
        name: 'Millet Pongal Mix',
        description: 'Traditional pongal made easy with millet goodness. Makes 5 servings.',
        packSize: '250 g pack',
        category: 'breakfast-mixes',
        price: 99,
        priceUnit: 'per pack',
        moq: '50 packs',
        features: ['Comfort food', 'Nutritious', 'Easy to cook']
      },
      {
        id: 'bm-4',
        name: 'Millet Khichdi Mix',
        description: 'Comfort food made healthy with millet and cereal-based khichdi mix.',
        packSize: '250 g pack',
        category: 'breakfast-mixes',
        price: 99,
        priceUnit: 'per pack',
        moq: '50 packs',
        features: ['Complete meal', 'Easy digestion', 'Balanced nutrition']
      },
      {
        id: 'bm-5',
        name: 'Millet Idli Mix',
        description: 'Nutritious millet idli mix for soft, fluffy idlis.',
        packSize: '250 g pack',
        category: 'breakfast-mixes',
        price: 99,
        priceUnit: 'per pack',
        moq: '50 packs',
        features: ['Rich in calcium', 'Easy to prepare', 'Traditional taste']
      },
      {
        id: 'bm-6',
        name: 'Millet Dosa Mix',
        description: 'Crispy dosas with the power of millets.',
        packSize: '250 g pack',
        category: 'breakfast-mixes',
        price: 99,
        priceUnit: 'per pack',
        moq: '50 packs',
        features: ['Multi-grain blend', 'Protein-rich', 'Crispy texture']
      },
      {
        id: 'bm-7',
        name: 'Millet Poha',
        description: 'Instant millet poha mix for a healthy breakfast. Just add hot water and your favorite toppings.',
        packSize: '250 g pack',
        category: 'breakfast-mixes',
        price: 99,
        priceUnit: 'per pack',
        moq: '50 packs',
        features: ['Instant preparation', 'Low GI', 'Diabetic-friendly']
      }
    ]
  },
  {
    id: '3',
    name: 'Beverage Mixes',
    slug: 'beverage-mixes',
    description: 'Nutritious and healthy beverage mixes to curb your hunger and cut excess carbs & fats.',
    products: [
      {
        id: 'bv-1',
        name: 'Health Mix',
        description: 'Power-packed health drink with multiple grains, nuts, and seeds for overall wellness.',
        packSize: 'Pack (multi-grain health mix powder)',
        category: 'beverage-mixes',
        price: 99,
        priceUnit: 'per pack',
        moq: '100 packs',
        features: ['Multi-grain formula', 'Energy booster', 'Suitable for all ages']
      },
      {
        id: 'bv-2',
        name: 'Ragi Malt',
        description: 'Traditional ragi malt for strength and vitality. Rich in calcium and iron.',
        packSize: 'per Pack',
        category: 'beverage-mixes',
        price: 99,
        priceUnit: 'per pack',
        moq: '50 packs',
        features: ['High calcium', 'Natural iron source', 'Strengthens bones']
      }
    ]
  },
  {
    id: '4',
    name: 'Soup Mixes',
    slug: 'soup-mixes',
    description: 'Quick, hassle-free, wholesome & balanced soup mixes. Nutritional & healthy comfort in a bowl.',
    products: [
      {
        id: 'sm-1',
        name: 'Soup Mix',
        description: 'Wholesome and balanced soup mix with the goodness of millets, cereals and vegetables.',
        packSize: 'per Kg / piece (bag pack)',
        category: 'soup-mixes',
        price: 500,
        priceUnit: 'per kg',
        moq: '25-120 units',
        features: ['Rich in antioxidants', 'Low calorie', 'Quick preparation']
      }
    ]
  },
  {
    id: '5',
    name: 'Energy Bytes (Snacks)',
    slug: 'energy-bytes',
    description: 'Guilt-free snacking! Boost your nutrition intake with these millet and cereal-based crispy snacks. No added colors & artificial flavors.',
    products: [
      {
        id: 'eb-1',
        name: 'Energy Bytes Tomato Chilli',
        description: 'Tangy tomato with a hint of chilli. A perfect snacking companion.',
        packSize: '250 g',
        category: 'energy-bytes',
        price: 40,
        priceUnit: 'per pack',
        moq: '50 packs',
        features: ['Tangy & spicy', 'Natural flavors', 'Healthy snacking']
      },
      {
        id: 'eb-2',
        name: 'Energy Bytes Masala',
        description: 'Traditional Indian masala flavored energy bytes. Irresistibly tasty.',
        packSize: '250 g',
        category: 'energy-bytes',
        price: 40,
        priceUnit: 'per pack',
        moq: '50 packs',
        features: ['Authentic spices', 'Crunchy', 'Guilt-free snacking']
      },
      {
        id: 'eb-3',
        name: 'Energy Bytes Pudina',
        description: 'Refreshing mint-flavored millet and cereal snacks. Perfect for tea-time.',
        packSize: '250 g',
        category: 'energy-bytes',
        price: 40,
        priceUnit: 'per pack',
        moq: '50 packs',
        features: ['No artificial colors', 'Baked not fried', 'Refreshing flavor']
      },
      {
        id: 'eb-4',
        name: 'Energy Bytes Cheese Chilli',
        description: 'Zesty cheese and chilli flavored energy bytes for spice lovers.',
        packSize: '250 g',
        category: 'energy-bytes',
        price: 40,
        priceUnit: 'per pack',
        moq: '50 packs',
        features: ['Bold flavor', 'Crunchy texture', 'High protein']
      },
      {
        id: 'eb-5',
        name: 'Energy Bytes Tangy Tomato',
        description: 'Classic tomato flavor in a healthy millet and cereal-based snack.',
        packSize: '250 g',
        category: 'energy-bytes',
        price: 40,
        priceUnit: 'per pack',
        moq: '50 packs',
        features: ['Tangy taste', 'Kid-friendly', 'No preservatives']
      }
    ]
  },
  {
    id: '6',
    name: 'Spice Powders',
    slug: 'spice-powders',
    description: 'Not just for taste & color - Boost your immunity! Authentic spice blends for traditional Indian cooking.',
    products: [
      {
        id: 'sp-1',
        name: 'Nalla Karam (Gun Powder)',
        description: 'Traditional Andhra-style gun powder. Spicy and flavorful condiment.',
        packSize: '100 gms',
        category: 'spice-powders',
        features: ['Authentic recipe', 'No artificial colors', 'Long shelf life']
      },
      {
        id: 'sp-2',
        name: 'Coriander Spice Powder',
        description: 'Pure coriander powder ground from premium quality coriander seeds.',
        packSize: '100 gms',
        category: 'spice-powders',
        features: ['Pure & natural', 'Aromatic', 'Essential spice']
      },
      {
        id: 'sp-3',
        name: 'Roasted Chana Powder',
        description: 'Nutritious roasted chana powder. Great for chutneys and side dishes.',
        packSize: '100 gms',
        category: 'spice-powders',
        features: ['High protein', 'Roasted flavor', 'Versatile use']
      },
      {
        id: 'sp-4',
        name: 'Curry Leaves Spice Powder',
        description: 'Aromatic curry leaves powder for authentic South Indian flavor.',
        packSize: '100 gms',
        category: 'spice-powders',
        features: ['Aromatic', 'Health benefits', 'Authentic taste']
      },
      {
        id: 'sp-5',
        name: 'Curry Powder',
        description: 'Balanced curry powder blend for delicious curries and gravies.',
        packSize: '100 gms',
        category: 'spice-powders',
        features: ['Balanced blend', 'Versatile', 'No MSG']
      },
      {
        id: 'sp-6',
        name: 'Sambar Powder',
        description: 'Traditional sambar powder for authentic South Indian sambar.',
        packSize: '100 gms',
        category: 'spice-powders',
        features: ['Traditional recipe', 'Aromatic blend', 'Restaurant taste']
      },
      {
        id: 'sp-7',
        name: 'Rasam Powder',
        description: 'Tangy rasam powder for that perfect comfort bowl of rasam.',
        packSize: '100 gms',
        category: 'spice-powders',
        features: ['Tangy & spicy', 'Digestive aid', 'Authentic blend']
      }
    ]
  },
  {
    id: '7a',
    name: 'Millet Noodles',
    slug: 'millet-noodles',
    description: 'Millet and cereal-based noodle varieties. A nutritious, gluten-free alternative for your favorite noodle dishes.',
    products: [
      {
        id: 'mn-1',
        name: 'Millet Noodles',
        description: 'Healthy millet and cereal-based noodles for a nutritious meal.',
        packSize: 'per Kg',
        category: 'millet-noodles',
        price: 230,
        priceUnit: 'per kg',
        moq: '25 kg',
        features: ['Gluten-free', 'High fiber', 'Nutritious']
      }
    ]
  },
  {
    id: '7b',
    name: 'Bars',
    slug: 'bars',
    description: 'Nutritious bars made from millets, cereals and natural ingredients. Peanut bars, sesame bars and more for on-the-go energy.',
    products: [
      {
        id: 'br-1',
        name: 'Energy Bars',
        description: 'Nutritious energy bars made from millets, cereals and natural ingredients.',
        packSize: 'per Kg',
        category: 'bars',
        price: 400,
        priceUnit: 'per kg',
        moq: '10 kg',
        features: ['High protein', 'Natural ingredients', 'Energy-rich']
      }
    ]
  },
  {
    id: '7',
    name: 'Flours & Grits',
    slug: 'flours-grits',
    description: 'Make your preparations healthy with whole flours & whole grits. Perfect for traditional and modern cooking.',
    products: [
      {
        id: 'fg-1',
        name: 'Ragi Flour',
        description: 'Pure ragi (finger millet) flour for traditional and modern recipes.',
        packSize: 'Available in bulk',
        category: 'flours-grits',
        features: ['High calcium', 'Gluten-free', 'Nutritious']
      },
      {
        id: 'fg-2',
        name: 'Jowar Flour',
        description: 'Wholesome jowar flour perfect for rotis and baking.',
        packSize: 'Available in bulk',
        category: 'flours-grits',
        features: ['High fiber', 'Gluten-free', 'Rich in minerals']
      },
      {
        id: 'fg-3',
        name: 'Bajra Flour',
        description: 'Nutritious pearl millet flour for healthy meals.',
        packSize: 'Available in bulk',
        category: 'flours-grits',
        features: ['Iron-rich', 'Gluten-free', 'Warming properties']
      },
      {
        id: 'fg-4',
        name: 'Multigrain Flour',
        description: 'Specially blended multigrain flour for nutritious rotis and breads.',
        packSize: 'Available in bulk',
        category: 'flours-grits',
        features: ['Multi-grain blend', 'Balanced nutrition', 'Versatile']
      }
    ]
  },
  {
    id: '8',
    name: 'Upcoming Products',
    slug: 'upcoming-products',
    description: 'New and innovative millet and cereal-based products coming soon.',
    products: [
      {
        id: 'up-2',
        name: 'Soup Mix',
        description: 'Wholesome and balanced soup mix with the goodness of millets and cereals.',
        packSize: 'per Kg / piece (bag pack)',
        category: 'upcoming-products',
        price: 500,
        priceUnit: 'per kg',
        moq: '25-120 units',
        features: ['Rich in antioxidants', 'Low calorie', 'Quick preparation']
      }
    ]
  }
];

export const getProductsByCategory = (categorySlug: string): Product[] => {
  const category = productCategories.find(cat => cat.slug === categorySlug);
  return category ? category.products : [];
};

export const getCategoryBySlug = (slug: string): ProductCategory | undefined => {
  const category = productCategories.find(cat => cat.slug === slug);
  if (slug === 'instant-mix' && category) {
    const breakfast = productCategories.find(c => c.slug === 'breakfast-mixes');
    const beverage = productCategories.find(c => c.slug === 'beverage-mixes');
    const soup = productCategories.find(c => c.slug === 'soup-mixes');
    return {
      ...category,
      products: [
        ...(breakfast?.products ?? []),
        ...(beverage?.products ?? []),
        ...(soup?.products ?? []),
      ],
    };
  }
  return category;
};
