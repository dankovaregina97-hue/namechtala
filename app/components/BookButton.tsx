import { booking } from "../site-config";

// Ссылка-триггер виджета DIKIDI: скрипт из layout перехватывает клик по
// ссылкам вида dikidi.ru/#widget=... и открывает окно записи поверх сайта.
// Если скрипт не загрузился, ссылка просто откроет запись на dikidi.ru в новой вкладке.
export function BookButton({ solid = true, className = "" }: { solid?: boolean; className?: string }) {
  return (
    <a
      className={`btn${solid ? " btn-solid" : ""}${className ? ` ${className}` : ""}`}
      href={booking.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {booking.label}
    </a>
  );
}
