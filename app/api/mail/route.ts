import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

export async function POST(req: NextRequest) {
  const { formData } = await req.json() as { formData: FormData };
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    return NextResponse.json(
      { success: false, message: 'Email user or password not configured' },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: formData.email,
    to: "pdzeynepezgikaya@gmail.com",
    subject: "Yeni Randevu Talebi",
    text: `İsim: ${formData.name}\nSoyisim: ${formData.surname}\nEmail: ${formData.email}\nTelefon: ${formData.phone}\nİletişim Yöntemi: ${formData.contactPreference}\nTarih: ${formData.date}\nRandevu Türü: ${formData.meetingType}\nMessage: ${formData.message}`,
    html: `<div>
             <p><b>İsim:</b> ${formData.name}</p>
             <p><b>Soyisim:</b> ${formData.surname}</p>
             <p><b>Email:</b> ${formData.email}</p>
             <p><b>Telefon:</b> ${formData.phone}</p>
             <p><b>İletişim Yöntemi:</b> ${formData.contactPreference}</p>
             <p><b>Tarih:</b> ${formData.date}</p>
             <p><b>Randevu Türü:</b> ${formData.meetingType}</p>
             <p><b>Message:</b> ${formData.message}</p>
           </div>`,
  };
  

  try {
    const result = await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { success: true, message: 'Email gönderildi', result },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: 'HATA', errorDetails: error.message },
      { status: 500 }
    );
  }
}
