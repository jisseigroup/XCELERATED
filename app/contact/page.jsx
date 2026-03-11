import PageHero from '../../components/PageHero';

export const metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start the conversation about training, camps, schedules, and next steps."
        text="Use this page for inquiries related to personal training, XSPA camp enrollment, group exercise, and future scheduling."
      />

      <section className="section">
        <div className="container grid-2">
          <div className="form-card reveal-up">
            <span className="eyebrow">Send a message</span>
            <h3>Send an inquiry</h3>
            <div className="form-grid spacer-top">
              <input className="input" placeholder="Full Name" />
              <input className="input" placeholder="Email Address" />
              <input className="input" placeholder="Phone Number" />
              <select className="input" defaultValue="">
                <option value="" disabled>Select a program</option>
                <option value="xspa">XSPA (Speed, Performance & Agility)</option>
                <option value="xpt">XPT (Personal Training)</option>
                <option value="xgx">XGX (Group Exercise)</option>
                <option value="other">Other</option>
              </select>
            </div>
            <textarea
              className="textarea spacer-top"
              placeholder="Tell us what you’re looking for, the athlete’s age group, goals, and preferred schedule."
            />
            <div className="btn-row spacer-top">
              <button className="btn btn-gold" type="button">Submit</button>
            </div>
          </div>
          <div className="copy-block reveal-up">
            <span className="eyebrow">General contact</span>
            <h3>Contact details</h3>
            <ul className="bullet-list compact spacer-top">
              <li><strong>Location</strong><br />Bay Area, California</li>
              <li><strong>Email</strong><br /><a href="mailto:info@xcelerated.org">info@xcelerated.org</a></li>
              <li>
                <strong>Phone</strong>
                <br />
                <a href="tel:+15103864816">510-386-4816</a>
                <span> or </span>
                <a href="tel:+15106898817">510-689-8817</a>
              </li>
              <li><strong>Hours</strong><br />Mon–Fri 12–9pm<br />Sat–Sun 8am–12pm</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
