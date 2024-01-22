import { CheckIcon } from "@heroicons/react/20/solid";
import Randevumodal from "@/components/randevumodal";

const onlineTerapi = [
  "Esnek randevu saatleri",
  "Konfor alanınızda terapi",
  "Zoom altyapısı ile kaliteli görüşme",
];
const yuzyuzeTerapi = [
  "Samimiyet ve güven ortamı",
  "Kolay ulaşım",
  "Resmi danışma merkezi",
];

export default function Testimonials() {
  return (
    <div id="randevuBilgi" className="bg-third backdrop-blur-xl py-8 sm:py-12">





      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-primary to-gray-900 sm:text-4xl">
            Esnek Terapi Yöntemleri
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            
          </p>
        </div>
        <div className="mx-auto bg-white/40 backdrop-blur-sm mt-16 max-w-2xl rounded-3xl ring-1 ring-black/30 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
              Online Terapi
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-800">
              Hemen randevu alın, terapiye başlayın.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-primary">
                Ne elde edeceksiniz ?
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-800 sm:grid-cols-2 sm:gap-6"
            >
              {onlineTerapi.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
              Yüzyüze Terapi
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-800">
              Hemen terapi alın ve hayatınızı değiştirin.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 id="randevuRedirect" className="flex-none text-sm font-semibold leading-6 text-primary">
                Ne elde edeceksiniz ?
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-800 sm:grid-cols-2 sm:gap-6"
            >
              {yuzyuzeTerapi.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <Randevumodal />
        

                

      </div>
    </div>
  );
}
