import React from 'react';
import { matrixDetails } from '../data/matrixDetails';

export const DetailedView = ({ responsibility, stage }) => {
  const details = matrixDetails.responsibilities[responsibility];
  const stageDetails = matrixDetails.stages[stage];

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">{details.title}</h3>
        <p className="text-gray-600">{details.description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-3 text-green-700">Включает в себя:</h4>
          <ul className="space-y-2">
            {details.includes.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-500">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-blue-700">
            Ответственность исполнителя:
          </h4>
          <ul className="space-y-2">
            {details.executorResponsibilities.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold mb-3 text-red-700">Риски:</h4>
        <ul className="space-y-2">
          {details.risks.map((risk, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-red-500">⚠</span>
              <span>{risk}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}; 