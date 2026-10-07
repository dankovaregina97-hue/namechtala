import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookButton } from "../../components/BookButton";
import { Reveal } from "../../components/Reveal";
import { allMasters } from "../../content";

export const dynamicParams = false;

export function generateStaticParams() {
  return allMasters.map((master) => ({ slug: master.slug }));
}

export async function generateMetadata({ params }: PageProps<"/masters/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const master = allMasters.find((item) => item.slug === slug);
  if (!master) return {};
  return {
    title: `${master.name} — ${master.role} — namechtala`,
    description: master.quote || master.bio || `${master.name}, ${master.role.toLowerCase()} в namechtala`
  };
}

export default async function MasterPage({ params }: PageProps<"/masters/[slug]">) {
  const { slug } = await params;
  const master = allMasters.find((item) => item.slug === slug);
  if (!master) notFound();

  const phrases = (master.phrases ?? []).filter(Boolean);
  const works = (master.works ?? []).filter(Boolean);
  const paragraphs = (master.bio ?? "").split(/\n{2,}/).filter(Boolean);
  const isEmpty = !master.quote && paragraphs.length === 0 && phrases.length === 0 && works.length === 0;

  return (
    <main>
      <section className="section section-first">
        <div className="wrap">
          <Link className="back-link" href="/masters/">
            ← Все мастера
          </Link>

          <div className="profile-head">
            {master.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="profile-photo" src={master.photo} alt={master.name} />
            ) : (
              <span className="profile-photo master-initial" aria-hidden="true">
                {master.name.charAt(0)}
              </span>
            )}
            <div>
              <p className="kicker">{master.group}</p>
              <h1 className="heading">{master.name}</h1>
              <p className="lede">{master.role}</p>
              <div className="actions">
                <BookButton />
              </div>
            </div>
          </div>

          {master.quote ? (
            <Reveal>
              <blockquote className="profile-quote">{master.quote}</blockquote>
            </Reveal>
          ) : null}

          {paragraphs.length > 0 ? (
            <Reveal>
              <div className="prose profile-bio">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          ) : null}

          {phrases.length > 0 ? (
            <Reveal>
              <h2 className="master-group-title">Коротко о мастере</h2>
              <ul className="phrases">
                {phrases.map((phrase) => (
                  <li key={phrase}>{phrase}</li>
                ))}
              </ul>
            </Reveal>
          ) : null}

          {works.length > 0 ? (
            <div className="master-group">
              <Reveal>
                <h2 className="master-group-title">Работы</h2>
              </Reveal>
              <ul className="works-grid">
                {works.map((image, index) => (
                  <li key={`${image}-${index}`}>
                    <a className="work-card" href={image} target="_blank" rel="noopener noreferrer">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={image} alt={`Работа мастера ${master.name}`} loading="lazy" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {isEmpty ? <p className="lede">Подробная информация о мастере скоро появится</p> : null}
        </div>
      </section>
    </main>
  );
}
