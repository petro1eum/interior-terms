import { Info, AlertTriangle } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { List } from './ui/List';
import { RisksList } from './stage/RisksList';
import { styles } from '@/styles/constants';

// Импортируем все этапы напрямую
import { designStages } from '@/data/stages/designStages';
import { supervisionStages } from '@/data/stages/supervisionStages';
import { constructionStages } from '@/data/stages/constructionStages';
import { implementationStages } from '@/data/stages/implementationStages';

// Объединяем все этапы в один объект
const allStages = {
  ...designStages,        // группа E
  ...supervisionStages,   // группа F
  ...constructionStages,  // группа C
  ...implementationStages // группа D
};

export const StageDetails = ({ stage }) => {
  const stageInfo = allStages[stage];
  const stageDetails = allStages[stage];
  
  console.log('Stage ID:', stage);
  console.log('Stage Info:', stageInfo);
  console.log('Stage Details:', stageDetails);
  console.log('Deliverables:', stageDetails?.deliverables);
  console.log('Responsibilities:', stageDetails?.responsibilities);
  
  if (!stageInfo || !stageDetails) return null;

  const renderListItem = (item) => {
    if (typeof item === 'string') return item;
    return (
      <div>
        <div className="font-medium">{item.title}</div>
        {item.description && (
          <div className="text-sm text-gray-600">{item.description}</div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6 max-w-[1200px] mx-auto">
      {/* Header */}
      <div className={styles.header}>
        <h2 className="text-2xl font-bold">{stageInfo.abbreviation}</h2>
        <span className="text-gray-600">{stageInfo.englishTitle}</span>
        <span className="text-gray-500">{stageInfo.russianTitle}</span>
        <p className="text-gray-700 mt-2">{stageInfo.fullEnglish}</p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Описание */}
          <section className={styles.card}>
            <SectionHeader icon={Info} title="Описание" />
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">{stageDetails.description.full}</p>
              <p className="text-gray-600 mt-2">{stageDetails.description.scope}</p>
            </div>
          </section>

          {/* Обязанности и работы */}
          {stageDetails.responsibilities && 
           typeof stageDetails.responsibilities === 'object' && 
           Object.entries(stageDetails.responsibilities).map(([key, resp]) => (
            <section key={key} className={styles.card}>
              <SectionHeader icon={Info} title={resp.title} />
              <div className="space-y-4">
                {/* Описание */}
                <p className="text-gray-700">{resp.description}</p>

                {/* Включенные работы */}
                {resp.included && Array.isArray(resp.included) && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-3">Включено в этап:</h4>
                    <List items={resp.included} color="blue" />
                  </div>
                )}

                {/* Обязанности исполнителя */}
                {resp.executorResponsibilities && Array.isArray(resp.executorResponsibilities) && (
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-3">Обязанности исполнителя:</h4>
                    <List items={resp.executorResponsibilities} color="green" />
                  </div>
                )}

                {/* Обязанности заказчика */}
                {resp.clientResponsibilities && Array.isArray(resp.clientResponsibilities) && (
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-medium text-orange-900 mb-3">Обязанности заказчика:</h4>
                    <List items={resp.clientResponsibilities} color="orange" />
                  </div>
                )}
              </div>
            </section>
          ))}

          {/* Результаты работ */}
          {stageDetails.deliverables?.length > 0 && (
            <section className={styles.card}>
              <SectionHeader icon={Info} title="Результаты работ" />
              <div className="space-y-4">
                {stageDetails.deliverables.map((del, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">{del.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">Формат: {del.format}</p>
                    {del.contents?.length > 0 && (
                      <List items={del.contents} color="gray" />
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Не включено */}
          {stageDetails.excluded && Object.keys(stageDetails.excluded).length > 0 && (
            <section className={styles.card}>
              <SectionHeader icon={AlertTriangle} title="Не включено" color="red" />
              <div className="bg-red-50 p-4 rounded-lg">
                {Object.entries(stageDetails.excluded).map(([category, items]) => (
                  <div key={category} className="mb-4 last:mb-0">
                    <h5 className="font-semibold text-red-900 mb-2 capitalize">{category}</h5>
                    {Array.isArray(items) && items.length > 0 && (
                      <List items={items} color="red" />
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Риски */}
          {stageDetails.risks?.length > 0 && (
            <section className={styles.card}>
              <SectionHeader icon={AlertTriangle} title="Риски" color="yellow" />
              <RisksList risks={stageDetails.risks} />
            </section>
          )}

          {/* Сроки */}
          {stageDetails.timeline && Object.keys(stageDetails.timeline).length > 0 && (
            <section className={styles.card}>
              <SectionHeader icon={Info} title="Сроки реализации" />
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-sm text-blue-700 mb-1">Общий срок:</div>
                  <div className="text-2xl font-bold text-blue-900">{stageDetails.timeline.total}</div>
                </div>
                {stageDetails.timeline.phases?.length > 0 && (
                  <div className="space-y-2">
                    {stageDetails.timeline.phases.map((phase, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg flex justify-between items-center">
                        <span className="font-medium">{phase.name}</span>
                        <span className="text-gray-600">{phase.duration}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};