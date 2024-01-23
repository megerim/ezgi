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
    to: "merimgokhan@gmail.com", // Replace with the appropriate recipient email
    subject: "Yeni Randevu Talebi",
    text: `Name: ${formData.name}\nSurname: ${formData.surname}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Contact Method: ${formData.contactPreference}\nDate: ${formData.date}\nMeeting Type: ${formData.meetingType}\nMessage: ${formData.message}`,
    html: `<div>
             <p><b>Name:</b> ${formData.name}</p>
             <p><b>Surname:</b> ${formData.surname}</p>
             <p><b>Email:</b> ${formData.email}</p>
             <p><b>Phone:</b> ${formData.phone}</p>
             <p><b>Preferred Contact Method:</b> ${formData.contactPreference}</p>
             <p><b>Date:</b> ${formData.date}</p>
             <p><b>Meeting Type:</b> ${formData.meetingType}</p>
             <p><b>Message:</b> ${formData.message}</p>
           </div>`,
  };
  

  try {
    const result = await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { success: true, message: 'Email sent', result },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email', errorDetails: error.message },
      { status: 500 }
    );
  }
}
