"use client";
import React, { useState } from "react";

const items = [
  {
    title: "Oyun Terapisi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: (
      <svg
        className="w-16 h-16 p-1 -mt-1 mb-2"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000"
        width={200}
        height={200}
      >
        <path
          fill="#333"
          d="M32 2C16.6 2 4 14.6 4 30s12.6 28 28 28 28-12.6 28-28S47.4 2 32 2zm0 50c-12.1 0-22-9.9-22-22s9.9-22 22-22 22 9.9 22 22-9.9 22-22 22z"
        />
      </svg>
    ),
  },
  {
    title: "Çocuk Danışmanlığı",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: (
      <svg
        className="w-16 h-16 p-1 -mt-1 mb-2"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
<path
          fill="#333"
          d="M32 2C16.6 2 4 14.6 4 30s12.6 28 28 28 28-12.6 28-28S47.4 2 32 2zm0 50c-12.1 0-22-9.9-22-22s9.9-22 22-22 22 9.9 22 22-9.9 22-22 22z"
        />      </svg>
    ),
  },
  {
    title: "MOXO Dikkat Testi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: (
      <svg
        className="w-16 h-16 p-1 -mt-1 mb-2"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
<path
          fill="#333"
          d="M32 2C16.6 2 4 14.6 4 30s12.6 28 28 28 28-12.6 28-28S47.4 2 32 2zm0 50c-12.1 0-22-9.9-22-22s9.9-22 22-22 22 9.9 22 22-9.9 22-22 22z"
        />      </svg>
    ),
  },
  {
    title: "Ebeveyn Danışmanlığı",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: (
      <svg
        className="w-16 h-16 p-1 -mt-1 mb-2"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Example SVG path */}
        <path
          fill="#333"
          d="M32 2C16.6 2 4 14.6 4 30s12.6 28 28 28 28-12.6 28-28S47.4 2 32 2zm0 50c-12.1 0-22-9.9-22-22s9.9-22 22-22 22 9.9 22 22-9.9 22-22 22z"
        />
      </svg>
    ),
  },
  {
    title: "Ergen Danışmanlığı",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: (
      <svg
        className="w-16 h-16 p-1 -mt-1 mb-2"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#333"
          d="M32 2C16.6 2 4 14.6 4 30s12.6 28 28 28 28-12.6 28-28S47.4 2 32 2zm0 50c-12.1 0-22-9.9-22-22s9.9-22 22-22 22 9.9 22 22-9.9 22-22 22z"
        />
      </svg>
    ),
  },
  {
    title: "Yetişkin Danışmanlığı",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: (
      <svg
        className="w-16 h-16 p-1 -mt-1 mb-2"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#333"
          d="M32 2C16.6 2 4 14.6 4 30s12.6 28 28 28 28-12.6 28-28S47.4 2 32 2zm0 50c-12.1 0-22-9.9-22-22s9.9-22 22-22 22 9.9 22 22-9.9 22-22 22z"
        />
      </svg>
    ),
  },
];

export default function FeaturesBlocks() {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const left = e.clientX - rect.left;
    const top = e.clientY - rect.top;

    setPosition({ left, top });
};

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 blur-sm bg-blue-900 pointer-events-none shadow-inner"
        style={{
          backgroundImage: `url('/images/svg.svg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-32 bg-gradient-to-t blur-sm from-blue-900 transform translate-y-1/2"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-10 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-18">
            <h2 className="h2 mb-4">Hizmetlerim</h2>
            {/* <p className="text-xl text-gray-600">Size nasıl yardımcı olabilirim?</p> */}
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Radial gradient effect on the entire grid */}
            {isHovered && (
              <div
                className="absolute mt-40 ml-5"
                style={{
                  left: `${position.left}px`,
                  top: `${position.top}px`,
                  transform: "translate(-50%, -50%)",
                  width: "80px",
                  height: "80px",
                  background:
                    "radial-gradient(circle closest-side, #efefef, transparent)",
                }}
              ></div>
            )}

            {items.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center p-6 bg-white/25 backdrop-blur-xl rounded border border-black/20 shadow-xl"
              >
                {item.icon}
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
