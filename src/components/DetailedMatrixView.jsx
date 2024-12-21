import React from 'react';
import { matrixDetails } from '../data/matrixDetails';
import { ClipboardList, UserCheck, UserCog, AlertTriangle } from 'lucide-react';

export const DetailedMatrixView = ({ stage, matrix }) => {
  // Получаем данные для выбранного этапа
  const stageResponsibilities = matrix[stage] || {};
  
  // Фильтруем только те зоны ответственности, где исполнитель = "И"
  const executorResponsibilities = Object.entries(stageResponsibilities)
    .filter(([_, value]) => value === 'И')
    .map(([key]) => matrixDetails.responsibilities[key])
    .filter(Boolean);

  if (executorResponsibilities.length === 0) return null;

  return (
    <div className="mt-8 space-y-6">
      {executorResponsibilities.map((data, index) => (
        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
          {/* Заголовок секции */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
            <h3 className="text-xl font-bold text-white mb-2">{data.title}</h3>
            <p className="text-blue-50 opacity-90">{data.description}</p>
          </div>

          <div className="p-6 space-y-8">
            {/* Состав работ */}
            {data.includes?.length > 0 && (
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-green-100 text-green-600">
                    <ClipboardList size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-900">Состав работ</h4>
                </div>
                <div className="bg-green-50/50 rounded-xl p-4">
                  <ul className="grid gap-3">
                    {data.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Ответственности */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Исполнитель */}
              {data.executorResponsibilities?.length > 0 && (
                <div className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                      <UserCheck size={20} />
                    </div>
                    <h4 className="font-semibold text-gray-900">Исполнитель</h4>
                  </div>
                  <div className="bg-blue-50/50 rounded-xl p-4">
                    <ul className="grid gap-3">
                      {data.executorResponsibilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Заказчик */}
              {data.clientResponsibilities?.length > 0 && (
                <div className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
                      <UserCog size={20} />
                    </div>
                    <h4 className="font-semibold text-gray-900">Заказчик</h4>
                  </div>
                  <div className="bg-purple-50/50 rounded-xl p-4">
                    <ul className="grid gap-3">
                      {data.clientResponsibilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Риски */}
            {data.risks?.length > 0 && (
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-orange-100 text-orange-600">
                    <AlertTriangle size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-900">Риски</h4>
                </div>
                <div className="bg-orange-50/50 rounded-xl p-4">
                  <ul className="grid gap-3">
                    {data.risks.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}; 