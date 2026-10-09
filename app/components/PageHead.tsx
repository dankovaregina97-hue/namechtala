import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHead({ label, title, children }: { label: string; title: ReactNode; children?: ReactNode }) {
  return (
    <header className="page-head">
      <div className="wrap page-head-grid">
        <Reveal>
          <span className="label">{label}</span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="page-title">{title}</h1>
          {children ? <div className="page-head-extra">{children}</div> : null}
        </Reveal>
      </div>
    </header>
  );
}
