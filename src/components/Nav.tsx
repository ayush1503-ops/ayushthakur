import React from 'react';
import { SITE, getGmailComposeUrl } from '../data/projects';

interface NavProps {
  currentView: 'home' | 'project';
  onNavigateHome: (hash?: string) => void;
}

export const Nav: React.FC<NavProps> = ({ currentView, onNavigateHome }) => {
  const gmailUrl = getGmailComposeUrl(SITE);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    onNavigateHome(hash);
  };

  return (
    <header className="nav">
      <div className="wrap">
        <nav className="nav__bar">
          <a
            className="logo"
            href="#top"
            aria-label="Ayush Thakur — home"
            onClick={(e) => handleNavClick(e, '#top')}
          >
            <span className="logo__seal">ア</span>
            <span className="logo__txt">AYUSH THAKUR</span>
          </a>
          <ul className="nav__links">
            <li>
              <a href="#origin" onClick={(e) => handleNavClick(e, '#origin')}>
                <b>01</b>Origin
              </a>
            </li>
            <li>
              <a href="#missions" onClick={(e) => handleNavClick(e, '#missions')}>
                <b>02</b>Missions
              </a>
            </li>
            <li>
              <a href="#arsenal" onClick={(e) => handleNavClick(e, '#arsenal')}>
                <b>03</b>Arsenal
              </a>
            </li>
            <li>
              <a href="#process" onClick={(e) => handleNavClick(e, '#process')}>
                <b>04</b>Process
              </a>
            </li>
            <li>
              <a href="#intel" onClick={(e) => handleNavClick(e, '#intel')}>
                <b>05</b>Intel &amp; Rates
              </a>
            </li>
          </ul>
          <a
            className="btn nav__cta"
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            HIRE ME <span className="arr">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
};
