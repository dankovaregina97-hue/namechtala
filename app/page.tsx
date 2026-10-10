import Link from "next/link";
import { BookLink } from "./components/BookButton";
import { ButtonLink } from "./components/ButtonLink";
import { LoyaltyBlock } from "./components/LoyaltyBlock";
import { Photo } from "./components/Photo";
import { Reveal } from "./components/Reveal";
import { SocialLinks } from "./components/SocialLinks";
import {
  allMasters,
  allWorks,
  formatPrice,
  groupMinPrice,
  home,
  loyalty,
  masterImage,
  serviceGroups,
  settings
} from "./content";

const heroImage = "/uploads/milena-2.webp";

export default function HomePage() {
  const strip = allWorks.slice(0, 10);
  // на главной показываем мастеров только с их личным фото; пока фото меньше трёх, блок скрыт
  const featured = allMasters.filter((master) => masterImage(master)).slice(0, 4);
  const { yandexMaps, twoGis } = settings.contacts;
  let sectionNumber = 0;
  const nextNumber = () => String(++sectionNumber).padStart(2, "0");

  return (
    <main>
      {/* ---------- первый экран ---------- */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={heroImage} alt="" />
        </div>
        <div className="hero-veil" aria-hidden="true" />
        <div className="wrap hero-body">
          <p className="hero-kicker">{home.kicker}</p>
          <h1 className="hero-title">
            {home.titleLines.map((line, index) => (
              <span className="hero-line" key={line}>
                <span style={{ animationDelay: `${300 + index * 140}ms` }}>{line}</span>
              </span>
            ))}
          </h1>
          <div className="hero-foot">
            <p className="hero-lede">{home.lede}</p>
            <div className="hero-actions">
              <BookLink className="btn btn-solid btn-light">
                <span>Записаться</span>
              </BookLink>
              <ButtonLink variant="link" href="/services/" className="on-dark">
                Услуги и цены
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ---------- подход ---------- */}
      <section className="section manifesto">
        <div className="wrap">
          <div className="manifesto-grid">
            <Reveal className="manifesto-label">
              <span className="label">{nextNumber()} — {home.manifestoLabel}</span>
            </Reveal>
            <Reveal className="manifesto-text" delay={80}>
              <p>{home.manifesto}</p>
            </Reveal>
          </div>
          <ol className="principles">
            {home.principles.map((item, index) => (
              <Reveal as="li" delay={index * 110} key={item.title}>
                <span className="principle-num">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- услуги ---------- */}
      <section className="section section-bone">
        <div className="wrap services-grid">
          <Reveal className="services-aside">
            <span className="label">{nextNumber()} — {home.servicesTitle}</span>
            <h2 className="title">{home.servicesTitle}</h2>
            <ButtonLink variant="link" href="/services/">
              Весь прайс-лист
            </ButtonLink>
          </Reveal>
          <ul className="index-list">
            {serviceGroups.map((group, index) => (
              <Reveal as="li" delay={index * 50} key={group.title}>
                <Link href={`/services/#group-${index}`} className="index-row">
                  <span className="index-num">{String(index + 1).padStart(2, "0")}</span>
                  <span className="index-name">{group.title}</span>
                  <span className="index-meta">{formatPrice({ price: groupMinPrice(group), from: true })}</span>
                  <i aria-hidden="true">→</i>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- работы ---------- */}
      {strip.length > 0 ? (
        <section className="section works-section">
          <div className="wrap works-head">
            <Reveal>
              <span className="label">{nextNumber()} — {home.worksTitle}</span>
              <h2 className="title">{home.worksTitle}</h2>
            </Reveal>
            <Reveal delay={80}>
              <ButtonLink variant="link" href="/works/">
                Вся галерея
              </ButtonLink>
            </Reveal>
          </div>
          <div className="rail" tabIndex={0} aria-label="Фотографии работ">
            {strip.map((work, index) => (
              <figure className="rail-item" key={`${work.image}-${index}`}>
                <Photo src={work.image} alt={work.master ? `Работа мастера ${work.master}` : "Работа"} ratio="3 / 4" delay={(index % 4) * 70} />
                {work.master ? <figcaption>{work.master}</figcaption> : null}
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {/* ---------- мастера ---------- */}
      {featured.length >= 3 ? (
        <section className="section">
          <div className="wrap">
            <div className="works-head">
              <Reveal>
                <span className="label">{nextNumber()} — {home.mastersTitle}</span>
                <h2 className="title">{home.mastersTitle}</h2>
              </Reveal>
              <Reveal delay={80}>
                <ButtonLink variant="link" href="/masters/">
                  Вся команда
                </ButtonLink>
              </Reveal>
            </div>
            <ul className="portrait-grid">
              {featured.map((master, index) => (
                <li key={master.slug} style={{ marginTop: index % 2 ? "clamp(24px, 5vw, 72px)" : 0 }}>
                  <Link href={`/masters/${master.slug}/`} className="portrait">
                    <Photo src={masterImage(master)} alt={master.name} ratio="3 / 4" delay={index * 80} />
                    <span className="portrait-name">{master.name}</span>
                    <span className="portrait-role">{master.role}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* ---------- система лояльности ---------- */}
      <section className="section section-bone">
        <div className="wrap">
          <Reveal className="loyalty-head">
            <span className="label">{nextNumber()} — {loyalty.label}</span>
            <h2 className="title">{loyalty.title}</h2>
            <ButtonLink variant="link" href="/loyalty/">
              Все условия
            </ButtonLink>
          </Reveal>
          <LoyaltyBlock />
        </div>
      </section>

      {/* ---------- запись ---------- */}
      <section className="section section-dark cta">
        <div className="wrap cta-grid">
          <Reveal>
            <span className="label">{nextNumber()} — Запись</span>
            <BookLink className="cta-link">
              <span>{home.ctaTitle}</span>
              <i aria-hidden="true">→</i>
            </BookLink>
            <p className="cta-lede">{home.ctaLede}</p>
          </Reveal>
          <Reveal delay={120} className="cta-side">
            <SocialLinks variant="contact" />
            {yandexMaps || twoGis ? (
              <p className="cta-maps">
                {yandexMaps ? (
                  <a href={yandexMaps} target="_blank" rel="noopener noreferrer">
                    Яндекс Карты
                  </a>
                ) : null}
                {twoGis ? (
                  <a href={twoGis} target="_blank" rel="noopener noreferrer">
                    2ГИС
                  </a>
                ) : null}
              </p>
            ) : null}
          </Reveal>
        </div>
      </section>
    </main>
  );
}
