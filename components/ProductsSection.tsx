"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

// SVG Icons - Modern Filled Style
const AllProductsIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />
  </svg>
);

const GamisIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L7 7v15h10V7l-5-5zm0 2.83L14 7v13h-4V7l2-2.17z" />
    <path d="M9 10h6v2H9v-2zm0 4h6v2H9v-2z" />
  </svg>
);

const HijabIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33A7.95 7.95 0 0020 12c0-4.41-3.59-8-8-8zm0 2c1.94 0 3.5 1.56 3.5 3.5S13.94 13 12 13s-3.5-1.56-3.5-3.5S10.06 6 12 6zm0 12c-2.03 0-4.43.82-6.14 2.88A7.95 7.95 0 0012 22a7.95 7.95 0 006.14-2.12C16.43 17.82 14.03 17 12 17z" />
  </svg>
);

const TunikIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 3H8L4 7v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7l-4-4zm2 14H6V7.83L7.83 6h8.34L18 7.83V17z" />
    <path d="M8 10h8v2H8v-2zm0 4h8v2H8v-2z" />
  </svg>
);

const DressIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L4 8v12h16V8l-8-6zm6 16H6V9.27l6-4.5 6 4.5V18z" />
    <path d="M8 12h8v2H8v-2zm0 4h8v2H8v-2z" />
  </svg>
);

const SortIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
  </svg>
);

const SparkleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l2.4 7.4L22 12l-7.6 2.6L12 22l-2.4-7.4L2 12l7.6-2.6L12 2z" />
    <path
      d="M5 2l1.5 4.5L11 8l-4.5 1.5L5 14l-1.5-4.5L-1 8l4.5-1.5L5 2z"
      opacity="0.5"
    />
  </svg>
);

const GiftIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 00-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
  </svg>
);

// Filter Categories
const categories = [
  {
    id: "all",
    name: "Semua Produk",
    icon: <AllProductsIcon />,
  },
  {
    id: "gamis",
    name: "Gamis",
    icon: <GamisIcon />,
  },
  {
    id: "hijab",
    name: "Hijab",
    icon: <HijabIcon />,
  },
  {
    id: "tunik",
    name: "Tunik",
    icon: <TunikIcon />,
  },
  {
    id: "dress",
    name: "Dress",
    icon: <DressIcon />,
  },
];

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section
      id="products"
      className="relative py-20 md:py-28 bg-gradient-to-b from-white via-rose-50/30 to-white overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200 px-4 py-2 rounded-full">
            <SparkleIcon />
            <span className="text-sm font-semibold text-rose-600">
              Koleksi Pilihan
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="block bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Koleksi Terbaru
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-600 leading-relaxed">
              Pilihan busana muslim modern yang nyaman, stylish, dan tetap
              syar'i untuk tampil percaya diri setiap hari
            </p>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-rose-50 border border-rose-100 hover:border-rose-200 hover:scale-105"
              }`}
            >
              <span className="flex items-center space-x-2">
                {category.icon}
                <span>{category.name}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Sort & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <div className="text-gray-600">
            Menampilkan{" "}
            <span className="font-semibold text-rose-600">
              {products.length}
            </span>{" "}
            produk
          </div>

          <button className="flex items-center space-x-2 px-6 py-2.5 bg-white border border-rose-200 rounded-full hover:border-rose-300 hover:shadow-md transition-all duration-300 text-gray-700 font-medium">
            <SortIcon />
            <span>Urutkan</span>
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-16 text-center">
          <button className="group relative px-10 py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Lihat Lebih Banyak</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>
          </button>
        </div>

        {/* Promo Banner */}
        <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 p-8 sm:p-12 shadow-2xl">
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          <div className="relative text-center text-white space-y-4">
            <div className="flex items-center justify-center mb-4">
              <GiftIcon />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Promo Spesial Bulan Ini!
            </h3>
            <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
              Dapatkan diskon hingga 50% + gratis ongkir untuk pembelian minimal
              Rp 200.000
            </p>
            <div className="pt-4">
              <a
                href="#products"
                className="inline-block px-8 py-4 bg-white text-rose-600 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Belanja Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
