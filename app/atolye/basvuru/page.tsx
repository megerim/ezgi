import React from 'react';

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
  title: "Hakkımda - Zeynep Ezgi Kaya",
  description: "Eğitim ve sertifika bilgilerim.",
};

export default async function About() {
  // Handle form submission server-side here if needed
  async function handleFormSubmit(formData: FormData) {
    // Extract data from formData
    const data = Object.fromEntries(formData.entries());
    console.log('Form Data:', data);

    // Here you can process the data, e.g., save it to a database or send an email

    return { success: true }; // return an appropriate response
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg pt-36 shadow-2xl drop-shadow-2xl">
      <div className="mx-8">
      <h2 className='font-bold text-xl border-l-4 p-1'>Başvuru Formu</h2>
      <p className='py-4'> &nbsp; 
      Merhaba! 
Tükettiklerinizle doymuyorsanız; aynaya baktığınızda iyi hissetmiyorsanız ve ya çok düşkün olduğunuz sabit yiyecekler varsa bu grup çalışması sizin için.
Bedeninizle kurduğunuz ilişkiyi daha iyi, daha ait hissederek tamamlayabileceğiniz bir yolculuğa çıkacağımız bir yöntem sunmayı planlıyorum. Sürdüğünüz ojenin rengine ait hissetmediğiniz anlarla ve ya içinde rahat hissetmediğiniz kıyafetlerinizle barışmak mümkün mü? 
Dört hafta boyunca haftada üç saat psikodramatik yöntemler çerçevesinde ücretsiz olarak bir çemberde buluşmaya davetlisiniz. 
Yeni bir siz ile tanışmak için; formu doldurmanız yeterli. Koşullar için sizinle telefon yoluyla iletişime geçeceğim.
      </p>
      <form action="#" method="post" className='mx-5'>
        <fieldset className="mb-6 p-4 border border-gray-300 rounded-lg">
          <legend className="text-lg font-semibold mb-4">Kişisel Bilgiler</legend>
          <div className="mb-4">
            <label htmlFor="input1" className="block text-sm font-medium text-gray-700">İsim Soyisim</label>
            <input
              type="text"
              id="input1"
              name="input1"
              placeholder="Input 1"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="input2" className="block text-sm font-medium text-gray-700">E-Mail</label>
            <input
              type="text"
              id="input2"
              name="input2"
              placeholder="Input 2"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </fieldset>

        <fieldset className="mb-6 p-4 border border-gray-300 rounded-lg">
          <legend className="text-lg font-semibold mb-4">Ek Bilgiler</legend>
          <div className="mb-4">
            <label htmlFor="input3" className="block text-sm font-medium text-gray-700">Input 3</label>
            <input
              type="text"
              id="input3"
              name="input3"
              placeholder="Input 3"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="input4" className="block text-sm font-medium text-gray-700">Input 4</label>
            <input
              type="text"
              id="input4"
              name="input4"
              placeholder="Input 4"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="input5" className="block text-sm font-medium text-gray-700">Input 5</label>
            <input
              type="text"
              id="input5"
              name="input5"
              placeholder="Input 5"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="input6" className="block text-sm font-medium text-gray-700">Input 6</label>
            <input
              type="text"
              id="input6"
              name="input6"
              placeholder="Input 6"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="input7" className="block text-sm font-medium text-gray-700">Input 7</label>
            <input
              type="text"
              id="input7"
              name="input7"
              placeholder="Input 7"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="input8" className="block text-sm font-medium text-gray-700">Input 8</label>
            <input
              type="text"
              id="input8"
              name="input8"
              placeholder="Input 8"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </fieldset>

        <fieldset className="mb-6 p-4 border border-gray-300 rounded-lg">
          <legend className="text-lg font-semibold mb-4">Zaman Seçenekleri</legend>
          <div className="mb-4">
            <label htmlFor="day" className="block text-sm font-medium text-gray-700">Gün Seçimi</label>
            <select
              id="day"
              name="day"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            >
              <option value="monday">Pazartesi</option>
              <option value="thursday">Perşembe</option>
              <option value="saturday">Cumartesi</option>
              <option value="sunday">Pazar</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">Saat Seçimi</label>
            <select
              id="timezone"
              name="timezone"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            >
              <option value="10-13">10:00 - 13:00</option>
              <option value="11-14">11:00 - 14:00</option>
              <option value="12-15">12:00 - 15:00</option>
              <option value="13-16">13:00 - 16:00</option>
              <option value="16-19">16:00 - 19:00</option>
              <option value="19-21">19:00 - 21:00</option>



            </select>
          </div>
        </fieldset>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Gönder
        </button>
      </form>
    </div>
    </div>
  );
}
