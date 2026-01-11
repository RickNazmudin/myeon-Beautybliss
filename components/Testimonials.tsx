"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Aisyah Rahma",
    text: "Kualitas produknya bagus banget, jahitannya rapi dan bahannya adem!",
    initial: "AR",
    color: "from-rose-400 to-pink-500",
    rating: 5,
    product: "Gamis Aira Flowy",
  },
  {
    name: "Nurul Fadilah",
    text: "Pengiriman cepat, packing aman, recommended untuk cari hijab daily!",
    initial: "NF",
    color: "from-purple-400 to-pink-500",
    rating: 5,
    product: "Hijab Instan Crinkle",
  },
  {
    name: "Siti Maryam",
    text: "Gamisnya flowy dan syar'i, cocok banget buat acara formal maupun santai.",
    initial: "SM",
    color: "from-pink-400 to-rose-500",
    rating: 5,
    product: "Kaftan Syari Premium",
  },
];

// SVG Icons Modern (line art minimalis)
const QuoteIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      d="M9 9l-3 3 3 3M15 9l3 3-3 3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M7 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
  </svg>
);

const StarIcon = ({ filled = true }) => (
  <svg
    className="w-5 h-5"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const VerifiedIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" />
    <path
      d="M9 11l2 2 4-4"
      stroke="white"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

// New: Minimal line art package/box icon for product tag
const PackageIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v4" />
    <path d="M21 10l-9 6-9-6" />
    <path d="M3 10v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10" />
    <polyline points="12 22 12 16" />
  </svg>
);

// New: Minimal line art pencil/write icon for CTA
const WriteIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="relative py-20 md:py-28 bg-gradient-to-b from-white via-pink-50/20 to-white overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(219, 39, 119, 0.04) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200 px-4 py-2 rounded-full">
            <span className="text-sm font-semibold text-rose-600">
              Testimoni Pelanggan
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="block bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Apa Kata Mereka?
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-600 leading-relaxed">
              Ribuan pelanggan puas telah merasakan kualitas produk kami
            </p>
          </div>
        </div>

        {/* Stats Section tetap sama */}

        {/* Testimonials Carousel - Mobile */}
        <div className="md:hidden mb-12">
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-rose-100">
              <div className="absolute -top-4 -left-4 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full p-3 text-white shadow-lg">
                <QuoteIcon />
              </div>

              <div className="flex space-x-1 mb-4 text-yellow-400">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <StarIcon key={i} filled={true} />
                ))}
              </div>

              <p className="text-gray-700 text-lg italic leading-relaxed mb-6">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="inline-block bg-rose-50 px-3 py-1 rounded-full mb-6">
                <span className="text-sm text-rose-600 font-medium flex items-center gap-1.5">
                  <PackageIcon /> {testimonials[currentIndex].product}
                </span>
              </div>

              <div className="flex items-center">
                <div className="relative">
                  <div
                    className={`h-14 w-14 rounded-full bg-gradient-to-br ${testimonials[currentIndex].color} flex items-center justify-center text-white font-bold text-lg ring-4 ring-rose-100 shadow-lg`}
                  >
                    {testimonials[currentIndex].initial}
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-rose-500 rounded-full p-1">
                    <VerifiedIcon />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-gray-500">Verified Buyer</p>
                </div>
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-rose-600"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-rose-600"
            >
              <ChevronRightIcon />
            </button>
          </div>

          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-rose-600" : "w-2 bg-rose-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Grid - Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-rose-100 hover:border-rose-200 hover:-translate-y-2"
            >
              <div className="absolute -top-4 -left-4 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full p-3 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <QuoteIcon />
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full filter blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

              <div className="flex space-x-1 mb-4 text-yellow-400">
                {[...Array(item.rating)].map((_, i) => (
                  <StarIcon key={i} filled={true} />
                ))}
              </div>

              <p className="text-gray-700 text-lg italic leading-relaxed mb-6 relative z-10">
                "{item.text}"
              </p>

              <div className="inline-block bg-rose-50 px-3 py-1 rounded-full mb-6">
                <span className="text-sm text-rose-600 font-medium flex items-center gap-1.5">
                  <PackageIcon /> {item.product}
                </span>
              </div>

              <div className="flex items-center relative z-10">
                <div className="relative">
                  <div
                    className={`h-14 w-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-lg ring-4 ring-rose-100 group-hover:ring-rose-200 transition-all duration-300 shadow-lg`}
                  >
                    {item.initial}
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-rose-500 rounded-full p-1">
                    <VerifiedIcon />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">Verified Buyer</p>
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Ingin berbagi pengalaman Anda?</p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <WriteIcon /> {/* Ganti emoji pencil dengan SVG write */}
            <span>Tulis Testimoni</span>
          </a>
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

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
