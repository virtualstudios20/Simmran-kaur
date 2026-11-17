# Simmran-kaur
AI-powered video editing and motion graphics projects for Virtual Studios.

---

## Getting started (beginner guide)

This project uses [Remotion](https://www.remotion.dev): videos are written as React code, previewed live in the browser and rendered to MP4.

### 1. One-time setup on your computer

1. Install **Node.js 18 or newer** from <https://nodejs.org> (choose the LTS version).
2. Install a code editor such as **VS Code** (<https://code.visualstudio.com>).
3. Download this repository, open a terminal in its folder and run:

   ```bash
   npm install
   ```

### 2. Everyday commands

| Command | What it does |
|---|---|
| `npm run studio` | Opens **Remotion Studio** at <http://localhost:3000>: live preview with a timeline |
| `npm run render:brand-test` | Renders the brand test Reel to `out/brand-test.mp4` |
| `npx remotion render <Id> out/<name>.mp4` | Renders any Reel by its composition id |
| `npm run lint` | Checks the code for mistakes |

### 3. Reel format

- 1080 × 1920 (9:16), **60 fps**, H.264 MP4
- Keep important text inside the safe area (`reel.safeArea` in `src/brand/theme.ts`) so Instagram's buttons and captions don't cover it.

### 4. Project structure

```
public/
  broll/          your B-roll clips (not committed to git: they're large)
  music/          background tracks (not committed to git)
  logos/          Virtual Studios logos
  fonts/poppins/  bundled Poppins font (renders work offline)
src/
  Root.tsx        list of all Reels (each appears in Studio)
  brand/theme.ts  brand colours, font, Reel size, motion presets
  components/     reusable pieces: AnimatedTitle, AccentBar, Kicker, Grain, BRoll
  transitions/    custom transitions (redSweep)
  reels/          one folder per Reel
out/              rendered videos (not committed to git)
```

### 5. Brand

| Token | Value |
|---|---|
| Red | `#E31E24` |
| Black | `#000000` |
| White | `#FFFFFF` |
| Font | Poppins (400 / 600 / 700 / 800 / 900) |

### Licensing note

Remotion is free for individuals and companies with up to 3 employees. Larger companies need a Company License: <https://www.remotion.pro/license>.
