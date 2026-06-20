import { Trophy } from "lucide-react";
import StatCard from "@/components/StatCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import { achievements } from "@/lib/data";

export const metadata = {
  title: "Achievements — Anurag Mohapatra",
};

export default function AchievementsPage() {
  const headline = achievements[0];

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <RevealOnScroll>
        <span className="font-mono text-xs uppercase tracking-wider text-teal">Track record</span>
        <h1 className="font-display text-4xl sm:text-5xl text-ash mt-4 mb-14 text-balance">Achievements</h1>
      </RevealOnScroll>

      {/* Headline achievement */}
      <RevealOnScroll>
        <div className="glass-panel rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-amber-dim blur-3xl" />
          <div className="relative flex flex-col sm:flex-row gap-6 sm:items-start">
            <div className="w-12 h-12 rounded-xl bg-amber-dim border border-amber/30 flex items-center justify-center shrink-0">
              <Trophy size={20} className="text-amber" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber">{headline.detail}</span>
              <h2 className="font-display text-2xl sm:text-3xl text-ash mt-2 mb-4 text-balance">
                {headline.title}
              </h2>
              <p className="text-ash-muted leading-relaxed max-w-2xl">{headline.description}</p>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Live competitive programming stats */}
      <RevealOnScroll>
        <h2 className="font-display text-sm uppercase tracking-wider text-ash-faint mb-2">
          Competitive programming — live stats
        </h2>
        <p className="text-sm text-ash-faint mb-8 max-w-2xl">
          Pulled live from each platform on page load. CodeChef and GFG don&apos;t expose official
          public APIs, so those two fall back to manually-set numbers if a live fetch fails.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <StatCard source="leetcode" />
          <StatCard source="codeforces" />
          <StatCard source="codechef" />
          <StatCard source="gfg" />
        </div>
      </RevealOnScroll>
    </div>
  );
}
