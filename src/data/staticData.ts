// Static data for the e-commerce website - similar to Amazon's product catalog

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  rating: number;
  reviews: number;
  category: string;
  brand: string;
  isOnSale?: boolean;
  isFeatured?: boolean;
  stock: number;
  features?: string[];
  description: string;
  specifications?: Record<string, string>;
}

export const categories = [
  { name: "Electronics", icon: "📱", count: "2,847 items" },
  { name: "Fashion", icon: "👕", count: "5,234 items" },
  { name: "Home & Garden", icon: "🏠", count: "3,456 items" },
  { name: "Sports", icon: "⚽", count: "1,987 items" },
  { name: "Books", icon: "📚", count: "8,765 items" },
  { name: "Beauty", icon: "💄", count: "2,345 items" },
  { name: "Automotive", icon: "🚗", count: "1,234 items" },
  { name: "Health", icon: "🏥", count: "987 items" },
];

export const brands = [
  { name: "Apple", count: 245 },
  { name: "Samsung", count: 189 },
  { name: "Sony", count: 156 },
  { name: "LG", count: 134 },
  { name: "Nike", count: 298 },
  { name: "Adidas", count: 267 },
  { name: "Puma", count: 145 },
  { name: "Canon", count: 89 },
  { name: "Nikon", count: 76 },
  { name: "Philips", count: 123 },
];

export const products: Product[] = [
  // Electronics
  {
    id: "1",
    name: "Apple iPhone 15 Pro Max 256GB",
    price: 134900,
    originalPrice: 139900,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop"
    ],
    rating: 4.8,
    reviews: 2847,
    category: "Electronics",
    brand: "Apple",
    isOnSale: true,
    isFeatured: true,
    stock: 25,
    features: [
      "A17 Pro chip with 6-core GPU",
      "Professional camera system",
      "Titanium design",
      "All-day battery life",
      "5G connectivity"
    ],
    description: "The most advanced iPhone ever, featuring the powerful A17 Pro chip, professional camera system, and stunning titanium design.",
    specifications: {
      "Display": "6.7-inch Super Retina XDR",
      "Chip": "A17 Pro",
      "Storage": "256GB",
      "Camera": "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
      "Battery": "Up to 29 hours video playback",
      "Operating System": "iOS 17"
    }
  },
  {
    id: "2",
    name: "Samsung Galaxy S24 Ultra 512GB",
    price: 129999,
    originalPrice: 139999,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=400&fit=crop"
    ],
    rating: 4.7,
    reviews: 1956,
    category: "Electronics",
    brand: "Samsung",
    isOnSale: true,
    stock: 18,
    features: [
      "200MP camera with AI zoom",
      "S Pen included",
      "Snapdragon 8 Gen 3",
      "6.8-inch Dynamic AMOLED 2X",
      "5000mAh battery"
    ],
    description: "The ultimate Android flagship with S Pen functionality, incredible camera capabilities, and premium design.",
    specifications: {
      "Display": "6.8-inch Dynamic AMOLED 2X",
      "Processor": "Snapdragon 8 Gen 3",
      "Storage": "512GB",
      "RAM": "12GB",
      "Camera": "200MP + 50MP + 12MP + 10MP",
      "Battery": "5000mAh"
    }
  },
  {
    id: "3",
    name: "Sony WH-1000XM5 Wireless Headphones",
    price: 29990,
    originalPrice: 34990,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
    ],
    rating: 4.6,
    reviews: 3421,
    category: "Electronics",
    brand: "Sony",
    isOnSale: true,
    isFeatured: true,
    stock: 42,
    features: [
      "Industry-leading noise canceling",
      "30-hour battery life",
      "Multipoint connection",
      "Premium comfort and sound",
      "Quick charge"
    ],
    description: "Experience unparalleled sound quality with industry-leading noise canceling technology.",
    specifications: {
      "Driver Unit": "30mm",
      "Frequency Response": "4Hz-40,000Hz",
      "Battery Life": "30 hours",
      "Charging": "USB-C quick charge",
      "Weight": "250g"
    }
  },
  {
    id: "4",
    name: "MacBook Air M3 13-inch 256GB",
    price: 114900,
    originalPrice: 119900,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop"
    ],
    rating: 4.9,
    reviews: 1234,
    category: "Electronics",
    brand: "Apple",
    isOnSale: true,
    stock: 12,
    features: [
      "M3 chip with 8-core CPU",
      "13.6-inch Liquid Retina display",
      "Up to 18 hours battery life",
      "8GB unified memory",
      "Fanless design"
    ],
    description: "Supercharged by the M3 chip, MacBook Air is a super-portable laptop that delivers exceptional performance.",
    specifications: {
      "Chip": "Apple M3",
      "Display": "13.6-inch Liquid Retina",
      "Memory": "8GB unified memory",
      "Storage": "256GB SSD",
      "Battery": "Up to 18 hours",
      "Weight": "1.24 kg"
    }
  },
  {
    id: "5",
    name: "Canon EOS R6 Mark II Mirrorless Camera",
    price: 189900,
    originalPrice: 199900,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop"
    ],
    rating: 4.8,
    reviews: 567,
    category: "Electronics",
    brand: "Canon",
    isOnSale: true,
    stock: 8,
    features: [
      "24.2MP full-frame CMOS sensor",
      "DIGIC X image processor",
      "4K 60p video recording",
      "In-body image stabilization",
      "Dual Pixel CMOS AF II"
    ],
    description: "Professional mirrorless camera with outstanding image quality and advanced video capabilities.",
    specifications: {
      "Sensor": "24.2MP Full-Frame CMOS",
      "Processor": "DIGIC X",
      "ISO Range": "100-102400",
      "Video": "4K 60p, Full HD 180p",
      "Stabilization": "In-Body IS up to 8 stops",
      "Weight": "588g"
    }
  },

  // Fashion
  {
    id: "6",
    name: "Nike Air Jordan 1 Retro High OG",
    price: 14995,
    originalPrice: 16995,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop"
    ],
    rating: 4.7,
    reviews: 2834,
    category: "Fashion",
    brand: "Nike",
    isOnSale: true,
    isFeatured: true,
    stock: 35,
    features: [
      "Premium leather upper",
      "Air-Sole unit cushioning",
      "Rubber outsole",
      "Classic basketball design",
      "Multiple colorways"
    ],
    description: "The iconic basketball shoe that started it all, featuring premium materials and timeless design.",
    specifications: {
      "Material": "Premium leather",
      "Sole": "Rubber outsole",
      "Cushioning": "Air-Sole unit",
      "Style": "High-top",
      "Origin": "Designed in USA"
    }
  },
  {
    id: "7",
    name: "Levi's 501 Original Fit Jeans",
    price: 4999,
    originalPrice: 5999,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 5672,
    category: "Fashion",
    brand: "Levi's",
    isOnSale: true,
    stock: 67,
    features: [
      "100% cotton denim",
      "Classic straight fit",
      "Button fly",
      "Five-pocket styling",
      "Iconic Levi's branding"
    ],
    description: "The original blue jean since 1873, with a timeless straight fit and classic style.",
    specifications: {
      "Material": "100% Cotton",
      "Fit": "Straight",
      "Rise": "Mid-rise",
      "Closure": "Button fly",
      "Care": "Machine wash cold"
    }
  },

  // Home & Garden
  {
    id: "8",
    name: "Dyson V15 Detect Absolute Cordless Vacuum",
    price: 52900,
    originalPrice: 59900,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 1456,
    category: "Home & Garden",
    brand: "Dyson",
    isOnSale: true,
    isFeatured: true,
    stock: 15,
    features: [
      "Laser dust detection",
      "Powerful suction",
      "LCD screen",
      "Up to 60 minutes runtime",
      "Advanced filtration"
    ],
    description: "The most powerful, intelligent Dyson vacuum with laser dust detection technology.",
    specifications: {
      "Battery": "Up to 60 minutes",
      "Bin Volume": "0.77L",
      "Weight": "3.0kg",
      "Filtration": "Advanced whole-machine filtration",
      "Display": "LCD screen"
    }
  },

  // Sports
  {
    id: "9",
    name: "Yonex Arcsaber 11 Pro Badminton Racket",
    price: 18999,
    originalPrice: 21999,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 892,
    category: "Sports",
    brand: "Yonex",
    isOnSale: true,
    stock: 22,
    features: [
      "High-modulus graphite frame",
      "Rotational Generator System",
      "3U weight",
      "Medium flex",
      "Professional level"
    ],
    description: "Professional badminton racket designed for all-round aggressive play with exceptional control.",
    specifications: {
      "Weight": "3U (85-89g)",
      "Flex": "Medium",
      "Balance": "Even",
      "String Tension": "Up to 30lbs",
      "Grip Size": "G4"
    }
  },

  // Books
  {
    id: "10",
    name: "Atomic Habits by James Clear",
    price: 599,
    originalPrice: 699,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 12456,
    category: "Books",
    brand: "Avery",
    isOnSale: true,
    isFeatured: true,
    stock: 156,
    features: [
      "Bestselling self-help book",
      "Practical strategies",
      "Evidence-based approach",
      "320 pages",
      "Paperback edition"
    ],
    description: "The life-changing million-copy bestseller on how to build good habits and break bad ones.",
    specifications: {
      "Author": "James Clear",
      "Publisher": "Avery",
      "Pages": "320",
      "Language": "English",
      "Format": "Paperback",
      "ISBN": "9780735211292"
    }
  },

  // Beauty
  {
    id: "11",
    name: "Lakme Absolute Perfect Radiance Foundation",
    price: 1250,
    originalPrice: 1500,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    rating: 4.3,
    reviews: 3456,
    category: "Beauty",
    brand: "Lakme",
    isOnSale: true,
    stock: 89,
    features: [
      "SPF 20 protection",
      "Full coverage",
      "Long-lasting formula",
      "Multiple shades available",
      "Lightweight texture"
    ],
    description: "Perfect radiance foundation with SPF 20 for flawless, long-lasting coverage.",
    specifications: {
      "Type": "Liquid Foundation",
      "Coverage": "Full",
      "SPF": "20",
      "Volume": "25ml",
      "Finish": "Natural radiance"
    }
  },

  // More products to expand the catalog
  {
    id: "12",
    name: "Samsung 55-inch 4K Smart TV",
    price: 54999,
    originalPrice: 64999,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 2134,
    category: "Electronics",
    brand: "Samsung",
    isOnSale: true,
    stock: 12,
    features: [
      "4K Ultra HD resolution",
      "Smart TV with Tizen OS",
      "HDR10+ support",
      "Crystal Display",
      "Voice control"
    ],
    description: "Immersive 4K viewing experience with smart features and crystal-clear display technology.",
    specifications: {
      "Screen Size": "55 inches",
      "Resolution": "4K Ultra HD (3840 x 2160)",
      "Smart TV": "Tizen OS",
      "HDR": "HDR10+",
      "Connectivity": "3 HDMI, 2 USB, Wi-Fi"
    }
  }
];

export const featuredProducts = products.filter(p => p.isFeatured).slice(0, 8);
export const saleProducts = products.filter(p => p.isOnSale).slice(0, 12);
export const newArrivals = products.slice(0, 8);

// Filter functions
export const getProductsByCategory = (category: string) => 
  products.filter(p => p.category.toLowerCase() === category.toLowerCase());

export const getProductsByBrand = (brand: string) => 
  products.filter(p => p.brand.toLowerCase() === brand.toLowerCase());

export const getProductById = (id: string) => 
  products.find(p => p.id === id);

export const searchProducts = (query: string) => 
  products.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.brand.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

export const filterProducts = (filters: {
  categories?: string[];
  brands?: string[];
  priceRange?: [number, number];
  rating?: number;
}) => {
  return products.filter(product => {
    if (filters.categories && filters.categories.length > 0) {
      if (!filters.categories.includes(product.category)) return false;
    }
    
    if (filters.brands && filters.brands.length > 0) {
      if (!filters.brands.includes(product.brand)) return false;
    }
    
    if (filters.priceRange) {
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }
    }
    
    if (filters.rating) {
      if (product.rating < filters.rating) return false;
    }
    
    return true;
  });
};

export const sortProducts = (products: Product[], sortBy: string) => {
  const sorted = [...products];
  
  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'reviews':
      return sorted.sort((a, b) => b.reviews - a.reviews);
    case 'newest':
      return sorted.reverse(); // Assuming products are added in chronological order
    case 'featured':
    default:
      return sorted.sort((a, b) => {
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return b.rating - a.rating;
      });
  }
};