import React from 'react';

interface IconProps {
  name: string;
}

export const SkillIcon: React.FC<IconProps> = ({ name }) => {
  switch (name) {
    case 'react':
      return (
        <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="2" />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </svg>
      );
    case 'next':
      return (
        <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M9 16V8l7 9" />
          <path d="M15 8v5" />
        </svg>
      );
    case 'three':
      return (
        <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2 3 7v10l9 5 9-5V7z" />
          <path d="M3 7l9 5 9-5M12 12v10" />
        </svg>
      );
    case 'ts':
      return (
        <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" />
          <path d="M7 10h6M10 10v8M17 11c-1-1-3-1-3 .5S17 13 17 15s-2.5 2-3.5 1" />
        </svg>
      );
    case 'js':
      return (
        <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" />
          <path d="M10 9v6.5c0 1.5-2 2-3 1M17 10c-1-1-3-1-3 .5S17 12 17 14s-2.5 2-3.5 1" />
        </svg>
      );
    case 'node':
      return (
        <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2 3 7v10l9 5 9-5V7z" />
          <path d="M9 9v6M9 9l6 6V9" />
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3c-4 0-4 2-4 3v2h4v1H6c-2 0-3 1.5-3 4s1 4 3 4h2v-3c0-1.5 1-2.5 2.5-2.5h3c1.5 0 2.5-1 2.5-2.5V6c0-1.5-1-3-4-3z" />
          <path d="M12 21c4 0 4-2 4-3v-2h-4v-1h6c2 0 3-1.5 3-4s-1-4-3-4h-2" />
        </svg>
      );
    case 'motion':
      return (
        <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 20V4l8 8 8-8v16" />
          <path d="M4 20l8-8 8 8" />
        </svg>
      );
    case 'css':
      return (
        <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 3l1.6 17L12 22l6.4-2L20 3z" />
          <path d="M8 8h8l-.5 6-3.5 1-3.5-1-.2-2" />
        </svg>
      );
    default:
      return null;
  }
};
