import { NextResponse } from "next/server";
import { codingProfiles, manualFallback } from "@/lib/config";

export async function GET() {
  const { username, profileUrl } = codingProfiles.codeforces;

  try {
    const res = await fetch(
      `https://codeforces.com/api/user.info?handles=${encodeURIComponent(username)}`,
      { next: { revalidate: 3600 } }
    );
    const json = await res.json();
    if (json.status !== "OK") throw new Error("Codeforces request failed");
    const user = json.result[0];

    return NextResponse.json({
      ok: true,
      platform: "Codeforces",
      primary: user.rating ? `${user.rating}` : "Unrated",
      primaryLabel: "Rating",
      secondary: user.rank ? user.rank.replace(/\b\w/g, (c) => c.toUpperCase()) : null,
      profileUrl,
    });
  } catch (err) {
    const fb = manualFallback.codeforces;
    return NextResponse.json({
      ok: fb.rating !== null,
      platform: "Codeforces",
      primary: fb.rating !== null ? `${fb.rating}` : "—",
      primaryLabel: "Rating",
      secondary: fb.rank ?? null,
      profileUrl,
      error: fb.rating === null ? "Stats unavailable — set username in lib/config.js" : null,
    });
  }
}
