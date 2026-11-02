import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    { text: 'REACT', isJp: false },
    { text: 'NEXT.JS', isJp: false },
    { text: '開発者', isJp: true },
    { text: 'THREE.JS', isJp: false },
    { text: 'WEBGL', isJp: false },
    { text: 'NODE', isJp: false },
    { text: '全力', isJp: true },
    { text: 'TYPESCRIPT', isJp: false },
    { text: 'PYTHON', isJp: false },
    { text: 'MOTION', isJp: false },
    { text: '完成', isJp: true },
  ];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((item, index) => (
          <span key={`m1-${index}`} className={item.isJp ? 'jp' : ''}>
            {item.text}
          </span>
        ))}
        {items.map((item, index) => (
          <span key={`m2-${index}`} className={item.isJp ? 'jp' : ''}>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
};
