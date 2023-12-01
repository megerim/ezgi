import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative">

<div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="animate-pulse duration-1000 relative left-[calc(50%-11rem)] aspect-[1500/900] w-[40.125rem] -translate-x-1/2 rotate-[100deg] bg-gradient-to-tr from-blue-900 to-teal-700 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(0% 0%, 0% 100%,27.6% 76.8%,0.1% 64.9%, 27.5% 76.7%,45.2% 34.5%,47.5% 58.3%,52.4% 68.1%,60.2% 62.4%,75% 32.5%,80.7% 2%,85.5% 0.1%,100% 26.9%,100% 61.6%,80% 44.1%,80%97.7%,100% 100%, 100% 0%,0% 0%)',
            }}
          />
        </div>
      


      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Zeynep Ezgi KAYA <br/> <span className="bg-clip-text text-3xl md:text-4xl text-transparent bg-gradient-to-r from-blue-500 to-teal-400"> Uzman Psikolojik Danışman </span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Hakkımda eğitim ve sertifika bilgilerini görebileceğiniz, merak ettiğiniz konularla ilgili yazılar okuyabileceğiniz, online ya da yüz yüze randevu alabileceğiniz websiteme hoşgeldiniz.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <Link href="/about" className="btn text-white bg-blue-600 hover:bg-blue-900 duration-500 w-full mb-4 sm:w-auto sm:mb-0">Hakkımda</Link>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-700 duration-500 w-full sm:w-auto sm:ml-4" href="#randevuBilgi">Randevu Bilgisi</a>
                </div>
              </div>
            </div>
          </div>

          <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="animate-pulse transition duration-1000 relative left-[calc(50%-11rem)] aspect-[700/1900] w-[50.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-400 to-teal-200 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(0% 0%, 0% 100%,27.6% 76.8%,0.1% 64.9%, 27.5% 76.7%,45.2% 34.5%,47.5% 58.3%,52.4% 68.1%,60.2% 62.4%,75% 32.5%,80.7% 2%,85.5% 0.1%,100% 26.9%,100% 61.6%,80% 44.1%,80%97.7%,100% 100%, 100% 0%,0% 0%)',
            }}
          />
        </div>
          
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />
            
        </div>

      </div>
    </section>
  )
}