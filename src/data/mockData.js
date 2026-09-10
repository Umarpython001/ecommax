export const HERO_SLIDES = [
  {
    id: 'hero-controller',
    badge: 'GAMING GEAR',
    title: 'GAME CONTROLLER',
    subtitle: 'Controller type: Wireless controller',
    description: 'Precision ergonomic wireless gaming controller featuring dual rumble haptics, responsive analog triggers, and ultra-low latency Bluetooth connectivity.',
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.9,
    reviewsCount: 1420,
    accentColor: '#0284c7',
    imageType: 'controller',
  },
  {
    id: 'hero-pro-vr',
    badge: 'NEXT-GEN TECH',
    title: 'VR MATRIX HEADSET',
    subtitle: 'Display: Dual 4K OLED HDR 120Hz',
    description: 'Immersive spatial computing headset with inside-out tracking, spatial audio, and magnetic haptic controllers.',
    price: 399.99,
    originalPrice: 499.99,
    rating: 4.8,
    reviewsCount: 890,
    accentColor: '#38bdf8',
    imageType: 'vr',
  },
  {
    id: 'hero-pro-keyboard',
    badge: 'ESPORTS ELITE',
    title: 'MECH PRO KEYBOARD',
    subtitle: 'Switches: Hot-swappable Magnetic Hall',
    description: 'Ultra-fast rapid trigger mechanical keyboard with custom RGB backlighting and aircraft-grade aluminum top plate.',
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.95,
    reviewsCount: 2150,
    accentColor: '#6366f1',
    imageType: 'keyboard',
  }
];

export const HERO_SIDE_CARDS = {
  top: {
    id: 'bamboobuds',
    tag: 'NEW ARRIVALS',
    title: 'BAMBOOBUDS',
    subtitle: 'Active Noise Cancelling TWS',
    price: 89.00,
    linkText: 'Shop Now',
    tagColor: '#4ade80',
    bgGradient: 'from-[#7c3aed] via-[#8b5cf6] to-[#a855f7]',
  },
  bottom: {
    id: 'homepod-pro',
    tag: 'NEW ARRIVALS',
    title: 'HOMEPOD PRO',
    subtitle: 'Spatial Acoustic 360° Studio Sound',
    price: 199.00,
    linkText: 'Shop Now',
    tagColor: '#4ade80',
    bgGradient: 'from-[#0b0f19] via-[#16192e] to-[#1e1b4b]',
  }
};

export const CATEGORIES = [
  {
    id: 'tablet',
    name: 'Tablet',
    count: 28,
    color: 'from-blue-50 to-indigo-50',
    icon: 'tablet'
  },
  {
    id: 'smartphone',
    name: 'Smartphone',
    count: 45,
    color: 'from-emerald-50 to-teal-50',
    icon: 'smartphone'
  },
  {
    id: 'game-console',
    name: 'Game Console',
    count: 19,
    color: 'from-amber-50 to-orange-50',
    icon: 'gamepad'
  },
  {
    id: 'camera',
    name: 'Camera',
    count: 34,
    color: 'from-sky-50 to-cyan-50',
    icon: 'camera'
  },
  {
    id: 'smartwatch',
    name: 'Smartwatch',
    count: 52,
    color: 'from-orange-50 to-amber-50',
    icon: 'smartwatch'
  },
  {
    id: 'drone-flycam',
    name: 'Drone & Flycam',
    count: 14,
    color: 'from-purple-50 to-violet-50',
    icon: 'drone'
  },
  {
    id: 'audio',
    name: 'Audio',
    count: 67,
    color: 'from-slate-50 to-zinc-50',
    icon: 'headphones'
  },
  {
    id: 'computer',
    name: 'Computer',
    count: 41,
    color: 'from-cyan-50 to-blue-50',
    icon: 'computer'
  }
];

export const VALUE_PROPS = [
  {
    id: 'free-delivery',
    title: 'FREE US DELIVERY',
    description: 'For US customers (Including Alaska and Hawaii) or orders over $200',
    icon: 'truck'
  },
  {
    id: 'secure-payment',
    title: 'SECURE PAYMENT',
    description: 'We accept Visa, American Express, Paypal, Payoneer Mastercard and Discover',
    icon: 'shield-check'
  },
  {
    id: 'warranty',
    title: '1 YEAR WARRANTY',
    description: 'All of our products are made with care and covered for one year against manufacturing defects',
    icon: 'shield-alert'
  },
  {
    id: 'support-24-7',
    title: 'SUPPORT 24/7',
    description: 'Contact us 24 hours a day, 7 days a week. Call Us: 0123-456-789',
    icon: 'headphones'
  }
];

export const PROMO_CARDS = [
  {
    id: 'macbook-pro',
    title: 'MACBOOK PRO 16',
    subtitle: '2K Fullview Touch Display',
    price: 1299.00,
    originalPrice: 1499.00,
    bgColor: '#E5F2FC',
    badge: 'Popular',
    type: 'laptop'
  },
  {
    id: 'smart-speaker',
    title: 'SMART SPEAKER',
    subtitle: 'Dual-Speaker True sound',
    price: 149.00,
    originalPrice: 189.00,
    bgColor: '#F7E8F6',
    badge: 'Trending',
    type: 'duo-speaker'
  },
  {
    id: 'bamboo-speaker',
    title: 'BAMBOO SPEAKER',
    subtitle: 'Sound that Speaks for Itself',
    price: 89.00,
    originalPrice: 119.00,
    bgColor: '#E3F5F4',
    badge: 'Hot Seller',
    type: 'clear-speaker'
  }
];

export const SMARTPHONE_TRENDS = [
  {
    id: 'phone-1',
    category: 'SMARTPHONE',
    brand: 'Realme',
    name: 'Realme 11 Pro 5G - Sunrise Orange',
    specs: '8GB RAM • 256GB • 100MP OIS Camera',
    price: 329.00,
    originalPrice: 399.00,
    rating: 4.8,
    reviews: 156,
    colorStyle: 'orange',
    inStock: true,
    isTrending: true
  },
  {
    id: 'phone-2',
    category: 'SMARTPHONE',
    brand: 'Xiaomi',
    name: 'Xiaomi 13 Pro - Mint Glass Ceramic',
    specs: '12GB RAM • 512GB • Leica Optics 1-inch',
    price: 649.00,
    originalPrice: 749.00,
    rating: 4.9,
    reviews: 240,
    colorStyle: 'mint',
    inStock: true,
    isTrending: true
  },
  {
    id: 'phone-3',
    category: 'SMARTPHONE',
    brand: 'OnePlus',
    name: 'OnePlus Nord CE 3 - Emerald Jade',
    specs: '12GB RAM • 256GB • 80W SuperVOOC',
    price: 299.00,
    originalPrice: 349.00,
    rating: 4.7,
    reviews: 189,
    colorStyle: 'emerald',
    inStock: true,
    isTrending: true
  },
  {
    id: 'phone-4',
    category: 'TABLET / FLAGSHIP',
    brand: 'Vivo',
    name: 'Vivo X90 Pro+ - Cosmic Midnight Blue',
    specs: '12GB RAM • 512GB • Zeiss T* Coating',
    price: 799.00,
    originalPrice: 899.00,
    rating: 4.9,
    reviews: 310,
    colorStyle: 'darkblue',
    inStock: true,
    isTrending: true
  },
  {
    id: 'phone-5',
    category: 'FOLDABLE',
    brand: 'Samsung',
    name: 'Galaxy Z Flip 5 - Lilac Lavender',
    specs: '8GB RAM • 256GB • Flex Window 3.4"',
    price: 999.00,
    originalPrice: 1099.00,
    rating: 4.85,
    reviews: 420,
    colorStyle: 'flip',
    inStock: true,
    isTrending: true
  }
];

export const TRENDING_SEARCHES = [
  'iPhone',
  'Huawei Mateview',
  'GoPro',
  'Headphone',
  'Macbook Pro',
  'Wireless Earbuds',
  'Drone 4K'
];

export const NAV_LINKS = [
  { name: 'HOME', href: '#', active: true },
  { name: 'COLLECTIONS', href: '#collections' },
  { name: 'PRODUCTS', href: '#products' },
  { name: 'OTHER PAGES', href: '#pages', hasDropdown: true },
  { name: 'BLOG PAGES', href: '#blog' },
];
