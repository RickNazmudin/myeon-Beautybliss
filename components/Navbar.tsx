"use client";

import { useState, useEffect } from "react";

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Produk", href: "#products" },
  { name: "Testimoni", href: "#testimonials" },
  { name: "Kontak", href: "#contact" },
];

// SVG Icons
const MenuIcon = () => (
  <svg
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const ShoppingBagIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>
);

const PhoneIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-gradient-to-r from-rose-50 to-pink-50"
      }`}
    >
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden lg:block bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4">
              <a
                href="tel:+62"
                className="flex items-center space-x-2 hover:text-rose-100 transition-colors"
              >
                <PhoneIcon />
                <span>+62 812-3456-7890</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-rose-100 transition-colors">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="relative">
              {/* Decorative element */}
              <div className="absolute -inset-2 bg-gradient-to-r from-rose-400 to-pink-400 rounded-lg opacity-20 blur"></div>
              <div className="relative">
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                  MyeonBeauty
                </h1>
                <p className="text-xs text-rose-600 font-medium tracking-widest">
                  BLISS
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-gray-700 hover:text-rose-600 font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">{item.name}</span>
                {/* Hover effect */}
                <span className="absolute inset-0 bg-rose-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                {/* Bottom border animation */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="relative group px-6 py-2.5 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
              <span className="relative z-10 flex items-center space-x-2">
                <ShoppingBagIcon />
                <span>Belanja</span>
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-all duration-300"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white shadow-lg">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-700 hover:text-rose-600 hover:bg-rose-50 font-medium transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
          <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
            <ShoppingBagIcon className="w-5 h-5" />
            <span>Belanja Sekarang</span>
          </button>
          {/* Mobile contact info */}
          <div className="pt-4 border-t border-rose-100 mt-4">
            <a
              href="tel:+62"
              className="flex items-center space-x-2 text-gray-600 hover:text-rose-600 transition-colors"
            >
              <PhoneIcon />
              <span className="text-sm">+62 896-1725-7030</span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative border */}
      <div className="h-1 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600"></div>
    </nav>
  );
}
