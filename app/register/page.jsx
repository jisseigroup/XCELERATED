'use client';

import { useState } from 'react';
import PageHero from '../../components/PageHero';


const interestAreas = [
  {
    code: 'XPT',
    title: 'XCELERATED Personal Training',
    text:
      'Submit your interest for individualized training built around your goals, schedule, and level of development.',
  },
  {
    code: 'XSPA',
    title: 'Speed Performance & Agility',
    text:
      'Submit your interest for XSPA camps and athlete development programming focused on speed, movement quality, confidence, and long-term growth.',
  },
  {
    code: 'XGX',
    title: 'Group Exercise',
    text:
      'Submit your interest for coach-led group training sessions designed to build fitness, accountability, and consistency.',
  },
];

const interestSteps = [
  'Choose the program you are interested in',
  'Share athlete or participant details',
  'Provide parent or guardian details if the participant is a minor',
  'Add your preferred schedule or availability',
  'Submit your interest so follow-up and next steps can be shared',
];

const interestNotes = [
  'Submitting this form is an expression of interest only.',
  'Program placement, scheduling, and next steps will be shared after review.',
  'Waiver forms, permission to treat forms, and proof of insurance should be completed before final enrollment.',
  'Final enrollment requirements and instructions will be shared after your interest is reviewed.',
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
        title="Submit your interest and we will guide you to the right next step."
        text="This page is for athletes, parents, and participants who want to express interest in XCELERATED programs before full registration or payment."
      />

      <section className="section">
        <div className="container">
          <div className="section-header stacked-left">
            <div>
              <span className="eyebrow">Programs</span>
              <h2>Select the training path you are interested in.</h2>
            </div>
            <p>
              Choose the area that best matches your goals so the right follow-up, program details,
              and registration guidance can be shared with you.
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
              This page is for program interest only. Waiver forms, permission to treat forms, and
              proof of insurance should be completed before final enrollment.
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
              Share your details below and we will follow up with the right next steps for the program you are interested in.
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
                  I understand this form is for program interest only. Final registration requirements, waiver forms,
                  permission to treat forms, and proof of insurance may be required before enrollment.
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