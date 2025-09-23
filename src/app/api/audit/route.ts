import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, website, currentMarketing, goals, budget } = body;

    // Validate required fields
    if (!name || !email || !website) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and website are required.' },
        { status: 400 }
      );
    }

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

    // Verify transporter configuration
    await transporter.verify();

    // Email content for audit request
    const emailContent = `
      <h2>New Free SEO Audit Request - True Rank Digital</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      <p><strong>Website:</strong> <a href="${website}" target="_blank">${website}</a></p>
      
      ${currentMarketing ? `
        <p><strong>Current Marketing Efforts:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
          ${currentMarketing.replace(/\n/g, '<br>')}
        </div>
      ` : ''}
      
      ${goals ? `
        <p><strong>Business Goals:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #28a745; margin: 10px 0;">
          ${goals.replace(/\n/g, '<br>')}
        </div>
      ` : ''}
      
      ${budget ? `<p><strong>Monthly Budget:</strong> ${budget}</p>` : ''}
      
      <hr>
      <div style="background-color: #fff3cd; padding: 15px; border: 1px solid #ffeaa7; border-radius: 5px; margin: 20px 0;">
        <h3 style="color: #856404; margin-top: 0;">Action Required:</h3>
        <p style="color: #856404; margin-bottom: 0;">
          <strong>Free SEO Audit requested for:</strong> <a href="${website}" target="_blank">${website}</a><br>
          Please conduct the audit and send the results to the client.
        </p>
      </div>
      
      <p><small>This audit request was submitted at ${new Date().toLocaleString()}</small></p>
    `;

    // Send email
    const mailOptions = {
      from: `"True Rank Digital Audit Request" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `🔍 Free SEO Audit Request - ${website} (${name})`,
      html: emailContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Audit request sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Audit request error:', error);
    return NextResponse.json(
      { error: 'Failed to send audit request. Please try again later or contact us directly.' },
      { status: 500 }
    );
  }
}
