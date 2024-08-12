import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {
      input1,
      input2,
      input3,
      input4,
      input5,
      input6,
      input7,
      input8,
      day,
      timezone,
    } = req.body;

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASSWORD, // your Gmail password or app password
      },
    });

    try {
      // Send mail with defined transport object
      await transporter.sendMail({
        from: `"Başvuru Formu" <${process.env.GMAIL_USER}>`, // sender address
        to: process.env.RECIPIENT_EMAIL, // recipient address
        subject: 'Yeni Başvuru Formu', // Subject line
        text: `Yeni bir başvuru formu alındı:
        - İsim Soyisim: ${input1}
        - E-Mail: ${input2}
        - Doğum Tarihi: ${input3}
        - Meslek: ${input4}
        - Cep Telefonu: ${input5}
        - Beklentiler: ${input6}
        - Daha önce katılım: ${input7}
        - Ek bilgi: ${input8}
        - Gün Seçimi: ${day}
        - Saat Seçimi: ${timezone}
        `,
        html: `<p><strong>Yeni bir başvuru formu alındı:</strong></p>
               <ul>
                 <li><strong>İsim Soyisim:</strong> ${input1}</li>
                 <li><strong>E-Mail:</strong> ${input2}</li>
                 <li><strong>Doğum Tarihi:</strong> ${input3}</li>
                 <li><strong>Meslek:</strong> ${input4}</li>
                 <li><strong>Cep Telefonu:</strong> ${input5}</li>
                 <li><strong>Beklentiler:</strong> ${input6}</li>
                 <li><strong>Daha önce katılım:</strong> ${input7}</li>
                 <li><strong>Ek bilgi:</strong> ${input8}</li>
                 <li><strong>Gün Seçimi:</strong> ${day}</li>
                 <li><strong>Saat Seçimi:</strong> ${timezone}</li>
               </ul>`,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}
