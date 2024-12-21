import { projectStages } from './projectStages';
import { abbreviations } from './abbreviations';

// Объединяем информацию из разных источников
export const stagesList = Object.entries(projectStages).map(([id, stage]) => ({
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
export const stageCategories = {
  design: stagesList.filter(stage => stage.category === 'design'),
  supervision: stagesList.filter(stage => stage.category === 'supervision'),
  construction: stagesList.filter(stage => stage.category === 'construction'),
  implementation: stagesList.filter(stage => stage.category === 'implementation')
}; 