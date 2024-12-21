export const SectionHeader = ({ icon: Icon, title, color = 'blue' }) => (
  <div className="flex items-center gap-3 mb-4">
    <Icon className={`w-5 h-5 text-${color}-500`} />
    <h3 className="text-xl font-bold">{title}</h3>
  </div>
); 