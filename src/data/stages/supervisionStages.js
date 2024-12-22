export const supervisionStages = {
  FCA: {
    id: 'FCA',
    title: 'Free Construction Assistance',
    subtext: '(Консультации)',
    fullName: 'Free Construction Assistance (Консультации по реализации)',
    category: 'supervision',
    phase: 'basic',
    description: {
      short: 'Консультационная поддержка при реализации проекта',
      full: 'Консультации по техническим вопросам и помощь в выборе подрядчиков',
      scope: 'Базовая поддержка без регулярных выездов на объект'
    },
    responsibilities: {
      consulting: {
        title: 'Консультации по реализации',
        description: 'Консультационная поддержка по всем аспектам реализации проекта',
        included: [
          {
            title: 'Онлайн-консультации',
            details: 'Ответы на вопросы по проекту в рабочее время',
            limit: '2 часа в неделю'
          },
          {
            title: 'Проверка смет',
            details: 'Анализ смет подрядчиков на соответствие проекту',
            limit: '3 сметы'
          },
          {
            title: 'Подбор подрядчиков',
            details: 'Рекомендации по выбору подрядных организаций',
            limit: '3-5 компаний по каждому виду работ'
          }
        ],
        executorResponsibilities: [
          {
            title: 'Доступность',
            description: 'Обеспечение связи в рабочее время через согласованные каналы'
          },
          {
            title: 'Компетентность',
            description: 'Предоставление актуальных технических консультаций'
          },
          {
            title: 'Объективность',
            description: 'Непредвзятая оценка подрядчиков и их предложений'
          }
        ],
        clientResponsibilities: [
          {
            title: 'Информирование',
            description: 'Своевременное предоставление информации о ходе работ'
          },
          {
            title: 'Документация',
            description: 'Предоставление смет и предложений подрядчиков'
          }
        ]
      }
    },
    deliverables: [
      {
        title: 'Отчеты по консультациям',
        format: 'PDF',
        contents: [
          'Протоколы консультаций',
          'Анализ смет',
          'Рекомендации по подрядчикам'
        ]
      }
    ],
    excluded: {
      services: [
        'Регулярные выезды на объект',
        'Авторский надзор',
        'Управление проектом',
        'Координация подрядчиков',
        'Строительные работы'
      ]
    },
    risks: {
      technical: [
        'Неверная интерпретация рекомендаций',
        'Отклонения от проекта без согласования',
        'Некачественное выполнение работ подрядчиками'
      ],
      management: [
        'Превышение лимита консультаций',
        'Затягивание сроков реализации',
        'Конфликты между подрядчиками'
      ]
    },
    timeline: {
      total: 'На протяжении всего периода реализации',
      availability: 'В рабочие дни с 9:00 до 18:00'
    }
  },

  FCS: {
    id: 'FCS',
    title: 'Free Construction Supervision',
    subtext: '(Авторский надзор)',
    fullName: 'Free Construction Supervision (Авторский надзор)',
    category: 'supervision',
    phase: 'advanced',
    description: {
      short: 'Регулярный контроль реализации проекта',
      full: 'Авторский надзор за соответствием работ проектной документации',
      scope: 'Выезды на объект, контроль работ, корректировка решений'
    },
    responsibilities: {
      supervision: {
        title: 'Авторский надзор',
        description: 'Контроль соответствия работ проектной документации',
        included: [
          {
            title: 'Регулярные выезды',
            details: 'Инспекция объекта и проверка выполненных работ',
            frequency: '2 раза в неделю'
          },
          {
            title: 'Фотофиксация',
            details: 'Документирование хода работ и отклонений',
            deliverable: 'Еженедельный фотоотчет'
          },
          {
            title: 'Корректировки',
            details: 'Внесение изменений в проект при необходимости',
            limit: 'До 20% от объема проекта'
          }
        ],
        executorResponsibilities: [
          {
            title: 'Контроль качества',
            description: 'Проверка соответствия работ проекту и нормативам'
          },
          {
            title: 'Оперативное реагирование',
            description: 'Решение технических вопросов в процессе работ'
          },
          {
            title: 'Документирование',
            description: 'Ведение журнала авторского надзора'
          }
        ],
        clientResponsibilities: [
          {
            title: 'Доступ на объект',
            description: 'Обеспечение доступа в согласованное время'
          },
          {
            title: 'Информирование',
            description: 'Уведомление о планируемых работах'
          }
        ]
      }
    },
    deliverables: [
      {
        title: 'Журнал авторского надзора',
        format: 'PDF',
        contents: [
          'Записи о выявленных отклонениях',
          'Фотофиксация',
          'Предписания подрядчикам'
        ]
      },
      {
        title: 'Корректировки проекта',
        format: 'DWG/PDF',
        contents: [
          'Измененные чертежи',
          'Дополнительные узлы и детали',
          'Уточнения спецификаций'
        ]
      }
    ],
    excluded: {
      services: [
        'Управление проектом',
        'Координация подрядчиков',
        'Строительный контроль',
        'Приемка скрытых работ',
        'Строительные работы'
      ]
    },
    risks: {
      technical: [
        'Скрытые дефекты',
        'Отклонения от проекта между визитами',
        'Необходимость серьезных корректировок'
      ],
      management: [
        'Игнорирование предписаний подрядчиками',
        'Срыв графика инспекций',
        'Конфликты с подрядчиками'
      ]
    },
    timeline: {
      total: 'На протяжении всего периода строительства',
      frequency: 'Выезды 2 раза в неделю',
      reporting: 'Еженедельные отчеты'
    }
  },

  FCM: {
    id: 'FCM',
    title: 'Free Construction Management',
    subtext: '(Управление реализацией)',
    fullName: 'Free Construction Management (Управление реализацией)',
    category: 'supervision',
    phase: 'complete',
    description: {
      short: 'Полное управление процессом реализации',
      full: 'Комплексное управление всеми этапами реализации проекта',
      scope: 'Координация всех участников, контроль сроков и бюджета'
    },
    responsibilities: {
      management: {
        title: 'Управление проектом',
        description: 'Комплексное управление реализацией',
        included: [
          {
            title: 'Календарное планирование',
            details: 'Разработка и контроль графика работ',
            deliverable: 'Еженедельная актуализация'
          },
          {
            title: 'Координация подрядчиков',
            details: 'Организация взаимодействия всех участников',
            frequency: 'Ежедневно'
          },
          {
            title: 'Контроль бюджета',
            details: 'Учет и контроль всех расходов',
            reporting: 'Еженедельные отчеты'
          },
          {
            title: 'Технический надзор',
            details: 'Контроль качества всех работ',
            frequency: '3-4 раза в неделю'
          }
        ],
        executorResponsibilities: [
          {
            title: 'Планирование',
            description: 'Разработка и актуализация графиков производства работ'
          },
          {
            title: 'Координация',
            description: 'Организация работы всех подрядчиков и поставщиков'
          },
          {
            title: 'Контроль качества',
            description: 'Проверка соответствия работ проекту и нормативам'
          },
          {
            title: 'Финансовый контроль',
            description: 'Проверка смет, актов, контроль оплат'
          }
        ],
        clientResponsibilities: [
          {
            title: 'Своевременные платежи',
            description: 'Оплата работ согласно графику'
          },
          {
            title: 'Принятие решений',
            description: 'Оперативное согласование ключевых вопросов'
          }
        ]
      },
      quality: {
        title: 'Контроль качества',
        description: 'Обеспечение качества всех работ',
        included: [
          {
            title: 'Входной контроль',
            details: 'Проверка материалов и оборудования'
          },
          {
            title: 'Операционный контроль',
            details: 'Контроль выполнения работ'
          },
          {
            title: 'Приемочный контроль',
            details: 'Проверка готовых работ'
          }
        ]
      }
    },
    deliverables: [
      {
        title: 'Отчеты по управлению',
        format: 'PDF',
        frequency: 'Еженедельно',
        contents: [
          'Статус работ',
          'Фотоотчет',
          'Финансовый отчет',
          'График работ',
          'Протоколы совещаний'
        ]
      },
      {
        title: 'Исполнительная документация',
        format: 'PDF/DWG',
        contents: [
          'Акты скрытых работ',
          'Сертификаты материалов',
          'Исполнительные схемы'
        ]
      }
    ],
    excluded: {
      services: [
        'Строительные работы',
        'Закупка материалов',
        'Логистика материалов',
        'Охрана объекта',
        'Проектирование'
      ]
    },
    risks: {
      technical: [
        'Срыв сроков поставок',
        'Некачественные материалы',
        'Ошибки при производстве работ'
      ],
      management: [
        'Конфликты между подрядчиками',
        'Превышение бюджета',
        'Нарушение технологий'
      ],
      financial: [
        'Увеличение стоимости материалов',
        'Незапланированные работы',
        'Задержки оплат'
      ]
    },
    timeline: {
      total: 'На протяжении всего периода реализации',
      presence: 'Ежедневное присутствие на объекте',
      reporting: {
        daily: 'Оперативные отчеты',
        weekly: 'Сводные отчеты',
        monthly: 'Аналитические отчеты'
      }
    }
  }
} 