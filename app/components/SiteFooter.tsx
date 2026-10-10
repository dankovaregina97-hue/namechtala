import Link from "next/link";
import { siteConfig } from "../content";
import { navLinks } from "./nav";
import { SocialLinks } from "./SocialLinks";
import { YandexRating } from "./YandexRating";

export function SiteFooter() {
  const { yandexMaps, twoGis, phone, email, address } = siteConfig.contacts;
  const maps = [
    { href: yandexMaps, label: "Яндекс Карты" },
    { href: twoGis, label: "2ГИС" }
  ].filter((item) => item.href);

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="footer-logo" src="/logo.png" alt="namechtala health + beauty" width={443} height={141} />
          <div className="footer-cols">
            <div>
              <h3 className="label">Разделы</h3>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/loyalty/">Система лояльности</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="label">Как нас найти</h3>
              <ul>
                {address ? <li>{address}</li> : null}
                {maps.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.label}
                    </a>
                  </li>
                ))}
                {phone ? (
                  <li>
                    <a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a>
                  </li>
                ) : null}
                {email ? (
                  <li>
                    <a href={`mailto:${email}`}>{email}</a>
                  </li>
                ) : null}
              </ul>
              <YandexRating className="yandex-rating-footer" />
            </div>
            <div>
              <h3 className="label">Написать</h3>
              <SocialLinks variant="footer" />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {siteConfig.name}</span>
          <span>{siteConfig.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
