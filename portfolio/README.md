# Anurag Mohapatra — Portfolio

Dark, glassmorphism portfolio built with Next.js (App Router), Tailwind CSS,
Framer Motion, and a custom React Three Fiber 3D hero (an animated node-edge
graph — a nod to both molecular structure and the agent/retrieval graphs in
your projects). Live stats are pulled from LeetCode, Codeforces, CodeChef,
and GeeksforGeeks on each page load via internal API routes.

## 1. Run it locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## 2. The only file you need to edit first: `lib/config.js`

Everything that's currently a placeholder lives in one place:

- `links.github`, `links.linkedin`, `links.email`, `links.phone`
- `links.resumeUrl` — drop a `resume.pdf` into `/public` and this will work as-is
- `codingProfiles.*` — your real LeetCode / Codeforces / CodeChef / GFG usernames
- `manualFallback.*` — optional hardcoded numbers, used only if a live stat
  fetch fails (CodeChef and GFG don't have official public APIs, so they're
  more likely to need this safety net at some point)
- `projectLinks.*` — swap in real live-demo URLs and GitHub repo links as
  you deploy each project; until then, demo placeholders are wired in

To edit project descriptions, experience, skills, or the achievement text,
edit `lib/data.js` — it's all in one readable file, no JSX involved.

## 3. How the live stats work

- **LeetCode** and **Codeforces** use the platforms' own (unofficial but
  stable) public endpoints directly — no extra setup needed beyond a valid
  username.
- **CodeChef** and **GeeksforGeeks** don't expose official public APIs, so
  the API routes (`app/api/codechef`, `app/api/gfg`) call community-run proxy
  APIs. These can occasionally go down — when they do, the card automatically
  falls back to whatever you've set in `manualFallback` in `lib/config.js`,
  or shows a "stats unavailable" note if you haven't set one.
- All four routes cache responses for an hour (`revalidate: 3600`) so you're
  not hammering these services on every visit.

## 4. Deploy to Vercel

**Option A — GitHub (recommended):**
1. Push this folder to a new GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset auto-detects as Next.js — just click Deploy.

**Option B — Vercel CLI:**
```bash
npm i -g vercel
vercel
```
Follow the prompts; it'll detect the Next.js project automatically.

Either way, no environment variables are required — everything is configured
in `lib/config.js`.

## 5. Project structure

```
app/
  page.jsx              Home (hero, live stats, experience, featured projects, skills)
  projects/page.jsx      Full project list
  achievements/page.jsx  Meta Hacker Cup highlight + live competitive programming stats
  contact/page.jsx       Contact info with copy-to-clipboard email
  api/leetcode/route.js      Live LeetCode stats
  api/codeforces/route.js    Live Codeforces stats
  api/codechef/route.js      Live CodeChef stats (community API + fallback)
  api/gfg/route.js           Live GFG stats (community API + fallback)
components/        Nav, Footer, GraphHero (3D), StatCard, ProjectCard, Timeline, SkillsMatrix
lib/
  data.js           All resume content (experience, projects, skills, achievements)
  config.js         Links, usernames, fallback numbers — EDIT THIS FIRST
```

## 6. Adding a profile photo (optional)

The hero currently uses the 3D graph instead of a headshot. If you'd rather
add a photo, drop an image into `/public` and swap the right column of the
hero section in `app/page.jsx` (`<Hero3DCanvas />`) for an `<Image />` tag.

## 7. Adding more projects later

Add a new object to the `projects` array in `lib/data.js` (same shape as the
existing three) and, optionally, a matching entry in `projectLinks` in
`lib/config.js`. It'll automatically appear on both the home page and the
`/projects` page.
