import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface FormData {
  // Define the structure of your form data here
  // For example:
  // name: string;
  // email: string;
  // message: string;
  // ...
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  // Check if the method is POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Only POST requests are allowed' });
  }

  const { formData } = req.body as { formData: FormData };

  // Validate formData here (if necessary)
  // ...

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    return res.status(500).json({ success: false, message: 'Email user or password not configured' });
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
    to: 'recipient@example.com', // Replace with your recipient
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
};
