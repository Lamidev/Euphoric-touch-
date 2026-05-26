const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Enhanced CORS for production
app.use(cors({
  origin: ['http://localhost:5173', 'https://fresha-massage-spa-and-wellness.onrender.com'],
  credentials: true
}));
app.use(express.json());

// Verify transporter configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  },
  connectionTimeout: 10000, // 10 seconds timeout
  socketTimeout: 10000,
  greetingTimeout: 10000
});

// Verify email configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('Email configuration error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

app.post('/api/bookings', async (req, res) => {
  const { name, email, phone, sessionType, date, time, specialRequest } = req.body;

  // Log received data for debugging
  console.log('Received booking request:', { name, email, phone, sessionType, date, time });

  if (!name || !email || !phone || !sessionType || !date || !time) {
    return res.status(400).json({ 
      message: 'All fields except special request are required',
      received: { name, email, phone, sessionType, date, time }
    });
  }

  try {
    const mailOptions = {
      from: `"Booking System" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: 'New Massage Booking Request',
      text: `
        New Booking Request:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Session Type: ${sessionType}
        Date: ${date}
        Time: ${time}
        Special Request: ${specialRequest || 'None'}
      `,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Session Type:</strong> ${sessionType}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Special Request:</strong> ${specialRequest || 'None'}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    
    res.status(200).json({ message: 'Booking request sent successfully' });
  } catch (error) {
    console.error('Detailed error:', error);
    res.status(500).json({ 
      message: 'Failed to send booking request',
      error: error.message 
    });
  }
});

app.get('/api/email-diagnostic', async (req, res) => {
  try {
    await transporter.verify();
    res.status(200).json({ 
      status: 'success', 
      message: 'SMTP connection verified successfully' 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error', 
      message: 'SMTP verification failed', 
      error: error.message,
      code: error.code,
      command: error.command
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Environment variables loaded:', {
    MAIL_USER: process.env.MAIL_USER ? 'Yes' : 'No',
    MAIL_PASS: process.env.MAIL_PASS ? 'Yes' : 'No',
  });
});