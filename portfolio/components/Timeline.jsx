export default function Timeline({ items }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-glass-border" />
      <div className="flex flex-col gap-10">
        {items.map((item, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-8 top-1.5 w-2.5 h-2.5 rounded-full bg-teal shadow-glow" />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
              <h3 className="font-display text-lg text-ash">{item.role}</h3>
              <span className="text-ash-faint text-sm">· {item.org}</span>
              <span className="sm:ml-auto text-xs font-mono text-ash-faint">{item.period}</span>
            </div>
            <ul className="flex flex-col gap-1.5 mb-3">
              {item.points.map((p, j) => (
                <li
                  key={j}
                  className="text-sm text-ash-muted leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-ash-faint"
                >
                  {p}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {item.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs font-mono text-ash-muted bg-white/5 border border-glass-border rounded-full px-2.5 py-0.5"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
