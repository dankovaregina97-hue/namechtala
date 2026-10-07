// Список мастеров для страницы /masters/. Фото кладите в public/masters/ и
// указывайте в поле photo, например "/masters/milena.jpg".
export type Master = {
  name: string;
  role: string;
  photo?: string;
};

export type MasterGroup = {
  title: string;
  masters: Master[];
};

export const masterGroups: MasterGroup[] = [
  {
    title: "Ногтевой сервис",
    masters: [
      { name: "Милена", role: "Мастер ногтевого сервиса" },
      { name: "Дарья", role: "Мастер ногтевого сервиса" },
      { name: "Лия", role: "Мастер ногтевого сервиса" },
      { name: "Виктория", role: "Мастер ногтевого сервиса" },
      { name: "Динара", role: "Мастер ногтевого сервиса" },
      { name: "Алсу", role: "Мастер ногтевого сервиса" },
      { name: "Аида", role: "VIP мастер ногтевого сервиса" },
      { name: "Виктория Г.", role: "Мастер маникюра и педикюра" }
    ]
  },
  {
    title: "Ресницы",
    masters: [
      { name: "Юлдуз", role: "Лешмейкер" },
      { name: "Елена", role: "Мастер по ламинированию ресниц" }
    ]
  },
  {
    title: "Лазерная эпиляция и косметология",
    masters: [
      { name: "Ляйсан", role: "Мастер по лазерной эпиляции и косметологии" },
      { name: "Регина", role: "Мастер по лазерной эпиляции" }
    ]
  },
  {
    title: "Мастера",
    masters: [{ name: "Данил", role: "Мастер" }]
  }
];
