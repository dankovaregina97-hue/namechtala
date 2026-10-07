import type { Metadata } from "next";
import { BookButton } from "../components/BookButton";
import { Reveal } from "../components/Reveal";
import { formatPrice, serviceGroups } from "../services-data";

export const metadata: Metadata = { title: "Услуги и цены — namechtala" };

export default function ServicesPage() {
  return (
    <main>
      <section className="section section-first">
        <div className="wrap">
          <Reveal>
            <p className="kicker">Услуги</p>
            <h1 className="heading">
              Услуги <em>и цены</em>
            </h1>
            <p className="lede">
              Стоимость зависит от мастера и объёма работы — окончательную цену покажет форма записи
            </p>
            <div className="actions">
              <BookButton />
            </div>
            <nav className="chips" aria-label="Категории услуг">
              {serviceGroups.map((group, index) => (
                <a href={`#group-${index}`} key={group.title}>
                  {group.title}
                </a>
              ))}
            </nav>
          </Reveal>

          {serviceGroups.map((group, index) => (
            <div className="service-group" key={group.title} id={`group-${index}`}>
              <Reveal>
                <h2 className="master-group-title">{group.title}</h2>
              </Reveal>
              <ul className="service-list service-list-flat">
                {group.services.map((service) => (
                  <li key={service.title}>
                    <div className="service-row service-row-compact">
                      <div>
                        <div className="service-name service-name-sm">{service.title}</div>
                        <div className="service-note">{service.duration}</div>
                      </div>
                      <span className="service-price">{formatPrice(service)}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
