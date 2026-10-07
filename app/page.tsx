import { BookButton } from "./components/BookButton";
import { ButtonLink } from "./components/ButtonLink";
import { Reveal } from "./components/Reveal";
import { formatPrice, groupMinPrice, home, serviceGroups, servicesCountLabel } from "./content";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="wrap hero-inner">
          <p className="kicker">{home.kicker}</p>
          <h1 className="hero-title">
            {home.titlePre}
            <em>{home.titleEm}</em>
          </h1>
          <p className="lede">{home.lede}</p>
          <div className="actions">
            <BookButton />
            <ButtonLink href="/services/">Смотреть услуги</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="kicker">{home.approachKicker}</p>
            <h2 className="heading">
              {home.approachPre}
              <em>{home.approachEm}</em>
            </h2>
          </Reveal>
          <div className="principles">
            {home.principles.map((item, index) => (
              <Reveal delay={index * 90} key={item.title}>
                <article className="principle">
                  <span className="principle-index">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <Reveal>
            <p className="kicker">{home.servicesKicker}</p>
            <h2 className="heading">
              {home.servicesPre}
              <em>{home.servicesEm}</em>
            </h2>
          </Reveal>
          <ul className="service-list">
            {serviceGroups.map((group, index) => (
              <Reveal as="li" delay={(index % 4) * 70} key={group.title}>
                <div className="service-row">
                  <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <div className="service-name">{group.title}</div>
                    <div className="service-note">{servicesCountLabel(group.services.length)}</div>
                  </div>
                  <span className="service-price">
                    {formatPrice({ price: groupMinPrice(group), from: true })}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={100}>
            <ButtonLink href="/services/">Прайс-лист</ButtonLink>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap cta-panel">
          <Reveal>
            <h2 className="heading">
              {home.ctaPre}
              <em>{home.ctaEm}</em>
            </h2>
            <p className="lede">{home.ctaLede}</p>
            <div className="actions actions-center">
              <BookButton />
              <ButtonLink href="/contact/">Контакты</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
