import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">InteriorTerms Matrix</h1>
      <p className="text-xl text-gray-600 mb-12">
        Стандартизированная система распределения ответственности в проектах 
        по дизайну и реализации интерьеров
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Для дизайнеров</h3>
          <p className="text-gray-600 mb-4">
            Четкое определение границ ответственности и объема работ
          </p>
          <Link 
            to="/matrix" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Открыть матрицу →
          </Link>
        </div>

        {/* Остальные карточки... */}
      </div>
    </div>
  );
}; 