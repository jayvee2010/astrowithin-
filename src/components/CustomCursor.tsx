import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);
  const [isPointer, setIsPointer] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setPosition(newPos);
      setTrail((prev) => [newPos, ...(prev.slice(0, 4))]);

      const target = e.target as HTMLElement | null;
      if (target) {
        const computed = window.getComputedStyle(target);
        const isClickable =
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') !== null ||
          target.closest('button') !== null ||
          computed.cursor === 'pointer';
        setIsPointer(isClickable);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isTouch) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* 1. Stardust Ember Spark Trails */}
      {trail.map((point, index) => (
        <div
          key={index}
          className="absolute rounded-full pointer-events-none transition-opacity duration-300"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            width: `${Math.max(2, 6 - index)}px`,
            height: `${Math.max(2, 6 - index)}px`,
            transform: 'translate(-50%, -50%)',
            backgroundColor: index % 2 === 0 ? '#E07A2E' : '#CFAF83',
            opacity: ((5 - index) / 6) * 0.45,
            boxShadow: '0 0 6px rgba(224, 122, 46, 0.5)',
          }}
        />
      ))}

      {/* 2. Primary Astrological Cursor: 8-Pointed Celestial Gold Star with Concentric Navagraha Orbit */}
      <div
        className="absolute pointer-events-none transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div
          className={`relative flex items-center justify-center transition-all duration-300 ${
            isPointer ? 'scale-135 rotate-45' : 'scale-100 rotate-0'
          }`}
        >
          {/* Subtle Outer Rotating Celestial Ring */}
          <div
            className={`rounded-full border border-[#CFAF83]/50 flex items-center justify-center transition-all duration-300 ${
              isPointer
                ? 'w-10 h-10 border-[#E07A2E] shadow-[0_0_18px_rgba(224,122,46,0.6)]'
                : 'w-8 h-8 shadow-[0_0_10px_rgba(207,175,131,0.35)]'
            }`}
          >
            {/* 4 Cardinal Tick Marks (Armillary astrolabe notches) */}
            <span className="absolute -top-1 w-0.5 h-1.5 bg-[#CFAF83]" />
            <span className="absolute -bottom-1 w-0.5 h-1.5 bg-[#CFAF83]" />
            <span className="absolute -left-1 h-0.5 w-1.5 bg-[#CFAF83]" />
            <span className="absolute -right-1 h-0.5 w-1.5 bg-[#CFAF83]" />
          </div>

          {/* Center 8-pointed Inked Gold Star (Nakshatra Diamond Star) */}
          <svg
            viewBox="0 0 24 24"
            className={`absolute w-5 h-5 transition-colors duration-300 ${
              isPointer ? 'text-[#E07A2E]' : 'text-[#F6ECDD]'
            }`}
          >
            {/* Primary Diamond 4 points */}
            <path
              d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z"
              fill="currentColor"
            />
            {/* Diagonal 4 smaller points */}
            <path
              d="M12 5L13.5 10.5L19 12L13.5 13.5L12 19L10.5 13.5L5 12L10.5 10.5L12 5Z"
              fill="#CFAF83"
              opacity="0.8"
            />
            {/* Center Solar Core */}
            <circle cx="12" cy="12" r="1.5" fill="#E07A2E" />
          </svg>

          {/* Hover Pulsing Solar Flare Halo */}
          {isPointer && (
            <div className="absolute w-12 h-12 rounded-full border border-[#E07A2E]/40 animate-ping opacity-60 pointer-events-none" />
          )}
        </div>
      </div>
    </div>
  );
};
