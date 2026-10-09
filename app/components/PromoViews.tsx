"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { promos, type Promo } from "../content";
import { Photo } from "./Photo";

function todayLocal(): string {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

function isArchived(promo: Promo, today: string): boolean {
  if (promo.archived) return true;
  return Boolean(promo.until) && (promo.until as string) < today;
}

function untilLabel(until: string): string {
  const date = new Date(`${until}T00:00:00`);
  if (Number.isNaN(date.getTime())) return "";
  return `до ${date.toLocaleDateString("ru-RU", { day: "numeric", month: "long" })}`;
}

export function PromosView({ mode }: { mode: "active" | "archive" }) {
  // до проверки реальной даты используем дату сборки — так сервер и браузер рисуют одно и то же
  const [today, setToday] = useState(process.env.NEXT_PUBLIC_BUILD_DATE ?? "");
  useEffect(() => setToday(todayLocal()), []);

  const active = promos.filter((promo) => !isArchived(promo, today));
  const archive = promos.filter((promo) => isArchived(promo, today));
  const items = mode === "active" ? active : archive;

  return (
    <>
      <nav className="promo-tabs" aria-label="Разделы акций">
        <Link href="/promos/" aria-current={mode === "active" ? "page" : undefined}>
          Действующие
          <small>{active.length}</small>
        </Link>
        <Link href="/promos/archive/" aria-current={mode === "archive" ? "page" : undefined}>
          Архив
          <small>{archive.length}</small>
        </Link>
      </nav>

      {items.length === 0 ? (
        <p className="page-lede promo-empty">
          {mode === "archive" ? "Архив пока пуст." : "Сейчас действующих акций нет. Загляните позже или напишите нам."}
        </p>
      ) : (
        <ul className={`promo-grid${mode === "archive" ? " promo-archived" : ""}`}>
          {items.map((promo, index) => (
            <li key={`${promo.image}-${index}`}>
              <figure className="promo">
                <a href={promo.image} target="_blank" rel="noopener noreferrer" aria-label={promo.title || "Открыть акцию"}>
                  <Photo src={promo.image} alt={promo.title || "Акция"} delay={(index % 3) * 80} />
                </a>
                {promo.title || promo.until ? (
                  <figcaption>
                    {promo.title ? <span className="promo-name">{promo.title}</span> : null}
                    {promo.until ? <span className="promo-until">{mode === "archive" ? "закончилась" : untilLabel(promo.until)}</span> : null}
                  </figcaption>
                ) : null}
              </figure>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
