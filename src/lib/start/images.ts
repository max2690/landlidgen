export type LandingImageSlot = {
  src: string | null;
  alt: string;
  label: string;
  hint: string;
  filename: string;
  width: number;
  height: number;
};

/** Телефон 9:19 — 540×1140. Широкие — до 1400px. Без текста на изображениях. */
export const LANDING_IMAGES = {
  mainHero: {
    src: "/start/main-hero-visual.webp",
    alt: "LidGen — платформа рекомендаций людей для бизнеса",
    label: "Hero",
    hint: "Общий визуал платформы",
    filename: "main-hero-visual.webp",
    width: 1400,
    height: 600,
  },
  cabinetTask: {
    src: "/start/cabinet-task.webp",
    alt: "Карточка задания в личном кабинете LidGen",
    label: "Кабинет бизнеса",
    hint: "Скрин карточки задания",
    filename: "cabinet-task.webp",
    width: 540,
    height: 1140,
  },
  cabinetStats: {
    src: "/start/cabinet-stats.webp",
    alt: "Статистика размещения в личном кабинете",
    label: "Статистика",
    hint: "Просмотры и переходы",
    filename: "cabinet-stats.webp",
    width: 960,
    height: 540,
  },
  socialStatus: {
    src: "/start/social-status.webp",
    alt: "Рекомендация в статусе WhatsApp",
    label: "Статус в соцсети",
    hint: "Статус-рекомендация в мессенджере",
    filename: "social-status.webp",
    width: 540,
    height: 1140,
  },
  taskFeed: {
    src: "/start/task-feed.webp",
    alt: "Лента заданий для исполнителя",
    label: "Задания исполнителя",
    hint: "Список заданий до 250 ₽",
    filename: "task-feed.webp",
    width: 960,
    height: 540,
  },
  levelCards: {
    src: "/start/level-cards.webp",
    alt: "Уровни исполнителя: Novice, Verified, Referral+, Top",
    label: "Уровни и рост",
    hint: "Карточки уровней",
    filename: "level-cards.webp",
    width: 960,
    height: 540,
  },
  antifraudQr: {
    src: "/start/antifraud-qr.webp",
    alt: "Уникальный QR-код и антифрод-проверка LidGen",
    label: "Антифрод",
    hint: "QR-код и защита от ботов",
    filename: "antifraud-qr.webp",
    width: 540,
    height: 1140,
  },
  livePeopleHero: {
    src: "/start/live-people-hero.webp",
    alt: "Живые люди рекомендуют бизнес — не боты и не накрутка",
    label: "Живые люди",
    hint: "Продающий баннер: люди vs боты",
    filename: "live-people-hero.webp",
    width: 1200,
    height: 630,
  },
} as const satisfies Record<string, LandingImageSlot>;

export type LandingImageKey = keyof typeof LANDING_IMAGES;
