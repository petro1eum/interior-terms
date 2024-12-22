import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Info, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';
import { projectStages } from '@/data/stages';
import { Modal } from '@/components/ui/modal';
import { abbreviations } from '@/data/stages/abbreviations';
import { styles } from '@/styles/constants';
import { StageDetails } from '@/components/StageDetails';

// Объединяем информацию из разных источников
const stagesList = Object.entries(projectStages).map(([id, stage]) => ({
  id,
  title: stage.title,
  subtext: stage.subtext,
  category: stage.category,
  description: stage.description.short,
  fullName: stage.fullName,
  // Добавляем информацию из abbreviations
  abbreviation: abbreviations[id]?.abbreviation,
  englishTitle: abbreviations[id]?.english,
  russianTitle: abbreviations[id]?.russian,
  fullEnglish: abbreviations[id]?.fullEnglish,
  abbreviationDescription: abbreviations[id]?.description
}));

// Группировка стадий по категориям
const stageCategories = {
  design: stagesList.filter(stage => stage.category === 'design'),
  supervision: stagesList.filter(stage => stage.category === 'supervision'),
  construction: stagesList.filter(stage => stage.category === 'construction'),
  implementation: stagesList.filter(stage => stage.category === 'implementation')
};

// Переиспользуемые компоненты
const List = ({ items, color = 'blue', renderItem }) => {
  const bulletClass = `w-2 h-2 bg-${color}-400 rounded-full mr-2`;
  
  return (
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="text-sm text-gray-600 flex items-center">
          <span className={bulletClass} />
          {renderItem ? renderItem(item) : item}
        </li>
      ))}
    </ul>
  );
};

const SectionHeader = ({ icon: Icon, title, color = 'blue' }) => (
  <div className="flex items-center gap-3 mb-4">
    <Icon className={`w-5 h-5 text-${color}-500`} />
    <h3 className="text-xl font-bold">{title}</h3>
  </div>
);

const RisksList = ({ risks }) => {
  if (typeof risks === 'object' && !Array.isArray(risks)) {
    return Object.entries(risks).map(([category, items]) => (
      <div key={category} className="bg-yellow-50 p-4 rounded-lg">
        <h4 className="font-medium text-yellow-900 mb-3 capitalize">{category}</h4>
        <List items={items} color="yellow" />
      </div>
    ));
  }

  return (
    <div className="bg-yellow-50 p-4 rounded-lg">
      <List items={risks} color="yellow" />
    </div>
  );
};

/**
 * Таблица распределения ответственности.
 */
const MatrixTable = ({ onStageSelect }) => {
  // Этапы и их краткое описание
  const stages = [
    { id: 'EBD', title: 'Ex Basic Design', subtext: '(Базовый проект)' },
    { id: 'EPD', title: 'Ex Project Design', subtext: '(Рабочий проект)' },
    { id: 'EFD', title: 'Ex Full Design', subtext: '(Полный проект)' },
    { id: 'FCA', title: 'Free Construction Assistance', subtext: '(Консультации)' },
    { id: 'FCS', title: 'Free Construction Supervision', subtext: '(Авторский надзор)' },
    { id: 'FCM', title: 'Free Construction Management', subtext: '(Управление)' },
    { id: 'CBO', title: 'Construction Basic Organization', subtext: '(Организация)' },
    { id: 'CPT', title: 'Construction Project Team', subtext: '(Команда)' },
    { id: 'CIP', title: 'Construction Insurance Project', subtext: '(Страхование)' },
    { id: 'DAP', title: 'Delivered At Project', subtext: '(До чистовой)' },
    { id: 'DFU', title: 'Delivered Fully Unfurnished', subtext: '(Под ключ)' },
    { id: 'DFP', title: 'Delivered Fully Project', subtext: '(Полная реализация)' },
  ];

  // Зоны ответственности
  const responsibilities = [
    { id: 'planning', title: 'Планировочное решение' },
    { id: 'visualization', title: 'Визуализация' },
    { id: 'drawings', title: 'Рабочая документация' },
    { id: 'specifications', title: 'Спецификация материалов' },
    { id: 'materials', title: 'Подбор материалов' },
    { id: 'contractors', title: 'Подбор подрядчиков' },
    { id: 'estimates', title: 'Составление смет' },
    { id: 'supervision', title: 'Авторский надзор' },
    { id: 'management', title: 'Управление проектом' },
    { id: 'preparation', title: 'Подготовительные работы' },
    { id: 'construction', title: 'Строительные работы' },
    { id: 'engineering', title: 'Инженерные системы' },
    { id: 'finishing', title: 'Отделочные работы' },
    { id: 'furniture', title: 'Меблировка' },
    { id: 'decor', title: 'Декорирование' },
  ];

  /**
   * Матрица: ключ = stage, значение = { planning: 'И'/'З', visualization: 'И'/'З', ... }
   * 'И' = Исполнитель, 'З' = Заказчик
   */
  const matrix = {
    EBD: {
      planning: 'И',
      visualization: 'И',
      drawings: 'З',
      specifications: 'З',
      materials: 'З',
      contractors: 'З',
      estimates: 'З',
      supervision: 'З',
      management: 'З',
      preparation: 'З',
      construction: 'З',
      engineering: 'З',
      finishing: 'З',
      furniture: 'З',
      decor: 'З',
    },
    EPD: {
      planning: 'И',
      visualization: 'И',
      drawings: 'И',
      specifications: 'З',
      materials: 'З',
      contractors: 'З',
      estimates: 'З',
      supervision: 'З',
      management: 'З',
      preparation: 'З',
      construction: 'З',
      engineering: 'З',
      finishing: 'З',
      furniture: 'З',
      decor: 'З',
    },
    EFD: {
      planning: 'И',
      visualization: 'И',
      drawings: 'И',
      specifications: 'И',
      materials: 'И',
      contractors: 'З',
      estimates: 'З',
      supervision: 'З',
      management: 'З',
      preparation: 'З',
      construction: 'З',
      engineering: 'З',
      finishing: 'З',
      furniture: 'З',
      decor: 'З',
    },
    FCA: {
      planning: 'И',
      visualization: 'И',
      drawings: 'И',
      specifications: 'И',
      materials: 'И',
      contractors: 'И',
      estimates: 'И',
      supervision: 'З',
      management: 'З',
      preparation: 'З',
      construction: 'З',
      engineering: 'З',
      finishing: 'З',
      furniture: 'З',
      decor: 'З',
    },
    FCS: {
      planning: 'И',
      visualization: 'И',
      drawings: 'И',
      specifications: 'И',
      materials: 'И',
      contractors: 'И',
      estimates: 'И',
      supervision: 'И',
      management: 'З',
      preparation: 'З',
      construction: 'З',
      engineering: 'З',
      finishing: 'З',
      furniture: 'З',
      decor: 'З',
    },
    FCM: {
      planning: 'И',
      visualization: 'И',
      drawings: 'И',
      specifications: 'И',
      materials: 'И',
      contractors: 'И',
      estimates: 'И',
      supervision: 'И',
      management: 'И',
      preparation: 'З',
      construction: 'З',
      engineering: 'З',
      finishing: 'З',
      furniture: 'З',
      decor: 'З',
    },
    CBO: {
      planning: 'И',
      visualization: 'И',
      drawings: 'И',
      specifications: 'И',
      materials: 'И',
      contractors: 'И',
      estimates: 'И',
      supervision: 'И',
      management: 'И',
      preparation: 'И',
      construction: 'З',
      engineering: 'З',
      finishing: 'З',
      furniture: 'З',
      decor: 'З',
    },
    CPT: {
      planning: 'И',
      visualization: 'И',
      drawings: 'И',
      specifications: 'И',
      materials: 'И',
      contractors: 'И',
      estimates: 'И',
      supervision: 'И',
      management: 'И',
      preparation: 'И',
      construction: 'И',
      engineering: 'И',
      finishing: 'З',
      furniture: 'З',
      decor: 'З',
    },
    CIP: {
      planning: 'И',
      visualization: 'И',
      drawings: 'И',
      specifications: 'И',
      materials: 'И',
      contractors: 'И',
      estimates: 'И',
      supervision: 'И',
      management: 'И',
      preparation: 'И',
      construction: 'И',
      engineering: 'И',
      finishing: 'И',
      furniture: 'З',
      decor: 'З',
    },
    DAP: {
      planning: 'И',
      visualization: 'И',
      drawings: 'И',
      specifications: 'И',
      materials: 'И',
      contractors: 'И',
      estimates: 'И',
      supervision: 'И',
      management: 'И',
      preparation: 'И',
      construction: 'И',
      engineering: 'И',
      finishing: 'И',
      furniture: 'З',
      decor: 'З',
    },
    DFU: {
      planning: 'И',
      visualization: 'И',
      drawings: 'И',
      specifications: 'И',
      materials: 'И',
      contractors: 'И',
      estimates: 'И',
      supervision: 'И',
      management: 'И',
      preparation: 'И',
      construction: 'И',
      engineering: 'И',
      finishing: 'И',
      furniture: 'З',
      decor: 'И',
    },
    DFP: {
      planning: 'И',
      visualization: 'И',
      drawings: 'И',
      specifications: 'И',
      materials: 'И',
      contractors: 'И',
      estimates: 'И',
      supervision: 'И',
      management: 'И',
      preparation: 'И',
      construction: 'И',
      engineering: 'И',
      finishing: 'И',
      furniture: 'И',
      decor: 'И',
    },
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          {/* Пример шапки таблицы (можно оформить по-другому) */}
          <tr className="text-xs text-white bg-green-500">
            <th className="p-2" colSpan="2">
              Типы проектов
            </th>
            <th className="p-2" colSpan="3">
              Базовое проектирование
            </th>
            <th className="p-2" colSpan="3">
              Проектирование с поддержкой
            </th>
            <th className="p-2" colSpan="3">
              Строительство
            </th>
            <th className="p-2" colSpan="3">
              Реализация
            </th>
          </tr>

          <tr className="bg-blue-900 text-white text-center">
            <th className="p-2 border-r border-blue-800" rowSpan="2">
              <div className="font-bold text-lg">INTERIOR</div>
              <div className="text-sm">TERMS</div>
              <div className="text-xs">2024</div>
            </th>
            <th className="border-r border-blue-800 bg-blue-800">
              Переход ответственности
            </th>
            {stages.map((stage) => (
              <th key={stage.id} className="p-2 border-r border-blue-800">
                <div className="font-bold text-lg">{stage.id}</div>
                <div className="text-xs whitespace-normal">{stage.subtext}</div>
              </th>
            ))}
          </tr>

          <tr className="bg-orange-500 text-white text-center text-sm">
            <th className="p-2">Переход ответственности</th>
            {stages.map((stage) => (
              <td key={stage.id} className="p-2 border-r border-orange-400">
                {/* Пример текстового описания (можно менять) */}
                {stage.id === 'EBD' && 'Базовая концепция'}
                {stage.id === 'EPD' && 'Рабочий проект'}
                {stage.id === 'EFD' && 'Полный проект'}
                {stage.id === 'FCA' && 'С поддержкой'}
                {stage.id === 'FCS' && 'С контролем'}
                {stage.id === 'FCM' && 'С управлением'}
                {stage.id === 'CBO' && 'Базовая организация'}
                {stage.id === 'CPT' && 'Полная команда'}
                {stage.id === 'CIP' && 'Со страхованием'}
                {stage.id === 'DAP' && 'До чистовой'}
                {stage.id === 'DFU' && 'Без мебели'}
                {stage.id === 'DFP' && 'Полная реализация'}
              </td>
            ))}
          </tr>

          <tr className="bg-gray-200">
            <td
              colSpan={stages.length + 2}
              className="p-2 font-bold text-center border-b border-t border-gray-300"
            >
              Зоны ответственности и обязательства
            </td>
          </tr>
        </thead>

        <tbody>
          {responsibilities.map((resp, rIndex) => (
            <tr key={resp.id} className="border-b border-gray-200">
              {rIndex === 0 && (
                <th
                  rowSpan={responsibilities.length}
                  className="bg-blue-900 text-white p-2 text-sm border-r border-blue-800"
                >
                  Этапы проекта
                </th>
              )}
              <th className="p-2 border-r border-gray-300 bg-blue-800 text-white text-sm font-normal text-left">
                {resp.title}
              </th>
              {stages.map((stage) => {
                const value = matrix[stage.id]?.[resp.id] || 'З'; // По умолчанию "З"
                const isExecutor = value === 'И'; // Исполнитель
                return (
                  <td
                    key={`${resp.id}-${stage.id}`}
                    className={
                      'p-2 text-center border-r border-gray-200 ' +
                      (isExecutor
                        ? 'bg-green-100 text-green-900'
                        : 'bg-gray-100 text-gray-600')
                    }
                    onClick={() => onStageSelect(stage.id)} // При клике покажем аккордеон
                    style={{ cursor: 'pointer' }}
                    title={
                      isExecutor
                        ? 'Ответственность Исполнителя'
                        : 'Ответственность Заказчика'
                    }
                  >
                    {value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/**
 * Легенда для подсказки, что означает И/З.
 */
const Legend = () => (
  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
    <h3 className="font-bold mb-2">Условные обозначения:</h3>
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-green-100 border border-green-300" />
        <span>И - Исполнитель</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-gray-100 border border-gray-300" />
        <span>З - Заказчик</span>
      </div>
    </div>
  </div>
);

/**
 * Главный компонент "InteriorTermsMatrix".
 */
const InteriorTermsMatrix = () => {
  const [selectedStage, setSelectedStage] = useState(null);

  return (
    <Card className="w-full max-w-[1400px] p-4 mx-auto">
      <CardContent>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">InteriorTerms Matrix 1.0</h2>
          <p className="text-gray-600">
            Матрица распределения ответственности в проектах интерьера
          </p>
        </div>

        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-bold mb-2 text-green-800">Базовое проектирование</h3>
            <p className="text-sm text-green-700">
              EBD → EPD → EFD: от эскизного проекта к полной документации
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold mb-2 text-blue-800">
              Проектирование с поддержкой
            </h3>
            <p className="text-sm text-blue-700">
              FCA → FCS → FCM: от консультаций к управлению
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-bold mb-2 text-purple-800">
              Строительство и реализация
            </h3>
            <p className="text-sm text-purple-700">
              CBO → DFP: от организации к полной реализации
            </p>
          </div>
        </div>

        <Legend />
        <MatrixTable onStageSelect={setSelectedStage} />

        <Modal 
          isOpen={!!selectedStage} 
          onClose={() => setSelectedStage(null)}
        >
          {selectedStage && (
            <>
              {console.log('Opening modal for stage:', selectedStage)}
              <StageDetails stage={selectedStage} />
            </>
          )}
        </Modal>
      </CardContent>
    </Card>
  );
};

export default InteriorTermsMatrix;