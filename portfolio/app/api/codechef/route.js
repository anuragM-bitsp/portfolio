import { NextResponse } from "next/server";
import { codingProfiles, manualFallback } from "@/lib/config";

// CodeChef does not expose an official public API. This uses a
// community-maintained proxy, which can go down or rate-limit — that's
// why every response always falls back to manualFallback.codechef in
// lib/config.js if the request fails.
export async function GET() {
  const { username, profileUrl } = codingProfiles.codechef;

  try {
    const res = await fetch(`https://codechef-api.vercel.app/handle/${encodeURIComponent(username)}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("CodeChef request failed");
    const json = await res.json();
    if (!json || json.success === false || !json.currentRating) throw new Error("User not found");

    return NextResponse.json({
      ok: true,
      platform: "CodeChef",
      primary: `${json.currentRating}`,
      primaryLabel: "Rating",
      secondary: json.stars ? `${json.stars}` : null,
      profileUrl,
    });
  } catch (err) {
    const fb = manualFallback.codechef;
    return NextResponse.json({
      ok: fb.rating !== null,
      platform: "CodeChef",
      primary: fb.rating !== null ? `${fb.rating}` : "—",
      primaryLabel: "Rating",
      secondary: fb.stars ? `${fb.stars}★` : null,
      profileUrl,
      error: fb.rating === null ? "Stats unavailable — set username in lib/config.js" : null,
    });
  }
}
