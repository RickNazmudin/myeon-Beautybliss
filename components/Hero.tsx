"use client";

import { useState, useEffect } from "react";

// SVG Icons
const SparklesIcon = () => (
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
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
);

const ShoppingBagIcon = () => (
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
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    { icon: "", text: "Koleksi Terbaru 2025" },
    { icon: "", text: "Gratis Ongkir Min 200K" },
    { icon: "", text: "Kualitas Premium" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Pattern Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(219, 39, 119, 0.05) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-rose-100">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
              </span>
              <span className="text-sm font-medium text-rose-600">
                Koleksi Baru Tersedia
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Myeon Beautybliss
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800">
                Fashion Muslim
                <span className="relative inline-block ml-2">
                  <span className="relative z-10">Kekinian</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-rose-200 -z-10 transform -rotate-1"></span>
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Temukan koleksi gamis, hijab, makeup dan busana muslim modern
              dengan desain elegan dan harga terbaik. Tampil cantik dan syar'i
              setiap hari!
            </p>

            {/* Features Carousel */}
            <div className="relative h-12 overflow-hidden">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center lg:justify-start transition-all duration-500 ${
                    currentSlide === index
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform translate-y-4"
                  }`}
                >
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg">
                    <span className="text-xl">{feature.icon}</span>
                    <span className="font-semibold">{feature.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#products"
                className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <ShoppingBagIcon />
                  <span>Lihat Koleksi</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>
              </a>

              <a
                href="#testimonials"
                className="group w-full sm:w-auto px-8 py-4 bg-white text-rose-600 rounded-full font-semibold shadow-lg hover:shadow-xl border-2 border-rose-200 hover:border-rose-300 transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center justify-center space-x-2">
                  <HeartIcon />
                  <span>Testimoni</span>
                </span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                  1000+
                </div>
                <div className="text-sm text-gray-600 mt-1">Produk</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                  5000+
                </div>
                <div className="text-sm text-gray-600 mt-1">Pelanggan</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                  4.9★
                </div>
                <div className="text-sm text-gray-600 mt-1">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="aspect-[3/4] bg-gradient-to-br from-rose-200 to-pink-200">
                  <img
                    src="/images/hero-bg.jpg"
                    alt="Fashion Muslim Modern"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full filter blur-2xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full filter blur-2xl opacity-60 animate-pulse animation-delay-2000"></div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-4 transform hover:scale-110 transition-transform duration-300 z-20">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-rose-500 to-pink-500 rounded-full p-3 text-white">
                    <SparklesIcon />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">
                      Promo Spesial
                    </div>
                    <div className="text-xs text-gray-600">
                      Diskon hingga 50%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
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

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
