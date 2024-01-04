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

  return (
    <section className="relative py-24 bg-gradient-to-b from-primary to-third">
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-32 bg-gradient-to-t from-terapi transform translate-y-1/2"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-10 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-18">
            <h2 className="h2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary via-third to-secondary">Hizmetlerim</h2>
            {/* <p className="text-xl text-gray-600">Size nasıl yardımcı olabilirim?</p> */}
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none"
          >

            {items.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center p-6 bg-white/25 backdrop-blur-xl rounded border border-black/20 shadow-xl"
              >
                {item.icon}
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-800 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
