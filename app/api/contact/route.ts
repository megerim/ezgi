import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
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
    to: "merimgokhan@gmail.com",
    subject: "İletişim Bildirimi",
    text: `İsim: ${formData.name}\nEmail: ${formData.email}\nTelefon: ${formData.phone}\nMessage: ${formData.message}`,
    html: `<div>
             <p><b>İsim:</b> ${formData.name}</p>
             <p><b>Email:</b> ${formData.email}</p>
             <p><b>Telefon:</b> ${formData.phone}</p>
             <p><b>Mesaj:</b> ${formData.message}</p>
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
