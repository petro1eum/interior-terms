import React from 'react';

export const FullMatrix = () => {
  const responsibilities = [
    'Планировочное решение',
    'Визуализация',
    'Рабочая документация',
    'Спецификация материалов',
    'Подбор материалов',
    'Подбор подрядчиков',
    'Составление смет',
    'Авторский надзор',
    'Управление проектом',
    'Подготовительные работы',
    'Строительные работы',
    'Инженерные системы',
    'Отделочные работы',
    'Меблировка',
    'Декорирование'
  ];

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
    { id: 'DFP', title: 'Delivered Fully Project', subtext: '(Полная реализация)' }
  ];

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border p-2 bg-gray-100">Ответственность</th>
          {stages.map(stage => (
            <th key={stage.id} className="border p-2 bg-gray-100 text-center">
              {stage.id}<br/>{stage.subtext}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {responsibilities.map((resp, idx) => (
          <tr key={idx}>
            <td className="border p-2">{resp}</td>
            {stages.map(stage => (
              <td key={stage.id} className="border p-2 text-center">
                {idx < 2 ? 'И' : 'З'}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}; 