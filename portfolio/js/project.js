(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const list = window.PROJECTS || [];
  const id = new URLSearchParams(location.search).get("p") || list[0].id;
  const i = Math.max(0, list.findIndex((p) => p.id === id));
  const p = list[i];
  const next = list[(i + 1) % list.length];
  const host = (u) => u.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const kanji = ["壱", "弐", "参", "肆", "伍", "陸"];

  document.title = `${p.title} — Case File ${p.no} · Ayush Thakur`;

  const browser = (cls = "") => `<div class="browser ${cls}"><i></i><i></i><i></i><span class="url">${host(p.live)}</span></div>`;

  $("#case").innerHTML = `
  <section class="case-hero">
    <div class="wrap">
      <div class="crumbs mono"><a href="index.html#missions">← Missions</a><span>/</span><span>Case file ${p.no}</span><span>/</span><span>${p.category}</span></div>

      <div class="panel case-title rv-slam">
        <div>
          <span class="narration">Case file ${p.no} · ${p.category}</span>
          <h1>${p.title.toUpperCase()}</h1>
          ${p.alias ? `<span class="alias">a.k.a. ${p.alias}</span>` : ""}
          <p class="tagline">${p.tagline}</p>
        </div>
        <div>
          <div class="no">${p.no}</div>
          <span class="sfx">${p.sfx}</span>
        </div>
      </div>

      <dl class="panel case-meta rv">
        <div><dt>Role</dt><dd>${p.role}</dd></div>
        <div><dt>Year</dt><dd>${p.year}</dd></div>
        <div><dt>Stack</dt><dd>${p.stack.slice(0, 3).join(" · ")}</dd></div>
        <div><dt>Status</dt><dd>${p.status}</dd></div>
      </dl>

      <div class="panel frame case-shot rv">
        ${browser()}
        <img src="${p.shots.main}" alt="${p.title} homepage screenshot" data-zoom />
      </div>
      <div class="hero__ctas" style="margin-top:26px">
        <a class="btn" href="${p.live}" target="_blank" rel="noopener">OPEN LIVE PROJECT <span class="arr">↗</span></a>
        <a class="btn btn--ghost" href="index.html#missions">ALL MISSIONS</a>
      </div>
    </div>
  </section>

  <section class="chapter" style="padding-top:60px">
    <div class="wrap">
      <div class="rule"></div>
      <div class="case-body" style="margin-top:30px">
        <div class="panel p-text p-wide rv">
          <span class="narration">The mission</span>
          <h3>What it is</h3>
          <p>${p.summary}</p>
        </div>
        <div class="panel p-text rv">
          <span class="narration">The challenge</span>
          <h3>The villain</h3>
          <p>${p.challenge}</p>
        </div>
        <div class="panel p-text panel--ink rv" style="background:var(--ink);color:#fff">
          <span class="narration" style="color:var(--ink)">The approach</span>
          <h3>The technique</h3>
          <p style="color:#ddd">${p.approach}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="chapter" style="padding-top:60px">
    <div class="wrap">
      <div class="chap-head rv">
        <div class="chap-num"><small>Key</small>技</div>
        <div><h2>KEY <em>FEATURES</em></h2><p>What I built and how it helps.</p></div>
      </div>
      <div class="features">
        ${p.features.map((f, k) => `
          <div class="feature rv"><div class="k">${kanji[k] || k + 1}</div><h4>${f.t}</h4><p>${f.d}</p></div>`).join("")}
      </div>
    </div>
  </section>

  <section class="chapter" style="padding-top:60px">
    <div class="wrap">
      <div class="chap-head rv">
        <div class="chap-num"><small>Gallery</small>絵</div>
        <div><h2>SCREEN<em>SHOTS</em></h2><p>Captured from the live site, on desktop and mobile. Click any image to enlarge.</p></div>
      </div>
      <div class="gallery">
        ${p.shots.gallery.map((g, k) => `
          <div>
            <div class="panel frame rv">${browser()}<img src="${g}" alt="${p.title} screenshot ${k + 2}" loading="lazy" data-zoom /></div>
            <div class="cap">Fig. ${p.no}.${k + 2} — Desktop · 1440px</div>
          </div>`).join("")}
        <div class="phone-wrap">
          <div class="panel phone rv"><img src="${p.shots.mobile}" alt="${p.title} on mobile" loading="lazy" data-zoom /></div>
          <div class="cap">Fig. ${p.no}.M — Mobile · 390px</div>
        </div>
      </div>
      <div style="margin-top:26px">
        <span class="mono" style="opacity:.7">Built with →</span>
        <ul class="stack" style="margin-top:10px">${p.stack.map((s) => `<li>${s}</li>`).join("")}</ul>
      </div>
    </div>
  </section>

  <section class="chapter" style="padding-top:70px">
    <div class="wrap">
      <a class="panel next rv" href="project.html?p=${next.id}">
        <div class="next__txt">
          <span class="mono">Next chapter · Case file ${next.no}</span>
          <h3>${next.title.toUpperCase()}</h3>
          <span class="btn btn--ghost" style="align-self:flex-start">TURN THE PAGE <span class="arr">→</span></span>
        </div>
        <div class="next__img"><img src="${next.shots.thumb}" alt="${next.title} preview" loading="lazy" /></div>
      </a>
    </div>
  </section>`;

  /* lightbox */
  const lb = $("#lb"), lbImg = $("#lb img");
  $$("[data-zoom]").forEach((img) => img.addEventListener("click", () => { lbImg.src = img.src; lbImg.alt = img.alt; lb.classList.add("on"); }));
  lb.addEventListener("click", () => lb.classList.remove("on"));
  addEventListener("keydown", (e) => e.key === "Escape" && lb.classList.remove("on"));

  $("#yr").textContent = new Date().getFullYear();

  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.1 });
  $$(".rv, .rv-slam").forEach((el, k) => { el.style.transitionDelay = (k % 3) * 70 + "ms"; io.observe(el); });
  scrollTo(0, 0);
})();
