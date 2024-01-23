import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface FormData {
  // Define the structure of your form data here
  email: string;
  subject: string;
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
    to: "merimgokhan@gmail.com", // Replace this with the appropriate recipient email
    subject: formData.subject,
    text: formData.message,
    html: `<div>${formData.message}</div>`,
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
