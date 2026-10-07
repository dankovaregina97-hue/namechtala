import Link from "next/link";
import { siteConfig } from "../content";
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
        <ul className="footer-links">
          {[
            { href: siteConfig.contacts.yandexMaps, label: "Яндекс Карты" },
            { href: siteConfig.contacts.twoGis, label: "2ГИС" }
          ]
            .filter((item) => item.href)
            .map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
        </ul>
        <span className="footer-copy">© {new Date().getFullYear()} {siteConfig.name}</span>
      </div>
    </footer>
  );
}
