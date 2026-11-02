import React from 'react';

export const Origin: React.FC = () => {
  return (
    <section className="chapter" id="origin">
      <div className="wrap">
        <div className="rule" />
        <div className="chap-head rv">
          <div className="chap-num">
            <small>Chapter</small>01
          </div>
          <div>
            <h2>
              THE ORIGIN <em>STORY</em>
            </h2>
            <p>Every main character has one. This is mine (measured in commits and shipping builds).</p>
          </div>
        </div>

        <div className="origin">
          <div className="panel origin__art rv">
            <span className="fig mono">Fig. 01 — The developer</span>
            <img src="/assets/art/dev.jpg" alt="Manga ink sketch of a young developer sitting with a laptop" />
            <div className="bubble bubble--right">ONE MORE FEATURE… THEN I SLEEP.</div>
          </div>

          <div className="origin__panels">
            <div className="panel p-text p-wide rv">
              <span className="narration">Developer mind · artist instinct</span>
              <h3>I make pixels and code get along.</h3>
              <p>
                I&apos;m Ayush, a full-stack developer based in Delhi. I don&apos;t use heavy drag-and-drop website builders that bloat your bundle with megabytes of unused scripts. Instead, I handwrite clean, semantic code that scores 95+ on Google Lighthouse and feels instant to navigate.
              </p>
              <p>
                I care about the details you can benchmark — load times under 1.5 seconds, accessible contrast, smooth 60fps animations — and the ones you can only feel: visual rhythm, intentional type, and a site that leaves a memorable impression.
              </p>
            </div>

            <div className="panel quote-panel rv">
              <div className="speed" />
              <blockquote>
                &ldquo;Build it fast.
                <br />
                Make it useful.
                <br />
                Give it a little soul.&rdquo;
              </blockquote>
              <cite>— MY NINDŌ (NINJA WAY)</cite>
            </div>

            <dl className="panel facts rv">
              <div>
                <dt>Class</dt>
                <dd>Full-Stack Developer</dd>
              </div>
              <div>
                <dt>Base</dt>
                <dd>Delhi, India (Remote worldwide)</dd>
              </div>
              <div>
                <dt>Specialty</dt>
                <dd>React · Next.js · Three.js 3D</dd>
              </div>
              <div>
                <dt>Guarantee</dt>
                <dd>Sub-1.5s load · 90+ Lighthouse</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Available for new missions</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
