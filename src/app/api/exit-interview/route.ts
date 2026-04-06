import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      clientName,
      completedBy,
      accountManager,
      reasons,
      eventTurningPoint,
      volumeSatisfaction,
      qualitySatisfaction,
      seasonalityAlignment,
      seasonalityComments,
      ratings,
      clearUnderstanding,
      hopesForFuture,
      differentActions,
      recommendationLikelihood,
      additionalFeedback
    } = body;

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST?.trim() || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT?.trim() || '587'),
      secure: process.env.SMTP_SECURE?.trim() === 'true',
      auth: {
        user: process.env.SMTP_USER?.trim(),
        pass: process.env.SMTP_PASS?.trim(),
      },
    });

    // Email content
    const emailContent = `
      <div style="font-family: sans-serif; color: #333; max-width: 800px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
        <div style="background: #050505; color: #00F5FF; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">True Rank Digital</h1>
          <h2 style="margin: 5px 0 0; color: #4F7FFF; font-size: 18px;">Client Exit Interview Submission</h2>
        </div>
        
        <div style="padding: 30px; line-height: 1.6;">
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
            <p><strong>Client Name:</strong> ${clientName || 'N/A'}</p>
            <p><strong>Completed By:</strong> ${completedBy || 'N/A'}</p>
            <p><strong>Account Manager:</strong> ${accountManager || 'N/A'}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>

          <h3 style="border-bottom: 2px solid #00F5FF; padding-bottom: 5px; color: #050505;">Section 1: Primary Reason for Departure</h3>
          <p><strong>Primary Reasons:</strong> ${reasons?.join(', ') || 'None selected'}</p>
          <p><strong>Specific event or turning point:</strong></p>
          <div style="background: #fff; padding: 10px; border-left: 3px solid #00F5FF; margin: 10px 0;">
            ${(eventTurningPoint || 'None provided').replace(/\n/g, '<br>')}
          </div>

          <h3 style="border-bottom: 2px solid #00F5FF; padding-bottom: 5px; color: #050505; margin-top: 30px;">Section 2: Performance & Strategy Evaluation</h3>
          <p><strong>Satisfaction with Lead Volume:</strong> ${volumeSatisfaction || 'N/A'}</p>
          <p><strong>Satisfaction with Lead Quality:</strong> ${qualitySatisfaction || 'N/A'}</p>
          <p><strong>Strategy Seasonality Alignment:</strong> ${seasonalityAlignment || 'N/A'}</p>
          <p><strong>Comments on Seasonality:</strong> ${seasonalityComments || 'None'}</p>

          <h3 style="border-bottom: 2px solid #00F5FF; padding-bottom: 5px; color: #050505; margin-top: 30px;">Section 3: Communication & Account Management</h3>
          <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">Responsiveness of Account Manager:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right;"><strong>${ratings?.responsiveness || 'N/A'} / 5</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">Clarity of Monthly Reporting:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right;"><strong>${ratings?.reporting || 'N/A'} / 5</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">Proactiveness in Suggestions:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right;"><strong>${ratings?.proactiveness || 'N/A'} / 5</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">Transparency Regarding Challenges:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right;"><strong>${ratings?.transparency || 'N/A'} / 5</strong></td>
            </tr>
          </table>
          <p style="margin-top: 20px;"><strong>Clear understanding of monthly work?</strong></p>
          <div style="background: #fff; padding: 10px; border-left: 3px solid #00F5FF; margin: 10px 0;">
            ${(clearUnderstanding || 'None provided').replace(/\n/g, '<br>')}
          </div>

          <h3 style="border-bottom: 2px solid #00F5FF; padding-bottom: 5px; color: #050505; margin-top: 30px;">Section 4: Looking Forward & Final Thoughts</h3>
          <p><strong>What are you hoping for from your new provider?</strong></p>
          <div style="background: #fff; padding: 10px; border-left: 3px solid #00F5FF; margin: 10px 0;">
            ${(hopesForFuture || 'None provided').replace(/\n/g, '<br>')}
          </div>
          <p><strong>One thing TRD could have done differently?</strong></p>
          <div style="background: #fff; padding: 10px; border-left: 3px solid #00F5FF; margin: 10px 0;">
            ${(differentActions || 'None provided').replace(/\n/g, '<br>')}
          </div>
          <p><strong>Likelihood to recommend (1-10):</strong> ${recommendationLikelihood || 'N/A'}</p>
          <p><strong>Additional Feedback:</strong></p>
          <div style="background: #fff; padding: 10px; border-left: 3px solid #00F5FF; margin: 10px 0;">
            ${(additionalFeedback || 'None provided').replace(/\n/g, '<br>')}
          </div>
        </div>

        <div style="background: #f4f4f4; color: #888; padding: 20px; text-align: center; font-size: 12px;">
          <p>This email was sent from the True Rank Digital website Exit Interview portal.</p>
        </div>
      </div>
    `;

    // Send email
    const mailOptions = {
      from: `"TRD Exit Interview" <${process.env.SMTP_USER || 'bishop@truerankdigital.com'}>`,
      to: 'jon@truerankdigital.com',
      subject: `Client Exit Interview: ${clientName || 'Unknown Client'}`,
      html: emailContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Exit interview submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Exit interview submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit exit interview. Please try again later.' },
      { status: 500 }
    );
  }
}
