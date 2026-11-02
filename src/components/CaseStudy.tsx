import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/projects';
import { Lightbox } from './Lightbox';

interface CaseStudyProps {
  projectId: string;
  onBackToMissions: () => void;
  onSelectProject: (id: string) => void;
}

export const CaseStudy: React.FC<CaseStudyProps> = ({
  projectId,
  onBackToMissions,
  onSelectProject,
}) => {
  const [zoomImage, setZoomImage] = useState<{ src: string; alt: string } | null>(null);

  const currentIndex = Math.max(
    0,
    PROJECTS.findIndex((item) => item.id === projectId)
  );
  const p = PROJECTS[currentIndex];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const getCleanHost = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const kanjiList = ['壱', '弐', '参', '肆', '伍', '陸'];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `${p.title} — Case File ${p.no} · Ayush Thakur`;
    return () => {
      document.title = 'Ayush Thakur — Full-Stack Developer · Vol. 01';
    };
  }, [p]);

  const renderBrowserBar = (extraClass = '') => (
    <div className={`browser ${extraClass}`}>
      <i />
      <i />
      <i />
      <span className="url">{getCleanHost(p.live)}</span>
    </div>
  );

  return (
    <main id="case">
      {/* Case Hero Section */}
      <section className="case-hero">
        <div className="wrap">
          <div className="crumbs mono">
            <a
              href="#missions"
              onClick={(e) => {
                e.preventDefault();
                onBackToMissions();
              }}
            >
              ← Missions
            </a>
            <span>/</span>
            <span>Case file {p.no}</span>
            <span>/</span>
            <span>{p.category}</span>
          </div>

          <div className="panel case-title rv-slam">
            <div>
              <span className="narration">
                Case file {p.no} · {p.category}
              </span>
              <h1>{p.title.toUpperCase()}</h1>
              {p.alias && <span className="alias">a.k.a. {p.alias}</span>}
              <p className="tagline">{p.tagline}</p>
            </div>
            <div>
              <div className="no">{p.no}</div>
              <span className="sfx">{p.sfx}</span>
            </div>
          </div>

          <dl className="panel case-meta rv">
            <div>
              <dt>Role</dt>
              <dd>{p.role}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{p.year}</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>{p.stack.slice(0, 3).join(' · ')}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{p.status}</dd>
            </div>
          </dl>

          <div className="panel frame case-shot rv">
            {renderBrowserBar()}
            <img
              src={p.shots.main}
              alt={`${p.title} homepage screenshot`}
              style={{ cursor: 'zoom-in' }}
              onClick={() =>
                setZoomImage({
                  src: p.shots.main,
                  alt: `${p.title} homepage screenshot`,
                })
              }
            />
          </div>

          <div className="hero__ctas" style={{ marginTop: '26px' }}>
            <a
              className="btn"
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              OPEN LIVE PROJECT <span className="arr">↗</span>
            </a>
            <button
              className="btn btn--ghost"
              type="button"
              onClick={onBackToMissions}
            >
              ALL MISSIONS
            </button>
          </div>
        </div>
      </section>

      {/* Case Body: Mission / Challenge / Approach */}
      <section className="chapter" style={{ paddingTop: '60px' }}>
        <div className="wrap">
          <div className="rule" />
          <div className="case-body" style={{ marginTop: '30px' }}>
            <div className="panel p-text p-wide rv">
              <span className="narration">The mission</span>
              <h3>What it is</h3>
              <p>{p.summary}</p>
            </div>
            <div className="panel p-text rv">
              <span className="narration">The challenge</span>
              <h3>The villain</h3>
              <p>{p.challenge}</p>
            </div>
            <div
              className="panel p-text panel--ink rv"
              style={{ background: 'var(--ink)', color: '#fff' }}
            >
              <span className="narration" style={{ color: 'var(--paper)' }}>
                The approach
              </span>
              <h3>The technique</h3>
              <p style={{ color: '#ddd' }}>{p.approach}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="chapter" style={{ paddingTop: '60px' }}>
        <div className="wrap">
          <div className="chap-head rv">
            <div className="chap-num">
              <small>Key</small>技
            </div>
            <div>
              <h2>
                KEY <em>FEATURES</em>
              </h2>
              <p>What I built and how it helps.</p>
            </div>
          </div>
          <div className="features">
            {p.features.map((f, k) => (
              <div key={k} className="feature rv">
                <div className="k">{kanjiList[k] || k + 1}</div>
                <h4>{f.t}</h4>
                <p>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="chapter" style={{ paddingTop: '60px' }}>
        <div className="wrap">
          <div className="chap-head rv">
            <div className="chap-num">
              <small>Gallery</small>絵
            </div>
            <div>
              <h2>
                SCREEN<em>SHOTS</em>
              </h2>
              <p>Captured from the live site, on desktop and mobile. Click any image to enlarge.</p>
            </div>
          </div>
          <div className="gallery">
            {p.shots.gallery.map((g, k) => (
              <div key={k}>
                <div className="panel frame rv">
                  {renderBrowserBar()}
                  <img
                    src={g}
                    alt={`${p.title} screenshot ${k + 2}`}
                    loading="lazy"
                    style={{ cursor: 'zoom-in' }}
                    onClick={() =>
                      setZoomImage({
                        src: g,
                        alt: `${p.title} screenshot ${k + 2}`,
                      })
                    }
                  />
                </div>
                <div className="cap">
                  Fig. {p.no}.{k + 2} — Desktop · 1440px
                </div>
              </div>
            ))}
            <div className="phone-wrap">
              <div className="panel phone rv">
                <img
                  src={p.shots.mobile}
                  alt={`${p.title} on mobile`}
                  loading="lazy"
                  style={{ cursor: 'zoom-in' }}
                  onClick={() =>
                    setZoomImage({
                      src: p.shots.mobile,
                      alt: `${p.title} on mobile`,
                    })
                  }
                />
              </div>
              <div className="cap">Fig. {p.no}.M — Mobile · 390px</div>
            </div>
          </div>
          <div style={{ marginTop: '26px' }}>
            <span className="mono" style={{ opacity: 0.7 }}>
              Built with →
            </span>
            <ul className="stack" style={{ marginTop: '10px' }}>
              {p.stack.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Next Chapter Banner */}
      <section className="chapter" style={{ paddingTop: '70px' }}>
        <div className="wrap">
          <div
            className="panel next rv"
            style={{ cursor: 'pointer' }}
            onClick={() => onSelectProject(nextProject.id)}
          >
            <div className="next__txt">
              <span className="mono">Next chapter · Case file {nextProject.no}</span>
              <h3>{nextProject.title.toUpperCase()}</h3>
              <span className="btn btn--ghost" style={{ alignSelf: 'flex-start' }}>
                TURN THE PAGE <span className="arr">→</span>
              </span>
            </div>
            <div className="next__img">
              <img src={nextProject.shots.thumb} alt={`${nextProject.title} preview`} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox for zooming screenshots */}
      <Lightbox
        imageSrc={zoomImage ? zoomImage.src : null}
        imageAlt={zoomImage ? zoomImage.alt : ''}
        onClose={() => setZoomImage(null)}
      />
    </main>
  );
};
