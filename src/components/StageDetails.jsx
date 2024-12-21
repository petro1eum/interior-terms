import { Info, AlertTriangle } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { List } from './ui/List';
import { RisksList } from './stage/RisksList';
import { styles } from '@/styles/constants';
import { stagesList } from '@/data/stages/stagesList';
import { projectStages } from '@/data/stages';

export const StageDetails = ({ stage }) => {
  const stageInfo = stagesList.find(s => s.id === stage);
  const stageDetails = projectStages[stage];
  
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
          <section className={styles.card}>
            <SectionHeader icon={Info} title="Описание" />
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">{stageDetails.description.full}</p>
            </div>
          </section>

          {/* Responsibilities */}
          {Object.entries(stageDetails.responsibilities).map(([key, resp]) => (
            <section key={key} className={styles.card}>
              <SectionHeader icon={Info} title={resp.title} />
              <List 
                items={resp.included} 
                color="blue"
                renderItem={renderListItem}
              />
            </section>
          ))}
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <section className={styles.card}>
            <SectionHeader icon={AlertTriangle} title="Риски" color="yellow" />
            <RisksList risks={stageDetails.risks} />
          </section>
        </div>
      </div>
    </div>
  );
};