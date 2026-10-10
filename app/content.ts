// Типизированный доступ к контенту из папки content/ (его правит админка /admin).
import aboutJson from "../content/about.json";
import homeJson from "../content/home.json";
import loyaltyJson from "../content/loyalty.json";
import mastersJson from "../content/masters.json";
import servicesJson from "../content/services.json";
import worksJson from "../content/works.json";
import promosJson from "../content/promos.json";
import settingsJson from "../content/settings.json";

export type Service = { title: string; duration: string; price: number; from?: boolean };
export type ServiceGroup = { title: string; services: Service[] };
export type Master = {
  name: string;
  role: string;
  photo?: string;
  booking?: string;
  tags?: string[];
  bio?: string;
  quote?: string;
  phrases?: string[];
  works?: string[];
};
export type MasterGroup = { title: string; masters: Master[] };

export const settings = settingsJson as {
  name: string;
  tagline: string;
  description: string;
  contacts: {
    telegram: string;
    whatsapp: string;
    instagram: string;
    phone: string;
    email: string;
    address: string;
    max: string;
    maxPhone: string;
    yandexRating: string;
    yandexMaps: string;
    twoGis: string;
  };
  booking: { scriptSrc: string; href: string; label: string };
};

export const home = homeJson as {
  kicker: string;
  titleLines: string[];
  lede: string;
  manifestoLabel: string;
  manifesto: string;
  principles: { title: string; body: string }[];
  servicesTitle: string;
  worksTitle: string;
  mastersTitle: string;
  ctaTitle: string;
  ctaLede: string;
};

export const about = aboutJson as {
  kicker: string;
  headingPre: string;
  headingEm: string;
  lede: string;
  body: string;
};

export type Work = { image: string; master?: string; category?: string };

export const works = worksJson as {
  kicker: string;
  headingPre: string;
  headingEm: string;
  lede: string;
  items: Work[];
};

export const serviceGroups = servicesJson.groups as ServiceGroup[];
export const masterGroups = mastersJson.groups as MasterGroup[];

export const booking = settings.booking;
export const siteConfig = settings;

export function formatPrice(service: Pick<Service, "price" | "from">): string {
  const value = new Intl.NumberFormat("ru-RU").format(service.price).replace(/ /g, " ");
  return `${service.from ? "от " : ""}${value} ₽`;
}

export function groupMinPrice(group: ServiceGroup): number {
  return Math.min(...group.services.map((service) => service.price));
}

export function servicesCountLabel(count: number): string {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return `${count} услуга`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${count} услуги`;
  return `${count} услуг`;
}

const translit: Record<string, string> = {
  а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "e", ж: "zh", з: "z", и: "i", й: "y", к: "k", л: "l",
  м: "m", н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f", х: "kh", ц: "ts", ч: "ch", ш: "sh",
  щ: "shch", ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya"
};

export function slugify(name: string): string {
  const value = name
    .toLowerCase()
    .split("")
    .map((ch) => translit[ch] ?? ch)
    .join("")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return value || "master";
}

export type MasterWithMeta = Master & { slug: string; group: string };

// Плоский список мастеров со ссылкой (slug) и направлением; одинаковые имена получают суффикс -2, -3…
export const allMasters: MasterWithMeta[] = (() => {
  const used = new Map<string, number>();
  return masterGroups.flatMap((group) =>
    group.masters.map((master) => {
      const base = slugify(master.name);
      const count = (used.get(base) ?? 0) + 1;
      used.set(base, count);
      return { ...master, slug: count === 1 ? base : `${base}-${count}`, group: group.title };
    })
  );
})();

// Картинка мастера — только его личное фото. Работы мастера сюда не подставляются.
export function masterImage(master: Pick<Master, "photo">): string | undefined {
  return master.photo || undefined;
}

export type WorkItem = { image: string; master?: string; slug?: string; category?: string };

// Все фото работ: сначала фото мастеров (по кругу, чтобы мастера чередовались), затем общие.
export const allWorks: WorkItem[] = (() => {
  const perMaster = allMasters.map((master) =>
    (master.works ?? [])
      .filter(Boolean)
      .map((image) => ({ image, master: master.name, slug: master.slug, category: master.group }))
  );
  const mixed: WorkItem[] = [];
  const longest = Math.max(0, ...perMaster.map((list) => list.length));
  for (let i = 0; i < longest; i += 1) {
    for (const list of perMaster) if (list[i]) mixed.push(list[i] as WorkItem);
  }
  return [...mixed, ...works.items.filter((item) => item.image)];
})();

// Акция — это картинка (афиша). Название и срок необязательны.
// until — последний день действия (YYYY-MM-DD): на следующий день акция сама попадает в архив.
export type Promo = {
  image: string;
  title?: string;
  until?: string;
  archived?: boolean;
};

export const promos = ((promosJson.items ?? []) as unknown as Promo[]).filter((promo) => promo.image);

export const loyalty = loyaltyJson as {
  label: string;
  title: string;
  cashbackTitle: string;
  tiers: { percent: string; condition: string }[];
  perks: { title: string; value: string; text: string }[];
  rules: string[];
};
