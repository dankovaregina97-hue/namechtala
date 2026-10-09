import type { Metadata } from "next";
import { PageHead } from "../components/PageHead";
import { PromoList, PromoTabs } from "../components/PromoViews";
import { activePromos } from "../content";

export const metadata: Metadata = { title: "Акции — namechtala" };

export default function PromosPage() {
  return (
    <main>
      <PageHead label="Акции" title="Действующие акции">
        <PromoTabs current="active" />
      </PageHead>
      <section className="section-tight">
        <div className="wrap">
          <PromoList items={activePromos} />
        </div>
      </section>
    </main>
  );
}
