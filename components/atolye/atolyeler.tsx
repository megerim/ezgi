import Image from "next/image";
import Link from "next/link";

import AtolyeIMG from "@/public/images/atolyeler/atolye.jpeg"

export default function Example() {
  return (
    <section className="px-5 py-12 md:px-32 md:py-20 bgimage">
      <div className=" bg-white/40 backdrop-blur-md  rounded-md md:px-12 md:py-2 px-5">
      <div className="flex flex-col text-center w-full mt-5">
        <h1 className="text-3xl font-bold text-center">
          <span className="bg-clip-text text-4xl md:text-5xl text-transparent bg-gradient-to-br from-gray-900 via-gray-700 to-primary">
            Atölye Detayları
          </span>
        </h1>
      </div>

    <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-5 bg-background">
    <div className="flex-1 max-w-[700px] space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Psikodrama Temelli Grup Oturumları Ruhun Doysun</h1>
        <p className="text-muted-foreground text-lg">
        Merhaba! Tükettiklerinizle doymuyorsanız; aynaya baktığınızda iyi hissetmiyorsanız ve ya çok düşkün olduğunuz sabit yiyecekler varsa bu grup çalışması sizin için. Bedeninizle kurduğunuz ilişkiyi daha iyi, daha ait hissederek tamamlayabileceğiniz bir yolculuğa çıkacağımız bir yöntem sunmayı planlıyorum. Sürdüğünüz ojenin rengine ait hissetmediğiniz anlarla ve ya içinde rahat hissetmediğiniz kıyafetlerinizle barışmak mümkün mü? Dört hafta boyunca haftada üç saat psikodramatik yöntemler çerçevesinde ücretsiz olarak bir çemberde buluşmaya davetlisiniz. Yeni bir siz ile tanışmak için; formu doldurmanız yeterli. Koşullar için sizinle telefon yoluyla iletişime geçeceğim.
        </p>
        <Link href="/atolye/basvuru" className="btn text-white bg-primary hover:bg-third hover:text-black duration-500 w-full mb-4 hover:ring-2 hover:ring-white sm:w-auto sm:mb-0 flex">BAŞVURU FORMU</Link>

      </div>
      
      <div className="flex-1 max-w-[900px]">
        <Image
          src={AtolyeIMG}
          alt="Workshop"
          width="600"
          height="400"
          className="rounded-lg overflow-hidden drop-shadow-2xl"
          style={{ aspectRatio: "600/600", objectFit: "cover" }}
        />
      </div>
      
    </div>
    
    </div>
    </section>
  );
}
