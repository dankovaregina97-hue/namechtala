// Прайс для страницы /services/. Цены и длительность взяты из каталога услуг DIKIDI.
// "from: true" — цена указана «от».
export type Service = {
  title: string;
  duration: string;
  price: number;
  from?: boolean;
};

export type ServiceGroup = {
  title: string;
  services: Service[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Маникюр",
    services: [
      { title: "Маникюр без покрытия", duration: "от 40 мин", price: 1400 },
      { title: "Маникюр без покрытия VIP-мастер", duration: "30 мин", price: 1600 },
      { title: "Маникюр без покрытия (новичок)", duration: "2 ч", price: 900 },
      { title: "Маникюр с однотонным покрытием", duration: "от 1 ч", price: 1800 },
      { title: "Маникюр с покрытием лечебный лак", duration: "от 40 мин", price: 1600 },
      { title: "Маникюр с покрытием лечебный лак VIP-мастер", duration: "1 ч", price: 1800 },
      { title: "Японский маникюр", duration: "1 ч", price: 1400, from: true },
      { title: "Японский маникюр VIP-мастер", duration: "1 ч", price: 1900 },
      { title: "Мужской маникюр", duration: "1 ч", price: 1600 },
      { title: "Детский маникюр", duration: "30 мин", price: 700 },
      { title: "Покрытие обычным лаком", duration: "20 мин", price: 200 },
      { title: "Сет 1 (новичок)", duration: "3 ч", price: 1500 },
      { title: "Сет 1 мастер (маникюр + покрытие базой/гелем)", duration: "от 1 ч", price: 2200 },
      { title: "Сет 1 VIP-мастер", duration: "1 ч 30 мин", price: 2700 },
      { title: "Сет 2 (маникюр + френч) VIP-мастер", duration: "1 ч 30 мин", price: 3200 }
    ]
  },
  {
    title: "Наращивание и коррекция ногтей",
    services: [
      { title: "Наращивание ногтей", duration: "от 1 ч 30 мин", price: 3500, from: true },
      { title: "Коррекция наращивания ногтей", duration: "от 1 ч 30 мин", price: 2700, from: true },
      { title: "Наращивание ногтя", duration: "от 15 мин", price: 200, from: true },
      { title: "Ремонт ногтя", duration: "от 15 мин", price: 150 },
      { title: "Бондирование ногтей", duration: "1 ч", price: 2200 },
      { title: "Бондирование ногтей VIP-мастер", duration: "1 ч", price: 2700 },
      { title: "Коррекция нарощенных ногтей VIP-мастер", duration: "2 ч", price: 3000 },
      { title: "Снятие наращивания", duration: "от 20 мин", price: 300 },
      { title: "Снятие покрытия", duration: "от 20 мин", price: 500 }
    ]
  },
  {
    title: "Дизайн и дополнения",
    services: [
      { title: "Дизайн простой", duration: "5 мин", price: 50, from: true },
      { title: "Дизайн", duration: "10 мин", price: 100, from: true },
      { title: "Дизайн втирка/стемпинг", duration: "20 мин", price: 300 },
      { title: "Дизайн френч", duration: "от 20 мин", price: 500 },
      { title: "Френч цветной", duration: "5 мин", price: 500 },
      { title: "Лучи", duration: "5 мин", price: 200 },
      { title: "Мокрый эффект", duration: "5 мин", price: 200 },
      { title: "Парафинотерапия", duration: "15 мин", price: 300 }
    ]
  },
  {
    title: "Педикюр",
    services: [
      { title: "Педикюр без покрытия (пальчики)", duration: "от 30 мин", price: 1700 },
      { title: "Педикюр без покрытия (пальчики) VIP-мастер", duration: "40 мин", price: 1900 },
      { title: "Педикюр с покрытием (пальчики)", duration: "от 1 ч", price: 2400 },
      { title: "Педикюр с покрытием (пальчики) VIP-мастер", duration: "1 ч", price: 2700 },
      { title: "SMART педикюр без покрытия", duration: "от 40 мин", price: 2000 },
      { title: "SMART педикюр без покрытия VIP-мастер", duration: "1 ч", price: 2200 },
      { title: "SMART педикюр с покрытием", duration: "от 1 ч", price: 2700 },
      { title: "SMART педикюр с покрытием VIP-мастер", duration: "1 ч 30 мин", price: 3000 },
      { title: "Японский педикюр (пальчики)", duration: "1 ч", price: 2000 },
      { title: "Японский педикюр (пальчики) VIP-мастер", duration: "1 ч", price: 2200 },
      { title: "Японский педикюр полный SMART", duration: "1 ч", price: 2200 },
      { title: "Японский педикюр полный SMART VIP-мастер", duration: "1 ч 15 мин", price: 2400 },
      { title: "Мужской педикюр (пальчики)", duration: "1 ч", price: 1700 }
    ]
  },
  {
    title: "Ресницы",
    services: [
      { title: "Наращивание, эффект классика", duration: "1 ч 20 мин", price: 2100 },
      { title: "Наращивание, эффект 1.5D", duration: "1 ч 30 мин", price: 2200 },
      { title: "Наращивание, эффект 2D", duration: "2 ч", price: 2300 },
      { title: "Наращивание, эффект 2,5D", duration: "2 ч 30 мин", price: 2400 },
      { title: "Наращивание, эффект 3D", duration: "3 ч", price: 2500 },
      { title: "Наращивание уголков", duration: "1 ч 20 мин", price: 1300 },
      { title: "Коррекция наращивания", duration: "1 ч 30 мин", price: 1300 },
      { title: "Снятие нарощенных ресниц", duration: "30 мин", price: 500 },
      { title: "Ламинирование ресниц", duration: "40 мин", price: 2200 },
      { title: "Окрашивание ресниц", duration: "10 мин", price: 400 },
      { title: "Коричневые ресницы", duration: "5 мин", price: 200 }
    ]
  },
  {
    title: "Брови",
    services: [
      { title: "Оформление бровей", duration: "30 мин", price: 700 },
      { title: "Оформление + окрашивание", duration: "40 мин", price: 1500 },
      { title: "Долговременная укладка / осветление бровей", duration: "30 мин", price: 1600 },
      { title: "Окрашивание + долговременная укладка", duration: "40 мин", price: 2000 },
      { title: "Оформление + долговременная укладка", duration: "30 мин", price: 2000 },
      { title: "Оформление + окрашивание + долговременная укладка", duration: "1 ч", price: 2200 }
    ]
  },
  {
    title: "Эпиляция",
    services: [
      { title: "Ваксинг", duration: "30 мин", price: 300, from: true },
      { title: "Ваксинг над губой", duration: "5 мин", price: 300 },
      { title: "Лазерная эпиляция, комплекс S (подмышки, глубокое бикини)", duration: "45 мин", price: 3000 },
      { title: "Лазерная эпиляция, комплекс M (подмышки, глубокое бикини, голени)", duration: "1 ч", price: 4000 },
      { title: "Лазерная эпиляция, комплекс L (подмышки, глубокое бикини, полностью ноги)", duration: "2 ч", price: 5500 },
      { title: "Лазерная эпиляция, комплекс XL (подмышки, глубокое бикини, ноги полностью, руки полностью)", duration: "3 ч", price: 6800 }
    ]
  },
  {
    title: "Косметология",
    services: [
      { title: "Поверхностный пилинг лица", duration: "1 ч", price: 1500 },
      { title: "Ультразвуковая чистка лица", duration: "1 ч", price: 2000 },
      { title: "Комбинированная чистка лица", duration: "2 ч", price: 3000 },
      { title: "Массаж лица", duration: "1 ч", price: 3000 },
      { title: "Биоревитализация зоны вокруг глаз", duration: "1 ч", price: 3000, from: true },
      { title: "Биоревитализация лица", duration: "1 ч", price: 5000, from: true },
      { title: "Биоревитализация шеи и декольте", duration: "1 ч", price: 5000, from: true },
      { title: "Биоревитализация зоны вокруг глаз, лицо полностью, шея и декольте", duration: "2 ч", price: 10000, from: true },
      { title: "Бланширование", duration: "1 ч", price: 5000, from: true },
      { title: "Липолитик", duration: "1 ч", price: 11000, from: true },
      { title: "Мезотерапия кожи головы", duration: "1 ч", price: 3000 }
    ]
  }
];

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
