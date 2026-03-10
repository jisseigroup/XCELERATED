'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { navItems } from './siteData';
import SocialIcons from './SocialIcons';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openPrograms, setOpenPrograms] = useState(false);
  const [hoverEnabled, setHoverEnabled] = useState(true);
  const mobileMenuRef = useRef(null);
  const programsRef = useRef(null);
  const closeTimerRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setOpen(false);
      }
      if (programsRef.current && !programsRef.current.contains(event.target)) {
        setOpenPrograms(false);
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setOpen(false);
        setOpenPrograms(false);
      }
    }

    function handleResize() {
      const desktop = window.innerWidth > 1024;
      setHoverEnabled(desktop);
      if (!desktop) setOpenPrograms(false);
    }

    handleResize();
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    window.addEventListener('resize', handleResize);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
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
  };

  const openProgramsMenu = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setOpenPrograms(true);
  };

  const delayClosePrograms = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setOpenPrograms(false), 220);
  };

  return (
    <header className="site-header">
      {open && <div className="mobile-backdrop" onClick={closeAll} aria-hidden="true" />}
      <div className="container nav-shell" ref={mobileMenuRef}>
        <Link href="/" className="brand" aria-label="XCELERATED home" onClick={closeAll}>
          <img src="/logo/xcelerated-logo.svg" alt="XCELERATED" className="brand-logo" />
        </Link>

        <nav className={`main-nav ${open ? 'open' : ''}`}>
          {navItems.map((item) =>
            item.children ? (
              <div
                className={`nav-group ${openPrograms ? 'active' : ''}`}
                key={item.label}
                ref={programsRef}
                onMouseEnter={() => hoverEnabled && openProgramsMenu()}
                onMouseLeave={() => hoverEnabled && delayClosePrograms()}
              >
                <button
                  type="button"
                  className="nav-link nav-button"
                  onClick={() => (hoverEnabled ? openProgramsMenu() : setOpenPrograms((v) => !v))}
                  aria-expanded={openPrograms}
                >
                  {item.label}
                </button>
                <div className="mega-menu" onMouseEnter={openProgramsMenu} onMouseLeave={delayClosePrograms} role="menu">
                  <div className="mega-intro">
                    <span className="eyebrow">Programs</span>
                    <h3>Three focused training paths under one disciplined standard.</h3>
                    <p>
                      Explore XSPA, XPT, and XGX through a cleaner pathway built around athlete development and long-term progress.
                    </p>
                  </div>
                  <div className="mega-links">
                    {item.children.map((child) => (
                      <Link href={child.href} key={child.href} className="mega-link" onClick={closeAll}>
                        <strong>{child.label}</strong>
                        <span>{child.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link href={item.href} className="nav-link" key={item.href} onClick={closeAll}>
                {item.label}
              </Link>
            )
          )}
          <Link href="/register" className="btn btn-gold nav-cta" onClick={closeAll}>
            Register
          </Link>
          <div className="mobile-nav-socials">
            <SocialIcons iconOnly />
          </div>
        </nav>

        <button
          type="button"
          className={`menu-toggle ${open ? 'open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => {
            setOpen((v) => !v);
            setOpenPrograms(false);
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
