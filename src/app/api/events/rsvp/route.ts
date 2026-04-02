import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, eventTitle, eventSlug, raffleEntry } = body;

    if (!name || !email || !phone || !eventTitle || !eventSlug) {
      return NextResponse.json(
        { error: 'Missing required RSVP fields.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST?.trim(),
      port: parseInt(process.env.SMTP_PORT?.trim() || '587', 10),
      secure: process.env.SMTP_SECURE?.trim() === 'true',
      auth: {
        user: process.env.SMTP_USER?.trim(),
        pass: process.env.SMTP_PASS?.trim(),
      },
    });

    await transporter.verify();

    const recipient = 'jon@truerankdigital.com';
    const sender = process.env.SMTP_USER?.trim() || 'bishop@truerankdigital.com';

    const emailContent = `
      <div style="font-family: sans-serif; color: #111827; max-width: 640px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 16px; overflow: hidden;">
        <div style="padding: 24px; background: linear-gradient(135deg, #07131d, #0c2231); color: white;">
          <p style="margin: 0 0 8px; letter-spacing: 0.22em; text-transform: uppercase; font-size: 12px; color: #7dd3fc;">Event RSVP</p>
          <h1 style="margin: 0; font-size: 28px; line-height: 1.1;">${eventTitle}</h1>
        </div>
        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; border: 1px solid #e5e7eb;"><strong>Name</strong></td>
              <td style="padding: 12px; border: 1px solid #e5e7eb;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e5e7eb;"><strong>Email</strong></td>
              <td style="padding: 12px; border: 1px solid #e5e7eb;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e5e7eb;"><strong>Phone</strong></td>
              <td style="padding: 12px; border: 1px solid #e5e7eb;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e5e7eb;"><strong>Event Slug</strong></td>
              <td style="padding: 12px; border: 1px solid #e5e7eb;">${eventSlug}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e5e7eb;"><strong>Free Mac Mini Raffle</strong></td>
              <td style="padding: 12px; border: 1px solid #e5e7eb;">${raffleEntry ? 'Entered' : 'No'}</td>
            </tr>
          </table>
          <p style="margin: 20px 0 0; font-size: 12px; color: #6b7280;">
            No cost to attend. No purchase required.
          </p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"True Rank Digital Events" <${sender}>`,
      to: recipient,
      replyTo: email,
      subject: `Event RSVP: ${eventTitle} - ${name}`,
      html: emailContent,
    });

    return NextResponse.json({
      success: true,
      message: 'RSVP received successfully.',
    });
  } catch (error) {
    console.error('Event RSVP error:', error);
    return NextResponse.json(
      { error: 'Failed to submit RSVP. Please try again later.' },
      { status: 500 }
    );
  }
}
