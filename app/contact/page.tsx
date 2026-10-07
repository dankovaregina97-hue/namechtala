import type { Metadata } from "next";
import { BookButton } from "../components/BookButton";
import { ButtonLink } from "../components/ButtonLink";
import { Reveal } from "../components/Reveal";
import { siteConfig } from "../site-config";

export const metadata: Metadata = { title: "Контакты — namechtala" };

export default function ContactPage() {
  const { telegram, whatsapp, instagram, phone, email, address } = siteConfig.contacts;
  const buttons = [
    { href: telegram, label: "Telegram" },
    { href: whatsapp, label: "WhatsApp" },
    { href: instagram, label: "Instagram" }
  ].filter((item) => item.href);
  const hasAny = buttons.length > 0 || phone || email || address;

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
