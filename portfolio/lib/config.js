// ─────────────────────────────────────────────────────────────────
// EDIT THIS FILE to plug in your real links and usernames.
// Everything in this file is the only thing you need to touch to
// re-point the site at your actual profiles once you have them.
// ─────────────────────────────────────────────────────────────────

export const links = {
  github: "https://github.com/your-github-username",
  linkedin: "https://linkedin.com/in/your-linkedin-username",
  email: "f20221687@pilani.bits-pilani.ac.in",
  phone: "+91 89554 17599",
  resumeUrl: "/resume.pdf", // drop a resume.pdf into /public to enable the download button
};

// Usernames used to fetch LIVE stats via the API routes in app/api/*.
// Leave the demo values in until you have real handles — the cards
// will show a friendly "stats unavailable" state instead of breaking.
export const codingProfiles = {
  leetcode: {
    username: "demo_user",
    profileUrl: "https://leetcode.com/demo_user",
  },
  codeforces: {
    username: "demo_user",
    profileUrl: "https://codeforces.com/profile/demo_user",
  },
  codechef: {
    username: "demo_user",
    profileUrl: "https://www.codechef.com/users/demo_user",
  },
  gfg: {
    username: "demo_user",
    profileUrl: "https://www.geeksforgeeks.org/user/demo_user",
  },
};

// Optional manual fallback numbers — shown ONLY if the live fetch
// fails (CodeChef/GFG don't have official public APIs, so this is
// your safety net). Set real numbers here any time, or leave null.
export const manualFallback = {
  leetcode: { solved: null, rating: null },
  codeforces: { rating: null, maxRating: null, rank: null },
  codechef: { rating: null, stars: null },
  gfg: { score: null, solved: null },
};

// Demo / placeholder project links — swap these for real deployed
// URLs and GitHub repos as they become feasible.
export const projectLinks = {
  ragPlatform: {
    demo: "https://demo.your-domain.com/rag-platform",
    github: "https://github.com/your-github-username/rag-document-intelligence",
  },
  multiAgent: {
    demo: "https://demo.your-domain.com/multi-agent-system",
    github: "https://github.com/your-github-username/multi-agent-hacker-cup",
  },
  vlmDiagrams: {
    demo: "https://demo.your-domain.com/vlm-engineering-diagrams",
    github: "https://github.com/your-github-username/vlm-engineering-diagrams",
  },
};
