import PageHero from '../../components/PageHero';

export const metadata = { title: 'Register' };

export default function RegisterPage() {
  return (
    <>
      <PageHero
        eyebrow="Register"
        title="Enrollment structure designed for training, camps, and future online intake."
        text="This page is prepared as a frontend registration and information hub for program selection, waiver acceptance, permission to treat, proof of medical insurance, and future payment integration."
      />

      <section className="section">
        <div className="container grid-2">
          <div className="form-card reveal-up">
            <span className="eyebrow">Program selection</span>
            <h3>Registration details</h3>
            <div className="form-grid spacer-top">
              <input className="input" placeholder="Athlete / Participant Full Name" />
              <input className="input" placeholder="Parent / Guardian Name" />
              <input className="input" placeholder="Email Address" />
              <input className="input" placeholder="Phone Number" />
              <select className="select">
                <option>Choose Program</option>
                <option>XPT — Personal Training</option>
                <option>XSPA — Full 6 Weeks</option>
                <option>XSPA — Half 3 Weeks</option>
                <option>XSPA — Holiday Weekend</option>
                <option>XGX — Group Exercise</option>
              </select>
              <input className="input" placeholder="Proof of Medical Insurance" />
            </div>
            <textarea className="textarea spacer-top" placeholder="Medical notes, goals, or relevant training information" />
          </div>

          <div className="form-card reveal-up">
            <span className="eyebrow">Pricing</span>
            <h3>Current program costs</h3>
            <ul className="bullet-list compact spacer-top">
              <li><strong>XPT — XCELERATED Personal Training</strong><br />$150 per session</li>
              <li><strong>Full 6 Week XSPA</strong><br />$800 · 12 sessions · approximately $66 per session</li>
              <li><strong>Half 3 Week XSPA</strong><br />$400</li>
              <li><strong>Holiday SPA 1 Weekend</strong><br />$100</li>
              <li><strong>XGX — Group Exercise</strong><br />Pricing to be finalized</li>
            </ul>
            <div className="note spacer-top">
              Payment integration can later be connected for credit card, Zelle, and Apple Pay. This starter keeps the frontend structure ready for that next phase.
            </div>
          </div>
        </div>
      </section>

      <section className="gold-band">
        <div className="container">
          <h3>Waiver forms, permission to treat forms, and proof of insurance should be completed before final enrollment.</h3>
          <p>
            The page is structured so your future live workflow can guide families from form submission to agreement review and payment in one clean path.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container form-card reveal-up">
          <span className="eyebrow">Consent</span>
          <h3>Frontend waiver acknowledgment area</h3>
          <p>
            By submitting electronically, the participant and parent or guardian acknowledge program expectations, consent requirements, and future waiver terms including medical authorization, proof of insurance, and program policies.
          </p>
          <label className="checkbox spacer-top">
            <input type="checkbox" />
            <span>I understand that this starter page is ready for final waiver language and live checkout integration.</span>
          </label>
          <div className="btn-row spacer-top">
            <button className="btn btn-gold" type="button">Submit Interest</button>
          </div>
        </div>
      </section>
    </>
  );
}
