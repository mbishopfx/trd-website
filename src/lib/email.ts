import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendLeadEmail(formTitle: string, leadData: Record<string, any>) {
  const recipient = process.env.RECIPIENT_EMAIL || 'jon@truerankdigital.com';
  const sender = process.env.SMTP_USER || 'bishop@truerankdigital.com';

  // Format the data for the email
  const fieldEntries = Object.entries(leadData)
    .filter(([key]) => !['id', 'consent_transactional', 'consent_marketing'].includes(key))
    .map(([key, value]) => `<tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>${key}</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${value}</td></tr>`)
    .join('');

  const complianceInfo = `
    <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 8px;">
      <h3 style="margin-top: 0;">A2P 10DLC Compliance Info</h3>
      <p><strong>Transactional Consent:</strong> ${leadData.consent_transactional ? '✅ Yes' : '❌ No'}</p>
      <p><strong>Marketing Consent:</strong> ${leadData.consent_marketing ? '✅ Yes' : '❌ No'}</p>
    </div>
  `;

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
      <div style="background: #00CC99; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">New Lead Captured</h1>
        <p style="margin: 5px 0 0;">Form: ${formTitle}</p>
      </div>
      <div style="padding: 20px;">
        <table style="width: 100%; border-collapse: collapse;">
          ${fieldEntries}
        </table>
        ${complianceInfo}
        <div style="margin-top: 20px; font-size: 0.8em; color: #888;">
          <p>This lead was captured on ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  `;

  try {
    const info = await transporter.sendMail({
      from: `"TRD Leads" <${sender}>`,
      to: recipient,
      subject: `New Lead: ${formTitle} - ${leadData.First_Name || ''} ${leadData.Last_Name || ''}`,
      html: html,
    });

    console.log('✅ Lead email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Failed to send lead email:', error);
    return { success: false, error };
  }
}
