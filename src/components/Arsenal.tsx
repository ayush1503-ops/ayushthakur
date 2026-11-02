import React from 'react';
import { SKILLS } from '../data/projects';
import { SkillIcon } from './SkillIcons';

export const Arsenal: React.FC = () => {
  return (
    <section className="chapter" id="arsenal">
      <div className="wrap">
        <div className="rule" />
        <div className="chap-head rv">
          <div className="chap-num">
            <small>Chapter</small>03
          </div>
          <div>
            <h2>
              THE <em>ARSENAL</em>
            </h2>
            <p>
              Every tool is chosen with clear trade-offs: when to reach for full React/Next.js power, and when vanilla JavaScript or Three.js is the faster, smarter choice.
            </p>
          </div>
        </div>

        <div className="arsenal">
          <div className="panel ninja rv">
            <img
              src="/assets/art/ninja.jpg"
              alt="Manga ink sketch of a whiskered ninja, Naruto style, holding a swirling energy sphere"
            />
            <div className="bubble">BELIEVE IT, I SHIP ON FRIDAYS.</div>
          </div>

          <div className="skills" id="skills">
            {SKILLS.map((s, index) => (
              <div key={index} className="skill rv">
                <div className="skill__head">
                  <span className="skill__ico">
                    <SkillIcon name={s.i} />
                  </span>
                  <span className="skill__jp">{s.jp}</span>
                </div>
                <h3>{s.n}</h3>
                <p>{s.d}</p>
                <span className="mono" style={{ marginTop: 'auto', fontSize: '10.5px', opacity: 0.7 }}>
                  {s.used.length ? `Used in · ${s.used.join(' · ')}` : 'Side projects & tooling'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
