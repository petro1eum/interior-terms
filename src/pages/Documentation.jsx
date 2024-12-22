import React from 'react';

export const Documentation = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Документация</h1>
      <p className="text-xl text-gray-600 mb-12">
        Подробное описание терминологии и методологии InteriorTerms Matrix
      </p>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Термины и определения</h2>
          <p className="text-gray-600">
            Описание основных терминов и понятий, используемых в матрице
          </p>
        </section>
      </div>
    </div>
  );
}; 