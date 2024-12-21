export const projectStages = {
  // Базовое проектирование
  EBD: {
    id: 'EBD',
    title: 'Ex Basic Design',
    subtext: '(Базовый проект)',
    fullName: 'Ex Basic Design (Базовый дизайн-проект)',
    description: 'Исполнитель разрабатывает планировочное решение и визуализации. Все остальные этапы на стороне заказчика.',
    responsibilities: {
      planning: {
        title: 'Планировочное решение',
        description: 'Разработка оптимальной планировки помещения',
        included: [
          'Обмерный план',
          'Варианты планировочных решений (до 3-х вариантов)',
          'Финальное планировочное решение',
        ],
        executorResponsibilities: [
          'Соответствие нормам и требованиям',
          'Учет пожеланий заказчика',
          'Функциональность решения',
        ],
        clientResponsibilities: [
          'Предоставление доступа к помещению',
          'Своевременная обратная связь по вариантам',
          'Согласование финального решения',
        ],
      },
      visualization: {
        title: 'Визуализация',
        description: 'Создание 3D-визуализаций основных помещений',
        included: [
          'Фотореалистичные визуализации',
          'Подбор стилистических решений',
          'Концептуальные коллажи',
        ],
        executorResponsibilities: [
          'Качество визуализаций',
          'Соответствие согласованной стилистике',
          'Детализация основных элементов',
        ],
        clientResponsibilities: [
          'Предоставление референсов',
          'Обратная связь по стилистике',
          'Утверждение концепции',
        ],
      },
    },
    excluded: [
      'Рабочая документация',
      'Спецификации',
      'Подбор материалов',
      'Строительные работы',
    ],
    risks: [
      'Изменение планировки после утверждения',
      'Несоответствие визуализаций реальным материалам',
      'Технические ограничения при реализации',
    ],
  },

  // Проектная документация
  EPD: {
    id: 'EPD',
    title: 'Ex Project Design',
    subtext: '(Рабочий проект)',
    fullName: 'Ex Project Design (Проектная документация)',
    description: 'Исполнитель дополнительно разрабатывает полный комплект рабочей документации.',
    responsibilities: {
      documentation: {
        title: 'Рабочая документация',
        description: 'Разработка полного комплекта чертежей',
        included: [
          'Планы демонтажа/монтажа',
          'Планы полов и потолков',
          'Развертки стен',
          'Схемы раскладки плитки',
          'Схемы электрики и освещения',
        ],
        executorResponsibilities: [
          'Точность размеров и привязок',
          'Соответствие нормативам',
          'Полнота документации',
        ],
        clientResponsibilities: [
          'Согласование технических решений',
          'Предоставление информации об оборудовании',
          'Утверждение документации',
        ],
      },
    },
    excluded: [
      'Спецификации материалов',
      'Подбор материалов',
      'Авторский надзор',
      'Строительные работы',
    ],
    risks: [
      'Изменения в процессе реализации',
      'Несоответствие фактических размеров',
      'Технические ограничения',
    ],
  },

  // Полный дизайн-проект
  EFD: {
    id: 'EFD',
    title: 'Ex Full Design',
    subtext: '(Полный проект)',
    fullName: 'Ex Full Design (Полный дизайн-проект)',
    description: 'Полный дизайн-проект, включая спецификации и подбор материалов.',
    responsibilities: {
      specifications: {
        title: 'Спецификации материалов',
        description: 'Подробные спецификации всех материалов и оборудования',
        included: [
          'Ведомости отделочных материалов',
          'Спецификации оборудования',
          'Карты раскладки материалов',
        ],
        executorResponsibilities: [
          'Точность расчетов',
          'Актуальность цен',
          'Наличие альтернативных вариантов',
        ],
        clientResponsibilities: [
          'Утверждение бюджетных рамок',
          'Выбор из предложенных вариантов',
          'Своевременное согласование',
        ],
      },
    },
    excluded: [
      'Авторский надзор',
      'Управление проектом',
      'Строительные работы',
    ],
    risks: [
      'Изменение цен на материалы',
      'Недоступность выбранных материалов',
      'Превышение бюджета',
    ],
  },

  // Консультации по реализации
  FCA: {
    id: 'FCA',
    title: 'Free Construction Assistance',
    subtext: '(Консультации)',
    fullName: 'Free Construction Assistance (Консультации по реализации)',
    description: 'Проект с консультационной поддержкой по реализации.',
    responsibilities: {
      consulting: {
        title: 'Консультационная поддержка',
        description: 'Консультации по всем вопросам реализации проекта',
        included: [
          'Консультации по материалам',
          'Помощь в выборе подрядчиков',
          'Рекомендации по технологиям',
        ],
        executorResponsibilities: [
          'Доступность для консультаций',
          'Актуальность рекомендаций',
          'Объективность оценок',
        ],
        clientResponsibilities: [
          'Своевременное обращение за консультацией',
          'Предоставление информации о ходе работ',
          'Следование рекомендациям',
        ],
      },
    },
    excluded: [
      'Авторский надзор',
      'Управление проектом',
      'Строительные работы',
    ],
    risks: [
      'Неверная интерпретация рекомендаций',
      'Отклонения от проекта',
      'Качество работы подрядчиков',
    ],
  },

  // Авторский надзор
  FCS: {
    id: 'FCS',
    title: 'Free Construction Supervision',
    subtext: '(Авторский надзор)',
    fullName: 'Free Construction Supervision (Авторский надзор)',
    description: 'Проект с регулярным авторским надзором за реализацией.',
    responsibilities: {
      supervision: {
        title: 'Авторский надзор',
        description: 'Регулярный контроль соответствия работ проекту',
        included: [
          'Регулярные выезды на объект',
          'Контроль соответствия работ проекту',
          'Корректировка решений при необходимости',
        ],
        executorResponsibilities: [
          'Регулярное присутствие на объекте',
          'Контроль качества работ',
          'Своевременная корректировка решений',
        ],
        clientResponsibilities: [
          'Обеспечение доступа на объект',
          'Информирование о ходе работ',
          'Согласование изменений',
        ],
      },
    },
    excluded: [
      'Управление проектом',
      'Координация подрядчиков',
      'Строительные работы',
    ],
    risks: [
      'Отклонения от проекта между визитами',
      'Несвоевременное информирование',
      'Конфликты с подрядчиками',
    ],
  },

  // Управление реализацией
  FCM: {
    id: 'FCM',
    title: 'Free Construction Management',
    subtext: '(Управление реализацией)',
    fullName: 'Free Construction Management (Управление реализацией)',
    description: 'Полное управление процессом реализации проекта.',
    responsibilities: {
      management: {
        title: 'Управление проектом',
        description: 'Комплексное управление реализацией',
        included: [
          'Подбор и координация подрядчиков',
          'Контроль сроков и качества',
          'Управление бюджетом',
        ],
        executorResponsibilities: [
          'Организация работ',
          'Контроль качества',
          'Соблюдение сроков и бюджета',
        ],
        clientResponsibilities: [
          'Своевременное финансирование',
          'Принятие ключевых решений',
          'Согласование изменений',
        ],
      },
    },
    excluded: [
      'Строительные работы',
      'Закупка материалов',
      'Логистика',
    ],
    risks: [
      'Срыв сроков подрядчиками',
      'Превышение бюджета',
      'Качество работ',
    ],
  },

  // Базовая организация строительства
  CBO: {
    id: 'CBO',
    title: 'Construction Basic Organization',
    subtext: '(Базовая организация)',
    fullName: 'Construction Basic Organization (Базовая организация строительства)',
    description: 'Организация строительных работ и подбор подрядчиков.',
    responsibilities: {
      organization: {
        title: 'Организация работ',
        description: 'Базовая организация строительного процесса',
        included: [
          'Подготовка площадки',
          'Демонтажные работы',
          'Черновые работы',
        ],
        executorResponsibilities: [
          'Организация процесса',
          'Контроль качества',
          'Соблюдение технологий',
        ],
        clientResponsibilities: [
          'Предоставление доступа',
          'Своевременная оплата',
          'Согласование решений',
        ],
      },
    },
    excluded: [
      'Чистовые работы',
      'Инженерные системы',
      'Отделка',
    ],
    risks: [
      'Скрытые дефекты',
      'Сложности с доступом',
      'Согласования с соседями',
    ],
  },

  // Проектная команда
  CPT: {
    id: 'CPT',
    title: 'Construction Project Team',
    subtext: '(Проектная команда)',
    fullName: 'Construction Project Team (Проектная команда)',
    description: 'Полное управление строительством и командой подрядчиков.',
    responsibilities: {
      construction: {
        title: 'Строительные работы',
        description: 'Полный комплекс строительных работ',
        included: [
          'Черновые работы',
          'Инженерные системы',
          'Подготовка под отделку',
        ],
        executorResponsibilities: [
          'Качество работ',
          'Соблюдение технологий',
          'Координация подрядчиков',
        ],
        clientResponsibilities: [
          'Финансирование',
          'Согласование решений',
          'Приемка работ',
        ],
      },
    },
    excluded: [
      'Чистовая отделка',
      'Комплектация',
      'Меблировка',
    ],
    risks: [
      'Срыв сроков',
      'Качество материалов',
      'Координация работ',
    ],
  },

  // Строительство со страхованием
  CIP: {
    id: 'CIP',
    title: 'Construction Insurance Project',
    subtext: '(Строительство со страхованием)',
    fullName: 'Construction Insurance Project (Строительство со страхованием)',
    description: 'Полная реализация проекта со страхованием рисков.',
    responsibilities: {
      construction: {
        title: 'Строительные работы',
        description: 'Полный комплекс работ со страхованием',
        included: [
          'Все строительные работы',
          'Инженерные системы',
          'Отделка',
        ],
        executorResponsibilities: [
          'Качество работ',
          'Страхование рисков',
          'Гарантийные обязательства',
        ],
        clientResponsibilities: [
          'Финансирование',
          'Согласование решений',
          'Приемка работ',
        ],
      },
    },
    excluded: [
      'Меблировка',
      'Декорирование',
      'Комплектация',
    ],
    risks: [
      'Страховые случаи',
      'Форс-мажор',
      'Сроки урегулирования',
    ],
  },

  // Реализация до чистовой
  DAP: {
    id: 'DAP',
    title: 'Delivered At Project',
    subtext: '(До чистовой)',
    fullName: 'Delivered At Project (Реализация до чистовой)',
    description: 'Реализация проекта до чистовой отделки включительно.',
    responsibilities: {
      implementation: {
        title: 'Реализация',
        description: 'Работы до чистовой отделки',
        included: [
          'Все строительные работы',
          'Чистовая отделка',
          'Установка оборудования',
        ],
        executorResponsibilities: [
          'Качество работ',
          'Соблюдение технологий',
          'Контроль процесса',
        ],
        clientResponsibilities: [
          'Финансирование',
          'Согласование материалов',
          'Приемка работ',
        ],
      },
    },
    excluded: [
      'Меблировка',
      'Декорирование',
      'Текстиль',
    ],
    risks: [
      'Качество материалов',
      'Сроки поставок',
      'Технологические ограничения',
    ],
  },

  // Реализация без мебели
  DFU: {
    id: 'DFU',
    title: 'Delivered Fully Unfurnished',
    subtext: '(Без мебели)',
    fullName: 'Delivered Fully Unfurnished (Реализация без мебели)',
    description: 'Полная реализация проекта без меблировки.',
    responsibilities: {
      implementation: {
        title: 'Реализация',
        description: 'Полная реализация без мебели',
        included: [
          'Все работы "под ключ"',
          'Отделка',
          'Декор',
          'Текстиль',
        ],
        executorResponsibilities: [
          'Качество работ',
          'Соответствие проекту',
          'Контроль процесса',
        ],
        clientResponsibilities: [
          'Финансирование',
          'Согласование решений',
          'Приемка работ',
        ],
      },
    },
    excluded: [
      'Мебель',
      'Финальная расстановка',
    ],
    risks: [
      'Сроки поставок',
      'Качество материалов',
      'Изменение цен',
    ],
  },

  // Полная реализация
  DFP: {
    id: 'DFP',
    title: 'Delivered Fully Project',
    subtext: '(Полная реализация)',
    fullName: 'Delivered Fully Project (Полная реализация)',
    description: 'Полная реализация проекта "под ключ" с меблировкой.',
    responsibilities: {
      implementation: {
        title: 'Реализация',
        description: 'Полная реализация проекта',
        included: [
          'Все работы "под ключ"',
          'Меблировка',
          'Декорирование',
          'Финальная расстановка',
        ],
        executorResponsibilities: [
          'Полная реализация',
          'Качество работ',
          'Соответствие проекту',
        ],
        clientResponsibilities: [
          'Финансирование',
          'Согласование решений',
          'Приемка работ',
        ],
      },
    },
    excluded: [
      'Нет исключений - полная реализация',
    ],
    risks: [
      'Сроки поставок мебели',
      'Качество материалов',
      'Координация всех этапов',
    ],
  },
} 