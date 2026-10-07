import type { Metadata } from "next";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = { title: "О нас — namechtala" };

export default function AboutPage() {
  return (
    <main>
      <section className="section section-first">
        <div className="wrap prose">
          <Reveal>
            <p className="kicker">О нас</p>
            <h1 className="heading">
              Здоровье и красота — <em>в одном месте</em>
            </h1>
            <p className="lede">
              namechtala — это спокойное пространство заботы о себе. Мы верим, что красота начинается с хорошего
              самочувствия, и строим работу вокруг этой идеи.
            </p>
            <p>Здесь будет рассказ о вас, вашем опыте и подходе — добавьте его в файле app/about/page.tsx.</p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
