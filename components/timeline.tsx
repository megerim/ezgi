import '@/app/css/TimelineStyles.css';

const Timeline = () => {
  return (
    <section>
      <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          {/* Left Column */}
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="ml-2 text-yellow-300 uppercase tracking-loose text-xs">TECRÜBELERİM</p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Kariyerimin zaman haritası.</p>
            <p className="text-sm md:text-base text-gray-50 mb-4">Kariyerimin zaman haritası.</p>
            <a href="https://www.linkedin.com/in/zeynep-ezgi-kaya-300626135/" className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">LinkedIn</a>
          </div>

          {/* Right Column */}
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="border-yellow-absolute h-full right-50"></div>
                    <div className="border-yellow-absolute h-full left-50"></div>
                    {/* Timeline item */}
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="order-1 w-5/12 px-1 py-4 text-right">
                            <p className="mb-3 text-base text-yellow-300">2012-2017</p>
                            <h4 className="mb-3 font-bold text-lg md:text-2xl">Lisans Eğitimi 💠</h4>
                            <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                Ege Üniversitesi<br/> Psikolojik Danışmanlık ve Rehberlik Bölümü
                            </p>
                        </div>
                    </div>
                    {/* Another timeline item */}
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="order-1 w-5/12 px-1 py-4 text-left">
                            <p className="mb-3 text-base text-yellow-300">2014-2016</p>
                            <h4 className="mb-3 font-bold text-lg md:text-2xl">💠Stajlar</h4>
                            <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                {/* List of experiences */}
                            </p>
                        </div>
                    </div>


{/* New Timeline Item: Uzman Psikolojik Danışman */}
<div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
    <div className="order-1 w-5/12"></div>
    <div className="order-1 w-5/12 px-1 py-4 text-right">
        <p className="mb-3 text-base text-yellow-300">2023-...</p>
        <h4 className="mb-3 font-bold text-lg md:text-2xl">Uzman Psikolojik Danışman 💠</h4>
        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
            Neoline Psikolojik Danışmanlık Merkezi<br/>
            <a href="#">Nar Psikolojik Danışmanlık Merkezi</a>
        </p>
    </div>
</div>

{/* New Timeline Item: Okul Psikolojik Danışmanı */}
<div className="mb-8 flex justify-between items-center w-full right-timeline">
    <div className="order-1 w-5/12"></div>
    <div className="order-1 w-5/12 px-1 py-4">
        <p className="mb-3 text-base text-yellow-300">2018-2023</p>
        <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">💠 Okul Psikolojik Danışmanı</h4>
        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
            İzmir Özel Türk Koleji<br/>
            Uğur Okulları<br/>
        </p>
    </div>
</div>

{/* New Timeline Item: Additional Uzman Psikolojik Danışman */}
<div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
    <div className="order-1 w-5/12"></div>
    <div className="order-1 w-5/12 px-1 py-4 text-right">
        <p className="mb-3 text-base text-yellow-300">2021 - 2022</p>
        <h4 className="mb-3 font-bold text-lg md:text-2xl">Uzman Psikolojik Danışman 💠</h4>
        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
            Ege Üniversitesi Yüksek Lisans Programı
        </p>
    </div>
</div>



                </div>
            </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline