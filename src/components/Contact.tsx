import React, { useState } from 'react';
import { SITE, getGmailComposeUrl, getWhatsAppUrl } from '../data/projects';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const gmailUrl = getGmailComposeUrl(SITE);
  const whatsappUrl = getWhatsAppUrl(SITE);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="panel finale rv">
          <div className="finale__art">
            <img
              src="/assets/art/saiyan.jpg"
              alt="Manga ink sketch of a saiyan martial artist, Goku style, firing an energy beam"
            />
            <div className="sfx">ゴォォ</div>
          </div>
          <div className="finale__body">
            <span className="narration" style={{ alignSelf: 'flex-start' }}>
              Final chapter · to be continued…
            </span>
            <h2>
              LET&apos;S BUILD <em>SOMETHING</em> LEGENDARY.
            </h2>
            <p>
              Got a store, a studio site or an odd idea that needs a 3D world? Send it over. I reply within a day.
            </p>
            <a
              className="mail"
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <small>Open directly in Gmail ↗</small>
              <span className="mail__address">{SITE.email}</span>
            </a>
            <div className="links-row">
              <a
                className="btn btn--ghost"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                WHATSAPP <span className="arr">↗</span>
              </a>
              <a
                className="btn btn--ghost"
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN <span className="arr">↗</span>
              </a>
              <button
                className="btn btn--ghost"
                id="copyMail"
                type="button"
                onClick={handleCopyEmail}
              >
                {copied ? 'COPIED! ✓' : 'COPY EMAIL'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
