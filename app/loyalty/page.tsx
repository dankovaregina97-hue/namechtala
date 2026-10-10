import type { Metadata } from "next";
import { BookButton } from "../components/BookButton";
import { LoyaltyBlock } from "../components/LoyaltyBlock";
import { PageHead } from "../components/PageHead";
import { loyalty } from "../content";

export const metadata: Metadata = { title: `${loyalty.title} — namechtala` };

export default function LoyaltyPage() {
  return (
    <main>
      <PageHead label={loyalty.label} title={loyalty.title}>
        <BookButton />
      </PageHead>
      <section className="section-tight">
        <div className="wrap">
          <LoyaltyBlock />
        </div>
      </section>
    </main>
  );
}
