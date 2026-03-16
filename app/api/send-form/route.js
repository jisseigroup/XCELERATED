import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      formType = 'Website Form',
      participantName = '',
      participantAge = '',
      parentGuardian = '',
      phone = '',
      email = '',
      programInterest = '',
      availability = '',
      acknowledgement = false,
    } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const recipient = process.env.MAIL_TO || process.env.SMTP_TO || process.env.SMTP_USER;

    const adminSubject =
      formType === 'Contact Form'
        ? 'New Contact Form Submission'
        : formType === 'Register Interest'
        ? 'New Register Interest Submission'
        : `New ${formType} Submission`;

    const adminHtml =
      formType === 'Contact Form'
        ? `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
            <h2>New Contact Form Submission</h2>
            <table cellpadding="8" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; max-width: 720px;">
              <tr><td><strong>Full Name</strong></td><td>${participantName || '-'}</td></tr>
              <tr><td><strong>Phone</strong></td><td>${phone || '-'}</td></tr>
              <tr><td><strong>Email</strong></td><td>${email || '-'}</td></tr>
              <tr><td><strong>Program</strong></td><td>${programInterest || '-'}</td></tr>
              <tr><td><strong>Message</strong></td><td>${availability || '-'}</td></tr>
            </table>
          </div>
        `
        : `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
            <h2>New Register Interest Submission</h2>
            <table cellpadding="8" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; max-width: 720px;">
              <tr><td><strong>Participant Name</strong></td><td>${participantName || '-'}</td></tr>
              <tr><td><strong>Participant Age</strong></td><td>${participantAge || '-'}</td></tr>
              <tr><td><strong>Parent / Guardian</strong></td><td>${parentGuardian || '-'}</td></tr>
              <tr><td><strong>Phone</strong></td><td>${phone || '-'}</td></tr>
              <tr><td><strong>Email</strong></td><td>${email || '-'}</td></tr>
              <tr><td><strong>Program Interest</strong></td><td>${programInterest || '-'}</td></tr>
              <tr><td><strong>Availability / Notes</strong></td><td>${availability || '-'}</td></tr>
              <tr><td><strong>Acknowledgement</strong></td><td>${acknowledgement ? 'Yes' : 'No'}</td></tr>
            </table>
          </div>
        `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"XCELERATED Website" <${process.env.SMTP_USER}>`,
      to: recipient,
      replyTo: email || process.env.SMTP_USER,
      subject: adminSubject,
      html: adminHtml,
    });

    if (email) {
      const userSubject =
        formType === 'Contact Form'
          ? 'We received your inquiry'
          : formType === 'Register Interest'
          ? 'We received your program interest'
          : 'We received your submission';

      const userHtml =
        formType === 'Contact Form'
          ? `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
              <h2>Thanks for contacting XCELERATED</h2>
              <p>Hi ${participantName || 'there'},</p>
              <p>We received your inquiry and will follow up with you soon.</p>
              <p><strong>Submitted details:</strong></p>
              <ul>
                <li>Program: ${programInterest || '-'}</li>
                <li>Phone: ${phone || '-'}</li>
              </ul>
              <p>– XCELERATED</p>
            </div>
          `
          : `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
              <h2>Thanks for your interest in XCELERATED</h2>
              <p>Hi ${participantName || 'there'},</p>
              <p>We received your program interest submission and will follow up with the right next steps.</p>

              <p><strong>Submitted details:</strong></p>
              <table cellpadding="8" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; max-width: 720px;">
                <tr><td><strong>Participant Name</strong></td><td>${participantName || '-'}</td></tr>
                <tr><td><strong>Participant Age</strong></td><td>${participantAge || '-'}</td></tr>
                <tr><td><strong>Parent / Guardian</strong></td><td>${parentGuardian || '-'}</td></tr>
                <tr><td><strong>Phone</strong></td><td>${phone || '-'}</td></tr>
                <tr><td><strong>Email</strong></td><td>${email || '-'}</td></tr>
                <tr><td><strong>Program Interest</strong></td><td>${programInterest || '-'}</td></tr>
                <tr><td><strong>Availability / Notes</strong></td><td>${availability || '-'}</td></tr>
              </table>

              <p style="margin-top:16px;">Waiver forms, permission to treat forms, and proof of insurance may be required before final enrollment.</p>
              <p>– XCELERATED</p>
            </div>
          `;

      await transporter.sendMail({
        from: process.env.SMTP_FROM || `"XCELERATED Website" <${process.env.SMTP_USER}>`,
        to: email,
        subject: userSubject,
        html: userHtml,
      });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return Response.json(
      { success: false, message: error.message || 'Failed to send form submission.' },
      { status: 500 }
    );
  }
}