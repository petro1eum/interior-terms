import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Handshake, Target, Code, Heart } from 'lucide-react';

export const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero секция */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">InteriorTerms Matrix</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Первый отраслевой стандарт с открытым исходным кодом, который решает главную проблему в дизайне интерьера — 
          отсутствие единого понимания обязанностей между заказчиком и исполнителем
        </p>
        <Link 
          to="/matrix" 
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Открыть матрицу
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Преимущества */}
      <div className="grid gap-12 md:grid-cols-3 mb-20">
        <div className="text-center">
          <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Защита интересов</h3>
          <p className="text-gray-600">
            Четкое определение границ ответственности защищает интересы всех участников проекта
          </p>
        </div>

        <div className="text-center">
          <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Handshake className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Прозрачность</h3>
          <p className="text-gray-600">
            Единый стандарт делает процесс понятным и прозрачным для всех сторон
          </p>
        </div>

        <div className="text-center">
          <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Эффективность</h3>
          <p className="text-gray-600">
            Стандартизация процессов помогает избежать конфликтов и экономит время
          </p>
        </div>
      </div>

      {/* Этика и открытый код */}
      <div className="grid gap-8 md:grid-cols-2 mb-20">
        <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-8">
          <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-6">
            <Heart className="w-6 h-6 text-rose-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Этичный подход</h3>
          <p className="text-gray-600">
            Мы создаем стандарт, основанный на принципах профессиональной этики, 
            уважении к участникам процесса и защите их интересов. Наша цель — сделать 
            рынок дизайна интерьера более цивилизованным и профессиональным.
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8">
          <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-6">
            <Code className="w-6 h-6 text-emerald-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Открытый код</h3>
          <p className="text-gray-600">
            Проект разрабатывается как открытый стандарт, доступный всему сообществу. 
            Каждый может внести свой вклад в развитие матрицы, предложить улучшения 
            и адаптировать её под свои потребности.
          </p>
        </div>
      </div>

      {/* Призыв к действию */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Начните использовать матрицу сегодня
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          InteriorTerms Matrix — это интерактивный инструмент для визуализации и управления 
          распределением ответственности в проектах по дизайну интерьера
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            to="/matrix" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Открыть матрицу
          </Link>
          <Link 
            to="/docs" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Читать документацию
          </Link>
        </div>
      </div>
    </div>
  );
}; 