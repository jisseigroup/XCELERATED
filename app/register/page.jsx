'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageHero from '../../components/PageHero';

const goldOutlineBtn = {
  border: '1px solid var(--gold, #d4af37)',
  background: 'transparent',
};

const interestAreas = [
  {
    code: 'XPT',
    title: 'XCELERATED Personal Training',
    text:
      'Best for people who want to ask questions, share goals, or reach out before completing the XPT reservation and payment flow.',
  },
  {
    code: 'XSPA',
    title: 'Speed Performance & Agility',
    text:
      'Best for families who want more information, future scheduling details, or a conversation before completing the XSPA reservation and payment flow.',
  },
  {
    code: 'XGX',
    title: 'Group Exercise',
    text:
      'Use this page for XGX custom scheduling, group interest, and general follow-up on format, availability, and next steps.',
  },
];

const interestSteps = [
  'Choose the program you are interested in',
  'Share athlete or participant details',
  'Provide parent or guardian details if the participant is a minor',
  'Add your preferred schedule, availability, goals, or questions',
  'Submit your interest so follow-up, scheduling, and the right next steps can be shared',
];

const interestNotes = [
  'This page is for interest, custom scheduling, and questions.',
  'XGX and other custom program requests should start here.',
  'If you are ready to enroll in XSPA or XPT, use their reservation pages first.',
  'This form does not replace the waiver and payment steps required for XSPA or XPT enrollment.',
];

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      formType: 'Register Interest',
      participantName: formData.get('participantName')?.toString().trim() || '',
      participantAge: formData.get('participantAge')?.toString().trim() || '',
      parentGuardian: formData.get('parentGuardian')?.toString().trim() || '',
      phone: formData.get('phone')?.toString().trim() || '',
      email: formData.get('email')?.toString().trim() || '',
      programInterest: formData.get('programInterest')?.toString().trim() || '',
      availability: formData.get('availability')?.toString().trim() || '',
      acknowledgement: formData.get('acknowledgement') === 'on',
    };

    if (
      !payload.participantName ||
      !payload.phone ||
      !payload.email ||
      !payload.programInterest ||
      !payload.acknowledgement
    ) {
      alert('Please complete the required fields and confirm the acknowledgement before submitting.');
      return;
    }

    try {
      setIsSubmitting(true);

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

      alert('Your interest has been submitted successfully.');
      form.reset();
    } catch (error) {
      alert(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Register Interest"
        title="Submit interest, ask questions, or request custom scheduling."
        text="This page is best for XGX, custom program requests, and anyone who wants guidance before moving into the XSPA or XPT reservation flow."
      />

      <section className="section">
        <div className="container">
          <div className="section-header stacked-left">
            <div>
              <span className="eyebrow">Programs</span>
              <h2>Choose the path that best fits what you need right now.</h2>
            </div>
            <p>
              Use this page for XGX, custom scheduling, and general program questions. If you are
              already ready to enroll in XSPA or XPT, use the reservation pages below instead.
            </p>
          </div>

          <div className="cards">
            {interestAreas.map((item) => (
              <article className="card" key={item.code + item.title}>
                <span className="program-code">{item.code}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="form-card reveal-up spacer-top" style={{ maxWidth: 980, margin: '1.5rem auto 0' }}>
            <span className="eyebrow">Ready To Reserve?</span>
            <h3>XSPA and XPT now have direct reservation flows.</h3>
            <p className="price-note">
              If you are ready to move forward, use the program reservation pages to complete the
              waiver and continue to payment. You can also use the payment page if you just need
              the secure checkout links.
            </p>

            <div className="btn-row spacer-top">
              <Link href="/xspa/reserve" className="btn btn-gold">
                XSPA Reserve
              </Link>
              <Link href="/xpt/reserve" className="btn" style={goldOutlineBtn}>
                XPT Reserve
              </Link>
              <Link href="/payment" className="btn" style={goldOutlineBtn}>
                Open Payments
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-glow-sides">
        <div className="container grid-2">
          <div className="copy-block">
            <span className="eyebrow">What to know</span>
            <h3>What to submit and what happens next.</h3>
            <ul className="bullet-list compact">
              {interestSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="price-note spacer-top">
              This page is the starting point for XGX and custom scheduling. For XSPA and XPT,
              waiver and payment are handled through the program reservation pages.
            </p>

            <ul className="bullet-list compact spacer-top">
              {interestNotes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="form-card">
            <span className="eyebrow">Submit interest</span>
            <h3>Interest form</h3>
            <p className="price-note">
              Share your details below and we will follow up with the right next steps for your
              program interest, questions, or scheduling request.
            </p>

            <form className="spacer-top" onSubmit={handleSubmit}>
              <div className="form-grid">
                <input className="input" type="text" name="participantName" placeholder="Participant name" required />
                <input className="input" type="number" name="participantAge" placeholder="Participant age" />
                <input className="input" type="text" name="parentGuardian" placeholder="Parent / Guardian name (if minor)" />
                <input className="input" type="tel" name="phone" placeholder="Phone number" required />
                <input className="input" type="email" name="email" placeholder="Email address" required />

                <select className="input" name="programInterest" defaultValue="" required>
                  <option value="" disabled>Select a program</option>
                  <option value="xspa">XSPA (Speed, Performance & Agility)</option>
                  <option value="xpt">XPT (Personal Training)</option>
                  <option value="xgx">XGX (Group Exercise)</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="spacer-top">
                <textarea
                  className="textarea"
                  name="availability"
                  placeholder="Preferred schedule, availability, goals, or anything helpful for follow-up"
                />
              </div>

              <label className="checkbox spacer-top">
                <input type="checkbox" name="acknowledgement" required />
                <span>
                  I understand this form is for interest, questions, and scheduling follow-up. If I
                  am ready to enroll in XSPA or XPT, waiver and payment will be completed through
                  the program reservation flow.
                </span>
              </label>

              <div className="btn-row spacer-top">
                <button type="submit" className="btn btn-gold btn-loading" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="btn-spinner" aria-hidden="true" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Interest'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
