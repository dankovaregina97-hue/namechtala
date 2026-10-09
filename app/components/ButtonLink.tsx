import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  solid?: boolean;
  // "link" — текстовая ссылка со стрелкой
  variant?: "button" | "link";
  className?: string;
};

export function ButtonLink({ href, children, solid = false, variant = "button", className = "" }: Props) {
  const external = /^https?:|^mailto:|^tel:/.test(href);
  const cls =
    variant === "link" ? `arrow-link ${className}` : `btn${solid ? " btn-solid" : ""} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {variant === "link" ? <i aria-hidden="true">→</i> : null}
    </>
  );
  return external ? (
    <a className={cls.trim()} href={href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <Link className={cls.trim()} href={href}>
      {inner}
    </Link>
  );
}
