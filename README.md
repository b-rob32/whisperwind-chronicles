# 🏮 Whisperwind Chronicles

A cozy, whimsical Choose-Your-Own-Adventure fantasy reading quest crafted for **Mackenzie (Grade 3)** and **Elizabeth (Grade 5)** — featuring **Dual-Role Co-op**, **per-sister reading tiers**, and **Strict Mastery Gates**!

**Play Live:** https://b-rob32.github.io/whisperwind-chronicles/

## ✨ Highlights

- **Dual-Tier Reading Calibration (Grade 3 & Grade 5):** Every chapter is handcrafted in two tiers — *Apprentice (Grade 3)* for Mackenzie and *Master (Grade 5)* for Elizabeth. In Co-op mode, each sister's turn seamlessly renders in her chosen reading tier!
- **Dual-Role Co-op on One Shared Device:** Alternate turns reading aloud and leading each chapter, teaming up with **Doggy** (*Sniff a Clue* — highlights the exact evidence sentence in gold) and **Slothy** (*Slow & Steady* — eliminates 2 wrong options on tough gates). Both sisters earn stars, relics, and endings to their profiles.
- **Solo Mode:** Either sister can also embark solo at her own pace with her favorite companion.
- **Strict Mastery Gates:** Every chapter features a comprehension & inference gate that requires genuine close reading to advance, awarding a 1–3 Star mastery rating per chapter with gentle re-read nudges instead of harsh game-overs.
- **3 Illustrated Branching Quests & 6 Endings:**
  1. *The Whispering Lantern Woods* (2 branching routes, 2 endings, 2 relics)
  2. *Cloudberry Castle's Missing Crown* (2 branching routes, 2 endings, 2 relics)
  3. *The Sunken Starlight Library* (2 branching routes, 2 endings, 2 relics)
- **Explorer’s Trunk (Wardrobe & Relics):** Unlock hero hats and companion accessories for Doggy & Slothy as you earn Stars, and fill your Story Relic Shelf by exploring every branch!
- **Cozy Reading Comfort & Offline PWA:** Tap-to-define inline glossary words, adjustable font size & serif/sans toggle, gentle synthesized Web Audio SFX, and an offline-first precaching Service Worker for iPad/tablet play.

## 🛠️ Local Development

```bash
npm install
npm run dev
```

### Tests & Production Build

```bash
npm test
npm run build
```

## 🚀 Deploying to GitHub Pages

Push to `main` and enable **Settings → Pages → Build and deployment → Source: GitHub Actions**. The included workflow runs `npm test`, builds the app + offline Service Worker, and publishes automatically.
