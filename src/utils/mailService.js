const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

exports.sendMail = async (to, subject, text, html) => {
  const mailOptions = {
    from: process.env.MAIL_USER,
    to,
    subject,
    text,
    html
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent');
  } catch (error) {
    console.error('❌ Email error:', error);
    throw new Error('Failed to send email');
  }
};
