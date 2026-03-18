import PageHero from '../../components/PageHero';
import Link from 'next/link';

export const metadata = { title: 'XGX' };

// TODO: Replace with your live checkout link (opens in a new tab)
const XGX_CHECKOUT_LINK =
  process.env.NEXT_PUBLIC_STRIPE_XGX_PAYMENT_LINK ||
  'https://buy.stripe.com/REPLACE_WITH_XGX_LINK';

const goldOutlineBtn = {
  border: '1px solid var(--gold, #d4af37)',
  background: 'transparent',
};

export default function XgxPage() {
  return (
    <>
      {/* SECTION 1 — HERO + PRIMARY CTA */}
      <PageHero
        eyebrow="XGX"
        title="Coach-led group training built for consistency, energy, and accountability."
        text="Structured sessions that improve fitness, movement quality, and discipline — for athletes and general training, all ages."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="form-card reveal-up" style={{ maxWidth: 980, margin: '0 auto' }}>
            <span className="eyebrow">Join XGX</span>
            <h3>Reserve your spot</h3>
            <p className="price-note">
              Choose the fastest path to lock in your spot, or submit interest and we’ll follow up with scheduling and next steps.
            </p>

            <div className="btn-row spacer-top" style={{ justifyContent: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
              <a
                href={XGX_CHECKOUT_LINK}
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
      <section className="section" id="xgx-details">
        <div className="container section-header stacked-left">
          <div>
            <span className="eyebrow">Program</span>
            <h2>Group training done the right way — form first, then intensity.</h2>
          </div>
          <p>
            XGX is built for people who want structure without chaos. Sessions are coach-led, standards-based,
            and progression-focused — so you build fitness safely and consistently.
          </p>
        </div>

        <div className="container grid-3">
          <div className="card reveal-up">
            <h3>Movement quality</h3>
            <p>Clean mechanics, safe progressions, and coaching cues that keep training effective.</p>
          </div>
          <div className="card reveal-up">
            <h3>Strength + conditioning</h3>
            <p>Balanced sessions designed to build total fitness, athleticism, and long-term durability.</p>
          </div>
          <div className="card reveal-up">
            <h3>Accountability</h3>
            <p>Coach-led expectations that build discipline, consistency, and confidence over time.</p>
          </div>
        </div>

        <div className="container grid-2 spacer-top">
          <div className="copy-block reveal-up">
            <span className="eyebrow">Who it’s for</span>
            <h3>Athletes + general training (all ages)</h3>
            <ul className="bullet-list compact">
              <li><strong>Athletes</strong><br />Extra conditioning, discipline, and movement work outside sport practice.</li>
              <li><strong>Adults</strong><br />Structured training that builds fitness without guesswork.</li>
              <li><strong>Anyone starting out</strong><br />Coach-led progressions that prioritize safety and confidence.</li>
            </ul>
          </div>

          <div className="copy-block reveal-up">
            <span className="eyebrow">Coach</span>
            <h3>High-standard coaching you can trust</h3>
            <ul className="bullet-list compact">
              <li>State of California Credentialed Teacher</li>
              <li>NASM Performance Enhancement Specialist (PES)</li>
              <li>NASM Corrective Exercise Specialist (CES)</li>
              <li>NFHS Level 3 Coach</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3 — FINAL CTA */}
      <section className="section">
        <div className="container">
          <div className="form-card reveal-up" style={{ maxWidth: 820, margin: '0 auto' }}>
            <span className="eyebrow">Next step</span>
            <h3>Join XGX</h3>
            <p className="price-note">
              Reserve your spot now, or submit interest and we’ll confirm scheduling and next steps.
            </p>

            <div className="btn-row spacer-top" style={{ justifyContent: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
              <a
                href={XGX_CHECKOUT_LINK}
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