export const ACCENT_PHRASE =
  "Вы платите за проверенные размещения, а не за обещания." as const;

export const HERO_HEADLINES = {
  1: "Сколько денег уходит на рекламу без заявок?",
  2: "Показы есть. Клиентов нет?",
  3: "Люди доверяют людям. Не баннерам.",
  4: "Зарабатывайте на рекомендациях в соцсетях",
} as const;

export type HeadlineVariant = keyof typeof HERO_HEADLINES;

export const HERO_VARIANTS = {
  1: {
    hook: "Деньги уходят на рекламу — а новых клиентов не прибавляется?",
    description:
      "LidGen запускает рекомендации в Stories и мессенджерах. Каждое размещение видно в кабинете.",
  },
  2: {
    hook: "Каждый месяц бизнес тратит деньги на рекламу, получает показы и клики, но не всегда получает новых клиентов.",
    description:
      "LidGen помогает получать внимание через рекомендации реальных людей в соцсетях и мессенджерах.",
  },
  3: {
    hook: "Stories смотрят знакомые того, кто выложил — не случайные люди из таргета.",
    description:
      "Рекомендации уходят в круг подписчиков исполнителя. Оплата — только после проверки.",
  },
  4: {
    hook: "Публикуйте рекомендации у себя и получайте оплату после проверки.",
    description:
      "Задания от компаний в вашем регионе. Старт без вложений — только ваш аккаунт.",
  },
} as const;

export const HERO_TRUST_POINTS = [
  "Регистрация бесплатна",
  "Запуск занимает несколько минут",
  "Только реальные пользователи",
  "Без агентств и абонентской платы",
] as const;

export const STICKY_BANNERS = {
  free: "🚀 Регистрация бесплатна — запуск задания в кабинете",
  task: "🚀 Рекомендации в Stories и ленте — условия при регистрации",
  earn: "💰 Публикуйте рекомендации и получайте оплату после проверки",
} as const;

export type StickyVariant = keyof typeof STICKY_BANNERS;

export const CTA = {
  business: "Запустить рекомендации",
  businessClients: "Получить клиентов",
  businessFrom2500: "Запустить рекомендации от 2500 ₽",
  businessHow: "Как это работает",
  businessLaunch: "Запустить первое задание",
  businessRegister: "Зарегистрироваться бесплатно",
  executor: "Начать зарабатывать",
  executorTasks: "Начать выполнять задания",
} as const;

export const PLACEMENT_PRICE = 250;
export const PLACEMENT_PRICE_LABEL = "до 250 ₽";

export const PLATFORM_METRICS = {
  viewsMin: 100,
  viewsMax: 200,
  pricePerTask: 250,
} as const;

/** Стартовый пакет: 10 размещений за 2500 ₽ */
export const PACKAGE_MATH = {
  price: 2500,
  placements: 10,
  viewsPerPlacement: 200,
  viewsTotal: 2000,
  clicksPerPlacement: 3,
  clicksTotal: 30,
  costPerClick: 83,
  pricePerPlacement: 250,
} as const;

export const MARKET_COMPARE = {
  directCpc: "100–300+ ₽",
  directNote:
    "Клик по баннеру — человек вас не знает и не доверяет рекламному кабинету",
  lidgenNote:
    "Переход из Stories или ленты — после рекомендации человека, которого подписчики знают",
  cheaperChannels: "Таргет, блогеры, агентства",
  cheaperNote:
    "Иногда дешевле по клику, но без личной рекомендации в круге знакомых автора",
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
  subtitle: "Клиенты через рекомендации — не через очередной баннер",
  bullets: [
    "Рекомендации в Stories и мессенджерах",
    "Локальный охват — круг знакомых исполнителя",
    "Оплата после проверки размещения",
  ],
  cta: CTA.business,
} as const;

export const EXECUTOR_PATH = {
  id: "executor",
  badge: "Для исполнителей",
  title: "Хочу зарабатывать",
  subtitle: "Публикуйте рекомендации у себя — оплата после проверки",
  bullets: [
    "Задания от компаний в вашем регионе",
    "Публикация в Stories, статусах, ленте",
    "Оплата на карту после модерации",
  ],
  cta: CTA.executor,
  incomeNote: "Доход зависит от активности — без обещаний «лёгких денег».",
} as const;

export const PAIN_CARDS = [
  "Включаете рекламу",
  "Идут показы и клики",
  "Бюджет тает",
  "А заявок по-прежнему мало",
] as const;

export const PAIN_CLOSER =
  "Баннер видят все подряд. Stories — в основном знакомые того, кто выложил. Это другой тип контакта с аудиторией." as const;

export const TRUST_TRAFFIC_LEAD =
  "Рекомендацию в Stories видят подписчики и знакомые автора — не вся лента подряд, как с баннером." as const;

export const TRUST_TRAFFIC_BENEFITS = [
  {
    icon: "📱",
    title: "Stories и мессенджеры",
    text: "Публикация уходит в круг автора — люди уже знают того, кто выложил.",
    accent: true,
  },
  {
    icon: "🤝",
    title: "Без пометки «Реклама»",
    text: "Личный пост читают иначе, чем объявление в ленте Директа.",
    accent: false,
  },
  {
    icon: "💬",
    title: "Живой язык",
    text: "«Советую», «был недавно» — формат, которому доверяют в соцсетях.",
    accent: false,
  },
  {
    icon: "✅",
    title: "Проверка до оплаты",
    text: "Списание только после модерации — вы видите факт размещения.",
    accent: true,
  },
] as const;

export const LOCAL_BUSINESS_LEAD =
  "Большинству локальных бизнесов нужны люди рядом. Кафе, ресторанам, салонам, автосервисам и магазинам важны рекомендации среди тех, кто реально может прийти." as const;

export const LOCAL_BUSINESS_CLOSER =
  "Вы платите за внимание людей рядом с вашим бизнесом, а не за показы по всей России." as const;

export const LOCAL_BUSINESS_CARDS = [
  {
    icon: "📍",
    title: "Локальный охват",
    text: "Рекомендации видят люди из окружения исполнителей.",
    accent: true,
  },
  {
    icon: "☕",
    title: "Для кафе и ресторанов",
    text: "Важно внимание жителей города, а не показы по всей стране.",
    accent: false,
  },
  {
    icon: "💇",
    title: "Для салонов красоты",
    text: "Люди чаще записываются по рекомендации знакомых.",
    accent: false,
  },
  {
    icon: "🔧",
    title: "Для автосервисов",
    text: "Клиенты доверяют советам друзей и соседей.",
    accent: false,
  },
] as const;

export const ACQUAINTANCE_CIRCLE_LEAD =
  "10 размещений — это не одно объявление. Это:" as const;

export const ACQUAINTANCE_CIRCLE_ITEMS = [
  "10 разных аккаунтов",
  "10 разных аудиторий",
  "10 разных кругов общения",
  "10 разных источников внимания к вашему бизнесу",
] as const;

export const ACQUAINTANCE_CIRCLE_CLOSER =
  "Одна рекомендация может попасть туда, куда обычная реклама никогда не доберётся." as const;

export const TRANSPARENCY_TITLE = "Вы всегда понимаете, за что платите" as const;

export const TRANSPARENCY_LEAD =
  "Никаких чёрных ящиков — каждое действие видно в личном кабинете." as const;

export const TRANSPARENCY_ITEMS = [
  "Кто разместил публикацию",
  "Когда разместил",
  "Статус проверки",
  "Просмотры",
  "Переходы",
  "История размещений",
] as const;

export const PACKAGE_MATH_DISCLAIMER =
  "Вы сами видите результат в личном кабинете. Каждое размещение отображается в статистике. Никаких непонятных отчётов и скрытых цифр." as const;

export const PLATFORM_STEPS = [
  {
    step: 1,
    title: "Вы создаёте задание с текстом и ссылкой",
    short: "Задание",
  },
  {
    step: 2,
    title: "Исполнители берут задание в работу",
    short: "Выбор",
  },
  {
    step: 3,
    title: "Публикуют рекомендацию в Stories, ленте или мессенджере",
    short: "Размещение",
  },
  {
    step: 4,
    title: "Платформа проверяет ссылку, формат и QR",
    short: "Проверка",
  },
  {
    step: 5,
    title: "Вы видите статистику — исполнитель получает оплату",
    short: "Результат",
  },
] as const;

export const ANTIFRAUD_FEATURES = [
  {
    icon: "🔐",
    title: "Уникальный QR-код",
    text: "У каждого размещения свой код — сложнее подменить или накрутить.",
    accent: true,
  },
  {
    icon: "🛡️",
    title: "Антифрод",
    text: "Фильтруем ботов, подозрительные аккаунты и нетипичные паттерны.",
    accent: true,
  },
  {
    icon: "✅",
    title: "Модерация до оплаты",
    text: "Ссылка, скрин и соответствие заданию — только потом списание с баланса.",
    accent: false,
  },
  {
    icon: "👤",
    title: "Живые аккаунты",
    text: "Публикации со своих профилей — не фермы и не накрутка с одного IP.",
    accent: false,
  },
] as const;

export const ANTIFRAUD_LEAD =
  "Рекомендации публикуют реальные люди. Каждое размещение проверяем до оплаты — чтобы вы платили за результат, а не за воздух." as const;

export const STATS_BAR = [
  { value: "0 ₽", label: "регистрация", accent: false },
  { value: "Stories", label: "и лента знакомых автора", accent: true },
  { value: "10+", label: "аккаунтов в стартовом пакете", accent: true },
  { value: "QR", label: "и модерация каждого размещения", accent: false },
] as const;

export const AD_CONS = [
  "Платите за показы",
  "Платите за клики",
  "Конкурируете со всеми",
  "Люди видят пометку «Реклама»",
  "Доверия к вам ещё нет",
] as const;

export const LIDGEN_PROS = [
  "Рекомендации реальных людей",
  "Несколько разных аккаунтов",
  "Статистика каждого размещения",
  "Проверка публикаций",
  "Дополнительное внимание через соцсети",
] as const;

export const PRICING_POINTS = [
  { value: "0 ₽", label: "регистрация и кабинет" },
  { value: "от 2500 ₽", label: "стартовый пакет — в кабинете" },
  { value: "до 250 ₽", label: "за одно размещение" },
  { value: "0 ₽", label: "абонентская плата" },
] as const;

export const EXECUTOR_BENEFITS = [
  "Задания до 250 ₽ за размещение",
  "Доход зависит от активности",
  "Больше выполненных заданий — больше возможностей",
  "Рост уровня открывает новые задания",
] as const;

export const USE_SCENARIOS = [
  {
    title: "Кафе в спальном районе",
    text: "10 исполнителей из соседних домов рекомендуют заведение в Stories — охват среди «своих», не по всему городу.",
  },
  {
    title: "Салон красоты",
    text: "Рекомендации в ленте и WhatsApp: переходы от людей, которые доверяют автору поста.",
  },
  {
    title: "Исполнитель",
    text: "Выбирает задания рядом с домом, публикует у себя, получает оплату после проверки модератором.",
  },
] as const;

export const AUDIENCE_ITEMS = [
  { name: "Кафе и рестораны", icon: "☕" },
  { name: "Салоны красоты", icon: "💇" },
  { name: "Автосервисы", icon: "🔧" },
  { name: "Магазины", icon: "🛍️" },
  { name: "Ремонт и стройка", icon: "🏗️" },
  { name: "Обучение", icon: "📚" },
  { name: "Услуги для дома", icon: "🏠" },
  { name: "Онлайн-проекты", icon: "💻" },
] as const;

export const PACKAGE_MATH_LEAD =
  "10 размещений в 10 аккаунтах — ориентир по просмотрам и переходам ниже. Точные цифры — в кабинете после запуска." as const;

export const FINAL_CTA = {
  title: "Хватит платить только за показы.",
  lead: "Попробуйте рекомендации от реальных людей.",
  businessNote: "Запустить рекомендации от 2500 ₽",
  executorNote: "Начать выполнять задания",
} as const;

export const FOOTER_TAGLINE =
  "Платформа рекомендаций в Stories и соцсетях. Бизнес — переходы, исполнители — оплата за размещения." as const;

export const FAQ_ITEMS = [
  {
    question: "Что такое доверительный трафик?",
    answer:
      "Это переходы после рекомендации в Stories, ленте или мессенджере. Публикацию видят в основном подписчики и знакомые автора — они доверяют ему, поэтому клик теплее, чем с баннера.",
  },
  {
    question: "Что такое LidGen?",
    answer:
      "Платформа, где бизнес создаёт задания на рекомендации, а исполнители публикуют их у себя и получают оплату после проверки.",
  },
  {
    question: "Это законно?",
    answer:
      "Исполнители публикуют личные рекомендации от своего имени. Ответственность за содержание — на авторе публикации; платформа проверяет формат и факт размещения. При необходимости рекламные материалы маркируются по требованиям закона.",
  },
  {
    question: "Кто публикует рекомендации?",
    answer:
      "Зарегистрированные исполнители — обычные пользователи со своими аккаунтами в соцсетях и мессенджерах. Это не сотрудники вашей компании и не боты.",
  },
  {
    question: "Как отсекаете ботов и накрутку?",
    answer:
      "Уникальный QR на размещение, проверка ссылки и скрина, антифрод по аккаунтам. Оплата — только после модерации.",
  },
  {
    question: "Когда списываются деньги?",
    answer:
      "После того как исполнитель опубликовал рекомендацию и модератор подтвердил соответствие заданию. До проверки с баланса не списываем.",
  },
  {
    question: "Сколько стоит старт?",
    answer:
      "Регистрация бесплатна. Стоимость размещений и пакетов — в личном кабинете после входа. Стартовый пакет: 10 размещений за 2500 ₽.",
  },
  {
    question: "Какой результат ждать от пакета?",
    answer:
      "Ориентир по статистике: ~2000 просмотров и ~30 переходов на 10 размещений (~83 ₽ за переход в расчёте). Факт зависит от ниши, текста и аудитории исполнителей. Это трафик и переходы, не гарантия продаж.",
  },
  {
    question: "С чего начать?",
    answer:
      "Нажмите «Запустить рекомендации», зарегистрируйтесь как бизнес, создайте задание — или выберите путь исполнителя, если хотите зарабатывать на размещениях.",
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

  return 2;
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
