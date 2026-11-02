import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/projects';

interface MissionsProps {
  onSelectProject: (projectId: string) => void;
}

export const Missions: React.FC<MissionsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'commerce' | 'interactive' | 'creative'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.group === filter;
  });

  const getCleanHost = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <section className="chapter" id="missions">
      <div className="wrap">
        <div className="rule" />
        <div className="missions-intro">
          <div className="chap-head rv">
            <div className="chap-num">
              <small>Chapter</small>02
            </div>
            <div>
              <h2>
                SELECTED <em>MISSIONS</em>
              </h2>
              <p>
                Four live production builds: personalized e-commerce, a 3D game studio world, and creative portfolios. Every one is live on production with real screenshots and complete technical case files.
              </p>
            </div>
          </div>
          <div className="panel scout rv">
            <img
              src="/assets/art/scout.jpg"
              alt="Manga ink sketch of a dual-blade scout soldier, Attack on Titan style, flying through the air"
            />
            <div className="bubble">EVERY MISSION: CLEARED.</div>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="filters" role="tablist" aria-label="Filter projects">
          <button
            className={`chip ${filter === 'all' ? 'on' : ''}`}
            onClick={() => setFilter('all')}
            type="button"
          >
            All · 04
          </button>
          <button
            className={`chip ${filter === 'commerce' ? 'on' : ''}`}
            onClick={() => setFilter('commerce')}
            type="button"
          >
            E-commerce
          </button>
          <button
            className={`chip ${filter === 'interactive' ? 'on' : ''}`}
            onClick={() => setFilter('interactive')}
            type="button"
          >
            Interactive 3D
          </button>
          <button
            className={`chip ${filter === 'creative' ? 'on' : ''}`}
            onClick={() => setFilter('creative')}
            type="button"
          >
            Creative media
          </button>
        </div>

        {/* Projects List */}
        <div className="projects" id="projects">
          {filteredProjects.map((p) => (
            <article key={p.id} className="project rv" data-g={p.group}>
              <a
                className="project__shot"
                href={`#project-${p.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectProject(p.id);
                }}
                aria-label={`Open case file: ${p.title}`}
              >
                <div className="browser">
                  <i />
                  <i />
                  <i />
                  <span className="url">{getCleanHost(p.live)}</span>
                </div>
                <img
                  src={p.shots.thumb}
                  alt={`Screenshot of ${p.title} homepage`}
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (!img.dataset.hasRetried) {
                      img.dataset.hasRetried = 'true';
                      img.src = p.shots.main;
                    }
                  }}
                />
                <span className="peek">Preview ↗</span>
                <span className="sfx">{p.sfx}</span>
              </a>

              <div className="project__body">
                <div className="project__top">
                  <span className="project__no">{p.no}</span>
                  <span className="project__cat">{p.category}</span>
                </div>
                <div>
                  <h3 className="project__title">{p.title}</h3>
                  {p.alias && <span className="project__alias">a.k.a. {p.alias}</span>}
                </div>
                <p className="project__tag">{p.tagline}</p>

                <dl className="project__meta">
                  <div>
                    <dt>Role</dt>
                    <dd>{p.role}</dd>
                  </div>
                  <div>
                    <dt>Year</dt>
                    <dd>{p.year}</dd>
                  </div>
                  <div>
                    <dt>Status</dt>
                    <dd>{p.status}</dd>
                  </div>
                </dl>

                <ul className="stack">
                  {p.stack.map((s, idx) => (
                    <li key={idx}>{s}</li>
                  ))}
                </ul>

                <div className="project__actions">
                  <button
                    className="btn"
                    type="button"
                    onClick={() => onSelectProject(p.id)}
                  >
                    CASE STUDY &amp; SPECS <span className="arr">→</span>
                  </button>
                  <a
                    className="btn btn--ghost"
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VISIT LIVE SITE <span className="arr">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
