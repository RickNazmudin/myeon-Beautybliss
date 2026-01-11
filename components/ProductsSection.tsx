"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

// Filter Categories
const categories = [
  {
    id: "all",
    name: "Semua Produk",
    icon: (
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
    ),
  },
  {
    id: "gamis",
    name: "Gamis",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v20M4 10h16M8 6h8M6 14h12" />
      </svg>
    ),
  },
  {
    id: "hijab",
    name: "Hijab",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 4c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7z" />
        <path d="M12 2v4M8 12h8" />
      </svg>
    ),
  },
  {
    id: "tunik",
    name: "Tunik",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 6h16v12H4z" />
        <path d="M8 10h8M8 14h8" />
      </svg>
    ),
  },
  {
    id: "dress",
    name: "Dress",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L4 8v12h16V8z" />
        <path d="M12 2v6" />
      </svg>
    ),
  },
];

const SortIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
    />
  </svg>
);

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
                <span className="text-lg">{category.icon}</span>
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
