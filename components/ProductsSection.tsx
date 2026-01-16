"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

// ── Icons sederhana ──────────────────────────────────────────────────────────

const AllIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4h16v16H4V4z" />
  </svg>
);

const HijabIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="8" r="4" />
    <path d="M8 14c-2 2-2 6-2 6h12s0-4-2-6" />
  </svg>
);

const TopsIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <rect x="6" y="4" width="12" height="10" rx="2" />
  </svg>
);

const BottomsIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <rect x="6" y="10" width="12" height="10" rx="2" />
  </svg>
);

const MakeupIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="6" />
    <circle cx="10" cy="10" r="2" fill="white" />
  </svg>
);

const MukenaIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
    <path d="M12 5v14M5 12h14" opacity="0.4" />
  </svg>
);

// ── Kategori (hanya 5 sesuai request) ───────────────────────────────────────

const categories = [
  { id: "all", name: "Semua Produk", icon: <AllIcon /> },
  { id: "hijab", name: "Hijab", icon: <HijabIcon /> },
  { id: "mukena", name: "Mukena", icon: <MukenaIcon /> },
  { id: "tops", name: "Tops", icon: <TopsIcon /> },
  { id: "bottoms", name: "Bottoms", icon: <BottomsIcon /> },
  { id: "makeup", name: "Makeup", icon: <MakeupIcon /> },
];

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = products.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  return (
    <section id="products" className="py-16 md:py-24 bg-rose-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-rose-700">
            Koleksi Kami
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Hijab, atasan, bawahan, dan makeup pilihan
          </p>
        </div>

        {/* Tombol kategori */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-rose-600 text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-rose-50"
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Info jumlah produk */}
        <div className="text-center sm:text-left mb-6 text-gray-600">
          Menampilkan{" "}
          <strong className="text-rose-600">{filteredProducts.length}</strong>{" "}
          produk
        </div>

        {/* Grid produk */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            Belum ada produk di kategori ini...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
