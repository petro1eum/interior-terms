import { Info, AlertTriangle } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { List } from './ui/List';
import { RisksList } from './stage/RisksList';
import { styles } from '@/styles/constants';
import { exportStageToPdf } from '@/utils/pdfExport';
import { useState } from 'react';

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

  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    try {
      await exportStageToPdf(stageDetails);
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const renderListItem = (item) => {
    if (typeof item === 'string') return item;
    
    return (
      <div className="space-y-2">
        <div className="font-medium">{item.title}</div>
        {item.description && (
          <div className="text-sm text-gray-600">{item.description}</div>
        )}
        {item.details && (
          <div className="text-sm text-gray-600">{item.details}</div>
        )}
        {item.items && (
          <ul className="ml-4 text-sm text-gray-600">
            {item.items.map((subItem, idx) => (
              <li key={idx} className="list-disc">{subItem}</li>
            ))}
          </ul>
        )}
        {item.elements && (
          <ul className="ml-4 text-sm text-gray-600">
            {item.elements.map((element, idx) => (
              <li key={idx} className="list-disc">{element}</li>
            ))}
          </ul>
        )}
        {item.stages && (
          <ul className="ml-4 text-sm text-gray-600">
            {item.stages.map((stage, idx) => (
              <li key={idx} className="list-disc">{stage}</li>
            ))}
          </ul>
        )}
        {item.views && (
          <ul className="ml-4 text-sm text-gray-600">
            {item.views.map((view, idx) => (
              <li key={idx} className="list-disc">{view}</li>
            ))}
          </ul>
        )}
        {item.frequency && (
          <div className="text-sm text-gray-600">
            Периодичность: {item.frequency}
          </div>
        )}
        {item.deliverable && (
          <div className="text-sm text-gray-600">
            Результат: {item.deliverable}
          </div>
        )}
        {item.reporting && (
          <div className="text-sm text-gray-600">
            Отчетность: {item.reporting}
          </div>
        )}
        {item.limit && (
          <div className="text-sm text-gray-600">
            Лимит: {item.limit}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6 max-w-[1200px] mx-auto">
      {/* Header */}
      <div className={styles.header}>
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-2xl font-bold">{stageInfo.id}</h2>
              <span className="text-xl text-gray-600">—</span>
              <span className="text-xl">{stageInfo.title}</span>
              <span className="text-gray-500">{stageInfo.subtext}</span>
            </div>
            <p className="text-gray-700">{stageInfo.fullName}</p>
            <p className="text-gray-600 mt-2">{stageInfo.description.short}</p>
          </div>

          <button 
            onClick={handleExport}
            disabled={isExporting}
            className={`flex items-center gap-2 px-4 py-2 ${
              isExporting ? 'bg-gray-100 text-gray-400' : 'bg-blue-50 hover:bg-blue-100 text-blue-600'
            } rounded-lg transition-colors duration-200`}
          >
            {isExporting ? (
              <span>Экспорт...</span>
            ) : (
              <>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                  />
                </svg>
                <span>Экспорт PDF</span>
                <span className="text-sm text-blue-400 ml-1">v1.0</span>
              </>
            )}
          </button>
        </div>
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
                    <div className="space-y-4">
                      {resp.included.map((item, idx) => (
                        <div key={idx} className="bg-white p-3 rounded-lg">
                          {typeof item === 'string' ? (
                            // Если item это строка
                            <div className="text-sm text-gray-600">{item}</div>
                          ) : (
                            // Если item это объект
                            <>
                              <div className="font-medium mb-2">{item.title}</div>
                              {item.details && (
                                <div className="text-sm text-gray-600 mb-2">{item.details}</div>
                              )}
                              {item.variants && (
                                <ul className="ml-4 text-sm text-gray-600">
                                  {item.variants.map((variant, idx) => (
                                    <li key={idx} className="list-disc">{variant}</li>
                                  ))}
                                </ul>
                              )}
                              {item.options && (
                                <ul className="ml-4 text-sm text-gray-600">
                                  {item.options.map((option, idx) => (
                                    <li key={idx} className="list-disc">{option}</li>
                                  ))}
                                </ul>
                              )}
                              {item.items && (
                                <ul className="ml-4 text-sm text-gray-600">
                                  {item.items.map((subItem, idx) => (
                                    <li key={idx} className="list-disc">{subItem}</li>
                                  ))}
                                </ul>
                              )}
                              {item.elements && (
                                <ul className="ml-4 text-sm text-gray-600">
                                  {item.elements.map((element, idx) => (
                                    <li key={idx} className="list-disc">{element}</li>
                                  ))}
                                </ul>
                              )}
                              {item.stages && (
                                <ul className="ml-4 text-sm text-gray-600">
                                  {item.stages.map((stage, idx) => (
                                    <li key={idx} className="list-disc">{stage}</li>
                                  ))}
                                </ul>
                              )}
                              {item.views && (
                                <ul className="ml-4 text-sm text-gray-600">
                                  {item.views.map((view, idx) => (
                                    <li key={idx} className="list-disc">{view}</li>
                                  ))}
                                </ul>
                              )}
                              {item.frequency && (
                                <div className="text-sm text-gray-600">
                                  Периодичность: {item.frequency}
                                </div>
                              )}
                              {item.deliverable && (
                                <div className="text-sm text-gray-600">
                                  Результат: {item.deliverable}
                                </div>
                              )}
                              {item.reporting && (
                                <div className="text-sm text-gray-600">
                                  Отчетность: {item.reporting}
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      ))}
                    </div>
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
                {/* Общий срок */}
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-sm text-blue-700 mb-1">Общий срок:</div>
                  <div className="text-2xl font-bold text-blue-900">{stageDetails.timeline.total}</div>
                </div>

                {/* Фазы */}
                {stageDetails.timeline.phases?.length > 0 && (
                  <div className="space-y-2">
                    {stageDetails.timeline.phases.map((phase, index) => (
                      <div key={index} className="bg-blue-50 p-3 rounded-lg flex justify-between items-center">
                        <span className="font-medium">{phase.name}</span>
                        <span className="text-gray-600">{phase.duration}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Присутствие */}
                {stageDetails.timeline.presence && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-blue-700 mb-1">Присутствие на объекте:</div>
                    <div className="font-medium">{stageDetails.timeline.presence}</div>
                  </div>
                )}

                {/* Периодичность */}
                {stageDetails.timeline.frequency && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-blue-700 mb-1">Периодичность:</div>
                    <div className="font-medium">{stageDetails.timeline.frequency}</div>
                  </div>
                )}

                {/* Отчетность */}
                {stageDetails.timeline.reporting && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-blue-700 mb-1">Отчетность:</div>
                    <div className="space-y-2">
                      {typeof stageDetails.timeline.reporting === 'string' 
                        ? <div className="font-medium">{stageDetails.timeline.reporting}</div>
                        : Object.entries(stageDetails.timeline.reporting).map(([period, report]) => (
                            <div key={period} className="flex justify-between items-center">
                              <span className="capitalize">{period}</span>
                              <span className="text-gray-600">{report}</span>
                            </div>
                          ))
                      }
                    </div>
                  </div>
                )}

                {/* Доступность */}
                {stageDetails.timeline.availability && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-blue-700 mb-1">Доступность:</div>
                    <div className="font-medium">{stageDetails.timeline.availability}</div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Этика - новая секция */}
          {stageDetails.ethics && (
            <section className={styles.card}>
              <SectionHeader icon={Info} title="Этика" color="purple" />
              <div className="space-y-4">
                {/* Этика исполнителя */}
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium text-purple-900 mb-3">Обязательства исполнителя:</h4>
                  <List items={stageDetails.ethics.contractor} color="purple" />
                </div>

                {/* Этика заказчика */}
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-medium text-indigo-900 mb-3">Обязательства заказчика:</h4>
                  <List items={stageDetails.ethics.client} color="indigo" />
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};