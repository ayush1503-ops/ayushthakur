# AYUSH THAKUR — Manga-Style Portfolio 🗯️

> Code is my superpower.

A black & white, manga / anime-sketch styled personal portfolio for **Ayush Thakur**, full-stack developer from Delhi. Every page reads like a comic issue — cover, chapters, manga panels, halftone textures, SFX lettering — while staying fast, static and easy to edit.

---

## 🚀 Live / Deploy

This is a **fully static site** (plain HTML + CSS + JS — no build step, no dependencies).

Deploy to **Vercel** (or Netlify / GitHub Pages):

```bash
# from this folder
vercel deploy --prod
```

Or drag-and-drop the `portfolio` folder into the Vercel dashboard. No configuration needed.

Run locally:

```bash
cd portfolio
python3 -m http.server 8080
# open http://localhost:8080
```

---

## 📁 Structure

```
portfolio/
├── index.html          # Home: Cover, Ch.01 Origin, Ch.02 Missions, Ch.03 Arsenal, Ch.04 Process, Finale (contact)
├── project.html        # Case-file page template — renders any project via ?p=<id>
├── css/
│   └── style.css       # Full manga design system
├── js/
│   ├── data.js         # ✏️ ALL content lives here (projects + contact config)
│   ├── main.js         # Home page logic (cards, filters, skills, contact links)
│   └── project.js      # Case-file renderer (reads ?p from the URL)
└── assets/
    ├── art/            # Original manga-style illustrations (hero, dev, scout, ninja, saiyan)
    └── shots/          # Real screenshots of each live project (desktop, gallery, mobile, thumbs)
```

Case-file URLs look like: `project.html?p=pasha`

---

## ✏️ Editing Content

Almost everything is edited in **`js/data.js`** — no need to touch HTML.

### Contact config (`window.SITE`)

```js
window.SITE = {
  name: "Ayush Thakur",
  email: "ayusheditor1503@gmail.com",
  linkedin: "https://www.linkedin.com/in/ayush-thakur-a91827419/",
  whatsapp: "919599648246",        // country code + number, digits only
  mailSubject: "New project inquiry — let's build something legendary",
  mailBody: "Hi Ayush,\n\nI saw your portfolio ...",
  waText: "Hi Ayush! I saw your portfolio and I'd like to discuss a project."
};
```

These values automatically power every contact button on the site (see below).

### Projects (`window.PROJECTS`)

Each project entry contains: `id, no, title, alias, category, year, role, status, stack[], live, sfx, tagline, summary, challenge, approach, features[], shots{}`.

To add a project: copy an existing entry, give it a new `id`, drop its screenshots into `assets/shots/`, and register its filter group in the `groups` map inside `js/main.js`.

### Skills

The 9 arsenal/skill cards (icon, Japanese label, description, "used in" line) are listed at the top of **`js/main.js`**.

---

## 📬 Contact Buttons (one-click email & WhatsApp)

| Button | What happens on click |
|---|---|
| **START A PROJECT ↗** (hero) | Opens the visitor's mail app with a **pre-filled draft**: to `ayusheditor1503@gmail.com`, with subject + a project/budget/timeline template in the body |
| **Big email link** (contact panel) | Same pre-filled mail draft |
| **WHATSAPP ↗** | Opens **WhatsApp chat to +91 95996 48246** (`wa.me`) with a pre-typed message. App on mobile, WhatsApp Web on desktop |
| **LINKEDIN ↗** | Opens the LinkedIn profile in a new tab |
| **COPY EMAIL** | Copies the email address to the clipboard |

To change the number/email/messages, edit only the `window.SITE` block in `js/data.js`.

---

## ✨ Features

- **Manga design system** — halftone/screentone textures, speed lines, SFX kanji (ドンッ, ゴォォ), panel borders, chapter numbering (第01話 style), koma process panels (壱弐参肆).
- **Original anime-style art** — five custom ink illustrations channeling shonen manga: the hero cover stars three labeled archetypes — **The Scout** (Attack on Titan), **The Jinchūriki** (Naruto) and **The Saiyan** (Dragon Ball / Goku) — plus a dev-at-desk, scout, ninja and energy-blast finale piece. *Original artwork inspired by those characters, not copied assets.*
- **Real project screenshots** — captured live from each deployed project, shown in browser-chrome frames, with a desktop gallery + phone mockup per case file.
- **4 real case files** — The Pasha Atelier, Brainchild Games, Archive N°9, Editing Box, each with live link, challenge/approach write-up and kanji-numbered feature panels.
- **Interactions** — one-time ink loader, skill/project filtering, scroll reveals, subtle parallax, image lightbox (click any screenshot), marquee ticker.
- **Responsive** — full mobile layout; no external JS libraries. Google Fonts only.

## 🛠️ Tech

HTML · CSS · Vanilla JavaScript · Google Fonts (Archivo / Archivo Black / Zen Kaku Gothic New). Zero dependencies, zero build.

---

© 2026 Ayush Thakur — Drawn in ink, built in code. 完
