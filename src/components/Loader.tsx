import React, { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete?: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);
  const [dismissing, setDismissing] = useState(false);

  useEffect(() => {
    // Check if user already saw loader this session
    let hasSeen = false;
    try {
      hasSeen = sessionStorage.getItem('seenLoader') === '1';
      if (!hasSeen) sessionStorage.setItem('seenLoader', '1');
    } catch {
      // Storage unavailable
    }

    if (hasSeen) {
      setVisible(false);
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      setDismissing(true);
      const endTimer = setTimeout(() => {
        setVisible(false);
        onComplete?.();
      }, 580);
      return () => clearTimeout(endTimer);
    }, 900);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      className={`loader ${dismissing ? 'dismissing' : ''}`}
      id="loader"
      aria-hidden="true"
      style={{
        transition: dismissing ? 'clip-path 0.58s cubic-bezier(0.2, 0.9, 0.2, 1)' : 'none',
        clipPath: dismissing ? 'inset(0 0 100% 0)' : 'inset(0 0 0 0)'
      }}
    >
      <div className="loader__inner">
        <div className="loader__jp">第一話</div>
        <div className="loader__en">CHAPTER 01 · LOADING</div>
        <div className="loader__bar">
          <i />
        </div>
      </div>
    </div>
  );
};
