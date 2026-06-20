export default function SkillsMatrix({ skills }) {
  return (
    <div className="glass-panel rounded-2xl overflow-hidden">
      {Object.entries(skills).map(([category, items], i) => (
        <div
          key={category}
          className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-6 py-5 ${
            i !== 0 ? "border-t border-glass-border" : ""
          }`}
        >
          <span className="font-mono text-xs uppercase tracking-wider text-teal w-full sm:w-36 shrink-0">
            {category}
          </span>
          <div className="flex flex-wrap gap-x-1.5 gap-y-2">
            {items.map((item, idx) => (
              <span key={item} className="text-sm text-ash-muted">
                {item}
                {idx < items.length - 1 ? <span className="text-ash-faint">,</span> : null}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
