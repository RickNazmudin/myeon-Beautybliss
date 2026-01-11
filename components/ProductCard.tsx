"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  shopee: string;
  tiktok: string;
};

// SVG Icons (modern line art)
const ShopeeIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="3" x2="9" y2="21" />
  </svg>
);

const TikTokIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
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
    image = "/images/placeholder.jpg",
    shopee = "#",
    tiktok = "#",
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
          <span className="text-sm text-gray-400 line-through">Rp 500.000</span>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent"></div>

        <div className="flex gap-3">
          <a
            href={shopee}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex-1 relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <ShopeeIcon />
              <span>Shopee</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-20 transform -skew-x-12 group-hover/btn:translate-x-full transition-all duration-700"></div>
          </a>

          <a
            href={tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex-1 relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-900 to-black px-4 py-3 text-center text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <TikTokIcon />
              <span>TikTok</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-20 transform -skew-x-12 group-hover/btn:translate-x-full transition-all duration-700"></div>
          </a>
        </div>

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
