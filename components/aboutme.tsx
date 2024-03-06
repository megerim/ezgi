import Image from "next/image";
import Prof from "@/public/images/prof.jpg";
import "@/app/css/TimelineStyles.css";

const Aboutme = () => {
  return (
    <section className="relative pt-12 text-gray-900 md:p-24 body-font">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-5 py-8">
        <div className="mb-5 mr-5 lg:mb-0 rounded-3xl w-48 h-72 lg:w-1/3 lg:h-auto object-cover object-center">
          <Image
            src={Prof}
            alt="ezgi"
            width={400}
            height={500}
            className="rounded-3xl"
          />
        </div>
        <div className="lg:w-3/4 lg:pl-10 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="inline-block w-8 h-8 text-gray-400 mb-8"
            viewBox="0 0 975.036 975.036"
          >
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed text-left">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lisans eğitimimi 2017 yılında Ege
            Üniversitesi Rehberlik ve Psikolojik Danışmanlık bölümünde
            tamamladım. Daha sonra Ege Üniversitesi Psikolojik Danışmanlık ve
            Rehberlik bölümünde yüksek lisans programını "Dikkat Eksikliği ve
            Hiperaktivite Bozukluğuna Dair Derleme Çalışması" adlı bitirme
            projesini yazarak onur derecesi ile tamamladım. Bu süreçte;{" "}
          </p>
          <br />
          <ul className="text-left pl-5">
            {" "}
            <li className="flex my-1 py-1">
              <svg
                className="h-6 w-6 mr-2 flex-none fill-green-200/75 stroke-primary stroke-2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="11" />
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>{" "}
              Çocuk ve Ergenlerde Bilişsel Davranışçı Terapi,
            </li>{" "}
            <li className="flex my-1 py-1">
              <svg
                className="h-6 w-6 mr-2 flex-none fill-green-200/75 stroke-primary stroke-2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="11" />
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>{" "}
              Deneyimsel Oyun Terapisi,
            </li>{" "}
            <li className="flex my-1 py-1">
              <svg
                className="h-6 w-6 mr-2 flex-none fill-green-200/75 stroke-primary stroke-2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="11" />
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>{" "}
              Psikodrama İleri Aşama,
            </li>{" "}
            <li className="flex my-1 py-1">
              <svg
                className="h-6 w-6 mr-2 flex-none fill-green-200/75 stroke-primary stroke-2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="11" />
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>{" "}
              Attentioner (Dikkat Eksikliği ve Hiperaktivite Bozukluğuna Yönelik
              Terapi Programı)
            </li>
            <li className="flex my-1 py-1">
              <svg
                className="h-6 w-6 mr-2  flex-none fill-green-200/75 stroke-primary stroke-2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="11" />
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>
              Masal Anlatıcılığı ve Çocuk Resim Analizi,{" "}
            </li>{" "}
            <li className="flex my-1 py-1">
              <svg
                className="h-6 w-6 mr-2  flex-none fill-green-200/75 stroke-primary stroke-2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="11" />
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>
              MOXO Dikkat Testi,{" "}
            </li>{" "}
          </ul>{" "}
          <br />
          <p className="leading-relaxed text-left">
            eğitimlerimi tamamladım. Mesleki hayatıma başladığım günden itibaren
            çocuk, ergen, yetişkin ve ebeveyn danışmanlığı üzerine pek çok alanda çocuklar,
            gençler ve yetişkinlerle bir araya gelme fırsatı buldum. 2019
            yılından bu yana süpervizyon çalışmalarımı analitik yönelimle devam
            ettirmekteyim. Şu anda Gaziemir Neoline Psikoloji ve Güzelbahçe Nar
            Psikoloji'de çocuk, ergen, yetişkin ve ebeveyn çalışmalarımı sürdürmekteyim.
          </p>
          <br />
          <span className="inline-block h-1 w-24 rounded bg-primary mt-8 mb-6"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg">
            Zeynep Ezgi Kaya
          </h2>
          <p className="text-gray-600">Uzman Psikolojik Danışman</p>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
