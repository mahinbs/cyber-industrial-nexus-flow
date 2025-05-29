
import React from 'react';

interface ParticleSystemProps {
  type?: 'bubbles' | 'steam' | 'sparks' | 'industrial';
  count?: number;
  color?: string;
}

export const ParticleSystem: React.FC<ParticleSystemProps> = ({
  type = 'bubbles',
  count = 15,
  color = 'cyan'
}) => {
  const colorClasses = {
    cyan: 'bg-cyan-400/40',
    blue: 'bg-blue-400/40',
    green: 'bg-green-400/40',
    orange: 'bg-orange-400/40',
    purple: 'bg-purple-400/40'
  };

  const getParticleStyles = (index: number) => {
    const baseStyles = {
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${4 + Math.random() * 4}s`
    };

    switch (type) {
      case 'bubbles':
        return {
          ...baseStyles,
          bottom: '-10px',
          width: `${4 + Math.random() * 8}px`,
          height: `${4 + Math.random() * 8}px`
        };
      case 'steam':
        return {
          ...baseStyles,
          bottom: '20%',
          width: `${8 + Math.random() * 16}px`,
          height: `${20 + Math.random() * 40}px`,
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
        };
      case 'sparks':
        return {
          ...baseStyles,
          top: `${20 + Math.random() * 60}%`,
          width: '2px',
          height: '2px'
        };
      default:
        return baseStyles;
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${colorClasses[color as keyof typeof colorClasses]} animate-float opacity-60`}
          style={getParticleStyles(i)}
        />
      ))}
    </div>
  );
};
