import React from 'react';
import { SITE, getGmailComposeUrl } from '../data/projects';
import { Marquee } from './Marquee';

interface HeroProps {
  onScrollToMissions: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToMissions }) => {
  const gmailUrl = getGmailComposeUrl(SITE);

  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero__grid">
          {/* Vol Cover Title Panel */}
          <div className="panel cover-title rv-slam">
            <div className="cover-title__vol">第一巻</div>
            <h1>
              AYUSH
              <br />
              <span className="outline">THAKUR</span>
            </h1>
            <div className="cover-title__kicker">
              Full-stack developer from Delhi.
              <br />
              Custom code · zero template slop.
            </div>
            <div className="cover-title__meta">
              <span className="mono">Vol. 01 — Delhi, IN</span>
              <span>
                <span className="price">2026</span>
              </span>
            </div>
          </div>

          {/* Hero Copy & Stats */}
          <div className="hero__copy">
            <div className="panel hero__intro rv">
              <div>
                <span className="narration">Meanwhile, in Delhi…</span>
                <h2>
                  A developer who builds websites like <span className="hl">manga panels</span>: bold, fast and crafted to convert.
                </h2>
              </div>
              <p>
                I build custom e-commerce stores, Three.js 3D web worlds, and editorial portfolios for independent brands and creative studios. Clean React and vanilla JavaScript, sub-1.5s page loads, and zero generic template cliches.
              </p>
              <div className="hero__ctas">
                <a
                  className="btn"
                  href="#missions"
                  onClick={(e) => {
                    e.preventDefault();
                    onScrollToMissions();
                  }}
                >
                  SEE 4 LIVE MISSIONS <span className="arr">↓</span>
                </a>
                <a
                  className="btn btn--ghost"
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  START A MISSION (GMAIL) <span className="arr">↗</span>
                </a>
              </div>
            </div>

            <div className="hero__stats">
              <div className="panel stat stat--ink rv">
                <b>04</b>
                <span>Live shipped apps</span>
              </div>
              <div className="panel stat tone-lite rv">
                <b>7-14d</b>
                <span>Typical sprint</span>
              </div>
              <div className="panel stat rv">
                <b>OPEN</b>
                <span>Taking Q2 projects</span>
              </div>
            </div>
          </div>

          {/* Hero Art */}
          <div className="panel hero__art rv">
            <span className="tag mono">Fig. 00 — The squad</span>
            <img
              src="/assets/art/hero.jpg"
              alt="Black and white manga ink sketch of three shonen heroes: a dual-wielding scout (Attack on Titan style), a whiskered ninja kid (Naruto style) and a spiky-haired saiyan (Goku style)"
            />
            <div className="bubble bubble--right">
              CODE IS MY
              <br />
              SUPERPOWER!
            </div>
            <div className="sfx">ドンッ</div>
            <div className="ctags">
              <span className="ctag">
                <b>The Scout</b>
                <i>Attack on Titan</i>
              </span>
              <span className="ctag">
                <b>The Jinchūriki</b>
                <i>Naruto</i>
              </span>
              <span className="ctag">
                <b>The Saiyan</b>
                <i>Dragon&nbsp;Ball</i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  );
};
