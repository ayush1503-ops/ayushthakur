import React from 'react';

export const Process: React.FC = () => {
  return (
    <section className="chapter" id="process">
      <div className="wrap">
        <div className="rule" />
        <div className="chap-head rv">
          <div className="chap-num">
            <small>Chapter</small>04
          </div>
          <div>
            <h2>
              FROM SKETCH <em>TO SHIP</em>
            </h2>
            <p>How a project goes, in four transparent panels with concrete deliverables at each step.</p>
          </div>
        </div>

        <div className="koma">
          <div className="panel koma__p rv">
            <div className="bg tone" />
            <span className="n">壱</span>
            <h3>01 · SCOPE &amp; WIRE</h3>
            <p>
              We clarify goals, user flows, and technical requirements over email or a call. You receive a structured milestone breakdown within 24 hours.
            </p>
          </div>

          <div className="panel koma__p koma__p--ink rv">
            <div className="bg hatch" />
            <span className="n">弐</span>
            <h3>02 · INTERACTIVE DRAFT</h3>
            <p>
              A working prototype in your browser within 3 to 5 days. We test real typography, layout rhythm, and interactions before locking code.
            </p>
          </div>

          <div className="panel koma__p rv">
            <div className="bg speed" />
            <span className="n">参</span>
            <h3>03 · PRODUCTION SPRINT</h3>
            <p>
              Clean React, Next.js, or lightweight JS. Performance budgets, responsive polish for every screen, and SEO metadata built right into the markup.
            </p>
          </div>

          <div className="panel koma__p koma__p--ink rv">
            <div className="bg tone" />
            <span className="n">肆</span>
            <h3>04 · DEPLOY &amp; SUPPORT</h3>
            <p>
              Zero-downtime deployment on Vercel, full GitHub repository handover, plus 14 days of complimentary post-launch support and tweaks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
