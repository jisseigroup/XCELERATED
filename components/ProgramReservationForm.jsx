'use client';

import { useEffect, useState } from 'react';

const PACIFIC_TIME_ZONE = 'America/Los_Angeles';
const US_DATE_PATTERN = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;

function getPacificUsDate() {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: PACIFIC_TIME_ZONE,
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  }).format(new Date());
}

function formatUsDateInput(value) {
  const digits = value.replace(/\D/g, '').slice(0, 8);

  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;

  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}

export default function ProgramReservationForm({
  formType,
  programCode,
  reservationLabel,
  paymentLink,
}) {
  const [agreementDate, setAgreementDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  useEffect(() => {
    setAgreementDate(getPacificUsDate());
  }, []);

  useEffect(() => {
    if (!isSuccessModalOpen) return undefined;

    const originalOverflow = document.body.style.overflow;

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsSuccessModalOpen(false);
      }
    }

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSuccessModalOpen]);

  function closeSuccessModal() {
    setIsSuccessModalOpen(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      formType,
      participantName: formData.get('participantName')?.toString().trim() || '',
      parentGuardian: formData.get('parentGuardian')?.toString().trim() || '',
      phone: formData.get('phone')?.toString().trim() || '',
      email: formData.get('email')?.toString().trim() || '',
      agreementDate: formData.get('agreementDate')?.toString().trim() || '',
      medicalNotes: formData.get('medicalNotes')?.toString().trim() || '',
      signatureName: formData.get('signatureName')?.toString().trim() || '',
      programInterest: programCode,
      waiverAccepted: formData.get('waiverAccepted') === 'on',
      refundPolicyAccepted: formData.get('refundPolicyAccepted') === 'on',
      mediaReleaseAllowed: formData.get('mediaReleaseAllowed') === 'on',
    };

    if (
      !payload.participantName ||
      !payload.phone ||
      !payload.email ||
      !payload.agreementDate ||
      !US_DATE_PATTERN.test(payload.agreementDate) ||
      !payload.signatureName ||
      !payload.waiverAccepted ||
      !payload.refundPolicyAccepted
    ) {
      setError(
        'Please complete the required fields, use MM/DD/YYYY for the date, and confirm the acknowledgements before continuing.'
      );
      setSuccess(null);
      return;
    }

    try {
      setIsSubmitting(true);
      setError('');
      setSuccess(null);

      const response = await fetch('/api/send-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Something went wrong while submitting the waiver.');
      }

      setSuccess({
        participantName: payload.participantName,
        email: payload.email,
      });
      setIsSuccessModalOpen(true);

      form.reset();
      setAgreementDate(getPacificUsDate());
    } catch (submissionError) {
      setSuccess(null);
      setError(
        submissionError.message || 'Something went wrong while submitting the waiver.'
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const modalTitleId = `${programCode.toLowerCase()}-success-title`;

  return (
    <form className="spacer-top" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label className="field-stack">
          <span className="field-label">Participant Name</span>
          <input
            className="input"
            type="text"
            name="participantName"
            placeholder="Participant name"
            required
          />
        </label>

        <label className="field-stack">
          <span className="field-label">Parent / Guardian Name</span>
          <input
            className="input"
            type="text"
            name="parentGuardian"
            placeholder="Required if participant is under 18"
          />
        </label>

        <label className="field-stack">
          <span className="field-label">Phone</span>
          <input
            className="input"
            type="tel"
            name="phone"
            placeholder="Phone number"
            required
          />
        </label>

        <label className="field-stack">
          <span className="field-label">Email</span>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
        </label>

        <label className="field-stack">
          <span className="field-label">Date</span>
          <input
            className="input"
            type="text"
            name="agreementDate"
            value={agreementDate}
            onChange={(event) => setAgreementDate(formatUsDateInput(event.target.value))}
            inputMode="numeric"
            placeholder="MM/DD/YYYY"
            pattern="(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/[0-9]{4}"
            maxLength={10}
            required
          />
        </label>

        <label className="field-stack">
          <span className="field-label">Electronic Signature</span>
          <input
            className="input"
            type="text"
            name="signatureName"
            placeholder="Type full legal name"
            required
          />
        </label>
      </div>

      <label className="field-stack spacer-top">
        <span className="field-label">Medical conditions or limitations to share</span>
        <textarea
          className="textarea"
          name="medicalNotes"
          placeholder="List any injury history, limitations, or write none."
        />
      </label>

      <p className="helper-text spacer-top">
        If the participant is under 18, a parent or legal guardian should complete and sign this
        form.
      </p>

      <div className="checkbox-stack spacer-top">
        <label className="checkbox">
          <input type="checkbox" name="waiverAccepted" required />
          <span>
            I have read and agree to the Assumption of Risk, Release of Liability, Medical
            Clearance, Emergency Authorization, and Indemnity terms above.
          </span>
        </label>

        <label className="checkbox">
          <input type="checkbox" name="refundPolicyAccepted" required />
          <span>
            I understand that all sales are final and that refunds or credits are limited to the
            policy described above.
          </span>
        </label>

        <label className="checkbox">
          <input type="checkbox" name="mediaReleaseAllowed" />
          <span>
            I allow XCELERATED LLC to use photographs or video footage for
            promotional purposes.
          </span>
        </label>
      </div>

      <div className="btn-row spacer-top">
        <button type="submit" className="btn btn-gold btn-loading" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span className="btn-spinner" aria-hidden="true" />
              Submitting waiver...
            </>
          ) : (
            'Submit Waiver'
          )}
        </button>
      </div>

      {error ? (
        <p className="helper-text spacer-top" style={{ color: '#f1b2b2' }} aria-live="polite">
          {error}
        </p>
      ) : null}

      {success && isSuccessModalOpen ? (
        <div className="modal-backdrop" role="presentation" onClick={closeSuccessModal}>
          <div
            className="modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby={modalTitleId}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={closeSuccessModal}
              aria-label="Close confirmation"
            >
              <span aria-hidden="true">+</span>
            </button>

            <span className="eyebrow">Waiver submitted</span>
            <h3 id={modalTitleId}>You&apos;re ready for payment.</h3>
            <p className="helper-text">
              A copy of the waiver has been sent to <strong>{success.email}</strong> for{' '}
              <strong>{success.participantName}</strong>. Continue to payment to finish the{' '}
              {reservationLabel}.
            </p>

            <div className="btn-row spacer-top">
              <a
                href={paymentLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold"
                onClick={closeSuccessModal}
              >
                Continue to Payment
              </a>
              <button type="button" className="btn btn-outline" onClick={closeSuccessModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </form>
  );
}
