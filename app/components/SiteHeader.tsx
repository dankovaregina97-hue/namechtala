"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { booking } from "../content";
import { navLinks } from "./nav";
import { SocialLinks } from "./SocialLinks";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // на главной шапка прозрачная поверх тёмного первого экрана
    const threshold = isHome ? window.innerHeight * 0.8 : 8;
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  const light = isHome && !scrolled && !open;

  return (
    <>
      <header className={`header${light ? " header-light" : ""}${scrolled ? " header-scrolled" : ""}${open ? " header-open" : ""}`}>
        <div className="header-row">
          <Link className="brand" href="/" aria-label="namechtala — на главную">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="namechtala health + beauty" width={443} height={141} />
          </Link>

          <nav className="header-nav" aria-label="Разделы сайта">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.href} aria-current={pathname.startsWith(link.href) ? "page" : undefined}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <a className="header-book" href={booking.href} target="_blank" rel="noopener noreferrer">
              {booking.label}
            </a>
            <button
              type="button"
              className="burger"
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`menu${open ? " menu-open" : ""}`} aria-hidden={!open}>
        <nav className="menu-nav" aria-label="Меню">
          {navLinks.map((link, index) => (
            <Link href={link.href} key={link.href} tabIndex={open ? 0 : -1} style={{ transitionDelay: `${120 + index * 60}ms` }}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="menu-foot">
          <a className="btn btn-solid btn-light" href={booking.href} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
            <span>{booking.label}</span>
          </a>
          <SocialLinks variant="footer" />
        </div>
      </div>
    </>
  );
}
