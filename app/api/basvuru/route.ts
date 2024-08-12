import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface FormData {
  name: string; // Name
  email: string; // Email
  birthdate: string; // Birthdate
  agreement: boolean; // Agreement
  occupation: string; // Profession
  phone: string; // Phone
  expectations: string; // Expectations
  previousExperience: string; // Previous experience
  additionalInfo: string; // Additional info
  day: string; // Day selection
  timezone: string; // Time selection
}


export async function POST(req: NextRequest) {
  const formData = await req.json() as FormData;

  console.log('Received form data:', formData);  // Gelen veriyi kontrol edin

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.error('Email user or password not configured');
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
    from: process.env.EMAIL_USER,
    to: 'merimgokhan@gmail.com',
    subject: "Yeni Başvuru Formu",
    text: `
      İsim: ${formData.name}
      Email: ${formData.email}
      Doğum Tarihi: ${formData.birthdate}
      Meslek: ${formData.occupation}
      Telefon: ${formData.phone}
      Beklentiler: ${formData.expectations}
      Önceki Deneyim: ${formData.previousExperience}
      Ek Bilgi: ${formData.additionalInfo}
      Gün Seçimi: ${formData.day}
      Saat Seçimi: ${formData.timezone}
    `,
    html: `<div>
             <p><b>İsim:</b> ${formData.name}</p>
             <p><b>Email:</b> ${formData.email}</p>
             <p><b>Doğum Tarihi:</b> ${formData.birthdate}</p>
             <p><b>Meslek:</b> ${formData.occupation}</p>
             <p><b>Telefon:</b> ${formData.phone}</p>
             <p><b>Beklentiler:</b> ${formData.expectations}</p>
             <p><b>Önceki Deneyim:</b> ${formData.previousExperience}</p>
             <p><b>Ek Bilgi:</b> ${formData.additionalInfo}</p>
             <p><b>Gün Seçimi:</b> ${formData.day}</p>
             <p><b>Saat Seçimi:</b> ${formData.timezone}</p>
           </div>`,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { success: true, message: 'Email sent successfully', result },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error sending email:', error.message, error.stack);
      return NextResponse.json(
        { success: false, message: 'Failed to send email', errorDetails: error.message },
        { status: 500 }
      );
    } else {
      console.error('Unknown error:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to send email' },
        { status: 500 }
      );
    }
  }
}
