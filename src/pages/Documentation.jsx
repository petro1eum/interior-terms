import React from 'react';
import { FileText, Boxes, Users, Workflow } from 'lucide-react';
import { StageDetails } from '@/components/StageDetails';
import { designStages } from '@/data/stages/designStages';
import { supervisionStages } from '@/data/stages/supervisionStages';
import { constructionStages } from '@/data/stages/constructionStages';
import { implementationStages } from '@/data/stages/implementationStages';

export const Documentation = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Hero секция */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Документация</h1>
          <p className="text-xl text-gray-600">
            Детальное описание всех условий и терминов InteriorTerms Matrix
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-16">
        {/* E-группа */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-green-50 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold">Проектирование (E-группа)</h2>
          </div>
          <div className="space-y-8">
            {Object.keys(designStages).map(stageId => (
              <StageDetails key={stageId} stage={stageId} />
            ))}
          </div>
        </section>

        {/* F-группа */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-50 p-3 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold">Сопровождение (F-группа)</h2>
          </div>
          <div className="space-y-8">
            {Object.keys(supervisionStages).map(stageId => (
              <StageDetails key={stageId} stage={stageId} />
            ))}
          </div>
        </section>

        {/* C-группа */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-purple-50 p-3 rounded-lg">
              <Workflow className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold">Строительство (C-группа)</h2>
          </div>
          <div className="space-y-8">
            {Object.keys(constructionStages).map(stageId => (
              <StageDetails key={stageId} stage={stageId} />
            ))}
          </div>
        </section>

        {/* D-группа */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-amber-50 p-3 rounded-lg">
              <Boxes className="w-6 h-6 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold">Реализация (D-группа)</h2>
          </div>
          <div className="space-y-8">
            {Object.keys(implementationStages).map(stageId => (
              <StageDetails key={stageId} stage={stageId} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}; 