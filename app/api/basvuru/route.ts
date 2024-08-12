import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface FormData {
  input1: string; // Name
  input2: string; // Email
  input3: string; // Birthdate
  input4: string; // Profession
  input5: string; // Phone
  input6: string; // Expectations
  input7: string; // Previous experience
  input8: string; // Additional info
  day: string; // Day selection
  timezone: string; // Time selection
}

export async function POST(req: NextRequest) {
    const { formData } = await req.json() as { formData: FormData };

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
      from: process.env.EMAIL_USER, // Sender's email from the form
      to: process.env.RECIPIENT_EMAIL || 'pdzeynepezgikaya@gmail.com', // The recipient's email
      subject: "Yeni Başvuru Formu",
      text: `
        İsim: ${formData.input1}
        Email: ${formData.input2}
        Doğum Tarihi: ${formData.input3}
        Meslek: ${formData.input4}
        Telefon: ${formData.input5}
        Beklentiler: ${formData.input6}
        Önceki Deneyim: ${formData.input7}
        Ek Bilgi: ${formData.input8}
        Gün Seçimi: ${formData.day}
        Saat Seçimi: ${formData.timezone}
      `,
      html: `<div>
               <p><b>İsim:</b> ${formData.input1}</p>
               <p><b>Email:</b> ${formData.input2}</p>
               <p><b>Doğum Tarihi:</b> ${formData.input3}</p>
               <p><b>Meslek:</b> ${formData.input4}</p>
               <p><b>Telefon:</b> ${formData.input5}</p>
               <p><b>Beklentiler:</b> ${formData.input6}</p>
               <p><b>Önceki Deneyim:</b> ${formData.input7}</p>
               <p><b>Ek Bilgi:</b> ${formData.input8}</p>
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
  } catch (error: any) {
    console.error('Error sending email:', error.message, error.stack);
    return NextResponse.json(
      { success: false, message: 'Failed to send email', errorDetails: error.message },
      { status: 500 }
    );
  }
}
