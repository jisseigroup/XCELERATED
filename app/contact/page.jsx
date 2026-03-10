import PageHero from '../../components/PageHero';
import { site } from '../../components/siteData';

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
            <h3>Contact form layout</h3>
            <div className="form-grid spacer-top">
              <input className="input" placeholder="Full Name" />
              <input className="input" placeholder="Email Address" />
              <input className="input" placeholder="Phone Number" />
              <input className="input" placeholder="Program of Interest" />
            </div>
            <textarea className="textarea spacer-top" placeholder="Tell us about the athlete, goals, age group, or schedule needs" />
            <div className="btn-row spacer-top">
              <button className="btn btn-gold" type="button">Send Inquiry</button>
            </div>
          </div>
          <div className="copy-block reveal-up">
            <span className="eyebrow">General contact</span>
            <h3>Replace these contact details with final business information.</h3>
            <ul className="bullet-list compact spacer-top">
              <li><strong>Location</strong><br />{site.location}</li>
              <li><strong>Email</strong><br />{site.email}</li>
              <li><strong>Phone</strong><br />{site.phone}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
