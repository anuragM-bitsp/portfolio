import { NextResponse } from "next/server";
import { codingProfiles, manualFallback } from "@/lib/config";

// GeeksforGeeks does not expose an official public API either. This uses
// a community-maintained proxy, with the same manual-fallback safety net
// as the CodeChef route.
export async function GET() {
  const { username, profileUrl } = codingProfiles.gfg;

  try {
    const res = await fetch(`https://geeks-for-geeks-api.vercel.app/${encodeURIComponent(username)}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("GFG request failed");
    const json = await res.json();
    const solved = json?.info?.totalProblemsSolved ?? json?.solvedStats?.total ?? null;
    if (solved === null) throw new Error("User not found");

    return NextResponse.json({
      ok: true,
      platform: "GeeksforGeeks",
      primary: `${solved}`,
      primaryLabel: "Problems Solved",
      secondary: json?.info?.codingScore ? `Score ${json.info.codingScore}` : null,
      profileUrl,
    });
  } catch (err) {
    const fb = manualFallback.gfg;
    return NextResponse.json({
      ok: fb.solved !== null,
      platform: "GeeksforGeeks",
      primary: fb.solved !== null ? `${fb.solved}` : "—",
      primaryLabel: "Problems Solved",
      secondary: fb.score ? `Score ${fb.score}` : null,
      profileUrl,
      error: fb.solved === null ? "Stats unavailable — set username in lib/config.js" : null,
    });
  }
}
