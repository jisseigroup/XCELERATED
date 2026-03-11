'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { navItems } from './siteData';
import SocialIcons from './SocialIcons';

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
  const navLookup = Object.fromEntries(navItems.filter((item) => item.href).map((item) => [item.href, item]));
  const orderedNavItems = ['/', '/about', '/contact']
    .map((href) => navLookup[href])
    .filter(Boolean);

  return (
    <header className="site-header">
      <div className="header-strip" aria-label="Site information">
        <div className="container header-strip-inner">
          <div className="header-strip-left">
            <a className="header-strip-link" href="mailto:info@xcelerated.org">info@xcelerated.org</a>
            <span className="header-strip-sep" aria-hidden="true">•</span>
            <a className="header-strip-link" href="tel:+15103864816">510-386-4816</a>
            <span className="header-strip-sep" aria-hidden="true">•</span>
            <a className="header-strip-link" href="tel:+15106898817">510-689-8817</a>
          </div>

          <div className="header-strip-right">
            <span className="header-strip-hours">Mon–Fri 12–9pm</span>
            <span className="header-strip-sep" aria-hidden="true">•</span>
            <span className="header-strip-hours">Sat–Sun 8am–12pm</span>
          </div>
        </div>
      </div>
      <div className="container nav-shell">
        <div className="nav-left">
          <Link href="/" className="brand" aria-label="XCELERATED home" onClick={closeAll}>
            <img src="/logo/xcelerated-logo.svg" alt="XCELERATED" className="brand-logo" />
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

                <div className="mega-menu" onMouseEnter={openProgramsMenu} onMouseLeave={delayClosePrograms} role="menu">
                  <div className="mega-intro">
                    <span className="eyebrow">Programs</span>
                    <h3>Three focused training paths under one disciplined standard.</h3>
                    <p>
                      Explore XSPA, XPT, and XGX through a cleaner pathway built around athlete development and long-term progress.
                    </p>
                  </div>

                  <div className="mega-links">
                    {programItem.children.map((child) => (
                      <Link href={child.href} key={child.href} className="mega-link" onClick={closeAll}>
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
          <div className="header-socials">
            <SocialIcons iconOnly />
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
          <button type="button" className="mobile-backdrop" onClick={closeAll} aria-label="Close menu" />

          <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile navigation">
            <div className="mobile-drawer-header">
              <Link href="/" className="brand" aria-label="XCELERATED home" onClick={closeAll}>
                <img src="/logo/xcelerated-logo.svg" alt="XCELERATED" className="brand-logo" />
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
                      className="mobile-nav-link mobile-nav-program-link"
                      onClick={closeAll}
                    >
                      <span className="mobile-nav-label">{programItem.label}</span>
                    </Link>

                    <button
                      type="button"
                      className="mobile-program-toggle-button"
                      onClick={() => setMobileProgramsOpen((prev) => !prev)}
                      aria-expanded={mobileProgramsOpen}
                      aria-label={mobileProgramsOpen ? 'Collapse programs menu' : 'Expand programs menu'}
                    >
                      <span className={`mobile-program-toggle ${mobileProgramsOpen ? 'open' : ''}`} aria-hidden="true">
                        ▾
                      </span>
                    </button>
                  </div>

                  {mobileProgramsOpen && (
                    <div className="mobile-submenu">
                      {programItem.children.map((child) => (
                        <Link href={child.href} key={child.href} className="mobile-submenu-link" onClick={closeAll}>
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
              <div className="mobile-nav-socials">
                <SocialIcons iconOnly />
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