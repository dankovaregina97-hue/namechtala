import { booking } from "../content";

// Ссылка-триггер виджета DIKIDI: скрипт из layout перехватывает клик по ссылкам вида dikidi.ru/#widget=...
// и открывает окно записи поверх сайта. Если скрипт не загрузился, ссылка откроет запись в новой вкладке.
export function BookButton({ solid = true, className = "" }: { solid?: boolean; className?: string }) {
  return (
    <a
      className={`btn${solid ? " btn-solid" : ""}${className ? ` ${className}` : ""}`}
      href={booking.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{booking.label}</span>
    </a>
  );
}

// Крупная текстовая ссылка на запись (для блока с призывом)
export function BookLink({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <a className={className} href={booking.href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
