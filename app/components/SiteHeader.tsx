import Link from "next/link";
import { BookButton } from "./BookButton";
import { navLinks } from "./nav";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap site-header-row">
        <Link className="site-brand" href="/" aria-label="namechtala — на главную">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="namechtala health + beauty" width={180} height={70} />
        </Link>
        <nav className="site-nav" aria-label="Разделы сайта">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <BookButton className="header-cta" />
      </div>
    </header>
  );
}
