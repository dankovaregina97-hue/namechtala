import type { Metadata } from "next";
import { Reveal } from "../components/Reveal";
import { about } from "../content";

export const metadata: Metadata = { title: "О нас — namechtala" };

export default function AboutPage() {
  return (
    <main>
      <section className="section section-first">
        <div className="wrap prose">
          <Reveal>
            <p className="kicker">{about.kicker}</p>
            <h1 className="heading">
              {about.headingPre}
              <em>{about.headingEm}</em>
            </h1>
            <p className="lede">{about.lede}</p>
            {about.body
              .split(/\n{2,}/)
              .filter(Boolean)
              .map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
          </Reveal>
        </div>
      </section>
    </main>
  );
}
