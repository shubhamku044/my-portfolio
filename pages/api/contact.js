import nodemailer from 'nodemailer';

export default async (req, res) => {
  const { name, email, message, subject } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    // secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: 'shubhamku044@gmail.com',
      subject,
      html: `<p>You have a new contact form submission</p><br />
      <p><strong>Name: </strong> ${name}</p><br/>
      <p><strong>Email: </strong> ${email}</p><br/>
      <p><strong>Subject: </strong> ${subject}</p><br/>
      <p><strong>Message: </strong> ${message}</p><br/>`,
    });
    console.log(`message sent`, emailRes);
  } catch (err) {
    console.log(err);
  }
  res.status(200).json(req.body);
};
