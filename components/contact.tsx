"use client";
import { useState } from "react";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | "idle"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (response.ok) {
        setSubmissionStatus("success");
      } else {
        throw new Error("Server responded with an error");
      }
    } catch (error) {
      setSubmissionStatus("error");
    }
  };

  return (
    <section className="text-gray-600 body-font relative py-16">
      <div className="container px-5 lg:py-12 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 mt-24 rounded shadow-md">
            <div className="lg:w-1/3 px-6">
              <h2 className="title-font font-semibold text-gray-900 text-xs">
                Neoline Psikoloji
              </h2>
              <p className="mt-1">
                AtıfBey Mah. 71 sk. AMASSİZMİR, 35410 Gaziemir/İzmir
              </p>
              <Link
                href="https://maps.app.goo.gl/n337rVuDYED1dA2z6"
                className="btn text-white text-sm bg-primary mt-2 hover:bg-third hover:text-black duration-500 w-full hover:ring-2 hover:ring-white sm:w-auto sm:mb-0"
              >
                Google Maps
              </Link>
            </div>
            <div className="lg:w-1/3 px-6">
              <h2 className="title-font font-semibold text-gray-900 text-xs">
                Nar Psikoloji
              </h2>
              <p className="mt-1">
                Yelki Mah, İnönü Cad. Yelken Sitesi, C Blok , Daire 10
                Güzelbahçe/İzmir
              </p>
              <Link
                href="https://maps.app.goo.gl/GjExcnwSFmTPVkY46"
                className="btn text-white bg-primary text-sm mt-2 hover:bg-third hover:text-black duration-500 w-full hover:ring-2 hover:ring-white sm:w-auto sm:mb-0"
              >
                Google Maps
              </Link>
            </div>
            <div className="lg:w-1/3 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 text-xs">
                EMAIL
              </h2>
              <Link
                href="mailto:pdzeynepezgikaya@gmail.com"
                className="text-indigo-500 leading-relaxed underline pointer hover:text-indigo-700"
              >
                pdzeynepezgikaya@gmail.com
              </Link>
              <h2 className="title-font font-semibold text-gray-900 text-xs mt-4">
                TELEFON
              </h2>
              <Link
                href={"tel:+905436715805"}
                className="text-indigo-500 leading-relaxed underline pointer hover:text-indigo-700"
              >
                +90 543 671 58 05
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-xl p-5">
          <form onSubmit={handleSubmit} action="/api/contact">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font text-center">
              İletişim
            </h2>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                İsim
              </label>
              <input
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
      onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
                Telefon Numarası
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
      onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
      onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-third hover:text-gray-800 rounded text-lg"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
