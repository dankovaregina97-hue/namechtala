import type { Metadata } from "next";
import { PageHead } from "../components/PageHead";
import { Photo } from "../components/Photo";
import { Reveal } from "../components/Reveal";
import { about } from "../content";

export const metadata: Metadata = { title: "О нас — namechtala" };

export default function AboutPage() {
  return (
    <main>
      <PageHead
        label={about.kicker}
        title={
          <>
            {about.headingPre}
            {about.headingEm}
          </>
        }
      />
      <section className="section-tight">
        <div className="wrap about-grid">
          <Reveal className="about-text">
            <p className="about-lede">{about.lede}</p>
            {about.body
              .split(/\n{2,}/)
              .filter(Boolean)
              .map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
          </Reveal>
          <Photo src="/uploads/dinara-5.webp" alt="" ratio="3 / 4" className="about-photo" />
        </div>
      </section>
    </main>
  );
}
