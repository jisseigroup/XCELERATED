import Link from 'next/link';

export default function PageHero({
  eyebrow,
  title,
  text,
  align = 'left',
  cta,
  secondaryCta,
  videoSrc,
  poster,
}) {
  const isCentered = align === 'center';

  return (
    <section className={`section-hero${videoSrc ? ' page-hero-video' : ''}`}>
      {videoSrc && (
        <>
          <video
            className="page-hero-bg-video"
            autoPlay
            muted
            loop
            playsInline
            poster={poster || ''}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="page-hero-video-overlay" />
        </>
      )}

      <div className={`container${isCentered ? ' narrow' : ''}`}>
        <div
          className="section-hero-inner"
          style={isCentered ? { textAlign: 'center' } : undefined}
        >
          {eyebrow && <span className="eyebrow hero-eyebrow">{eyebrow}</span>}
          <h1>{title}</h1>
          {text && <p className="section-hero-text">{text}</p>}

          {(cta || secondaryCta) && (
            <div
              className="btn-row spacer-top"
              style={isCentered ? { justifyContent: 'center' } : undefined}
            >
              {cta?.href &&
                (cta.external ? (
                  <a
                    href={cta.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`btn ${cta.variant === 'outline' ? 'btn-outline' : 'btn-gold'}`}
                  >
                    {cta.label}
                  </a>
                ) : (
                  <Link
                    href={cta.href}
                    className={`btn ${cta.variant === 'outline' ? 'btn-outline' : 'btn-gold'}`}
                  >
                    {cta.label}
                  </Link>
                ))}

              {secondaryCta?.href &&
                (secondaryCta.external ? (
                  <a
                    href={secondaryCta.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`btn ${secondaryCta.variant === 'gold' ? 'btn-gold' : 'btn-outline'}`}
                  >
                    {secondaryCta.label}
                  </a>
                ) : (
                  <Link
                    href={secondaryCta.href}
                    className={`btn ${secondaryCta.variant === 'gold' ? 'btn-gold' : 'btn-outline'}`}
                  >
                    {secondaryCta.label}
                  </Link>
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}