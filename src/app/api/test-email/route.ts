import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    // Create nodemailer transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // false for STARTTLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    console.log('SMTP Configuration:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS ? 'configured' : 'not configured'
    });

    // Verify transporter configuration
    await transporter.verify();

    // Send test email
    const mailOptions = {
      from: `"True Rank Digital Test" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: 'Test Email - SMTP Configuration Working',
      html: `
        <h2>SMTP Configuration Test</h2>
        <p>This is a test email to verify that the SMTP configuration is working correctly.</p>
        <p><strong>Test sent at:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>From:</strong> ${process.env.SMTP_USER}</p>
        <p><strong>To:</strong> ${process.env.RECIPIENT_EMAIL}</p>
        <hr>
        <p><small>True Rank Digital Email Test</small></p>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    
    return NextResponse.json({
      message: 'Test email sent successfully',
      messageId: result.messageId,
      response: result.response
    }, { status: 200 });

  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json({
      error: 'Failed to send test email',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
