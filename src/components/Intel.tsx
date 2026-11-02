import React from 'react';
import { SITE, getGmailComposeUrl } from '../data/projects';

export const Intel: React.FC = () => {
  const gmailUrl = getGmailComposeUrl(SITE);

  return (
    <section className="chapter" id="intel">
      <div className="wrap">
        <div className="rule" />
        <div className="chap-head rv">
          <div className="chap-num">
            <small>Chapter</small>05
          </div>
          <div>
            <h2>
              INTEL · <em>RATES &amp; FAQ</em>
            </h2>
            <p>
              No vague agency quotes or hidden fees. Transparent sprint estimates, honest trade-offs, and answers to real client questions.
            </p>
          </div>
        </div>

        {/* 3 Transparent Sprint Tiers */}
        <div className="pricing-grid">
          <div className="panel pricing-card rv">
            <span className="pricing-card__tag">Sprint 01</span>
            <span className="pricing-card__kanji">壱</span>
            <h3>STUDIO PORTFOLIO / LANDING PAGE</h3>
            <div className="price">
              ₹12,000 – ₹19,999 <small className="mono" style={{ fontSize: '14px', opacity: 0.7 }}>/ ~$145 – $240</small>
            </div>
            <span className="turnaround mono">⚡ Turnaround: 5 – 7 days</span>
            <ul>
              <li>Custom responsive design system (1 to 3 pages)</li>
              <li>Hand-crafted typography, motion &amp; micro-interactions</li>
              <li>Google Lighthouse 95+ score guaranteed</li>
              <li>SEO meta tags, OpenGraph cards &amp; sitemap</li>
              <li>Production deployment on Vercel + custom domain setup</li>
              <li>14 days of post-launch bug fixes &amp; tweaks</li>
            </ul>
            <a
              className="btn btn--ghost"
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              BOOK SPRINT 01 <span className="arr">↗</span>
            </a>
          </div>

          <div className="panel pricing-card featured rv">
            <span className="pricing-card__tag" style={{ background: 'var(--ink)', color: '#fff' }}>
              Most Popular · Sprint 02
            </span>
            <span className="pricing-card__kanji">弐</span>
            <h3>E-COMMERCE &amp; WEB APPLICATION</h3>
            <div className="price">
              ₹24,999 – ₹39,999 <small className="mono" style={{ fontSize: '14px', opacity: 0.7 }}>/ ~$300 – $480</small>
            </div>
            <span className="turnaround mono">⚡ Turnaround: 1 – 2 weeks</span>
            <ul>
              <li>Everything in Sprint 01</li>
              <li>Filterable product catalog with instant category search</li>
              <li>Custom cart, checkout flows, or direct WhatsApp order links</li>
              <li>Client-editable data files or lightweight headless CMS</li>
              <li>Full-stack API routes &amp; database/storage integration</li>
              <li>Speed-optimized asset pipeline &amp; mobile-first touch UI</li>
            </ul>
            <a
              className="btn"
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              BOOK SPRINT 02 <span className="arr">↗</span>
            </a>
          </div>

          <div className="panel pricing-card rv">
            <span className="pricing-card__tag">Sprint 03</span>
            <span className="pricing-card__kanji">参</span>
            <h3>3D &amp; INTERACTIVE EXPERIENCE</h3>
            <div className="price">
              ₹36,999 – ₹54,999 <small className="mono" style={{ fontSize: '14px', opacity: 0.7 }}>/ ~$450 – $660</small>
            </div>
            <span className="turnaround mono">⚡ Turnaround: 2 – 3 weeks</span>
            <ul>
              <li>Everything in Sprint 01 &amp; 02</li>
              <li>Three.js / WebGL 3D scenes &amp; model rendering</li>
              <li>Custom scroll camera animation &amp; interactive physics</li>
              <li>Hardware-accelerated 60fps mobile fallback modes</li>
              <li>Sound effects, ambient audio &amp; shader customization</li>
              <li>Full asset compression &amp; progressive loading pipeline</li>
            </ul>
            <a
              className="btn btn--ghost"
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              BOOK SPRINT 03 <span className="arr">↗</span>
            </a>
          </div>
        </div>

        {/* 4 Guarantees Strip */}
        <div className="guarantees-grid">
          <div className="panel guarantee-card rv">
            <b>⚡ Sub-1.5s Load Budget</b>
            <p>Every page is audited for speed. Lighthouse 90+ score guaranteed on desktop and mobile.</p>
          </div>
          <div className="panel guarantee-card rv">
            <b>📱 Real Device Tested</b>
            <p>Tested on physical iOS iPhones, Android phones, tablets, and wide monitors for zero awkward breaks.</p>
          </div>
          <div className="panel guarantee-card rv">
            <b>🚀 Zero-Downtime Deploy</b>
            <p>Automated GitHub-to-Vercel CI/CD pipeline, SSL certificates, and custom domain connection included.</p>
          </div>
          <div className="panel guarantee-card rv">
            <b>🛡️ 14-Day Warranty</b>
            <p>Every contract includes two weeks of post-launch bug fixes, performance checks, and minor adjustments.</p>
          </div>
        </div>

        {/* Honest Trade-offs */}
        <div className="tradeoffs-grid">
          <div className="panel tradeoff-card pro rv">
            <h4>WHEN TO HIRE ME</h4>
            <ul>
              <li>You want a memorable, handcrafted website that stands out from generic SaaS templates.</li>
              <li>You care about loading speed, performance scores, and clean readable source code.</li>
              <li>You want to talk directly to the developer building your site, not three account managers.</li>
              <li>You need custom e-commerce, interactive 3D, or an editorial layout that tells a story.</li>
            </ul>
          </div>
          <div className="panel tradeoff-card con rv">
            <h4>WHEN TO CHOOSE ANOTHER OPTION</h4>
            <ul>
              <li>You need a generic $50 WordPress template installed in one hour without custom code.</li>
              <li>You want a large 50-person agency with round-the-clock shift staffing.</li>
              <li>You need native iOS/Android mobile apps (Swift/Kotlin) rather than responsive web applications.</li>
            </ul>
          </div>
        </div>

        {/* Real FAQs */}
        <div className="faq-grid">
          <div className="panel faq-card rv">
            <h4>How do we start working together?</h4>
            <p>
              Click &ldquo;HIRE ME&rdquo; or &ldquo;START A MISSION&rdquo; to send your requirements via Gmail. Tell me about your project, target launch date, and references. I&apos;ll reply within 24 hours with a scope outline and timeline.
            </p>
          </div>
          <div className="panel faq-card rv">
            <h4>Do you take projects outside India?</h4>
            <p>
              Yes, over 60% of my clients are in the United States, United Kingdom, Canada, and Europe. Communication happens asynchronously over email and WhatsApp, with scheduled video calls when needed.
            </p>
          </div>
          <div className="panel faq-card rv">
            <h4>Can my team edit content without code knowledge?</h4>
            <p>
              Yes. I organize your content into straightforward data configs or connect a lightweight headless CMS so you can easily add products, change text, or update photos anytime.
            </p>
          </div>
          <div className="panel faq-card rv">
            <h4>How are payments and milestones structured?</h4>
            <p>
              Standard terms are 50% upfront deposit to reserve your sprint date on my schedule, and the remaining 50% upon final delivery, QA sign-off, and domain launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
