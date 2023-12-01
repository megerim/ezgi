import Image from "next/image"
import KelebekFoto from "@/public/images/butterfly.webp"

export default function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 drop-shadow-2xl">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-600 to-indigo-800 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pb-2 pr-2 pointer-events-none hidden lg:block" aria-hidden="true">
              <Image src={KelebekFoto} alt="Kelebek fotosu" width={350} height={350}/>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">Haber almak ister misiniz ?</h3>
                <p className="text-gray-300 text-md mb-6">Atölyelerimizden ya da yeni paylaşılan yazılarımızdan anında haberdar olmak için mail listemize abone olabilirsiniz.</p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input type="email" className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Emailinizi giriniz" aria-label="Emailinizi giriniz" />
                    <a className="btn text-white bg-blue-600 hover:bg-blue-700 shadow" href="#0">Katıl</a>
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-green-300 mt-3">Hoşgeldiniz !</p> */}
                  <p className="text-xs text-gray-400 mt-3">Gönderilen mailin içindeki link ile abonelikten çıkabilirsiniz.</p>
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}