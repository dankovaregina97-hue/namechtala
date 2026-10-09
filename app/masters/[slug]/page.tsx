import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookButton } from "../../components/BookButton";
import { Photo } from "../../components/Photo";
import { Reveal } from "../../components/Reveal";
import { allMasters, masterImage } from "../../content";

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

const cloudSizes = ["cloud-l", "cloud-m", "cloud-s", "cloud-m", "cloud-l", "cloud-s"];

export default async function MasterPage({ params }: PageProps<"/masters/[slug]">) {
  const { slug } = await params;
  const index = allMasters.findIndex((item) => item.slug === slug);
  const master = allMasters[index];
  if (!master) notFound();

  const tags = (master.tags ?? []).filter(Boolean);
  const phrases = (master.phrases ?? []).filter(Boolean);
  const works = (master.works ?? []).filter(Boolean);
  const paragraphs = (master.bio ?? "").split(/\n{2,}/).filter(Boolean);
  const next = allMasters[(index + 1) % allMasters.length] ?? master;
  const plates = works.length > 0 ? works : master.photo ? [master.photo] : [];

  return (
    <main>
      <section className="profile">
        <div className="wrap profile-grid">
          <aside className="profile-info">
            <Link className="back-link" href="/masters/">
              ← Все мастера
            </Link>
            <Reveal>
              <span className="label">{master.group}</span>
              <h1 className="profile-name">{master.name}</h1>
              <p className="profile-role">{master.role}</p>
            </Reveal>

            {tags.length > 0 ? (
              <Reveal delay={80}>
                <ul className="cloud" aria-label="Виды услуг">
                  {tags.map((tag, i) => (
                    <li className={cloudSizes[i % cloudSizes.length]} key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}

            {master.quote ? (
              <Reveal delay={120}>
                <blockquote className="profile-quote">{master.quote}</blockquote>
              </Reveal>
            ) : null}

            {paragraphs.length > 0 ? (
              <Reveal delay={140}>
                <div className="profile-bio">
                  {paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>
            ) : null}

            {phrases.length > 0 ? (
              <Reveal delay={160}>
                <ol className="phrases">
                  {phrases.map((phrase, i) => (
                    <li key={phrase}>
                      <small>{String(i + 1).padStart(2, "0")}</small>
                      {phrase}
                    </li>
                  ))}
                </ol>
              </Reveal>
            ) : null}

            <div className="profile-cta">
              <BookButton />
            </div>
          </aside>

          <div className="profile-plates">
            {plates.length > 0 ? (
              plates.map((src, i) => (
                <Photo key={`${src}-${i}`} src={src} alt={`Работа мастера ${master.name}`} delay={(i % 2) * 90} />
              ))
            ) : (
              <Photo alt={master.name} ratio="3 / 4" initial={master.name.charAt(0)} />
            )}
            {plates.length === 0 ? <p className="profile-empty">Фотографии работ скоро появятся</p> : null}
          </div>
        </div>
      </section>

      <section className="next-master">
        <div className="wrap">
          <Link href={`/masters/${next.slug}/`} className="next-link">
            <span className="label">Следующий мастер</span>
            <span className="next-name">
              {next.name}
              <i aria-hidden="true">→</i>
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
