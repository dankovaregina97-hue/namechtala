import type { Metadata } from "next";
import { BookButton } from "../components/BookButton";
import { PageHead } from "../components/PageHead";
import { Reveal } from "../components/Reveal";
import { SocialLinks } from "../components/SocialLinks";
import { YandexRating } from "../components/YandexRating";
import { siteConfig } from "../content";

export const metadata: Metadata = { title: "Контакты — namechtala" };

export default function ContactPage() {
  const { instagram, phone, email, address, yandexMaps, twoGis } = siteConfig.contacts;
  const links = [
    { href: instagram, label: "Instagram" },
    { href: yandexMaps, label: "Яндекс Карты" },
    { href: twoGis, label: "2ГИС" }
  ].filter((item) => item.href);

  return (
    <main>
      <PageHead label="Контакты" title="Связаться с нами">
        <BookButton />
      </PageHead>
      <section className="section-tight">
        <div className="wrap contact-grid">
          <Reveal>
            <h2 className="label">Написать</h2>
            <SocialLinks variant="contact" />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="label">Как нас найти</h2>
            <ul className="contact-list">
              {address ? <li>{address}</li> : null}
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
              {links.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label} <i aria-hidden="true">↗</i>
                  </a>
                </li>
              ))}
            </ul>
            <YandexRating className="yandex-rating-contact" />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
