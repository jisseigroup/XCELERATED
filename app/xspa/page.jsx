import PageHero from '../../components/PageHero';
import Link from 'next/link';
import { pillars } from '../../components/siteData';

export const metadata = { title: 'XSPA' };

const XSPA_RESERVE_LINK = '/xspa/reserve';

const goldOutlineBtn = {
  border: '1px solid var(--gold, #d4af37)',
  background: 'transparent',
};

const slateBand = {
  background:
    'linear-gradient(180deg, rgba(28,34,42,0.96) 0%, rgba(20,24,30,0.98) 100%)',
  borderTop: '1px solid rgba(255,255,255,0.06)',
  borderBottom: '1px solid rgba(255,255,255,0.06)',
};

const smokeCard = {
  background:
    'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)',
};

const smartGoals = [
  {
    letter: 'S',
    title: 'Specific',
    text: 'Clear, targeted objectives that athletes can understand and pursue with purpose.',
  },
  {
    letter: 'M',
    title: 'Measurable',
    text: 'Progress that can be tracked through movement quality, effort, performance, and consistency.',
  },
  {
    letter: 'A',
    title: 'Attainable',
    text: 'Standards and goals that stretch the athlete while remaining realistic for their level of development.',
  },
  {
    letter: 'R',
    title: 'Reasonable',
    text: 'Training expectations aligned with age, readiness, recovery, and long-term progress.',
  },
  {
    letter: 'T',
    title: 'Time Oriented',
    text: 'Goals connected to a defined training period, camp block, season, or development milestone.',
  },
];

const smartTraining = [
  {
    letter: 'S',
    title: 'Stability',
    text: 'Body control and balance through proper strength, coordination, and movement awareness.',
  },
  {
    letter: 'M',
    title: 'Mobility',
    text: 'Joint motion and flexibility that allow the body to move efficiently and safely.',
  },
  {
    letter: 'A',
    title: 'Agility',
    text: 'Speed, power, reaction, and direction change blended into sport-ready movement.',
  },
  {
    letter: 'R',
    title: 'Recovery',
    text: 'Rest, regeneration, and sustainable habits that help athletes adapt and stay healthy.',
  },
  {
    letter: 'T',
    title: 'Total Nutrition',
    text: 'Fuel, hydration, and daily food habits that support training, recovery, growth, and performance.',
  },
];

const ageGroups = [
  {
    title: 'Middle School Athletes',
    text: 'Develop a strong and stable base to improve mechanics, coordination, confidence, and overall athletic performance.',
    time: '60–90 minutes • Ages 11–14',
  },
  {
    title: 'High School Athletes',
    text: 'Unlock athletic potential with sharper movement, stronger discipline, and better preparation to stand out in competition.',
    time: '90 minutes • Ages 15–18',
  },
  {
    title: 'Collegiate Athletes',
    text: 'Maintain speed, strength, agility, and conditioning during breaks so performance standards stay high year-round.',
    time: '90 minutes • College athletes',
  },
];

export default function XspaPage() {
  return (
    <>
      <PageHero
        eyebrow="XSPA Camp"
        title="Speed, Performance & Agility built around strong, smart athlete development."
        text="XSPA blends physical training, mental development, movement quality, and structured coaching to help youth athletes build confidence, resilience, and long-term performance."
        videoSrc="/video/hero-3.mp4"
        poster="/images/hero-poster.svg"
      />

      <section className="section" style={{ paddingTop: '5.5rem' }}>
        <div className="container">
          <div className="form-card reveal-up" style={{ maxWidth: 980, margin: '0 auto' }}>
            <span className="eyebrow">Enroll</span>
            <h3>Reserve a camp spot</h3>
            <p className="price-note">
              Limited enrollment allows closer coaching, stronger attention to form, and a better learning environment for every athlete.
            </p>

            <div
              className="btn-row spacer-top"
              style={{ justifyContent: 'flex-start', flexWrap: 'wrap', gap: 12 }}
            >
              <Link href={XSPA_RESERVE_LINK} className="btn btn-gold">
                Reserve Spot
              </Link>

              <Link href="/register" className="btn" style={goldOutlineBtn}>
                Register Interest
              </Link>
            </div>

            <p className="price-note spacer-top" style={{ textAlign: 'left' }}>
              Full 6 week block, shorter camp options, and future seasonal scheduling can be confirmed after submission.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="copy-block reveal-up">
            <span className="eyebrow">Model</span>
            <h3>XSPA trains the body and mind together.</h3>
            <p>
              The XSPA athlete development model is built on a simple principle: 50% physical and
              50% mental. The goal is not only to improve performance, but to build athletes who
              are balanced, focused, resilient, and prepared for the real demands of sport.
            </p>

            <ul className="bullet-list compact spacer-top">
              <li>
                <strong>50% Physical</strong>
                <br />
                Speed, movement quality, agility, coordination, strength foundations, and efficient
                mechanics.
              </li>
              <li>
                <strong>50% Mental</strong>
                <br />
                Confidence, persistence, discipline, goal setting, focus, and athlete mindset.
              </li>
              <li>
                <strong>Elite Performance</strong>
                <br />
                A structured pathway where the body and mind develop together, not separately.
              </li>
            </ul>

            <p className="price-note spacer-top">
              Building <strong>STRONG SMART</strong> athletes means training beyond drills alone.
            </p>
          </div>

          <div className="copy-block reveal-up">
            <span className="eyebrow">Purpose</span>
            <h3>Accessible elite standards for athletes who need structure, support, and development.</h3>
            <p>
              XSPA is designed for athletes who are serious about growth and for families who want
              quality coaching without unnecessary barriers. The program focuses on long-term
              development, injury reduction, movement efficiency, and confidence building through a
              positive, disciplined culture.
            </p>

            <div className="note spacer-top">
              Kids play sports to have fun. XSPA keeps training challenging and educational while
              still creating an environment where athletes enjoy the work, build self-esteem, and
              improve with purpose.
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={slateBand}>
        <div className="container">
          <div className="section-header stacked-left">
            <div>
              <span className="eyebrow">SMART Framework</span>
              <h2>SMART Goals and the SMART Training System.</h2>
            </div>
            <p>
              XSPA uses SMART both as a goal-setting framework and as a coaching system for athlete
              development. This keeps progress intentional, measurable, and aligned with long-term
              performance.
            </p>
          </div>

          <div className="grid-2">
            <div className="copy-block reveal-up" style={smokeCard}>
              <span className="eyebrow">SMART Goals</span>
              <h3>How athletes define progress.</h3>

              <ul className="bullet-list compact spacer-top">
                {smartGoals.map((item) => (
                  <li key={item.letter + item.title}>
                    <strong>
                      {item.letter} — {item.title}
                    </strong>
                    <br />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="copy-block reveal-up" style={smokeCard}>
              <span className="eyebrow">SMART Training System</span>
              <h3>How coaches build strong, smart athletes.</h3>

              <ul className="bullet-list compact spacer-top">
                {smartTraining.map((item) => (
                  <li key={item.letter + item.title}>
                    <strong>
                      {item.letter} — {item.title}
                    </strong>
                    <br />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-glow-sides">
        <div className="container">
          <div className="section-header stacked-left">
            <div>
              <span className="eyebrow">Who It Serves</span>
              <h2>Designed around different stages of athlete development.</h2>
            </div>
            <p>
              XSPA is not one-size-fits-all. Coaching structure, volume, and expectations should
              match age, readiness, and the athlete’s current development stage.
            </p>
          </div>

          <div className="cards">
            {ageGroups.map((group) => (
              <article className="card reveal-up" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
                <div className="price-inline">{group.time}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="copy-block reveal-up">
            <span className="eyebrow">Movement + Safety</span>
            <h3>Train movement patterns, not just muscles.</h3>
            <p>
              For an athlete to compete at their best, the body must move efficiently in all planes of motion and respond to unpredictable forces with stable, controlled mechanics. That is why XSPA emphasizes proper movement patterns, landing mechanics, balance and coordination with Ankle, Achilles & ACL injury reduction principles.
            </p>

            <ul className="bullet-list compact spacer-top">
              <li>
                <strong>Flexibility</strong>
                <br />
                Calf, hamstring, quadriceps, low back, hip flexor, and figure-four mobility work.
              </li>
              <li>
                <strong>Strength</strong>
                <br />
                Lunges, squats, bridges, planks, and bodyweight mastery.
              </li>
              <li>
                <strong>Plyometrics + Balance</strong>
                <br />
                Single and double leg jumps, directional work, wobble control, and coordination.
              </li>
              <li>
                <strong>Running mechanics</strong>
                <br />
                Multiple directions, skipping, bounding, and change-of-direction foundations.
              </li>
            </ul>
          </div>

          <div className="copy-block reveal-up">
            <span className="eyebrow">Culture</span>
            <h3>Positive coaching, parent awareness, and athlete accountability.</h3>
            <p>
              XSPA is intentionally educational. The goal is to help athletes, parents, and coaches
              understand why training matters, how progress is built, and what habits support both
              sport and life. Success is not measured only by comparison to others, but by effort,
              improvement, discipline, and consistent habits.
            </p>

            <ul className="bullet-list compact spacer-top">
              <li>
                <strong>Developing mental skills</strong>
                <br />
                Focus, effort, persistence, and concentration are coached alongside physical work.
              </li>
              <li>
                <strong>Affirmations + confidence</strong>
                <br />
                Positive self-talk and confidence building are treated as performance tools.
              </li>
              <li>
                <strong>Visualization + manifestation</strong>
                <br />
                Athletes learn to connect mindset, preparation, and execution.
              </li>
            </ul>

            <div className="note spacer-top">
              When parents, teachers, and coaches work together, student athletes are far more
              likely to maximize both athletic and academic potential.
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={slateBand}>
        <div className="container grid-2">
          <div className="copy-block reveal-up" style={smokeCard}>
            <span className="eyebrow">Standards</span>
            <h3>The culture we coach by.</h3>
            <ul className="bullet-list compact">
              {pillars.map((pillar) => (
                <li key={pillar}>{pillar}</li>
              ))}
            </ul>
          </div>

          <div className="copy-block reveal-up" style={smokeCard}>
            <span className="eyebrow">Coach-led</span>
            <h3>Experience and credentials that support athlete development.</h3>
            <ul className="bullet-list compact">
              <li>State of California Credentialed Teacher</li>
              <li>Corrective Exercise Specialist (CES)</li>
              <li>Performance Enhancement Specialist (PES)</li>
              <li>NFHS Level 3 Coach</li>
              <li>Certified Interscholastic Coach</li>
            </ul>

            <p className="price-note spacer-top">
              XSPA combines educational leadership, performance knowledge, and practical coaching
              standards in one system.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="form-card reveal-up" style={{ maxWidth: 860, margin: '0 auto' }}>
            <span className="eyebrow">Next step</span>
            <h3>Ready to join XSPA?</h3>
            <p className="price-note">
              Reserve your spot now or submit interest and we’ll confirm scheduling, camp details,
              and next steps.
            </p>

            <div
              className="btn-row spacer-top"
              style={{ justifyContent: 'flex-start', flexWrap: 'wrap', gap: 12 }}
            >
              <Link href={XSPA_RESERVE_LINK} className="btn btn-gold">
                Reserve Spot
              </Link>

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
