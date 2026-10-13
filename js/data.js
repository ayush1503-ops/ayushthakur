/* =========================================================
   PROJECT DATA — edit this one file to update every page.
   ========================================================= */
window.PROJECTS = [
  {
    id: "pasha",
    no: "01",
    title: "The Pasha Atelier",
    category: "E-commerce · Publishing",
    year: "2026",
    role: "Design & Development",
    status: "Live / Production",
    stack: ["React", "TypeScript", "Framer Motion", "Vercel"],
    live: "https://thepashaatelier.vercel.app/",
    sfx: "パラパラ",
    sfxEn: "FLIP FLIP",
    tagline: "A storefront for a personalised magazine studio, built so ordering one feels like flipping through one.",
    summary:
      "The Pasha Atelier makes personalised, laminated keepsake magazines. Customers don't start from a blank canvas. They pick a real issue from the studio's catalogue, choose a page count and send their photos. The site had to show 36 real designs, explain the pricing at a glance and get people from \u201Cthat one\u201D to a pre-filled order in as few clicks as possible.",
    challenge:
      "Most photo-book sites throw customers into a forty-tab builder. This brand promises the opposite: \u201Cno theme builders, no blank canvas.\u201D The site had to back that up with a short, calm path to checkout that still covers 36 designs, 8 occasions and 9 price tiers.",
    approach:
      "An editorial layout with handwritten type and real catalogue covers sets the mood. Behind it is a single typed data file, so the client can add or edit issues without a developer. Every \u201COrder now\u201D link opens the order form with the chosen magazine and page count already filled in.",
    features: [
      { t: "36-issue catalogue", d: "Real covers, filterable by occasion: Birthday, Anniversary, Wedding, Family, Baby, Friendship, Farewell and Corporate." },
      { t: "Page-count pricing", d: "9 clear tiers, from an 8-page Mini at \u20B9499 to a 40-page Bespoke edition at \u20B92,199." },
      { t: "Pre-filled order links", d: "Links like #/order?magazine=LM01&pages=16 open the order form with the design and size already chosen." },
      { t: "Flip-through samples", d: "Each issue links to a real flip-book sample, so buyers see exactly what they'll get." },
      { t: "Client-editable data", d: "The whole catalogue lives in one typed file (magazines.ts), so updates take minutes." },
      { t: "Mobile-first", d: "Covers, pricing cards and the order flow are sized for a phone held in one hand." }
    ],
    shots: {
      thumb: "assets/shots/pasha-thumb.jpg",
      main: "assets/shots/pasha.jpg",
      gallery: ["assets/shots/pasha-2.jpg", "assets/shots/pasha-3.jpg"],
      mobile: "assets/shots/pasha-m.jpg"
    }
  },
  {
    id: "nexstudio",
    no: "02",
    title: "Brainchild Games",
    alias: "NexStudio Games",
    category: "Interactive · Game Studio",
    year: "2026",
    role: "Creative Development",
    status: "Live / Production",
    stack: ["React", "Three.js", "WebGL", "CSS Motion"],
    live: "https://games-studio-smoky.vercel.app/",
    sfx: "ゴゴゴゴ",
    sfxEn: "RUMBLE",
    tagline: "A playful site for an indie game studio, with a game shelf you can filter by mood.",
    summary:
      "Brainchild is a fictional Montreal studio making handcrafted worlds: sky-island adventures, golden-sea expeditions and rooftop heists. The site works like a game menu. There's a featured release, a shelf of games you can filter, a game-of-the-week spotlight, devlogs, open jobs and a contact page with a mascot.",
    challenge:
      "Game studio sites usually end up either as a bare press kit or a heavy trailer page that loads slowly. The aim was to make it fun to explore, the way picking a game is fun, while keeping everything fast and readable.",
    approach:
      "The layout uses cards, sticker labels and bright accents, with a mascot (Pix) appearing throughout. Each game card is a full dossier, the shelf filters instantly across 9 genres, and depth and motion are only used where they help you find your way around.",
    features: [
      { t: "Filterable game shelf", d: "Filter by 9 genres (Action, Puzzle, RPG, Horror\u2026) and flip a card to open the game's full dossier." },
      { t: "Featured release hero", d: "Aetherbound key art with rating, platforms, launch window and wishlist button." },
      { t: "Game of the week", d: "A wide spotlight panel with a press quote and quick links to play." },
      { t: "Devlog & news feed", d: "Article cards with category, date, read time and author." },
      { t: "Careers board", d: "Open jobs with team, level and location, plus a strip listing the perks." },
      { t: "Contact & newsletter", d: "A friendly form, studio details and a monthly newsletter sign-up." }
    ],
    shots: {
      thumb: "assets/shots/nexstudio-thumb.jpg",
      main: "assets/shots/nexstudio.jpg",
      gallery: ["assets/shots/nexstudio-2.jpg", "assets/shots/nexstudio-3.jpg"],
      mobile: "assets/shots/nexstudio-m.jpg"
    }
  },
  {
    id: "pulse",
    no: "03",
    title: "Archive N\u00B09",
    alias: "Pulse Commerce",
    category: "E-commerce · Fashion",
    year: "2025",
    role: "Full-stack Experience",
    status: "Live / Production",
    stack: ["JavaScript", "CSS", "LocalStorage", "HTML"],
    live: "https://frontented-e-commerce-website-desig.vercel.app/",
    sfx: "シャキン",
    sfxEn: "SHING",
    tagline: "A store for a limited-edition clothing label: twelve pieces per edition, no restocks.",
    summary:
      "Archive N\u00B09 is a fictional Lyon clothing workshop that releases small, numbered editions. The store is a single scrolling page laid out like a stockroom: four aisles, one product rail you can drag, a workroom story, notes from the tailors, reviews and a FAQ. It's built in plain JavaScript with no framework.",
    challenge:
      "Make shopping feel quick and easy without losing the slow, handmade feel of the brand. The site also had to make scarcity (\u201Cwhen a size is gone, it is gone\u201D) clear without feeling pushy.",
    approach:
      "Bold condensed type, ruler-style section dividers and an aisle map you can tap to jump around. The cart is saved in LocalStorage, so it's still there after a refresh, and \u201COnly 12 left\u201D badges tell people stock is low without shouting.",
    features: [
      { t: "Stockroom map", d: "Four aisles (Tailoring, Knitwear, Shirting, Outerwear). Tap one to jump to that part of the rail." },
      { t: "Draggable product rail", d: "Drag through the rail sideways, with category filters and a live position indicator." },
      { t: "Saved cart", d: "\u201CAdd to rail\u201D is saved in LocalStorage, so the cart stays after a refresh or a return visit." },
      { t: "Scarcity badges", d: "Stock badges like \u201COnly 9 left\u201D appear on individual pieces." },
      { t: "Editorial sections", d: "Workroom stats, a notes-from-the-bench journal and customer reviews." },
      { t: "No framework", d: "Plain JavaScript and CSS, so the page stays light and quick to load." }
    ],
    shots: {
      thumb: "assets/shots/pulse-thumb.jpg",
      main: "assets/shots/pulse.jpg",
      gallery: ["assets/shots/pulse-2.jpg", "assets/shots/pulse-3.jpg"],
      mobile: "assets/shots/pulse-m.jpg"
    }
  },
  {
    id: "editing-box",
    no: "04",
    title: "EditingBox",
    category: "Creative Media · Portfolio",
    year: "2025",
    role: "Design & Development",
    status: "Live / Production",
    stack: ["React", "Framer Motion", "Video", "Vercel"],
    live: "https://editing-box-j3as.vercel.app/",
    sfx: "カット!",
    sfxEn: "CUT!",
    tagline: "A portfolio for a video-editing studio that puts the showreel first and turns views into enquiries.",
    summary:
      "EditingBox is a video-editing studio that works with clients worldwide. The site works like an editing suite. It opens with an \u201Cassembling timeline\u201D loading screen, shows six vertical edits you can tap to play, lays out the studio's services and makes every contact option one tap away.",
    challenge:
      "On a video portfolio, the work has to load first and play smoothly. The design has to set the mood without getting in its way, and a client should never have to hunt for how to get in touch.",
    approach:
      "A dark, cinematic design with REC-style timecodes and a red accent. The page goes in order: intro, the work, services, contact. Motion is used to keep the pace up, never as decoration.",
    features: [
      { t: "Timeline loader", d: "An \u201CAssembling timeline\u201D intro with a live percentage counter sets the cinematic mood." },
      { t: "Tap-to-play edits", d: "Six vertical (9:16) edits shown as frames that play when tapped." },
      { t: "Animated stats", d: "Counters for years of experience and number of projects, plus the editing toolbox." },
      { t: "Services grid", d: "Montage, motion graphics, colour grading, sound design, VFX and short-form, each with a one-line description." },
      { t: "Scrolling banner", d: "A banner of the studio's services runs between sections." },
      { t: "Contact options", d: "Instagram, TikTok, Snapchat, WhatsApp, phone and email (with a copy button)." }
    ],
    shots: {
      thumb: "assets/shots/editing-box-thumb.jpg",
      main: "assets/shots/editing-box.jpg",
      gallery: ["assets/shots/editing-box-2.jpg", "assets/shots/editing-box-3.jpg"],
      mobile: "assets/shots/editing-box-m.jpg"
    }
  }
];

window.SITE = {
  name: "Ayush Thakur",
  email: "ayusheditor1503@gmail.com",
  linkedin: "https://www.linkedin.com/in/ayush-thakur-a91827419/",
  whatsapp: "919599648246",
  mailSubject: "New project inquiry — let's build something legendary",
  mailBody: "Hi Ayush,\n\nI saw your portfolio and I'd love to discuss a project.\n\nProject type: \nBudget: \nTimeline: \n\nLooking forward to hearing from you!",
  waText: "Hi Ayush! I saw your portfolio and I'd like to discuss a project."
};

export const PROJECTS = window.PROJECTS;
export const SITE = window.SITE;
export default { PROJECTS, SITE };
