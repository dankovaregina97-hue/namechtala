import Link from "next/link";
import { siteConfig } from "../site-config";
import { navLinks } from "./nav";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-row">
        <div>
          <span className="footer-brand">{siteConfig.name}</span>
          <span className="footer-tagline">{siteConfig.tagline}</span>
        </div>
        <ul className="footer-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <span className="footer-copy">© {new Date().getFullYear()} {siteConfig.name}</span>
      </div>
    </footer>
  );
}
