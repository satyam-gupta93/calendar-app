

export function Spirals() {
  return (
    <div className="flex justify-center items-center gap-4 py-3 bg-[#e8e4de] dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 rounded-t-lg">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="spiral-hole" />
      ))}
    </div>
  );
}