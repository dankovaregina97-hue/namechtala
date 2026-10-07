// Типизированный доступ к контенту из папки content/ (его правит админка /admin).
import aboutJson from "../content/about.json";
import homeJson from "../content/home.json";
import mastersJson from "../content/masters.json";
import servicesJson from "../content/services.json";
import settingsJson from "../content/settings.json";

export type Service = { title: string; duration: string; price: number; from?: boolean };
export type ServiceGroup = { title: string; services: Service[] };
export type Master = { name: string; role: string; photo?: string };
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
    yandexMaps: string;
    twoGis: string;
  };
  booking: { scriptSrc: string; href: string; label: string };
};

export const home = homeJson as {
  kicker: string;
  titlePre: string;
  titleEm: string;
  lede: string;
  approachKicker: string;
  approachPre: string;
  approachEm: string;
  principles: { title: string; body: string }[];
  servicesKicker: string;
  servicesPre: string;
  servicesEm: string;
  ctaPre: string;
  ctaEm: string;
  ctaLede: string;
};

export const about = aboutJson as {
  kicker: string;
  headingPre: string;
  headingEm: string;
  lede: string;
  body: string;
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
