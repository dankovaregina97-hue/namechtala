import type { Metadata } from "next";
import Link from "next/link";
import { BookButton } from "../components/BookButton";
import { PageHead } from "../components/PageHead";
import { Photo } from "../components/Photo";
import { allWorks, works } from "../content";

export const metadata: Metadata = { title: "Работы — namechtala" };

export default function WorksPage() {
  return (
    <main>
      <PageHead label={works.kicker} title={`${works.headingPre}${works.headingEm}`}>
        {works.lede ? <p className="page-lede">{works.lede}</p> : null}
        <BookButton />
      </PageHead>

      <section className="section-tight">
        <div className="wrap">
          {allWorks.length === 0 ? (
            <p className="page-lede">Фотографии скоро появятся здесь</p>
          ) : (
            <ul className="masonry">
              {allWorks.map((item, index) => (
                <li key={`${item.image}-${index}`}>
                  <figure className="work">
                    <a href={item.image} target="_blank" rel="noopener noreferrer">
                      <Photo src={item.image} alt={item.master ? `Работа мастера ${item.master}` : "Работа"} delay={(index % 3) * 70} />
                    </a>
                    {item.master ? (
                      <figcaption>
                        {item.slug ? <Link href={`/masters/${item.slug}/`}>{item.master}</Link> : item.master}
                        {item.category ? <small>{item.category}</small> : null}
                      </figcaption>
                    ) : null}
                  </figure>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
