import React from 'react';
import { BalloonEntity, BalloonType } from '../types';
import { Star, Snowflake, Bomb, Coins } from 'lucide-react';

interface BalloonProps {
  data: BalloonEntity;
}

const Balloon: React.FC<BalloonProps> = ({ data }) => {
  if (data.isPopped) return null;

  const isSpecial = data.type !== BalloonType.NORMAL;

  // Icon for special balloons
  const getIcon = () => {
    switch (data.type) {
      case BalloonType.GOLD: return <Coins className="text-white w-6 h-6 animate-pulse" />;
      case BalloonType.BOMB: return <Bomb className="text-white w-6 h-6" />;
      case BalloonType.FREEZE: return <Snowflake className="text-white w-6 h-6 animate-spin-slow" />;
      case BalloonType.STAR: return <Star className="text-white w-6 h-6" />;
      default: return null;
    }
  };

  return (
    <div
      className="absolute flex flex-col items-center justify-center select-none will-change-transform"
      style={{
        left: `${data.x}%`,
        top: `${data.y}%`,
        transform: `scale(${data.scale})`,
        width: '80px',
        height: '100px',
      }}
    >
      {/* Balloon Shape using SVG for crisp edges */}
      <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-lg">
        {/* String */}
        <line x1="50" y1="100" x2="50" y2="120" stroke="white" strokeWidth="2" opacity="0.6" />
        {/* Main Body */}
        <path
          d="M 50 100 C 10 100 0 50 5 30 C 10 5 30 0 50 0 C 70 0 90 5 95 30 C 100 50 90 100 50 100 Z"
          fill={data.color}
        />
        {/* Shine/Reflection */}
        <ellipse cx="30" cy="25" rx="10" ry="15" fill="white" opacity="0.3" transform="rotate(-30 30 25)" />
        {/* Knot */}
        <polygon points="45,100 55,100 50,105" fill={data.color} />
      </svg>

      {/* Content Overlay */}
      <div className="absolute top-1/3 left-0 right-0 flex flex-col items-center justify-center -translate-y-2">
        {isSpecial && <div className="mb-1">{getIcon()}</div>}
        <span className="text-white font-bold text-lg drop-shadow-md font-mono">
          {data.question}
        </span>
      </div>
    </div>
  );
};

export default React.memo(Balloon);