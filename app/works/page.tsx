import type { Metadata } from "next";
import { BookButton } from "../components/BookButton";
import { Reveal } from "../components/Reveal";
import { allMasters, works } from "../content";

export const metadata: Metadata = { title: "Работы — namechtala" };

export default function WorksPage() {
  const fromMasters = allMasters.flatMap((master) =>
    (master.works ?? []).filter(Boolean).map((image) => ({ image, master: master.name, category: master.group }))
  );
  const items = [...fromMasters, ...works.items];
  const groups = new Map<string, typeof items>();
  for (const item of items) {
    const key = item.category?.trim() || "";
    groups.set(key, [...(groups.get(key) ?? []), item]);
  }

  return (
    <main>
      <section className="section section-first">
        <div className="wrap">
          <Reveal>
            <p className="kicker">{works.kicker}</p>
            <h1 className="heading">
              {works.headingPre}
              <em>{works.headingEm}</em>
            </h1>
            {works.lede ? <p className="lede">{works.lede}</p> : null}
            <div className="actions">
              <BookButton />
            </div>
          </Reveal>

          {items.length === 0 ? (
            <p className="lede">Фотографии скоро появятся здесь</p>
          ) : (
            [...groups.entries()].map(([category, items]) => (
              <div className="master-group" key={category || "all"}>
                {category ? <h2 className="master-group-title">{category}</h2> : null}
                <ul className="works-grid">
                  {items.map((item, index) => (
                    <li key={`${item.image}-${index}`}>
                      <a className="work-card" href={item.image} target="_blank" rel="noopener noreferrer">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image}
                          alt={item.master ? `Работа мастера ${item.master}` : "Работа мастера namechtala"}
                          loading="lazy"
                        />
                        {item.master ? <span className="work-master">{item.master}</span> : null}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
