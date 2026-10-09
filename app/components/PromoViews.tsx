import Link from "next/link";
import { activePromos, archivedPromos, type Promo } from "../content";
import { BookButton } from "./BookButton";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";

export function PromoTabs({ current }: { current: "active" | "archive" }) {
  return (
    <nav className="promo-tabs" aria-label="Разделы акций">
      <Link href="/promos/" aria-current={current === "active" ? "page" : undefined}>
        Действующие
        <small>{activePromos.length}</small>
      </Link>
      <Link href="/promos/archive/" aria-current={current === "archive" ? "page" : undefined}>
        Архив
        <small>{archivedPromos.length}</small>
      </Link>
    </nav>
  );
}

export function PromoList({ items, archived = false }: { items: Promo[]; archived?: boolean }) {
  if (items.length === 0) {
    return (
      <p className="page-lede promo-empty">
        {archived ? "Архив пока пуст." : "Сейчас действующих акций нет. Загляните позже или напишите нам."}
      </p>
    );
  }
  return (
    <ul className={`promo-list${archived ? " promo-archived" : ""}`}>
      {items.map((promo, index) => (
        <Reveal as="li" delay={(index % 2) * 80} key={`${promo.title}-${index}`}>
          <article className="promo">
            {promo.image ? <Photo src={promo.image} alt={promo.title} ratio="4 / 3" /> : null}
            <div className="promo-body">
              <div className="promo-meta">
                {promo.badge ? <span className="promo-badge">{promo.badge}</span> : null}
                {promo.period ? <span className="promo-period">{promo.period}</span> : null}
              </div>
              <h2 className="promo-title">{promo.title}</h2>
              {promo.text
                ? promo.text
                    .split(/\n{2,}/)
                    .filter(Boolean)
                    .map((paragraph) => (
                      <p className="promo-text" key={paragraph}>
                        {paragraph}
                      </p>
                    ))
                : null}
              {!archived ? (
                <div className="promo-cta">
                  <BookButton />
                </div>
              ) : null}
            </div>
          </article>
        </Reveal>
      ))}
    </ul>
  );
}
