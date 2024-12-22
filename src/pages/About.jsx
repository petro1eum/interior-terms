import React from 'react';

export const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">О проекте</h1>
      <p className="text-xl text-gray-600 mb-12">
        История создания и развития проекта InteriorTerms Matrix
      </p>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Наша миссия</h2>
          <p className="text-gray-600">
            Создание единого стандарта для эффективного взаимодействия всех участников процесса
            проектирования и реализации интерьеров
          </p>
        </section>
      </div>
    </div>
  );
}; 