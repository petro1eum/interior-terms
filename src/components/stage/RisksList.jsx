import { List } from '../ui/List';

export const RisksList = ({ risks }) => {
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