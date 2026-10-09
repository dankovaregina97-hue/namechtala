import type { Metadata } from "next";
import { BookButton } from "../components/BookButton";
import { PageHead } from "../components/PageHead";
import { Reveal } from "../components/Reveal";
import { formatPrice, serviceGroups } from "../content";

export const metadata: Metadata = { title: "Услуги и цены — namechtala" };

export default function ServicesPage() {
  return (
    <main>
      <PageHead label="Услуги и цены" title="Прайс-лист">
        <p className="page-lede">Стоимость зависит от мастера и объёма работы: точную цену покажет окно записи.</p>
        <BookButton />
      </PageHead>

      <section className="section-tight">
        <div className="wrap price-layout">
          <nav className="price-nav" aria-label="Категории услуг">
            <ul>
              {serviceGroups.map((group, index) => (
                <li key={group.title}>
                  <a href={`#group-${index}`}>
                    <small>{String(index + 1).padStart(2, "0")}</small>
                    {group.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="price-groups">
            {serviceGroups.map((group, index) => (
              <section className="price-group" id={`group-${index}`} key={group.title}>
                <Reveal>
                  <h2 className="price-group-title">
                    <small>{String(index + 1).padStart(2, "0")}</small>
                    {group.title}
                  </h2>
                </Reveal>
                <ul className="price-list">
                  {group.services.map((service) => (
                    <li key={service.title}>
                      <div className="price-row">
                        <span className="price-name">{service.title}</span>
                        <span className="price-dots" aria-hidden="true" />
                        <span className="price-value">{formatPrice(service)}</span>
                      </div>
                      {service.duration ? <span className="price-time">{service.duration}</span> : null}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
