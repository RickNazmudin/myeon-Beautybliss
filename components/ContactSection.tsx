"use client";

import { useState } from "react";

// SVG Icons
const WhatsAppIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.302.002.6.062.88.18V8.4a6.1 6.1 0 0 0-.88-.13A5.32 5.32 0 1 0 14.68 17v-8a8.53 8.53 0 0 0 4.91 1.52V9.06a4.85 4.85 0 0 1-3.77-1.89l.03-.48z" />
  </svg>
);

const SendIcon = () => (
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
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    />
  </svg>
);

const ArrowRightIcon = () => (
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
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 bg-gradient-to-b from-white via-rose-50/30 to-white overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/3 -left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        {/* Pattern Overlay */}
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
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200 px-4 py-2 rounded-full">
            <span className="text-sm font-semibold text-rose-600">
              Hubungi Kami
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="block bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Mari Berbincang
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-600 leading-relaxed">
              Ada pertanyaan tentang produk, ukuran, pengiriman, atau ingin
              kolaborasi? Kami siap membantu Anda!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Info Kontak (kiri) */}
          <div className="space-y-6">
            {/* WhatsApp */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-rose-100 hover:border-rose-200">
              <div className="flex gap-4 items-start relative z-10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <WhatsAppIcon />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    WhatsApp
                  </h3>
                  <p className="text-gray-600 mb-3">+62 896-1725-7030</p>
                  <a
                    href="https://wa.me/6289617257030?text=Assalamualaikum%2C%20saya%20ingin%20tanya%20tentang%20produk%20di%20MyeonBeautybliss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-rose-600 hover:text-rose-700 font-semibold group/link"
                  >
                    <span>Chat via WhatsApp</span>
                    <ArrowRightIcon />
                  </a>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full filter blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>

            {/* Email */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-rose-100 hover:border-rose-200">
              <div className="flex gap-4 items-start relative z-10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <EmailIcon />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600 mb-3">
                    myeonbeautybliss20@gmail.com
                  </p>
                  <a
                    href="mailto:hello@myeonbeauty.com?subject=Pertanyaan%20dari%20Website"
                    className="inline-flex items-center space-x-2 text-rose-600 hover:text-rose-700 font-semibold group/link"
                  >
                    <span>Kirim Email</span>
                    <ArrowRightIcon />
                  </a>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full filter blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>

            {/* Instagram */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-rose-100 hover:border-rose-200">
              <div className="flex gap-4 items-start relative z-10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <TikTokIcon />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    TikTok
                  </h3>
                  <p className="text-gray-600 mb-3">@myeonbeautybliss</p>
                  <a
                    href="https://www.tiktok.com/@beautyblissmyeon_?lang=id-ID"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-rose-600 hover:text-rose-700 font-semibold group/link"
                  >
                    <span>Follow & DM</span>
                    <ArrowRightIcon />
                  </a>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100 to-purple-200 rounded-full filter blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>

            {/* Info Box */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 p-6 shadow-xl text-white">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Jam Operasional</h3>
                <p className="text-rose-50 leading-relaxed">
                  Senin - Sabtu: 09.00 - 21.00 WIB
                  <br />
                  Minggu: 10.00 - 18.00 WIB
                </p>
              </div>

              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
                    backgroundSize: "30px 30px",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Form Kontak (kanan) */}
          <div className="relative">
            <div className="relative rounded-3xl bg-white p-8 shadow-2xl border border-rose-100">
              {/* Decorative element */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full filter blur-2xl opacity-30"></div>

              <div className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-2 ring-rose-100 placeholder:text-gray-400 focus:ring-2 focus:ring-rose-500 transition-all duration-300"
                      placeholder="Nama Anda"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-2 ring-rose-100 placeholder:text-gray-400 focus:ring-2 focus:ring-rose-500 transition-all duration-300"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-2 ring-rose-100 placeholder:text-gray-400 focus:ring-2 focus:ring-rose-500 transition-all duration-300 resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 px-6 py-4 text-base font-semibold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <SendIcon />
                    <span>Kirim Pesan</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>
                </button>
              </div>
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
