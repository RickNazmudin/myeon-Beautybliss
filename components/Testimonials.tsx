"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Aisyah Rahma",
    text: "Mukenanya premium banget, bahannya lembut dan adem. Packingnya rapih, recommended!",
    initial: "AR",
    color: "from-rose-400 to-pink-500",
    rating: 5,
    product: "Mukena Gracella Premium",
  },
  {
    name: "Nurul Fadilah",
    text: "Pashmina inner-nya enak banget dipake, ga licin dan nyaman seharian!",
    initial: "NF",
    color: "from-purple-400 to-pink-500",
    rating: 5,
    product: "Pashmina Inner Jersey",
  },
  {
    name: "Siti Maryam",
    text: "Gamis kokonya cocok banget buat lebaran keluarga, kualitas oke harga terjangkau!",
    initial: "SM",
    color: "from-pink-400 to-rose-500",
    rating: 5,
    product: "Gamis Koko Set Lebaran",
  },
  {
    name: "Dewi Safitri",
    text: "Hijab instan bergo-nya praktis banget, cocok buat daily yang sibuk!",
    initial: "DS",
    color: "from-indigo-400 to-purple-500",
    rating: 5,
    product: "Hijab Instan Bergo Huma",
  },
  {
    name: "Ratih Kusuma",
    text: "Pashmina viscose-nya jatuh bagus, warnanya juga cantik sesuai foto.",
    initial: "RK",
    color: "from-rose-500 to-pink-400",
    rating: 5,
    product: "Pashmina Viscose Shawl",
  },
  {
    name: "Indah Permata",
    text: "Celana kulotnya nyaman dan motifnya kekinian, cocok untuk remaja!",
    initial: "IP",
    color: "from-purple-500 to-indigo-400",
    rating: 5,
    product: "Celana Kulot Rayon Motif",
  },
  {
    name: "Laila Fitri",
    text: "Cardigannya hangat dan modelnya Korean style banget, suka!",
    initial: "LF",
    color: "from-pink-500 to-rose-400",
    rating: 5,
    product: "Cardigan Wol Rajut Korean",
  },
  {
    name: "Zahra Amelia",
    text: "Liplast cream-nya tahan lama, bibir jadi lembab dan warnanya natural!",
    initial: "ZA",
    color: "from-rose-400 to-orange-400",
    rating: 5,
    product: "Hanasui Liplast Cream",
  },
  {
    name: "Fatimah Azzahra",
    text: "Pashmina rayon-nya premium, bahannya soft dan nyaman dipake seharian.",
    initial: "FA",
    color: "from-purple-400 to-pink-400",
    rating: 5,
    product: "Hijab Pashmina Rayon",
  },
  {
    name: "Rizka Handayani",
    text: "Belinya 10 pcs sekaligus, worthed! Bahan voalnya adem dan warnanya cantik.",
    initial: "RH",
    color: "from-indigo-500 to-purple-400",
    rating: 5,
    product: "Hijab Segiempat Paris Voal",
  },
  {
    name: "Hanifah Salsabila",
    text: "French khimar-nya syar'i banget, bisa jadi cadar juga. Multifungsi!",
    initial: "HS",
    color: "from-pink-400 to-purple-500",
    rating: 5,
    product: "French Khimar Instan Syari",
  },
  {
    name: "Nadia Putri",
    text: "Bergo motifnya lucu-lucu, cocok buat daily hijab yang simpel tapi tetap stylish!",
    initial: "NP",
    color: "from-rose-500 to-pink-500",
    rating: 5,
    product: "Jilbab Instan Bergo Motif",
  },
  {
    name: "Aisha Maharani",
    text: "Khimar bergo-nya syar'i dan bahannya jersey premium, nyaman banget!",
    initial: "AM",
    color: "from-purple-500 to-pink-400",
    rating: 5,
    product: "Khimar Bergo Jaffa",
  },
  {
    name: "Maya Lestari",
    text: "Hijab voal motif printing-nya cantik, warnanya soft dan bahannya adem.",
    initial: "ML",
    color: "from-pink-500 to-rose-500",
    rating: 5,
    product: "Hijab Voal Motif Blush",
  },
  {
    name: "Salsabila Putri",
    text: "Hijab segiempat Viney-nya berkualitas, bahannya jatuh dan ga licin!",
    initial: "SP",
    color: "from-indigo-400 to-purple-500",
    rating: 5,
    product: "Koyu Hijab Segiempat Viney",
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
  </svg>
);

const StarIcon = ({ filled = true }: { filled?: boolean }) => (
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
  </svg>
);

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
      className="py-12 md:py-20 bg-gradient-to-b from-white to-rose-50/30 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center px-3 py-1.5 bg-rose-100/60 rounded-full mb-4 text-sm">
            <span className="font-semibold text-rose-700">
              Testimoni Pelanggan
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            Apa Kata Mereka?
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-600 max-w-xl mx-auto">
            Ribuan pelanggan puas dengan kualitas dan pelayanan kami
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation buttons – disembunyikan di mobile kecil agar tidak ganggu */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-0 md:left-[-2.5rem] top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-md hover:bg-rose-50 border border-rose-100 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeftIcon />
          </button>

          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-0 md:right-[-2.5rem] top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-md hover:bg-rose-50 border border-rose-100 transition-colors"
            aria-label="Next"
          >
            <ChevronRightIcon />
          </button>

          <div className="overflow-hidden -mx-2 sm:mx-0">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="min-w-full flex-shrink-0 px-2 sm:px-3 lg:px-4"
                >
                  <div
                    className="
                      bg-white rounded-2xl shadow-md border border-rose-100/60 
                      p-5 sm:p-6 md:p-7 
                      mx-auto
                      max-w-[340px] xs:max-w-[360px] sm:max-w-[420px] md:max-w-[480px] 
                      flex flex-col h-full
                      hover:shadow-lg transition-shadow duration-300
                    "
                  >
                    {/* Quote & Text */}
                    <div className="flex-grow">
                      <div className="text-rose-400 text-3xl mb-1.5">“</div>
                      <p
                        className="
                          text-gray-700 
                          text-[15px] xs:text-base sm:text-[15.5px] md:text-base 
                          leading-relaxed 
                          mb-4 sm:mb-5
                          line-clamp-5 sm:line-clamp-6 md:line-clamp-none
                        "
                      >
                        {item.text}
                      </p>
                    </div>

                    {/* Rating + Product */}
                    <div className="space-y-3 mt-1 sm:mt-2">
                      <div className="flex items-center gap-1 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} filled={i < item.rating} />
                        ))}
                      </div>

                      <div className="inline-flex items-center gap-1.5 bg-rose-50/80 px-3 py-1 rounded-full text-xs sm:text-sm text-rose-700">
                        <PackageIcon />
                        <span className="font-medium truncate max-w-[140px] xs:max-w-[180px] sm:max-w-[220px]">
                          {item.product}
                        </span>
                      </div>
                    </div>

                    {/* User Info */}
                    <div className="flex items-center mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-rose-100">
                      <div
                        className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-sm`}
                      >
                        {item.initial}
                      </div>
                      <div className="ml-2.5 sm:ml-3">
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">
                          {item.name}
                        </p>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          Verified Buyer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots – diperbesar sedikit agar mudah di-tap */}
          <div className="flex justify-center gap-2.5 sm:gap-3.5 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 sm:w-10 bg-rose-600"
                    : "w-2.5 sm:w-3 bg-rose-200 hover:bg-rose-300"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all text-sm sm:text-base"
          >
            <WriteIcon />
            Tulis Testimoni Kamu
          </a>
        </div>
      </div>
    </section>
  );
}
