"use client";

import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "span" | "li" | "section";
  // "up" — мягкое появление снизу, "clip" — шторка для фотографий
  variant?: "up" | "clip";
};

export function Reveal({ children, className, delay = 0, as = "div", variant = "up" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  const base = variant === "clip" ? "reveal-clip" : "reveal";

  return (
    <Tag
      className={`${base}${isVisible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      ref={ref as RefObject<HTMLDivElement & HTMLSpanElement & HTMLLIElement & HTMLElement>}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
