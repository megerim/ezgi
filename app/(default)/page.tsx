export const metadata = {
  generator: "Zeynep Ezgi Kaya",
  applicationName: "Uzman Psikolojik Danışman Zeynep Ezgi Kaya",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Gaziemir",
    "gaziemir oyun terapisi",
    "izmir oyun terapisi",
    "Oyun terapisi",
    "izmir danışmanlık",
    "izmir psikoloji",
    "zeynep ezgi kaya",
    "zeynep ezgi gökhan",
    "çocuk terapisi",
    "aile terapisi",
    "dikkat eksikliği gaziemir",
    "dehb gaziemir",
    "dehb izmir",
    "kaygı gaziemir",
    "kendini affetmek",
    "minnettarlık atölyesi",
    "gaziemir dikkat eksikliği",
  ],
  authors: { name: "Zeynep Ezgi Kaya" },
  creator: "Zeynep Ezgi Kaya",
  publisher: "Zeynep Ezgi Kaya",
  title: "Ana Sayfa - Zeynep Ezgi Kaya",
  description:
    "Uzman Psikolojik Danışman Zeynep Ezgi Kaya, İzmir / Gaziemir. Online randevu alabilir, yazılarımı okuyabilir veya benimle ilgili daha fazla bilgi edinebilirsiniz.",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </>
  );
}
