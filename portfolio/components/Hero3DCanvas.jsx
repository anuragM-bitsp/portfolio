"use client";

import dynamic from "next/dynamic";

const GraphHero = dynamic(() => import("./GraphHero"), { ssr: false });

export default function Hero3DCanvas() {
  return (
    <div className="w-full h-full">
      <GraphHero />
    </div>
  );
}
