import nodemailer from 'nodemailer';

export default async (req, res) => {
  const { name, email, message, subject, token } = req.body;

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
    const human = await validateHuman(token);

    if (!human) {
      res.status(400).json({ error: 'You are a bot!' });
      return;
    }
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

async function validateHuman(token) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    {
      method: 'POST',
    }
  );
  const data = await response.json();
  return data.success;
}
