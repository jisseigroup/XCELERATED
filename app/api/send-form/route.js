import nodemailer from 'nodemailer';
import { programCheckoutConfig } from '../../../components/programCheckoutConfig';

const reservationConfigByFormType = {
  'XSPA Reservation': {
    programCode: 'XSPA',
    adminSubject: 'New XSPA Reservation Waiver Submission',
    userSubject: 'Your XSPA waiver was received',
    paymentLink: programCheckoutConfig.XSPA.paymentLink,
    paymentButtonLabel: programCheckoutConfig.XSPA.emailButtonLabel,
    paymentCopy: programCheckoutConfig.XSPA.paymentCopy,
  },
  'XPT Reservation': {
    programCode: 'XPT',
    adminSubject: 'New XPT Reservation Waiver Submission',
    userSubject: 'Your XPT waiver was received',
    paymentLink: programCheckoutConfig.XPT.paymentLink,
    paymentButtonLabel: programCheckoutConfig.XPT.emailButtonLabel,
    paymentCopy: programCheckoutConfig.XPT.paymentCopy,
  },
};

const US_DATE_PATTERN = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatBoolean(value) {
  return value ? 'Yes' : 'No';
}

function getSender() {
  const address = process.env.SMTP_USER || '';
  const name = process.env.SMTP_FROM_NAME || 'XCELERATED';

  return { name, address };
}

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
      agreementDate = '',
      medicalNotes = '',
      signatureName = '',
      waiverAccepted = false,
      refundPolicyAccepted = false,
      mediaReleaseAllowed = false,
    } = body;

    const isContactForm = formType === 'Contact Form';
    const reservationConfig = reservationConfigByFormType[formType];
    const isReservationForm = Boolean(reservationConfig);

    if (
      isReservationForm &&
      (!participantName.trim() ||
        !phone.trim() ||
        !email.trim() ||
        !agreementDate.trim() ||
        !US_DATE_PATTERN.test(agreementDate.trim()) ||
        !signatureName.trim() ||
        !waiverAccepted ||
        !refundPolicyAccepted)
    ) {
      return Response.json(
        {
          success: false,
          message:
            'Please complete all required reservation fields and use MM/DD/YYYY for the date.',
        },
        { status: 400 }
      );
    }

    const safeParticipantName = escapeHtml(participantName);
    const safeParticipantAge = escapeHtml(participantAge);
    const safeParentGuardian = escapeHtml(parentGuardian);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeProgramInterest = escapeHtml(programInterest);
    const safeAvailability = escapeHtml(availability);
    const safeAgreementDate = escapeHtml(agreementDate);
    const safeMedicalNotes = escapeHtml(medicalNotes);
    const safeSignatureName = escapeHtml(signatureName);
    const safeReservationPaymentLink = escapeHtml(reservationConfig?.paymentLink || '');
    const safeReservationProgramCode = escapeHtml(reservationConfig?.programCode || '');
    const safeReservationPaymentButtonLabel = escapeHtml(
      reservationConfig?.paymentButtonLabel || ''
    );
    const safeReservationPaymentCopy = escapeHtml(reservationConfig?.paymentCopy || '');

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
    const sender = getSender();

    const adminSubject =
      isContactForm
        ? 'New Contact Form Submission'
        : isReservationForm
        ? reservationConfig.adminSubject
        : formType === 'Register Interest'
        ? 'New Register Interest Submission'
        : `New ${formType} Submission`;

    const adminHtml =
      isContactForm
        ? `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
            <h2>New Contact Form Submission</h2>
            <table cellpadding="8" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; max-width: 720px;">
              <tr><td><strong>Full Name</strong></td><td>${safeParticipantName || '-'}</td></tr>
              <tr><td><strong>Phone</strong></td><td>${safePhone || '-'}</td></tr>
              <tr><td><strong>Email</strong></td><td>${safeEmail || '-'}</td></tr>
              <tr><td><strong>Program</strong></td><td>${safeProgramInterest || '-'}</td></tr>
              <tr><td><strong>Message</strong></td><td>${safeAvailability || '-'}</td></tr>
            </table>
          </div>
        `
        : isReservationForm
        ? `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
            <h2>${safeReservationProgramCode} Reservation Waiver Submission</h2>
            <table cellpadding="8" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; max-width: 720px;">
              <tr><td><strong>Participant Name</strong></td><td>${safeParticipantName || '-'}</td></tr>
              <tr><td><strong>Parent / Guardian</strong></td><td>${safeParentGuardian || '-'}</td></tr>
              <tr><td><strong>Phone</strong></td><td>${safePhone || '-'}</td></tr>
              <tr><td><strong>Email</strong></td><td>${safeEmail || '-'}</td></tr>
              <tr><td><strong>Program</strong></td><td>${safeProgramInterest || '-'}</td></tr>
              <tr><td><strong>Agreement Date</strong></td><td>${safeAgreementDate || '-'}</td></tr>
              <tr><td><strong>Medical Notes</strong></td><td>${safeMedicalNotes || '-'}</td></tr>
              <tr><td><strong>Waiver Accepted</strong></td><td>${formatBoolean(waiverAccepted)}</td></tr>
              <tr><td><strong>Refund Policy Accepted</strong></td><td>${formatBoolean(refundPolicyAccepted)}</td></tr>
              <tr><td><strong>Media Release Allowed</strong></td><td>${formatBoolean(mediaReleaseAllowed)}</td></tr>
              <tr><td><strong>Electronic Signature</strong></td><td>${safeSignatureName || '-'}</td></tr>
            </table>
          </div>
        `
        : `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
            <h2>New Register Interest Submission</h2>
            <table cellpadding="8" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; max-width: 720px;">
              <tr><td><strong>Participant Name</strong></td><td>${safeParticipantName || '-'}</td></tr>
              <tr><td><strong>Participant Age</strong></td><td>${safeParticipantAge || '-'}</td></tr>
              <tr><td><strong>Parent / Guardian</strong></td><td>${safeParentGuardian || '-'}</td></tr>
              <tr><td><strong>Phone</strong></td><td>${safePhone || '-'}</td></tr>
              <tr><td><strong>Email</strong></td><td>${safeEmail || '-'}</td></tr>
              <tr><td><strong>Program Interest</strong></td><td>${safeProgramInterest || '-'}</td></tr>
              <tr><td><strong>Availability / Notes</strong></td><td>${safeAvailability || '-'}</td></tr>
              <tr><td><strong>Acknowledgement</strong></td><td>${acknowledgement ? 'Yes' : 'No'}</td></tr>
            </table>
          </div>
        `;

    await transporter.sendMail({
      from: sender,
      to: recipient,
      replyTo: email || process.env.SMTP_USER,
      subject: adminSubject,
      html: adminHtml,
    });

    if (email) {
      const userSubject =
        isContactForm
          ? 'We received your inquiry'
          : isReservationForm
          ? reservationConfig.userSubject
          : formType === 'Register Interest'
          ? 'We received your program interest'
          : 'We received your submission';

      const userHtml =
        isContactForm
          ? `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
              <h2>Thanks for contacting XCELERATED</h2>
              <p>Hi ${safeParticipantName || 'there'},</p>
              <p>We received your inquiry and will follow up with you soon.</p>
              <p><strong>Submitted details:</strong></p>
              <ul>
                <li>Program: ${safeProgramInterest || '-'}</li>
                <li>Phone: ${safePhone || '-'}</li>
              </ul>
              <p>– XCELERATED</p>
            </div>
          `
          : isReservationForm
          ? `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
              <h2>${reservationConfig.userSubject}</h2>
              <p>Hi ${safeSignatureName || safeParticipantName || 'there'},</p>
              <p>We received the ${safeReservationProgramCode} reservation waiver submission for ${safeParticipantName || 'the participant'}.</p>

              <p><strong>Submitted details:</strong></p>
              <table cellpadding="8" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; max-width: 720px;">
                <tr><td><strong>Participant Name</strong></td><td>${safeParticipantName || '-'}</td></tr>
                <tr><td><strong>Parent / Guardian</strong></td><td>${safeParentGuardian || '-'}</td></tr>
                <tr><td><strong>Phone</strong></td><td>${safePhone || '-'}</td></tr>
                <tr><td><strong>Email</strong></td><td>${safeEmail || '-'}</td></tr>
                <tr><td><strong>Agreement Date</strong></td><td>${safeAgreementDate || '-'}</td></tr>
                <tr><td><strong>Medical Notes</strong></td><td>${safeMedicalNotes || '-'}</td></tr>
                <tr><td><strong>Media Release Allowed</strong></td><td>${formatBoolean(mediaReleaseAllowed)}</td></tr>
                <tr><td><strong>Electronic Signature</strong></td><td>${safeSignatureName || '-'}</td></tr>
              </table>

              <p style="margin-top:16px;">${safeReservationPaymentCopy}</p>
              <p style="margin:12px 0 0;">
                <a
                  href="${safeReservationPaymentLink}"
                  style="display:inline-block;padding:12px 18px;border-radius:999px;background:#d29803;color:#111;font-weight:700;text-decoration:none;"
                >
                  ${safeReservationPaymentButtonLabel}
                </a>
              </p>
              <p style="margin-top:12px;font-size:14px;color:#444;word-break:break-all;">
                ${safeReservationPaymentLink}
              </p>
              <p>– XCELERATED</p>
            </div>
          `
          : `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
              <h2>Thanks for your interest in XCELERATED</h2>
              <p>Hi ${safeParticipantName || 'there'},</p>
              <p>We received your program interest submission and will follow up with the right next steps.</p>

              <p><strong>Submitted details:</strong></p>
              <table cellpadding="8" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; max-width: 720px;">
                <tr><td><strong>Participant Name</strong></td><td>${safeParticipantName || '-'}</td></tr>
                <tr><td><strong>Participant Age</strong></td><td>${safeParticipantAge || '-'}</td></tr>
                <tr><td><strong>Parent / Guardian</strong></td><td>${safeParentGuardian || '-'}</td></tr>
                <tr><td><strong>Phone</strong></td><td>${safePhone || '-'}</td></tr>
                <tr><td><strong>Email</strong></td><td>${safeEmail || '-'}</td></tr>
                <tr><td><strong>Program Interest</strong></td><td>${safeProgramInterest || '-'}</td></tr>
                <tr><td><strong>Availability / Notes</strong></td><td>${safeAvailability || '-'}</td></tr>
              </table>

              <p style="margin-top:16px;">Waiver forms, permission to treat forms, and proof of insurance may be required before final enrollment.</p>
              <p>– XCELERATED</p>
            </div>
          `;

      await transporter.sendMail({
        from: sender,
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
