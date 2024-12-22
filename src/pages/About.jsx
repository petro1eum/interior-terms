import React, { useState, useEffect } from 'react';
import { 
  Coffee, 
  Award, 
  Users, 
  Globe, 
  GitBranch, 
  ArrowRight, 
  Lightbulb, 
  BookOpen,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const About = () => {
  const milestones = [
    {
      year: '2023',
      title: 'Зарождение идеи',
      description: 'Клуб Design&Decor становится местом рождения концепции единого стандарта',
      icon: Coffee,
      color: 'blue'
    },
    {
      year: '2023',
      title: 'Kukha Award',
      description: 'Профессиональное сообщество трех стран поддерживает инициативу',
      icon: Award,
      color: 'amber'
    },
    {
      year: '2024',
      title: 'Разработка матрицы',
      description: 'Начало работы над структурой и методологией стандарта',
      icon: Users,
      color: 'emerald'
    },
    {
      year: '2024',
      title: 'Открытый код',
      description: 'Проект становится доступным для всего сообщества',
      icon: GitBranch,
      color: 'purple'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % milestones.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % milestones.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + milestones.length) % milestones.length);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative mb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">История проекта</h1>
          <p className="text-xl text-gray-600">
            InteriorTerms Matrix не родился в одночасье — за идеей и результатом стоит целая цепочка событий, 
            пересечений разных людей и их опыта, неожиданных находок и дружеских дискуссий.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-24">
        <div className="relative bg-white rounded-2xl shadow-lg p-12">
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
            <button 
              onClick={prevSlide}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          
          <div className="relative overflow-hidden h-48">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <div 
                    key={index} 
                    className="w-full flex-shrink-0 flex items-center gap-8"
                  >
                    <div className={`bg-${milestone.color}-50 p-6 rounded-full`}>
                      <Icon className={`w-12 h-12 text-${milestone.color}-500`} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
            <button 
              onClick={nextSlide}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {milestones.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-16">
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-white rounded-xl p-8 shadow-sm">
            <div className="inline-flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-full mb-6">
              <Coffee className="w-5 h-5 text-blue-500" />
              <h2 className="text-xl font-semibold">Рождение идеи</h2>
            </div>
            <p className="text-gray-600">
              Всё началось с непринуждённых разговоров в кулуарах дизайнерского клуба "Design&Decor". 
              Тёплые вечера, аромат кофе и живые споры о том, почему в отрасли нет единого стандарта, 
              который бы упорядочил всю "кашу" из этапов, обязанностей и договоров. И каждый раз кто-то 
              шутил: "Нам нужен свой Incoterms!" — и все одобрительно кивали, но тут же возвращались к 
              другим вопросам, ведь работа над проектами не ждёт.
            </p>
          </section>

          <section className="bg-white rounded-xl p-8 shadow-sm">
            <div className="inline-flex items-center gap-3 bg-amber-50 px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5 text-amber-500" />
              <h2 className="text-xl font-semibold">Kukha Award</h2>
            </div>
            <p className="text-gray-600">
              На Kukha Award 2023 и 2024, одной из ключевых площадок для профессионального общения 
              дизайнеров и архитекторов из Беларуси, Казахстана и России, неожиданно оказалось, что 
              идею о "дизайнерском Incoterms" разделяют многие. За кулисами премии обсуждалось, как 
              стандарты могли бы облегчить жизнь студиям, фрилансерам, подрядчикам и заказчикам. 
              Желание ускорить развитие отрасли уже не было абстракцией — представители разных городов 
              и даже стран высказывались о том, что пора действовать.
            </p>
          </section>
        </div>

        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-xl p-12 shadow-sm">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6 bg-white px-4 py-2 rounded-full shadow-sm">
              <Lightbulb className="w-5 h-5 text-blue-500" />
              <h2 className="text-xl font-semibold">Зачем нужен стандарт?</h2>
            </div>
            <p className="text-gray-600 mb-6">
              В дизайне интерьеров, ремонте и строительстве всегда огромное число участников: от 
              поставщиков материалов и мебельных брендов до проектировщиков и подрядчиков. Без единых 
              правил каждый буквально "варится в собственном соку", у каждого своя терминология, свои 
              форматы документов, свои подходы к этике и ответственности. А у заказчиков голова идёт 
              кругом: как сравнить одно коммерческое предложение с другим, если их почти ничего не объединяет?
            </p>
            <p className="text-gray-600">
              Особенно сложно становится во время профессиональных конкурсов и премий. Художественные 
              критерии — штука субъективная, а вот организационные принципы можно (и нужно) зафиксировать. 
              Отсутствие общего стандарта рождает конфликты, недоразумения и даже скандалы, когда победитель 
              не понимает, по каким правилам его оценивали. Так формировался убедительный запрос на системный подход.
            </p>
          </div>
        </section>

        <div className="grid md:grid-cols-3 gap-8">
          <section className="bg-white rounded-xl p-8 shadow-sm">
            <div className="inline-flex items-center gap-3 bg-emerald-50 px-4 py-2 rounded-full mb-6">
              <Globe className="w-5 h-5 text-emerald-500" />
              <h2 className="text-lg font-semibold">Вдохновение</h2>
            </div>
            <p className="text-gray-600">
              Как только в клубе "Design&Decor" решили серьёзно взяться за дело, первым примером, 
              на который все смотрели, стали ICC Incoterms. Эти международные торговые термины за 
              полвека превратили хаос в чёткую систему обязательств и ответственности. Почему бы не 
              перенести столь успешную модель на интерьерный рынок? И вот кто-то сказал: "Если у 
              логистов получилось, то и у нас всё выйдет!"
            </p>
          </section>

          <section className="bg-white rounded-xl p-8 shadow-sm">
            <div className="inline-flex items-center gap-3 bg-purple-50 px-4 py-2 rounded-full mb-6">
              <Users className="w-5 h-5 text-purple-500" />
              <h2 className="text-lg font-semibold">Тернистый путь</h2>
            </div>
            <p className="text-gray-600">
              Конечно, идея стандарта встретила и скептиков: мол, дизайнерская сфера слишком творческая, 
              чтобы что-то формализовать. Но сторонники проекта отмечали, что речь не про формализацию 
              искусства, а про выстраивание понятных границ ответственности, прозрачных условий договоров 
              и разумных этических норм. Вскоре оказалось, что энтузиазм объединяет людей разных профессий: 
              дизайнеров, архитекторов, проектных менеджеров, юристов и даже финансовых консультантов.
            </p>
          </section>

          <section className="bg-white rounded-xl p-8 shadow-sm">
            <div className="inline-flex items-center gap-3 bg-rose-50 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-5 h-5 text-rose-500" />
              <h2 className="text-lg font-semibold">Гибкость</h2>
            </div>
            <p className="text-gray-600">
              С самого начала было решено, что InteriorTerms Matrix не станет жёсткой системой наподобие 
              свода законов. Это, скорее, ориентир, на который можно опираться в договорных отношениях и 
              деловых переговорах. В случае спорных ситуаций стандарт поможет спокойно и логично определить, 
              кто и за что отвечает.
            </p>
          </section>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-gradient-to-br from-emerald-50 to-white rounded-xl p-8 shadow-sm">
            <div className="inline-flex items-center gap-3 mb-6 bg-white px-4 py-2 rounded-full shadow-sm">
              <GitBranch className="w-5 h-5 text-emerald-500" />
              <h2 className="text-xl font-semibold">Открытая разработка</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Ещё одно важное решение — сделать проект открытым: любой желающий может добавить вклад в 
              GitHub-репозиторий, предложить улучшения, задать вопросы или выступить в роли критика. 
              Благодаря этому подходу мы уже на стадии зарождения получили обратную связь не только от 
              локального сообщества, но и от профессионалов из Европы, США и Азии. Многие заинтересовались, 
              как адаптировать опыт InteriorTerms для своих регионов.
            </p>
            <a 
              href="https://github.com/petro1eum/interior-terms" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              Присоединиться к разработке
              <ExternalLink className="w-4 h-4" />
            </a>
          </section>

          <section className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-sm">
            <div className="inline-flex items-center gap-3 mb-6 bg-white px-4 py-2 rounded-full shadow-sm">
              <ArrowRight className="w-5 h-5 text-blue-500" />
              <h2 className="text-xl font-semibold">Что дальше?</h2>
            </div>
            <p className="text-gray-600">
              Сегодня InteriorTerms Matrix — это уже не просто концепция, а рабочий инструмент, над которым 
              трудятся десятки людей. Но работа не стоит на месте: продолжается сбор кейсов, расширение 
              терминологии, создание гайдлайнов для вузов и профильных объединений. Команда активно работает 
              над цифровым интерфейсом, чтобы стандарт был не просто "бумажной" методичкой, а интерактивной 
              платформой, которую легко интегрировать в реальные проекты.
            </p>
          </section>
        </div>

        <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">Итог</h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            InteriorTerms Matrix — результат множества дискуссий, споров и коопераций. Это живой пример того, 
            как профессиональное сообщество, вдохновляясь успешными кейсами из смежных сфер, может 
            самостоятельно создавать инструменты для улучшения отрасли. А самое главное — этот инструмент 
            открыт для всех, кто готов вносить свой вклад и вместе развивать интерьерный дизайн в новом, 
            более структурированном направлении.
          </p>
        </section>
      </div>
    </div>
  );
}; 