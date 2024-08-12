import VideoThumb from '@/public/images/hero-image.webp'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-third to-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 z-10">

        <div className="py-5">

          <div className="text-center z-20">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 via-gray-700 to-primary" data-aos="zoom-y-out">Zeynep Ezgi KAYA<br/><span className="bg-clip-text text-3xl md:text-4xl text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-primary"> Uzman Psikolojik Danışman </span></h1>
            <div className="max-w-3xl mx-auto">
            <div className=" sm:mb-8 flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-base leading-6 text-gray-100 ring-1 ring-gray-900/30 hover:ring-gray-900/50 " data-aos="zoom-x-out">
        <span className='hover-underline-animation'>Psikodrama Temelli Grup Oturumları "Ruhun Doysun" <Link href="/atolye" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Başvuru <span aria-hidden="true">&rarr;</span></Link></span>
        </div>
      </div>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <Link href="/about" className="btn text-white bg-primary hover:bg-third hover:text-black duration-500 w-full mb-4 hover:ring-2 hover:ring-white sm:w-auto sm:mb-0">Hakkımda</Link>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-700 duration-500 w-full sm:w-auto sm:ml-4" href="#randevuBilgi">Randevu Bilgisi</a>
                </div>
              </div>
            </div>
          </div>

              
        </div>
        

      </div>

      <div className="mt-0 md:-mt-24">
          <Image
            src={VideoThumb}
            alt="Bg image"
            width={1550}
            height={1000} 
            priority={true}
            />
      </div>
    </section>
  )
}