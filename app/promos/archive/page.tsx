import type { Metadata } from "next";
import { PageHead } from "../../components/PageHead";
import { PromosView } from "../../components/PromoViews";

export const metadata: Metadata = { title: "Архив акций — namechtala" };

export default function PromosArchivePage() {
  return (
    <main>
      <PageHead label="Акции" title="Архив акций" />
      <section className="section-tight">
        <div className="wrap">
          <PromosView mode="archive" />
        </div>
      </section>
    </main>
  );
}
