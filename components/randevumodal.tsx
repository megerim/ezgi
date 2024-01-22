"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "./utils/Calendar";

interface FormData {
  name: string;
  surname: string;
  contactPreference: string;
  email: string;
  message: string;
  phone: string;
  date: Date;
  meetingType: string;
}

export default function MyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    surname: "",
    contactPreference: "",
    email: "",
    message: "",
    phone: "",
    date: new Date(),
    meetingType: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | "idle"
  >("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });
  
      setSubmissionStatus("success");
    } catch (error) {
      setSubmissionStatus("error");
    }
  };
  

  return (
    <>
      <div className="text-center m-5 p-5">
        <button
          id="randevuTalepBtn"
          onClick={() => setIsOpen(true)}
          className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:scale-110 transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Randevu Talep Et
        </button>
        
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <div className="fixed inset-0 bg-black/25" />
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center text-secondary">
              <Dialog.Panel className="w-full ring-2 ring-white max-w-md transform overflow-hidden rounded-2xl bg-primary p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg text-center underline font-bold leading-6 "
                >
                  Randevu Talep Formu
                </Dialog.Title>
                
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                  <div className="mt-2">
                    <span className="font-semibold">Randevu Türü:</span><br />
                    <label className="inline-flex items-center ml-4">
                      <input
                        type="radio"
                        name="meetingType"
                        value="online"
                        checked={formData.meetingType === "online"}
                        onChange={handleChange}
                        className="form-radio"
                        required
                      />
                      <span className="ml-2">Online</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        name="meetingType"
                        value="offline"
                        checked={formData.meetingType === "offline"}
                        onChange={handleChange}
                        className="form-radio"
                        required
                      />
                      <span className="ml-2">Yüz Yüze</span>
                    </label>
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Adınız"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm text-gray-800"
                    required
                  />
                  <input
                    type="text"
                    name="surname"
                    placeholder="Soyadınız"
                    value={formData.surname}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm text-gray-800"
                    required
                  />
                  <br />
                  <div className="flex flex-row items-center justify-center gap-5">
                  <CalendarIcon />
                  <DatePicker
                    selected={formData.date}
                    onChange={(date: Date) => setFormData({ ...formData, date })}
                    className="block w-full rounded-md border-gray-300 shadow-sm text-gray-800"
                  />
                  
                  </div>
                  <p className="text-xs text-center">Zaman seçmek zorunda değilsiniz, bunu birlikte belirleyebiliriz.</p>
                  <div className="mt-4">
                    <p className="font-semibold">
                    <br />
                      Sizinle nasıl iletişime geçelim?
                    </p>
                  </div>

                  <div className="mt-2 flex">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="contactPreference"
                        value="mail"
                        checked={formData.contactPreference === "mail"}
                        onChange={handleChange}
                        className="form-radio"
                        required
                      />
                      <span className="ml-2">Mail</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        name="contactPreference"
                        value="message"
                        checked={formData.contactPreference === "message"}
                        onChange={handleChange}
                        className="form-radio"
                        required
                      />
                      <span className="ml-2">Mesaj</span>
                      
                    </label>
                    <br />
                    <label className="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        name="contactPreference"
                        value="call"
                        checked={formData.contactPreference === "call"}
                        onChange={handleChange}
                        className="form-radio"
                        required
                      />
                      <span className="ml-2">Arama</span>
                    </label>
                  </div>

                  {/* Conditionally render email input */}
  {formData.contactPreference === "mail" && (
    <input
      type="email"
      name="email"
      placeholder="Email Adresiniz"
      value={formData.email}
      onChange={handleChange}
      required={formData.contactPreference === "mail"}
      className="block w-full mt-2 rounded-md border-gray-300 shadow-sm"
    />
  )}

  {/* Conditionally render phone number input */}
  {(formData.contactPreference === "message" || formData.contactPreference === "call") && (
    <input
      type="tel"
      name="phone"
      placeholder="Telefon Numaranız"
      value={formData.phone}
      onChange={handleChange}
      required={formData.contactPreference === "message" || formData.contactPreference === "call"}
      className="block w-full mt-2 rounded-md border-gray-300 shadow-sm"
    />
  )}

                  <button
                    type="submit"
                    className="flex float-right rounded-md border border-transparent bg-third px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Gönder
                  </button>
                </form>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>

      {submissionStatus === "success" && (
        <div className="rounded-md bg-green-100 p-4 md:mx-36">
          <div className="flex">
            <div className="flex-shrink-0">
              {/* Success Icon */}
              <svg
                className="h-5 w-5 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">Başarılı</p>
              <div className="mt-2 text-sm text-green-700">
                <p>
                  Randevu talebiniz başarıyla oluşturuldu. En yakın zamanda
                  tarafınıza belirttiğiniz yöntem ile ulaşım sağlayacağız.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {submissionStatus === "error" && (
        <div className="rounded-md bg-red-100 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              {/* Error Icon */}
              <svg
                className="h-5 w-5 text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-red-800">Hata oluştu</p>
              <div className="mt-2 text-sm text-red-700">
                <p>
                  Randevu talep formunuz gönderilirken bir hata oluştu. Hatanın
                  devam etmesi durumunda lütfen bizimle başka bir yöntem ile
                  iletişime geççin.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
