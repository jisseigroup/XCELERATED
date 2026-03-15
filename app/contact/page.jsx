'use client';

import PageHero from '../../components/PageHero';

export default function ContactPage() {
  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      formType: 'Contact Form',
      participantName: formData.get('fullName')?.toString().trim() || '',
      phone: formData.get('phone')?.toString().trim() || '',
      email: formData.get('email')?.toString().trim() || '',
      programInterest: formData.get('programInterest')?.toString().trim() || '',
      availability: formData.get('message')?.toString().trim() || '',
      acknowledgement: true,
    };

    if (!payload.participantName || !payload.phone || !payload.email || !payload.programInterest) {
      alert('Please complete the required fields before submitting.');
      return;
    }

    try {
      const response = await fetch('/api/send-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Something went wrong while submitting the form.');
      }

      alert('Your inquiry has been submitted successfully.');
      form.reset();
    } catch (error) {
      alert(error.message || 'Something went wrong. Please try again.');
    }
  }

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

            <form className="spacer-top" onSubmit={handleSubmit}>
              <div className="form-grid">
                <input className="input" name="fullName" placeholder="Full Name" required />
                <input className="input" name="email" type="email" placeholder="Email Address" required />
                <input className="input" name="phone" type="tel" placeholder="Phone Number" required />
                <select className="input" name="programInterest" defaultValue="" required>
                  <option value="" disabled>Select a program</option>
                  <option value="xspa">XSPA (Speed, Performance & Agility)</option>
                  <option value="xpt">XPT (Personal Training)</option>
                  <option value="xgx">XGX (Group Exercise)</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <textarea
                className="textarea spacer-top"
                name="message"
                placeholder="Tell us what you’re looking for, the athlete’s age group, goals, and preferred schedule."
              />

              <div className="btn-row spacer-top">
                <button className="btn btn-gold" type="submit">Submit</button>
              </div>
            </form>
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
              </li>
              <li><strong>Hours</strong><br />Mon–Fri 12am–9pm<br />Sat–Sun 8am–12pm</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
