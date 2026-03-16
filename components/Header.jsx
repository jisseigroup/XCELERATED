'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
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

const headerSocialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/Xceleratedspa',
    Icon: FacebookIcon,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@Xceleratedspa',
    Icon: TikTokIcon,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@Xceleratedspa',
    Icon: YouTubeIcon,
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openPrograms, setOpenPrograms] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [hoverEnabled, setHoverEnabled] = useState(true);
  const programsRef = useRef(null);
  const closeTimerRef = useRef(null);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') {
        setOpen(false);
        setOpenPrograms(false);
        setMobileProgramsOpen(false);
      }
    }

    function handleResize() {
      const desktop = window.innerWidth >= 1025;
      setHoverEnabled(desktop);

      if (!desktop) {
        setOpenPrograms(false);
      } else {
        setOpen(false);
        setMobileProgramsOpen(false);
      }
    }

    function handleDocumentClick(event) {
      if (programsRef.current && !programsRef.current.contains(event.target)) {
        setOpenPrograms(false);
      }
    }

    handleResize();
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleDocumentClick);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleDocumentClick);
      window.removeEventListener('resize', handleResize);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeAll = () => {
    setOpen(false);
    setOpenPrograms(false);
    setMobileProgramsOpen(false);
  };

  const openProgramsMenu = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setOpenPrograms(true);
  };

  const delayClosePrograms = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setOpenPrograms(false), 70);
  };

  const programItem = navItems.find((item) => item.children);
  const navLookup = Object.fromEntries(
    navItems.filter((item) => item.href).map((item) => [item.href, item])
  );
  const orderedNavItems = ['/', '/about', '/contact']
    .map((href) => navLookup[href])
    .filter(Boolean);

  return (
    <header className="site-header">
      <div className="header-strip" aria-label="Site information">
        <div className="container header-strip-inner">
          <div className="header-strip-left">
            <a className="header-strip-link" href="mailto:info@xcelerated.org">
              info@xcelerated.org
            </a>
            <span className="header-strip-sep" aria-hidden="true">
              •
            </span>
            <a className="header-strip-link" href="tel:+15103864816">
              510-386-4816
            </a>
          </div>

          <div className="header-strip-right">
            <span className="header-strip-hours">Mon–Fri: <strong>12pm–9pm</strong></span>
            <span className="header-strip-sep" aria-hidden="true">
              •
            </span>
            <span className="header-strip-hours">Sat–Sun: <strong>8am–12pm</strong></span>
          </div>
        </div>
      </div>

      <div className="container nav-shell">
        <div className="nav-left">
          <Link href="/" className="brand" aria-label="XCELERATED home" onClick={closeAll}>
            <img src="/logo/xcelerated-logo-2026.svg" alt="XCELERATED" className="brand-logo" />
          </Link>

          <nav className="main-nav desktop-nav" aria-label="Primary navigation">
            {orderedNavItems.slice(0, 2).map((item) => (
              <Link href={item.href} className="nav-link" key={item.href} onClick={closeAll}>
                {item.label}
              </Link>
            ))}

            {programItem && (
              <div
                className={`nav-group ${openPrograms ? 'active' : ''}`}
                ref={programsRef}
                onMouseEnter={() => hoverEnabled && openProgramsMenu()}
                onMouseLeave={() => hoverEnabled && delayClosePrograms()}
              >
                <Link
                  href="/programs"
                  className="nav-link nav-button"
                  onClick={openProgramsMenu}
                  aria-expanded={openPrograms}
                >
                  {programItem.label}
                </Link>

                <div
                  className="mega-menu"
                  onMouseEnter={openProgramsMenu}
                  onMouseLeave={delayClosePrograms}
                  role="menu"
                >
                  <div className="mega-intro">
                    <span className="eyebrow">Programs</span>
                    <h3>Three focused training paths under one disciplined standard.</h3>
                    <p>
                      Explore XSPA, XPT, and XGX through a cleaner pathway built around athlete
                      development and long-term progress.
                    </p>
                  </div>

                  <div className="mega-links">
                    {programItem.children.map((child) => (
                      <Link
                        href={child.href}
                        key={child.href}
                        className="mega-link"
                        onClick={closeAll}
                      >
                        <strong>{child.label}</strong>
                        <span>{child.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {orderedNavItems.slice(2).map((item) => (
              <Link href={item.href} className="nav-link" key={item.href} onClick={closeAll}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="header-actions desktop-actions">
          <div className="header-socials social-row">
            {headerSocialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label={label}
                title={label}
              >
                <span className="social-icon"><Icon /></span>
              </a>
            ))}
          </div>

          <Link href="/register" className="btn btn-gold nav-cta" onClick={closeAll}>
            Register
          </Link>
        </div>

        {!open && (
          <button
            type="button"
            className="menu-toggle"
            aria-label="Open menu"
            aria-expanded="false"
            onClick={() => {
              setOpen(true);
              setOpenPrograms(false);
              setMobileProgramsOpen(false);
            }}
          >
            <span />
            <span />
            <span />
          </button>
        )}
      </div>

      {open && (
        <div className="mobile-drawer-wrap" aria-hidden={!open}>
          <button
            type="button"
            className="mobile-backdrop"
            onClick={closeAll}
            aria-label="Close menu"
          />

          <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile navigation">
            <div className="mobile-drawer-header">
              <Link href="/" className="brand" aria-label="XCELERATED home" onClick={closeAll}>
                <img src="/logo/xcelerated-logo-2026.svg" alt="XCELERATED" className="brand-logo" />
              </Link>

              <button type="button" className="drawer-close" onClick={closeAll} aria-label="Close menu">
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="mobile-drawer-body">
              {orderedNavItems.slice(0, 2).map((item) => (
                <Link href={item.href} className="mobile-nav-link" key={item.href} onClick={closeAll}>
                  {item.label}
                </Link>
              ))}

              {programItem && (
                <div className="mobile-nav-group">
                  <div className="mobile-nav-program-row">
                    <Link
                      href="/programs"
                      className="mobile-nav-program-link"
                      onClick={closeAll}
                    >
                      <span className="mobile-nav-label">{programItem.label}</span>
                    </Link>

                    <span
                      className={`mobile-program-toggle-text ${mobileProgramsOpen ? 'open' : ''}`}
                      aria-hidden="true"
                      onClick={() => setMobileProgramsOpen((prev) => !prev)}
                    >
                      ▾
                    </span>
                  </div>

                  {mobileProgramsOpen && (
                    <div className="mobile-submenu">
                      {programItem.children.map((child) => (
                        <Link
                          href={child.href}
                          key={child.href}
                          className="mobile-submenu-link"
                          onClick={closeAll}
                        >
                          <strong>{child.label}</strong>
                          <span>{child.description}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {orderedNavItems.slice(2).map((item) => (
                <Link href={item.href} className="mobile-nav-link" key={item.href} onClick={closeAll}>
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mobile-drawer-footer">
              <div className="mobile-nav-socials social-row">
                {headerSocialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                    aria-label={label}
                    title={label}
                  >
                    <span className="social-icon"><Icon /></span>
                  </a>
                ))}
              </div>

              <Link href="/register" className="btn btn-gold nav-cta mobile-register" onClick={closeAll}>
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}