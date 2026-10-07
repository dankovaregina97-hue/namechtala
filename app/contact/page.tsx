import type { Metadata } from "next";
import { BookButton } from "../components/BookButton";
import { ButtonLink } from "../components/ButtonLink";
import { Reveal } from "../components/Reveal";
import { SocialLinks } from "../components/SocialLinks";
import { siteConfig } from "../content";

export const metadata: Metadata = { title: "Контакты — namechtala" };

export default function ContactPage() {
  const { instagram, phone, email, address, yandexMaps, twoGis } = siteConfig.contacts;
  const buttons = [
    { href: instagram, label: "Instagram" }
  ].filter((item) => item.href);
  const maps = [
    { href: yandexMaps, label: "Яндекс Карты" },
    { href: twoGis, label: "2ГИС" }
  ].filter((item) => item.href);
  const hasAny = buttons.length > 0 || maps.length > 0 || phone || email || address;

  return (
    <main>
      <section className="section section-first">
        <div className="wrap prose">
          <Reveal>
            <p className="kicker">Контакты</p>
            <h1 className="heading">
              Свяжитесь <em>с нами</em>
            </h1>
            <div className="actions">
              <BookButton />
            </div>
            <SocialLinks variant="contact" />
            {hasAny ? (
              <>
                <div className="actions">
                  {buttons.map((item) => (
                    <ButtonLink key={item.label} href={item.href}>
                      {item.label}
                    </ButtonLink>
                  ))}
                </div>
                <ul className="contact-list">
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
                  {address ? <li>{address}</li> : null}
                </ul>
                {maps.length > 0 ? (
                  <>
                    <p className="kicker kicker-gap">Как нас найти</p>
                    <div className="actions actions-tight">
                      {maps.map((item) => (
                        <ButtonLink key={item.label} href={item.href}>
                          {item.label}
                        </ButtonLink>
                      ))}
                    </div>
                  </>
                ) : null}
              </>
            ) : (
              <p className="lede">Остальные контакты скоро появятся здесь</p>
            )}
          </Reveal>
        </div>
      </section>
    </main>
  );
}
