export interface Product {
  id: string;
  name: string;
  description: string;
  packSize: string;
  category: string;
  features?: string[];
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
    id: '1',
    name: 'Breakfast Cereals',
    slug: 'breakfast-cereals',
    description: 'Wholesome breakfast cereals made from millets and cereals. Great source of fiber and energy to start your day.',
    products: [
      {
        id: 'bc-1',
        name: 'Muesli Vanilla',
        description: 'Delicious vanilla-flavored muesli with a perfect blend of millets, nuts, and dried fruits. A nutritious start to your day.',
        packSize: '250 gms',
        category: 'breakfast-cereals',
        features: ['High in fiber', 'No artificial flavors', 'Rich in nutrients']
      },
      {
        id: 'bc-2',
        name: 'Muesli Chocolate',
        description: 'Indulgent chocolate muesli combining health and taste. Made with natural cocoa and wholesome grains.',
        packSize: '250 gms',
        category: 'breakfast-cereals',
        features: ['Natural cocoa', 'Energy-rich', 'Kid-friendly']
      }
    ]
  },
  {
    id: '2',
    name: 'Breakfast Mixes',
    slug: 'breakfast-mixes',
    description: 'Quick & hassle-free traditional breakfast with millets. Ready-to-cook instant mixes for authentic South Indian breakfast.',
    products: [
      {
        id: 'bm-1',
        name: 'Ragi Idli Mix',
        description: 'Nutritious ragi idli mix for soft, fluffy idlis. Makes 16 idlis per pack.',
        packSize: '250 gms (16 Idlis)',
        category: 'breakfast-mixes',
        features: ['Rich in calcium', 'Easy to prepare', 'Traditional taste']
      },
      {
        id: 'bm-2',
        name: 'Millet Poha Mix',
        description: 'Instant millet poha mix for a healthy breakfast. Just add hot water and your favorite toppings.',
        packSize: '200 gms',
        category: 'breakfast-mixes',
        features: ['Instant preparation', 'Low GI', 'Diabetic-friendly']
      },
      {
        id: 'bm-3',
        name: 'Millet Pongal Mix',
        description: 'Traditional pongal made easy with millet goodness. Makes 5 servings.',
        packSize: '250 gms (5 Servings)',
        category: 'breakfast-mixes',
        features: ['Comfort food', 'Nutritious', 'Easy to cook']
      },
      {
        id: 'bm-4',
        name: 'Multigrain Dosa Mix',
        description: 'Crispy dosas with the power of multiple grains and millets.',
        packSize: '250 gms',
        category: 'breakfast-mixes',
        features: ['Multi-grain blend', 'Protein-rich', 'Crispy texture']
      },
      {
        id: 'bm-5',
        name: 'Millet Upma Mix',
        description: 'Quick and healthy upma mix made from nutritious millets.',
        packSize: '250 gms',
        category: 'breakfast-mixes',
        features: ['Ready in minutes', 'High fiber', 'Wholesome']
      },
      {
        id: 'bm-6',
        name: 'Millet Khichdi Mix',
        description: 'Comfort food made healthy with millet-based khichdi mix.',
        packSize: '250 gms',
        category: 'breakfast-mixes',
        features: ['Complete meal', 'Easy digestion', 'Balanced nutrition']
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
        packSize: '250 gms',
        category: 'beverage-mixes',
        features: ['Multi-grain formula', 'Energy booster', 'Suitable for all ages']
      },
      {
        id: 'bv-2',
        name: 'Ragi Malt',
        description: 'Traditional ragi malt for strength and vitality. Rich in calcium and iron.',
        packSize: '250 gms',
        category: 'beverage-mixes',
        features: ['High calcium', 'Natural iron source', 'Strengthens bones']
      },
      {
        id: 'bv-3',
        name: 'Fruit Porridge Mix',
        description: 'Delicious fruit-flavored porridge mix combining health and taste.',
        packSize: 'Available in bulk',
        category: 'beverage-mixes',
        features: ['Fruity flavor', 'Instant preparation', 'Nutritious']
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
        name: 'Tomato Soup',
        description: 'Rich and tangy tomato soup with the goodness of millets and vegetables.',
        packSize: '100 gms',
        category: 'soup-mixes',
        features: ['Rich in antioxidants', 'Low calorie', 'Quick preparation']
      },
      {
        id: 'sm-2',
        name: 'Vegetable Soup',
        description: 'Hearty vegetable soup packed with nutrition and flavor.',
        packSize: '100 gms',
        category: 'soup-mixes',
        features: ['Multi-vegetable', 'High fiber', 'Immunity booster']
      },
      {
        id: 'sm-3',
        name: 'Vegetable Porridge Mix',
        description: 'Nourishing vegetable porridge for a light and healthy meal.',
        packSize: 'Available in bulk',
        category: 'soup-mixes',
        features: ['Comfort food', 'Easy digestion', 'Wholesome']
      }
    ]
  },
  {
    id: '5',
    name: 'Energy Bytes (Snacks)',
    slug: 'energy-bytes',
    description: 'Guilt-free snacking! Boost your nutrition intake with these millet-based crispy snacks. No added colors & artificial flavors.',
    products: [
      {
        id: 'eb-1',
        name: 'Energy Bytes Pudina',
        description: 'Refreshing mint-flavored millet snacks. Perfect for tea-time.',
        packSize: '100 gms',
        category: 'energy-bytes',
        features: ['No artificial colors', 'Baked not fried', 'Refreshing flavor']
      },
      {
        id: 'eb-2',
        name: 'Energy Bytes Cheese Chilli',
        description: 'Zesty cheese and chilli flavored energy bytes for spice lovers.',
        packSize: '100 gms',
        category: 'energy-bytes',
        features: ['Bold flavor', 'Crunchy texture', 'High protein']
      },
      {
        id: 'eb-3',
        name: 'Energy Bytes Tomato Chilli',
        description: 'Tangy tomato with a hint of chilli. A perfect snacking companion.',
        packSize: '100 gms',
        category: 'energy-bytes',
        features: ['Tangy & spicy', 'Natural flavors', 'Healthy snacking']
      },
      {
        id: 'eb-4',
        name: 'Energy Bytes Tangy Tomato',
        description: 'Classic tomato flavor in a healthy millet-based snack.',
        packSize: '100 gms',
        category: 'energy-bytes',
        features: ['Tangy taste', 'Kid-friendly', 'No preservatives']
      },
      {
        id: 'eb-5',
        name: 'Energy Bytes Masala',
        description: 'Traditional Indian masala flavored energy bytes. Irresistibly tasty.',
        packSize: '100 gms',
        category: 'energy-bytes',
        features: ['Authentic spices', 'Crunchy', 'Guilt-free snacking']
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
  }
];

export const getProductsByCategory = (categorySlug: string): Product[] => {
  const category = productCategories.find(cat => cat.slug === categorySlug);
  return category ? category.products : [];
};

export const getCategoryBySlug = (slug: string): ProductCategory | undefined => {
  return productCategories.find(cat => cat.slug === slug);
};
