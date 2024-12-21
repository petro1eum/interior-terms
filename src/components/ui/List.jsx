export const List = ({ items, color = 'blue', renderItem }) => {
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