const items = [
  {
    title: "Yetkinlik",
    description: "Danışmanlar, etkili yardım için gerekli bilgi ve becerilere sahip olmalıdır.",
  },
  {
    title: "Dürüstlük",
    description: "Danışmanlar, danışanlarına karşı samimi ve gerçekçi olmalıdır.",
  },
  {
    title: "Duyarlı ve Saygılı Olmak",
    description: "Danışmanlar, danışanların bakış açılarını anlamak ve bağlantı kurmak için empati göstermelidir.",
  },
  {
    title: "Bireysel ve Kültürel Farklılıklara Duyarlılık",
    description: "Danışmanlar, danışanların bireysel ve kültürel arka planlarına saygılı olmalıdır.",
  },
  {
    title: "Toplumsal Sorumluluk",
    description: "Danışmanlar, toplumsal etkileri dikkate alarak sorumluluklarını yerine getirmelidir.",
  },
  {
    title: "Mesleki ve Bilimsel Sorumluluk",
    description: "Danışmanlar, etik ve yasal standartlara uyarak mesleki sınırlarını korumalıdır.",
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
            <h2 className="h2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary via-third to-secondary">Psikolojik danışma ilkeleri nelerdir?</h2>
            {/* <p className="text-xl text-gray-600">Size nasıl yardımcı olabilirim?</p> */}
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none"
          >

            {items.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center h-40 justify-center p-6 bg-white/25 backdrop-blur-xl rounded-xl border border-black/20 shadow-xl"
              >
                
                <h4 className="text-xl font-bold leading-snug tracking-tight text-center mb-1">
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
