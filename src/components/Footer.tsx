import React from 'react';

interface FooterProps {
  onBackToTop?: () => void;
  isProjectView?: boolean;
  onBackToMissions?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBackToTop, isProjectView, onBackToMissions }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap footer__in">
        <span className="end">完</span>
        <span className="mono">
          © <span id="yr">{currentYear}</span> Ayush Thakur — Drawn in ink, built in code.
        </span>
        {isProjectView ? (
          <a
            className="mono"
            href="#missions"
            onClick={(e) => {
              e.preventDefault();
              onBackToMissions?.();
            }}
          >
            ← All missions
          </a>
        ) : (
          <a
            className="mono"
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              onBackToTop?.();
            }}
          >
            Back to cover ↑
          </a>
        )}
      </div>
    </footer>
  );
};
