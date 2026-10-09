import type { Metadata } from "next";
import { BookButton } from "../components/BookButton";
import { PageHead } from "../components/PageHead";
import { PromosView } from "../components/PromoViews";

export const metadata: Metadata = { title: "Акции — namechtala" };

export default function PromosPage() {
  return (
    <main>
      <PageHead label="Акции" title="Действующие акции">
        <BookButton />
      </PageHead>
      <section className="section-tight">
        <div className="wrap">
          <PromosView mode="active" />
        </div>
      </section>
    </main>
  );
}
