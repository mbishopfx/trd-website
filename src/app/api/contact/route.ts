import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      company, 
      message, 
      subject = 'New Contact Form Submission',
      consentTransactional,
      consentMarketing
    } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // false for STARTTLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Compliance details
    const complianceHtml = consentTransactional !== undefined ? `
      <div style="background-color: #f8f9fa; padding: 15px; border: 1px solid #e9ecef; border-radius: 8px; margin-top: 20px;">
        <h3 style="margin-top: 0; color: #333;">A2P 10DLC Compliance</h3>
        <p><strong>Transactional SMS Consent:</strong> ${consentTransactional ? '✅ CONSENTED' : '❌ NO'}</p>
        <p><strong>Marketing SMS Consent:</strong> ${consentMarketing ? '✅ CONSENTED' : '❌ NO'}</p>
      </div>
    ` : '';

    // Email content
    const emailContent = `
      <div style="font-family: sans-serif; color: #333;">
        <h2>New Form Submission - True Rank Digital</h2>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        
        <p><strong>Message:</strong></p>
        <div style="background-color: #f0f7ff; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
          ${message.replace(/\n/g, '<br>')}
        </div>

        ${complianceHtml}

        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p><small>This email was sent from the True Rank Digital website at ${new Date().toLocaleString()}</small></p>
      </div>
    `;

    // Send email
    const mailOptions = {
      from: `"True Rank Digital Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `${subject} - From ${name}`,
      html: emailContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later or contact us directly.' },
      { status: 500 }
    );
  }
}
