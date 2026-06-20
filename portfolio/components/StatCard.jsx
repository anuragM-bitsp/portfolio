"use client";

import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

const endpoints = {
  leetcode: "/api/leetcode",
  codeforces: "/api/codeforces",
  codechef: "/api/codechef",
  gfg: "/api/gfg",
};

export default function StatCard({ source }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetch(endpoints[source])
      .then((r) => r.json())
      .then((json) => active && setData(json))
      .catch(() => active && setData({ ok: false, platform: source, primary: "—", error: "Request failed" }))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, [source]);

  return (
    <a
      href={data?.profileUrl || "#"}
      target="_blank"
      rel="noreferrer"
      className="glass-panel glass-panel-hover rounded-2xl p-5 flex flex-col gap-3 group"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-wider text-ash-faint">
          {loading ? "Loading…" : data?.platform}
        </span>
        <ExternalLink size={13} className="text-ash-faint group-hover:text-teal transition-colors" />
      </div>

      {loading ? (
        <div className="h-9 w-20 rounded bg-white/5 animate-pulse-soft" />
      ) : (
        <div className="font-display text-3xl text-ash">{data.primary}</div>
      )}

      <div className="text-xs font-mono text-ash-muted">
        {loading ? "" : data?.error ? data.error : data?.secondary || data?.primaryLabel}
      </div>
    </a>
  );
}
