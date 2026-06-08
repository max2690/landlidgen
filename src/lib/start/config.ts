export const HERO_HEADLINES = {
  1: "Сколько денег вы уже слили на рекламу?",
  2: "Показы есть. Клиентов нет?",
  3: "Люди доверяют людям. Не рекламе.",
  4: "Зарабатывайте на рекомендациях в соцсетях",
} as const;

export type HeadlineVariant = keyof typeof HERO_HEADLINES;

export const HERO_HOOK = "Показы есть. Клики есть. Продаж нет?" as const;

export const HERO_DESCRIPTION =
  "LidGen помогает бизнесу получать клиентов через рекомендации реальных людей, а исполнителям — зарабатывать на размещениях в соцсетях." as const;

export const STICKY_BANNERS = {
  free: "🚀 Регистрация на платформе бесплатна",
  task: "🚀 Запустите первое задание от 2500 ₽",
  earn: "💰 Зарабатывайте на размещениях в соцсетях",
} as const;

export type StickyVariant = keyof typeof STICKY_BANNERS;

export const PLACEMENT_PRICE = 250;
export const PLACEMENT_PRICE_LABEL = "до 250 ₽";

export const PLATFORM_METRICS = {
  viewsMin: 100,
  viewsMax: 200,
  pricePerTask: 250,
} as const;

export const MAIN_SITE_URL = "https://lid-gen.pro";

export const SIGNUP_URLS = {
  business: `${MAIN_SITE_URL}/auth/signup/customer`,
  executor: `${MAIN_SITE_URL}/auth/signup/executor`,
} as const;

/** Локальные маршруты прокладки → редирект на lid-gen.pro */
export const REGISTER_URLS = {
  business: "/register/business",
  executor: "/register/user",
} as const;

export const BUSINESS_PATH = {
  id: "business",
  badge: "Для бизнеса",
  title: "У меня бизнес",
  subtitle: "Нужны клиенты без слива бюджета на рекламу",
  bullets: [
    "Создаёте задание за 2 минуты",
    "Люди рекомендуют вас в соцсетях",
    "Платите только за выполненные размещения",
  ],
  cta: "Получить клиентов",
} as const;

export const EXECUTOR_PATH = {
  id: "executor",
  badge: "Для исполнителей",
  title: "Хочу зарабатывать",
  subtitle: "Получайте оплату за размещения в соцсетях",
  bullets: [
    "Берёте задания",
    "Публикуете рекомендации",
    "Получаете оплату после проверки",
  ],
  cta: "Начать зарабатывать",
  incomeNote:
    "Доход растёт с уровнем и количеством выполненных заданий.",
} as const;

export const PAIN_CARDS = [
  "Платите за рекламу",
  "Получаете показы",
  "Получаете клики",
  "Но клиентов всё нет",
] as const;

export const PAIN_CLOSER =
  "LidGen работает иначе: бизнес платит за реальные размещения, а не за пустые показы." as const;

export const PLATFORM_STEPS = [
  {
    step: 1,
    title: "Компания создаёт задание",
    short: "Задание",
  },
  {
    step: 2,
    title: "Исполнители выбирают задание",
    short: "Выбор",
  },
  {
    step: 3,
    title: "Публикуют рекомендацию в соцсетях или мессенджерах",
    short: "Размещение",
  },
  {
    step: 4,
    title: "Платформа проверяет размещение",
    short: "Проверка",
  },
  {
    step: 5,
    title: "Бизнес видит статистику, исполнитель получает оплату",
    short: "Результат",
  },
] as const;

export const ANTIFRAUD_FEATURES = [
  {
    icon: "🔐",
    title: "Уникальный QR-код",
    text: "У каждого размещения свой код — подделать накрутку сложнее.",
    accent: true,
  },
  {
    icon: "🛡️",
    title: "Антифрод-система",
    text: "Проверки отсекают ботов и фейковые аккаунты.",
    accent: true,
  },
  {
    icon: "✅",
    title: "Проверка размещений",
    text: "Ссылка, формат и соответствие заданию — перед оплатой.",
    accent: false,
  },
  {
    icon: "👤",
    title: "Только реальные пользователи",
    text: "Рекомендации от живых людей со своих аккаунтов.",
    accent: false,
  },
] as const;

export const STATS_BAR = [
  { value: "0 ₽", label: "регистрация", accent: false },
  { value: "2500 ₽", label: "старт для бизнеса — 10 размещений", accent: true },
  {
    value: "100–200",
    label: "просмотров одного размещения",
    accent: true,
  },
  { value: "до 250 ₽", label: "оплата за одно задание исполнителю", accent: false },
] as const;

export const AD_CONS = [
  "Дорого",
  "Много шума",
  "Люди не доверяют баннерам",
  "Деньги списываются за клики",
] as const;

export const LIDGEN_PROS = [
  "Рекомендации от реальных людей",
  "Оплата за выполненные размещения",
  "Понятная статистика",
  "Можно начать с 2500 ₽",
] as const;

export const PRICING_POINTS = [
  { value: "0 ₽", label: "регистрация" },
  { value: "2500 ₽", label: "10 размещений" },
  { value: "до 250 ₽", label: "одно размещение" },
  { value: "0 ₽", label: "абонентская плата" },
] as const;

export const EXECUTOR_BENEFITS = [
  "Без вложений",
  "Свободный график",
  "Задания до 250 ₽",
  "Доход зависит от активности и уровня аккаунта",
] as const;

export const USE_SCENARIOS = [
  {
    title: "Кафе",
    text: "Запускает 10 размещений, чтобы получить локальный охват и первые переходы.",
  },
  {
    title: "Исполнитель",
    text: "Берёт задания и публикует рекомендации в своих соцсетях.",
  },
  {
    title: "Салон красоты",
    text: "Получает дополнительные касания через рекомендации клиентов.",
  },
] as const;

export const AUDIENCE_ITEMS = [
  { name: "Кафе", icon: "☕" },
  { name: "Рестораны", icon: "🍽️" },
  { name: "Салоны красоты", icon: "💇" },
  { name: "Автосервисы", icon: "🔧" },
  { name: "Магазины", icon: "🛍️" },
  { name: "Строительство", icon: "🏗️" },
  { name: "Услуги", icon: "📋" },
  { name: "Онлайн-бизнес", icon: "💻" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Что такое LidGen?",
    answer:
      "LidGen — платформа, где компании создают задания на размещение рекомендаций, а пользователи выполняют эти задания и получают оплату.",
  },
  {
    question: "Это законно?",
    answer:
      "Пользователи самостоятельно создают публикации в формате личных рекомендаций. Для специальных рекламных форматов в будущем может использоваться маркировка через ОРД.",
  },
  {
    question: "Кто размещает рекомендации?",
    answer:
      "Обычные пользователи платформы, которые прошли регистрацию и выполняют задания.",
  },
  {
    question: "Как защищаетесь от ботов?",
    answer:
      "Используются уникальные QR-коды, проверка ссылок, формата размещения и антифрод-механизмы.",
  },
  {
    question: "Как начисляется оплата?",
    answer:
      "После выполнения задания размещение проверяется. Если оно соответствует условиям, исполнитель получает оплату.",
  },
  {
    question: "Сколько стоит размещение?",
    answer:
      "Стоимость зависит от задания. Для бизнеса стартовый пакет — 10 размещений за 2500 ₽.",
  },
  {
    question: "Какой результат от одного размещения?",
    answer:
      "Результат зависит от аудитории исполнителя, оффера бизнеса и качества рекомендации. В кабинете отображаются просмотры, переходы и статистика.",
  },
  {
    question: "Как начать?",
    answer:
      'Выберите путь: «Для бизнеса» или «Заработать», зарегистрируйтесь и следуйте шагам в кабинете.',
  },
] as const;

export function resolveHeadlineVariant(
  param?: string,
  envDefault?: string,
): HeadlineVariant {
  const fromParam = param ? Number(param) : NaN;
  if (fromParam === 1 || fromParam === 2 || fromParam === 3 || fromParam === 4) {
    return fromParam;
  }

  const fromEnv = envDefault ? Number(envDefault) : NaN;
  if (fromEnv === 1 || fromEnv === 2 || fromEnv === 3 || fromEnv === 4) {
    return fromEnv;
  }

  return 1;
}

export function resolveStickyVariant(
  param?: string,
  envDefault?: string,
): StickyVariant {
  if (param === "free" || param === "task" || param === "earn") return param;
  if (envDefault === "free" || envDefault === "task" || envDefault === "earn")
    return envDefault;
  return "free";
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("ru-RU").format(amount) + " ₽";
}
