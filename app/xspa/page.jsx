import PageHero from '../../components/PageHero';
import Link from 'next/link';
import { pillars } from '../../components/siteData';

export const metadata = { title: 'XSPA' };

// TODO: Replace with your live checkout link (opens in a new tab)
const XSPA_CHECKOUT_LINK =
  process.env.NEXT_PUBLIC_STRIPE_XSPA_PAYMENT_LINK ||
  'https://buy.stripe.com/REPLACE_WITH_XSPA_LINK';

const goldOutlineBtn = {
  border: '1px solid var(--gold, #d4af37)',
  background: 'transparent',
};

export default function XspaPage() {
  return (
    <>
      {/* SECTION 1 — HERO + PRIMARY CTA */}
      <PageHero
        eyebrow="XSPA Camp"
        title="Speed, Performance & Agility camps for youth athletes (11–17)."
        text="Elite standards without elite price barriers — built for families and underprivileged athletes who deserve high-quality coaching and a safe development path."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="form-card reveal-up" style={{ maxWidth: 980, margin: '0 auto' }}>
            <span className="eyebrow">Enroll</span>
            <h3>Reserve a camp spot</h3>
            <p className="price-note">
              Limited enrollment (up to 30 athletes per camp). Reserve your spot now, or submit interest and we’ll follow up with scheduling and next steps.
            </p>

            <div className="btn-row spacer-top" style={{ justifyContent: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
              <a
                href={XSPA_CHECKOUT_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold"
              >
                Reserve Spot
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
            <span className="eyebrow">Purpose</span>
            <h3>Accessible elite training — built for the whole athlete.</h3>
            <p>
              XCELERATED was founded to close the gap for families who cannot afford expensive camps.
              XSPA delivers structured Speed, Performance & Agility training in a positive environment,
              with strong emphasis on ACL injury reduction and long-term athlete health.
            </p>

            <ul className="bullet-list compact spacer-top">
              <li><strong>Speed + Agility</strong><br />Acceleration, deceleration, reaction, and change of direction.</li>
              <li><strong>Mechanics + Movement Quality</strong><br />Balance, coordination, landing mechanics, and clean technique.</li>
              <li><strong>Strength foundations</strong><br />Neuromuscular control and progressive load management.</li>
              <li><strong>Student before athlete</strong><br />Accountability, discipline, confidence, and healthy habits.</li>
            </ul>

            <p className="price-note spacer-top">
              Camp pricing targets: Half 1 Day $55 • Full 2 Day $100.
            </p>
          </div>

          <div className="copy-block reveal-up">
            <span className="eyebrow">Standards</span>
            <h3>The culture we coach by.</h3>
            <ul className="bullet-list compact">
              {pillars.map((pillar) => (
                <li key={pillar}>{pillar}</li>
              ))}
            </ul>

            <div className="note spacer-top">
              Coach credentials: California Credentialed Teacher • NASM PES • NASM CES • NFHS Level 2 Coach
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — FINAL CTA */}
      <section className="section">
        <div className="container">
          <div className="form-card reveal-up" style={{ maxWidth: 820, margin: '0 auto' }}>
            <span className="eyebrow">Next step</span>
            <h3>Ready to join XSPA?</h3>
            <p className="price-note">
              Reserve your spot now, or submit interest and we’ll confirm scheduling and next steps.
            </p>

            <div className="btn-row spacer-top" style={{ justifyContent: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
              <a
                href={XSPA_CHECKOUT_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold"
              >
                Reserve Spot
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