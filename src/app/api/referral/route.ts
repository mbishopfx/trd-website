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
      currentClient,
      referralType,
      message, 
      subject = 'New Referral Program Application' 
    } = body;

    // Validate required fields
    if (!name || !email || !referralType) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and referral type are required.' },
        { status: 400 }
      );
    }

    // Generate unique referral code
    const referralCode = `TRD-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
    
    // Create QR code URL (using QR Server API)
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`https://truerankdigital.com/referral?ref=${referralCode}`)}`;

    // Create nodemailer transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Email content for internal notification
    const internalEmailContent = `
      <h2>New Referral Program Application - True Rank Digital</h2>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr>
      <h3>Applicant Information</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      <p><strong>Current Client:</strong> ${currentClient ? 'Yes' : 'No'}</p>
      <p><strong>Referral Type:</strong> ${referralType}</p>
      
      <h3>Generated Referral Details</h3>
      <p><strong>Referral Code:</strong> <code style="background: #f5f5f5; padding: 4px 8px; border-radius: 4px; font-family: monospace;">${referralCode}</code></p>
      <p><strong>QR Code URL:</strong> <a href="${qrCodeUrl}" target="_blank">${qrCodeUrl}</a></p>
      <p><strong>Referral Link:</strong> <a href="https://truerankdigital.com/referral?ref=${referralCode}" target="_blank">https://truerankdigital.com/referral?ref=${referralCode}</a></p>
      
      ${message ? `
        <h3>Additional Message</h3>
        <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
          ${message.replace(/\n/g, '<br>')}
        </div>
      ` : ''}
      
      <hr>
      <p><strong>Next Steps:</strong></p>
      <ul>
        <li>Review application for approval</li>
        <li>Send referral materials to applicant</li>
        <li>Set up tracking for referral code: ${referralCode}</li>
        <li>Add to referral partner database</li>
      </ul>
      
      <hr>
      <p><small>This email was sent from the True Rank Digital referral form at ${new Date().toLocaleString()}</small></p>
    `;

    // Email content for applicant confirmation
    const applicantEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1e40af; margin: 0; font-size: 28px;">True Rank Digital</h1>
            <p style="color: #6b7280; margin: 5px 0 0; font-size: 16px;">Referral Program Application Received</p>
          </div>
          
          <h2 style="color: #1f2937; margin-bottom: 20px;">Thank You for Joining Our Referral Program!</h2>
          
          <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
            Hi ${name},
          </p>
          
          <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
            Thank you for your interest in the True Rank Digital Referral Program! We've received your application and are excited about the potential partnership.
          </p>
          
          <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin: 20px 0;">
            <h3 style="color: #1e40af; margin: 0 0 15px;">Your Referral Details</h3>
            <p style="margin: 8px 0; color: #374151;"><strong>Referral Code:</strong> <code style="background: #e5e7eb; padding: 4px 8px; border-radius: 4px; font-family: monospace;">${referralCode}</code></p>
            <p style="margin: 8px 0; color: #374151;"><strong>Referral Type:</strong> ${referralType}</p>
          </div>
          
          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid #22c55e; margin: 20px 0;">
            <h3 style="color: #15803d; margin: 0 0 15px;">💰 Referral Bonus: $500</h3>
            <p style="margin: 8px 0; color: #374151;">Earn $500 for each successful referral that becomes a client and remains active for at least 30 days.</p>
          </div>
          
          <h3 style="color: #1f2937; margin: 25px 0 15px;">What Happens Next?</h3>
          <ol style="color: #374151; line-height: 1.6; padding-left: 20px;">
            <li>Our team will review your application within 1-2 business days</li>
            <li>Once approved, you'll receive your complete referral kit including:
              <ul style="margin: 10px 0; padding-left: 20px;">
                <li>Customized QR code for easy sharing</li>
                <li>Referral tracking dashboard access</li>
                <li>Marketing materials and resources</li>
                <li>Complete terms and conditions</li>
              </ul>
            </li>
            <li>Start referring and earning $500 per successful client!</li>
          </ol>
          
          <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
            <p style="margin: 0; color: #92400e; font-size: 14px;">
              <strong>Important:</strong> Referral bonuses are paid after the referred client has been active for a minimum of 30 days and has paid their first invoice.
            </p>
          </div>
          
          <p style="color: #374151; line-height: 1.6; margin: 20px 0;">
            If you have any questions about the referral program, please don't hesitate to reach out to us at <a href="mailto:jon@truerankdigital.com" style="color: #3b82f6;">jon@truerankdigital.com</a> or call us at <a href="tel:+17324750139" style="color: #3b82f6;">(732) 475-0139</a>.
          </p>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; margin: 0; font-size: 14px;">
              Thank you for choosing True Rank Digital!<br>
              <strong>Team True Rank Digital</strong>
            </p>
            <p style="color: #6b7280; margin: 10px 0 0; font-size: 12px;">
              East Brunswick, NJ | (732) 475-0139 | truerankdigital.com
            </p>
          </div>
        </div>
      </div>
    `;

    // Send internal notification email
    const internalMailOptions = {
      from: `"True Rank Digital Referral System" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `${subject} - ${name} (${referralType})`,
      html: internalEmailContent,
    };

    // Send applicant confirmation email
    const applicantMailOptions = {
      from: `"True Rank Digital" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Welcome to the True Rank Digital Referral Program!',
      html: applicantEmailContent,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(internalMailOptions),
      transporter.sendMail(applicantMailOptions)
    ]);

    return NextResponse.json({
      message: 'Referral application submitted successfully',
      referralCode,
      qrCodeUrl,
      status: 'pending_approval'
    }, { status: 200 });

  } catch (error) {
    console.error('Referral form error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to submit referral application',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}







