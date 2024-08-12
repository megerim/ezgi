"use client";

import React, { useState } from 'react';

export default function BasvuruForm() {
  const [formData, setFormData] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
    input8: '',
    day: '',
    timezone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Form Data:', formData);

    try {
      const response = await fetch('/api/basvuru', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({formData}),
      });

      if (response.ok) {
        alert('Başvuru formunuz başarıyla gönderildi.');
      } else {
        alert('Başvuru formu gönderilirken bir hata oluştu.');
      }
    } catch (error) {
      console.error('Hata:', error);
      alert('Hata oluştu.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg pt-36 shadow-2xl drop-shadow-2xl">
      <div className="mx-8">
        <h2 className='font-bold text-xl border-l-4 p-1'>Başvuru Formu</h2>
        <p className='py-4'>
          &nbsp; Merhaba!
          Tükettiklerinizle doymuyorsanız; aynaya baktığınızda iyi hissetmiyorsanız veya çok düşkün olduğunuz sabit yiyecekler varsa bu grup çalışması sizin için.
          Bedeninizle kurduğunuz ilişkiyi daha iyi, daha ait hissederek tamamlayabileceğiniz bir yolculuğa çıkacağımız bir yöntem sunmayı planlıyorum.
          Sürdüğünüz ojenin rengine ait hissetmediğiniz anlarla veya içinde rahat hissetmediğiniz kıyafetlerinizle barışmak mümkün mü?
          Dört hafta boyunca haftada üç saat psikodramatik yöntemler çerçevesinde ücretsiz olarak bir çemberde buluşmaya davetlisiniz.
          Yeni bir siz ile tanışmak için; formu doldurmanız yeterli. Koşullar için sizinle telefon yoluyla iletişime geçeceğim.
        </p>
        <p className='italic text-end m-0.5'>Görüşmek dileği ile, Zeynep Ezgi Kaya.</p>
        <form onSubmit={handleFormSubmit} action="/api/basvuru" method="post" className='mx-5'>
          <fieldset className="mb-6 p-4 border border-gray-300 rounded-lg">
            <legend className="text-lg font-semibold mb-4">Kişisel Bilgiler</legend>
            <div className="mb-4">
              <label htmlFor="input1" className="block text-sm font-medium text-gray-700">İsim Soyisim</label>
              <input
                type="text"
                id="input1"
                name="input1"
                value={formData.input1}
                onChange={handleChange}
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
                value={formData.input2}
                onChange={handleChange}
                placeholder="ornek@mail.com"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="input3" className="block text-sm font-medium text-gray-700">Doğum Tarihi</label>
              <input
                type="text"
                id="input3"
                name="input3"
                value={formData.input3}
                onChange={handleChange}
                placeholder="GG/AA/YYYY"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </fieldset>

          <fieldset className="mb-6 p-4 border border-gray-300 rounded-lg">
            <legend className="text-lg font-semibold mb-4">Ek Bilgiler</legend>
            <div className="mb-4">
              <label htmlFor="input3" className="inline-block text-sm font-medium text-gray-700">Çalışmaya Katılmayı Onaylıyorum</label>
              <input
                type="checkbox"
                id="input3"
                name="input3"
                value={formData.input3}
                onChange={handleChange}
                required
                className="mt-1 inline-block px-4 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm float-right"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="input4" className="block text-sm font-medium text-gray-700">Meslek</label>
              <input
                type="text"
                id="input4"
                name="input4"
                value={formData.input4}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="input5" className="block text-sm font-medium text-gray-700">Cep Telefonu</label>
              <input
                type="text"
                id="input5"
                name="input5"
                value={formData.input5}
                onChange={handleChange}
                placeholder="+905xxxxxxxxxx"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="input6" className="block text-sm font-medium text-gray-700">Çalışmaya katılırken taşıdığınız beklentiler neler, aklınızda hangi sorular var, bu çalışmadan ne alarak ayrılmak istiyorsunuz?</label>
              <input
                type="text"
                id="input6"
                name="input6"
                value={formData.input6}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="input7" className="block text-sm font-medium text-gray-700">Daha önce hiç bu tarz bir atölyeye katıldınız mı? Katıldaysanız yazabilir misiniz?</label>
              <input
                type="text"
                id="input7"
                name="input7"
                value={formData.input7}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="input8" className="block text-sm font-medium text-gray-700">Eklemek istediğiniz bir şey var mı?</label>
              <input
                type="text"
                id="input8"
                name="input8"
                value={formData.input8}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </fieldset>

          <fieldset className="mb-6 p-4 border border-gray-300 rounded-lg">
            <legend className="text-lg font-semibold mb-2">Zaman Seçenekleri</legend>
            <p className='text-xs font-light text-end'>Kendinize uygun gün ve saat seçimi yapınız, ortak seçime göre zaman değişiklik gösterecektir.</p>
            <div className="mb-4">
              <label htmlFor="day" className="block text-sm font-medium text-gray-700">Gün Seçimi</label>
              <select
                id="day"
                name="day"
                value={formData.day}
                onChange={handleChange}
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
                value={formData.timezone}
                onChange={handleChange}
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
