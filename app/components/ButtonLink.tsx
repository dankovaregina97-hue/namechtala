import Link from "next/link";
import type { ReactNode } from "react";

export function ButtonLink({
  href,
  children,
  solid = false
}: {
  href: string;
  children: ReactNode;
  solid?: boolean;
}) {
  const external = /^https?:|^mailto:|^tel:/.test(href);
  const className = solid ? "btn btn-solid" : "btn";
  return external ? (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
