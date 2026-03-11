import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <section className="hero hero-clean">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.svg"
        >
          <source src="/video/hero-2.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay" />

        <div className="container clean-hero-grid">
          <div className="hero-copy reveal-up">
            <span className="eyebrow hero-eyebrow">
              Affordable elite training for athletes who want more
            </span>

            <h1>
              Train smarter.
              <span className="block-line hero-highlight">Perform stronger.</span>
            </h1>

            <p>
              Student-athlete training built around speed, movement quality, discipline,
              and long-term athletic development.
            </p>

            <div className="btn-row">
              <Link href="/register" className="btn btn-gold">
                Register Now
              </Link>
              <Link href="/programs" className="btn btn-outline">
                Explore Programs
              </Link>
            </div>
          </div>

         <div className="hero-visual reveal-float is-hidden">
            <div className="hero-video-frame">
              <video
                className="clean-video"
                autoPlay
                muted
                loop
                playsInline
                poster="/images/hero-poster.svg"
              >
                <source src="/video/hero.mp4" type="video/mp4" />
              </video>

              <div className="video-shade" />
              <div className="video-chip">XCELERATED</div>

              <div className="video-note">
                <span className="eyebrow">Student-athlete centered</span>
                <h3>Speed. Discipline. Development.</h3>
                <p>
                  Structured coaching for athletes who want better movement,
                  stronger habits, and measurable progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section stat-strip-wrap">
        <div className="container">
          <div className="stat-strip">
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Core divisions</span>
            </div>
            <div className="stat">
              <span className="stat-number">12</span>
              <span className="stat-label">Sessions in full XSPA</span>
            </div>
            <div className="stat">
              <span className="stat-number">6</span>
              <span className="stat-label">Week camp option</span>
            </div>
            <div className="stat">
              <span className="stat-number">50/50</span>
              <span className="stat-label">Physical and mental development</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Programs</span>
              <h2>
                Three divisions. One
                <span className="block-line">disciplined training standard.</span>
              </h2>
            </div>

            <p>
              XCELERATED brings together personal training, group exercise, and
              Speed Performance &amp; Agility in one athlete-centered training
              environment built around discipline, education, confidence, and long-term development.
            </p>
          </div>

          <div className="cards">
            <article className="card card-featured">
              <span className="program-code">XSPA</span>
              <h3>Speed, Performance &amp; Agility</h3>
              <p>
                The core student-athlete development division focused on speed,
                movement quality, agility, confidence, injury reduction, mindset,
                and long-term performance.
              </p>
              <div className="price-inline">Full 6 weeks • $800</div>
              <div className="cta-row">
                <Link href="/xspa" className="btn btn-outline">
                  Learn More
                </Link>
              </div>
            </article>

            <article className="card">
              <span className="program-code">XPT</span>
              <h3>XCELERATED Personal Training</h3>
              <p>
                Individualized training for athletes and active clients who want
                focused coaching, personalized progression, and performance built
                around their goals.
              </p>
              <div className="price-inline">$150 per session</div>
              <div className="cta-row">
                <Link href="/xpt" className="btn btn-outline">
                  Learn More
                </Link>
              </div>
            </article>

            <article className="card">
              <span className="program-code">XGX</span>
              <h3>Group Exercise</h3>
              <p>
                Structured coach-led group sessions built to improve fitness,
                accountability, energy, and consistency in a positive training
                environment.
              </p>
              <div className="price-inline">Custom scheduling</div>
              <div className="cta-row">
                <Link href="/xgx" className="btn btn-outline">
                  Learn More
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="gold-band">
        <div className="container statement-shell">
          <div>
            <span className="eyebrow eyebrow-dark">XCELERATED standard</span>
            <h3>Winning is the by-product of discipline, effort, persistence, and smart preparation.</h3>
          </div>
          <p>
            At XSPA, athletes are prepared for the adversity of sport through
            progressive systems, better movement, safer mechanics, and habits
            that carry into life, school, and competition.
          </p>
        </div>
      </section>

      <section className="section feature-section">
        <div className="container feature-grid">
          <div className="feature-copy">
            <span className="eyebrow">Feature focus</span>
            <h2>XSPA is the core of the brand.</h2>
            <p>
              Built for student-athletes and supported by parent and coach
              alignment, XSPA combines movement quality, confidence, recovery,
              education, and progressive training systems to drive long-term results.
            </p>

            <div className="feature-points">
              <div className="feature-point">
                <h3>Student athlete driven</h3>
                <p>
                  Programs are designed to improve how athletes move, think,
                  prepare, and respond under pressure.
                </p>
              </div>

              <div className="feature-point">
                <h3>Educational and protective</h3>
                <p>
                  ACL injury reduction, bodyweight strength mastery, recovery,
                  and training purpose are built into the system.
                </p>
              </div>

              <div className="feature-point">
                <h3>Parent and coach aware</h3>
                <p>
                  Families and coaches understand why each training phase matters
                  and how growth is developed over time.
                </p>
              </div>
            </div>

            <div className="cta-row spacer-top">
              <Link href="/xspa" className="btn btn-gold">
                Explore XSPA
              </Link>
            </div>
          </div>

          <div className="feature-panel">
            <div className="card tall-card">
              <span className="eyebrow">Inside XSPA</span>

              <ul className="feature-list">
                <li>
                  <strong>Movement quality first</strong>
                  <div className="feature-text">
                    Train proper patterns, not just muscles, so performance holds
                    up in real sport demands.
                  </div>
                </li>

                <li>
                  <strong>SMART athlete development</strong>
                  <div className="feature-text">
                    Stability, Mobility, Agility, Recovery, and Total Nutrition
                    are used to guide training decisions.
                  </div>
                </li>

                <li>
                  <strong>Physical and mental growth</strong>
                  <div className="feature-text">
                    Confidence, effort, persistence, affirmations, goal setting,
                    and concentration are treated as part of athlete development.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container media-grid">
          <div className="image-frame">
            <img src="/images/riles-pic.jpg" alt="XCELERATED athlete development" />
          </div>

          <div className="split">
            <div className="copy-block">
              <span className="eyebrow">Values</span>
              <h3>Built on the standards that shape athletes and people.</h3>
              <ul className="bullet-list compact">
                <li>Respect</li>
                <li>Discipline</li>
                <li>Effort</li>
                <li>Perseverance</li>
                <li>Sportsmanship</li>
                <li>Task Driven</li>
                <li>Mental Toughness</li>
              </ul>
            </div>

            <div className="copy-block">
              <span className="eyebrow">Credentials</span>
              <h3>Education, experience, and athlete development expertise.</h3>
              <ul className="bullet-list compact">
                <li>State of California Credentialed Teacher</li>
                <li>Corrective Exercise Specialist (CES)</li>
                <li>Performance Enhancement Specialist (PES)</li>
                <li>NFHS Level 3 Coach</li>
                <li>Certified Interscholastic Coach</li>
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
              <h2>
                Student athlete driven.
                <span className="block-line">Parent aware. Coach aligned.</span>
              </h2>
            </div>

            <p>
              The training pathway is intentionally educational and information-driven
              so athletes, families, and coaches understand the purpose behind each
              phase of progress.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <h3>Educational</h3>
              <p>
                Training systems are explained clearly so athletes and families
                understand how progress is built and why each element matters.
              </p>
            </div>

            <div className="card">
              <h3>Progressive</h3>
              <p>
                Programs move from fundamentals to advanced demands without
                skipping movement quality, mindset, or recovery.
              </p>
            </div>

            <div className="card">
              <h3>Protective</h3>
              <p>
                ACL injury reduction, better mechanics, and long-term athlete
                health are treated as part of performance, not separate from it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}