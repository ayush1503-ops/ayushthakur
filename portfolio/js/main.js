(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ---------- loader (shown once per session) ---------- */
  const loader = $("#loader");
  if (loader) {
    const seen = sessionStorage.getItem("seenLoader");
    const hide = () => { loader.classList.add("done"); setTimeout(() => loader.remove(), 1000); };
    if (seen) { loader.remove(); }
    else { sessionStorage.setItem("seenLoader", "1"); window.addEventListener("load", () => setTimeout(hide, 650)); setTimeout(hide, 2600); }
  }

  /* ---------- projects ---------- */
  const groups = { pasha: "commerce", nexstudio: "interactive", pulse: "commerce", "editing-box": "creative" };
  const host = (u) => u.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const wrap = $("#projects");
  if (wrap && window.PROJECTS) {
    wrap.innerHTML = PROJECTS.map((p) => `
      <article class="project rv" data-g="${groups[p.id] || "all"}">
        <a class="project__shot" href="project.html?p=${p.id}" aria-label="Open case file: ${p.title}">
          <div class="browser"><i></i><i></i><i></i><span class="url">${host(p.live)}</span></div>
          <img src="${p.shots.thumb}" alt="Screenshot of ${p.title} homepage" loading="lazy" />
          <span class="peek">Hover → colour</span>
          <span class="sfx">${p.sfx}</span>
        </a>
        <div class="project__body">
          <div class="project__top">
            <span class="project__no">${p.no}</span>
            <span class="project__cat">${p.category}</span>
          </div>
          <div>
            <h3 class="project__title">${p.title}</h3>
            ${p.alias ? `<span class="project__alias">a.k.a. ${p.alias}</span>` : ""}
          </div>
          <p class="project__tag">${p.tagline}</p>
          <dl class="project__meta">
            <div><dt>Role</dt><dd>${p.role}</dd></div>
            <div><dt>Year</dt><dd>${p.year}</dd></div>
            <div><dt>Status</dt><dd>${p.status}</dd></div>
          </dl>
          <ul class="stack">${p.stack.map((s) => `<li>${s}</li>`).join("")}</ul>
          <div class="project__actions">
            <a class="btn" href="project.html?p=${p.id}">CASE FILE <span class="arr">→</span></a>
            <a class="btn btn--ghost" href="${p.live}" target="_blank" rel="noopener">LIVE SITE <span class="arr">↗</span></a>
          </div>
        </div>
      </article>`).join("");

    $$(".chip").forEach((c) => c.addEventListener("click", () => {
      $$(".chip").forEach((x) => x.classList.remove("on"));
      c.classList.add("on");
      const f = c.dataset.f;
      $$(".project", wrap).forEach((el) => el.classList.toggle("hide", f !== "all" && el.dataset.g !== f));
    }));
  }

  /* ---------- skills ---------- */
  const ico = {
    react: '<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>',
    next: '<circle cx="12" cy="12" r="10"/><path d="M9 16V8l7 9"/><path d="M15 8v5"/>',
    three: '<path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/>',
    ts: '<rect x="3" y="3" width="18" height="18"/><path d="M7 10h6M10 10v8M17 11c-1-1-3-1-3 .5S17 13 17 15s-2.5 2-3.5 1"/>',
    js: '<rect x="3" y="3" width="18" height="18"/><path d="M10 9v6.5c0 1.5-2 2-3 1M17 10c-1-1-3-1-3 .5S17 12 17 14s-2.5 2-3.5 1"/>',
    node: '<path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M9 9v6M9 9l6 6V9"/>',
    python: '<path d="M12 3c-4 0-4 2-4 3v2h4v1H6c-2 0-3 1.5-3 4s1 4 3 4h2v-3c0-1.5 1-2.5 2.5-2.5h3c1.5 0 2.5-1 2.5-2.5V6c0-1.5-1-3-4-3z"/><path d="M12 21c4 0 4-2 4-3v-2h-4v-1h6c2 0 3-1.5 3-4s-1-4-3-4h-2"/>',
    motion: '<path d="M4 20V4l8 8 8-8v16"/><path d="M4 20l8-8 8 8"/>',
    css: '<path d="M4 3l1.6 17L12 22l6.4-2L20 3z"/><path d="M8 8h8l-.5 6-3.5 1-3.5-1-.2-2"/>'
  };
  const skills = [
    { n: "React", jp: "反応", d: "Component systems and UI that scales from landing pages to apps.", i: "react", used: ["01", "02", "04"] },
    { n: "Next.js", jp: "次", d: "SSR, routing and SEO-ready builds that ship fast on Vercel.", i: "next", used: ["01"] },
    { n: "Three.js", jp: "三次元", d: "WebGL scenes, light and depth that turn a page into a world.", i: "three", used: ["02"] },
    { n: "TypeScript", jp: "型", d: "Typed data and safer refactors. Catalogues the client can edit.", i: "ts", used: ["01"] },
    { n: "JavaScript", jp: "術", d: "Plain JS when a framework would be overkill. Light and fast.", i: "js", used: ["03"] },
    { n: "Node", jp: "根", d: "APIs, scripts and the backend that keeps everything running.", i: "node", used: [] },
    { n: "Python", jp: "蛇", d: "Automation scripts and data chores done in minutes.", i: "python", used: [] },
    { n: "Motion", jp: "動", d: "Framer Motion and CSS animation that keeps things moving.", i: "motion", used: ["01", "04"] },
    { n: "CSS", jp: "様式", d: "Layouts, type and responsive systems that hold up on any screen.", i: "css", used: ["01", "02", "03", "04"] }
  ];
  const sk = $("#skills");
  if (sk) {
    sk.innerHTML = skills.map((s) => `
      <div class="skill rv">
        <div class="skill__head">
          <span class="skill__ico"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">${ico[s.i]}</svg></span>
          <span class="skill__jp">${s.jp}</span>
        </div>
        <h3>${s.n}</h3>
        <p>${s.d}</p>
        <span class="mono" style="margin-top:auto;font-size:10.5px;opacity:.7">${s.used.length ? "Used in · " + s.used.join(" · ") : "Side projects & tooling"}</span>
      </div>`).join("");
  }

  /* ---------- contact links: prefilled email + WhatsApp ---------- */
  const SITE = window.SITE || {};
  const enc = encodeURIComponent;
  $$("[data-mail]").forEach((a) => {
    a.href = `mailto:${SITE.email}?subject=${enc(SITE.mailSubject || "Project inquiry")}&body=${enc(SITE.mailBody || "")}`;
  });
  $$("[data-wa]").forEach((a) => {
    a.href = `https://wa.me/${SITE.whatsapp}?text=${enc(SITE.waText || "Hi Ayush!")}`;
  });

  /* ---------- copy email ---------- */
  const cm = $("#copyMail");
  if (cm) cm.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText("ayusheditor1503@gmail.com"); cm.textContent = "COPIED! ✓"; }
    catch { cm.textContent = "ayusheditor1503@gmail.com"; }
    setTimeout(() => (cm.textContent = "COPY EMAIL"), 2000);
  });

  /* ---------- year ---------- */
  const yr = $("#yr"); if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  $$(".rv, .rv-slam").forEach((el, i) => { el.style.transitionDelay = (i % 4) * 70 + "ms"; io.observe(el); });

  /* ---------- subtle parallax on art ---------- */
  const arts = $$(".hero__art img, .origin__art img, .scout img, .ninja img, .finale__art img");
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      const vh = innerHeight;
      arts.forEach((img) => {
        const r = img.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const p = (r.top + r.height / 2 - vh / 2) / vh;
        img.style.translate = `0 ${p * -24}px`;
      });
      ticking = false;
    });
  }, { passive: true });
})();
