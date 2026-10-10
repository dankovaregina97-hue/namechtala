import { settings } from "../content";

// Значок рейтинга организации из Яндекс Бизнеса. Номер организации задаётся в админке (Контакты и настройки).
export function YandexRating({ className = "" }: { className?: string }) {
  const id = settings.contacts.yandexRating;
  if (!id) return null;
  return (
    <div className={`yandex-rating ${className}`.trim()}>
      <iframe
        src={`https://yandex.ru/sprav/widget/rating-badge/${id}?type=alt`}
        width={150}
        height={50}
        title="Рейтинг на Яндекс Картах"
        loading="lazy"
        style={{ border: 0 }}
      />
    </div>
  );
}
