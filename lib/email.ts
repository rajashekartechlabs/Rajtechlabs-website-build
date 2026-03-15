import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', // or any other email service you use
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // This should be an App Password, not your regular password
  },
});

export const sendBookingEmail = async (bookingDetails: {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  paymentId: string;
}) => {
  const { name, email, phone, date, time, paymentId } = bookingDetails;

  const mailOptionsToAdmin = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Sending to yourself
    subject: `New Call Booking - ${name}`,
    html: `
      <h2>New Booking Received!</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Payment ID:</strong> ${paymentId}</p>
    `,
  };

  const mailOptionsToUser = {
    from: `"Rajashekar Tech Labs" <${process.env.EMAIL_USER}>`,
    to: email, // Sending to the customer
    subject: `Your Call Booking Confirmation - Rajashekar Tech Labs`,
    html: `
      <h2>Booking Confirmed!</h2>
      <p>Hi ${name},</p>
      <p>Thank you for booking a call with Rajashekar Tech Labs.</p>
      <p><strong>Your slot:</strong> ${date} at ${time}</p>
      <p>We will share the meeting meeting link with you shortly.</p>
      <br />
      <p>Best regards,</p>
      <p>Rajashekar Tech Labs</p>
    `,
  };

  try {
    // Send email to Admin
    await transporter.sendMail(mailOptionsToAdmin);
    // Send email to User
    await transporter.sendMail(mailOptionsToUser);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};
