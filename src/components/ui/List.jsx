export const List = ({ items, color = 'blue' }) => {
  const bulletClass = `w-2 h-2 bg-${color}-400 rounded-full mr-2`;
  
  return (
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="text-gray-600">
          {typeof item === 'object' ? (
            <div className="space-y-2">
              {/* Заголовок */}
              <div className="flex items-center">
                <span className={bulletClass} />
                <span className="font-medium">{item.title}</span>
              </div>
              
              {/* Описание */}
              {item.details && (
                <div className="text-sm text-gray-600 ml-4">
                  {item.details}
                </div>
              )}
              
              {/* Описание (альтернативное) */}
              {item.description && (
                <div className="text-sm text-gray-600 ml-4">
                  {item.description}
                </div>
              )}

              {/* Этапы */}
              {item.stages && Array.isArray(item.stages) && (
                <ul className="ml-8 space-y-1">
                  {item.stages.map((stage, i) => (
                    <li key={i} className="text-sm text-gray-600 list-disc">
                      {stage}
                    </li>
                  ))}
                </ul>
              )}

              {/* Объем работ */}
              {item.scope && Array.isArray(item.scope) && (
                <ul className="ml-8 space-y-1">
                  {item.scope.map((scope, i) => (
                    <li key={i} className="text-sm text-gray-600 list-disc">
                      {scope}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <div className="flex items-center">
              <span className={bulletClass} />
              <span>{item}</span>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}; 