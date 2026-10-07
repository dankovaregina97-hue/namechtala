import type { Metadata } from "next";
import { Reveal } from "../components/Reveal";
import { services } from "../site-config";

export const metadata: Metadata = { title: "Услуги — namechtala" };

export default function ServicesPage() {
  return (
    <main>
      <section className="section section-first">
        <div className="wrap">
          <Reveal>
            <p className="kicker">Услуги</p>
            <h1 className="heading">
              Что мы <em>предлагаем</em>
            </h1>
            <p className="lede">Список услуг и стоимость уточняйте при записи</p>
          </Reveal>
          <ul className="service-list">
            {services.map((service, index) => (
              <Reveal as="li" delay={index * 70} key={service.title}>
                <div className="service-row">
                  <span className="service-index">0{index + 1}</span>
                  <div>
                    <div className="service-name">{service.title}</div>
                    <div className="service-note">
                      {[service.duration, service.note].filter(Boolean).join(" · ")}
                    </div>
                  </div>
                  <span className="service-price">{service.price || "По записи"}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
