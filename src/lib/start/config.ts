export const HERO_HEADLINES = {
  1: "Сколько денег вы уже слили на рекламу?",
  2: "Показы есть. Клиентов нет?",
  3: "Люди доверяют людям. Не рекламе.",
  4: "Зарабатывайте на статусах в соцсетях",
} as const;

export type HeadlineVariant = keyof typeof HERO_HEADLINES;

export const STICKY_BANNERS = {
  free: "🚀 Регистрация на платформе бесплатна",
  task: "🚀 Запустите первое задание от 2500 ₽",
  earn: "💰 От ~1000 ₽ в день — выкладывайте статусы и зарабатывайте",
} as const;

export type StickyVariant = keyof typeof STICKY_BANNERS;

export const PLACEMENT_PRICE = 250;
export const PLACEMENT_PRICE_LABEL = "до 250 ₽";

export const PLATFORM_METRICS = {
  viewsMin: 100,
  viewsMax: 200,
  clicksTypical: 3,
  pricePerTask: 250,
  viewsContext: "статус в WhatsApp и мессенджерах",
} as const;

export const EXECUTOR_EARNINGS = {
  noviceDaily: 1000,
  topFrom: 100_000,
  topLabel: "100 000+",
} as const;

export const STATUS_LEVELS = [
  { emoji: "🟢", name: "Novice", label: "Старт", earnings: "~1000 ₽/день" },
  {
    emoji: "🔵",
    name: "Verified",
    label: "Верификация",
    earnings: "Больше заданий",
  },
  {
    emoji: "🟣",
    name: "Referral+",
    label: "Активность",
    earnings: "Выше оплата",
  },
  { emoji: "🔶", name: "Top", label: "Максимум", earnings: "от 100 000 ₽+" },
] as const;

export const MAIN_SITE_URL = "https://lid-gen.pro";

export const CALCULATOR_STEPS = [10, 20, 50, 100] as const;

export const BUSINESS_PATH = {
  id: "business",
  badge: "Для бизнеса",
  title: "У меня бизнес",
  subtitle: "Нужны клиенты — без слива бюджета на рекламу",
  bullets: [
    "Создаёте задание за 2 минуты",
    "Люди рекомендуют вас в соцсетях",
    "Платите только за размещения",
  ],
  cta: "Получить клиентов",
} as const;

export const EXECUTOR_PATH = {
  id: "executor",
  badge: "Для исполнителей",
  title: "Хочу зарабатывать",
  subtitle: "От ~1000 ₽ в день — просто статусы в мессенджерах и соцсетях",
  bullets: [
    "Выкладываете статусы — получаете оплату",
    "На старте ~1000 ₽ в день",
    "С ростом уровня — от 100 000 ₽ и выше",
  ],
  cta: "Начать зарабатывать",
} as const;

export const PAIN_CARDS = [
  "Платите за рекламу",
  "Получаете показы",
  "Получаете клики",
  "Но клиентов всё нет",
] as const;

export const PROBLEM_CARDS = [
  "Реклама дорожает",
  "Люди устали от рекламы",
  "Стоимость клиента растёт",
  "Доверие к рекламе падает",
] as const;

export const BUSINESS_STEPS = [
  { step: 1, title: "Создаёте задание", icon: "task" as const },
  { step: 2, title: "Исполнители берут его", icon: "users" as const },
  { step: 3, title: "Получаете охват и доверие", icon: "eye" as const },
  { step: 4, title: "Платите только за результат", icon: "payment" as const },
] as const;

export const EXECUTOR_STEPS = [
  { step: 1, title: "Регистрируетесь бесплатно", icon: "users" as const },
  { step: 2, title: "Выбираете задание", icon: "task" as const },
  { step: 3, title: "Выкладываете статус в соцсеть", icon: "share" as const },
  { step: 4, title: "Получаете оплату на счёт", icon: "payment" as const },
] as const;

export const BENEFITS = [
  "Реальные рекомендации — не боты",
  "Антифрод и уникальный QR-код",
  "Дополнительный охват",
  "Доверие аудитории",
  "Понятная статистика",
  "Никаких агентств",
  "Быстрый запуск",
] as const;

export const ANTIFRAUD_FEATURES = [
  {
    icon: "🔐",
    title: "Уникальный QR-код",
    text: "У каждого размещения свой QR-код. Подделать или накрутить нельзя — система видит оригинал.",
    accent: true,
  },
  {
    icon: "🛡️",
    title: "Антифрод-система",
    text: "Встроенные проверки отсекают ботов и фейковые аккаунты до начисления оплаты.",
    accent: true,
  },
  {
    icon: "✅",
    title: "Проверка размещений",
    text: "Каждая публикация проходит проверку: ссылка, формат, соответствие заданию.",
    accent: false,
  },
  {
    icon: "👤",
    title: "Только живые люди",
    text: "Рекомендации пишут обычные пользователи со своих аккаунтов — не накрутка.",
    accent: false,
  },
] as const;

export const EXECUTOR_BENEFITS = [
  "~1000 ₽ в день на старте",
  "От 100 000 ₽ и выше на Top-уровне",
  "Статусы в мессенджерах и соцсетях",
  "Свободный график, из дома",
  "Без вложений и абонентки",
  "Задания до 250 ₽ каждое",
] as const;

export const STATS_BAR = [
  { value: "100–200", label: "просмотров статуса", accent: true },
  { value: "~3", label: "перехода в среднем", accent: true },
  { value: "2500 ₽", label: "старт — 10 размещений", accent: false },
  { value: "0 ₽", label: "регистрация", accent: false },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Запустили 10 размещений — люди реально рекомендуют, а не просто кликают по баннеру.",
    role: "Владелец кафе",
    type: "Заказчик",
  },
  {
    quote:
      "Выкладываю статусы в WhatsApp между делом. На старте выходит около тысячи в день.",
    role: "Исполнитель",
    type: "Novice → Verified",
  },
  {
    quote:
      "Наконец понятно, за что плачу. Вижу каждое размещение и статистику в кабинете.",
    role: "Салон красоты",
    type: "Заказчик",
  },
] as const;

export const AUDIENCE_ITEMS = [
  { name: "Кафе", icon: "☕", result: "Заполняемость, сарафан" },
  { name: "Рестораны", icon: "🍽️", result: "Брони и отзывы" },
  { name: "Салоны красоты", icon: "💇", result: "Новые записи" },
  { name: "Автосервисы", icon: "🔧", result: "Доверие соседей" },
  { name: "Строительство", icon: "🏗️", result: "Рекомендации знакомым" },
  { name: "Магазины", icon: "🛍️", result: "Локальный охват" },
  { name: "Логистика", icon: "🚚", result: "B2B-рекомендации" },
  { name: "Онлайн-бизнес", icon: "💻", result: "Переходы на сайт" },
  { name: "Услуги", icon: "📋", result: "Живые отзывы" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Что такое LidGen?",
    answer:
      "LidGen — платформа, где компании создают задания, а обычные пользователи размещают рекомендации в соцсетях. Компания получает внимание и доверие, пользователь — оплату.",
  },
  {
    question: "Это законно?",
    answer:
      "Да. Пользователи размещают честные рекомендации от своего имени. Компания платит только за выполненные размещения по правилам платформы.",
  },
  {
    question: "Кто размещает рекомендации?",
    answer:
      "Обычные пользователи с аккаунтами в соцсетях. Это не боты и не накрутка — живые люди рекомендуют бизнес своим друзьям и знакомым.",
  },
  {
    question: "Как вы защищаетесь от ботов?",
    answer:
      "На платформе встроен антифрод: уникальный QR-код на каждое размещение, автоматические и ручные проверки публикаций. Боты и фейковые размещения не проходят — оплата только за подтверждённый результат.",
  },
  {
    question: "Как начисляется оплата?",
    answer:
      "После проверки размещения оплата начисляется исполнителю. Компания платит только за выполненные задания, без скрытых комиссий и абонентской платы.",
  },
  {
    question: "Как создать задание?",
    answer:
      "Зарегистрируйтесь, укажите данные компании и создайте задание за пару минут. Первое задание можно запустить сразу после входа.",
  },
  {
    question: "Сколько стоит размещение?",
    answer:
      "До 250 ₽ за одно размещение. Минимальный запуск — 10 размещений за 2500 ₽. Без ежемесячных платежей. Статистика по каждому размещению — в личном кабинете.",
  },
  {
    question: "Какой результат от одного размещения?",
    answer:
      "Статус в WhatsApp и других мессенджерах реально видят 100–200 человек. По опыту размещений — около 3 переходов на бизнес с одной рекомендации. Это живой сарафан, не рекламный баннер. Просмотры и переходы фиксируются в личном кабинете.",
  },
  {
    question: "Сколько можно заработать исполнителю?",
    answer:
      "На старте — около 1000 ₽ в день. С ростом уровня (Verified, Referral+, Top) — от 100 000 ₽ и выше, потолка нет. Просто выкладываете статусы в WhatsApp, Telegram и других соцсетях.",
  },
  {
    question: "Как начать работать?",
    answer:
      "Нажмите «Получить клиентов» для бизнеса или «Начать зарабатывать» для исполнителей. Регистрация занимает меньше минуты.",
  },
] as const;

export const REGISTER_URLS = {
  business: `${MAIN_SITE_URL}/auth/signup/customer`,
  executor: `${MAIN_SITE_URL}/auth/signup/executor`,
} as const;

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
