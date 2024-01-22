import '@/app/css/TimelineStyles.css';

import React from 'react';
import Link from 'next/link';

// Define a type for timeline item props
interface TimelineItemProps {
  date: string;
  title: string;
  description: React.ReactNode;
  alignment: 'left' | 'right';
}

// Timeline item component
const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, description, alignment }) => (
  <div className={`mb-8 flex justify-between items-center w-full ${alignment === 'left' ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
    <div className="order-1 w-5/12"></div>
    <div className={`order-1 w-5/12 px-1 py-4 ${alignment === 'left' ? 'text-right' : 'text-left'}`}>
      <p className="mb-3 text-base text-third">{date}</p>
      <h4 className="mb-3 font-bold text-lg md:text-2xl">{title}</h4>
      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">{description}</p>
    </div>
  </div>
);

const Timeline = () => (
  <section className="bg-gradient-to-r from-third via-primary to-gray-900 text-white py-8">
    <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
      <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8 ">
        <p className="ml-2 text-primary uppercase tracking-loose text-xs">TECRÜBELERİM</p>
        <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Kariyerimin zaman haritası.</p>
        <Link className="bg-transparent mr-auto hover:bg-third text-secondary hover:text-primary rounded shadow hover:shadow-lg py-2 px-4 border border-primary hover:border-secondary transition duration-300" href="https://www.linkedin.com/in/zeynep-ezgi-kaya-300626135/">
          LinkedIn
        </Link>
      </div>

      {/* Right Column */}
      <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div className="container mx-auto w-full h-full ">
          <div className="relative wrap overflow-hidden p-10 h-full ">
    
                    <div className="border-yellow-absolute h-full right-50"></div>
                    <div className="border-yellow-absolute h-full left-50"></div>

            <TimelineItem
              date="2012-2014"
              title="Gönüllü Projeleri &#9830;"
              description={<><span>Türk Eğitim Gönüllüleri Vakfı </span></>}
              alignment="left"
            />
            <TimelineItem
              date="2014-2015"
              title="&#9830; Gönüllü Çalışma Grubu"
              description={<><span>Abla-Ağabey-Kardeş Projesi</span></>}
              alignment="right"
            />
            <TimelineItem
              date="2016-2017"
              title="Rehabilitasyon Merkezi &#9830;"
              description={<><span>Kadın Danışma Merkezi</span></>}
              alignment="left"
            />
            <TimelineItem
              date="2012-2017"
              title="&#9830; Okul Çalışmaları"
              description={<><span>İlkokul, Ortaokul ve Lise Kademe Çalışmaları</span></>}
              alignment="right"
            />
            <TimelineItem
              date="2012-2017"
              title="Lisans Eğitimi &#9830;"
              description={<><span>Ege Üniversitesi</span><br/><span>Psikolojik Danışmanlık ve Rehberlik Bölümü</span></>}
              alignment="left"
            />
            <TimelineItem
              date="2017-2019"
              title="&#9830; Okul Psikolojik Danışmanı"
              description={<><span>İzmir Özel Türk Koleji</span></>}
              alignment="right"
            />
            <TimelineItem
              date="2019-2023"
              title="Okul Psikolojik Danışman &#9830;"
              description={<><span>Narlıdere Uğur Okulları </span></>}
              alignment="left"
            />
            <TimelineItem
              date="2021-2022"
              title="&#9830; Yüksek Lisans Eğitimi"
              description={<><span>Ege Üniversitesi</span><br/><span>Psikolojik Danışmanlık ve Rehberlik</span></>}
              alignment="right"
            />
            <TimelineItem
              date="2022-..."
              title="Uzman Psikolojik Danışman &#9830;"
              description={<><span>Ege Üniversitesi</span><br/><span>Psikolojik Danışmanlık ve Rehberlik Bölümü</span></>}
              alignment="left"
            />
            <TimelineItem
              date="2023-..."
              title="&#9830; Uzman Psikolojik Danışman"
              description={<><span>Nar Psikoloji</span></>}
              alignment="right"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Timeline;
