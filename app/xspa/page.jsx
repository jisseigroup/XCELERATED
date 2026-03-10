import PageHero from '../../components/PageHero';
import Link from 'next/link';
import { pillars } from '../../components/siteData';

export const metadata = { title: 'XSPA' };

const smart = [
  'Stability — total body control through strength, motor coordination, and balance.',
  'Mobility — freedom and ease of movement through efficient range of motion.',
  'Agility — integration of speed, power, strength, balance, coordination, and reaction time.',
  'Recovery — adequate sleep and proven methods that repair physical and psychological stress.',
  'Total Nutrition — hydration and consistent, high-quality food choices that support individual needs.',
];

export default function XspaPage() {
  return (
    <>
      <PageHero
        eyebrow="XSPA"
        title="The core of XCELERATED: Speed, Performance & Agility for serious student athletes."
        text="XSPA is built to be student-athlete driven, parent aware, coach informed, educational, and progression-focused from start to finish."
      />

      <section className="section">
        <div className="container section-header stacked-left">
          <div>
            <span className="eyebrow">Mission</span>
            <h2>Create a safe, positive, student-athlete centered environment where development can thrive.</h2>
          </div>
          <p>
            XCELERATED is committed to making elite training accessible and affordable for athletes of all levels. Through positive coaching, developmentally appropriate instruction, and strong collaboration between coaches, parents, and athletes, the program promotes learning, sportsmanship, healthy lifestyles, citizenship, and life skills.
          </p>
        </div>
        <div className="container grid-2">
          <div className="copy-block reveal-up">
            <span className="eyebrow">Why athletes come</span>
            <h3>For serious middle school, high school, and collegiate athletes who want to reach the next level.</h3>
            <p>
              If you are serious about developing to the next level, XSPA combines superior coaching, progressive structure, and purposeful training to produce long-term results. Winning is the by-product of staying disciplined, giving full effort, and remaining persistent.
            </p>
            <ul className="bullet-list compact">
              <li><strong>Middle School Athletes · 60–90 min · 12–14 yrs</strong><br />Develop a strong stable base to maximize training and improve athletic performance.</li>
              <li><strong>High School Athletes · 90 min · 15–18 yrs</strong><br />Unlock full athletic potential and stand out against competition.</li>
              <li><strong>Collegiate Athletes · 90 min</strong><br />Maximize strength, power, agility, and conditioning while home on breaks.</li>
            </ul>
          </div>
          <div className="copy-block reveal-up">
            <span className="eyebrow">Values & culture</span>
            <h3>The standards that shape the way the program is taught.</h3>
            <ul className="bullet-list compact">
              {pillars.map((pillar) => <li key={pillar}>{pillar}</li>)}
            </ul>
            <div className="note spacer-top">
              We maintain limited space in XSPA Camps to allow coaches and athletes the time and attention needed to monitor form, technique, safety, and training quality.
            </div>
          </div>
        </div>
      </section>

      <section className="gold-band">
        <div className="container">
          <h3>Kids play sports to have fun. XSPA is designed to be fun, challenging, and educational at the same time.</h3>
          <p>
            Student athletes build confidence and self-esteem through improvement of the ABCs: agility, balance, coordination, and speed, along with foundational movement skills like running, jumping, skipping, crawling, squatting, throwing, catching, and striking.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="copy-block reveal-up">
            <span className="eyebrow">Training philosophy</span>
            <h3>Proper movement patterns, not just muscles.</h3>
            <p>
              For athletes to compete at their best, the body must move efficiently in all planes of motion and react to unpredictable forces in a predictable way. XSPA focuses on real-world performance by improving movement quality, bodyweight mastery, leadership habits, and off-season discipline around fitness, health, hygiene, sleep, and nutrition.
            </p>
            <p>
              At XSPA, 50% of training is physical and 50% is mental. The goal is to build strong, smart athletes.
            </p>
          </div>
          <div className="copy-block reveal-up">
            <span className="eyebrow">SMART system</span>
            <h3>SMART Goals and the SMART Training System.</h3>
            <p>
              By using SMART goals — specific, measurable, attainable, reasonable, and time oriented — and training through the SMART framework, athletes can perform at their best while minimizing the risk of injury.
            </p>
            <ul className="bullet-list compact">
              {smart.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Student-athlete mindset</span>
              <h2>Healthy habits, stronger mindset, better results.</h2>
            </div>
            <p>
              Being a student-athlete is more than playing sports. It is the daily choice to take on greater responsibility, build discipline, and practice habits that support school, life, and competition.
            </p>
          </div>
          <div className="grid-3">
            <div className="card reveal-up"><h3>Mental skills</h3><p>Focus, effort, persistence, confidence, concentration, visualization, and positive self-talk are trained as part of the athlete experience.</p></div>
            <div className="card reveal-up"><h3>Parent partnership</h3><p>When parents, teachers, and coaches work together, students are more likely to maximize their academic and athletic potential.</p></div>
            <div className="card reveal-up"><h3>Safe progression</h3><p>Program design incorporates ACL injury reduction principles and sport safety practices that support long-term health and performance.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Why XSPA</span>
              <h2>Structured development for multiple sports and real athletic demands.</h2>
            </div>
            <p>
              XSPA supports athletes across basketball, football, track, swimming, cricket, tennis, volleyball, and other sports through balanced development in flexibility, strength, plyometrics, balance, and running patterns.
            </p>
          </div>
          <div className="grid-2">
            <div className="copy-block reveal-up">
              <h3>XSPA Program Components</h3>
              <ul className="bullet-list compact">
                <li><strong>Flexibility</strong><br />Calf, hamstring, quadriceps, low back, hip flexor, and figure-4 work.</li>
                <li><strong>Strength</strong><br />Lunges, squats, bridges, and planks.</li>
                <li><strong>Plyometrics</strong><br />Single and double leg jumping patterns forward, backward, and sideways.</li>
                <li><strong>Balance</strong><br />Single leg stance, controlled catches, light perturbation, and proprioception work.</li>
                <li><strong>Running</strong><br />Multiple directions, diagonals, skipping, bounding, and karaoke patterns.</li>
              </ul>
            </div>
            <div className="copy-block reveal-up">
              <h3>Examples of sport-specific needs</h3>
              <ul className="bullet-list compact">
                <li><strong>Throwing sports</strong><br />Conditioning, core and leg work, flexibility, balance, and stability are essential for efficient force transfer.</li>
                <li><strong>Serving sports</strong><br />Thoracic rotation, rotator cuff strength, core support, and proper lower-body mechanics help reduce shoulder stress.</li>
                <li><strong>Endurance sports</strong><br />Aerobic base, interval development, rest, and recovery must be woven together in a periodized way.</li>
              </ul>
            </div>
          </div>
          <div className="copy-block reveal-up spacer-top">
            <span className="eyebrow">6-week structure</span>
            <h3>XSPA camps progress from fundamentals to more advanced capability.</h3>
            <p>
              The 6-week XSPA model is a progression of cardiovascular and musculoskeletal conditioning that prepares student athletes sequentially for more challenging practices and competitive demands in season.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="copy-block reveal-up">
            <span className="eyebrow">Coach and program culture</span>
            <h3>Task involvement over comparison.</h3>
            <p>
              Coaching cues, expectations, and reinforcement shape how students experience sport. XSPA is designed to promote task involvement, ethical coaching, and developmentally appropriate evaluation built around skill development and effort rather than comparison alone.
            </p>
          </div>
          <div className="copy-block reveal-up">
            <span className="eyebrow">Performance support</span>
            <h3>Recovery and sleep matter.</h3>
            <ul className="bullet-list compact">
              <li>Enhanced growth and recovery after training and competition</li>
              <li>Reduced fatigue</li>
              <li>Improved cognitive performance and mood</li>
              <li>Reduced risk of injury</li>
              <li>Enhanced power performance</li>
            </ul>
            <p className="spacer-top">
              Parent and athlete education on ACL injury prevention: <a href="https://mydoctor.kaiserpermanente.org/ncal/health-guide/acl-injury-prevention" target="_blank" rel="noreferrer" className="text-link">Kaiser Permanente resource</a>
            </p>
          </div>
        </div>
        <div className="container cta-row">
          <Link href="/register" className="btn btn-gold">Start Registration</Link>
        </div>
      </section>
    </>
  );
}
