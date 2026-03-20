import Link from 'next/link';
import PageHero from '../../../components/PageHero';
import ProgramReservationForm from '../../../components/ProgramReservationForm';
import { programCheckoutConfig } from '../../../components/programCheckoutConfig';
import {
  reservationSignatureAcknowledgement,
  reservationWaiverSections,
} from '../../../components/reservationAgreement';

export const metadata = { title: 'XSPA Reservation' };

const XSPA_PAYMENT_LINK = programCheckoutConfig.XSPA.paymentLink;

const goldOutlineBtn = {
  border: '1px solid var(--gold, #d4af37)',
  background: 'transparent',
};

export default function XspaReservePage() {
  return (
    <>
      <PageHero
        eyebrow="XSPA Reservation"
        title="Complete the waiver before continuing to payment."
        text="Review how it works, read the participant agreement, submit the waiver, and then continue to the secure Stripe checkout in a new tab."
      />

      <section className="section section-glow-sides">
        <div className="container" style={{ display: 'grid', gap: '1.5rem' }}>
          <div
            className="copy-block reveal-up"
            style={{ maxWidth: 920, margin: '0 auto', width: '100%' }}
          >
            <span className="eyebrow">How it works</span>
            <h3>Reserve your XSPA spot in two steps.</h3>
            <ul className="bullet-list compact spacer-top">
              <li>Review the participant waiver and acknowledgement below.</li>
              <li>Submit the reservation form with the required contact and signature details.</li>
              <li>Use the Continue to Payment button after submission to open Stripe in a new tab.</li>
            </ul>

            <div className="note spacer-top">
              For participants under 18, a parent or legal guardian should complete and sign this
              form before continuing to payment.
            </div>
          </div>

          <div
            className="copy-block reveal-up"
            style={{ maxWidth: 1080, margin: '0 auto', width: '100%' }}
          >
            <span className="eyebrow">Agreement</span>
            <h3>
              Participant Assumption of Risk, Waiver, Release of Liability, Refund Policy and
              Indemnity Agreement
            </h3>

            <div className="waiver-section-copy spacer-top">
              {reservationWaiverSections.map((section) => (
                <div className="waiver-item" key={section.title}>
                  <h4>{section.title}</h4>
                  <p>{section.text}</p>
                </div>
              ))}
            </div>

            <div className="note spacer-top">{reservationSignatureAcknowledgement}</div>
          </div>

          <div
            className="form-card reveal-up"
            style={{ maxWidth: 1080, margin: '0 auto', width: '100%' }}
          >
            <span className="eyebrow">Submit waiver</span>
            <h3>XSPA reservation form</h3>
            <p className="price-note">
              Submit the waiver first. After that, a confirmation popup will guide you to payment.
            </p>

            <ProgramReservationForm
              formType="XSPA Reservation"
              programCode="XSPA"
              reservationLabel="XSPA reservation"
              paymentLink={XSPA_PAYMENT_LINK}
            />

            <div className="btn-row spacer-top">
              <Link href="/xspa" className="btn" style={goldOutlineBtn}>
                Back to XSPA
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
