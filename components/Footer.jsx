import Link from 'next/link';
import { navItems } from './siteData';

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M13.5 21v-7h2.3l.4-3h-2.7V9.2c0-.9.3-1.5 1.6-1.5H16V5.1c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.9V11H7.5v3H10v7h3.5Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M14.9 3c.2 1.7 1.2 3.3 2.8 4.1 1 .5 2 .8 3.1.8v3.1c-1.4 0-2.7-.3-3.9-.9v5.2c0 3.5-2.8 6.2-6.3 6.2S4.3 18.8 4.3 15.3s2.8-6.2 6.3-6.2c.3 0 .6 0 .9.1v3.2c-.3-.1-.6-.1-.9-.1-1.7 0-3.1 1.3-3.1 3s1.4 3 3.1 3 3.2-1.3 3.2-3V3h3.2Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M21.6 8.2a2.9 2.9 0 0 0-2-2C17.8 5.7 12 5.7 12 5.7s-5.8 0-7.6.5a2.9 2.9 0 0 0-2 2A30 30 0 0 0 2 12a30 30 0 0 0 .4 3.8 2.9 2.9 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.9 2.9 0 0 0 2-2A30 30 0 0 0 22 12a30 30 0 0 0-.4-3.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="footer-brand" aria-label="XCELERATED home">
            <img src="/logo/xcelerated-new-2026.svg" alt="XCELERATED" className="footer-logo" />
          </Link>
          <p className="footer-copy">
            Student-athlete centered training built around discipline, education, confidence, and long-term development.
          </p>
          <div className="footer-socials social-row">
            <a
              href="https://www.facebook.com/Xceleratedspa"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="Facebook"
              title="Facebook"
            >
              <span className="social-icon"><FacebookIcon /></span>
            </a>
            <a
              href="https://www.tiktok.com/@Xceleratedspa"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="TikTok"
              title="TikTok"
            >
              <span className="social-icon"><TikTokIcon /></span>
            </a>
            <a
              href="https://www.youtube.com/@Xceleratedspa"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="YouTube"
              title="YouTube"
            >
              <span className="social-icon"><YouTubeIcon /></span>
            </a>
          </div>
        </div>

        <div>
          <h4>Navigate</h4>
          <div className="footer-links">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href || item.label}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4>Programs</h4>
          <div className="footer-links">
            <Link href="/xspa">XSPA</Link>
            <Link href="/xpt">XPT</Link>
            <Link href="/xgx">XGX</Link>
          </div>
        </div>

        <div>
          <h4>Contact</h4>
          <div className="footer-links">
            <span>Bay Area, California</span>
            <a href="mailto:info@xcelerated.org">info@xcelerated.org</a>
            <a href="tel:+15103864816">510-386-4816</a>
            <span>Mon–Fri: <strong>12pm–9pm</strong></span>
            <span>Sat–Sun: <strong>8am–12pm</strong></span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 XCELERATED. All rights reserved.</span>

       <span
  className="footer-legal"
  style={{ fontSize: 12, fontWeight: 400, display: 'inline-flex', alignItems: 'center', gap: 10, opacity: 0.9 }}
>
  <Link href="/terms" style={{ fontWeight: 400, textDecoration: 'none' }}>Terms & Conditions</Link>

  <span aria-hidden="true" style={{ opacity: 0.6 }}>
    {' '}|{' '}
  </span>

  <Link href="/privacy" style={{ fontWeight: 400, textDecoration: 'none' }}>Privacy Policy</Link>
</span>

        <span>
          Design and Developed by{' '}
          <a href="https://auotam.com" target="_blank" rel="noreferrer" className="auotam-link">
            AUOTAM
          </a>
        </span>
      </div>
    </footer>
  );
}
