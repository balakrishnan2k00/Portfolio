# Portfolio

Glassmorphism portfolio for Balakrishnan A — React, Vite, light/dark theme, and GitHub Pages.

**Live site (after deploy):** https://balakrishnan2k00.github.io/portfolio/

**Stack:** React 19, Vite, JavaScript. Icons: Lucide + `react-icons` (skills). Deploy: `gh-pages` (same pattern as [bento](https://github.com/balakrishnan2k00/bento)).

## What you need

- [Node.js](https://nodejs.org/) 20 or newer
- Git
- A GitHub account
- Optional: [GitHub CLI](https://cli.github.com/) (`gh`) for login from the terminal

## Run locally

```bash
cd e:\Projects\Portfolio
npm install
npm run dev
```

Open http://localhost:5173.

Use the **moon/sun** button in the nav to switch light and dark theme (saved in the browser).

## Edit content

| What | Where |
| --- | --- |
| Name, summary, experience, projects, nav | `src/data.js` |
| Skill groups and tech lists | `src/data.js` → `skillGroups` |
| Skill icons / dedupe by icon | `src/skillIcons.jsx` |
| Profile photos & background | `public/images/` (`bk.jpg`, `bg.jpg`, etc.) |
| Glossy **BA** logo (navbar) | `src/components/BrandLogo.jsx` + `src/index.css` |
| Browser tab icon | `public/favicon.svg` |
| Résumé reference (not loaded by the app) | `resume.txt` |

The old static HTML site is under `legacy/`.

### Skills section

- **Overview:** one icon per technology (duplicates merged when they share the same icon). Hover for the name.
- **Category tabs:** full list with icon + label.

### GitHub section on the site

The live site does **not** call the GitHub API in the browser. It reads a **snapshot** baked in at build time:

| File | Purpose |
| --- | --- |
| `githubdata.txt` | Human-friendly copy of the snapshot (edit or archive) |
| `src/githubdata.json` | **Imported by the app** — must match what you want on the site |

#### Refresh the snapshot

```bash
npm run refresh-github
```

This fetches public data for `balakrishnan2k00` (profile + 8 latest non-fork repos) and writes **both** files. Check `fetchedAt` in the JSON.

#### Put the snapshot in Git

```bash
git add githubdata.txt src/githubdata.json
git commit -m "Refresh GitHub snapshot"
git push origin main
```

Then deploy (below) so GitHub Pages serves the new build.

If you only edit `githubdata.txt`, copy the same JSON into `src/githubdata.json` or run `npm run refresh-github` again.

---

## Deploy to GitHub (first time)

### 1. Fix Git “dubious ownership” (Windows only, if Git blocks the repo)

If `git status` fails with *dubious ownership*:

```bash
git config --global --add safe.directory E:/Projects/Portfolio
```

### 2. Create the GitHub repository

On GitHub, create a repo named **`portfolio`** (or another name — then change `homepage` in `package.json` to match `https://balakrishnan2k00.github.io/<repo-name>`).

### 3. Initialize and push source (`main`)

From `e:\Projects\Portfolio`:

```bash
git init
git add -A
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/balakrishnan2k00/portfolio.git
git push -u origin main
```

Use your real repo URL if the name or owner differs.

Do **not** commit `.env`, secrets, or `node_modules` (already in `.gitignore`).

### 4. Enable GitHub Pages

Repo → **Settings → Pages → Build and deployment → Source**:

- Branch: **`gh-pages`**
- Folder: **`/`** (root)

You will create `gh-pages` in the next step.

### 5. Publish the live site

```bash
npm run deploy
```

This runs `vite build` and pushes the contents of `dist/` to the **`gh-pages`** branch.

After a minute or two, open https://balakrishnan2k00.github.io/portfolio/

---

## Deploy after you change the site

Typical workflow:

```bash
cd e:\Projects\Portfolio
npm run dev
```

Edit and check in the browser, then:

```bash
# Optional: update GitHub section data
npm run refresh-github

git add -A
git status
git commit -m "Describe your change"
git push origin main
npm run deploy
```

- **`main`** = source code (what you edit).
- **`gh-pages`** = built site only (updated by `npm run deploy`, not hand-edited).

---

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Local dev server at http://localhost:5173 |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint |
| `npm run refresh-github` | Refresh `githubdata.txt` and `src/githubdata.json` from the GitHub API |
| `npm run deploy` | Build and publish `dist/` to branch `gh-pages` |

---

## Troubleshooting

| Issue | What to try |
| --- | --- |
| Deploy fails / no `gh-pages` | Ensure `origin` points at the right repo and you have push access. Run `npm run build` first to see build errors. |
| Live site is old | Run `npm run deploy` again. Hard-refresh the browser (Ctrl+Shift+R). |
| Tab icon unchanged | Browsers cache favicons; hard-refresh or open the site in a new profile. |
| GitHub section outdated | `npm run refresh-github`, commit JSON files, then `npm run deploy`. |
| Wrong Pages URL | `homepage` in `package.json` must match `https://<user>.github.io/<repo>/` and `vite.config.js` uses `base: './'`. |

---

## Related

- [Bento start page](https://github.com/balakrishnan2k00/bento) — same `gh-pages` deploy flow
