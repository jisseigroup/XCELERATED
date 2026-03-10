import Link from 'next/link';
import PageHero from '../../components/PageHero';
import { programs } from '../../components/siteData';

export const metadata = { title: 'Programs' };

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Three training divisions designed for development, accountability, and long-term progress."
        text="XCELERATED offers one-to-one training, group exercise, and its flagship Speed Performance & Agility pathway for student athletes."
      />

      <section className="section">
        <div className="container cards">
          {programs.map((program) => (
            <article className="card reveal-up" key={program.code}>
              <span className="program-code">{program.code}</span>
              <h3>{program.title}</h3>
              <p>{program.summary}</p>
              <div className="price-inline">{program.price}</div>
              <Link href={program.href} className="btn btn-gold spacer-top">Open Program</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
