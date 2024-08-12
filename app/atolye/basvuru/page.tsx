import React from 'react';
import BasvuruForm from '@/components/atolye/basvuru';

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
  title: "Başvuru Formu - Zeynep Ezgi Kaya",
  description: "Eğitim ve sertifika bilgilerim.",
};

export default async function Basvuru() {

  return (
<BasvuruForm />
  );
}
