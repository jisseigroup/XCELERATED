import PageHero from '../../components/PageHero';

export const metadata = { title: 'XPT' };

export default function XptPage() {
  return (
    <>
      <PageHero
        eyebrow="XPT"
        title="Personal training built around the individual, not a generic template."
        text="XCELERATED Personal Training is designed for athletes and active clients who want focused attention, smart progression, and coaching that matches their goals."
      />

      <section className="section">
        <div className="container grid-2">
          <div className="copy-block reveal-up">
            <span className="eyebrow">What it is</span>
            <h3>Individualized coaching with clear structure and accountability.</h3>
            <p>
              XPT provides one-to-one training for clients who benefit from personalized assessment, progressive programming, movement correction, and targeted development. Each session is built around the individual’s current level, goals, and training history.
            </p>
            <p>
              Whether the focus is speed, strength, movement quality, athletic performance, general conditioning, or confidence in training, the program is centered on what the individual actually needs in order to improve.
            </p>
          </div>
          <div className="copy-block reveal-up">
            <span className="eyebrow">Why it works</span>
            <h3>Focused coaching makes training more precise and more effective.</h3>
            <p>
              Personal training allows for closer attention to exercise form, movement efficiency, pacing, recovery, and progression. It also creates a more direct line of communication between coach and client, making each session intentional, measurable, and adaptable.
            </p>
            <div className="price">$150 <span className="price-note">per session</span></div>
          </div>
        </div>
      </section>

      <section className="gold-band">
        <div className="container">
          <h3>Individualized attention leads to better technique, better consistency, and better outcomes.</h3>
          <p>
            XPT is ideal for those who want coaching that responds to their needs instead of forcing them into a standard group pace.
          </p>
        </div>
      </section>
    </>
  );
}
