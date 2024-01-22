import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { formData } = req.body;

    // Ensure environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      return res.status(500).json({ success: false, message: 'Server error' });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Replace with your email provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'merimgokhan@gmail.com',
      subject: 'Yeni Randevu Talebi',
      text: JSON.stringify(formData, null, 2),
    };

    // Send email
    try {
      const result = await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Email sent', result });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Email not sent', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
