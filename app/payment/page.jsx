import Link from 'next/link';
import PageHero from '../../components/PageHero';
import { programs } from '../../components/siteData';
import { programCheckoutConfig } from '../../components/programCheckoutConfig';

export const metadata = { title: 'Payments' };

const paymentProgramCodes = ['XSPA', 'XPT'];

const paymentPrograms = programs
  .filter((program) => paymentProgramCodes.includes(program.code))
  .map((program) => ({
    ...program,
    ...programCheckoutConfig[program.code],
  }));

export default function PaymentPage() {
  return (
    <>
      <PageHero
        eyebrow="Payments"
        title="A clean payment hub for XSPA and XPT."
        text="Share this page with families and clients when you want a professional place to send payments instead of raw checkout URLs."
      />

      <section className="section section-glow-sides">
        <div className="container">
          <div className="section-header stacked-left">
            <div>
              <span className="eyebrow">Payment Options</span>
              <h2>Choose the program and continue to secure Stripe checkout.</h2>
            </div>
            <p>
              Each payment option below links directly to Stripe. If the participant has not
              completed the waiver yet, use the reserve page first before making payment.
            </p>
          </div>

          <div className="grid-2">
            {paymentPrograms.map((program) => (
              <article
                className={`card reveal-up${program.code === 'XSPA' ? ' card-featured' : ''}`}
                key={program.code}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <span className="program-code">{program.code}</span>
                <h3>{program.title}</h3>
                <p>{program.summary}</p>
                <div className="price">{program.price}</div>

                <div className="note spacer-top">
                  Secure checkout powered by Stripe. If this is a first-time participant or the
                  waiver has not been completed yet, use the reserve page first.
                </div>

                <div className="btn-row spacer-top" style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                  <a
                    href={program.paymentLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-gold"
                  >
                    {program.paymentButtonLabel}
                  </a>

                  <Link href={program.reserveHref} className="btn btn-outline">
                    Complete Waiver First
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
