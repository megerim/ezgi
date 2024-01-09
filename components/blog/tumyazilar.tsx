const posts = [
  {
    id: 1,
    title: "Ebeveynlik Sanatı: Çocuğunuzla Bağlantı Kurma Yolları",
    href: "#",
    description:
      "Çocuğunuzla güçlü bir bağ kurmak, sağlıklı bir gelişim için önemlidir. Bu yazıda, ebeveynlerin çocuklarıyla daha derin bir bağ oluşturmak için kullanabilecekleri stratejilere odaklanacağız.",
    date: "01 Mayıs 2023",
    datetime: "2023-05-01",
    category: { title: "Ebeveynlik", href: "#" },
  },
  {
    id: 2,
    title: "Çocuk Gelişimi: Milestone'ları Anlama Kılavuzu",
    href: "#",
    description:
      "Çocuk gelişimi bir dizi önemli aşamadan geçer. Bu yazıda, çocuğunuzun yaşına uygun gelişimsel kilometre taşlarını anlamak ve desteklemek için ipuçları bulacaksınız.",
    date: "10 Haziran 2023",
    datetime: "2023-06-10",
    category: { title: "Çocuklar", href: "#" },
  },
  {
    id: 3,
    title: "Ergenlik Dönemindeki Gençlerle İletişim Kurma Rehberi",
    href: "#",
    description:
      "Ergenlik, gençlerin yaşamında önemli bir dönemdir. Bu makalede, ebeveynlerin ergenlik dönemindeki çocuklarıyla etkili iletişim kurmalarına yardımcı olacak ipuçlarını bulacaksınız.",
    date: "25 Temmuz 2023",
    datetime: "2023-07-25",
    category: { title: "Ergenlik", href: "#" },
  },
  {
    id: 4,
    title: "DEHB Nedir ve Ebeveynler İçin Başa Çıkma Stratejileri",
    href: "#",
    description:
      "Dikkat Eksikliği ve Hiperaktivite Bozukluğu (DEHB) olan çocuklarla başa çıkma konusunda ebeveynlere rehberlik eden bu yazıda, etkili stratejileri bulacaksınız.",
    date: "08 Ağustos 2023",
    datetime: "2023-08-08",
    category: { title: "DEHB", href: "#" },
  },
  {
    id: 5,
    title:
      "Kaygı Bozukluğu ile Başa Çıkma Yolları: Ebeveynler İçin Pratik Öneriler",
    href: "#",
    description:
      "Çocuğunuzun kaygı bozukluğuyla başa çıkmak, ebeveynler için zorlu bir görev olabilir. Bu yazıda, kaygı ile başa çıkma stratejileri ve destek sağlama yöntemleri hakkında bilgi bulacaksınız.",
    date: "14 Eylül 2023",
    datetime: "2023-09-14",
    category: { title: "Kaygı", href: "#" },
  },
  {
    id: 6,
    title: "Çocuğunuzun Depresyon Belirtilerini Tanıma ve Yardım Etme Rehberi",
    href: "#",
    description:
      "Depresyon, çocuklarda da görülebilen bir durumdur. Bu makalede, ebeveynlere çocuklarının depresyon belirtilerini tanımada ve yardım etmede rehberlik edecek bilgiler bulacaksınız.",
    date: "02 Ekim 2023",
    datetime: "2023-10-02",
    category: { title: "Depresyon", href: "#" },
  },
  // Add more posts as needed...
];

export default function Tumyazilar() {
  return (
    <div className="bg-secondary py-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <h3 className="my-8 flex items-center">
        <span
          aria-hidden="true"
          className="h-0.5 grow rounded bg-gray-200 dark:bg-gray-700/75"
        />
        <span className="bg-clip-text text-2xl font-bold tracking-tight sm:text-4xl mx-5 text-transparent bg-gradient-to-br from-gray-900 via-gray-700 to-primary"> Tüm Yazılarım </span>

        <span
          aria-hidden="true"
          className="h-0.5 grow rounded bg-gray-200 dark:bg-gray-700/75"
        />
      </h3>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex hover:scale-105 max-w-xl flex-col items-start justify-between  border-2 border-gray-300 p-2 rounded-md drop-shadow-xl shadow-2xl hover:shadow-primary/50 transition duration-300 ease-in-out"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-300 px-3 py-1.5 font-medium text-gray-900 hover:bg-gray-200 transition duration-500 ease-in-out"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
