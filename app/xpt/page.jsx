import PageHero from '../../components/PageHero';
import Link from 'next/link';

export const metadata = { title: 'XPT' };

// TODO: Replace with your live checkout link (opens in a new tab)
const XPT_CHECKOUT_LINK =
  process.env.NEXT_PUBLIC_STRIPE_XPT_PAYMENT_LINK ||
  'https://buy.stripe.com/REPLACE_WITH_XPT_LINK';

const goldOutlineBtn = {
  border: '1px solid var(--gold, #d4af37)',
  background: 'transparent',
};

export default function XptPage() {
  return (
    <>
      {/* SECTION 1 — HERO + PRIMARY CTA */}
      <PageHero
        eyebrow="XPT"
        title="Personal training built around the individual, not a generic template."
        text="Focused coaching for athletes and active clients who want smart progression, stronger movement, and results that match their goals."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="form-card reveal-up" style={{ maxWidth: 980, margin: '0 auto' }}>
            <span className="eyebrow">Book</span>
            <h3>Reserve a session</h3>
            <p className="price-note">
              Choose the fastest path to lock in your session, or submit interest and we’ll follow up with scheduling.
            </p>

            <div className="price">$140 <span className="price-note">per session</span></div>

            <div className="btn-row spacer-top" style={{ justifyContent: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
              <a
                href={XPT_CHECKOUT_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold"
              >
                Reserve Session
              </a>

              <Link href="/register" className="btn" style={goldOutlineBtn}>
                Register Interest
              </Link>
            </div>

            <p className="price-note spacer-top" style={{ textAlign: 'left' }}>
              We’ll confirm scheduling and next steps after you submit.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PROGRAM OVERVIEW */}
      <section className="section">
        <div className="container grid-2">
          <div className="copy-block reveal-up">
            <span className="eyebrow">What it is</span>
            <h3>Individualized coaching with clear structure and accountability.</h3>
            <p>
              XPT provides one-to-one training for clients who benefit from personalized assessment, progressive programming,
              movement correction, and targeted development. Each session is built around the individual’s current level,
              goals, and training history.
            </p>
            <ul className="bullet-list compact spacer-top">
              <li><strong>Performance goals</strong><br />Speed, strength, agility, conditioning, or sport preparation.</li>
              <li><strong>Movement quality</strong><br />Technique, efficiency, mobility, stability, and safe mechanics.</li>
              <li><strong>Smart progression</strong><br />Measured progression that supports long-term results.</li>
            </ul>
          </div>

          <div className="copy-block reveal-up">
            <span className="eyebrow">Coach</span>
            <h3>High-standard coaching you can trust.</h3>
            <ul className="bullet-list compact">
              <li>State of California Credentialed Teacher</li>
              <li>NASM Performance Enhancement Specialist (PES)</li>
              <li>NASM Corrective Exercise Specialist (CES)</li>
              <li>NFHS Level 3 Coach</li>
            </ul>
            <div className="note spacer-top">
              XPT is designed to meet you where you are — then accelerate safely, step by step.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — FINAL CTA */}
      <section className="section">
        <div className="container">
          <div className="form-card reveal-up" style={{ maxWidth: 820, margin: '0 auto' }}>
            <span className="eyebrow">Next step</span>
            <h3>Ready to start?</h3>
            <p className="price-note">
              Reserve your session now, or submit interest and we’ll follow up with scheduling and next steps.
            </p>

            <div className="btn-row spacer-top" style={{ justifyContent: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
              <a
                href={XPT_CHECKOUT_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold"
              >
                Reserve Session
              </a>

              <Link href="/register" className="btn" style={goldOutlineBtn}>
                Register Interest
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
