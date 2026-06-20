import { NextResponse } from "next/server";
import { codingProfiles, manualFallback } from "@/lib/config";

export async function GET() {
  const { username, profileUrl } = codingProfiles.leetcode;

  try {
    const query = `
      query userProfile($username: String!) {
        matchedUser(username: $username) {
          username
          profile { ranking }
          submitStats {
            acSubmissionNum { difficulty count }
          }
        }
      }
    `;
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json", Referer: "https://leetcode.com" },
      body: JSON.stringify({ query, variables: { username } }),
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("LeetCode request failed");
    const json = await res.json();
    const user = json?.data?.matchedUser;
    if (!user) throw new Error("User not found");

    const totalSolved = user.submitStats.acSubmissionNum.find((d) => d.difficulty === "All")?.count ?? null;
    if (totalSolved === null) throw new Error("No stats found");

    return NextResponse.json({
      ok: true,
      platform: "LeetCode",
      primary: `${totalSolved}`,
      primaryLabel: "Problems Solved",
      secondary: user.profile?.ranking ? `Rank ${user.profile.ranking.toLocaleString()}` : null,
      profileUrl,
    });
  } catch (err) {
    const fb = manualFallback.leetcode;
    return NextResponse.json({
      ok: fb.solved !== null,
      platform: "LeetCode",
      primary: fb.solved !== null ? `${fb.solved}` : "—",
      primaryLabel: "Problems Solved",
      secondary: fb.rating ? `Rating ${fb.rating}` : null,
      profileUrl,
      error: fb.solved === null ? "Stats unavailable — set username in lib/config.js" : null,
    });
  }
}
