import type { Metadata } from "next";
import { PageHead } from "../../components/PageHead";
import { PromoList, PromoTabs } from "../../components/PromoViews";
import { archivedPromos } from "../../content";

export const metadata: Metadata = { title: "Архив акций — namechtala" };

export default function PromosArchivePage() {
  return (
    <main>
      <PageHead label="Акции" title="Архив акций">
        <PromoTabs current="archive" />
      </PageHead>
      <section className="section-tight">
        <div className="wrap">
          <PromoList items={archivedPromos} archived />
        </div>
      </section>
    </main>
  );
}
