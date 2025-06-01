import nodemailer from 'nodemailer';

export const sendEmailToAdmin = async ({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `📩 New Message: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f6f6f6; padding: 30px;">
        <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 10px; padding: 30px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <h2 style="color: #4A90E2;">🚀 New Contact Form Submission</h2>
          <p><strong>👤 Name:</strong> ${name}</p>
          <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>💬 Subject:</strong> ${subject}</p>
          <div style="margin-top: 20px;">
            <p><strong>📝 Message:</strong></p>
            <div style="background: #f1f1f1; padding: 15px; border-radius: 5px; white-space: pre-line;">
              ${message}
            </div>
          </div>
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #777;">This message was sent from your website contact form.</p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};
