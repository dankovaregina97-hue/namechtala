import type { Metadata } from "next";
import Link from "next/link";
import { BookButton } from "../components/BookButton";
import { Reveal } from "../components/Reveal";
import { allMasters, masterGroups } from "../content";

export const metadata: Metadata = { title: "Мастера — namechtala" };

export default function MastersPage() {
  return (
    <main>
      <section className="section section-first">
        <div className="wrap">
          <Reveal>
            <p className="kicker">Мастера</p>
            <h1 className="heading">
              Наша <em>команда</em>
            </h1>
            <p className="lede">Выберите мастера, чтобы посмотреть работы, или записывайтесь сразу</p>
            <div className="actions">
              <BookButton />
            </div>
          </Reveal>

          {masterGroups.map((group) => (
            <div className="master-group" key={group.title}>
              <Reveal>
                <h2 className="master-group-title">{group.title}</h2>
              </Reveal>
              <ul className="master-grid">
                {allMasters
                  .filter((master) => master.group === group.title)
                  .map((master, index) => (
                    <Reveal as="li" delay={(index % 4) * 70} key={master.slug}>
                      <Link className="master-card" href={`/masters/${master.slug}/`}>
                        {master.photo ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img className="master-photo" src={master.photo} alt={master.name} loading="lazy" />
                        ) : (
                          <span className="master-photo master-initial" aria-hidden="true">
                            {master.name.charAt(0)}
                          </span>
                        )}
                        <h3 className="master-name">{master.name}</h3>
                        <p className="master-role">{master.role}</p>
                        <span className="master-more">Подробнее →</span>
                      </Link>
                    </Reveal>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
