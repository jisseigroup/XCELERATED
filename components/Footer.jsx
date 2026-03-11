import Link from 'next/link';
import { navItems, site } from './siteData';
import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="footer-brand" aria-label="XCELERATED home">
            <img src="/logo/xcelerated-logo.svg" alt="XCELERATED" className="footer-logo" />
          </Link>
          <p className="footer-copy">
            Student-athlete centered training built around discipline, education, confidence, and long-term development.
          </p>
          <SocialIcons className="footer-socials" iconOnly />
        </div>

        <div>
          <h4>Navigate</h4>
          <div className="footer-links">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href || item.label}>{item.label}</Link>
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
            
            <span>Mon–Fri 12–9pm</span>
            <span>Sat–Sun 8am–12pm</span>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 XCELERATED. All rights reserved.</span>
        <span>
          Design and Developed by{' '}
          <a href="https://auotam.com" target="_blank" rel="noreferrer" className="auotam-link">AUOTAM</a>
        </span>
      </div>
    </footer>
  );
}
