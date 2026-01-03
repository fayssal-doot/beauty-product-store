export const products = [
  {
    id: 1,
    name: "Hydrating Hyaluronic Serum",
    price: 49.99,
    description: "Intensely hydrating serum with pure hyaluronic acid and vitamin B5 for plump, glowing skin. This lightweight formula absorbs instantly to replenish moisture.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Serums",
    sku: "SKIN001",
    rating: 4.8,
    reviews: 124,
    active: true,
    featured: true,
    skinTypes: ["Dry", "Sensitive", "Aging"],
    size: "30ml",
    ingredients: "Aqua, Sodium Hyaluronate, Panthenol (Vitamin B5), Glycerin, Phenoxyethanol.",
    benefits: [
      "Deeply hydrates and plumps skin",
      "Reduces fine lines and wrinkles",
      "Soothes sensitive skin",
      "Oil-free and non-comedogenic"
    ],
    usage: "Apply 2-3 drops to damp face and neck morning and night before moisturizer."
  },
  {
    id: 2,
    name: "Vitamin C Brightening Cream",
    price: 59.99,
    description: "Advanced brightening cream with 10% stable Vitamin C to reduce dark spots, even skin tone, and boost radiance while moisturizing.",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Moisturizers",
    sku: "SKIN002",
    rating: 4.7,
    reviews: 89,
    active: true,
    featured: true,
    skinTypes: ["All", "Dull", "Combination"],
    size: "50ml",
    ingredients: "Aqua, Ascorbic Acid, Tocopherol (Vitamin E), Ferulic Acid, Shea Butter.",
    benefits: [
      "Brightens dull complexion",
      "Fades dark spots and hyperpigmentation",
      "Protects against environmental damage",
      "Deeply moisturizes without greasiness"
    ],
    usage: "Massage a small amount onto clean face and neck every morning. Follow with SPF."
  },
  {
    id: 3,
    name: "Gentle Rosewater Cleanser",
    price: 24.99,
    description: "A soothing, low-pH gel cleanser infused with organic rosewater to remove impurities without stripping the skin's natural moisture barrier.",
    image: "https://images.unsplash.com/photo-1580870090592-34f37803a647?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Cleansers",
    sku: "SKIN003",
    rating: 4.9,
    reviews: 215,
    active: true,
    featured: false,
    skinTypes: ["Sensitive", "Dry", "Normal"],
    size: "150ml",
    ingredients: "Rosa Damascena Flower Water, Coco-Glucoside, Glycerin, Aloe Barbadensis Leaf Juice.",
    benefits: [
      "Gently removes dirt and makeup",
      "Balances skin pH",
      "Soothes redness and irritation",
      "Leaves skin soft and hydrated"
    ],
    usage: "Massage onto wet skin in circular motions. Rinse thoroughly with lukewarm water."
  },
  {
    id: 4,
    name: "BHA Exfoliating Toner",
    price: 34.00,
    description: "Clarifying toner with 2% Salicylic Acid to unclog pores, smooth texture, and control excess oil production for clearer skin.",
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Toners",
    sku: "SKIN004",
    rating: 4.6,
    reviews: 76,
    active: true,
    featured: true,
    skinTypes: ["Oily", "Combination", "Acne-Prone"],
    size: "100ml",
    ingredients: "Aqua, Salicylic Acid, Green Tea Extract, Niacinamide, Butylene Glycol.",
    benefits: [
      "Unclogs and minimizes pores",
      "Reduces blackheads and breakouts",
      "Controls excess oil",
      "Evens skin texture"
    ],
    usage: "Apply to a cotton pad and sweep over clean, dry face. Use 2-3 times a week, increasing frequency as tolerated."
  },
  {
    id: 5,
    name: "Midnight Recovery Oil",
    price: 65.00,
    description: "A luxurious blend of botanical oils including Lavender and Evening Primrose to repair and regenerate skin overnight.",
    image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Oils",
    sku: "SKIN005",
    rating: 4.9,
    reviews: 150,
    active: true,
    featured: false,
    skinTypes: ["Dry", "Aging", "Normal"],
    size: "30ml",
    ingredients: "Caprylic/Capric Triglyceride, Squalane, Oenothera Biennis (Evening Primrose) Oil, Lavandula Angustifolia Oil.",
    benefits: [
      "Restores skin barrier overnight",
      "Improves elasticity and firmness",
      "Provides intense nourishment",
      "Calms and relaxes senses"
    ],
    usage: "Warm 2-3 drops in hands and press into face and neck as the last step of your night routine."
  },
  {
    id: 6,
    name: "Purifying Clay Mask",
    price: 38.00,
    description: "Detoxifying clay mask with Kaolin and Charcoal to draw out impurities and toxins while minimizing the appearance of pores.",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Masks",
    sku: "SKIN006",
    rating: 4.5,
    reviews: 62,
    active: true,
    featured: false,
    skinTypes: ["Oily", "Combination"],
    size: "60ml",
    ingredients: "Kaolin Clay, Charcoal Powder, Aloe Vera, Tea Tree Oil.",
    benefits: [
      "Deeply cleanses pores",
      "Absorbs excess oil and sebum",
      "Detoxifies skin",
      "Refines skin texture"
    ],
    usage: "Apply a thin layer to clean skin. Leave on for 10-15 minutes until dry. Rinse with warm water. Use weekly."
  },
  {
    id: 7,
    name: "Peptide Eye Cream",
    price: 42.00,
    description: "Rich eye cream packed with peptides and caffeine to reduce puffiness, dark circles, and fine lines around the delicate eye area.",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Eye Care",
    sku: "SKIN007",
    rating: 4.7,
    reviews: 94,
    active: true,
    featured: false,
    skinTypes: ["All", "Aging"],
    size: "15ml",
    ingredients: "Aqua, Acetyl Hexapeptide-8, Caffeine, Shea Butter, Hyaluronic Acid.",
    benefits: [
      "Reduces puffiness and dark circles",
      "Smooths crow's feet and fine lines",
      "Hydrates delicate eye area",
      "Brightens tired eyes"
    ],
    usage: "Gently pat a small amount around the eye contour with your ring finger morning and night."
  },
  {
    id: 8,
    name: "Daily Defense SPF 50",
    price: 32.00,
    description: "Broad-spectrum mineral sunscreen that provides high protection against UVA/UVB rays without leaving a white cast.",
    image: "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sunscreen",
    sku: "SKIN008",
    rating: 4.6,
    reviews: 110,
    active: true,
    featured: true,
    skinTypes: ["All", "Sensitive"],
    size: "50ml",
    ingredients: "Zinc Oxide, Titanium Dioxide, Aloe Vera, Vitamin E.",
    benefits: [
      "Broad-spectrum UVA/UVB protection",
      "Reef-safe mineral formula",
      "Non-greasy and lightweight",
      "No white cast"
    ],
    usage: "Apply generously as the final step of your morning routine. Reapply every 2 hours if exposed to sun."
  }
];

export const skinTypes = [
  "All",
  "Dry",
  "Oily",
  "Combination",
  "Sensitive",
  "Aging",
  "Dull",
  "Acne-Prone"
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Verified Buyer",
    content: "The Hydrating Serum completely transformed my dry skin. It's glowing like never before!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Michelle Wong",
    role: "Beauty Enthusiast",
    content: "I've tried so many Vitamin C creams, but GlowUp's formula is the only one that doesn't irritate my sensitive skin.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id: 3,
    name: "Jessica Parker",
    role: "Verified Buyer",
    content: "Fast shipping and the packaging is gorgeous. The products actually work as promised.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  }
];
