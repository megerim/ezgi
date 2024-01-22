import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface FormData {
  // Define the structure of your form data here
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Only POST requests are allowed' });
    return;
  }

  const { formData } = req.body as { formData: FormData };

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    res.status(500).json({ success: false, message: 'Email user or password not configured' });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'merimgokhan@gmail.com', 
    subject: 'Yeni Randevu Talebi',
    text: JSON.stringify(formData, null, 2),
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent', result });
  } catch (error: any) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: 'Failed to send email', errorDetails: error.message });
  }
}
