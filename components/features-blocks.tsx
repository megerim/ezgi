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
        <g>
          <g>
            <path
              d="M238.186,144.511c-3.266-7.931-12.343-11.71-20.272-8.449l-44.825,18.454l-50.818,2.389
			c-3.608-3.089-8.171-5.129-13.266-5.549c-25.07-2.06-19.302-1.586-41.565-3.416c-8.937-0.735-17.32,3.702-21.866,11.141
			c-12.083,14.407-7.088,8.451-40.04,47.738c-2.234,2.663-3.51,6-3.623,9.475l-1.903,58.554
			c-0.279,8.572,6.444,15.748,15.017,16.026c8.556,0.281,15.747-6.432,16.026-15.017l1.729-53.19l28.659-34.169l-15.292,32.693
			l-1.791,55.1c-0.245,7.554-3.397,14.362-8.325,19.341l7.708,50.256l-23.88,87.102c-2.721,9.926,3.118,20.179,13.045,22.9
			c9.91,2.721,20.176-3.109,22.9-13.045l24.931-90.931c0.692-2.524,0.844-5.165,0.448-7.753l-7.959-51.886l8.816,0.725
			l20.494,55.876l5.88,90.253c0.669,10.28,9.552,18.058,19.808,17.385c10.271-0.669,18.054-9.537,17.385-19.808l-6.054-92.935
			c-0.116-1.779-0.486-3.532-1.101-5.205l-17.457-47.596c1.055-12.836,7.58-92.208,8.492-103.308l47.753-2.245
			c1.781-0.084,3.534-0.473,5.183-1.151l47.316-19.48C237.669,161.518,241.451,152.442,238.186,144.511z"
            />
          </g>
        </g>
        <g>
          <g>
            <circle cx="102.901" cy="99.176" r="40.353" />
          </g>
        </g>
        <g>
          <g>
            <circle cx="268.26" cy="90.23" r="34.787" />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M412.651,437.56v-71.391h-22.497v71.391c0,10.492,8.507,18.997,18.997,18.997c2.994,0,5.815-0.712,8.334-1.945
			C414.422,449.654,412.651,443.814,412.651,437.56z"
            />
          </g>
        </g>
        <g>
          <g>
            <path d="M426.149,366.168v71.391h0c0,10.492,8.507,18.997,18.997,18.997s18.997-8.507,18.997-18.997v-71.391H426.149z" />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M511.765,167.51c-8.223-16.907-17.863-23.004-23.711-25.925c-4.174-2.085-8.986-2.642-13.374,0.254l0.6-1.41
			c0.959-2.252-0.089-4.854-2.34-5.813c-2.173-0.924-4.656,0.029-5.692,2.118c0.262-2.568,0.3-5.195,0.07-7.862
			c-1.974-22.969-22.196-39.99-45.165-38.015c-22.969,1.974-39.989,22.195-38.015,45.165c1.974,22.969,22.196,39.989,45.165,38.015
			c11.748-1.009,21.93-6.799,28.82-15.281c-0.128,1.834,0.88,3.627,2.666,4.388c2.252,0.958,4.854-0.089,5.813-2.34l0.646-1.516
			c0.971,3.378,3.286,6.357,6.679,8.052c5.738,2.866,20.464-1.361,35.01,3.411c0.891,0.293,1.872,0.023,2.488-0.684
			C512.041,169.361,512.175,168.354,511.765,167.51z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M337.715,228.493c-4.363-3.007-7.738-7.397-9.435-12.758l-1.173-0.194c-6.789-1.125-13.206,3.47-14.33,10.261
			c-1.124,6.79,3.47,13.206,10.261,14.33l41.557,6.877L337.715,228.493z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M482.88,344.491c-3.366-25.499-15.05-113.981-16.712-126.568l-0.044-10.664c-0.049-12.008-9.824-21.703-21.833-21.653
			l-38.775,0.158c-9.874,0.041-18.17,6.662-20.785,15.688l12.543,8.639l41.043-5.195l-44.075,17.66l-35.565-24.496
			c-0.006-0.003-0.011-0.007-0.017-0.01c-5.758-3.955-13.519-2.338-17.34,3.201c-0.002,0.003-0.004,0.006-0.007,0.009
			c-3.91,5.675-2.469,13.456,3.2,17.362l41.077,28.294c3.447,2.375,7.908,2.833,11.717,1.311c0.003-0.001,0.006-0.002,0.009-0.003
			l48.669-19.502L404.2,258.036c-4.316,3.028-14.494,5.085-23.654-0.154c-4.653,55.767-2.966,35.55-7.244,86.823
			c-0.104,1.24,0.318,2.467,1.16,3.384s2.031,1.443,3.277,1.443c19.644,0,80.57,0,100.728,0c1.284,0,2.504-0.554,3.349-1.52
			C482.662,347.047,483.049,345.763,482.88,344.491z"
            />
          </g>
        </g>
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
        {/* SVG paths */}
      </svg>
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
        {/* SVG paths */}
      </svg>
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
        {/* SVG paths */}
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
        {/* SVG paths */}
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
        {/* SVG paths */}
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
                className="relative flex flex-col items-center p-6 bg-white/25 backdrop-blur-xl rounded shadow-xl"
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
