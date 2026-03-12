import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
        <h2>New Register Interest Submission</h2>
        <table cellpadding="8" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; max-width: 720px;">
          <tr><td><strong>Participant Name</strong></td><td>${body.participantName || '-'}</td></tr>
          <tr><td><strong>Participant Age</strong></td><td>${body.participantAge || '-'}</td></tr>
          <tr><td><strong>Parent / Guardian</strong></td><td>${body.parentGuardian || '-'}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${body.phone || '-'}</td></tr>
          <tr><td><strong>Email</strong></td><td>${body.email || '-'}</td></tr>
          <tr><td><strong>Program Interest</strong></td><td>${body.programInterest || '-'}</td></tr>
          <tr><td><strong>Availability / Notes</strong></td><td>${body.availability || '-'}</td></tr>
          <tr><td><strong>Acknowledgement</strong></td><td>${body.acknowledgement ? 'Yes' : 'No'}</td></tr>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: `"XCELERATED Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: body.email || process.env.SMTP_USER,
      subject: 'New Register Interest Submission',
      html,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return Response.json(
      { success: false, message: 'Failed to send form submission.' },
      { status: 500 }
    );
  }
}