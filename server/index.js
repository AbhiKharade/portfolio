require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();
const PORT = process.env.PORT || 5000;

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors({
  origin: [
    'https://portfolio-pi-gold-20.vercel.app'
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));
app.options('*', cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Portfolio backend is running!'
  });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Name, email, and message are required.'
    });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['abhi027446@gmail.com'],
      replyTo: email,
      subject: `Portfolio Contact: ${subject || 'New Message'}`,

      html: `
        <h3>New message from Portfolio</h3>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'No subject'}</p>

        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    if (error) {
      console.error('Resend error:', error);

      return res.status(500).json({
        success: false,
        error: 'Failed to send email.'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Email sent successfully!',
      id: data?.id
    });

  } catch (error) {
    console.error('Email error:', error);

    res.status(500).json({
      success: false,
      error: 'Failed to send email.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});