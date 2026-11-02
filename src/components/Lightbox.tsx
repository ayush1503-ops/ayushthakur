import React, { useEffect } from 'react';

interface LightboxProps {
  imageSrc: string | null;
  imageAlt: string;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ imageSrc, imageAlt, onClose }) => {
  useEffect(() => {
    if (!imageSrc) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [imageSrc, onClose]);

  if (!imageSrc) return null;

  return (
    <div
      className="lb on"
      id="lb"
      role="dialog"
      aria-label="Screenshot preview"
      onClick={onClose}
    >
      <span className="x" onClick={onClose}>
        ✕
      </span>
      <img
        src={imageSrc}
        alt={imageAlt}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};
