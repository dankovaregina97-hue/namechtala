import { BookButton } from "./components/BookButton";
import { ButtonLink } from "./components/ButtonLink";
import { Reveal } from "./components/Reveal";
import { services } from "./site-config";

const principles = [
  {
    index: "01",
    title: "Здоровье — основа красоты",
    body: "Внешний вид отражает самочувствие, поэтому мы смотрим на человека целиком, а не на отдельную деталь"
  },
  {
    index: "02",
    title: "Без лишнего",
    body: "Только то, что действительно нужно именно вам. Спокойный подход, понятные шаги и честные рекомендации"
  },
  {
    index: "03",
    title: "Внимание к деталям",
    body: "Комфортная атмосфера, аккуратная работа и ощущение, что о вас позаботились"
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="wrap hero-inner">
          <p className="kicker">health + beauty</p>
          <h1 className="hero-title">
            Забота о себе, <em>которая видна</em>
          </h1>
          <p className="lede">
            namechtala — пространство, где здоровье и красота работают вместе. Мягко, внимательно и без суеты
          </p>
          <div className="actions">
            <BookButton />
            <ButtonLink href="/services/">Смотреть услуги</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="kicker">Подход</p>
            <h2 className="heading">
              Красота, в которой <em>нет ничего случайного</em>
            </h2>
          </Reveal>
          <div className="principles">
            {principles.map((item, index) => (
              <Reveal delay={index * 90} key={item.title}>
                <article className="principle">
                  <span className="principle-index">{item.index}</span>
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
            <p className="kicker">Услуги</p>
            <h2 className="heading">
              Что мы <em>предлагаем</em>
            </h2>
          </Reveal>
          <ul className="service-list">
            {services.map((service, index) => (
              <Reveal as="li" delay={index * 70} key={service.title}>
                <div className="service-row">
                  <span className="service-index">0{index + 1}</span>
                  <div>
                    <div className="service-name">{service.title}</div>
                    <div className="service-note">{service.note}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={100}>
            <ButtonLink href="/services/">Все услуги</ButtonLink>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap cta-panel">
          <Reveal>
            <h2 className="heading">
              Давайте <em>познакомимся</em>
            </h2>
            <p className="lede">Запишитесь онлайн — выберите услугу и удобное время, остальное мы подскажем</p>
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
