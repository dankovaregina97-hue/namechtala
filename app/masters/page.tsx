import type { Metadata } from "next";
import Link from "next/link";
import { BookButton } from "../components/BookButton";
import { PageHead } from "../components/PageHead";
import { Photo } from "../components/Photo";
import { Reveal } from "../components/Reveal";
import { allMasters, booking, masterGroups, masterImage } from "../content";

export const metadata: Metadata = { title: "Мастера — namechtala" };

export default function MastersPage() {
  return (
    <main>
      <PageHead label="Команда" title="Мастера">
        <p className="page-lede">Откройте страницу мастера, чтобы посмотреть работы, или записывайтесь сразу.</p>
        <BookButton />
      </PageHead>

      <section className="section-tight">
        <div className="wrap">
          {masterGroups.map((group) => {
            const masters = allMasters.filter((master) => master.group === group.title);
            return (
              <div className="master-section" key={group.title}>
                <Reveal>
                  <h2 className="group-title">
                    {group.title}
                    <small>{masters.length}</small>
                  </h2>
                </Reveal>
                <ul className="master-grid">
                  {masters.map((master, index) => {
                    const tags = (master.tags ?? []).filter(Boolean).slice(0, 3);
                    return (
                      <li key={master.slug} className="master-item">
                        <Link className="master-card" href={`/masters/${master.slug}/`}>
                          <Photo
                            src={masterImage(master)}
                            alt={master.name}
                            ratio="3 / 4"
                            initial={master.name.charAt(0)}
                            delay={(index % 4) * 70}
                          />
                          <span className="master-name">{master.name}</span>
                          <span className="master-role">{master.role}</span>
                          {tags.length > 0 ? <span className="master-tags">{tags.join(" / ")}</span> : null}
                        </Link>
                        <a
                          className="card-book"
                          href={master.booking || booking.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Записаться к мастеру ${master.name}`}
                        >
                          Записаться
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
