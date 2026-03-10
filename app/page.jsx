import Link from 'next/link';
import { credentials, pillars, programs } from '../components/siteData';

export default function HomePage() {
  return (
    <>
      <section className="hero hero-clean">
        <div className="hero-overlay" />
        <div className="container hero-grid clean-hero-grid">
          <div className="hero-copy reveal-up">
            <span className="eyebrow">Affordable elite training for athletes who want more</span>
            <h1>
              Train smarter.
              <span className="hero-highlight block-line">Perform stronger.</span>
            </h1>
            <p>
              Speed, movement quality, discipline, and long-term athlete development in one focused training environment.
            </p>
            <div className="btn-row spacer-top">
              <Link href="/register" className="btn btn-gold">Register Now</Link>
              <Link href="/programs" className="btn btn-outline">Explore Programs</Link>
            </div>
          </div>

          <div className="hero-visual reveal-up">
            <div className="hero-video-frame reveal-float">
              <video className="hero-video clean-video" autoPlay muted loop playsInline poster="/images/hero-poster.svg">
                <source src="/video/hero.mp4" type="video/mp4" />
              </video>
              <div className="video-shade" />
              <div className="video-chip">XCELERATED</div>
              <div className="video-note">
                <span className="eyebrow">Student-athlete centered</span>
                <h3>Speed. Discipline. Development.</h3>
                <p>Structured coaching for athletes who want better movement, stronger habits, and measurable progress.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section stat-strip-wrap">
        <div className="container">
          <div className="stat-strip reveal-up">
            <div className="stat"><span className="stat-number">3</span><span className="stat-label">Core divisions</span></div>
            <div className="stat"><span className="stat-number">12</span><span className="stat-label">Sessions in full XSPA</span></div>
            <div className="stat"><span className="stat-number">6</span><span className="stat-label">Week camp option</span></div>
            <div className="stat"><span className="stat-number">50/50</span><span className="stat-label">Physical and mental development</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Programs</span>
              <h2>Three divisions. One disciplined training standard.</h2>
            </div>
            <p>
              XCELERATED brings together personal training, group exercise, and Speed Performance &amp; Agility camps in one athlete-centered environment built around discipline, education, confidence, and long-term development.
            </p>
          </div>
          <div className="cards">
            {programs.map((program) => (
              <article className={`card reveal-up ${program.code === 'XSPA' ? 'card-featured' : ''}`} key={program.code}>
                <span className="program-code">{program.code}</span>
                <h3>{program.title}</h3>
                <p>{program.summary}</p>
                <div className="price-inline">{program.price}</div>
                <Link href={program.href} className="btn btn-outline spacer-top">Learn More</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gold-band statement-band">
        <div className="container statement-shell">
          <div>
            <span className="eyebrow eyebrow-dark">XCELERATED standard</span>
            <h3>Winning is the by-product of discipline, effort, persistence, and smart preparation.</h3>
          </div>
          <p>
            At XSPA, athletes are prepared for the adversity of sport through progressive systems, better movement, safer mechanics, and habits that carry into life, school, and competition.
          </p>
        </div>
      </section>

      <section className="section feature-section">
        <div className="container feature-grid">
          <div className="feature-copy reveal-up">
            <span className="eyebrow">Featured focus</span>
            <h2>XSPA is the core of the brand.</h2>
            <p>
              Built for student athletes and supported by parent and coach alignment, XSPA combines movement quality, confidence, recovery, education, and progressive training systems to drive long-term results.
            </p>
            <div className="feature-points">
              <div className="feature-point">
                <h3>Student athlete driven</h3>
                <p>Programs are designed to improve how athletes move, think, prepare, and respond under pressure.</p>
              </div>
              <div className="feature-point">
                <h3>Educational and protective</h3>
                <p>ACL injury reduction, bodyweight strength mastery, recovery, and training purpose are built into the system.</p>
              </div>
              <div className="feature-point">
                <h3>Parent and coach aware</h3>
                <p>Families and coaches understand why each training phase matters and how growth is developed over time.</p>
              </div>
            </div>
            <Link href="/xspa" className="btn btn-gold spacer-top">Explore XSPA</Link>
          </div>

          <div className="feature-panel reveal-up">
            <div className="glass-card tall-card">
              <span className="eyebrow">Inside XSPA</span>
              <ul className="feature-list">
                <li><strong>Movement quality first</strong><br /><span>Train proper patterns, not just muscles, so performance holds up in real sport demands.</span></li>
                <li><strong>SMART athlete development</strong><br /><span>Stability, Mobility, Agility, Recovery, and Total Nutrition are used to guide training decisions.</span></li>
                <li><strong>Physical and mental growth</strong><br /><span>Confidence, effort, persistence, affirmations, goal setting, and concentration are treated as part of athlete development.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section split-band">
        <div className="container media-grid">
          <div className="image-frame reveal-up">
            <img src="/images/athlete-focus.svg" alt="Athlete development at XCELERATED" />
          </div>
          <div className="split">
            <div className="copy-block reveal-up">
              <span className="eyebrow">Values</span>
              <h3>Built on the standards that shape athletes and people.</h3>
              <ul className="bullet-list">
                {pillars.map((pillar) => <li key={pillar}>{pillar}</li>)}
              </ul>
            </div>
            <div className="copy-block reveal-up">
              <span className="eyebrow">Credentials</span>
              <h3>Education, experience, and athlete development expertise.</h3>
              <ul className="bullet-list">
                {credentials.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Why XCELERATED</span>
              <h2>Student athlete driven. Parent aware. Coach aligned.</h2>
            </div>
            <p>
              The training pathway is intentionally educational and information-driven so athletes, families, and coaches understand the purpose behind each phase of progress.
            </p>
          </div>
          <div className="grid-3">
            <div className="card reveal-up"><h3>Educational</h3><p>Training systems are explained clearly so athletes and families understand how progress is built and why each element matters.</p></div>
            <div className="card reveal-up"><h3>Progressive</h3><p>Programs move from fundamentals to advanced demands without skipping movement quality, mindset, or recovery.</p></div>
            <div className="card reveal-up"><h3>Protective</h3><p>ACL injury reduction, better mechanics, and long-term athlete health are treated as part of performance, not separate from it.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
