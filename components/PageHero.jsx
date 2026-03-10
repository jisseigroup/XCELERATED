export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="section-hero">
      <div className="container narrow">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="section-hero-text">{text}</p>
      </div>
    </section>
  );
}
