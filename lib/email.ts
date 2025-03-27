import nodemailer from "nodemailer";

// Configure Nodemailer transporter
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transporter = nodemailer.createTransport(
  new SMTPTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
);

// Function to send welcome email
export const sendWelcomeEmail = async (
  to: string,
  userName: string,
  isSignUp = true
) => {
  const action = isSignUp ? "Sign Up" : "Sign In";
  const subject = isSignUp
    ? "Welcome to PrepInterview!"
    : "Welcome Back to PrepInterview!";

  // HTML email template with inline CSS inspired by your design
  const html = `
    <div style="font-family: 'Mona Sans', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #08090D; color: #FFFFFF; border-radius: 10px;">
      <div style="text-align: center; padding: 20px; background: linear-gradient(to bottom, #171532, #08090D); border-radius: 10px 10px 0 0;">
        <h1 style="font-size: 28px; font-weight: bold; color: #CAC5FE;">PrepInterview</h1>
        <p style="font-size: 16px; color: #D6E0FF;">Your AI-Powered Interview Assistant</p>
      </div>
      <div style="padding: 20px;">
        <h2 style="font-size: 24px; font-weight: 600; color: #FFFFFF;">Hello, ${userName}!</h2>
        <p style="font-size: 16px; color: #D6E0FF; line-height: 1.5;">
          ${
            isSignUp ? "Thank you for signing up!" : "Great to see you back!"
          } Welcome ${
    isSignUp ? "to" : "back to"
  } PrepInterview, where our AI helps you ace your interviews with confidence.
        </p>
        <p style="font-size: 16px; color: #D6E0FF; line-height: 1.5;">
          Get started by exploring our features and preparing for your next big opportunity!
        </p>
        <a href="${
          process.env.NEXTAUTH_URL
        }/" style="display: inline-block; padding: 12px 24px; background-color: #CAC5FE; color: #08090D; font-weight: bold; text-decoration: none; border-radius: 25px; margin-top: 20px;">
          Go to Dashboard
        </a>
      </div>
      <div style="text-align: center; padding: 20px; border-top: 1px solid #4B4D4F33; color: #6870A6; font-size: 12px;">
        <p>© 2025 PrepInterview. All rights reserved.</p>
      </div>
    </div>
  `;

  const mailOptions = {
    from: `"PrepInterview" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Welcome email sent to ${to} for ${action}`);
  } catch (error) {
    console.error(`Failed to send welcome email to ${to}:`, error);
    // In a serverless environment, you might want to log this elsewhere (e.g., Vercel logs)
  }
};
