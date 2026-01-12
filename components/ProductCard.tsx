"use client";

import { useState } from "react";

//ProductCard.tsx (tambahkan category di type, opsional)

type Product = {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  link: string;
  category?: string; // ← tambahkan ini agar TypeScript tidak complain
};

// SVG Icons (modern line art)
const ShoppingBagIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const HeartIcon = ({ filled = false }) => (
  <svg
    className="w-5 h-5"
    fill={filled ? "currentColor" : "none"}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const StarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

// New SVG for Free Shipping (package/box)
const FreeShippingIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v4" />
    <path d="M21 10l-9 6-9-6" />
    <path d="M3 10v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10" />
    <polyline points="12 22 12 16" />
  </svg>
);

// New SVG for Limited Stock (warning/exclamation)
const LimitedStockIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

export default function ProductCard({ product }: { product: Product }) {
  const [isLiked, setIsLiked] = useState(false);

  if (!product) return null;

  const {
    name = "Product Name",
    price = "Rp 0",
    originalPrice,
    image = "/images/placeholder.jpg",
    link = "#",
  } = product;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-rose-50">
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-rose-100 to-pink-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="absolute top-3 left-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
          New
        </div>

        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
            isLiked
              ? "bg-rose-500 text-white scale-110"
              : "bg-white/80 text-gray-600 hover:bg-white hover:scale-110"
          }`}
        >
          <HeartIcon filled={isLiked} />
        </button>

        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center space-x-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <StarIcon />
          <span className="text-sm font-semibold text-gray-800">4.9</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-rose-600 transition-colors duration-300">
          {name}
        </h3>

        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            {price}
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {originalPrice}
            </span>
          )}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent"></div>

        {/* Single Buy Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn block relative overflow-hidden rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 px-6 py-3.5 text-center text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <span className="relative z-10 flex items-center justify-center space-x-2">
            <ShoppingBagIcon />
            <span>Beli Disini</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-20 transform -skew-x-12 group-hover/btn:translate-x-full transition-all duration-700"></div>
        </a>

        {/* Quick Info - Emoji diganti SVG */}
        <div className="flex items-center justify-between text-xs text-gray-600 pt-2">
          <span className="flex items-center space-x-1.5">
            <FreeShippingIcon />
            <span>Gratis Ongkir</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <LimitedStockIcon />
            <span>Stok Terbatas</span>
          </span>
        </div>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
      </div>
    </div>
  );
}
