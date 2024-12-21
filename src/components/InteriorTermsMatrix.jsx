import React, { useState, useMemo, useCallback, memo } from 'react';
import { Card, CardContent } from './ui/card';
import { Info } from 'lucide-react';
import { cn } from '../lib/utils';
import { DetailedMatrixView } from './DetailedMatrixView';

// Заменим дублирующиеся данные на константы
const STAGES = [
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

const RESPONSIBILITIES = [
  // Проектирование
  { id: 'planning', title: 'Планировочное решение', group: 'design' },
  { id: 'visualization', title: 'Визуализация', group: 'design' },
  { id: 'drawings', title: 'Рабочая документация', group: 'design' },
  { id: 'specifications', title: 'Спецификация материалов', group: 'design' },
  { id: 'materials', title: 'Подбор материалов', group: 'design' },
  // Организация
  { id: 'contractors', title: 'Подбор подрядчиков', group: 'organization' },
  { id: 'estimates', title: 'Составление смет', group: 'organization' },
  { id: 'supervision', title: 'Авторский надзор', group: 'organization' },
  { id: 'management', title: 'Управление проектом', group: 'organization' },
  // Реализация
  { id: 'preparation', title: 'Подготовительные работы', group: 'implementation' },
  { id: 'construction', title: 'Строительные работы', group: 'implementation' },
  { id: 'engineering', title: 'Инженерные системы', group: 'implementation' },
  { id: 'finishing', title: 'Отделочные работы', group: 'implementation' },
  // Комплектация
  { id: 'furniture', title: 'Меблировка', group: 'furnishing' },
  { id: 'decor', title: 'Декорирование', group: 'furnishing' },
];

const STAGE_GROUPS = [
  { letter: 'E', title: 'Базовое проектирование', color: 'green', icon: '📐' },
  { letter: 'F', title: 'Проектирование с поддержкой', color: 'blue', icon: '🛠' },
  { letter: 'C', title: 'Строительство', color: 'purple', icon: '🏗' },
  { letter: 'D', title: 'Реализация', color: 'orange', icon: '🎯' },
];

/**
 * Матрица: ключ = stage, значение = { planning: 'И'/'З', visualization: 'И'/'З', ... }
 * 'И' = Исполнитель, 'З' = Заказчик
 */
const MATRIX = {
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

/**
 * Компонент для строки таблицы
 */
const TableRow = memo(({ resp, stages, activeStage, onCellClick, matrix }) => {
  return (
    <tr className="border-b border-gray-200">
      <th className="p-2 border-r border-gray-300 bg-blue-800 text-white text-sm font-normal text-left">
        {resp.title}
      </th>
      {stages.map((stage) => {
        const value = matrix[stage.id]?.[resp.id] || 'З';
        const isExecutor = value === 'И';
        return (
          <td
            key={`${resp.id}-${stage.id}`}
            className={cn(
              'p-2 text-center relative cursor-pointer',
              'border-r border-gray-200/30',
              'transition-all duration-300 ease-in-out',
              stage.id === activeStage && [
                'ring-2 ring-blue-500/50 ring-offset-2',
                'z-10 scale-105',
                'shadow-lg shadow-blue-500/20'
              ],
              isExecutor ? [
                'bg-gradient-to-br from-green-50 to-green-100/50',
                'hover:from-green-100 hover:to-green-200/50',
                'text-green-900'
              ] : [
                'bg-gradient-to-br from-gray-50 to-gray-100/50',
                'hover:from-gray-100 hover:to-gray-200/50',
                'text-gray-600'
              ],
              'backdrop-blur-sm'
            )}
            onClick={() => onCellClick(stage.id)}
          >
            <div className={cn(
              'flex items-center justify-center gap-1',
              'transition-transform duration-300',
              stage.id === activeStage && 'transform scale-110'
            )}>
              <span className={cn(
                'font-medium text-lg',
                stage.id === activeStage && 'font-bold'
              )}>
                {value}
              </span>
              <span className="text-xs opacity-50">
                {isExecutor ? '(И)' : '(З)'}
              </span>
            </div>
          </td>
        );
      })}
    </tr>
  );
});

/**
 * Компонент таблицы
 */
const MatrixTable = memo(({ onStageSelect, matrix }) => {
  const [activeStage, setActiveStage] = useState(null);

  const groupedResponsibilities = useMemo(() => {
    return RESPONSIBILITIES.reduce((acc, resp) => {
      if (!acc[resp.group]) {
        acc[resp.group] = [];
      }
      acc[resp.group].push(resp);
      return acc;
    }, {});
  }, []);

  const handleCellClick = useCallback((stageId) => {
    setActiveStage(stageId);
    onStageSelect(stageId);
  }, [onStageSelect]);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
        <thead>
          <tr className="text-sm bg-gradient-to-r from-green-600 to-green-500 text-white">
            <th className="p-2" colSpan="2">Типы проектов</th>
            <th className="p-2" colSpan="3">Базовое проектирование</th>
            <th className="p-2" colSpan="3">Проектирование с поддержкой</th>
            <th className="p-2" colSpan="3">Строительство</th>
            <th className="p-2" colSpan="3">Реализация</th>
          </tr>
          <tr className="bg-gradient-to-r from-blue-900 to-blue-800 text-white text-center">
            <th className="p-2 border-r border-blue-800" rowSpan="2">
              <div className="font-bold text-lg">INTERIOR</div>
              <div className="text-sm">TERMS</div>
              <div className="text-xs">2024</div>
            </th>
            <th className="border-r border-blue-800 bg-blue-800">Переход ответственности</th>
            {STAGES.map((stage) => (
              <th key={stage.id} className="p-2 border-r border-blue-800">
                <div className="font-bold text-lg">{stage.id}</div>
                <div className="text-xs whitespace-normal">{stage.subtext}</div>
              </th>
            ))}
          </tr>
          <tr className="bg-gradient-to-r from-orange-500 to-orange-400 text-white text-center text-sm">
            <th className="p-2">Переход ответственности</th>
            {STAGES.map((stage) => (
              <td key={stage.id} className="p-2 border-r border-orange-400">
                {stage.title}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupedResponsibilities).map(([group, items], groupIndex) => (
            <React.Fragment key={group}>
              <tr className="bg-gray-100">
                {groupIndex === 0 && (
                  <th
                    rowSpan={Object.values(groupedResponsibilities).flat().length + Object.keys(groupedResponsibilities).length}
                    className="bg-blue-900 text-white p-2 text-sm border-r border-blue-800"
                  >
                    Этапы проекта
                  </th>
                )}
                <th
                  colSpan={STAGES.length + 1}
                  className="p-2 text-left font-semibold text-gray-700 border-b border-gray-300"
                >
                  {group === 'design' && 'Проектирование'}
                  {group === 'organization' && 'Организация'}
                  {group === 'implementation' && 'Реализация'}
                  {group === 'furnishing' && 'Комплектация'}
                </th>
              </tr>
              {items.map((resp) => (
                <TableRow
                  key={resp.id}
                  resp={resp}
                  stages={STAGES}
                  activeStage={activeStage}
                  onCellClick={handleCellClick}
                  matrix={matrix}
                />
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
});

/**
 * Основной компонент
 */
const InteriorTermsMatrix = () => {
  const [selectedStage, setSelectedStage] = useState(null);

  const handleStageSelect = useCallback((stageId) => {
    setSelectedStage(stageId);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0 bg-grid-gray-200/50 bg-[size:20px_20px]" />
      <div className="relative">
        <Card className="w-full max-w-[1400px] mx-auto backdrop-blur-xl bg-white/80 border-0 shadow-2xl">
          <CardContent className="p-8">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-50" />
                  <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                    v1.0
                  </div>
                </div>
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  InteriorTerms Matrix
                </h2>
              </div>
              <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
                Интерактивная матрица распределения ответственности в проектах интерьера.
                <span className="block mt-2 text-sm text-gray-500">
                  Выберите этап проекта для просмотра детальной информации
                </span>
              </p>
            </div>
            <div className="relative">
              <MatrixTable onStageSelect={handleStageSelect} matrix={MATRIX} />
              {selectedStage && <DetailedMatrixView stage={selectedStage} matrix={MATRIX} />}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InteriorTermsMatrix;