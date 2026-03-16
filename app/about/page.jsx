import PageHero from '../../components/PageHero';
import { credentials } from '../../components/siteData';

export const metadata = { title: 'About' };

const values = [
  'Respect',
  'Discipline',
  'Effort',
  'Perseverance',
  'Sportsmanship',
  'Task Driven',
  'Mental Toughness',
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About XCELERATED"
        title="Meet the coach, educator, and program builder behind the brand."
        text="XCELERATED is led by Riles Nganga, whose work brings together education, recreation, performance training, and community impact."
      />

      <section className="section">
        <div className="container media-grid">
          <div className="image-frame reveal-up">
            <img src="/images/Riles-ninja.GIF" alt="Riles, owner and director of XCELERATED" />
          </div>

          <div className="copy-stack">
            <div className="copy-block reveal-up">
              <span className="eyebrow">Owner & Director</span>
              <h3>Riles Nganga leads XCELERATED with experience in education, coaching, recreation, and athlete development.</h3>
              <p>
                For the last 8 years, Riles Nganga has served as a dedicated PE Teacher for Fremont Unified School District,
                helping students understand the importance of exercise while keeping movement engaging and enjoyable.
                He also served as a PE Teacher in Oakland Unified School District for 2 years, coaching basketball and co-ed flag football.
              </p>
              <p>
                He works part time as a Recreation Specialist II and Recreation Leader II at the Larry E. Reid Sports Center in East Oakland,
                bringing more than ten years of service to the City of Oakland. His work is rooted in community wellness,
                youth development, and recreation leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-glow-sides">
        <div className="container grid-2">
          <div className="copy-block reveal-up">
            <span className="eyebrow">Mission</span>
            <h3>Affordable athlete development built on positive coaching and long-term growth.</h3>
            <p>
              XCELERATED exists to provide affordable access to elite athletic fitness training and development while building a positive youth sports culture.
              The goal is to create a safe, respectful, and student-centered environment where athletes grow physically, mentally, and personally.
            </p>
            <p>
              Through positive coaching, parent partnership, and developmentally appropriate training, XCELERATED helps athletes build character,
              leadership, sportsmanship, confidence, and lifelong healthy habits.
            </p>
          </div>

          <div className="copy-block reveal-up">
            <span className="eyebrow">Vision</span>
            <h3>To build a stronger youth sports culture through access, structure, and positive development.</h3>
            <p>
              XCELERATED aims to become a trusted environment where athletes of different ages and backgrounds can access high-standard training,
              grow with confidence, and develop habits that support long-term success in sport and in life.
            </p>
            <div className="note spacer-top">
              Recreation is not just a job. It is a lifestyle rooted in community, health, and service.
              That belief shapes the way XCELERATED trains athletes, communicates with families, and builds a culture that values growth on and off the field.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="copy-block reveal-up">
            <span className="eyebrow">Education</span>
            <h3>Academic foundation with applied performance knowledge.</h3>
            <p>
              Riles Nganga holds a Bachelor’s Degree in Kinesiology with an emphasis in Exercise, Nutrition, and Wellness from Cal State East Bay,
              where he also completed his Master’s Degree in Recreation, Tourism, and Leisure.
            </p>
          </div>

          <div className="copy-block reveal-up">
            <span className="eyebrow">Credentials</span>
            <h3>Certifications and standards that support athlete development.</h3>
            <ul className="bullet-list compact">
              {credentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="gold-band">
        <div className="container">
          <h3>Positive coaching, structure, and access can change the trajectory of an athlete’s life.</h3>
          <p>
            XCELERATED is not just another place to train. it’s a lifestyle, rooted in community, health, and service.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="copy-block reveal-up">
            <span className="eyebrow">Athletic Background</span>
            <h3>Firsthand experience in speed, discipline, and performance.</h3>
            <p>
              With a strong athletic background, including competing as a sprinter at Cal State East Bay and playing football as a defensive back at Laney College,
              Riles Nganga brings firsthand perspective to every program he leads.
            </p>
            <p>
              He also appeared on seasons 9 and 10 of American Ninja Warrior, bringing competitive energy and resilience into the identity of the brand.
            </p>
          </div>

          <div className="copy-block reveal-up">
            <span className="eyebrow">Beyond Coaching</span>
            <h3>Committed to family, travel, movement, and community connection.</h3>
            <p>
              Riles Nganga enjoys traveling, staying active, spending quality time with family, and connecting with the community.
              His approach blends performance, positivity, accountability, and service.
            </p>
            <p>
              The result is a training environment designed to be safe, engaging, and transformational for the people it serves.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}