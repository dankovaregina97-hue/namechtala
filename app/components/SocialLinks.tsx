"use client";

import { useState } from "react";
import { settings } from "../content";
import { MaxIcon, TelegramIcon, WhatsAppIcon } from "./icons";

type Props = { variant?: "footer" | "contact" };

export function SocialLinks({ variant = "footer" }: Props) {
  const { telegram, whatsapp, max, maxPhone } = settings.contacts;
  const [copied, setCopied] = useState(false);

  async function copyMax() {
    try {
      await navigator.clipboard.writeText(maxPhone);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt("Номер в MAX:", maxPhone);
    }
  }

  const items: { key: string; label: string; icon: React.ReactNode; href?: string; onClick?: () => void }[] = [];
  if (telegram) items.push({ key: "tg", label: "Telegram", icon: <TelegramIcon />, href: telegram });
  if (max) items.push({ key: "max", label: "MAX", icon: <MaxIcon />, href: max });
  else if (maxPhone) items.push({ key: "max", label: "MAX", icon: <MaxIcon />, onClick: copyMax });
  if (whatsapp) items.push({ key: "wa", label: "WhatsApp", icon: <WhatsAppIcon />, href: whatsapp });
  if (items.length === 0) return null;

  return (
    <div className={`social social-${variant}`}>
      <ul className="social-list">
        {items.map((item) => (
          <li key={item.key}>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} title={item.label}>
                {item.icon}
                {variant === "contact" ? <span>{item.label}</span> : null}
              </a>
            ) : (
              <button
                type="button"
                onClick={item.onClick}
                aria-label={`${item.label}: скопировать номер`}
                title={`${item.label}: скопировать номер ${maxPhone}`}
              >
                {item.icon}
                {variant === "contact" ? <span>{item.label}</span> : null}
              </button>
            )}
          </li>
        ))}
      </ul>
      {copied ? (
        <p className="social-note" role="status">
          Номер {maxPhone} скопирован — найдите нас в MAX
        </p>
      ) : null}
    </div>
  );
}
