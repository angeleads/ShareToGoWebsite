import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface ContactRequest extends NextApiRequest {
  body: {
    nombre: string;
    apellido: string;
    email: string;
    mensaje: string;
  };
}

export default async function handler(req: ContactRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { nombre, apellido, email, mensaje } = req.body;
    try {
      console.log('Received data:', req.body);
      const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "f4985ba49097f0",
          pass: "8be7f0adc69709"
        }
      });
      const mailOptions = {
        from: email,
        to: 'halouaneangel24@gmail.com',
        subject: 'Contact Form Submission',
        text: `Mensaje: ${mensaje}`,
        html: `<p>${nombre} ${apellido} dice ${mensaje}</p>`,
      };
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);

      res.status(200).send('OK');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Internal Server Error: ' + error);
    }
  } else {
    console.error('Invalid HTTP method:', req.method);
    res.status(405).send('Method Not Allowed');
  }
}
