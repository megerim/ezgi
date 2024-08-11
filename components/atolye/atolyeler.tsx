const people = [
  {
    name: "Dikkatimi Topluyorum Programı",
    email: "Attentioner",
    role: "Başvuru Formu",
    imageUrl: "images/atolyeler/minnettarlik.jpeg",
    lastSeen: "+1 Hafta önce",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Okula Uyum Atölyesi",
    email: "Oyun Atölyesi",
    role: "Başvuru Formu",
    imageUrl: "images/atolyeler/minnettarlik2.jpeg",

    lastSeen: "2 hafta önce",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Kaygı Atölyesi",
    email: "Yetişkinlere Yönelik Atölye",
    role: "Başvuru Formu",
    imageUrl: "images/atolyeler/kendimiaffetmek.jpeg",
    lastSeen: null,
  },
  {
    name: "Sınıfa Uyum Atölyesi",
    email: "Ergenlere Yönelik Eğitim Atölyesi",
    role: "Başvuru Formu",
    imageUrl: "images/atolyeler/kendimiaffetmek2.jpeg",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Minnettarlık Atölyesi",
    email: "Yetişkinlere Yönelik Atölye",
    role: "Başvuru Formu",
    imageUrl: "images/atolyeler/minnettarlik.jpeg",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Kendini Affetmek",
    email: "Yetişkinlere Yönelik Atölye",
    role: "Başvuru Formu",
    imageUrl: "images/atolyeler/minnettarlik.jpeg",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
];

export default function Example() {
  return (
    <section className="md:px-64 md:py-28 bgimage">
      <div className=" bg-white/40 backdrop-blur-md  rounded-md md:px-20 md:py-10">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="text-3xl font-bold text-center mt-24">
          <span className="bg-clip-text text-3xl md:text-5xl text-transparent bg-gradient-to-br from-gray-900 via-gray-700 to-primary">
            Atölyeler
          </span>
        </h1>
      </div>

      <ul role="list" className="divide-y divide-primary antialiased  bg-white rounded-xl p-5">
        {people.map((person) => (
          <li key={person.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-36 w-24 flex-none rounded-md bg-gray-50"
                src={person.imageUrl}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {person.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {person.email}
                </p>
              </div>
            </div>
            <div className="flex shrink-0 md:flex-col md:items-center">
              <a
                href="/atolye/basvuru"
                className="text-sm  text-fourth max-h-10 p-2 rounded-full hover:text-gray-700 bg-primary hover:bg-third  transition duration-300"
              >
                {person.role}
              </a>
              {person.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500 hidden md:flex">
                  <time dateTime={person.lastSeenDateTime}>
                    {person.lastSeen} bitti.
                  </time>
                </p>
              ) : (
                <div className="mt-1 items-center gap-x-1.5 hidden md:flex">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">
                    Başvuruya açık
                  </p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
    </section>
  );
}
